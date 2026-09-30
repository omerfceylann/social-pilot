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
    {
      id: "fst-tt-firstday",
      platform: "tiktok",
      format: "video",
      title: "Stüdyonun ilk günü, kurgusuz",
      description: "Açılış gününden samimi, kurgusuz kesitler.",
      caption: "İlk üyeler, ilk ders, ilk alkış. {brand} stüdyosunun ilk günü, hiç kurgusuz 💪",
      hashtags: ["#yenistüdyo", "#fitness", "#ilkgün"],
      music: {
        title: "Power",
        artist: "Workout Beats",
      },
      cta: "Sen de ilk dersine gel, link profilde.",
      media: [video("fst-tt-firstday-m", IMG.gymFloor, "9:16", "Stüdyoda ilk ders", 35)],
      theme: "behindTheScenes",
      reasoning:
        "TikTok'ta kurgusuz 'ilk gün' videoları yeni işletmelerin en hızlı keşfedilen içeriği. Gerçek insanlar güven oluşturur.",
      estimate: {
        reach: [900, 4200],
        engagementRate: 7.8,
        potential: "high",
      },
      alternatives: {
        title: ["Açılış günümüz", "İlk dersimizden kesitler"],
        caption: [
          "Bir stüdyonun ilk günü nasıl geçer? Böyle.",
          "İlk dersimizde enerji tavan yaptı.",
        ],
        hashtags: [["#fitness", "#stüdyo", "#spor"]],
        cta: ["Takip et.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "20:00",
      },
    },
    {
      id: "fst-yt-fullbody",
      platform: "youtube",
      format: "video",
      title: "Yeni başlayanlar için 20 dakikalık tüm vücut",
      description: "Evde ekipmansız yapılabilen, koçun eşlik ettiği başlangıç antrenmanı.",
      caption:
        "Spora yeni başlıyorsan tam sana göre: 20 dakika, ekipman yok, her hareketin kolay versiyonu var. Koçumuzla birlikte yap.",
      hashtags: ["#evdeantrenman", "#yenibaşlayan", "#tümvücut"],
      cta: "Abone ol, her hafta yeni antrenman.",
      media: [video("fst-yt-fullbody-m", IMG.training, "16:9", "Antrenman yapan kişi", 1200)],
      theme: "educational",
      reasoning:
        "Uzun 'birlikte yap' antrenmanları YouTube'da en çok aranan fitness içerikleri. Yeni kanal için arama trafiği sağlar.",
      estimate: {
        reach: [150, 1100],
        engagementRate: 6.3,
        potential: "average",
      },
      alternatives: {
        title: ["20 dakika, ekipmansız", "Başlangıç antrenmanı"],
        caption: [
          "Evde, ekipmansız, 20 dakikada tüm vücut antrenmanı.",
          "Spora başlamanın en kolay yolu: bu videoyla birlikte hareket et.",
        ],
        hashtags: [["#antrenman", "#evdespor"]],
        cta: ["Yorumlara kaçıncı gün olduğunu yaz.", "Abone ol."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "18:00",
      },
    },
    {
      id: "fst-yt-squat",
      platform: "youtube",
      format: "short",
      title: "Squat'ı doğru yapmanın 3 ipucu",
      description: "Yan açıdan çekilmiş, kısa teknik ipuçları.",
      caption: "Dizler, topuklar, göğüs. Squat'ı doğru yapmanın 3 ipucu, 30 saniyede.",
      hashtags: ["#shorts", "#squat", "#doğruteknik"],
      cta: "Kaydet, antrenmanda dene.",
      media: [video("fst-yt-squat-m", IMG.rack, "9:16", "Squat yapan sporcu", 30)],
      theme: "educational",
      reasoning: "Teknik ipuçları Shorts'ta yeni kanallara en çok abone getiren içerik türü.",
      estimate: {
        reach: [300, 1600],
        engagementRate: 6.5,
        potential: "average",
      },
      alternatives: {
        title: ["Squat ipuçları", "Doğru squat"],
        caption: [
          "Squat yaparken dizin ağrıyorsa bu 3 ipucu tam sana göre.",
          "Doğru squat için 30 saniye yeter.",
        ],
        hashtags: [["#shorts", "#fitness"]],
        cta: ["Abone ol.", "Soru sor."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "fst-x-hello",
      platform: "x",
      format: "post",
      title: "Spora başlamanın önündeki engel ne?",
      description: "Hedef kitlenin engellerini soran, sohbet başlatan ilk paylaşım.",
      caption:
        "Merhaba, biz {brand}! İlk sorumuz: spora başlamanın önündeki en büyük engel ne? Zaman mı, motivasyon mu, bilgi mi?",
      hashtags: ["#fitness"],
      cta: "Cevabını yaz.",
      media: [],
      theme: "communityFocused",
      reasoning:
        "X'te soru paylaşımları yeni hesapların ilk etkileşimlerini getirir. Cevaplar içerik planına da girdi sağlar.",
      estimate: {
        reach: [100, 600],
        engagementRate: 5.2,
        potential: "average",
      },
      alternatives: {
        title: ["İlk sorumuz", "Seni ne durduruyor?"],
        caption: [
          "Spora başlamak istiyorsun ama bir şey engel oluyor. Nedir?",
          "Zaman mı, motivasyon mu? Seni en çok ne zorluyor?",
        ],
        hashtags: [["#fitness", "#spor"]],
        cta: ["Yanıtla.", "Arkadaşına sor."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "12:00",
      },
    },
    {
      id: "fst-x-frequency",
      platform: "x",
      format: "post",
      title: "Haftada kaç gün antrenman?",
      description: "Yeni başlayanlara kısa ve net bir cevap veren bilgi paylaşımı.",
      caption:
        "Yeni başlıyorsan haftada 2–3 gün yeterli. Önemli olan sıklık değil, süreklilik. 3 ay boyunca bırakmamak.",
      hashtags: ["#antrenman", "#yenibaşlayan"],
      cta: "Sen haftada kaç gün çalışıyorsun?",
      media: [],
      theme: "educational",
      reasoning:
        "Kısa ve net bilgi paylaşımları X'te kaydedilir ve alıntılanır; yeni hesaplara uzmanlık imajı kazandırır.",
      estimate: {
        reach: [150, 800],
        engagementRate: 4.7,
        potential: "average",
      },
      alternatives: {
        title: ["Kaç gün yeterli?", "Süreklilik kuralı"],
        caption: [
          "Haftada 2 gün, 3 ay boyunca. Başlangıç için sihirli formül bu.",
          "Sık değil, düzenli. Yeni başlayanlara tek kural.",
        ],
        hashtags: [["#fitness", "#ipucu"]],
        cta: ["Yanıtla.", "Kaydet."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "09:00",
      },
    },
    {
      id: "fst-li-why",
      platform: "linkedin",
      format: "post",
      title: "Neden bir stüdyo açtık?",
      description: "Kuruluş motivasyonunu anlatan girişim hikâyesi.",
      caption:
        "Büyük spor salonlarında kaybolan insanlar için küçük gruplu bir stüdyo hayal ettik. Bugün {brand} kapılarını açıyor. Hikâyemizi paylaşmak istedik.",
      hashtags: ["#girişimcilik", "#wellness", "#yenibaşlangıç"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("fst-li-why-m", IMG.studio, "1:1", "Stüdyo içi")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de kuruluş hikâyeleri yeni işletmelerin profesyonel çevrede görünürlüğünü artırır ve kurumsal iş birliklerinin kapısını açar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 5.4,
        potential: "average",
      },
      alternatives: {
        title: ["Kuruluş hikâyemiz", "Bir hayalin ilk günü"],
        caption: [
          "Bir stüdyo açmak, bir topluluk kurmakla başlıyor.",
          "Kapılarımızı açtık. İşte neden.",
        ],
        hashtags: [["#girişim", "#spor"]],
        cta: ["Takip edin.", "Hikâyenizi paylaşın."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "10:00",
      },
    },
    {
      id: "fst-li-corporate",
      platform: "linkedin",
      format: "post",
      title: "Şirketlere ilk ay grup dersi bizden",
      description: "Yakındaki şirketlere yönelik kurumsal wellness teklifi.",
      caption:
        "Çalışan sağlığına yatırım yapan şirketlere özel: ilk ay haftalık grup dersleri bizden. Ofisinizde ya da stüdyomuzda.",
      hashtags: ["#wellness", "#çalışandeneyimi", "#ik"],
      cta: "Detaylar için bize yazın.",
      media: [photo("fst-li-corporate-m", IMG.groupClass, "1:1", "Grup dersi")],
      theme: "promotional",
      reasoning:
        "Kurumsal wellness programları yeni bir stüdyo için düzenli gelir kaynağı. LinkedIn İK yöneticilerine ulaşmanın en doğru kanalı.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.1,
        potential: "average",
      },
      alternatives: {
        title: ["Kurumsal wellness", "Ekibiniz için grup dersi"],
        caption: [
          "Toplantı arasında 45 dakika hareket. Ekibiniz için ilk ay bizden.",
          "Çalışan bağlılığı hareketle başlar.",
        ],
        hashtags: [["#wellness", "#kurumsal"]],
        cta: ["Teklif isteyin.", "Bize yazın."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 620, tiktok: 1600, youtube: 180, x: 60, linkedin: 140 },
    engagementRate: 8.9,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
