import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const travelBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Türkiye'nin saklı köşelerine küçük gruplarla butik turlar.",
  audience: {
    summary: "Kalabalık turlardan kaçan, yerel deneyim arayan gezginler",
    ageRange: [27, 55],
    description:
      "Yılda birkaç kısa kaçamak yapan, planlamayla uğraşmak istemeyen ama yerel lezzetleri, doğayı ve hikâyeleri keşfetmeyi seven kişiler.",
  },
  personality: ["friendly", "premium", "trustworthy"],
  tone: ["Meraklı", "Davetkâr", "Hikâyeci"],
  contentStyles: ["storytelling", "educational", "behindTheScenes", "communityFocused"],
  goals: ["sales", "awareness", "community"],
  rules: {
    bannedWords: ["ucuz tur", "son fırsat", "her şey dahil", "kaçırma"],
    preferredWords: ["keşif", "yerel", "küçük grup", "rota"],
    emojiUsage: "moderate",
    captionLength: "medium",
    maxHashtags: 6,
    ctaStyle: "soft",
    customRules: [
      "Yerel halkı izinsiz çekme, izin alınan kareleri belirt",
      "Fiyata dahil olanları ve olmayanları açıkça yaz",
      "Doğaya saygıyı ve iz bırakmamayı hatırlat",
    ],
  },
};
