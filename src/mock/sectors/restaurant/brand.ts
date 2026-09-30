import type { BrandProfile } from "@/types";

export const restaurantBrand: BrandProfile = {
  name: "Sokak Kahvesi",
  handle: "sokakkahvesi.ist",
  sector: { kind: "preset", id: "restaurant" },
  country: "Türkiye",
  language: "Türkçe",
  website: "sokakkahvesi.com.tr",
  tagline: "Kadıköy'de üç şubeli specialty kahve ve kahvaltı durağı.",
  audience: {
    summary: "Kahve tutkunları, genç profesyoneller ve öğrenciler",
    ageRange: [20, 38],
    description:
      "Hafta içi işe giderken kahve alan, hafta sonu arkadaşlarıyla uzun kahvaltı yapan, mahalle mekânlarını keşfetmeyi seven İstanbullular.",
  },
  personality: ["friendly", "premium", "minimal"],
  tone: ["Sıcak", "Samimi", "Kısa"],
  contentStyles: ["behindTheScenes", "productFocused", "communityFocused", "educational"],
  goals: ["engagement", "community", "consistency"],
  rules: {
    bannedWords: ["ucuz", "kaçırma", "son şans", "bedava"],
    preferredWords: ["taze", "el yapımı", "demleme", "mahalle"],
    emojiUsage: "minimal",
    captionLength: "short",
    maxHashtags: 5,
    ctaStyle: "soft",
    visualStyle: "Doğal ışık, sıcak tonlar, ahşap ve seramik dokular",
    customRules: [
      "Agresif satış dili kullanma",
      "Caption'lar kısa olsun",
      "En fazla 5 hashtag",
      "Emojiyi az kullan",
    ],
  },
  activePlatforms: ["instagram", "tiktok", "youtube", "x", "linkedin"],
  origin: "existing",
};
