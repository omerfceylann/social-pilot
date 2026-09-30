import type { SectorDataset } from "@/types";
import { technologyBrandDefaults } from "./brand";
import { technologyPosts, technologySuggestions, technologyTrends } from "./content";
import { technologyComments, technologyConversations } from "./inbox";
import { technologyStarter } from "./starter";

export const technologyDataset: SectorDataset = {
  sectorId: "technology",
  brandDefaults: technologyBrandDefaults,
  starter: technologyStarter,
  suggestions: technologySuggestions,
  posts: technologyPosts,
  trends: technologyTrends,
  comments: technologyComments,
  conversations: technologyConversations,
  analytics: {
    followers: { instagram: 6400, tiktok: 3100, youtube: 4800, x: 11200, linkedin: 15600 },
    avgViews: { instagram: 2800, tiktok: 7400, youtube: 3100, x: 5200, linkedin: 4300 },
    engagementRate: 3.9,
    dailyReach: 5200,
    dailyFollowerGrowth: 29,
  },
  agentActivity: { trendsAnalyzed: 18, opportunitiesFound: 4, commentsReviewed: 7 },
  mediaTips: {
    videoSummary: "Ekran kaydı net ve akıcı, ancak ilk saniyelerde ürünün değeri henüz görünmüyor.",
    video: [
      "İlk 2 saniyede sonucu göster: hazır görev listesi ya da bitmiş plan.",
      "İmleç hareketlerini yavaşlat ve tıklanan alanı vurgula.",
      "Her adım için kısa bir ekran yazısı ekle.",
      "Videoyu 9:16 formatında tut, ekranı dikey kırp.",
      "Sonda tek bir net çağrı kullan: 'Ücretsiz dene'.",
    ],
    imageSummary: "Ekran görüntüsü temiz, ancak küçük ekranda metinler okunmayabilir.",
    image: [
      "Arayüzde sadece bir özelliğe odaklan, geri kalanı bulanıklaştır.",
      "Önemli alanı marka renginle çerçevele.",
      "Görselin üstüne tek cümlelik bir fayda başlığı ekle.",
      "Mobilde okunabilirlik için yazı boyutunu büyüt.",
    ],
  },
};
