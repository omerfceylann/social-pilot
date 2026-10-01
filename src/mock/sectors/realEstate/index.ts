import type { SectorDataset } from "@/types";
import { realEstateBrandDefaults } from "./brand";
import { realEstatePosts, realEstateSuggestions, realEstateTrends } from "./content";
import { realEstateComments, realEstateConversations } from "./inbox";
import { realEstateReactions } from "./reactions";
import { realEstateStarter } from "./starter";

export const realEstateDataset: SectorDataset = {
  sectorId: "realEstate",
  brandDefaults: realEstateBrandDefaults,
  starter: realEstateStarter,
  suggestions: realEstateSuggestions,
  posts: realEstatePosts,
  trends: realEstateTrends,
  comments: realEstateComments,
  conversations: realEstateConversations,
  firstReactions: realEstateReactions,
  analytics: {
    followers: {
      instagram: 18400,
      tiktok: 12600,
      youtube: 3900,
      x: 1600,
      linkedin: 3800,
    },
    avgViews: {
      instagram: 7800,
      tiktok: 17500,
      youtube: 3600,
      x: 1100,
      linkedin: 1600,
    },
    engagementRate: 4.9,
    dailyReach: 8600,
    dailyFollowerGrowth: 41,
  },
  trendsAnalyzed: 13,
  mediaTips: {
    videoSummary: "Tur akıcı ve mekân geniş görünüyor; ışık iyi.",
    video: [
      "Turu kapıdan başlat, tek planda ilerle.",
      "Her odanın metrekaresini ekrana yaz.",
      "Pencereden manzarayı en az 2 saniye göster.",
      "Videoyu 9:16 formatında tut.",
      "Sonda fiyat ve konumu net yaz.",
    ],
    imageSummary: "Mekân aydınlık ve ferah görünüyor; ancak açı biraz eğik.",
    image: [
      "Kamerayı göğüs hizasında ve düz tut.",
      "Gün ışığında, perdeleri açarak çek.",
      "Her odayı köşeden geniş açıyla göster.",
      "Kişisel eşyaları kadrajdan çıkar.",
    ],
  },
};
