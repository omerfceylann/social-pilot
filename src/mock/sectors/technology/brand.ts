import type { BrandProfile } from "@/types";

export const technologyBrand: BrandProfile = {
  name: "Taskly",
  handle: "tasklyapp",
  sector: { kind: "preset", id: "technology" },
  country: "Türkiye",
  language: "Türkçe",
  website: "taskly.io",
  tagline: "Küçük ve orta ölçekli ekipler için sade proje yönetimi.",
  audience: {
    summary: "Ürün yöneticileri, yazılım ekipleri ve ajans kurucuları",
    ageRange: [24, 42],
    description:
      "10–50 kişilik ekiplerde çalışan, Jira'yı ağır bulan, işlerini daha az toplantıyla yürütmek isteyen teknoloji profesyonelleri.",
  },
  personality: ["professional", "trustworthy", "minimal"],
  tone: ["Net", "Yardımsever", "Teknik ama sade"],
  contentStyles: ["educational", "productFocused", "behindTheScenes", "storytelling"],
  goals: ["awareness", "followers", "sales"],
  rules: {
    bannedWords: ["devrim niteliğinde", "benzersiz", "mükemmel"],
    preferredWords: ["sade", "hızlı", "ekip", "odak"],
    emojiUsage: "minimal",
    captionLength: "medium",
    maxHashtags: 4,
    ctaStyle: "soft",
    visualStyle: "Temiz ürün ekran görüntüleri, açık arka plan, mor vurgu rengi",
    customRules: [
      "Abartılı pazarlama dili kullanma",
      "Her iddiayı bir örnekle destekle",
      "Teknik terimleri kısaca açıkla",
    ],
  },
  activePlatforms: ["linkedin", "x", "youtube", "instagram", "tiktok"],
  origin: "existing",
};
