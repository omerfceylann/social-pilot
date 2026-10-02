import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir online mağazanın ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const ecommerceStarter: StarterKit = {
  suggestions: [
    {
      id: "est-welcome",
      platform: "instagram",
      format: "reel",
      title: "Mağazamız açıldı",
      description: "Mağazayı, ilk ürünleri ve paketleme masasını gösteren 20 saniyelik tanıtım.",
      caption:
        "{brand} açıldı! Özenle seçtiğimiz ilk ürünleri ve siparişlerini hazırlayacağımız masayı gör.",
      hashtags: ["#yenimağaza", "#eticaret", "#{handle}"],
      music: {
        title: "Coffee & Boxes",
        artist: "Chillhop",
      },
      cta: "İlk siparişine özel hediye paketi bizden.",
      media: [video("est-welcome-m", IMG.bags, "9:16", "Alışveriş poşetleri", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Yeni bir mağazaya güven, arkasındaki insanları görünce başlar. Tanıtım Reel'i ilk takipçileri getirir.",
      estimate: {
        reach: [500, 1800],
        engagementRate: 8.1,
        potential: "high",
      },
      alternatives: {
        title: ["Kapılarımız açık", "İlk ürünlerimiz"],
        caption: [
          "Yeni online mağazamız yayında. İlk ürünlerimizle tanış.",
          "Uzun süredir hazırlanıyorduk, sonunda açıldık!",
        ],
        hashtags: [
          ["#yenimağaza", "#alışveriş"],
          ["#küçükişletme", "#{handle}"],
        ],
        cta: ["Takip et, ilk kampanyayı kaçırma.", "Ürünler profildeki bağlantıda."],
        music: [
          {
            title: "Morning Routine",
            artist: "Chillhop",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "est-bestsellers",
      platform: "instagram",
      format: "carousel",
      title: "İlk 3 ürünümüz",
      description: "Her ürüne bir kare: neden seçtik, kime uygun, fiyatı.",
      caption:
        "İlk 3 ürünümüz: neden seçtiğimizi ve kime uygun olduğunu kaydırarak gör. Hepsi {brand} seçkisi.",
      hashtags: ["#yeniürün", "#teknoloji", "#aksesuar"],
      cta: "Hangisini merak ediyorsun?",
      media: [
        photo("est-best-1", IMG.headphones, "4:5", "Kablosuz kulaklık"),
        photo("est-best-2", IMG.watch, "4:5", "Akıllı saat"),
        photo("est-best-3", IMG.sunglasses, "4:5", "Güneş gözlüğü"),
      ],
      theme: "productFocused",
      reasoning:
        "Yeni takipçiler önce ne sattığını görmek ister. Ürün carousel'leri ilk haftanın en çok kaydedilen paylaşımı.",
      estimate: {
        reach: [300, 1100],
        engagementRate: 6.9,
        potential: "average",
      },
      alternatives: {
        title: ["Neler satıyoruz?", "Seçtiğimiz ilk ürünler"],
        caption: [
          "Az ama doğru ürün: ilk koleksiyonumuzdan 3 favori.",
          "Her ürünü önce biz denedik. İşte ilk üç seçimimiz.",
        ],
        hashtags: [
          ["#alışveriş", "#{handle}"],
          ["#ürün", "#tasarım"],
        ],
        cta: ["Ürün sayfaları profilde.", "Sorularını yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "est-tt-first-order",
      platform: "tiktok",
      format: "video",
      title: "İlk siparişimizi paketliyoruz",
      description: "Mağazanın ilk siparişinin heyecanla paketlenişi.",
      caption:
        "İlk siparişimiz geldi! {brand} ekibi olarak heyecanla paketliyoruz, el yazısı not da dahil.",
      hashtags: ["#ilksipariş", "#küçükişletme", "#packanorderwithme"],
      music: {
        title: "Coffee & Boxes",
        artist: "Chillhop",
      },
      cta: "Sıradaki sipariş senin olsun mu?",
      media: [video("est-tt-first-m", IMG.warehouse, "9:16", "Kargo kutusu hazırlığı", 25)],
      theme: "behindTheScenes",
      reasoning:
        '"İlk sipariş" videoları küçük işletmelere duygusal bağ kurdurur ve TikTok\'ta yeni hesapları keşfete taşır.',
      estimate: {
        reach: [900, 4500],
        engagementRate: 9.2,
        potential: "high",
      },
      alternatives: {
        title: ["İlk sipariş geldi!", "Sipariş #0001"],
        caption: [
          "Bir yerden başlamak lazım: ilk siparişimiz yola çıkıyor.",
          "Sipariş #0001 hazırlanıyor. Çok heyecanlıyız!",
        ],
        hashtags: [
          ["#ilksipariş", "#eticaret"],
          ["#girişimcilik", "#{handle}"],
        ],
        cta: ["Takip et, ikinci siparişi de çekeceğiz.", "Sen de bize bir sipariş ver!"],
        music: [
          {
            title: "Morning Routine",
            artist: "Chillhop",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "20:00",
      },
    },
    {
      id: "est-tt-why",
      platform: "tiktok",
      format: "video",
      title: "Bu mağazayı neden açtık?",
      description: "Kurucunun kameraya 30 saniyede mağazanın hikâyesini anlattığı video.",
      caption: "Neden {brand}? Çünkü iyi ürün bulmak bu kadar zor olmamalı. 30 saniyede hikâyemiz.",
      hashtags: ["#girişimcilik", "#hikâye", "#eticaret"],
      cta: "Takip et, yolculuğumuzu paylaşıyoruz.",
      media: [video("est-tt-why-m", IMG.store, "9:16", "Mağazada çalışan ekip", 30)],
      theme: "storytelling",
      reasoning:
        "Kurucu hikâyeleri yeni markalarda güven inşa eder; yorumlarda ilk sorular burada gelir.",
      estimate: {
        reach: [700, 3200],
        engagementRate: 8.4,
        potential: "average",
      },
      alternatives: {
        title: ["Hikâyemiz 30 saniyede", "Nasıl başladık?"],
        caption: [
          "Bir fikirle başladık, bugün ilk ürünlerimiz yayında.",
          "Özenle seçilmiş ürünler, dürüst fiyat, hızlı kargo. Hikâyemiz bu.",
        ],
        hashtags: [
          ["#hikâye", "#{handle}"],
          ["#küçükişletme", "#girişim"],
        ],
        cta: ["Bize bir soru sor!", "Yorumlara ne satmamızı istediğini yaz."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:30",
      },
    },
    {
      id: "est-yt-short",
      platform: "youtube",
      format: "short",
      title: "Kutudan ne çıkıyor?",
      description: "İlk ürünün kutu açılışını gösteren 20 saniyelik Shorts.",
      caption: "{brand} siparişini açınca karşına çıkanlar.",
      hashtags: ["#shorts", "#unboxing", "#{handle}"],
      music: {
        title: "Paper Planes",
        artist: "Lofi Beats",
      },
      cta: "Abone ol, her hafta yeni kutu açılışı.",
      media: [video("est-yt-short-m", IMG.headphones, "9:16", "Kulaklık kutu açılışı", 20)],
      theme: "productFocused",
      reasoning:
        "Shorts, yeni kanalların ilk izleyicilerini bulduğu yer; kutu açılışları en çok izlenen tür.",
      estimate: {
        reach: [300, 1600],
        engagementRate: 6.1,
        potential: "average",
      },
      alternatives: {
        title: ["20 saniyelik kutu açılışı", "Siparişinde neler var?"],
        caption: [
          "Kutunun içinde ne var? Birlikte açalım.",
          "Paketlemeye ne kadar özen gösterdiğimizi izle.",
        ],
        hashtags: [
          ["#shorts", "#kutuaçılışı"],
          ["#teknoloji", "#{handle}"],
        ],
        cta: ["Bir sonraki ürünü yorumlarda seç.", "Abone ol."],
        music: [
          {
            title: "Soft Paper",
            artist: "Lofi Beats",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "18:00",
      },
    },
    {
      id: "est-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Mağazamızı tanıyın: Ürünleri nasıl seçiyoruz?",
      description:
        "Ürün seçim sürecimizi, test ettiğimiz şeyleri ve kargo düzenimizi anlatan tanıtım videosu.",
      caption:
        "{brand} olarak her ürünü satışa koymadan önce bir hafta kullanıyoruz. Bu videoda seçim sürecimizi, kalite kontrolümüzü ve kargo düzenimizi anlatıyoruz.",
      hashtags: ["#eticaret", "#tanıtım"],
      cta: "Abone ol, ürün incelemeleri yolda.",
      media: [video("est-yt-intro-m", IMG.store, "16:9", "Mağaza ekibi", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; arama trafiği ve güven getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.2,
        potential: "average",
      },
      alternatives: {
        title: ["Ürünleri nasıl seçiyoruz?", "Mağazamızın arkasında ne var?"],
        caption: [
          "Bir ürünü satışa koymadan önce neye bakıyoruz? Bütün süreç bu videoda.",
          "Dürüst ürün seçimi nasıl yapılır? Bizim yöntemimiz.",
        ],
        hashtags: [
          ["#tanıtım", "#{handle}"],
          ["#alışveriş", "#kalite"],
        ],
        cta: ["Sorularını yorumlara yaz.", "Ürünler açıklamadaki bağlantıda."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "est-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Mağazayı kısa ve net tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: özenle seçilmiş teknoloji ve aksesuarlar, hızlı kargo, kolay iade. Sorularını burada da yanıtlıyoruz.",
      hashtags: ["#eticaret"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning:
        "X'te ilk gönderinin net bir tanım olması, sonraki müşteri sorularının adresi olmasını sağlar.",
      estimate: {
        reach: [100, 600],
        engagementRate: 3.2,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında: teknoloji ve aksesuarda özenle seçilmiş ürünler.",
          "Yeni bir online mağazayız. Soruların için buradayız.",
        ],
        hashtags: [["#alışveriş"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "est-x-question",
      platform: "x",
      format: "post",
      title: "Hangi ürünü getirelim?",
      description: "Takipçilere bir sonraki ürünü sorduğun etkileşim gönderisi.",
      caption:
        "{brand} koleksiyonuna bir sonraki ürünü sen seç: kablosuz şarj standı mı, mekanik klavye mi?",
      hashtags: ["#anket"],
      cta: "Yanıtla, en çok istenen gelsin.",
      media: [],
      theme: "communityFocused",
      reasoning:
        "Soru soran gönderiler X'te yanıt alır; yeni hesapların ilk etkileşimlerini getirir.",
      estimate: {
        reach: [100, 500],
        engagementRate: 4.1,
        potential: "average",
      },
      alternatives: {
        title: ["Sıradaki ürünü sen seç", "Bir sonraki ürün?"],
        caption: [
          "Şarj standı mı, mekanik klavye mi? Kararı sana bırakıyoruz.",
          "Koleksiyona ne ekleyelim? Yanıtlarda topluyoruz.",
        ],
        hashtags: [["#alışveriş"], ["#teknoloji"]],
        cta: ["Fikrini yaz.", "Oy ver."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "12:00",
      },
    },
    {
      id: "est-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Yeni girişimimizi duyuruyoruz",
      description: "Mağazanın kuruluşunu ve değerlerini anlatan duyuru.",
      caption:
        "Yeni girişimimizi duyurmaktan mutluluk duyuyoruz: {brand}. Teknoloji ve aksesuarda özenle seçilmiş ürünler, şeffaf fiyat ve hızlı teslimat.",
      hashtags: ["#girişimcilik", "#eticaret"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("est-li-launch-m", IMG.store, "1:1", "Kuruluş ekibi")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de kuruluş duyurusu tedarikçi ve iş ortaklarından ilk görünürlüğü getirir.",
      estimate: {
        reach: [200, 900],
        engagementRate: 5.0,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Kapılarımızı açtık"],
        caption: [
          "Uzun bir hazırlığın ardından online mağazamızı açtık.",
          "Küçük bir ekip, büyük bir özen: yeni girişimimiz yayında.",
        ],
        hashtags: [["#girişim", "#startup"], ["#perakende"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "est-li-supplier",
      platform: "linkedin",
      format: "post",
      title: "Tedarikçi arıyoruz",
      description: "Yerli üreticilerle çalışmak istediğini anlatan çağrı.",
      caption:
        "{brand} olarak yerli üreticilerle çalışmak istiyoruz. Teknoloji aksesuarı üretiyorsanız tanışalım.",
      hashtags: ["#tedarik", "#yerliüretim"],
      cta: "Mesaj atın.",
      media: [photo("est-li-supplier-m", IMG.warehouse, "1:1", "Ürün deposu")],
      theme: "communityFocused",
      reasoning: "Net bir iş çağrısı LinkedIn'de doğru kişilere ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.4,
        potential: "average",
      },
      alternatives: {
        title: ["Yerli üreticilerle çalışalım", "Üreticiler, tanışalım"],
        caption: [
          "Yerli üretimi desteklemek istiyoruz. Sizi arıyoruz.",
          "Koleksiyonumuzu yerli üreticilerle büyütmek istiyoruz.",
        ],
        hashtags: [["#tedarikzinciri"], ["#işbirliği"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "est-story-poll",
      platform: "instagram",
      format: "story",
      title: "Hangi renk?",
      description: "Takipçilere ürün rengini sorduğun anket hikâyesi.",
      caption: "{brand} anket: Siyah mı beyaz mı?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("est-story-m", IMG.shoes, "9:16", "Beyaz sneaker")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.0,
        potential: "average",
      },
      alternatives: {
        title: ["Renk anketi", "Sen hangisini seçerdin?"],
        caption: ["Siyah mı beyaz mı? Kararı sen ver.", "Hangi rengi daha çok stoklayalım?"],
        hashtags: [[], []],
        cta: ["Ankete katıl", "Seçimini yap"],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "10:00",
      },
    },
    {
      id: "esx-ig-first-order",
      platform: "instagram",
      format: "reel",
      title: "İlk siparişimiz yola çıktı",
      description: "Mağazanın ilk siparişinin paketlenişini gösteren Reel.",
      caption: "{brand} ilk siparişini paketledi. Kutuya el yazısı bir teşekkür notu da ekledik.",
      hashtags: ["#ilksipariş", "#yenimağaza", "#{handle}"],
      music: {
        title: "Paper Planes",
        artist: "Lofi Beats",
      },
      cta: "Takip et, ilk siparişlere özel sürprizler var.",
      media: [video("esx-ig-first-order-m", IMG.warehouse, "9:16", "Paketleme", 15)],
      theme: "storytelling",
      reasoning: "Yeni mağazalarda ilk sipariş anı güven oluşturur ve ilk takipçileri getirir.",
      estimate: {
        reach: [500, 2300],
        engagementRate: 7.7,
        potential: "average",
      },
      alternatives: {
        title: ["İlk paket", "Yola çıkan ilk kutu"],
        caption: ["İlk siparişimizi özenle paketledik.", "Bir teşekkür notuyla ilk sipariş."],
        hashtags: [["#paketleme", "#{handle}"], ["#küçükişletme"]],
        cta: ["Bize yaz.", "Ürünleri incele."],
        music: [
          {
            title: "Coffee & Boxes",
            artist: "Chillhop",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "19:00",
      },
    },
    {
      id: "esx-tt-team",
      platform: "tiktok",
      format: "video",
      title: "Mağazanın arkasındaki ekip",
      description: "Ekibin kendini kısaca tanıttığı video.",
      caption: "{brand} ekibi: ürün seçen, paketleyen ve mesajlarını yanıtlayan üç kişi.",
      hashtags: ["#eticaret", "#ekip", "#{handle}"],
      music: {
        title: "Paper Planes",
        artist: "Lofi Beats",
      },
      cta: "Takip et.",
      media: [video("esx-tt-team-m", IMG.store, "9:16", "Mağaza", 20)],
      theme: "storytelling",
      reasoning:
        "Ekibi göstermek yeni mağazalarda güven oluşturur; TikTok'ta ilk izleyicileri getirir.",
      estimate: {
        reach: [700, 3400],
        engagementRate: 7.4,
        potential: "average",
      },
      alternatives: {
        title: ["Üç kişilik ekip", "Biz kimiz?"],
        caption: ["Siparişini hazırlayan ekiple tanış.", "Küçük ekip, özenli siparişler."],
        hashtags: [["#küçükişletme", "#{handle}"], ["#alışveriş"]],
        cta: ["Soru sor.", "Bize yaz."],
        music: [
          {
            title: "Coffee & Boxes",
            artist: "Chillhop",
          },
        ],
      },
      suggestedAt: {
        day: 2,
        time: "19:00",
      },
    },
  ],
  analytics: {
    followers: {
      instagram: 0,
      tiktok: 0,
      youtube: 0,
      x: 0,
      linkedin: 0,
    },
    avgViews: {
      instagram: 540,
      tiktok: 1800,
      youtube: 220,
      x: 90,
      linkedin: 160,
    },
    engagementRate: 7.9,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
