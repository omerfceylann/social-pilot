import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Comment, Conversation, MessageStatus } from "@/types";
import { persistOptions } from "./persist";

type InboxState = {
  comments: Comment[];
  conversations: Conversation[];
  /** İlk yorumları gelmiş kullanıcı postları; aynı posta iki kez yorum gelmez. */
  reactedPostIds: string[];

  addPlatformData: (data: { comments: Comment[]; conversations: Conversation[] }) => void;
  addFirstReactions: (postId: string, comments: Comment[]) => void;
  replyToComment: (id: string, text: string, edited: boolean) => void;
  /** Gönderilen mesajın id'sini döner; durum (iletildi/görüldü) sonradan güncellenir. */
  sendMessage: (conversationId: string, text: string) => string;
  setMessageStatus: (conversationId: string, messageId: string, status: MessageStatus) => void;
  markConversationRead: (conversationId: string) => void;
  reset: () => void;
};

export const useInbox = create<InboxState>()(
  persist(
    (set) => ({
      comments: [],
      conversations: [],
      reactedPostIds: [],

      addPlatformData: (data) =>
        set((state) => ({
          comments: [...state.comments, ...data.comments],
          conversations: [...state.conversations, ...data.conversations],
        })),

      addFirstReactions: (postId, comments) =>
        set((state) => ({
          comments: [...comments, ...state.comments],
          reactedPostIds: [...state.reactedPostIds, postId],
        })),

      replyToComment: (id, text, edited) =>
        set(({ comments }) => ({
          comments: comments.map((comment) =>
            comment.id === id
              ? { ...comment, reply: { text, edited, sentAt: new Date().toISOString() } }
              : comment,
          ),
        })),

      sendMessage: (conversationId, text) => {
        const messageId = crypto.randomUUID();
        set(({ conversations }) => ({
          conversations: conversations.map((conversation) =>
            conversation.id === conversationId
              ? {
                  ...conversation,
                  unread: false,
                  messages: [
                    ...conversation.messages,
                    {
                      id: messageId,
                      from: "brand",
                      text,
                      sentAt: new Date().toISOString(),
                      status: "sent",
                    },
                  ],
                }
              : conversation,
          ),
        }));
        return messageId;
      },

      setMessageStatus: (conversationId, messageId, status) =>
        set(({ conversations }) => ({
          conversations: conversations.map((conversation) =>
            conversation.id === conversationId
              ? {
                  ...conversation,
                  messages: conversation.messages.map((message) =>
                    message.id === messageId ? { ...message, status } : message,
                  ),
                }
              : conversation,
          ),
        })),

      markConversationRead: (conversationId) =>
        set(({ conversations }) => ({
          conversations: conversations.map((conversation) =>
            conversation.id === conversationId ? { ...conversation, unread: false } : conversation,
          ),
        })),

      reset: () => set({ comments: [], conversations: [], reactedPostIds: [] }),
    }),
    persistOptions("inbox"),
  ),
);
