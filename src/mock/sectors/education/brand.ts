import type { BrandDefaults } from "@/types";

/** Sektörün marka varsayılanları; kimlik bilgisi kullanıcıdan gelir. */
export const educationBrandDefaults: BrandDefaults = {
  country: "TR",
  language: "tr",
  tagline: "Küçük gruplarla, konuşarak öğrenilen İngilizce kursu.",
  audience: {
    summary: "İngilizcesini iş ve sınav için geliştirmek isteyen gençler ve çalışanlar",
    ageRange: [17, 35],
    description:
      "Yıllarca dil bilgisi çalışıp konuşamayan, yurt dışı başvurusu ya da iş görüşmesi için pratik yapmak isteyen; esnek saat arayan öğrenciler.",
  },
  personality: ["friendly", "professional", "playful"],
  tone: ["Cesaretlendirici", "Açık", "Sabırlı"],
  contentStyles: ["educational", "storytelling", "communityFocused", "entertaining"],
  goals: ["followers", "sales", "awareness"],
  rules: {
    bannedWords: ["garantili", "1 ayda akıcı", "ezbersiz", "mucize yöntem"],
    preferredWords: ["pratik", "konuşma", "küçük grup", "ilerleme"],
    emojiUsage: "moderate",
    captionLength: "medium",
    maxHashtags: 5,
    ctaStyle: "soft",
    customRules: [
      "Gerçekçi olmayan süre vaatleri verme",
      "Öğrenci başarılarını izin alarak paylaş",
      "İngilizce örnekleri Türkçe açıklamayla ver",
    ],
  },
};
