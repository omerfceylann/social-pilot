import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/**
 * Yeni bir giyim markasının ilk haftası. {brand} kullanıcının marka adıyla doldurulur.
 * Sektör varsayılanı "emoji yok" olduğu için metinler emojisiz.
 */
export const fashionStarter: StarterKit = {
  suggestions: [
    {
      id: "nst-story",
      platform: "instagram",
      format: "carousel",
      title: "Biz {brand}: Neden tasarlıyoruz?",
      description:
        "Markanın çıkış noktasını, tasarım anlayışını ve ilk koleksiyonu tanıtan carousel.",
      caption:
        "Merhaba, biz {brand}. Uzun yıllar giyilecek, sade ve özenle üretilmiş parçalar tasarlıyoruz. Hikâyemizi ve ilk koleksiyonumuzu kaydırarak keşfet.",
      hashtags: ["#yenimarka", "#tasarım", "#zamansız", "#kadınmodası"],
      cta: "Takip et, ilk koleksiyonu kaçırma.",
      media: [
        photo("nst-story-1", IMG.portrait, "4:5", "Marka portresi"),
        photo("nst-story-2", IMG.rack, "4:5", "Askıdaki ilk koleksiyon"),
        photo("nst-story-3", IMG.folded, "4:5", "Kumaş detayları"),
      ],
      theme: "storytelling",
      reasoning:
        "Yeni moda markalarında ilk soru 'neden sizden alayım?' olur. Hikâyeyi ve değerleri anlatan bir carousel, ürün paylaşımlarından önce güven oluşturur.",
      estimate: { reach: [400, 1300], engagementRate: 7.4, potential: "high" },
      alternatives: {
        title: ["Hikâyemiz", "Merhaba, biz {brand}"],
        caption: [
          "Daha az ama daha iyi. {brand} bu düşünceyle doğdu. İlk koleksiyonumuzla tanış.",
          "Her parçanın arkasında bir kalıp, bir kumaş seçimi ve çok fazla deneme var. Hikâyemiz burada başlıyor.",
        ],
        hashtags: [
          ["#yenimarka", "#yavaşmoda"],
          ["#tasarım", "#kapsülgardırop"],
        ],
        cta: ["Hikâyenin devamı için takip et.", "Koleksiyon sitede."],
        music: [],
      },
      suggestedAt: { day: 0, time: "12:00" },
    },
    {
      id: "nst-atelier",
      platform: "instagram",
      format: "reel",
      title: "Atölyeden ilk kare",
      description: "Kumaş kesiminden dikişe, ilk parçanın üretiminden 15 saniye.",
      caption: "İlk parçamız nasıl hayat buldu? Kalıptan son ütüye 15 saniye.",
      hashtags: ["#atölye", "#elişçiliği", "#perdearkası"],
      music: { title: "Slow Morning", artist: "Chillhop Music" },
      cta: "Üretim sürecinin devamı için takipte kal.",
      media: [video("nst-atelier-m", IMG.dress, "9:16", "Atölyede dikiş", 15)],
      theme: "behindTheScenes",
      reasoning:
        "Üretim videoları yeni markalara güven kazandırır ve #yavaşmoda gibi yükselen etiketlerle keşfedilme şansını artırır.",
      relatedTrendId: "nt-slow-fashion",
      estimate: { reach: [600, 2400], engagementRate: 7.9, potential: "high" },
      alternatives: {
        title: ["Bir parçanın yapımı", "Kalıptan askıya"],
        caption: [
          "Hızlı moda dakikalar içinde üretir. Biz acele etmiyoruz.",
          "İlk parçamızın yolculuğu: kalıp, kesim, dikiş.",
        ],
        hashtags: [
          ["#atölye", "#yerelüretim"],
          ["#yavaşmoda", "#elyapımı"],
        ],
        cta: ["Takip et.", "Sorularını yaz."],
        music: [{ title: "Sewing Machine ASMR", artist: "Atelier Sounds" }],
      },
      suggestedAt: { day: 2, time: "19:30" },
    },
    {
      id: "nst-first-piece",
      platform: "instagram",
      format: "post",
      title: "İlk parça: Koleksiyonun imzası",
      description: "Koleksiyonu temsil eden tek bir parçayı sade bir fotoğrafla tanıt.",
      caption: "İlk koleksiyonumuzun imza parçası. Doğal kumaş, sade kesim, uzun ömür.",
      hashtags: ["#yenikoleksiyon", "#zamansız", "#minimalmoda"],
      cta: "Ürün detayları sitede.",
      media: [photo("nst-first-piece-m", IMG.coat, "4:5", "İmza parça")],
      theme: "productFocused",
      reasoning:
        "Yeni takipçiler markayı tek bir ikonik parçayla hatırlar. İmza ürün paylaşımları ilk site ziyaretlerini getirir.",
      relatedTrendId: "nt-quiet-luxury",
      estimate: { reach: [350, 1100], engagementRate: 6.6, potential: "average" },
      alternatives: {
        title: ["Koleksiyonun ilk parçası", "İmza parçamız"],
        caption: [
          "Bir koleksiyonu tek parçayla anlatmamız gerekseydi, bu olurdu.",
          "Sade, zamansız, özenli. İlk koleksiyonun imzası.",
        ],
        hashtags: [
          ["#koleksiyon", "#tasarım"],
          ["#sessizlüks", "#moda"],
        ],
        cta: ["Keşfet.", "Favorini yaz."],
        music: [],
      },
      suggestedAt: { day: 3, time: "12:30" },
    },
    {
      id: "nst-styling",
      platform: "tiktok",
      format: "video",
      title: "Bir parça, üç kombin",
      description: "İlk koleksiyondan tek parçayı üç farklı günde kombinleyen kısa video.",
      caption: "Tek parça, üç farklı gün: ofis, hafta sonu, akşam.",
      hashtags: ["#kombin", "#grwm", "#stilönerisi"],
      music: { title: "Coffee", artist: "beabadoobee" },
      cta: "Hangi kombin senin tarzın?",
      media: [video("nst-styling-m", IMG.outfit, "9:16", "Kombin videosu", 24)],
      theme: "educational",
      reasoning:
        "Kombin videoları TikTok'ta yeni moda hesaplarının en çok keşfedilen içeriği. GRWM formatı şu an yükselişte.",
      relatedTrendId: "nt-grwm",
      estimate: { reach: [900, 3800], engagementRate: 6.9, potential: "average" },
      alternatives: {
        title: ["Üç gün, tek parça", "Nasıl kombinlenir?"],
        caption: [
          "Gardırobunda çalışkan bir parça arıyorsan: işte üç kombin.",
          "Ofisten akşam yemeğine aynı parça, farklı stil.",
        ],
        hashtags: [
          ["#kombin", "#stil"],
          ["#grwm", "#ofiskombini"],
        ],
        cta: ["Favorini yaz.", "Kaydet."],
        music: [{ title: "Sunday Best", artist: "Surfaces" }],
      },
      suggestedAt: { day: 5, time: "20:00" },
    },
  ],
  drafts: [
    {
      id: "nsd-launch",
      platform: "instagram",
      format: "post",
      status: "draft",
      title: "İlk koleksiyon yayında",
      caption: "{brand} ilk koleksiyonuyla yayında. Sade, zamansız ve özenle üretilmiş parçalar.",
      hashtags: ["#yenimarka", "#ilkkoleksiyon", "#moda"],
      cta: "Koleksiyon sitede.",
      media: [photo("nsd-launch-m", IMG.lookbook, "4:5", "Koleksiyon görseli")],
      theme: "productFocused",
      at: { day: 0, time: "11:00" },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 540, tiktok: 1400, youtube: 110, x: 80, linkedin: 160 },
    engagementRate: 7.3,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
  agentActivity: { trendsAnalyzed: 21, opportunitiesFound: 4, commentsReviewed: 0 },
};
