import type { AgentActivity, AnalyticsBaseline } from "./analytics";
import type { BrandProfile, SectorId } from "./brand";
import type { Post, PostSuggestion } from "./content";
import type { Comment, Conversation, DirectMessage } from "./inbox";
import type { Trend } from "./trend";

/**
 * Mock veride zaman "bugüne göre" yazılır; workspace oluşturulurken gerçek
 * tarihe çevrilir. Böylece demo hangi gün açılırsa açılsın takvim güncel kalır.
 */
export type RelativeTime = {
  /** Bugünden gün farkı: -3 = üç gün önce, 2 = iki gün sonra. */
  day: number;
  /** "HH:MM" */
  time: string;
};

export type SeedPost = Omit<
  Post,
  "createdAt" | "updatedAt" | "scheduledAt" | "publishedAt" | "origin" | "suggestionId"
> & {
  /** Yayınlandıysa yayın, planlandıysa plan, taslaksa hedef zamanı. */
  at: RelativeTime;
};

/** stage veride yazılmaz; önerinin hangi listeden geldiğine göre seed sırasında atanır. */
export type SeedSuggestion = Omit<PostSuggestion, "suggestedAt" | "stage"> & {
  suggestedAt: RelativeTime;
};

/** Başlangıç paketinde sadece taslak olabilir; yeni markanın yayınlanmış içeriği yoktur. */
export type SeedDraft = SeedPost & { status: "draft" };

export type SeedComment = Omit<Comment, "createdAt" | "reply"> & {
  minutesAgo: number;
};

export type SeedMessage = Omit<DirectMessage, "sentAt"> & {
  minutesAgo: number;
};

export type SeedConversation = Omit<Conversation, "messages"> & {
  messages: SeedMessage[];
};

/** Sektöre özel AI medya analizi içeriği (spec §20). */
export type MediaTips = {
  videoSummary: string;
  video: string[];
  imageSummary: string;
  image: string[];
};

/**
 * "Yeni bir marka oluşturuyorum" diyen kullanıcının boş olmayan ilk ekranı.
 * Metinlerde {brand} yer tutucusu kullanılır; kullanıcının marka adıyla doldurulur.
 * Yorum, DM ve yayınlanmış post yoktur: yeni bir hesabın geçmişi olmaz.
 */
export type StarterKit = {
  /** İlk haftaya yayılmış "bu şekilde başlayalım" önerileri. */
  suggestions: SeedSuggestion[];
  /** Düzenlenmeye hazır "bu postla başlayalım" taslakları. */
  drafts: SeedDraft[];
  /** Yeni hesap: 0 takipçi, küçük ama gerçekçi erişim. */
  analytics: AnalyticsBaseline;
  agentActivity: AgentActivity;
};

/**
 * Bir sektörün tüm mock verisi. Yeni sektör = bu tipte yeni bir nesne.
 * Kök alanlar mevcut (geçmişi olan) marka içindir; yeni marka starter'ı kullanır.
 */
export type SectorDataset = {
  sectorId: SectorId;
  brand: BrandProfile;
  starter: StarterKit;
  suggestions: SeedSuggestion[];
  posts: SeedPost[];
  trends: Trend[];
  comments: SeedComment[];
  conversations: SeedConversation[];
  analytics: AnalyticsBaseline;
  agentActivity: AgentActivity;
  mediaTips: MediaTips;
};
