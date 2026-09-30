import { FALLBACK_SECTOR_ID, SECTOR_DATASETS } from "@/mock/sectors";
import { addDays, minutesAgo, resolveRelativeTime } from "@/lib/time";
import type {
  AgentActivity,
  AnalyticsBaseline,
  BrandProfile,
  Comment,
  Conversation,
  MediaAsset,
  MediaTips,
  Post,
  PostSuggestion,
  RelativeTime,
  SectorDataset,
  SectorId,
  SectorSelection,
  SeedPost,
  SeedSuggestion,
  SuggestionAlternatives,
  SuggestionStage,
  Trend,
} from "@/types";

/** Seçilen sektör için yüklenecek veri. Özel sektörlerde yedek veri döner (spec §13). */
export const resolveDataset = (sector: SectorSelection): SectorDataset => {
  const sectorId: SectorId = sector.kind === "preset" ? sector.id : FALLBACK_SECTOR_ID;
  const dataset = SECTOR_DATASETS[sectorId] ?? SECTOR_DATASETS[FALLBACK_SECTOR_ID];
  if (!dataset) throw new Error(`Yedek sektör verisi bulunamadı: ${FALLBACK_SECTOR_ID}`);
  return dataset;
};

export const hasDedicatedDataset = (sector: SectorSelection) =>
  sector.kind === "preset" && sector.id in SECTOR_DATASETS;

/**
 * Markanın kökenine göre değişen, store'da tutulmayan okuma verisi.
 * Yeni markanın takipçisi ve geçmişi yoktur; trendler ise pazara aittir, herkese aynıdır.
 */
export type WorkspaceContext = {
  analytics: AnalyticsBaseline;
  agentActivity: AgentActivity;
  trends: Trend[];
  mediaTips: MediaTips;
};

export const resolveWorkspaceContext = (profile: BrandProfile): WorkspaceContext => {
  const dataset = resolveDataset(profile.sector);
  const source = profile.socialPresence === "starter" ? dataset.starter : dataset;
  return {
    analytics: source.analytics,
    agentActivity: source.agentActivity,
    trends: dataset.trends,
    mediaTips: dataset.mediaTips,
  };
};

// ---------- Kişiselleştirme ----------

type Personalize = (text: string) => string;

/**
 * Mock metinlerdeki yer tutucuları kullanıcının markasıyla doldurur:
 * {brand} → "Kahve Evim", {handle} → "kahveevim" (#etiket, e-posta, URL için).
 */
const createPersonalizer = (profile: BrandProfile): Personalize => {
  const replacements: [string, string][] = [
    ["{brand}", profile.name],
    ["{handle}", profile.handle],
  ];
  return (text) => replacements.reduce((result, [from, to]) => result.replaceAll(from, to), text);
};

const personalizeAlternatives = (
  alternatives: SuggestionAlternatives,
  personalize: Personalize,
): SuggestionAlternatives => ({
  ...alternatives,
  title: alternatives.title.map(personalize),
  caption: alternatives.caption.map(personalize),
  hashtags: alternatives.hashtags.map((set) => set.map(personalize)),
  cta: alternatives.cta.map(personalize),
});

/** Görsel açıklamaları ekran okuyucuda seslendirilir; onlar da markaya uymalı. */
const personalizeMedia = (media: MediaAsset[], personalize: Personalize) =>
  media.map((asset) => ({ ...asset, alt: personalize(asset.alt) }));

// ---------- Zaman ----------

/** Öneri ve taslak zamanı geçmişe düşerse bir gün ileri alınır (ör. onboarding akşam bittiyse). */
const resolveUpcoming = (at: RelativeTime, now: Date) => {
  const resolved = resolveRelativeTime(at, now);
  return new Date(resolved).getTime() < now.getTime()
    ? addDays(new Date(resolved), 1).toISOString()
    : resolved;
};

// ---------- Dönüştürücüler ----------

type SeedContext = { now: Date; personalize: Personalize };

const toPost = (seed: SeedPost, { now, personalize }: SeedContext): Post => {
  const { at, ...rest } = seed;
  const isPublished = seed.status === "published";
  const when = isPublished ? resolveRelativeTime(at, now) : resolveUpcoming(at, now);
  // Oluşturulma zamanı: yayından birkaç gün önce, gelecekteki içerik için bugünden önce.
  const createdAt = resolveRelativeTime({ day: Math.min(at.day, 0) - 2, time: "10:00" }, now);
  return {
    ...rest,
    title: personalize(rest.title),
    caption: personalize(rest.caption),
    hashtags: rest.hashtags.map(personalize),
    cta: rest.cta && personalize(rest.cta),
    media: personalizeMedia(rest.media, personalize),
    origin: "seed",
    createdAt,
    updatedAt: createdAt,
    scheduledAt: isPublished ? undefined : when,
    publishedAt: isPublished ? when : undefined,
  };
};

const toSuggestion = (
  { suggestedAt, ...rest }: SeedSuggestion,
  stage: SuggestionStage,
  { now, personalize }: SeedContext,
): PostSuggestion => ({
  ...rest,
  stage,
  title: personalize(rest.title),
  description: personalize(rest.description),
  caption: personalize(rest.caption),
  hashtags: rest.hashtags.map(personalize),
  cta: personalize(rest.cta),
  reasoning: personalize(rest.reasoning),
  media: personalizeMedia(rest.media, personalize),
  alternatives: personalizeAlternatives(rest.alternatives, personalize),
  suggestedAt: resolveUpcoming(suggestedAt, now),
});

export type WorkspaceSeed = {
  posts: Post[];
  suggestions: PostSuggestion[];
  comments: Comment[];
  conversations: Conversation[];
};

/**
 * Göreli zamanlı mock veriyi, "şimdi"ye göre gerçek tarihli workspace verisine çevirir.
 * Onboarding bittiğinde bir kez çalışır; sonrasında tek kaynak store'lardır.
 *
 * - established: sektörün tüm geçmişi (yayınlanmış postlar, yorumlar, DM'ler).
 * - starter: sadece başlangıç paketi (ilk hafta önerileri + bir taslak). Yorum ve DM yok.
 */
export const buildWorkspaceSeed = ({
  dataset,
  profile,
  now = new Date(),
}: {
  dataset: SectorDataset;
  profile: BrandProfile;
  now?: Date;
}): WorkspaceSeed => {
  const context: SeedContext = { now, personalize: createPersonalizer(profile) };

  if (profile.socialPresence === "starter") {
    return {
      posts: dataset.starter.drafts.map((seed) => toPost(seed, context)),
      suggestions: dataset.starter.suggestions.map((seed) =>
        toSuggestion(seed, "starter", context),
      ),
      comments: [],
      conversations: [],
    };
  }

  const { personalize } = context;
  return {
    posts: dataset.posts.map((seed) => toPost(seed, context)),
    suggestions: dataset.suggestions.map((seed) => toSuggestion(seed, "growth", context)),
    comments: dataset.comments.map(({ minutesAgo: ago, ...rest }) => ({
      ...rest,
      postTitle: personalize(rest.postTitle),
      text: personalize(rest.text),
      aiReply: personalize(rest.aiReply),
      createdAt: minutesAgo(ago, now),
    })),
    conversations: dataset.conversations.map(({ messages, ...rest }) => ({
      ...rest,
      aiSuggestions: rest.aiSuggestions.map(personalize),
      messages: messages.map(({ minutesAgo: ago, ...message }) => ({
        ...message,
        text: personalize(message.text),
        sentAt: minutesAgo(ago, now),
      })),
    })),
  };
};
