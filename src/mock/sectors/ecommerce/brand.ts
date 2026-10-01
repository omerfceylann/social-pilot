import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const ecommerceBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Gündelik teknoloji ve aksesuarları özenle seçen online mağaza.",
  audience: {
    summary: "Online alışverişi seven, tasarıma önem veren şehirli genç profesyoneller",
    ageRange: [22, 38],
    description:
      "Ürünü almadan önce yorum okuyan, kutu açılış videosu izleyen, hızlı kargo ve kolay iade bekleyen; hediye almayı seven alışverişçiler.",
  },
  personality: ["friendly", "trustworthy", "minimal"],
  tone: ["Net", "Sıcak", "Pratik"],
  contentStyles: ["productFocused", "educational", "behindTheScenes", "promotional"],
  goals: ["sales", "followers", "engagement"],
  rules: {
    bannedWords: ["en ucuz", "bedava", "son şans", "kaçırma"],
    preferredWords: ["özenle seçilmiş", "hızlı kargo", "kolay iade", "garanti"],
    emojiUsage: "minimal",
    captionLength: "short",
    maxHashtags: 5,
    ctaStyle: "direct",
    visualStyle: "Sade arka plan, ürün odaklı yakın çekim, gün ışığı",
    customRules: [
      "Fiyatı her zaman KDV dahil yaz",
      "Stok durumunu abartma, gerçek adedi söyle",
      "İade ve kargo koşullarını gizleme",
    ],
  },
};
