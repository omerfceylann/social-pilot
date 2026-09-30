import type { SectorDataset } from "@/types";
import { restaurantBrandDefaults } from "./brand";
import { restaurantPosts, restaurantSuggestions, restaurantTrends } from "./content";
import { restaurantComments, restaurantConversations } from "./inbox";
import { restaurantReactions } from "./reactions";
import { restaurantStarter } from "./starter";

export const restaurantDataset: SectorDataset = {
  sectorId: "restaurant",
  brandDefaults: restaurantBrandDefaults,
  starter: restaurantStarter,
  suggestions: restaurantSuggestions,
  posts: restaurantPosts,
  trends: restaurantTrends,
  comments: restaurantComments,
  conversations: restaurantConversations,
  firstReactions: restaurantReactions,
  analytics: {
    followers: { instagram: 18400, tiktok: 9600, youtube: 2100, x: 1350, linkedin: 820 },
    avgViews: { instagram: 6200, tiktok: 14500, youtube: 3800, x: 1200, linkedin: 900 },
    engagementRate: 5.4,
    dailyReach: 7400,
    dailyFollowerGrowth: 38,
  },
  trendsAnalyzed: 12,
  mediaTips: {
    videoSummary: "Video güçlü bir başlangıç sunuyor ve ışık sıcak tonlarda.",
    video: [
      "İlk 2 saniyede ürünü daha yakından göster.",
      "Videonun ilk karesinde hareket kullan: dökülen kahve ya da buhar.",
      'Ekrana kısa bir metin ekle: "07:00, ilk demleme".',
      "Videoyu 9:16 formatında tut.",
      "İlk 3 saniyede sonucu, yani bitmiş fincanı göster.",
    ],
    imageSummary: "Kompozisyon dengeli, doğal ışık ürünü iştah açıcı gösteriyor.",
    image: [
      "Ürünü karenin üçte birlik çizgisine yerleştir.",
      "Arka plandaki kalabalığı biraz daha bulanıklaştır.",
      "Fincanın yanına bir el ya da peçete ekleyerek sahneyi canlandır.",
      "Sıcak tonları koru, beyaz dengesini biraz ısıt.",
    ],
  },
};
