import type {
  AgentActivity,
  CalendarStatus,
  Comment,
  PerformanceTier,
  PlatformId,
  Post,
  PostStatus,
  PostAnalytics,
  PostSuggestion,
} from "@/types";
import { PLATFORMS } from "@/mock/platforms";

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

// ---------- Paylaşmadan önce kontrol ----------

export type PublishProblem = "needsMedia" | "needsCaption" | "captionTooLong";

/** X ve LinkedIn'de düz metin gönderi olur; diğer platform ve biçimler medyasız paylaşılamaz. */
const requiresMedia = (post: Post) =>
  !((post.platform === "x" || post.platform === "linkedin") && post.format === "post");

/** Paylaşmayı engelleyen ilk sorun; yoksa null. Arayüz koda göre mesaj seçer. */
export const findPublishProblem = (post: Post): PublishProblem | null => {
  if (requiresMedia(post) && post.media.length === 0) return "needsMedia";
  if (!post.caption.trim() && post.media.length === 0) return "needsCaption";
  if (post.caption.length > PLATFORMS[post.platform].captionLimit) return "captionTooLong";
  return null;
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
