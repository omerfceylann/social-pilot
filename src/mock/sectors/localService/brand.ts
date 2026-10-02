import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const localServiceBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Ev temizliği ve küçük tamirler için güvenilir, saatinde gelen ekip.",
  audience: {
    summary: "Yoğun çalışan aileler ve evine düzenli bakım isteyen apartman sakinleri",
    ageRange: [28, 55],
    description:
      "Ustanın saatinde gelmesini, fiyatın önceden net olmasını ve işin temiz bitmesini isteyen; komşu tavsiyesiyle hizmet seçen ev sahipleri ve kiracılar.",
  },
  personality: ["trustworthy", "friendly", "professional"],
  tone: ["Güven veren", "Yardımsever", "Net"],
  contentStyles: ["educational", "behindTheScenes", "storytelling", "communityFocused"],
  goals: ["sales", "community", "awareness"],
  rules: {
    bannedWords: ["en ucuz", "bedava", "hemen şimdi", "sınırsız"],
    preferredWords: ["saatinde", "net fiyat", "temiz iş", "komşu"],
    emojiUsage: "minimal",
    captionLength: "short",
    maxHashtags: 5,
    ctaStyle: "direct",
    customRules: [
      "Fiyatı önceden net söyle, sürpriz ücret olmadığını belirt",
      "Müşteri evini izinle göster, kişisel eşyaları kadrajdan çıkar",
      "Güvenlik ve sigorta bilgisini gizleme",
    ],
  },
};
