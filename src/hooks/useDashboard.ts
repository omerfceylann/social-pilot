"use client";

import { useMemo } from "react";
import {
  activeSuggestions,
  deriveAgentActivity,
  pickAcrossPlatforms,
  postsByStatus,
  rankSuggestions,
} from "@/lib/content";
import { getAccountOverview } from "@/services/analyticsService";
import { useContent } from "@/store/useContent";
import { useInbox } from "@/store/useInbox";
import { useSession } from "@/store/useSession";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS } from "@/types";
import { useNow } from "./useNow";
import { useWorkspaceContext } from "./useWorkspaceContext";

/**
 * - noAccounts: hiç hesap bağlı değil → bağlama çağrısı
 * - starter: sadece yeni hesaplar → "Bu şekilde başlayalım"
 * - growth: en az bir geçmişli hesap → öneriler + performans
 */
export type DashboardMode = "noAccounts" | "starter" | "growth";

const RECOMMENDATION_COUNT = 3;
const METRIC_DAYS = 7;
/** Dashboard'un neyi göstereceğine dair tüm kararlar; bileşenler sadece çizer. */
export const useDashboard = () => {
  const user = useSession((state) => state.user);
  const accounts = useSocialAccounts((state) => state.accounts);
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);
  const usedSuggestionIds = useContent((state) => state.usedSuggestionIds);
  const comments = useInbox((state) => state.comments);
  const conversations = useInbox((state) => state.conversations);
  const context = useWorkspaceContext();
  const now = useNow();

  const connected = useMemo(() => PLATFORM_IDS.filter((id) => id in accounts), [accounts]);

  const visibleSuggestions = useMemo(
    () => activeSuggestions(suggestions, usedSuggestionIds, connected).toSorted(rankSuggestions),
    [suggestions, usedSuggestionIds, connected],
  );

  const mode: DashboardMode =
    connected.length === 0
      ? "noAccounts"
      : connected.some((id) => accounts[id]?.history === "established")
        ? "growth"
        : "starter";

  const signals = useMemo(() => {
    const onConnected = <T extends { platform: (typeof PLATFORM_IDS)[number] }>(items: T[]) =>
      items.filter((item) => connected.includes(item.platform));
    return {
      opportunities: visibleSuggestions.length,
      pendingComments: onConnected(comments).filter((comment) => !comment.reply).length,
      unreadMessages: onConnected(conversations).filter((conversation) => conversation.unread)
        .length,
      nextPost: postsByStatus(posts, "scheduled").find(
        (post) => post.scheduledAt && new Date(post.scheduledAt).getTime() > now,
      ),
    };
  }, [comments, connected, conversations, now, posts, visibleSuggestions.length]);

  const hasPublished = posts.some((post) => post.status === "published");
  const metrics = useMemo(
    () =>
      hasPublished && context && user
        ? getAccountOverview(posts, context.analytics, { days: METRIC_DAYS, seed: user.username })
        : null,
    [context, hasPublished, posts, user],
  );

  const agent = context
    ? deriveAgentActivity({
        trendsAnalyzed: context.trendsAnalyzed,
        visibleSuggestions,
        comments: comments.filter((comment) => connected.includes(comment.platform)),
      })
    : null;

  return {
    firstName: user?.name.split(" ")[0] ?? "",
    mode,
    // Tek platforma yığılmasın: bağlı platformlar arasında karışık (en güçlüsü ilk kartta).
    recommendations: pickAcrossPlatforms(visibleSuggestions, RECOMMENDATION_COUNT),
    signals,
    metrics,
    metricDays: METRIC_DAYS,
    agent,
    trends: context?.trends ?? [],
  };
};
