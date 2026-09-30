export const PLATFORM_IDS = ["instagram", "tiktok", "youtube", "x", "linkedin"] as const;
export type PlatformId = (typeof PLATFORM_IDS)[number];

/** Bir içeriğin platformdaki biçimi. Hangi platformun hangisini desteklediği mock/platforms'ta. */
export type ContentFormat = "post" | "carousel" | "reel" | "story" | "video" | "short";

export type AspectRatio = "1:1" | "4:5" | "9:16" | "16:9";

/**
 * Bağlanan hesabın geçmişi; o platform için hangi verinin yükleneceğini belirler:
 * - established: kullanıcının zaten kullandığı hesap → sektörün geçmişli verisi
 * - starter: yeni açılan hesap → sektörün başlangıç önerileri
 */
export type PlatformHistory = "established" | "starter";

/** Kullanıcının bağladığı sosyal medya hesabı (mock bağlantı). */
export type SocialAccount = {
  platform: PlatformId;
  history: PlatformHistory;
  handle: string;
  displayName: string;
  followers: number;
  connectedAt: string;
};

/** Sosyal medyadaki bir kişi: yorum yazan, DM atan. */
export type SocialUser = {
  name: string;
  handle: string;
  avatarUrl?: string;
};
