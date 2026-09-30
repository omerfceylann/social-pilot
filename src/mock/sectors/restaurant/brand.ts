import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const restaurantBrandDefaults: BrandDefaults = {
  country: "Türkiye",
  language: "Türkçe",
  tagline: "Mahallenin specialty kahve ve kahvaltı durağı.",
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
};
