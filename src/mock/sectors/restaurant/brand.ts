import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const restaurantBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Mahallenin specialty kahve ve kahvaltı durağı.",
  audience: {
    summary: "Kahve tutkunları, genç profesyoneller ve öğrenciler",
    ageRange: [20, 38],
    description:
      "Hafta içi işe giderken kahve alan, hafta sonu arkadaşlarıyla uzun kahvaltı yapan, mahalle mekânlarını keşfetmeyi seven İstanbullular.",
  },
  personality: ["friendly", "premium", "minimal"],
  tone: ["Sıcak", "İçten", "Kısa"],
  contentStyles: ["behindTheScenes", "productFocused", "communityFocused", "educational"],
  goals: ["engagement", "community", "consistency"],
  rules: {
    bannedWords: ["ucuz", "kaçırma", "son şans", "bedava"],
    preferredWords: ["taze", "el yapımı", "demleme", "mahalle"],
    emojiUsage: "minimal",
    captionLength: "short",
    maxHashtags: 5,
    ctaStyle: "soft",
    // Sadece yapılandırılmış alanlarla (emoji, uzunluk, hashtag…) ifade edilemeyen kurallar.
    customRules: ["Agresif satış dili kullanma", "Mahalle ve topluluk vurgusunu koru"],
  },
};
