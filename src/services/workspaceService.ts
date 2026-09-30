import { FALLBACK_SECTOR_ID, SECTOR_DATASETS } from "@/mock/sectors";
import { addDays, minutesAgo, resolveRelativeTime } from "@/lib/time";
import type {
  AnalyticsBaseline,
  BrandProfile,
  Comment,
  Conversation,
  MediaAsset,
  MediaTips,
  PlatformHistory,
  PlatformId,
  Post,
  PostSuggestion,
  RelativeTime,
  SectorDataset,
  SectorId,
  SectorSelection,
  SeedPost,
  SeedSuggestion,
  SocialAccount,
  SuggestionAlternatives,
  SuggestionStage,
  Trend,
} from "@/types";
import { PLATFORM_IDS } from "@/types";

/** Seçilen sektör için yüklenecek veri. Özel sektörlerde yedek veri döner (spec §13). */
export const resolveDataset = (sector: SectorSelection): SectorDataset => {
  const sectorId: SectorId = sector.kind === "preset" ? sector.id : FALLBACK_SECTOR_ID;
  const dataset = SECTOR_DATASETS[sectorId] ?? SECTOR_DATASETS[FALLBACK_SECTOR_ID];
  if (!dataset) throw new Error(`Yedek sektör verisi bulunamadı: ${FALLBACK_SECTOR_ID}`);
  return dataset;
};

export const hasDedicatedDataset = (sector: SectorSelection) =>
  sector.kind === "preset" && sector.id in SECTOR_DATASETS;

// ---------- Platform geçmişi ----------

/**
 * Bir platform bağlandığında hangi veri yüklenecek?
 * Onboarding'de "Kullandığın platformlar" adımında seçildiyse geçmişli veri,
 * seçilmediyse (onboarding'de ya da sonradan yeni açılan hesap) başlangıç verisi.
 */
export const resolvePlatformHistory = (
  profile: BrandProfile,
  platform: PlatformId,
): PlatformHistory => (profile.usedPlatforms.includes(platform) ? "established" : "starter");

/**
 * Store'da tutulmayan, bağlı hesaplardan hesaplanan okuma verisi.
 * Takipçi ve erişim sadece geçmişli hesaplardan gelir; yeni hesaplar 0'dan başlar.
 * Trendler pazara aittir, herkese aynıdır.
 */
export type WorkspaceContext = {
  analytics: AnalyticsBaseline;
  trendsAnalyzed: number;
  trends: Trend[];
  mediaTips: MediaTips;
};

type ConnectedAccounts = Partial<Record<PlatformId, SocialAccount>>;

const combineBaseline = (
  dataset: SectorDataset,
  accounts: ConnectedAccounts,
): AnalyticsBaseline => {
  const established = PLATFORM_IDS.filter((id) => accounts[id]?.history === "established");
  const sum = (ids: readonly PlatformId[]) =>
    ids.reduce((total, id) => total + dataset.analytics.followers[id], 0);
  // Günlük erişim ve takipçi artışı, geçmişli hesapların takipçi payı kadar.
  const share = established.length > 0 ? sum(established) / Math.max(1, sum(PLATFORM_IDS)) : 0;
  // Beş anahtar açıkça yazılır: Record tipi cast'e gerek kalmadan doğrulanır.
  const byPlatform = <T>(
    pick: (id: PlatformId, isEstablished: boolean) => T,
  ): Record<PlatformId, T> => {
    const at = (id: PlatformId) => pick(id, established.includes(id));
    return {
      instagram: at("instagram"),
      tiktok: at("tiktok"),
      youtube: at("youtube"),
      x: at("x"),
      linkedin: at("linkedin"),
    };
  };

  return {
    followers: byPlatform((id, isEstablished) =>
      isEstablished ? dataset.analytics.followers[id] : 0,
    ),
    avgViews: byPlatform((id, isEstablished) =>
      isEstablished ? dataset.analytics.avgViews[id] : dataset.starter.analytics.avgViews[id],
    ),
    engagementRate:
      established.length > 0
        ? dataset.analytics.engagementRate
        : dataset.starter.analytics.engagementRate,
    dailyReach: Math.round(dataset.analytics.dailyReach * share),
    dailyFollowerGrowth: Math.round(dataset.analytics.dailyFollowerGrowth * share),
  };
};

export const resolveWorkspaceContext = (
  profile: BrandProfile,
  accounts: ConnectedAccounts,
): WorkspaceContext => {
  const dataset = resolveDataset(profile.sector);
  return {
    analytics: combineBaseline(dataset, accounts),
    trendsAnalyzed: dataset.trendsAnalyzed,
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

export type PlatformSeed = {
  posts: Post[];
  suggestions: PostSuggestion[];
  comments: Comment[];
  conversations: Conversation[];
};

/**
 * Tek bir platformun verisini, "şimdi"ye göre gerçek tarihli olarak üretir.
 * Hesap bağlandığında bir kez çalışır; sonrasında tek kaynak store'lardır.
 *
 * - established: o platformun geçmişi (postlar, büyüme önerileri, yorumlar, DM'ler)
 * - starter: sadece o platformun başlangıç önerileri; post, yorum ve DM yok
 */
export const buildPlatformSeed = ({
  dataset,
  profile,
  platform,
  history,
  now = new Date(),
}: {
  dataset: SectorDataset;
  profile: BrandProfile;
  platform: PlatformId;
  history: PlatformHistory;
  now?: Date;
}): PlatformSeed => {
  const context: SeedContext = { now, personalize: createPersonalizer(profile) };
  const onPlatform = <T extends { platform: PlatformId }>(items: T[]) =>
    items.filter((item) => item.platform === platform);

  if (history === "starter") {
    return {
      posts: [],
      suggestions: onPlatform(dataset.starter.suggestions).map((seed) =>
        toSuggestion(seed, "starter", context),
      ),
      comments: [],
      conversations: [],
    };
  }

  const { personalize } = context;
  return {
    posts: onPlatform(dataset.posts).map((seed) => toPost(seed, context)),
    suggestions: onPlatform(dataset.suggestions).map((seed) =>
      toSuggestion(seed, "growth", context),
    ),
    comments: onPlatform(dataset.comments).map(({ minutesAgo: ago, ...rest }) => ({
      ...rest,
      postTitle: personalize(rest.postTitle),
      text: personalize(rest.text),
      aiReply: personalize(rest.aiReply),
      createdAt: minutesAgo(ago, now),
    })),
    conversations: onPlatform(dataset.conversations).map(({ messages, ...rest }) => ({
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
