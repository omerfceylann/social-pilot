import type { AnalyticsBaseline } from "./analytics";
import type { BrandDefaults, SectorId } from "./brand";
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
 * Yeni açılan bir platform hesabının verisi. Yorum, DM ve yayınlanmış post yoktur:
 * yeni hesabın geçmişi olmaz. Öneriler platform alanlarına göre filtrelenir;
 * her platform için en az iki başlangıç önerisi bulunur.
 */
export type StarterKit = {
  /** Platform platform "bu şekilde başlayalım" önerileri. */
  suggestions: SeedSuggestion[];
  /** Yeni hesap: 0 takipçi, küçük ama gerçekçi erişim. */
  analytics: AnalyticsBaseline;
};

/**
 * Bir sektörün tüm mock verisi. Yeni sektör = bu tipte yeni bir nesne.
 * Kök alanlar kullanıcının zaten kullandığı platformlar içindir (geçmişli veri);
 * yeni açılan platformlar starter'ı kullanır. Veri platform platform yüklenir.
 * Tüm metinlerde {brand} (marka adı) ve {handle} (#etiket, e-posta, URL biçimi)
 * yer tutucuları kullanılır; hazır marka adı yoktur.
 */
export type SectorDataset = {
  sectorId: SectorId;
  brandDefaults: BrandDefaults;
  starter: StarterKit;
  suggestions: SeedSuggestion[];
  posts: SeedPost[];
  trends: Trend[];
  comments: SeedComment[];
  conversations: SeedConversation[];
  analytics: AnalyticsBaseline;
  /** AI Agent kartındaki "X trend analiz edildi"; pazara ait, hesaba değil. */
  trendsAnalyzed: number;
  mediaTips: MediaTips;
};
