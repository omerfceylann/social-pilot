"use client";

import { useMemo } from "react";
import { activeSuggestions, draftsByRecency, postsByStatus, rankSuggestions } from "@/lib/content";
import { getPostAnalytics } from "@/services/analyticsService";
import { useContent } from "@/store/useContent";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS, type PostAnalytics } from "@/types";
import { useWorkspaceContext } from "./useWorkspaceContext";

export const CONTENT_TABS = ["suggested", "drafts", "scheduled", "published"] as const;
export type ContentTab = (typeof CONTENT_TABS)[number];

export const isContentTab = (value: string | null): value is ContentTab =>
  CONTENT_TABS.some((tab) => tab === value);

/**
 * İçerikler sayfasının dört listesi (spec §17). Hepsi aynı store'dan türetilir:
 * bir taslak yayınlanınca kendiliğinden "Yayınlanan"a geçer.
 */
export const useContentLibrary = () => {
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);
  const usedSuggestionIds = useContent((state) => state.usedSuggestionIds);
  const accounts = useSocialAccounts((state) => state.accounts);
  const context = useWorkspaceContext();

  const connected = useMemo(() => PLATFORM_IDS.filter((id) => id in accounts), [accounts]);

  const lists = useMemo(
    () => ({
      suggested: activeSuggestions(suggestions, usedSuggestionIds, connected).toSorted(
        rankSuggestions,
      ),
      drafts: draftsByRecency(posts),
      scheduled: postsByStatus(posts, "scheduled"),
      published: postsByStatus(posts, "published"),
    }),
    [connected, posts, suggestions, usedSuggestionIds],
  );

  /** Yayınlananların performansı; satırda küçük bir özet olarak gösterilir. */
  const analytics = useMemo(() => {
    const byId = new Map<string, PostAnalytics>();
    if (!context) return byId;
    for (const post of lists.published) {
      const result = getPostAnalytics(post, context.analytics);
      if (result) byId.set(post.id, result);
    }
    return byId;
  }, [context, lists.published]);

  const counts: Record<ContentTab, number> = {
    suggested: lists.suggested.length,
    drafts: lists.drafts.length,
    scheduled: lists.scheduled.length,
    published: lists.published.length,
  };

  return { ...lists, counts, analytics, connected };
};
