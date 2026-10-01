import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const realEstateBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Doğru evi şeffaf süreçle bulan butik emlak danışmanlığı.",
  audience: {
    summary: "İlk evini alan çiftler ve yatırım amaçlı konut arayanlar",
    ageRange: [28, 50],
    description:
      "Mahalleyi tanımak, tapu ve kredi sürecini anlamak isteyen; ilan fotoğraflarından çok gerçek bilgiye önem veren alıcı ve kiracılar.",
  },
  personality: ["trustworthy", "professional", "friendly"],
  tone: ["Şeffaf", "Sakin", "Yol gösterici"],
  contentStyles: ["educational", "productFocused", "storytelling", "communityFocused"],
  goals: ["sales", "awareness", "followers"],
  rules: {
    bannedWords: ["kaçırılmayacak fırsat", "son daire", "acil satılık", "garantili kazanç"],
    preferredWords: ["şeffaf", "mahalle", "doğru fiyat", "süreç"],
    emojiUsage: "minimal",
    captionLength: "medium",
    maxHashtags: 5,
    ctaStyle: "soft",
    visualStyle: "Geniş açı, gün ışığında iç mekân, sakin renkler",
    customRules: [
      "Fiyatı ve metrekareyi her zaman net yaz",
      "Fotoğrafları aşırı düzenleme, ev olduğu gibi görünsün",
      "Yatırım içeriklerinde kazanç vaadi verme",
    ],
  },
};
