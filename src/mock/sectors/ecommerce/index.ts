import type { SectorDataset } from "@/types";
import { ecommerceBrandDefaults } from "./brand";
import { ecommercePosts, ecommerceSuggestions, ecommerceTrends } from "./content";
import { ecommerceComments, ecommerceConversations } from "./inbox";
import { ecommerceReactions } from "./reactions";
import { ecommerceStarter } from "./starter";

export const ecommerceDataset: SectorDataset = {
  sectorId: "ecommerce",
  brandDefaults: ecommerceBrandDefaults,
  starter: ecommerceStarter,
  suggestions: ecommerceSuggestions,
  posts: ecommercePosts,
  trends: ecommerceTrends,
  comments: ecommerceComments,
  conversations: ecommerceConversations,
  firstReactions: ecommerceReactions,
  analytics: {
    followers: {
      instagram: 32400,
      tiktok: 18600,
      youtube: 4200,
      x: 2100,
      linkedin: 1800,
    },
    avgViews: {
      instagram: 9600,
      tiktok: 24000,
      youtube: 3800,
      x: 1400,
      linkedin: 1200,
    },
    engagementRate: 4.8,
    dailyReach: 12400,
    dailyFollowerGrowth: 64,
  },
  trendsAnalyzed: 21,
  mediaTips: {
    videoSummary: "Ürün net görünüyor ve ilk saniyede dikkat çekiyor.",
    video: [
      "İlk saniyede ürünün en dikkat çekici detayını göster.",
      "Kutudan çıkan her parçayı tek tek, yakın planda çek.",
      "Ürünün gerçek boyutunu anlamak için elde göster.",
      "Videoyu 9:16 formatında tut.",
      "Fiyatı ve kargo süresini ekranda yaz.",
    ],
    imageSummary: "Ürün odakta ve arka plan sade; renkler doğru yansıyor.",
    image: [
      "Ürünü düz, açık renkli bir zeminde çek.",
      "Farklı açılardan en az üç kare kullan.",
      "Gölgeyi yumuşat, ürünün dokusu görünsün.",
      "Kullanım anını gösteren bir kare ekle.",
    ],
  },
};
