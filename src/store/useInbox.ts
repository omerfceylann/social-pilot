import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Comment, Conversation } from "@/types";
import { persistOptions } from "./persist";

type InboxState = {
  comments: Comment[];
  conversations: Conversation[];

  addPlatformData: (data: { comments: Comment[]; conversations: Conversation[] }) => void;
  replyToComment: (id: string, text: string, edited: boolean) => void;
  sendMessage: (conversationId: string, text: string) => void;
  markConversationRead: (conversationId: string) => void;
  reset: () => void;
};

export const useInbox = create<InboxState>()(
  persist(
    (set) => ({
      comments: [],
      conversations: [],

      addPlatformData: (data) =>
        set((state) => ({
          comments: [...state.comments, ...data.comments],
          conversations: [...state.conversations, ...data.conversations],
        })),

      replyToComment: (id, text, edited) =>
        set(({ comments }) => ({
          comments: comments.map((comment) =>
            comment.id === id
              ? { ...comment, reply: { text, edited, sentAt: new Date().toISOString() } }
              : comment,
          ),
        })),

      sendMessage: (conversationId, text) =>
        set(({ conversations }) => ({
          conversations: conversations.map((conversation) =>
            conversation.id === conversationId
              ? {
                  ...conversation,
                  unread: false,
                  messages: [
                    ...conversation.messages,
                    {
                      id: crypto.randomUUID(),
                      from: "brand",
                      text,
                      sentAt: new Date().toISOString(),
                      status: "sent",
                    },
                  ],
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

      reset: () => set({ comments: [], conversations: [] }),
    }),
    persistOptions("inbox"),
  ),
);
