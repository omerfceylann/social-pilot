import type { SectorDataset } from "@/types";
import { educationBrandDefaults } from "./brand";
import { educationPosts, educationSuggestions, educationTrends } from "./content";
import { educationComments, educationConversations } from "./inbox";
import { educationReactions } from "./reactions";
import { educationStarter } from "./starter";

export const educationDataset: SectorDataset = {
  sectorId: "education",
  brandDefaults: educationBrandDefaults,
  starter: educationStarter,
  suggestions: educationSuggestions,
  posts: educationPosts,
  trends: educationTrends,
  comments: educationComments,
  conversations: educationConversations,
  firstReactions: educationReactions,
  analytics: {
    followers: {
      instagram: 21800,
      tiktok: 26400,
      youtube: 6800,
      x: 3200,
      linkedin: 2400,
    },
    avgViews: {
      instagram: 8200,
      tiktok: 23500,
      youtube: 5200,
      x: 1500,
      linkedin: 1300,
    },
    engagementRate: 5.9,
    dailyReach: 11800,
    dailyFollowerGrowth: 58,
  },
  trendsAnalyzed: 14,
  mediaTips: {
    videoSummary: "Anlatım net ve tempo iyi; ilk saniyede konu anlaşılıyor.",
    video: [
      "İlk saniyede yanlış kullanımı ekrana yaz.",
      "Doğru kullanımı büyük ve renkli göster.",
      "Altyazı ekle; çoğu kişi sessiz izliyor.",
      "Videoyu 9:16 formatında tut.",
      "Sonda izleyiciye kısa bir soru sor.",
    ],
    imageSummary: "Görsel aydınlık ve öğrenme ortamını iyi yansıtıyor.",
    image: [
      "Gerçek öğrencileri izin alarak kullan.",
      "Metinli karelerde yazıyı büyük ve okunur tut.",
      "Her kareye tek bir fikir koy.",
      "Kurum renklerini tutarlı kullan.",
    ],
  },
};
