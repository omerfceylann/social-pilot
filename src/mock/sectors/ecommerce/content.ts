import { photo, video } from "@/mock/images";
import type { SeedPost, SeedSuggestion, Trend } from "@/types";

export const IMG = {
  bags: "1607082348824-0a96f2a4b9da",
  checkout: "1556742049-0cfed4f6a45d",
  watch: "1523275335684-37898b6baf30",
  headphones: "1505740420928-5e560c06d30e",
  sneaker: "1542291026-7eec264c27ff",
  sunglasses: "1572635196237-14b3f281503f",
  camera: "1526170375885-4d8ecf77b99f",
  warehouse: "1586528116311-ad8dd3c8310d",
  shoes: "1600185365483-26d7a4cc7519",
  sneakerDark: "1491553895911-0055eca6402d",
  store: "1556740758-90de374c12ad",
};

export const ecommerceTrends: Trend[] = [
  {
    id: "et-unboxing",
    title: "Sessiz kutu açılışı",
    description: "Müziksiz, sadece ambalaj sesiyle çekilen kutu açılış videoları hızla yayılıyor.",
    category: "format",
    platforms: ["tiktok", "instagram"],
    momentum: 61,
    insight:
      "Bir siparişi depoda paketlerken ve müşterinin kapısında açılırken çek; ses efekti yeterli, müzik koyma.",
    hashtags: ["#unboxing", "#kutuaçılışı", "#asmr"],
  },
  {
    id: "et-gift-guide",
    title: "Bütçeye göre hediye rehberi",
    description:
      '"500 TL altı / 1.000 TL altı" gibi fiyat aralığına göre hediye listeleri çok kaydediliyor.',
    category: "topic",
    platforms: ["instagram", "youtube"],
    momentum: 44,
    insight:
      "Her fiyat aralığına üç ürün koyan bir carousel hazırla; son karede kargo süresini belirt.",
    hashtags: ["#hediyerehberi", "#hediyefikri"],
  },
  {
    id: "et-vs",
    title: "Ürün karşılaştırmaları",
    description: "İki benzer ürünü yan yana koyup farkı 30 saniyede anlatan videolar yükselişte.",
    category: "format",
    platforms: ["tiktok", "youtube"],
    momentum: 37,
    insight:
      "En çok soru alan iki kulaklığı karşılaştır; kimin hangisini alması gerektiğini net söyle.",
    hashtags: ["#karşılaştırma", "#hangisi"],
  },
  {
    id: "et-packing",
    title: "#packanorderwithme",
    description:
      "Siparişi hazırlarken çekilen perde arkası videoları küçük markalara güven kazandırıyor.",
    category: "hashtag",
    platforms: ["tiktok", "instagram"],
    momentum: 52,
    insight: "Günün ilk siparişini baştan sona paketle; el yazısı notu da göster.",
    hashtags: ["#packanorderwithme", "#küçükişletme"],
  },
];

export const ecommerceSuggestions: SeedSuggestion[] = [
  {
    id: "es-unboxing",
    platform: "instagram",
    format: "reel",
    title: "Sessiz kutu açılışı: Kablosuz kulaklık",
    description: "Müziksiz, sadece ambalaj sesiyle çekilmiş 20 saniyelik kutu açılışı.",
    caption: "Kutudan çıkan her şey bu: kulaklık, kılıf, kablo ve el yazısı notumuz. Sesi aç.",
    hashtags: ["#unboxing", "#kulaklık", "#{handle}", "#kutuaçılışı"],
    music: {
      title: "Soft Paper",
      artist: "Lofi Beats",
    },
    cta: "Ürün sayfası profildeki bağlantıda.",
    media: [video("es-unbox-m", IMG.headphones, "9:16", "Sarı zeminde kablosuz kulaklık", 20)],
    theme: "productFocused",
    reasoning:
      "Sessiz kutu açılışı formatı son haftada %61 yükseldi. Hesabındaki ürün videoları ortalamanın %38 üstünde kaydediliyor.",
    relatedTrendId: "et-unboxing",
    estimate: {
      reach: [9000, 16000],
      engagementRate: 7.4,
      potential: "high",
    },
    alternatives: {
      title: ["Kutudan ne çıkıyor?", "20 saniyede kutu açılışı"],
      caption: [
        "Müzik yok, sadece kutu sesi. Kulaklığın kutusundan çıkan her şey.",
        "Siparişini açtığında seni ne bekliyor? Sesi aç ve izle.",
      ],
      hashtags: [
        ["#unboxing", "#asmr", "#{handle}"],
        ["#teknoloji", "#kulaklık", "#yeniürün"],
      ],
      cta: ["Detaylar profildeki bağlantıda.", "Soruların için DM'den yaz."],
      music: [
        {
          title: "Paper Planes",
          artist: "Lofi Beats",
        },
      ],
    },
    suggestedAt: {
      day: 1,
      time: "20:00",
    },
  },
  {
    id: "es-gift-guide",
    platform: "instagram",
    format: "carousel",
    title: "1.000 TL altı 5 hediye",
    description: "Fiyat aralığına göre hazırlanmış, kaydedilmeye uygun hediye rehberi.",
    caption: "Hediye arıyorsan kaydet: 1.000 TL altında, hızlı kargoyla kapına gelen 5 ürün.",
    hashtags: ["#hediyerehberi", "#hediyefikri", "#{handle}"],
    cta: "Kaydet, hediye zamanı gelince bak.",
    media: [
      photo("es-gift-1", IMG.watch, "4:5", "Beyaz zeminde akıllı saat"),
      photo("es-gift-2", IMG.sunglasses, "4:5", "Siyah güneş gözlüğü"),
      photo("es-gift-3", IMG.camera, "4:5", "Anlık fotoğraf makinesi"),
    ],
    theme: "educational",
    reasoning:
      "Bütçeye göre hediye listeleri sektörde %44 yükselişte. Carousel'ler hesabında en çok kaydedilen biçim.",
    relatedTrendId: "et-gift-guide",
    estimate: {
      reach: [6000, 11000],
      engagementRate: 6.2,
      potential: "high",
    },
    alternatives: {
      title: ["Bütçe dostu hediye rehberi", "Hediye bulamayanlara 5 öneri"],
      caption: [
        "Hediye seçmek zor değil: 1.000 TL altı 5 öneri, hepsi stokta.",
        "Doğum günü, yıl dönümü ya da sadece mutlu etmek için: 5 hediye fikri.",
      ],
      hashtags: [
        ["#hediye", "#alışveriş", "#{handle}"],
        ["#hediyefikri", "#doğumgünü"],
      ],
      cta: ["Hangisini seçerdin? Yorumlara yaz.", "Hediye paketi ücretsiz."],
      music: [],
    },
    suggestedAt: {
      day: 3,
      time: "12:00",
    },
  },
  {
    id: "es-packing",
    platform: "tiktok",
    format: "video",
    title: "Günün ilk siparişini paketliyoruz",
    description: "Depoda bir siparişin baştan sona hazırlanışı, el yazısı not dahil.",
    caption: "Sabah 09:00, günün ilk siparişi. Kutuya giren her şeyi tek tek kontrol ediyoruz.",
    hashtags: ["#packanorderwithme", "#küçükişletme", "#eticaret", "#{handle}"],
    music: {
      title: "Coffee & Boxes",
      artist: "Chillhop",
    },
    cta: "Takip et, yarın başka bir sipariş paketliyoruz.",
    media: [video("es-pack-m", IMG.warehouse, "9:16", "Kargo kutularının hazırlandığı depo", 34)],
    theme: "behindTheScenes",
    reasoning:
      "Paketleme videoları küçük markalara güven kazandırıyor ve TikTok'ta %52 yükselişte.",
    relatedTrendId: "et-packing",
    estimate: {
      reach: [14000, 26000],
      engagementRate: 6.8,
      potential: "high",
    },
    alternatives: {
      title: ["Bir sipariş nasıl hazırlanır?", "Kutuya ne koyuyoruz?"],
      caption: [
        "Senin siparişin de böyle hazırlanıyor: kontrol, koruma, el yazısı not.",
        "Depodan kapına: bir siparişin 40 saniyelik yolculuğu.",
      ],
      hashtags: [
        ["#packanorderwithme", "#perdearkası"],
        ["#eticaret", "#sipariş", "#{handle}"],
      ],
      cta: ["Sıradaki videoda hangi ürünü paketleyelim?", "Siparişin yolda mı? Yorumlara yaz."],
      music: [
        {
          title: "Morning Routine",
          artist: "Chillhop",
        },
      ],
    },
    suggestedAt: {
      day: 0,
      time: "18:30",
    },
  },
  {
    id: "es-yt-compare",
    platform: "youtube",
    format: "video",
    title: "İki kulaklık, tek karar: Hangisini almalısın?",
    description: "En çok soru aldığımız iki kulaklığın ses, pil ve konfor karşılaştırması.",
    caption:
      "İki popüler kablosuz kulaklığı bir hafta boyunca kullandık. Ses, pil ömrü ve konforda farklar ve kimin hangisini alması gerektiği.",
    hashtags: ["#kulaklık", "#karşılaştırma", "#inceleme"],
    cta: "Sorularını yorumlara yaz, bir sonraki videoda cevaplayalım.",
    media: [video("es-yt-m", IMG.headphones, "16:9", "Masada kablosuz kulaklık", 420)],
    theme: "educational",
    reasoning:
      "Karşılaştırma videoları YouTube'da arama trafiği getiriyor; satın alma kararına en yakın izleyiciye ulaşıyor.",
    relatedTrendId: "et-vs",
    estimate: {
      reach: [3000, 7500],
      engagementRate: 5.4,
      potential: "average",
    },
    alternatives: {
      title: ["Bu iki kulaklıktan hangisi?", "Kulaklık karşılaştırması: 1 hafta sonra"],
      caption: [
        "Bir hafta, iki kulaklık. Hangisi kime uygun, net cevap veriyoruz.",
        "Ses mi, pil mi, konfor mu? Önceliğine göre doğru kulaklığı seç.",
      ],
      hashtags: [
        ["#teknoloji", "#inceleme"],
        ["#kulaklık", "#hangisi"],
      ],
      cta: ["Abone ol, her hafta yeni karşılaştırma.", "Ürün bağlantıları açıklamada."],
      music: [],
    },
    suggestedAt: {
      day: 4,
      time: "19:00",
    },
  },
  {
    id: "es-x-shipping",
    platform: "x",
    format: "post",
    title: "Kargo saati duyurusu",
    description:
      "Saat 15:00'e kadar verilen siparişlerin aynı gün kargoda olduğunu duyuran kısa gönderi.",
    caption:
      "Hatırlatma: 15:00'e kadar verdiğin siparişler aynı gün kargoda. Bugün 214 paket yola çıktı.",
    hashtags: ["#eticaret", "#kargo"],
    cta: "Siparişini şimdi ver.",
    media: [],
    theme: "promotional",
    reasoning:
      "X'te net ve kısa operasyon bilgisi en çok yanıtlanan içerik; müşteri sorularını azaltıyor.",
    estimate: {
      reach: [800, 2400],
      engagementRate: 3.6,
      potential: "average",
    },
    alternatives: {
      title: ["Aynı gün kargo", "Bugün kaç paket gitti?"],
      caption: [
        "Bugün 214 paket yola çıktı. 15:00'e kadar sipariş = aynı gün kargo.",
        "Aynı gün kargo için son saat 15:00. Sonrası yarın sabah ilk iş.",
      ],
      hashtags: [["#kargo", "#{handle}"], ["#alışveriş"]],
      cta: ["Takipte kal.", "Soruların için yanıtla."],
      music: [],
    },
    suggestedAt: {
      day: 1,
      time: "11:00",
    },
  },
  {
    id: "es-li-growth",
    platform: "linkedin",
    format: "post",
    title: "Bir yılda 10.000 sipariş: Öğrendiklerimiz",
    description:
      "Küçük bir e-ticaret ekibinin ilk yılından operasyon ve müşteri deneyimi dersleri.",
    caption:
      "İlk yılımızda 10.000 siparişi geride bıraktık. En büyük dersimiz: hızlı kargo kadar dürüst stok bilgisi de güven kazandırıyor. Ekibimizden 5 ders.",
    hashtags: ["#eticaret", "#girişimcilik", "#müşterideneyimi"],
    cta: "Siz hangi dersi en zor yoldan öğrendiniz?",
    media: [photo("es-li-m", IMG.warehouse, "1:1", "Kargo kutularıyla dolu depo")],
    theme: "storytelling",
    reasoning:
      "LinkedIn'de kurucu hikâyeleri iş ortağı ve tedarikçi ilgisini artırıyor; hesabında en yüksek etkileşimi alan biçim.",
    estimate: {
      reach: [2000, 5200],
      engagementRate: 4.9,
      potential: "average",
    },
    alternatives: {
      title: ["10.000 siparişin ardından", "E-ticarette ilk yıl"],
      caption: [
        "10.000 sipariş, 1 depo, 6 kişilik ekip. Bu yıl öğrendiklerimizi paylaşıyoruz.",
        "Hızlı büyümek değil, doğru büyümek: ilk yılımızdan 5 ders.",
      ],
      hashtags: [
        ["#girişimcilik", "#eticaret"],
        ["#operasyon", "#lojistik"],
      ],
      cta: ["Deneyimlerinizi yorumlarda bekliyoruz.", "Ekibimize katılmak ister misiniz?"],
      music: [],
    },
    suggestedAt: {
      day: 5,
      time: "09:30",
    },
  },
  {
    id: "ex-ig-product",
    platform: "instagram",
    format: "post",
    title: "Haftanın ürünü: kablosuz kulaklık",
    description: "Haftanın öne çıkan ürününü tanıtan tek kare gönderi.",
    caption:
      "Haftanın ürünü: 30 saat pil, aktif gürültü engelleme, katlanabilir tasarım. Bugün sipariş, yarın kapında.",
    hashtags: ["#haftanınürünü", "#kulaklık", "#{handle}"],
    cta: "Ürün linki profilde.",
    media: [photo("ex-ig-product-m", IMG.headphones, "4:5", "Kulaklık")],
    theme: "productFocused",
    reasoning:
      "Haftanın ürünü gönderileri hesabında ürün sayfası tıklamalarının en yüksek olduğu içerik.",
    estimate: {
      reach: [5000, 9500],
      engagementRate: 5.4,
      potential: "average",
    },
    alternatives: {
      title: ["30 saat pil", "Haftanın seçimi"],
      caption: ["Uzun yolculukların yeni arkadaşı.", "Gürültüyü kapat, müziği aç."],
      hashtags: [
        ["#teknoloji", "#{handle}"],
        ["#yeniürün", "#müzik"],
      ],
      cta: ["Detaylar için DM.", "Hemen incele."],
      music: [],
    },
    suggestedAt: {
      day: 2,
      time: "12:00",
    },
  },
  {
    id: "ex-ig-reel-pack",
    platform: "instagram",
    format: "reel",
    title: "Siparişin nasıl paketleniyor?",
    description: "Bir siparişin özenle paketlenişini gösteren Reel.",
    caption: "Kutu, koruyucu kâğıt, el yazısı not. Her sipariş bu özenle paketleniyor.",
    hashtags: ["#paketleme", "#siparişhazırlığı", "#{handle}"],
    music: {
      title: "Paper Planes",
      artist: "Lofi Beats",
    },
    cta: "Senin siparişin de böyle gelecek.",
    media: [video("ex-ig-reel-pack-m", IMG.warehouse, "9:16", "Depo", 25)],
    theme: "behindTheScenes",
    reasoning:
      "Paketleme videoları yükselişte; hesabındaki perde arkası Reel'ler sepete ekleme oranını artırıyor.",
    relatedTrendId: "et-packing",
    estimate: {
      reach: [11000, 20000],
      engagementRate: 7.2,
      potential: "high",
    },
    alternatives: {
      title: ["Paketleme anı", "Kutunun içinde ne var?"],
      caption: ["Siparişin kapına gelmeden önce.", "Her pakette el yazısı bir not."],
      hashtags: [
        ["#asmr", "#{handle}"],
        ["#küçükişletme", "#kargo"],
      ],
      cta: ["Sipariş ver, notunu gör.", "Takip et."],
      music: [
        {
          title: "Coffee & Boxes",
          artist: "Chillhop",
        },
      ],
    },
    suggestedAt: {
      day: 3,
      time: "19:00",
    },
  },
  {
    id: "ex-ig-carousel-gift",
    platform: "instagram",
    format: "carousel",
    title: "500 TL altı 4 hediye",
    description: "Bütçe dostu hediye önerilerini sıralayan carousel.",
    caption:
      "Güneş gözlüğü, deri cüzdan, kahve kupası ve kulaklık kılıfı. 500 TL altı 4 hediye fikri kaydırmada.",
    hashtags: ["#hediyerehberi", "#hediyefikri", "#{handle}"],
    cta: "Kaydet, doğum günü yaklaşınca aç.",
    media: [
      photo("ex-ig-carousel-gift-1", IMG.sunglasses, "4:5", "Güneş gözlüğü"),
      photo("ex-ig-carousel-gift-2", IMG.bags, "4:5", "Çantalar"),
      photo("ex-ig-carousel-gift-3", IMG.watch, "4:5", "Saat"),
    ],
    theme: "promotional",
    reasoning:
      "Hediye rehberleri yükselişte; bütçe odaklı carousel'ler en çok kaydedilen ve paylaşılan biçim.",
    relatedTrendId: "et-gift-guide",
    estimate: {
      reach: [8000, 14000],
      engagementRate: 6.5,
      potential: "high",
    },
    alternatives: {
      title: ["Bütçe dostu hediyeler", "4 hediye fikri"],
      caption: ["Hediye seçmek zor değil, liste hazır.", "500 TL altında anlamlı hediyeler."],
      hashtags: [
        ["#hediye", "#{handle}"],
        ["#doğumgünü", "#alışveriş"],
      ],
      cta: ["Arkadaşını etiketle.", "Ürünleri incele."],
      music: [],
    },
    suggestedAt: {
      day: 5,
      time: "12:00",
    },
  },
  {
    id: "ex-tt-unbox",
    platform: "tiktok",
    format: "video",
    title: "Sesiyle kutu açılışı",
    description: "Bir siparişin kutu açılışını sesli ve yakın planda gösteren video.",
    caption: "Bant, kâğıt, kutu ve içindeki sürpriz. Siparişimiz nasıl açılıyor, sesiyle izle.",
    hashtags: ["#unboxing", "#kutuaçılışı", "#{handle}"],
    music: {
      title: "Soft Paper",
      artist: "Lofi Beats",
    },
    cta: "Senin kutun da yolda olabilir.",
    media: [video("ex-tt-unbox-m", IMG.camera, "9:16", "Kutu açılışı", 25)],
    theme: "productFocused",
    reasoning:
      "Kutu açılışı TikTok'ta yükselişte; sesli unboxing videoları tamamlanma oranında ortalamanın üstünde.",
    relatedTrendId: "et-unboxing",
    estimate: {
      reach: [16000, 29000],
      engagementRate: 8.0,
      potential: "high",
    },
    alternatives: {
      title: ["Unboxing sesi", "Kutunun içinde ne var?"],
      caption: ["Bu kutunun içinden ne çıktı?", "En tatmin edici kutu açılışı."],
      hashtags: [
        ["#asmr", "#{handle}"],
        ["#alışveriş", "#yeniürün"],
      ],
      cta: ["Takip et.", "Ürün linki profilde."],
      music: [
        {
          title: "Coffee & Boxes",
          artist: "Chillhop",
        },
      ],
    },
    suggestedAt: {
      day: 1,
      time: "20:00",
    },
  },
  {
    id: "ex-tt-vs",
    platform: "tiktok",
    format: "video",
    title: "Hangisi: siyah mı beyaz mı?",
    description: "İki renk seçeneğini karşılaştıran oylama videosu.",
    caption:
      "Aynı sneaker, iki renk. Siyah her kombine uyar, beyaz yazın en iyisi. Senin seçimin hangisi?",
    hashtags: ["#sneaker", "#hangisi", "#{handle}"],
    music: {
      title: "Morning Routine",
      artist: "Chillhop",
    },
    cta: "Yorumlara rengini yaz.",
    media: [video("ex-tt-vs-m", IMG.sneaker, "9:16", "Sneaker", 20)],
    theme: "entertaining",
    reasoning:
      "Karşılaştırma videoları TikTok'ta yükselişte; seçim soran videolar yorum sayısını artırıyor.",
    relatedTrendId: "et-vs",
    estimate: {
      reach: [13000, 24000],
      engagementRate: 8.2,
      potential: "high",
    },
    alternatives: {
      title: ["Siyah mı beyaz mı?", "İki renk, bir sneaker"],
      caption: ["Aynı modelin iki rengi: hangisi senin?", "Oyunu sen belirle: siyah ya da beyaz."],
      hashtags: [
        ["#ayakkabı", "#{handle}"],
        ["#stil", "#karşılaştırma"],
      ],
      cta: ["Takip et.", "Ürünü incele."],
      music: [
        {
          title: "Coffee & Boxes",
          artist: "Chillhop",
        },
      ],
    },
    suggestedAt: {
      day: 3,
      time: "19:00",
    },
  },
  {
    id: "ex-tt-warehouse",
    platform: "tiktok",
    format: "video",
    title: "Depoda bir gün",
    description: "Siparişlerin hazırlanma sürecini anlatan perde arkası video.",
    caption:
      "Sabah 9'da 120 sipariş, öğlene kadar hepsi paketli, 15:00'te kargoda. Depoda bir gün.",
    hashtags: ["#perdearkası", "#eticaret", "#{handle}"],
    music: {
      title: "Paper Planes",
      artist: "Lofi Beats",
    },
    cta: "Siparişin bugün kargoda.",
    media: [video("ex-tt-warehouse-m", IMG.warehouse, "9:16", "Depo", 30)],
    theme: "behindTheScenes",
    reasoning:
      "Perde arkası videoları güven oluşturuyor; hesabında hızlı kargo vurgusu sepete ekleme oranını artırıyor.",
    relatedTrendId: "et-packing",
    estimate: {
      reach: [10000, 19000],
      engagementRate: 7.0,
      potential: "average",
    },
    alternatives: {
      title: ["120 siparişlik bir gün", "Siparişten kargoya"],
      caption: ["Siparişin hangi yoldan geçiyor?", "Depoda sabahtan akşama."],
      hashtags: [
        ["#kargo", "#{handle}"],
        ["#küçükişletme", "#depo"],
      ],
      cta: ["Takip et.", "Bugün sipariş ver."],
      music: [
        {
          title: "Coffee & Boxes",
          artist: "Chillhop",
        },
      ],
    },
    suggestedAt: {
      day: 5,
      time: "13:00",
    },
  },
];

export const ecommercePosts: SeedPost[] = [
  {
    id: "ep-sneaker-unbox",
    platform: "instagram",
    format: "reel",
    status: "published",
    title: "Kırmızı koşu ayakkabısı kutu açılışı",
    caption: "Bu haftanın en çok sorulan ürünü. Kutudan çıkan her şey, sesi açık izle.",
    hashtags: ["#unboxing", "#sneaker", "#{handle}"],
    music: {
      title: "Soft Paper",
      artist: "Lofi Beats",
    },
    media: [video("ep-sneaker-m", IMG.sneaker, "9:16", "Kırmızı koşu ayakkabısı", 22)],
    theme: "productFocused",
    performanceHint: "high",
    at: {
      day: -2,
      time: "20:00",
    },
  },
  {
    id: "ep-watch-reel",
    platform: "instagram",
    format: "reel",
    status: "published",
    title: "Akıllı saatin 5 gizli özelliği",
    caption: "Çoğu kullanıcının bilmediği 5 özellik. Üçüncüsü pil ömrünü ikiye katlıyor.",
    hashtags: ["#akıllısaat", "#ipucu", "#{handle}"],
    media: [video("ep-watch-m", IMG.watch, "9:16", "Beyaz zeminde akıllı saat", 30)],
    theme: "productFocused",
    performanceHint: "high",
    at: {
      day: -9,
      time: "19:30",
    },
  },
  {
    id: "ep-gift-carousel",
    platform: "instagram",
    format: "carousel",
    status: "published",
    title: "Anneler için 4 hediye",
    caption: "Anneler Günü yaklaşıyor. Farklı bütçelere 4 öneri, hepsi hediye paketli.",
    hashtags: ["#hediye", "#annelergünü"],
    media: [
      photo("ep-gift-1", IMG.camera, "4:5", "Anlık fotoğraf makinesi"),
      photo("ep-gift-2", IMG.sunglasses, "4:5", "Güneş gözlüğü"),
      photo("ep-gift-3", IMG.bags, "4:5", "Alışveriş poşetleri"),
    ],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -6,
      time: "12:00",
    },
  },
  {
    id: "ep-story-restock",
    platform: "instagram",
    format: "story",
    status: "published",
    title: "Siyah sneaker yeniden stokta",
    caption: "Bekleme listesindekiler: siyah sneaker yeniden stokta, 40 adet.",
    hashtags: [],
    cta: "Ürüne git",
    media: [photo("ep-restock-m", IMG.sneakerDark, "9:16", "Siyah sneaker")],
    theme: "promotional",
    performanceHint: "low",
    at: {
      day: -1,
      time: "10:00",
    },
  },
  {
    id: "ep-tt-packing",
    platform: "tiktok",
    format: "video",
    status: "published",
    title: "Bir siparişi paketliyoruz",
    caption: "Kırılmasın diye üç katman koruma, bir de el yazısı not. Senin siparişin de böyle.",
    hashtags: ["#packanorderwithme", "#küçükişletme", "#{handle}"],
    media: [video("ep-tt-pack-m", IMG.warehouse, "9:16", "Depoda kargo hazırlığı", 35)],
    theme: "behindTheScenes",
    performanceHint: "high",
    at: {
      day: -4,
      time: "18:00",
    },
  },
  {
    id: "ep-tt-vs",
    platform: "tiktok",
    format: "video",
    status: "published",
    title: "Hangisi: Beyaz mı siyah mı?",
    caption: "Aynı ayakkabının iki rengi. Hangisinin daha çok satıldığını tahmin et.",
    hashtags: ["#hangisi", "#sneaker"],
    media: [video("ep-tt-vs-m", IMG.shoes, "9:16", "Beyaz sneaker", 18)],
    theme: "productFocused",
    performanceHint: "average",
    at: {
      day: -11,
      time: "20:30",
    },
  },
  {
    id: "ep-yt-guide",
    platform: "youtube",
    format: "video",
    status: "published",
    title: "Doğru akıllı saati seçmek: 8 dakikalık rehber",
    caption: "Pil ömrü, sensörler, uyumluluk: akıllı saat alırken bakılacak 5 şey.",
    hashtags: ["#akıllısaat", "#rehber"],
    media: [video("ep-yt-m", IMG.watch, "16:9", "Akıllı saat yakın çekim", 480)],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -14,
      time: "18:00",
    },
  },
  {
    id: "ep-x-holiday",
    platform: "x",
    format: "post",
    status: "published",
    title: "Bayram kargo takvimi",
    caption:
      "Bayram süresince kargolar 1 gün gecikmeli çıkacak. Siparişlerin yine aynı özenle hazırlanıyor.",
    hashtags: ["#kargo"],
    media: [],
    theme: "promotional",
    performanceHint: "low",
    at: {
      day: -8,
      time: "11:00",
    },
  },
  {
    id: "ep-li-team",
    platform: "linkedin",
    format: "post",
    status: "published",
    title: "Depo ekibimizle tanışın",
    caption:
      "Her gün 200'den fazla siparişi hatasız hazırlayan depo ekibimiz. Sabah toplantısından bir kare.",
    hashtags: ["#ekip", "#eticaret", "#lojistik"],
    media: [photo("ep-li-team-m", IMG.warehouse, "1:1", "Depo ekibi")],
    theme: "behindTheScenes",
    performanceHint: "average",
    at: {
      day: -12,
      time: "09:30",
    },
  },
  {
    id: "ep-headphone-launch",
    platform: "instagram",
    format: "post",
    status: "scheduled",
    title: "Yeni kulaklık stoklarda",
    caption: "Kablosuz, 30 saat pil, katlanabilir tasarım. Yarın 10:00'da satışta.",
    hashtags: ["#yeniürün", "#kulaklık", "#{handle}"],
    cta: "Hatırlatma için bildirimleri aç.",
    media: [photo("ep-launch-m", IMG.headphones, "4:5", "Sarı zeminde kulaklık")],
    theme: "productFocused",
    at: {
      day: 1,
      time: "10:00",
    },
  },
  {
    id: "ep-tt-return",
    platform: "tiktok",
    format: "video",
    status: "scheduled",
    title: "İade nasıl yapılır? 20 saniyede",
    caption: "İade kodu al, kutuya koy, kargoya ver. Bu kadar.",
    hashtags: ["#iade", "#alışveriş"],
    media: [video("ep-tt-return-m", IMG.bags, "9:16", "Alışveriş poşetleri", 20)],
    theme: "educational",
    at: {
      day: 2,
      time: "19:00",
    },
  },
  {
    id: "ep-li-hiring",
    platform: "linkedin",
    format: "post",
    status: "scheduled",
    title: "Müşteri deneyimi uzmanı arıyoruz",
    caption: "Ekibimize müşterilerimize hızlı ve içten yanıt verecek bir arkadaş arıyoruz.",
    hashtags: ["#işilanı", "#müşterideneyimi"],
    media: [photo("ep-hiring-m", IMG.store, "1:1", "Mağazada çalışan ekip")],
    theme: "communityFocused",
    at: {
      day: 4,
      time: "10:00",
    },
  },
  {
    id: "ep-sunglasses",
    platform: "instagram",
    format: "carousel",
    status: "draft",
    title: "Yüz şekline göre güneş gözlüğü",
    caption: "Yuvarlak, kare, oval: yüz şekline en uygun çerçeve hangisi? Kaydır.",
    hashtags: ["#güneşgözlüğü", "#stil"],
    media: [
      photo("ep-sun-1", IMG.sunglasses, "4:5", "Güneş gözlüğü"),
      photo("ep-sun-2", IMG.bags, "4:5", "Alışveriş poşetleri"),
    ],
    theme: "educational",
    at: {
      day: 6,
      time: "12:30",
    },
  },
  {
    id: "ep-yt-short-camera",
    platform: "youtube",
    format: "short",
    status: "draft",
    title: "Anlık fotoğraf makinesiyle ilk kare",
    caption: "Kutudan çıkar, film tak, çek: ilk karenin 15 saniyede çıkışı.",
    hashtags: ["#shorts", "#fotoğraf"],
    media: [video("ep-yt-short-m", IMG.camera, "9:16", "Anlık fotoğraf makinesi", 15)],
    theme: "productFocused",
    at: {
      day: 7,
      time: "18:00",
    },
  },
];
