"use client";

import { useMemo } from "react";
import { activeSuggestions, draftsByRecency, postsByStatus, rankSuggestions } from "@/lib/content";
import { getPostAnalytics } from "@/services/analyticsService";
import { useContent } from "@/store/useContent";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS, type PlatformId, type PostAnalytics } from "@/types";
import { useWorkspaceContext } from "./useWorkspaceContext";

export const CONTENT_TABS = ["suggested", "drafts", "scheduled", "published"] as const;
export type ContentTab = (typeof CONTENT_TABS)[number];

export const isContentTab = (value: string | null): value is ContentTab =>
  CONTENT_TABS.some((tab) => tab === value);

/** null: tüm platformlar. */
export type PlatformFilter = PlatformId | null;

/**
 * İçerikler sayfasının dört listesi (spec §17). Hepsi aynı store'dan türetilir:
 * bir taslak yayınlanınca kendiliğinden "Yayınlanan"a geçer. Platform filtresi
 * dört listeye birden uygulanır; sekme sayıları da filtreli sonucu gösterir.
 */
export const useContentLibrary = (platform: PlatformFilter) => {
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);
  const usedSuggestionIds = useContent((state) => state.usedSuggestionIds);
  const accounts = useSocialAccounts((state) => state.accounts);
  const context = useWorkspaceContext();

  const connected = useMemo(() => PLATFORM_IDS.filter((id) => id in accounts), [accounts]);

  /**
   * Filtrede gösterilecek platformlar: bağlı olanlar + içeriği olanlar
   * (bağlantısı sonradan kesilen bir platformun taslakları da bulunabilsin).
   */
  const filterPlatforms = useMemo(
    () =>
      PLATFORM_IDS.filter(
        (id) => connected.includes(id) || posts.some((post) => post.platform === id),
      ),
    [connected, posts],
  );

  const lists = useMemo(() => {
    const matches = (item: { platform: PlatformId }) =>
      platform === null || item.platform === platform;
    const visiblePosts = posts.filter(matches);
    return {
      suggested: activeSuggestions(suggestions, usedSuggestionIds, connected)
        .filter(matches)
        .toSorted(rankSuggestions),
      drafts: draftsByRecency(visiblePosts),
      scheduled: postsByStatus(visiblePosts, "scheduled"),
      published: postsByStatus(visiblePosts, "published"),
    };
  }, [connected, platform, posts, suggestions, usedSuggestionIds]);

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

  return { ...lists, counts, analytics, connected, filterPlatforms };
};
