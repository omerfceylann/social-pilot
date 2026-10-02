import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const healthBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Yoga, nefes ve beslenmeyle dengeli bir yaşam stüdyosu.",
  audience: {
    summary: "Stresini azaltmak ve sağlıklı alışkanlık edinmek isteyen çalışan yetişkinler",
    ageRange: [26, 50],
    description:
      "Masa başı çalışan, uyku ve stres sorunu yaşayan; küçük ama sürdürülebilir alışkanlıklarla kendine iyi gelmek isteyen kişiler.",
  },
  personality: ["trustworthy", "minimal", "friendly"],
  tone: ["Sakin", "Şefkatli", "Bilgilendirici"],
  contentStyles: ["educational", "communityFocused", "storytelling", "behindTheScenes"],
  goals: ["community", "awareness", "sales"],
  rules: {
    bannedWords: ["tedavi eder", "kesin çözüm", "detoks mucizesi", "zayıflatır"],
    preferredWords: ["denge", "nefes", "alışkanlık", "kendine iyi gel"],
    emojiUsage: "minimal",
    captionLength: "medium",
    maxHashtags: 5,
    ctaStyle: "soft",
    customRules: [
      "Tıbbi tavsiye verme, gerekiyorsa doktora yönlendir",
      "Beden ve kilo üzerinden konuşma, his ve alışkanlık üzerinden konuş",
      "Her seviyeye uygun alternatif hareket öner",
    ],
  },
};
