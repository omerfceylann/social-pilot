import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const fashionBrandDefaults: BrandDefaults = {
  country: "Türkiye",
  language: "Türkçe",
  tagline: "Kendi atölyesinde üreten, zamansız parçalar tasarlayan kadın giyim markası.",
  audience: {
    summary: "Kaliteli, uzun ömürlü parçalara yatırım yapan kadınlar",
    ageRange: [26, 45],
    description:
      "Hızlı modadan uzaklaşan, kumaşın ve dikişin kalitesine önem veren, sade ama iddialı parçalarla kapsül gardırop kuran kadınlar.",
  },
  personality: ["premium", "minimal", "trustworthy"],
  tone: ["Zarif", "Sakin", "Kısa"],
  contentStyles: ["productFocused", "educational", "behindTheScenes", "storytelling"],
  goals: ["sales", "awareness", "quality"],
  rules: {
    bannedWords: ["ucuz", "indirim çılgınlığı", "stoklar tükenmeden", "kaçırma"],
    preferredWords: ["zamansız", "el işçiliği", "doğal kumaş", "atölye"],
    emojiUsage: "none",
    captionLength: "short",
    maxHashtags: 4,
    ctaStyle: "soft",
    visualStyle: "Nötr tonlar, doğal ışık, sade arka plan, kumaş dokusuna yakın çekimler",
    customRules: [
      "Emoji kullanma",
      "Aciliyet yaratan satış dili kullanma",
      "Kumaş ve üretim bilgisini öne çıkar",
    ],
  },
};
