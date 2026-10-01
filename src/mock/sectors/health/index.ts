import type { SectorDataset } from "@/types";
import { healthBrandDefaults } from "./brand";
import { healthPosts, healthSuggestions, healthTrends } from "./content";
import { healthComments, healthConversations } from "./inbox";
import { healthReactions } from "./reactions";
import { healthStarter } from "./starter";

export const healthDataset: SectorDataset = {
  sectorId: "health",
  brandDefaults: healthBrandDefaults,
  starter: healthStarter,
  suggestions: healthSuggestions,
  posts: healthPosts,
  trends: healthTrends,
  comments: healthComments,
  conversations: healthConversations,
  firstReactions: healthReactions,
  analytics: {
    followers: {
      instagram: 23600,
      tiktok: 16800,
      youtube: 7400,
      x: 1400,
      linkedin: 2100,
    },
    avgViews: {
      instagram: 8600,
      tiktok: 20500,
      youtube: 6100,
      x: 900,
      linkedin: 1300,
    },
    engagementRate: 6.1,
    dailyReach: 9900,
    dailyFollowerGrowth: 51,
  },
  trendsAnalyzed: 15,
  mediaTips: {
    videoSummary: "Video sakin bir tempo yakalıyor ve hareketler anlaşılır.",
    video: [
      "İlk saniyede sakin, net bir kare kullan.",
      "Hareketleri yandan, tüm bedeni görecek açıyla çek.",
      "Nefes sürelerini ekranda yaz.",
      "Videoyu 9:16 formatında tut.",
      "Her hareket için daha kolay bir alternatif göster.",
    ],
    imageSummary: "Görsel huzurlu ve doğal; renkler uyumlu.",
    image: [
      "Doğal ışık kullan, sert gölgelerden kaçın.",
      "Sade bir arka plan seç.",
      "Gerçek katılımcıları izin alarak kullan.",
      "Toprak tonlarını koru, aşırı filtre kullanma.",
    ],
  },
};
