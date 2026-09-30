import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir stüdyonun ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const fitnessStarter: StarterKit = {
  suggestions: [
    {
      id: "fst-welcome",
      platform: "instagram",
      format: "reel",
      title: "Stüdyomuza hoş geldin",
      description: "Stüdyoyu, ekipmanı ve ders atmosferini gösteren 20 saniyelik tanıtım turu.",
      caption:
        "Burası {brand}. Küçük gruplar, doğru teknik ve seni tanıyan koçlar. Stüdyomuzu 20 saniyede gez 💪",
      hashtags: ["#yenistüdyo", "#fitness", "#grupdersi", "#antrenman"],
      music: { title: "Run Boy Run", artist: "Woodkid" },
      cta: "İlk dersin ücretsiz, DM'den yer ayırt.",
      media: [video("fst-welcome-m", IMG.studio, "9:16", "Stüdyo içi tur", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Yeni bir stüdyoya gelmeden önce insanlar mekânı görmek ister. Tanıtım turu Reel'leri 'nasıl bir yer' sorusunu cevaplar ve ilk deneme dersi talebini getirir.",
      estimate: { reach: [700, 2500], engagementRate: 8.8, potential: "high" },
      alternatives: {
        title: ["20 saniyede stüdyo turu", "Kapılarımız açık"],
        caption: [
          "Yeni stüdyomuzu gezmeye ne dersin? Küçük gruplar, büyük enerji.",
          "Spora başlamak için mükemmel zamanı bekleme. Seni burada bekliyoruz.",
        ],
        hashtags: [
          ["#fitness", "#stüdyo", "#spor"],
          ["#grupdersi", "#kuvvetantrenmanı"],
        ],
        cta: ["Ücretsiz deneme dersi için yaz.", "Konum profilde."],
        music: [{ title: "Eye of the Tiger", artist: "Survivor" }],
      },
      suggestedAt: { day: 0, time: "19:00" },
    },
    {
      id: "fst-coaches",
      platform: "instagram",
      format: "carousel",
      title: "Koçlarımızla tanış",
      description: "Her koça bir kare: uzmanlık alanı, sevdiği hareket ve kısa bir cümle.",
      caption:
        "Seni çalıştıracak insanlarla tanış. Her koçumuzun uzmanlığını ve en sevdiği hareketi kaydır.",
      hashtags: ["#koç", "#personaltrainer", "#fitness"],
      cta: "Hangi koçla başlamak istersin?",
      media: [
        photo("fst-coaches-1", IMG.athlete, "4:5", "Koç portresi"),
        photo("fst-coaches-2", IMG.training, "4:5", "Antrenman sırasında koç"),
      ],
      theme: "communityFocused",
      reasoning:
        "Fitness'ta karar genellikle koça güvenle verilir. Koç tanıtımları yeni hesapların en çok kaydedilen ilk paylaşımları arasında.",
      estimate: { reach: [400, 1400], engagementRate: 7.6, potential: "average" },
      alternatives: {
        title: ["Ekibimiz", "Seni kim çalıştıracak?"],
        caption: [
          "Doğru koç, doğru teknik, doğru tempo. Ekibimizle tanış.",
          "Her koçumuzun bir uzmanlığı var. Sana uygun olanı bul.",
        ],
        hashtags: [
          ["#koç", "#ekip"],
          ["#pt", "#antrenör"],
        ],
        cta: ["Sorularını yorumlara yaz.", "Koçunu seç."],
        music: [],
      },
      suggestedAt: { day: 2, time: "12:00" },
    },
    {
      id: "fst-free-class",
      platform: "instagram",
      format: "story",
      title: "İlk ders bizden",
      description: "Açılış haftasına özel ücretsiz deneme dersi duyurusu, anket çıkartmasıyla.",
      caption: "Açılış haftasına özel: ilk dersin ücretsiz. Hangi saat sana uyar?",
      hashtags: [],
      cta: "Ankete katıl, yerini ayıralım.",
      media: [photo("fst-free-m", IMG.groupClass, "9:16", "Grup dersi")],
      theme: "promotional",
      reasoning:
        "Açılış haftasında net ve tek bir teklif, ilk üyeleri kazanmanın en hızlı yoludur.",
      estimate: { reach: [300, 900], engagementRate: 6.4, potential: "average" },
      alternatives: {
        title: ["Ücretsiz deneme dersi", "Açılış haftası"],
        caption: [
          "Bu hafta tüm derslerde ilk deneme ücretsiz. Sabah mı, akşam mı?",
          "Arkadaşını da getir, ilk ders ikinize de bizden.",
        ],
        hashtags: [[], []],
        cta: ["Yerini ayırt.", "DM'den yaz."],
        music: [],
      },
      suggestedAt: { day: 3, time: "09:00" },
    },
    {
      id: "fst-beginner-tip",
      platform: "tiktok",
      format: "video",
      title: "Spora yeni başlayanlara 3 öneri",
      description: "Koçun kameraya konuştuğu, başlangıç seviyesine 3 kısa öneri.",
      caption: "Spora yeniden başlıyorsan bu 3 hatayı yapma. Koçumuzdan 30 saniyelik tavsiye.",
      hashtags: ["#yenibaşlayan", "#fitness", "#antrenmanipuçları"],
      music: { title: "Power", artist: "Workout Beats" },
      cta: "Takip et, her hafta yeni bir ipucu.",
      media: [video("fst-tip-m", IMG.kettlebell, "9:16", "Kettlebell ile antrenman", 30)],
      theme: "educational",
      reasoning:
        "Eğitici kısa videolar TikTok'ta yeni hesapların keşfete düşmesini kolaylaştırır. 'Yeni başlayan' hedefi senin kitlenle birebir örtüşüyor.",
      relatedTrendId: "ft-form-check",
      estimate: { reach: [900, 4000], engagementRate: 7.2, potential: "high" },
      alternatives: {
        title: ["İlk haftanda bunu yapma", "Başlangıç rehberi"],
        caption: [
          "İlk haftada herkesin yaptığı 3 hata ve nasıl kaçınacağın.",
          "Spora başlarken ihtiyacın olan tek şey süreklilik. 3 pratik öneri.",
        ],
        hashtags: [
          ["#fitness", "#spor"],
          ["#yenibaşlayan", "#koç"],
        ],
        cta: ["Kaydet.", "Sorunu yorumlara yaz."],
        music: [{ title: "Lift", artist: "Gym Tracks" }],
      },
      suggestedAt: { day: 5, time: "20:00" },
    },
  ],
  drafts: [
    {
      id: "fsd-opening",
      platform: "instagram",
      format: "post",
      status: "draft",
      title: "Açıldık!",
      caption:
        "{brand} kapılarını açtı. Küçük gruplar, doğru teknik ve güçlü bir topluluk. İlk dersin bizden 💪",
      hashtags: ["#yenistüdyo", "#açılış", "#fitness"],
      cta: "Deneme dersi için DM.",
      media: [photo("fsd-opening-m", IMG.gymFloor, "4:5", "Stüdyo alanı")],
      theme: "promotional",
      at: { day: 0, time: "12:00" },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 620, tiktok: 1600, youtube: 180, x: 60, linkedin: 140 },
    engagementRate: 8.9,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
  agentActivity: { trendsAnalyzed: 15, opportunitiesFound: 4, commentsReviewed: 0 },
};
