import type { PlatformId } from "./platform";

export const SECTOR_IDS = [
  "restaurant",
  "ecommerce",
  "beauty",
  "fitness",
  "technology",
  "education",
  "realEstate",
  "localService",
  "fashion",
  "health",
  "automotive",
  "travel",
] as const;
export type SectorId = (typeof SECTOR_IDS)[number];

/** Hazır sektörlerden biri ya da "Diğer" ile yazılan özel sektör (spec §13). */
export type SectorSelection = { kind: "preset"; id: SectorId } | { kind: "custom"; label: string };

export const BRAND_PERSONALITIES = [
  "friendly",
  "professional",
  "premium",
  "energetic",
  "minimal",
  "playful",
  "trustworthy",
  "bold",
] as const;
export type BrandPersonality = (typeof BRAND_PERSONALITIES)[number];

export const CONTENT_STYLES = [
  "educational",
  "promotional",
  "entertaining",
  "storytelling",
  "behindTheScenes",
  "communityFocused",
  "productFocused",
  "trendFocused",
] as const;
export type ContentStyle = (typeof CONTENT_STYLES)[number];

export const BRAND_GOALS = [
  "engagement",
  "followers",
  "sales",
  "awareness",
  "consistency",
  "quality",
  "community",
] as const;
export type BrandGoal = (typeof BRAND_GOALS)[number];

export type EmojiUsage = "none" | "minimal" | "moderate" | "rich";
export type CaptionLength = "short" | "medium" | "long";
export type CtaStyle = "none" | "soft" | "direct";

/** İçerik üretirken uyulacak kurallar (spec §11, §30). Hepsi sonradan düzenlenebilir. */
export type BrandRules = {
  bannedWords: string[];
  preferredWords: string[];
  emojiUsage: EmojiUsage;
  captionLength: CaptionLength;
  maxHashtags: number;
  ctaStyle: CtaStyle;
  visualStyle: string;
  /** Serbest metin kurallar, ör. "Agresif satış dili kullanma". */
  customRules: string[];
};

export type BrandAudience = {
  summary: string;
  ageRange: [number, number];
  description: string;
};

export type BrandProfile = {
  name: string;
  handle: string;
  sector: SectorSelection;
  country: string;
  language: string;
  website?: string;
  /** Tek cümlelik marka tanımı. */
  tagline: string;
  audience: BrandAudience;
  personality: BrandPersonality[];
  /** Ses tonu sıfatları, ör. "Sıcak", "Samimi", "Kısa". */
  tone: string[];
  contentStyles: ContentStyle[];
  goals: BrandGoal[];
  rules: BrandRules;
  /**
   * Onboarding'de "Kullandığın platformlar" adımında seçilenler. Bu platformlar
   * bağlandığında geçmişli veri, diğerleri yeni hesap (başlangıç) verisi alır.
   */
  usedPlatforms: PlatformId[];
  /** Markayı sıfırdan mı kurdu, mevcut markasını mı getirdi (spec §10). */
  origin: "new" | "existing";
};

/**
 * Sektörün önerdiği marka varsayılanları (ton, kurallar, hedef kitle…).
 * Kimlik (ad, kullanıcı adı, website, sektör, köken) her zaman kullanıcıdan gelir;
 * bu yüzden tipte yok ve sektör verisi yanlışlıkla bir marka adı taşıyamaz.
 */
export type BrandDefaults = Omit<
  BrandProfile,
  "name" | "handle" | "website" | "sector" | "origin" | "usedPlatforms"
>;
