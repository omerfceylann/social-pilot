import type { PlatformId, SocialUser } from "./platform";

export type CommentIntent = "question" | "praise" | "complaint" | "purchase" | "feedback";

export type CommentReply = {
  text: string;
  sentAt: string;
  /** AI yanıtı gönderilmeden önce kullanıcı tarafından düzenlendi mi? */
  edited: boolean;
};

export type Comment = {
  id: string;
  platform: PlatformId;
  /** Yorumun yapıldığı içeriğin başlığı. */
  postTitle: string;
  author: SocialUser;
  text: string;
  createdAt: string;
  likes: number;
  intent: CommentIntent;
  /** Smart Comment Replier'ın önerdiği yanıt (spec §26). */
  aiReply: string;
  reply?: CommentReply;
};

export type MessageStatus = "sent" | "delivered" | "read";

export type DirectMessage = {
  id: string;
  from: "customer" | "brand";
  text: string;
  sentAt: string;
  /** Sadece markanın gönderdiği mesajlarda. */
  status?: MessageStatus;
};

export type Conversation = {
  id: string;
  platform: PlatformId;
  customer: SocialUser;
  messages: DirectMessage[];
  /** Sıradaki yanıt için AI önerileri; "yeniden üret" bunlar arasında döner. */
  aiSuggestions: string[];
  unread: boolean;
};
