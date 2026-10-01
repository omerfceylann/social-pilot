import type { SectorDataset } from "@/types";
import { travelBrandDefaults } from "./brand";
import { travelPosts, travelSuggestions, travelTrends } from "./content";
import { travelComments, travelConversations } from "./inbox";
import { travelReactions } from "./reactions";
import { travelStarter } from "./starter";

export const travelDataset: SectorDataset = {
  sectorId: "travel",
  brandDefaults: travelBrandDefaults,
  starter: travelStarter,
  suggestions: travelSuggestions,
  posts: travelPosts,
  trends: travelTrends,
  comments: travelComments,
  conversations: travelConversations,
  firstReactions: travelReactions,
  analytics: {
    followers: {
      instagram: 31200,
      tiktok: 21400,
      youtube: 9800,
      x: 1500,
      linkedin: 2000,
    },
    avgViews: {
      instagram: 10400,
      tiktok: 25600,
      youtube: 7600,
      x: 1000,
      linkedin: 1300,
    },
    engagementRate: 6.3,
    dailyReach: 12100,
    dailyFollowerGrowth: 63,
  },
  trendsAnalyzed: 16,
  mediaTips: {
    videoSummary: "Video atmosferi iyi yakalıyor ve izleyiciyi yolculuğa davet ediyor.",
    video: [
      "İlk saniyede en etkileyici manzarayı göster.",
      "Altın saat ışığında çek.",
      "Ortam sesini (dalga, rüzgâr, vapur) koru.",
      "Videoyu 9:16 formatında tut.",
      "Yerel insanları sadece izinle kadraja al.",
    ],
    imageSummary: "Görsel davetkâr; renkler ve ışık güzel.",
    image: [
      "Ufuk çizgisini düz tut.",
      "Kadraja ölçek için bir insan ekle.",
      "Doğal renkleri koru, aşırı doygunluk kullanma.",
      "Yerin adını ve en iyi ziyaret zamanını açıklamaya yaz.",
    ],
  },
};
