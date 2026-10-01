"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { commentsForPlatform, conversationsForPlatform } from "@/lib/inbox";
import { PLATFORMS } from "@/mock/platforms";
import { useInbox } from "@/store/useInbox";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { PLATFORM_IDS, type PlatformId } from "@/types";

export const INBOX_VIEWS = ["comments", "messages"] as const;
export type InboxViewKind = (typeof INBOX_VIEWS)[number];

const isInboxView = (value: string | null): value is InboxViewKind =>
  INBOX_VIEWS.some((view) => view === value);

type InboxQuery = { platform: PlatformId; view: InboxViewKind; conversation?: string };

/**
 * Gelen Kutusu'nun durumu (spec §24–27). Seçili platform, görünüm ve açık
 * konuşma adreste tutulur: dashboard sinyali doğrudan doğru yeri açabilir,
 * geri tuşu da beklendiği gibi çalışır.
 */
export const useInboxView = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const comments = useInbox((state) => state.comments);
  const conversations = useInbox((state) => state.conversations);
  const accounts = useSocialAccounts((state) => state.accounts);

  const connected = useMemo(() => PLATFORM_IDS.filter((id) => id in accounts), [accounts]);

  const requestedPlatform = PLATFORM_IDS.find((id) => id === searchParams.get("platform"));
  const platform =
    requestedPlatform && connected.includes(requestedPlatform) ? requestedPlatform : connected[0];
  const requestedView = searchParams.get("view");
  const view: InboxViewKind = isInboxView(requestedView) ? requestedView : "comments";

  /** Platform başına bekleyen iş: yanıtlanmamış yorum + okunmamış DM. */
  const pendingByPlatform = useMemo(() => {
    const counts = new Map<PlatformId, { comments: number; messages: number }>();
    for (const id of connected) {
      counts.set(id, {
        comments: comments.filter((comment) => comment.platform === id && !comment.reply).length,
        messages: conversations.filter(
          (conversation) => conversation.platform === id && conversation.unread,
        ).length,
      });
    }
    return counts;
  }, [comments, connected, conversations]);

  const platformComments = useMemo(
    () => (platform ? commentsForPlatform(comments, platform) : { pending: [], answered: [] }),
    [comments, platform],
  );
  const platformConversations = useMemo(
    () => (platform ? conversationsForPlatform(conversations, platform) : []),
    [conversations, platform],
  );
  const activeConversation = platformConversations.find(
    (conversation) => conversation.id === searchParams.get("c"),
  );

  const navigate = useCallback(
    (query: InboxQuery) => {
      const params = new URLSearchParams({ platform: query.platform, view: query.view });
      if (query.conversation) params.set("c", query.conversation);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router],
  );

  return {
    connected,
    platform,
    view,
    supportsMessages: platform ? PLATFORMS[platform].supportsDirectMessages : false,
    pendingByPlatform,
    comments: platformComments,
    conversations: platformConversations,
    activeConversation,
    /** Platform değişince açık konuşma kapanır; görünüm korunur. */
    selectPlatform: (next: PlatformId) => navigate({ platform: next, view }),
    selectView: (next: InboxViewKind) => platform && navigate({ platform, view: next }),
    openConversation: (id: string | undefined) =>
      platform && navigate({ platform, view: "messages", conversation: id }),
  };
};
