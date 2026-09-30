import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir kafe/restoranın ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const restaurantStarter: StarterKit = {
  suggestions: [
    {
      id: "rst-intro",
      platform: "instagram",
      format: "carousel",
      title: "Merhaba, biz {brand}",
      description: "Mekânını, hikâyeni ve menünün ruhunu 4 karede tanıtan ilk paylaşım.",
      caption:
        "Merhaba, biz {brand}. Bu hesapta kahvemizi nasıl seçtiğimizi, mutfakta neler olduğunu ve masalarımızda kimlerin buluştuğunu paylaşacağız. Kaydır, bizi tanı.",
      hashtags: ["#yenimekan", "#kahve", "#kahvaltı", "#istanbul"],
      cta: "Takip et, ilk fincanda tanışalım.",
      media: [
        photo("rst-intro-1", IMG.cafeInterior, "4:5", "Kafenin iç mekânı"),
        photo("rst-intro-2", IMG.latteArt, "4:5", "Latte art yapılmış kahve"),
        photo("rst-intro-3", IMG.brunch, "4:5", "Kahvaltı tabağı"),
      ],
      theme: "storytelling",
      reasoning:
        "Yeni hesaplarda ilk paylaşım, markanın kim olduğunu ve neden takip edilmesi gerektiğini anlatmalı. Tanıtım carousel'ları profil ziyaretini ve ilk takipçiyi getirir.",
      estimate: { reach: [300, 900], engagementRate: 9.2, potential: "high" },
      alternatives: {
        title: ["{brand} ile tanışın", "Kapımız açık", "Hikâyemiz burada başlıyor"],
        caption: [
          "{brand} kapılarını açtı. Taze demlenmiş kahve, el yapımı tatlılar ve mahalleye bir buluşma noktası.",
          "Her mekânın bir hikâyesi var. Bizimki bir fincan kahveyle başladı. Merhaba, biz {brand}.",
        ],
        hashtags: [
          ["#yenimekan", "#kafe", "#kahvesevenler"],
          ["#kahve", "#brunch", "#mahallemekanı"],
        ],
        cta: ["İlk ziyaretinde bize kendini tanıt.", "Konumumuz profilde."],
        music: [],
      },
      suggestedAt: { day: 0, time: "18:00" },
    },
    {
      id: "rst-first-look",
      platform: "instagram",
      format: "reel",
      title: "Mutfaktan ilk kare",
      description: "Açılış hazırlığını gösteren 15 saniyelik sessiz bir perde arkası videosu.",
      caption: "Kapılar açılmadan önce mutfakta neler oluyor? İlk sabahımızdan 15 saniye.",
      hashtags: ["#perdearkası", "#baristalife", "#sabahrutini"],
      music: { title: "Morning Coffee", artist: "Lofi Fruits" },
      cta: "Yarın sabah bekliyoruz.",
      media: [video("rst-first-look-m", IMG.pourOver, "9:16", "Kahve demlenirken", 15)],
      theme: "behindTheScenes",
      reasoning:
        "Restoran ve kafelerde perde arkası videoları yeni hesaplarda en hızlı keşfedilen içerik türü. Reel'ler takipçi olmayanlara da gösterilir.",
      relatedTrendId: "rt-day-in-life",
      estimate: { reach: [600, 2200], engagementRate: 8.4, potential: "high" },
      alternatives: {
        title: ["Açılıştan önceki 15 saniye", "İlk demleme"],
        caption: [
          "Her sabah aynı ritüel: öğüt, demle, bekle. Sabahımızdan kısa bir kesit.",
          "Kapılar açılmadan önceki sessiz saat. İlk fincan hep bizden.",
        ],
        hashtags: [
          ["#kahve", "#perdearkası"],
          ["#baristalife", "#kafe"],
        ],
        cta: ["Sabah uğra.", "Kaydet, sabah hatırla."],
        music: [{ title: "Sunday Morning", artist: "Chillhop Music" }],
      },
      suggestedAt: { day: 1, time: "08:30" },
    },
    {
      id: "rst-signature",
      platform: "instagram",
      format: "post",
      title: "Menümüzün yıldızı",
      description: "İmza ürününü tek, net bir fotoğrafla tanıt.",
      caption: "Menümüzde bir favori seçmemiz gerekirse bu olurdu. İmza lezzetimizle tanış.",
      hashtags: ["#imzalezzet", "#menü", "#kahve"],
      cta: "İlk ziyaretinde bunu dene.",
      media: [photo("rst-signature-m", IMG.coffeeCup, "4:5", "İmza kahve")],
      theme: "productFocused",
      reasoning:
        "Yeni takipçiler 'ne yemeliyim, ne içmeliyim' sorusuna cevap arar. Tek bir imza ürün, uzun bir menü görselinden daha akılda kalıcıdır.",
      estimate: { reach: [250, 700], engagementRate: 7.1, potential: "average" },
      alternatives: {
        title: ["İlk denemen gereken lezzet", "İmza ürünümüz"],
        caption: [
          "Bize ilk kez geleceksen tek bir önerimiz var: bu.",
          "Menünün en çok sorulan lezzeti. Tarifi bizde, keyfi sende.",
        ],
        hashtags: [
          ["#menü", "#lezzet"],
          ["#kahve", "#tatlı"],
        ],
        cta: ["Yorumlara favorini yaz.", "Bu hafta tadına bak."],
        music: [],
      },
      suggestedAt: { day: 3, time: "12:30" },
    },
    {
      id: "rst-ask",
      platform: "tiktok",
      format: "video",
      title: "Menüye ne eklemeliyiz?",
      description: "Takipçilere menü için fikir soran, topluluğu ilk günden dahil eden kısa video.",
      caption: "Yeni açıldık ve menümüzü birlikte büyütmek istiyoruz. Sen olsan ne eklerdin?",
      hashtags: ["#yenimekan", "#kafe", "#fikir"],
      music: { title: "Coffee Break", artist: "Lukrembo" },
      cta: "Önerini yorumlara yaz, en çok beğenileni deneyelim.",
      media: [video("rst-ask-m", IMG.counter, "9:16", "Kasada barista", 18)],
      theme: "communityFocused",
      reasoning:
        "Soru soran videolar yorum getirir; yorumlar da yeni hesapların önerilen akışlara girmesini hızlandırır.",
      estimate: { reach: [800, 3000], engagementRate: 7.8, potential: "average" },
      alternatives: {
        title: ["Menüyü sen belirle", "Bir sonraki lezzet senden"],
        caption: [
          "Menümüze eklenecek bir sonraki ürünü sen seç. Yorumlarda bekliyoruz.",
          "İlk haftamızda sana soruyoruz: hangi tatlıyı yapalım?",
        ],
        hashtags: [
          ["#kafe", "#anket"],
          ["#yenimekan", "#tatlı"],
        ],
        cta: ["Fikrini yaz.", "Arkadaşını etiketle."],
        music: [{ title: "Better Days", artist: "LAKEY INSPIRED" }],
      },
      suggestedAt: { day: 5, time: "19:00" },
    },
  ],
  drafts: [
    {
      id: "rsd-doors-open",
      platform: "instagram",
      format: "post",
      status: "draft",
      title: "Kapılarımız açık",
      caption: "{brand} bugün kapılarını açtı. İlk kahveni içmeye, bizimle tanışmaya bekliyoruz.",
      hashtags: ["#yenimekan", "#açılış", "#kahve"],
      cta: "Konumumuz profilde.",
      media: [photo("rsd-doors-open-m", IMG.cafeCorner, "4:5", "Kafenin girişi")],
      theme: "storytelling",
      at: { day: 0, time: "19:30" },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 480, tiktok: 1200, youtube: 150, x: 90, linkedin: 110 },
    engagementRate: 8.2,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
  agentActivity: { trendsAnalyzed: 12, opportunitiesFound: 4, commentsReviewed: 0 },
};
