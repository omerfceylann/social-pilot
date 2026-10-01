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
    {
      id: "nst-tt-packing",
      platform: "tiktok",
      format: "video",
      title: "İlk siparişimizi paketliyoruz",
      description: "İlk siparişin özenle paketlenişini gösteren sakin, ASMR tadında video.",
      caption:
        "İlk siparişimiz yola çıkıyor. Kâğıt, kurdele ve el yazısı bir not. Paketleme anı, kurgusuz.",
      hashtags: ["#paketleme", "#küçükişletme", "#yenimarka"],
      music: {
        title: "Slow Morning",
        artist: "Chillhop Music",
      },
      cta: "İlk siparişi kim verdi dersin?",
      media: [video("nst-tt-packing-m", IMG.boutique, "9:16", "Sipariş paketleniyor", 26)],
      theme: "behindTheScenes",
      reasoning:
        "Paketleme videoları TikTok'ta küçük markaların en çok izlenen içeriklerinden. İlk sipariş anı samimi bir hikâye sunar.",
      estimate: {
        reach: [900, 4500],
        engagementRate: 7.6,
        potential: "high",
      },
      alternatives: {
        title: ["İlk sipariş yolda", "Paketleme anı"],
        caption: [
          "Bir siparişin yola çıkmadan önceki son hâli.",
          "İlk siparişimizi büyük bir özenle paketledik.",
        ],
        hashtags: [["#paketleme", "#yavaşmoda"]],
        cta: ["Takip et.", "Yorumlarda görüşelim."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:00",
      },
    },
    {
      id: "nst-yt-lookbook",
      platform: "youtube",
      format: "short",
      title: "İlk koleksiyon, 30 saniyede",
      description: "Koleksiyonun tüm parçalarını ritmik geçişlerle gösteren Shorts.",
      caption: "İlk koleksiyonumuzun tüm parçaları, 30 saniyede. Hangisi favorin?",
      hashtags: ["#shorts", "#lookbook", "#yenikoleksiyon"],
      cta: "Favorini yorumlara yaz.",
      media: [video("nst-yt-lookbook-m", IMG.lookbook, "9:16", "Koleksiyon çekimi", 30)],
      theme: "productFocused",
      reasoning:
        "Lookbook Shorts'ları yeni moda kanallarının en hızlı izlenme alan içeriği. Kısa, ritmik ve kaydırılabilir.",
      estimate: {
        reach: [250, 1400],
        engagementRate: 5.7,
        potential: "average",
      },
      alternatives: {
        title: ["Koleksiyon turu", "30 saniyelik lookbook"],
        caption: [
          "Koleksiyonun tamamı, tek bir kısa videoda.",
          "İlk koleksiyonumuzdan tüm parçalar.",
        ],
        hashtags: [["#shorts", "#moda"]],
        cta: ["Abone ol.", "Favorini seç."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "18:00",
      },
    },
    {
      id: "nst-yt-fabric",
      platform: "youtube",
      format: "video",
      title: "Kumaş nasıl seçilir? 8 dakikalık rehber",
      description: "Yün, keten ve pamuğu karşılaştıran eğitici video.",
      caption:
        "Bir kıyafetin ömrünü kumaşı belirler. Yün, keten ve pamuk arasındaki farkları, etiket okumayı ve bakım ipuçlarını 8 dakikada anlattık.",
      hashtags: ["#kumaş", "#rehber", "#sürdürülebilirmoda"],
      cta: "Sorularını yorumlarda yanıtlıyoruz.",
      media: [video("nst-yt-fabric-m", IMG.folded, "16:9", "Kumaş örnekleri", 480)],
      theme: "educational",
      reasoning:
        "Eğitici uzun videolar yeni bir kanala arama trafiği getirir. Kumaş bilgisi markanın kalite vurgusuyla birebir örtüşüyor.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.9,
        potential: "average",
      },
      alternatives: {
        title: ["Kumaş rehberi", "Etiket nasıl okunur?"],
        caption: [
          "Kaliteli kıyafet, doğru kumaşla başlar. 8 dakikalık rehber.",
          "Yün mü, keten mi, pamuk mu? Hangisi ne zaman?",
        ],
        hashtags: [["#kumaş", "#moda"]],
        cta: ["Abone ol.", "Soru sor."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "20:00",
      },
    },
    {
      id: "nst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba, biz {brand}",
      description: "Markanın ne yaptığını tek cümlede anlatan ilk paylaşım.",
      caption:
        "Merhaba, biz {brand}. Uzun yıllar giyilecek, özenle üretilmiş parçalar tasarlıyoruz. Burada üretim sürecimizi ve yeni parçaları paylaşacağız.",
      hashtags: ["#yenimarka"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning:
        "X'te kısa ve net bir tanıtım, markanın ne yaptığını ilk bakışta anlatır ve moda topluluğuyla tanışmayı başlatır.",
      estimate: {
        reach: [100, 600],
        engagementRate: 4.6,
        potential: "average",
      },
      alternatives: {
        title: ["İlk merhaba", "Kim olduğumuz"],
        caption: [
          "Daha az ama daha iyi. Merhaba, biz {brand}.",
          "Zamansız parçalar tasarlayan yeni bir marka. Tanışalım.",
        ],
        hashtags: [["#moda", "#tasarım"]],
        cta: ["Bizi takip et, yeni koleksiyon yolda.", "Yanıtla: en sevdiğin parça hangisi?"],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "nst-x-poll",
      platform: "x",
      format: "post",
      title: "İlk koleksiyon için renk anketi",
      description: "Takipçileri ürün kararına dahil eden renk anketi.",
      caption: "İlk trikomuz için son karar sizde: kum beji mi, zeytin yeşili mi?",
      hashtags: ["#anket"],
      cta: "Oyunu ver.",
      media: [],
      theme: "communityFocused",
      reasoning:
        "Ürün kararlarına dahil edilen takipçiler, o ürün çıktığında en ilk alıcılar oluyor. Anketler X'te yüksek etkileşim alır.",
      estimate: {
        reach: [150, 800],
        engagementRate: 5.3,
        potential: "average",
      },
      alternatives: {
        title: ["Renk anketi", "Kararı siz verin"],
        caption: [
          "Kum beji mi, zeytin yeşili mi? İlk trikomuzun rengini seçin.",
          "Bir sonraki parçanın rengini birlikte belirleyelim.",
        ],
        hashtags: [["#anket", "#moda"]],
        cta: ["Oy ver.", "Paylaş."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "14:00",
      },
    },
    {
      id: "nst-li-founder",
      platform: "linkedin",
      format: "post",
      title: "Bir moda markası kurmak: ilk adım",
      description: "Kurucunun markayı neden kurduğunu anlatan kişisel paylaşım.",
      caption:
        "Hızlı modanın ürettiği fazlalığı yıllarca içeriden izledim. {brand} bu yüzden doğdu: daha az, daha iyi ve yerel üretim. Bugün ilk koleksiyonumuzu paylaşıyoruz.",
      hashtags: ["#girişimcilik", "#sürdürülebilirlik", "#moda"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("nst-li-founder-m", IMG.portrait, "1:1", "Kurucu portresi")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de kurucu hikâyeleri yeni markalara hem müşteri hem iş ortağı getirir. Sürdürülebilirlik konusu burada güçlü karşılık bulur.",
      estimate: {
        reach: [200, 1000],
        engagementRate: 5.5,
        potential: "average",
      },
      alternatives: {
        title: ["Neden kurduk?", "İlk koleksiyonun hikâyesi"],
        caption: [
          "Bir markayı kurmak, bir soruya cevap aramakla başladı.",
          "Daha az ama daha iyi. Hikâyemizin ilk bölümü.",
        ],
        hashtags: [["#girişim", "#moda"]],
        cta: ["Takip edin.", "Düşüncelerinizi paylaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "10:00",
      },
    },
    {
      id: "nst-li-production",
      platform: "linkedin",
      format: "post",
      title: "Yerel üretimle çalışıyoruz",
      description: "Üretim ortağı atölyeyi ve ustaları tanıtan paylaşım.",
      caption:
        "Tüm parçalarımızı yerel bir atölyede, siparişe göre üretiyoruz. Ustalarımızla tanışın: her dikişin arkasındaki insanlar.",
      hashtags: ["#yerelüretim", "#tekstil", "#sürdürülebilirmoda"],
      cta: "Üretim ortaklığı için bize yazın.",
      media: [photo("nst-li-production-m", IMG.storeInterior, "1:1", "Atölye")],
      theme: "behindTheScenes",
      reasoning: "Üretim şeffaflığı LinkedIn'de hem tedarikçi hem perakende iş birliklerini çeker.",
      estimate: {
        reach: [150, 800],
        engagementRate: 4.9,
        potential: "average",
      },
      alternatives: {
        title: ["Atölyemizden", "Ustalarımızla tanışın"],
        caption: [
          "Her parçanın arkasında bir usta var. Atölyemizi tanıyın.",
          "Siparişe göre, yerel ve özenli üretim.",
        ],
        hashtags: [["#üretim", "#tekstil"]],
        cta: ["Bize yazın.", "Takip edin."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "10:00",
      },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 540, tiktok: 1400, youtube: 110, x: 80, linkedin: 160 },
    engagementRate: 7.3,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
