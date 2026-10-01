import type { SectorDataset } from "@/types";
import { beautyBrandDefaults } from "./brand";
import { beautyPosts, beautySuggestions, beautyTrends } from "./content";
import { beautyComments, beautyConversations } from "./inbox";
import { beautyReactions } from "./reactions";
import { beautyStarter } from "./starter";

export const beautyDataset: SectorDataset = {
  sectorId: "beauty",
  brandDefaults: beautyBrandDefaults,
  starter: beautyStarter,
  suggestions: beautySuggestions,
  posts: beautyPosts,
  trends: beautyTrends,
  comments: beautyComments,
  conversations: beautyConversations,
  firstReactions: beautyReactions,
  analytics: {
    followers: {
      instagram: 27600,
      tiktok: 14200,
      youtube: 3100,
      x: 1200,
      linkedin: 900,
    },
    avgViews: {
      instagram: 9100,
      tiktok: 19500,
      youtube: 3500,
      x: 800,
      linkedin: 700,
    },
    engagementRate: 6.4,
    dailyReach: 10200,
    dailyFollowerGrowth: 48,
  },
  trendsAnalyzed: 16,
  mediaTips: {
    videoSummary: "Video sakin bir atmosfer yaratıyor ve uygulama net görünüyor.",
    video: [
      "İlk 2 saniyede sonucu kısa bir an göster.",
      "Uygulamayı yakın plan, doğal ışıkta çek.",
      "Danışan izni olduğunu ekranda belirt.",
      "Videoyu 9:16 formatında tut.",
      "Kullanılan ürünlerin adını ekrana yaz.",
    ],
    imageSummary: "Renkler yumuşak ve doku net; ancak ışık biraz sert.",
    image: [
      "Pencere ışığı kullan, flaş kullanma.",
      "Cilt dokusunu gösteren bir yakın plan ekle.",
      "Ürünleri nötr bir zeminde düzenle.",
      "Aşırı filtre kullanma; gerçek sonuç güven verir.",
    ],
  },
};
