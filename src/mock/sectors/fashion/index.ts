import type { SectorDataset } from "@/types";
import { fashionBrand } from "./brand";
import { fashionPosts, fashionSuggestions, fashionTrends } from "./content";
import { fashionComments, fashionConversations } from "./inbox";
import { fashionStarter } from "./starter";

export const fashionDataset: SectorDataset = {
  sectorId: "fashion",
  brand: fashionBrand,
  starter: fashionStarter,
  suggestions: fashionSuggestions,
  posts: fashionPosts,
  trends: fashionTrends,
  comments: fashionComments,
  conversations: fashionConversations,
  analytics: {
    followers: { instagram: 42800, tiktok: 18300, youtube: 1900, x: 2400, linkedin: 3100 },
    avgViews: { instagram: 11200, tiktok: 19500, youtube: 2600, x: 1500, linkedin: 1800 },
    engagementRate: 4.8,
    dailyReach: 14200,
    dailyFollowerGrowth: 64,
  },
  agentActivity: { trendsAnalyzed: 21, opportunitiesFound: 4, commentsReviewed: 6 },
  mediaTips: {
    videoSummary: "Video kumaşın dokusunu ve hareketini iyi gösteriyor.",
    video: [
      "İlk 2 saniyede parçanın en dikkat çekici detayını göster: yaka, düğme ya da kumaş.",
      "Modelin yürüdüğü bir an ekle; kumaşın düşüşü daha net anlaşılır.",
      "Beden ve boy bilgisini ekranda kısa bir yazıyla ver.",
      "Videoyu 9:16 formatında tut.",
      "Sonda parçanın tamamını tek karede göster.",
    ],
    imageSummary: "Işık ve renk paleti marka estetiğiyle uyumlu.",
    image: [
      "Kumaş dokusunu gösteren yakın bir kare ekle.",
      "Arka planı daha sade tut; nötr tonlar ürünü öne çıkarır.",
      "Parçayı hem tek başına hem kombin içinde göster.",
      "Aşırı filtre kullanma; gerçek renk güven verir.",
    ],
  },
};
