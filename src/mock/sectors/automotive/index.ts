import type { SectorDataset } from "@/types";
import { automotiveBrandDefaults } from "./brand";
import { automotivePosts, automotiveSuggestions, automotiveTrends } from "./content";
import { automotiveComments, automotiveConversations } from "./inbox";
import { automotiveReactions } from "./reactions";
import { automotiveStarter } from "./starter";

export const automotiveDataset: SectorDataset = {
  sectorId: "automotive",
  brandDefaults: automotiveBrandDefaults,
  starter: automotiveStarter,
  suggestions: automotiveSuggestions,
  posts: automotivePosts,
  trends: automotiveTrends,
  comments: automotiveComments,
  conversations: automotiveConversations,
  firstReactions: automotiveReactions,
  analytics: {
    followers: {
      instagram: 25400,
      tiktok: 19700,
      youtube: 8900,
      x: 1600,
      linkedin: 1900,
    },
    avgViews: {
      instagram: 9200,
      tiktok: 23800,
      youtube: 6900,
      x: 950,
      linkedin: 1200,
    },
    engagementRate: 6.0,
    dailyReach: 10800,
    dailyFollowerGrowth: 56,
  },
  trendsAnalyzed: 14,
  mediaTips: {
    videoSummary: "Video detayları net gösteriyor ve dönüşüm anı güçlü.",
    video: [
      "İlk saniyede en kirli hâli göster.",
      "Yakın planı sabit tut, titreşimden kaçın.",
      "Önce ve sonrayı aynı açıdan çek.",
      "Videoyu 9:16 formatında tut.",
      "Plakaları mutlaka bulanıklaştır.",
    ],
    imageSummary: "Görsel parlak ve net; yüzey detayları iyi seçiliyor.",
    image: [
      "Parlaklığı göstermek için yandan ışık kullan.",
      "Arka planı sade tut, atölye dağınıklığını kadrajdan çıkar.",
      "Plaka ve kişisel eşyaları gizle.",
      "Renkleri doğal bırak, aşırı filtre kullanma.",
    ],
  },
};
