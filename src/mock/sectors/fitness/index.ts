import type { SectorDataset } from "@/types";
import { fitnessBrand } from "./brand";
import { fitnessPosts, fitnessSuggestions, fitnessTrends } from "./content";
import { fitnessComments, fitnessConversations } from "./inbox";
import { fitnessStarter } from "./starter";

export const fitnessDataset: SectorDataset = {
  sectorId: "fitness",
  brand: fitnessBrand,
  starter: fitnessStarter,
  suggestions: fitnessSuggestions,
  posts: fitnessPosts,
  trends: fitnessTrends,
  comments: fitnessComments,
  conversations: fitnessConversations,
  analytics: {
    followers: { instagram: 24800, tiktok: 15200, youtube: 3600, x: 900, linkedin: 1400 },
    avgViews: { instagram: 8400, tiktok: 21000, youtube: 4200, x: 700, linkedin: 1100 },
    engagementRate: 6.2,
    dailyReach: 9800,
    dailyFollowerGrowth: 52,
  },
  agentActivity: { trendsAnalyzed: 15, opportunitiesFound: 3, commentsReviewed: 9 },
  mediaTips: {
    videoSummary: "Video enerjik bir başlangıç yapıyor ve hareketler net görünüyor.",
    video: [
      "İlk 2 saniyede hareketin en zorlu anını göster.",
      "Kamerayı hareketi yandan görecek açıya yerleştir, teknik daha net anlaşılır.",
      "Tekrar sayısını ekranda göster.",
      "Videoyu 9:16 formatında tut.",
      "Sonda üyenin yüzündeki başarı anını kullan.",
    ],
    imageSummary: "Görselde hareket ve enerji var, ancak arka plan biraz kalabalık.",
    image: [
      "Sporcuyu karenin merkezine al, ekipmanı kenarda bırak.",
      "Doğal ışığı koru, aşırı filtre kullanma.",
      "Gerçek bir üye kullan; stok fotoğraf hissi güveni azaltır.",
      "Kısa bir motivasyon cümlesi ekle.",
    ],
  },
};
