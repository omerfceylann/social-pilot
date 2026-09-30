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
    {
      id: "rst-tt-kitchen",
      platform: "tiktok",
      format: "video",
      title: "Bir siparişin 60 saniyesi",
      description: "Siparişin kasadan masaya yolculuğunu gösteren hızlı kurgulu mutfak videosu.",
      caption: "Kasadan masaya bir siparişin 60 saniyesi. {brand} mutfağından ilk video.",
      hashtags: ["#mutfak", "#perdearkası", "#kafe", "#yenimekan"],
      music: {
        title: "Coffee Break",
        artist: "Lukrembo",
      },
      cta: "Takip et, yarın tatlı bölümü geliyor.",
      media: [video("rst-tt-kitchen-m", IMG.chef, "9:16", "Mutfakta çalışan şef", 45)],
      theme: "behindTheScenes",
      reasoning:
        "TikTok'ta yeni hesaplar takipçi sayısından bağımsız olarak keşfete düşebilir. Mutfak videoları restoranlar için en hızlı keşfedilen format.",
      relatedTrendId: "rt-day-in-life",
      estimate: {
        reach: [900, 4000],
        engagementRate: 7.5,
        potential: "high",
      },
      alternatives: {
        title: ["Mutfaktan 60 saniye", "Bir kahvaltı tabağı nasıl hazırlanır?"],
        caption: [
          "Bir siparişin mutfaktaki yolculuğu, baştan sona.",
          "Kahvaltı tabağın hazırlanırken mutfakta neler oluyor?",
        ],
        hashtags: [["#mutfak", "#kafe", "#yemek"]],
        cta: ["Hangi ürünü çekelim? Yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "19:00",
      },
    },
    {
      id: "rst-yt-opening",
      platform: "youtube",
      format: "short",
      title: "Açılış sabahı: 60 saniye",
      description: "Kapıların ilk açıldığı sabahı gösteren kısa Shorts videosu.",
      caption: "Kapılarımızı açtığımız ilk sabah. {brand} için her şey bu 60 saniyede başladı.",
      hashtags: ["#shorts", "#yenimekan", "#kafe"],
      cta: "Abone ol, hikâyemizi takip et.",
      media: [video("rst-yt-opening-m", IMG.cafeInterior, "9:16", "Açılış sabahı kafe", 58)],
      theme: "storytelling",
      reasoning:
        "YouTube Shorts yeni kanallarda bile Shorts akışında gösterilir. Açılış anı merak uyandırır ve kanalın ilk abonelerini getirir.",
      estimate: {
        reach: [200, 1200],
        engagementRate: 5.8,
        potential: "average",
      },
      alternatives: {
        title: ["İlk sabahımız", "Kapılar açılıyor"],
        caption: [
          "İlk müşterimizi beklediğimiz o sabah, 60 saniyede.",
          "Bir kafenin ilk günü nasıl geçer? Kısaca böyle.",
        ],
        hashtags: [["#shorts", "#kafe"]],
        cta: ["Abone ol.", "Yorumlarda görüşelim."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "17:00",
      },
    },
    {
      id: "rst-yt-guide",
      platform: "youtube",
      format: "video",
      title: "Evde filtre kahve: 5 dakikalık rehber",
      description: "Baristanın kameraya anlattığı, ekipman ve oranları gösteren eğitici video.",
      caption:
        "Evde iyi bir filtre kahve için ihtiyacın olan her şey: öğütüm, oran, sıcaklık ve süre. Baristamız anlatıyor.",
      hashtags: ["#filtrekahve", "#kahverehberi", "#evdekahve"],
      cta: "Kaydet ve bu hafta sonu dene.",
      media: [video("rst-yt-guide-m", IMG.pourOver, "16:9", "V60 ile kahve demleme", 310)],
      theme: "educational",
      reasoning:
        "Uzun eğitici videolar yeni bir kanalın arama üzerinden bulunmasını sağlar. 'Evde filtre kahve' sürekli aranan bir konu.",
      estimate: {
        reach: [150, 900],
        engagementRate: 6.1,
        potential: "average",
      },
      alternatives: {
        title: ["Filtre kahve rehberi", "V60 ile ilk demleme"],
        caption: [
          "Filtre kahveyi evde kafe kalitesinde demlemenin 5 adımı.",
          "V60 ile ilk demlemen için adım adım rehber.",
        ],
        hashtags: [["#kahve", "#pourover", "#rehber"]],
        cta: ["Soruların için yorum bırak.", "Abone ol, seri devam ediyor."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "20:00",
      },
    },
    {
      id: "rst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba, mahallenin yeni kahvecisi",
      description: "Yerel hesaplarla sohbet başlatan, kısa ve samimi ilk paylaşım.",
      caption:
        "Merhaba! Biz {brand}, mahallenin yeni kahve durağıyız. Bir önerin, isteğin ya da sorun varsa buradayız.",
      hashtags: ["#kahve"],
      cta: "Bize yaz, cevaplıyoruz.",
      media: [],
      theme: "communityFocused",
      reasoning:
        "X'te ilk paylaşımın kısa ve sohbet başlatan bir tonda olması, yerel hesaplarla etkileşimi hızlandırır.",
      estimate: {
        reach: [100, 600],
        engagementRate: 4.9,
        potential: "average",
      },
      alternatives: {
        title: ["İlk merhaba", "Yeni komşunuz"],
        caption: [
          "Yeni komşunuz geldi: {brand}. İlk kahve sohbetine hazırız.",
          "Mahallede yeni bir kahve durağı var. Merhaba!",
        ],
        hashtags: [["#kahve", "#mahalle"]],
        cta: ["Yanıtla.", "Etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "rst-x-poll",
      platform: "x",
      format: "post",
      title: "Anket: Sabah kahven nasıl?",
      description:
        "Takipçilerin kahve alışkanlığını soran, menü kararına da girdi sağlayan kısa anket.",
      caption:
        "Sabah kahveni nasıl içersin? Filtre, latte, Türk kahvesi ya da soğuk. Cevaplar menümüze yön verecek.",
      hashtags: ["#kahvemolası"],
      cta: "Oyunu ver.",
      media: [],
      theme: "communityFocused",
      reasoning:
        "#kahvemolası etiketi yükselişte. Anketler X'te yeni hesapların en çok yanıt alan paylaşım türü.",
      relatedTrendId: "rt-coffee-break",
      estimate: {
        reach: [150, 700],
        engagementRate: 5.6,
        potential: "average",
      },
      alternatives: {
        title: ["Kahve anketi", "Sabah ritüelin ne?"],
        caption: [
          "Güne hangi kahveyle başlıyorsun? Menümüzü birlikte şekillendirelim.",
          "Filtre mi, latte mi? Kararı sen ver.",
        ],
        hashtags: [["#kahvemolası", "#anket"]],
        cta: ["Oy ver.", "Arkadaşına sor."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "09:00",
      },
    },
    {
      id: "rst-li-story",
      platform: "linkedin",
      format: "post",
      title: "Bir kahve dükkânı açmak: ilk ders",
      description: "Açılış yolculuğunu ve ekibi anlatan girişim hikâyesi.",
      caption:
        "{brand} olarak kapılarımızı açtık. Bu yolculukta öğrendiğimiz ilk şey: iyi bir mekân, iyi bir ekip demek. Ekibimizle tanışın.",
      hashtags: ["#girişimcilik", "#küçükişletme", "#yenibaşlangıç"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("rst-li-story-m", IMG.restaurant, "1:1", "Kafe ekibi")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de girişim hikâyeleri, yeni işletmelerin çevresinde güven ve kurumsal bağlantı oluşturur.",
      estimate: {
        reach: [200, 900],
        engagementRate: 5.2,
        potential: "average",
      },
      alternatives: {
        title: ["Açılış hikâyemiz", "Ekibimizle tanışın"],
        caption: [
          "Bir kafe açmak, bir ekip kurmakla başlıyor. Hikâyemizin ilk bölümü.",
          "Aylarca süren hazırlığın ardından kapılarımızı açtık.",
        ],
        hashtags: [["#girişim", "#ekip"]],
        cta: ["Takip edin.", "Deneyimlerinizi paylaşın."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "10:00",
      },
    },
    {
      id: "rst-li-office",
      platform: "linkedin",
      format: "post",
      title: "Yakındaki ofislere: ilk kahve bizden",
      description: "Çevredeki ofis ekiplerine yönelik ilk toplu sipariş teklifi.",
      caption:
        "Çevremizdeki ofis ekiplerine özel: ilk toplu siparişinizde kahveler bizden. Ekip toplantılarınızı birlikte daha lezzetli yapalım.",
      hashtags: ["#ofiskültürü", "#çalışandeneyimi"],
      cta: "Toplu sipariş için mesaj gönderin.",
      media: [photo("rst-li-office-m", IMG.espresso, "1:1", "Ofis için espresso")],
      theme: "promotional",
      reasoning:
        "Yakındaki ofisler bir kafe için en düzenli müşteri kaynağı. LinkedIn bu kitleye doğrudan ulaşmanın yolu.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.4,
        potential: "average",
      },
      alternatives: {
        title: ["Ofisler için kahve", "Toplantılara kahve"],
        caption: [
          "Ofis toplantılarınız için taze kahve servisi başladı.",
          "Ekibinizin kahvesini biz getirelim.",
        ],
        hashtags: [["#ofis", "#kahve"]],
        cta: ["Bize yazın.", "Teklif isteyin."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:30",
      },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 480, tiktok: 1200, youtube: 150, x: 90, linkedin: 110 },
    engagementRate: 8.2,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
