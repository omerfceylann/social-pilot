import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const beautyBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Cilt bakımı, makyaj ve tırnak için sakin bir güzellik stüdyosu.",
  audience: {
    summary: "Kendine zaman ayırmak isteyen, doğal görünümü seven kadınlar",
    ageRange: [24, 45],
    description:
      "Cilt bakımında bilinçli, işlem öncesi uzmanı tanımak isteyen; özel günler için makyaj ve düzenli tırnak bakımı yaptıran danışanlar.",
  },
  personality: ["premium", "friendly", "trustworthy"],
  tone: ["Zarif", "Sakinleştirici", "Bilgilendirici"],
  contentStyles: ["educational", "behindTheScenes", "storytelling", "promotional"],
  goals: ["sales", "awareness", "community"],
  rules: {
    bannedWords: ["kusursuz", "anında genç", "mucize", "kalıcı çözüm"],
    preferredWords: ["bakım", "kendine zaman", "doğal görünüm", "uzman"],
    emojiUsage: "minimal",
    captionLength: "medium",
    maxHashtags: 6,
    ctaStyle: "soft",
    visualStyle: "Yumuşak ışık, nötr tonlar, yakın plan doku çekimleri",
    customRules: [
      "Önce/sonra paylaşımlarında danışandan izin alındığını belirt",
      "Tıbbi vaat verme, sonuçlar kişiden kişiye değişir de",
      "Kullanılan ürünlerin içeriklerini sade dille açıkla",
    ],
  },
};
