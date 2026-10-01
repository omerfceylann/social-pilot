import type { SectorDataset } from "@/types";
import { localServiceBrandDefaults } from "./brand";
import { localServicePosts, localServiceSuggestions, localServiceTrends } from "./content";
import { localServiceComments, localServiceConversations } from "./inbox";
import { localServiceReactions } from "./reactions";
import { localServiceStarter } from "./starter";

export const localServiceDataset: SectorDataset = {
  sectorId: "localService",
  brandDefaults: localServiceBrandDefaults,
  starter: localServiceStarter,
  suggestions: localServiceSuggestions,
  posts: localServicePosts,
  trends: localServiceTrends,
  comments: localServiceComments,
  conversations: localServiceConversations,
  firstReactions: localServiceReactions,
  analytics: {
    followers: {
      instagram: 14800,
      tiktok: 22600,
      youtube: 3400,
      x: 900,
      linkedin: 1100,
    },
    avgViews: {
      instagram: 7200,
      tiktok: 26500,
      youtube: 3900,
      x: 700,
      linkedin: 800,
    },
    engagementRate: 5.4,
    dailyReach: 9400,
    dailyFollowerGrowth: 46,
  },
  trendsAnalyzed: 12,
  mediaTips: {
    videoSummary: "Dönüşüm net görünüyor ve tempo izleyiciyi tutuyor.",
    video: [
      "İlk saniyede en kirli anı göster.",
      "Kamerayı sabit tut, yüzeyi yakın planda çek.",
      "Kullandığın malzemeyi ekrana yaz.",
      "Videoyu 9:16 formatında tut.",
      "Sonda öncesi ve sonrasını yan yana koy.",
    ],
    imageSummary: "Fark net görünüyor; ancak iki karenin açısı farklı.",
    image: [
      "Öncesi ve sonrasını aynı açıdan çek.",
      "Doğal ışıkta, flaşsız çek.",
      "Müşterinin kişisel eşyalarını kadrajdan çıkar.",
      "Ekibin yüzünü gösteren bir kare ekle; güven verir.",
    ],
  },
};
