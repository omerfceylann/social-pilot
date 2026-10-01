import type { AspectRatio, ContentFormat, PlatformId } from "@/types";

export type PlatformMeta = {
  id: PlatformId;
  name: string;
  formats: ContentFormat[];
  /** Bu platformda ilk seçilecek biçim. */
  defaultFormat: ContentFormat;
  /** "Hesap Oluştur" butonunun açtığı resmi sayfa (spec §16). */
  signupUrl: string;
  /** Kullanıcı adı doğrulaması: mock bağlantı sadece geçerli formatı kabul eder. */
  handlePattern: RegExp;
  /** YouTube'da DM yok; gelen kutusunda boş durum gösterilir. */
  supportsDirectMessages: boolean;
  captionLimit: number;
  /** Platformun marka rengi; Gelen Kutusu'nda aktif platform göstergesi bu renkte. */
  color: string;
};

export const PLATFORMS: Record<PlatformId, PlatformMeta> = {
  instagram: {
    id: "instagram",
    name: "Instagram",
    formats: ["post", "carousel", "reel", "story"],
    defaultFormat: "post",
    signupUrl: "https://www.instagram.com/accounts/emailsignup/",
    handlePattern: /^[a-z0-9._]{1,30}$/i,
    supportsDirectMessages: true,
    captionLimit: 2200,
    color: "#E1306C",
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    formats: ["video"],
    defaultFormat: "video",
    signupUrl: "https://www.tiktok.com/signup",
    handlePattern: /^[a-z0-9._]{2,24}$/i,
    supportsDirectMessages: true,
    captionLimit: 2200,
    color: "#FE2C55",
  },
  youtube: {
    id: "youtube",
    name: "YouTube",
    formats: ["video", "short"],
    defaultFormat: "short",
    signupUrl: "https://www.youtube.com/create_channel",
    handlePattern: /^[a-z0-9._-]{3,30}$/i,
    supportsDirectMessages: false,
    captionLimit: 5000,
    color: "#FF0033",
  },
  x: {
    id: "x",
    name: "X",
    formats: ["post"],
    defaultFormat: "post",
    signupUrl: "https://x.com/i/flow/signup",
    handlePattern: /^[a-z0-9_]{1,15}$/i,
    supportsDirectMessages: true,
    captionLimit: 280,
    // X'in rengi siyah/beyaz: temanın metin rengini kullanır, iki modda da görünür.
    color: "var(--color-fg)",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    formats: ["post", "carousel", "video"],
    defaultFormat: "post",
    signupUrl: "https://www.linkedin.com/signup",
    handlePattern: /^[a-z0-9-]{3,100}$/i,
    supportsDirectMessages: true,
    captionLimit: 3000,
    color: "#0A66C2",
  },
};

/** Biçimin önizlemede kullandığı en-boy oranı. */
export const FORMAT_ASPECT: Record<ContentFormat, AspectRatio> = {
  post: "4:5",
  carousel: "4:5",
  reel: "9:16",
  story: "9:16",
  video: "16:9",
  short: "9:16",
};

/** TikTok videosu dikeydir; YouTube "video" yataydır. */
export const aspectFor = (platform: PlatformId, format: ContentFormat): AspectRatio => {
  if (platform === "tiktok") return "9:16";
  if (platform === "x" || platform === "linkedin") return format === "video" ? "16:9" : "1:1";
  return FORMAT_ASPECT[format];
};
