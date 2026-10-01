"use client";

import { useMemo } from "react";
import { useInbox } from "@/store/useInbox";
import { useSocialAccounts } from "@/store/useSocialAccounts";

/**
 * Gelen Kutusu rozeti: bağlı platformlardaki yanıtlanmamış yorumlar + okunmamış DM'ler.
 * Store'dan türetilir; bir yorum yanıtlanınca rozet kendiliğinden azalır.
 */
export const useInboxBadge = () => {
  const comments = useInbox((state) => state.comments);
  const conversations = useInbox((state) => state.conversations);
  const accounts = useSocialAccounts((state) => state.accounts);

  return useMemo(() => {
    const isConnected = (platform: string) => platform in accounts;
    const pendingComments = comments.filter(
      (comment) => !comment.reply && isConnected(comment.platform),
    ).length;
    const unreadMessages = conversations.filter(
      (conversation) => conversation.unread && isConnected(conversation.platform),
    ).length;
    return pendingComments + unreadMessages;
  }, [comments, conversations, accounts]);
};
