import type { BrandProfile } from "@/types";

export const fitnessBrand: BrandProfile = {
  name: "FitAtölye",
  handle: "fitatolye",
  sector: { kind: "preset", id: "fitness" },
  country: "Türkiye",
  language: "Türkçe",
  website: "fitatolye.com",
  tagline: "Beşiktaş'ta küçük gruplarla güç ve kondisyon stüdyosu.",
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
  activePlatforms: ["instagram", "tiktok", "youtube", "linkedin", "x"],
  origin: "existing",
};
