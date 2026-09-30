import type {
  AgentActivity,
  CalendarStatus,
  Comment,
  PlatformId,
  Post,
  PostStatus,
  PostSuggestion,
} from "@/types";

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
