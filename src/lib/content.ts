import { POPULAR_TRACKS } from "@/mock/music";
import type {
  AgentActivity,
  ContentFormat,
  MusicTrack,
  CalendarStatus,
  Comment,
  MediaAsset,
  PerformanceTier,
  PlatformId,
  Post,
  PostStatus,
  PostAnalytics,
  PostSuggestion,
} from "@/types";
import { PLATFORM_IDS } from "@/types";
import { aspectFor, PLATFORMS } from "@/mock/platforms";

/**
 * Store verisinden türetilen görünümler. Ayrı liste tutulmaz: bir post
 * yayınlandığında İçerikler, Takvim ve Analitik aynı kaynaktan okur (spec §46).
 */

export type CalendarItem = {
  id: string;
  date: string;
  platform: PlatformId;
  status: CalendarStatus;
  title: string;
  source: { kind: "post"; post: Post } | { kind: "suggestion"; suggestion: PostSuggestion };
};

const byDateDesc = (a: string | undefined, b: string | undefined) =>
  new Date(b ?? 0).getTime() - new Date(a ?? 0).getTime();

/** Yayınlananlar en yeniden eskiye; diğerleri en yakın tarihten uzağa. */
export const postsByStatus = (posts: Post[], status: PostStatus) => {
  const filtered = posts.filter((post) => post.status === status);
  return status === "published"
    ? filtered.toSorted((a, b) => byDateDesc(a.publishedAt, b.publishedAt))
    : filtered.toSorted((a, b) => -byDateDesc(a.scheduledAt, b.scheduledAt));
};

/**
 * Görünür öneriler: kullanılmamış ve platformu bağlı olanlar.
 * Hesabı bağlanmamış (ya da bağlantısı kesilmiş) platformun önerisi gösterilmez.
 */
export const activeSuggestions = (
  suggestions: PostSuggestion[],
  usedIds: string[],
  connectedPlatforms: PlatformId[],
) =>
  suggestions.filter(
    (suggestion) =>
      !usedIds.includes(suggestion.id) && connectedPlatforms.includes(suggestion.platform),
  );

const POTENTIAL_ORDER: Record<PerformanceTier, number> = { high: 0, average: 1, low: 2 };

/** Büyüme önerileri (potansiyele göre) önce, başlangıç önerileri (tarihe göre) sonra. */
export const rankSuggestions = (a: PostSuggestion, b: PostSuggestion) => {
  if (a.stage !== b.stage) return a.stage === "growth" ? -1 : 1;
  if (a.stage === "growth")
    return POTENTIAL_ORDER[a.estimate.potential] - POTENTIAL_ORDER[b.estimate.potential];
  return a.suggestedAt.localeCompare(b.suggestedAt);
};

/**
 * Sıralı önerilerden ilk `count` tanesini seçer ama platformları karıştırır:
 * önce her platformun en iyi önerisi, yer kalırsa sıradakiler. Sonuç yine
 * sıralamaya göre dizilir; en güçlü öneri hep ilk kartta kalır.
 */
export const pickAcrossPlatforms = (ranked: PostSuggestion[], count: number) => {
  const picked = new Set<PostSuggestion>();
  const platforms = new Set<PlatformId>();
  for (const suggestion of ranked) {
    if (picked.size === count) break;
    if (platforms.has(suggestion.platform)) continue;
    picked.add(suggestion);
    platforms.add(suggestion.platform);
  }
  for (const suggestion of ranked) {
    if (picked.size === count) break;
    picked.add(suggestion);
  }
  return ranked.filter((suggestion) => picked.has(suggestion));
};

/** Taslaklar en son düzenlenenden başlar: kullanıcı kaldığı yerden devam eder. */
export const draftsByRecency = (posts: Post[]) =>
  posts
    .filter((post) => post.status === "draft")
    .toSorted((a, b) => byDateDesc(a.updatedAt, b.updatedAt));

export const buildCalendarItems = (
  posts: Post[],
  suggestions: PostSuggestion[],
  usedSuggestionIds: string[],
  connectedPlatforms: PlatformId[],
): CalendarItem[] => {
  const postItems = posts.flatMap((post): CalendarItem[] => {
    const date = post.status === "published" ? post.publishedAt : post.scheduledAt;
    if (!date) return [];
    return [
      {
        id: post.id,
        date,
        platform: post.platform,
        status: post.status,
        title: post.title,
        source: { kind: "post", post },
      },
    ];
  });
  const suggestionItems = activeSuggestions(suggestions, usedSuggestionIds, connectedPlatforms).map(
    (suggestion): CalendarItem => ({
      id: suggestion.id,
      date: suggestion.suggestedAt,
      platform: suggestion.platform,
      status: "suggested",
      title: suggestion.title,
      source: { kind: "suggestion", suggestion },
    }),
  );
  return [...postItems, ...suggestionItems].toSorted((a, b) => -byDateDesc(a.date, b.date));
};

/**
 * Dashboard'daki kompakt AI Agent kartı (spec §9). Sabit sayı yok:
 * bulunan fırsat = görünür öneri, incelenen yorum = gerçek yorum sayısı.
 */
export const deriveAgentActivity = ({
  trendsAnalyzed,
  visibleSuggestions,
  comments,
}: {
  trendsAnalyzed: number;
  visibleSuggestions: PostSuggestion[];
  comments: Comment[];
}): AgentActivity => ({
  trendsAnalyzed,
  opportunitiesFound: visibleSuggestions.length,
  commentsReviewed: comments.length,
});

// ---------- Biçime göre alanlar ----------

/**
 * Bir platform + biçimde hangi alanların anlamlı olduğu. Editör, önizleme ve
 * paylaşım kontrolü bu tek kaynaktan okur (örn. Hikâye'de açıklama ve hashtag yok).
 */
export type FormatFields = {
  /** "published": platformda görünür (YouTube başlığı). "internal": sadece listelerde/takvimde. */
  title: "published" | "internal";
  /** Metin alanı ve etiketi; false ise biçimde metin yok (Hikâye, Shorts). */
  caption: false | "caption" | "text" | "description";
  hashtags: boolean;
  music: boolean;
  /** "inCaption": metnin sonuna eklenir. "linkSticker": Hikâye'de bağlantı çıkartması. */
  cta: false | "inCaption" | "linkSticker";
  media: { min: number; max: number };
};

const SINGLE_MEDIA = { min: 1, max: 1 } as const;
const OPTIONAL_MEDIA = { min: 0, max: 1 } as const;
const CAROUSEL_MEDIA = { min: 2, max: 10 } as const;

const assertNeverPlatform = (value: never): never => {
  throw new Error(`Bilinmeyen platform: ${String(value)}`);
};

export const fieldsFor = (platform: PlatformId, format: ContentFormat): FormatFields => {
  switch (platform) {
    case "instagram":
      return format === "story"
        ? {
            title: "internal",
            caption: false,
            hashtags: false,
            music: true,
            cta: "linkSticker",
            media: SINGLE_MEDIA,
          }
        : {
            title: "internal",
            caption: "caption",
            hashtags: true,
            music: true,
            cta: "inCaption",
            media: format === "carousel" ? CAROUSEL_MEDIA : SINGLE_MEDIA,
          };
    case "tiktok":
      return {
        title: "internal",
        caption: "caption",
        hashtags: true,
        music: true,
        cta: "inCaption",
        media: SINGLE_MEDIA,
      };
    case "youtube":
      return format === "short"
        ? {
            title: "published",
            caption: false,
            hashtags: true,
            music: true,
            cta: false,
            media: SINGLE_MEDIA,
          }
        : {
            title: "published",
            caption: "description",
            hashtags: true,
            music: false,
            cta: "inCaption",
            media: SINGLE_MEDIA,
          };
    case "x":
      return {
        title: "internal",
        caption: "text",
        hashtags: true,
        music: false,
        cta: false,
        media: OPTIONAL_MEDIA,
      };
    case "linkedin":
      return {
        title: "internal",
        caption: "text",
        hashtags: true,
        music: false,
        cta: "inCaption",
        media:
          format === "carousel"
            ? CAROUSEL_MEDIA
            : format === "video"
              ? SINGLE_MEDIA
              : OPTIONAL_MEDIA,
      };
    default:
      return assertNeverPlatform(platform);
  }
};

/** AI'ın bu içerik için en uygun gördüğü müzik: önce önerinin kendi seçimi. */
export const preferredMusic = (suggestion: PostSuggestion): MusicTrack =>
  suggestion.music ?? suggestion.alternatives.music[0] ?? POPULAR_TRACKS[0];

// ---------- Paylaşmadan önce kontrol ----------

export type PublishProblem = "needsMedia" | "needsMoreMedia" | "needsCaption" | "captionTooLong";

/** Paylaşmayı engelleyen ilk sorun; yoksa null. Arayüz koda göre mesaj seçer. */
export const findPublishProblem = (post: Post): PublishProblem | null => {
  const fields = fieldsFor(post.platform, post.format);
  const { min } = fields.media;
  if (min > 0 && post.media.length === 0) return "needsMedia";
  if (post.media.length < min) return "needsMoreMedia";
  if (fields.caption) {
    // Medyasız metin gönderisinde (X, LinkedIn) metin zorunlu.
    if (!post.caption.trim() && post.media.length === 0) return "needsCaption";
    if (post.caption.length > PLATFORMS[post.platform].captionLimit) return "captionTooLong";
  }
  return null;
};

// ---------- AI'ın önerdiği platformlar ----------

export type PublishTarget = { platform: PlatformId; format: ContentFormat };

/** Video biçimleri tek bir video ister; gönderi/carousel görsel ister; Hikâye ikisini de alır. */
const acceptsMediaKind = (target: PublishTarget, kind: MediaAsset["kind"]) => {
  if (target.platform === "tiktok") return kind === "video";
  switch (target.format) {
    case "reel":
    case "short":
    case "video":
      return kind === "video";
    case "post":
    case "carousel":
      return kind === "image";
    case "story":
      return true;
    default:
      return assertNeverFormat(target.format);
  }
};

const assertNeverFormat = (value: never): never => {
  throw new Error(`Bilinmeyen biçim: ${String(value)}`);
};

/** Önerinin içeriği bu hedefe hiçbir şey kaybetmeden taşınabiliyor mu? */
const carriesWithoutLoss = (suggestion: PostSuggestion, target: PublishTarget): boolean => {
  const source = fieldsFor(suggestion.platform, suggestion.format);
  const fields = fieldsFor(target.platform, target.format);
  const { media } = suggestion;

  if (media.length < fields.media.min || media.length > fields.media.max) return false;
  const aspect = aspectFor(target.platform, target.format);
  if (!media.every((item) => item.aspect === aspect && acceptsMediaKind(target, item.kind))) {
    return false;
  }

  // Kaynak biçimde gerçekten kullanılan her alan hedefte de olmalı.
  // (YouTube başlığı izleyiciye görünür; başlığı yayınlamayan bir platformda kaybolur.)
  if (source.title === "published" && fields.title !== "published") return false;
  const caption = source.caption ? suggestion.caption.trim() : "";
  const cta = source.cta ? suggestion.cta.trim() : "";
  if (caption && !fields.caption) return false;
  if (cta && !fields.cta) return false;
  if (source.hashtags && suggestion.hashtags.length > 0 && !fields.hashtags) return false;
  if (source.music && !fields.music) return false;

  const text = [caption, fields.cta === "inCaption" ? cta : ""].filter(Boolean).join("\n\n");
  return text.length <= PLATFORMS[target.platform].captionLimit;
};

/**
 * Editörde "AI önerisi" olarak işaretlenen platform + biçimler: önerinin
 * hazırlandığı yer ve içeriği eksiksiz taşıyabilen diğerleri
 * (örn. TikTok videosu ↔ Instagram Reel; Shorts'ta açıklama düşeceği için değil).
 */
export const aiRecommendedTargets = (suggestion: PostSuggestion): PublishTarget[] => {
  const own: PublishTarget = { platform: suggestion.platform, format: suggestion.format };
  // Önerinin hazırlandığı yer ilk sırada; "TikTok ve Instagram Reel" diye okunur.
  const others = PLATFORM_IDS.flatMap((platform) =>
    PLATFORMS[platform].formats
      .map((format) => ({ platform, format }))
      .filter(
        (target) =>
          !(target.platform === own.platform && target.format === own.format) &&
          carriesWithoutLoss(suggestion, target),
      ),
  );
  return [own, ...others];
};

/**
 * Mock analitik ile Gelen Kutusu tutarlı kalsın: kartta görünen yorum sayısı,
 * o posta gerçekten düşen yorumlardan az olamaz (spec §46). Yorumlar posta
 * platform + başlık ile bağlıdır.
 */
export const withInboxComments = (
  analytics: PostAnalytics,
  post: Post,
  comments: Comment[],
): PostAnalytics => {
  const received = comments.filter(
    (comment) => comment.platform === post.platform && comment.postTitle === post.title,
  ).length;
  return received > analytics.comments ? { ...analytics, comments: received } : analytics;
};

/**
 * Henüz oluşturulmamış bir öneriyi önizleme için Post biçimine çevirir (takvim
 * detayında). Store'a yazılmaz; "İçeriği oluştur" denince gerçek taslak oluşur.
 */
export const suggestionAsPost = (suggestion: PostSuggestion): Post => ({
  id: suggestion.id,
  platform: suggestion.platform,
  format: suggestion.format,
  status: "draft",
  title: suggestion.title,
  caption: suggestion.caption,
  hashtags: suggestion.hashtags,
  music: fieldsFor(suggestion.platform, suggestion.format).music
    ? preferredMusic(suggestion)
    : undefined,
  cta: suggestion.cta,
  media: suggestion.media,
  theme: suggestion.theme,
  createdAt: suggestion.suggestedAt,
  updatedAt: suggestion.suggestedAt,
  scheduledAt: suggestion.suggestedAt,
  origin: "seed",
});
