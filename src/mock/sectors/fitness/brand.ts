import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const fitnessBrandDefaults: BrandDefaults = {
  country: "Türkiye",
  language: "Türkçe",
  tagline: "Küçük gruplarla güç ve kondisyon stüdyosu.",
  audience: {
    summary: "Spora yeniden başlamak isteyen çalışan profesyoneller",
    ageRange: [25, 45],
    description:
      "Büyük spor salonlarında kaybolmuş, doğru teknikle ve bir topluluk içinde düzenli antrenman yapmak isteyen, zamanı kısıtlı yetişkinler.",
  },
  personality: ["energetic", "trustworthy", "friendly"],
  tone: ["Motive edici", "Samimi", "Bilgilendirici"],
  contentStyles: ["educational", "storytelling", "communityFocused", "behindTheScenes"],
  goals: ["followers", "sales", "community"],
  rules: {
    bannedWords: ["mucize", "garantili", "hızlı kilo ver", "yağ yakıcı"],
    preferredWords: ["güç", "süreklilik", "doğru teknik", "topluluk"],
    emojiUsage: "moderate",
    captionLength: "medium",
    maxHashtags: 6,
    ctaStyle: "direct",
    visualStyle: "Doğal stüdyo ışığı, gerçek üyeler, hareket anında çekimler",
    customRules: [
      "Gerçekçi olmayan vücut vaatleri verme",
      "Dönüşüm paylaşımlarında üyeden izin alındığını belirt",
      "Teknik terimleri basitçe açıkla",
    ],
  },
};
