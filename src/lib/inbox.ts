import type { Comment, Conversation, PlatformId } from "@/types";

/**
 * Gelen Kutusu görünümleri store'dan türetilir (spec §46): yanıtlanan yorum
 * kendiliğinden "yanıtlananlar"a geçer, rozet sayısı düşer.
 */

const time = (iso: string | undefined) => (iso ? new Date(iso).getTime() : 0);

/** Yanıt bekleyenler önce (en yeni üstte), yanıtlananlar sonra (son yanıt üstte). */
export const commentsForPlatform = (comments: Comment[], platform: PlatformId) => {
  const onPlatform = comments.filter((comment) => comment.platform === platform);
  return {
    pending: onPlatform
      .filter((comment) => !comment.reply)
      .toSorted((a, b) => time(b.createdAt) - time(a.createdAt)),
    answered: onPlatform
      .filter((comment) => comment.reply)
      .toSorted((a, b) => time(b.reply?.sentAt) - time(a.reply?.sentAt)),
  };
};

export const lastMessage = (conversation: Conversation) => conversation.messages.at(-1);

/** En son mesajlaşılan konuşma üstte. */
export const conversationsForPlatform = (conversations: Conversation[], platform: PlatformId) =>
  conversations
    .filter((conversation) => conversation.platform === platform)
    .toSorted((a, b) => time(lastMessage(b)?.sentAt) - time(lastMessage(a)?.sentAt));

/** Son mesaj müşteriden geldiyse yanıt sırası markada: AI önerisi gösterilir. */
export const awaitsBrandReply = (conversation: Conversation) =>
  lastMessage(conversation)?.from === "customer";
