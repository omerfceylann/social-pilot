import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const automotiveBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Periyodik bakım ve detaylı temizlikte şeffaf, özenli oto atölyesi.",
  audience: {
    summary: "Aracına özen gösteren, güvenilir bir usta arayan araç sahipleri",
    ageRange: [25, 55],
    description:
      "Bakımın neden yapıldığını anlamak isteyen, fiyatı önceden bilmek isteyen ve aracının ilk günkü gibi görünmesinden keyif alan sürücüler.",
  },
  personality: ["trustworthy", "professional", "bold"],
  tone: ["Şeffaf", "Ustalıklı", "Tutkulu"],
  contentStyles: ["behindTheScenes", "educational", "storytelling", "communityFocused"],
  goals: ["sales", "awareness", "community"],
  rules: {
    bannedWords: ["en ucuz", "garantili", "sıfır gibi", "mucize cila"],
    preferredWords: ["şeffaf", "özen", "ustalık", "önce ve sonra"],
    emojiUsage: "minimal",
    captionLength: "short",
    maxHashtags: 5,
    ctaStyle: "direct",
    customRules: [
      "Plakaları ve müşteri bilgilerini her zaman gizle",
      "Yapılan işi ve kullanılan ürünü açıkça yaz",
      "Güvenlikle ilgili konularda yetkili servise yönlendirmekten çekinme",
    ],
  },
};
