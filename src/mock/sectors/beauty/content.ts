import { photo, video } from "@/mock/images";
import type { SeedPost, SeedSuggestion, Trend } from "@/types";

export const IMG = {
  makeup: "1522335789203-aabd1fc54bc9",
  cosmetics: "1596462502278-27bfdc403348",
  facial: "1570172619644-dfd03ed5d881",
  salon: "1560066984-138dadb4c035",
  makeupArtist: "1487412947147-5cebf100ffc2",
  palette: "1512496015851-a90fb38ba796",
  bottles: "1608248543803-ba4f8c70ae0b",
  mask: "1616394584738-fc6e612e71b9",
  manicure: "1519014816548-bf5fe059798b",
  nailArt: "1604654894610-df63bc536371",
  hair: "1562322140-8baeececf3df",
};

export const beautyTrends: Trend[] = [
  {
    id: "bt-skin-routine",
    title: "3 adımlı cilt bakım rutini",
    description: "Uzun rutinler yerine 3 adımlık sade bakım önerileri çok kaydediliyor.",
    category: "topic",
    platforms: ["instagram", "tiktok"],
    momentum: 54,
    insight:
      "Sabah ve akşam için 3'er adım öneren bir carousel hazırla; her ürün grubunun ne işe yaradığını tek cümleyle anlat.",
    hashtags: ["#ciltbakımı", "#skincare", "#rutin"],
  },
  {
    id: "bt-grwm",
    title: "Get ready with me",
    description: "Makyaj sürecini sohbet eder gibi anlatan videolar yükselişte.",
    category: "format",
    platforms: ["tiktok", "instagram"],
    momentum: 47,
    insight: "Bir gelin makyajını sohbet ederek, adım adım çek; danışan iznini videoda belirt.",
    hashtags: ["#grwm", "#makyaj"],
  },
  {
    id: "bt-clean-girl",
    title: "Doğal makyaj",
    description: "Az ürünle 'temiz' görünüm veren doğal makyaj aramaları artıyor.",
    category: "topic",
    platforms: ["instagram", "youtube"],
    momentum: 39,
    insight:
      "5 ürünle doğal makyaj tutorial'ı çek; her ürünün yerine kullanılabilecek alternatifi de söyle.",
    hashtags: ["#doğalmakyaj", "#nomakeup"],
  },
  {
    id: "bt-nail-art",
    title: "Minimal tırnak tasarımları",
    description: "Tek çizgi, nokta ve nude tonlu tırnak tasarımları çok paylaşılıyor.",
    category: "hashtag",
    platforms: ["instagram", "tiktok"],
    momentum: 33,
    insight: "Bu ayın en çok istenen 5 tırnak tasarımını kısa bir Reel'de göster.",
    hashtags: ["#nailart", "#minimaltırnak"],
  },
];

export const beautySuggestions: SeedSuggestion[] = [
  {
    id: "bs-before-after",
    platform: "instagram",
    format: "reel",
    title: "Cilt bakımı: Önce ve sonra",
    description: "Tek seanslık nem bakımının etkisini gösteren, danışan izniyle çekilmiş Reel.",
    caption:
      "Tek seans nem bakımı sonrası. Sonuçlar kişiden kişiye değişir; bu danışanımızın cildi yorgunluk ve kurulukla gelmişti. (Paylaşım izniyle)",
    hashtags: ["#ciltbakımı", "#nembakımı", "#öncesonra", "#{handle}"],
    music: {
      title: "Calm Waters",
      artist: "Lofi Spa",
    },
    cta: "Cildine uygun bakımı birlikte seçelim, randevu DM'de.",
    media: [video("bs-ba-m", IMG.facial, "9:16", "Cilt bakımı yapılan danışan", 24)],
    theme: "storytelling",
    reasoning:
      "Önce/sonra Reel'leri son 30 günde ortalamanın %41 üstünde etkileşim aldı ve en çok randevu talebini getirdi.",
    estimate: {
      reach: [11000, 19000],
      engagementRate: 8.2,
      potential: "high",
    },
    alternatives: {
      title: ["Tek seansın farkı", "Nem bakımı sonrası"],
      caption: [
        "Yorgun ve kuru gelen cilt, tek seans sonra. Danışanımızın izniyle paylaşıyoruz.",
        "Bakım bir lüks değil, kendine ayırdığın zaman. Bu seansın sonucuna bak.",
      ],
      hashtags: [
        ["#skincare", "#bakım", "#{handle}"],
        ["#ciltbakımı", "#güzellik", "#kadıköy"],
      ],
      cta: ["Randevu için profildeki bağlantıya dokun.", "Cilt analizi için bize yaz."],
      music: [
        {
          title: "Golden Hour",
          artist: "JVKE",
        },
      ],
    },
    suggestedAt: {
      day: 1,
      time: "19:30",
    },
  },
  {
    id: "bs-routine",
    platform: "instagram",
    format: "carousel",
    title: "Sabah 3 adım, akşam 3 adım",
    description: "Sade cilt bakım rutini; her adım tek karede.",
    caption: "Uzun rutinler yerine 3 adım yeterli. Sabah ve akşam rutinini kaydır, kaydet.",
    hashtags: ["#ciltbakımı", "#rutin", "#skincare", "#{handle}"],
    cta: "Kaydet, yarın sabah dene.",
    media: [
      photo("bs-routine-1", IMG.bottles, "4:5", "Cilt bakım şişeleri"),
      photo("bs-routine-2", IMG.cosmetics, "4:5", "Makyaj ve bakım ürünleri"),
      photo("bs-routine-3", IMG.mask, "4:5", "Yüz maskesi uygulaması"),
    ],
    theme: "educational",
    reasoning:
      "3 adımlı rutin konusu %54 yükselişte. Eğitici carousel'ler hesabında en çok kaydedilen biçim.",
    relatedTrendId: "bt-skin-routine",
    estimate: {
      reach: [7000, 12000],
      engagementRate: 6.7,
      potential: "high",
    },
    alternatives: {
      title: ["Sade cilt bakımı", "Rutinin 6 adımda"],
      caption: [
        "Cildin karmaşık rutinlere ihtiyaç duymuyor. Sabah 3, akşam 3 adım.",
        "Temizle, nemlendir, koru. Sade ve etkili bir rutin.",
      ],
      hashtags: [
        ["#skincare", "#güzellikipuçları"],
        ["#ciltbakımırutini", "#{handle}"],
      ],
      cta: ["Cilt tipini yorumlara yaz, öneri verelim.", "Kaydet, unutma."],
      music: [],
    },
    suggestedAt: {
      day: 3,
      time: "12:00",
    },
  },
  {
    id: "bs-grwm",
    platform: "tiktok",
    format: "video",
    title: "GRWM: Gelin makyajı",
    description: "Bir gelin makyajını sohbet ederek adım adım gösteren video.",
    caption:
      "Gelinimiz Ece'yle sohbet ederek makyajını hazırladık. Hangi ürünü neden kullandığımızı anlattık. (Paylaşım izniyle)",
    hashtags: ["#grwm", "#gelinmakyajı", "#makyaj", "#{handle}"],
    music: {
      title: "Golden Hour",
      artist: "JVKE",
    },
    cta: "Düğün tarihin için randevu almayı unutma.",
    media: [video("bs-grwm-m", IMG.makeupArtist, "9:16", "Makyaj yapılan kadın", 45)],
    theme: "behindTheScenes",
    reasoning: "GRWM formatı %47 yükselişte; süreç videoları güven inşa ediyor.",
    relatedTrendId: "bt-grwm",
    estimate: {
      reach: [15000, 28000],
      engagementRate: 7.3,
      potential: "high",
    },
    alternatives: {
      title: ["Bir gelin makyajı", "Düğün sabahı makyaj"],
      caption: [
        "Düğün sabahı, sakin bir stüdyo ve bir fincan kahve. Ece'nin makyajı böyle hazırlandı.",
        "Doğal ama kalıcı: gelin makyajının adımları.",
      ],
      hashtags: [
        ["#grwm", "#düğün"],
        ["#makyajsanatçısı", "#gelin"],
      ],
      cta: ["Takip et, sıradaki GRWM yolda.", "Düğün paketlerimiz DM'de."],
      music: [
        {
          title: "Calm Waters",
          artist: "Lofi Spa",
        },
      ],
    },
    suggestedAt: {
      day: 0,
      time: "20:00",
    },
  },
  {
    id: "bs-yt-natural",
    platform: "youtube",
    format: "video",
    title: "5 ürünle doğal makyaj",
    description: "Az ürünle doğal görünüm; her ürünün alternatifiyle birlikte anlatım.",
    caption:
      "Sadece 5 ürünle doğal makyaj. Her adımda neyi neden kullandığımızı ve evdeki alternatifini anlatıyoruz.",
    hashtags: ["#doğalmakyaj", "#makyajtutorial"],
    cta: "Abone ol, her hafta yeni bir bakım videosu.",
    media: [video("bs-yt-m", IMG.palette, "16:9", "Makyaj fırçaları ve palet", 540)],
    theme: "educational",
    reasoning:
      "Doğal makyaj aramaları %39 artıyor; YouTube'da uzun anlatımlar arama trafiği getiriyor.",
    relatedTrendId: "bt-clean-girl",
    estimate: {
      reach: [3000, 7000],
      engagementRate: 5.6,
      potential: "average",
    },
    alternatives: {
      title: ["Doğal makyaj rehberi", "Az ürünle temiz görünüm"],
      caption: [
        "5 ürün, 10 dakika, doğal bir görünüm.",
        "Makyaj yaptığın belli olmasın istiyorsan bu video senin için.",
      ],
      hashtags: [
        ["#makyaj", "#tutorial"],
        ["#güzellik", "#doğalgörünüm"],
      ],
      cta: ["Kullandığın ürünleri yorumlara yaz.", "Ürün listesi açıklamada."],
      music: [],
    },
    suggestedAt: {
      day: 4,
      time: "19:00",
    },
  },
  {
    id: "bs-x-tip",
    platform: "x",
    format: "post",
    title: "Güneş kremi hatırlatması",
    description: "Kış aylarında da güneş koruyucunun önemini hatırlatan kısa ipucu.",
    caption:
      "Hatırlatma: Kışın da güneş koruyucu kullan. Bulutlu havada da UV ışınları cildine ulaşıyor.",
    hashtags: ["#ciltbakımı", "#spf"],
    cta: "Sorularını yanıtlarda bekliyoruz.",
    media: [],
    theme: "educational",
    reasoning: "Kısa ve net uzman ipuçları X'te en çok paylaşılan içerik.",
    estimate: {
      reach: [900, 2600],
      engagementRate: 3.9,
      potential: "average",
    },
    alternatives: {
      title: ["Kışın SPF", "Bulutlu havada da SPF"],
      caption: [
        "Bulutlu olması güneşin olmadığı anlamına gelmiyor. SPF her mevsim.",
        "Cilt yaşlanmasının en büyük nedeni güneş. Kışın da koru.",
      ],
      hashtags: [["#spf"], ["#güzellikipucu", "#{handle}"]],
      cta: ["Takip et, haftalık ipuçları.", "Soru sor, yanıtlayalım."],
      music: [],
    },
    suggestedAt: {
      day: 2,
      time: "10:00",
    },
  },
  {
    id: "bs-li-hygiene",
    platform: "linkedin",
    format: "post",
    title: "Hijyen standartlarımız",
    description: "Stüdyonun sterilizasyon ve hijyen süreçlerini anlatan güven odaklı paylaşım.",
    caption:
      "Güzellik hizmetinde güvenin temeli hijyen. Tek kullanımlık malzemeler, sterilizasyon cihazı ve her seans sonrası dezenfeksiyon süreçlerimizi paylaşıyoruz.",
    hashtags: ["#hijyen", "#güzelliksektörü", "#müşterideneyimi"],
    cta: "Sektördeki meslektaşlarımızın görüşlerini merak ediyoruz.",
    media: [photo("bs-li-m", IMG.salon, "1:1", "Güzellik salonu iç mekânı")],
    theme: "behindTheScenes",
    reasoning:
      "LinkedIn'de süreç ve standart paylaşımları kurumsal iş birliklerini (otel, spa) artırıyor.",
    estimate: {
      reach: [1500, 4200],
      engagementRate: 4.6,
      potential: "average",
    },
    alternatives: {
      title: ["Önce hijyen", "Görünmeyen süreçlerimiz"],
      caption: [
        "Danışanlarımızın görmediği ama en çok önem verdiğimiz şey: hijyen.",
        "Her seanstan önce ve sonra uyguladığımız 6 adımlık hijyen süreci.",
      ],
      hashtags: [
        ["#hijyen", "#kalite"],
        ["#güzellik", "#işletme"],
      ],
      cta: ["Deneyimlerinizi paylaşın.", "Kurumsal iş birlikleri için bize yazın."],
      music: [],
    },
    suggestedAt: {
      day: 5,
      time: "09:30",
    },
  },
  {
    id: "bx-ig-product",
    platform: "instagram",
    format: "post",
    title: "Ayın favori serumu",
    description: "Salonda en çok tercih edilen serumu tanıtan gönderi.",
    caption:
      "Ayın favorisi: hyaluronik asitli nem serumu. Bakım sonrası cildin gün boyu nemli kalmasına yardımcı oluyor.",
    hashtags: ["#ciltbakımı", "#serum", "#{handle}"],
    cta: "Cilt tipine uygun mu? DM'den sor.",
    media: [photo("bx-ig-product-m", IMG.bottles, "4:5", "Bakım ürünleri")],
    theme: "productFocused",
    reasoning: "Ürün odaklı tek kare gönderiler hesabında soru mesajlarını artırıyor.",
    estimate: {
      reach: [4500, 8500],
      engagementRate: 6.0,
      potential: "average",
    },
    alternatives: {
      title: ["Nem serumu", "Ayın favorisi"],
      caption: ["Bu ay en çok sorulan ürün.", "Bakım sonrası nem için favorimiz."],
      hashtags: [
        ["#ciltbakımı", "#{handle}"],
        ["#güzellik", "#nem"],
      ],
      cta: ["Randevu al.", "Cilt analizi için DM."],
      music: [],
    },
    suggestedAt: {
      day: 2,
      time: "11:00",
    },
  },
  {
    id: "bx-ig-reel-nails",
    platform: "instagram",
    format: "reel",
    title: "Sonbahar tırnak tasarımı",
    description: "Mevsimin tırnak tasarımının adım adım yapılışı.",
    caption:
      "Bordo zemin, ince altın çizgi, mat kaplama. Sonbaharın en çok istenen tasarımı 30 saniyede.",
    hashtags: ["#nailart", "#tırnaktasarımı", "#{handle}"],
    music: {
      title: "Calm Waters",
      artist: "Lofi Spa",
    },
    cta: "Randevu için DM.",
    media: [video("bx-ig-reel-nails-m", IMG.nailArt, "9:16", "Tırnak tasarımı", 30)],
    theme: "behindTheScenes",
    reasoning:
      "Tırnak tasarımı içerikleri yükselişte; adım adım Reel'ler hesabında randevu taleplerini artırıyor.",
    relatedTrendId: "bt-nail-art",
    estimate: {
      reach: [12000, 21000],
      engagementRate: 7.6,
      potential: "high",
    },
    alternatives: {
      title: ["Bordo ve altın", "Mevsimin tasarımı"],
      caption: ["Sonbahar renkleri tırnaklarda.", "Bu tasarım üç adımda hazır."],
      hashtags: [
        ["#manikür", "#{handle}"],
        ["#sonbahar", "#güzellik"],
      ],
      cta: ["Kaydet, randevuda göster.", "Takip et."],
      music: [
        {
          title: "Golden Hour",
          artist: "JVKE",
        },
      ],
    },
    suggestedAt: {
      day: 3,
      time: "18:00",
    },
  },
  {
    id: "bx-ig-carousel-routine",
    platform: "instagram",
    format: "carousel",
    title: "Akşam bakım rutini: 4 adım",
    description: "Akşam cilt bakımının sırasını anlatan carousel.",
    caption:
      "Temizle, tonikle, serumla, nemlendir. Akşam bakım rutininin doğru sırası ve her adımın süresi kaydırmada.",
    hashtags: ["#ciltbakımı", "#akşamrutini", "#{handle}"],
    cta: "Kaydet, akşam uygula.",
    media: [
      photo("bx-ig-carousel-routine-1", IMG.facial, "4:5", "Cilt bakımı"),
      photo("bx-ig-carousel-routine-2", IMG.cosmetics, "4:5", "Kozmetik"),
      photo("bx-ig-carousel-routine-3", IMG.mask, "4:5", "Maske"),
    ],
    theme: "educational",
    reasoning:
      "Bakım rutini içerikleri yükselişte; adım adım carousel'ler hesabında en çok kaydedilen biçim.",
    relatedTrendId: "bt-skin-routine",
    estimate: {
      reach: [7500, 13000],
      engagementRate: 6.7,
      potential: "high",
    },
    alternatives: {
      title: ["Doğru sıra", "4 adımlı akşam bakımı"],
      caption: [
        "Bakım ürünlerinin sırası sonucu değiştirir.",
        "Akşam için kısa ve etkili bir rutin.",
      ],
      hashtags: [
        ["#skincare", "#{handle}"],
        ["#bakımrutini", "#güzellik"],
      ],
      cta: ["Sorunu yorumlara yaz.", "Cilt analizi randevusu al."],
      music: [],
    },
    suggestedAt: {
      day: 5,
      time: "21:00",
    },
  },
  {
    id: "bx-tt-grwm",
    platform: "tiktok",
    format: "video",
    title: "Benimle hazırlan: doğal makyaj",
    description: "Doğal makyajın 5 dakikada yapılışını gösteren GRWM videosu.",
    caption:
      "Nemlendirici, hafif kapatıcı, krem allık, şeffaf maskara. 5 dakikada doğal bir makyaj.",
    hashtags: ["#grwm", "#doğalmakyaj", "#{handle}"],
    music: {
      title: "Calm Waters",
      artist: "Lofi Spa",
    },
    cta: "Ürün listesi yorumlarda.",
    media: [video("bx-tt-grwm-m", IMG.makeup, "9:16", "Makyaj", 30)],
    theme: "educational",
    reasoning:
      "GRWM formatı TikTok'ta yükselişte; doğal makyaj videoları kitlenin en çok kaydettiği içerik.",
    relatedTrendId: "bt-grwm",
    estimate: {
      reach: [15000, 27000],
      engagementRate: 8.0,
      potential: "high",
    },
    alternatives: {
      title: ["5 dakikalık makyaj", "Sade bir sabah makyajı"],
      caption: ["Doğal görünüm için dört ürün yeter.", "Sabah acelesinde 5 dakikalık makyaj."],
      hashtags: [
        ["#makyaj", "#{handle}"],
        ["#cleangirl", "#güzellik"],
      ],
      cta: ["Takip et.", "Makyaj dersi için DM."],
      music: [
        {
          title: "Golden Hour",
          artist: "JVKE",
        },
      ],
    },
    suggestedAt: {
      day: 1,
      time: "08:30",
    },
  },
  {
    id: "bx-tt-facial",
    platform: "tiktok",
    format: "video",
    title: "Cilt bakımı seansından 30 saniye",
    description: "Bir cilt bakımı seansının rahatlatıcı anlarını gösteren video.",
    caption: "Temizlik, buhar, maske ve masaj. Bir cilt bakımı seansının en sakin 30 saniyesi.",
    hashtags: ["#ciltbakımı", "#asmr", "#{handle}"],
    music: {
      title: "Calm Waters",
      artist: "Lofi Spa",
    },
    cta: "Randevu için profildeki linke tıkla.",
    media: [video("bx-tt-facial-m", IMG.facial, "9:16", "Cilt bakımı", 30)],
    theme: "behindTheScenes",
    reasoning: "Cilt bakımı ASMR videoları TikTok'ta tamamlanma oranında ortalamanın üstünde.",
    relatedTrendId: "bt-skin-routine",
    estimate: {
      reach: [12000, 22000],
      engagementRate: 7.4,
      potential: "high",
    },
    alternatives: {
      title: ["Seanstan kesitler", "En sakin 30 saniye"],
      caption: ["Bir cilt bakımı seansı nasıl geçer?", "Kendine ayırdığın bir saatin özeti."],
      hashtags: [
        ["#skincare", "#{handle}"],
        ["#spa", "#rahatlama"],
      ],
      cta: ["Takip et.", "Randevu al."],
      music: [
        {
          title: "Golden Hour",
          artist: "JVKE",
        },
      ],
    },
    suggestedAt: {
      day: 3,
      time: "20:00",
    },
  },
  {
    id: "bx-tt-mistake",
    platform: "tiktok",
    format: "video",
    title: "Nemlendiriciyi atlama",
    description: "Yağlı ciltlerde nemlendirici hakkındaki yanlış bilgiyi düzelten video.",
    caption:
      "Yağlı cilt de nemlendirici ister. Hafif, jel kıvamlı bir ürün seç; cildin daha az yağ üretir.",
    hashtags: ["#ciltbakımı", "#güzellikipucu", "#{handle}"],
    music: {
      title: "Calm Waters",
      artist: "Lofi Spa",
    },
    cta: "Cilt tipini öğrenmek için randevu al.",
    media: [video("bx-tt-mistake-m", IMG.cosmetics, "9:16", "Bakım ürünleri", 25)],
    theme: "educational",
    reasoning:
      "Yanlış bilinen doğrular formatı TikTok'ta paylaşım getiriyor; cilt bakımı soruları en çok gelen DM konusu.",
    estimate: {
      reach: [11000, 20000],
      engagementRate: 7.2,
      potential: "average",
    },
    alternatives: {
      title: ["Yağlı cilt ve nem", "Bir yanlış bilgi"],
      caption: [
        "Yağlı cilt nemlendirici istemez mi?",
        "Nemlendiriciyi atlamak yağlanmayı artırabilir.",
      ],
      hashtags: [
        ["#skincare", "#{handle}"],
        ["#yağlıcilt", "#bakım"],
      ],
      cta: ["Takip et.", "Sorunu yorumlara yaz."],
      music: [
        {
          title: "Golden Hour",
          artist: "JVKE",
        },
      ],
    },
    suggestedAt: {
      day: 5,
      time: "19:00",
    },
  },
];

export const beautyPosts: SeedPost[] = [
  {
    id: "bp-ba-hydra",
    platform: "instagram",
    format: "reel",
    status: "published",
    title: "Nem bakımı önce/sonra",
    caption:
      "Kuru ve mat bir cilt, tek seans sonra. Sonuçlar kişiden kişiye değişir. (Paylaşım izniyle)",
    hashtags: ["#öncesonra", "#ciltbakımı", "#{handle}"],
    music: {
      title: "Calm Waters",
      artist: "Lofi Spa",
    },
    media: [video("bp-hydra-m", IMG.facial, "9:16", "Cilt bakımı", 22)],
    theme: "storytelling",
    performanceHint: "high",
    at: {
      day: -3,
      time: "19:30",
    },
  },
  {
    id: "bp-ba-bride",
    platform: "instagram",
    format: "reel",
    status: "published",
    title: "Gelin makyajı hikâyesi",
    caption: "Ece'nin düğün sabahı: sakin bir stüdyo, doğal bir makyaj ve çok mutlu bir gelin.",
    hashtags: ["#gelinmakyajı", "#düğün"],
    media: [video("bp-bride-m", IMG.makeupArtist, "9:16", "Gelin makyajı", 30)],
    theme: "storytelling",
    performanceHint: "high",
    at: {
      day: -10,
      time: "20:00",
    },
  },
  {
    id: "bp-serum",
    platform: "instagram",
    format: "carousel",
    status: "published",
    title: "Hangi serum kime uygun?",
    caption: "C vitamini, hyaluronik asit, niasinamid: cilt ihtiyacına göre doğru serum.",
    hashtags: ["#serum", "#ciltbakımı"],
    media: [
      photo("bp-serum-1", IMG.bottles, "4:5", "Serum şişeleri"),
      photo("bp-serum-2", IMG.cosmetics, "4:5", "Bakım ürünleri"),
    ],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -6,
      time: "12:00",
    },
  },
  {
    id: "bp-story-slot",
    platform: "instagram",
    format: "story",
    status: "published",
    title: "Cumartesi iki boş saat",
    caption: "Cumartesi 14:00 ve 16:00'da iki boş randevumuz var.",
    hashtags: [],
    cta: "Randevu al",
    media: [photo("bp-slot-m", IMG.salon, "9:16", "Stüdyo")],
    theme: "promotional",
    performanceHint: "low",
    at: {
      day: -1,
      time: "10:00",
    },
  },
  {
    id: "bp-tt-nails",
    platform: "tiktok",
    format: "video",
    status: "published",
    title: "Bu ayın 5 tırnak tasarımı",
    caption: "Minimal çizgiler, nude tonlar ve tek nokta. Hangisi senin tarzın?",
    hashtags: ["#nailart", "#minimaltırnak", "#{handle}"],
    media: [video("bp-nails-m", IMG.nailArt, "9:16", "Tırnak tasarımı", 25)],
    theme: "behindTheScenes",
    performanceHint: "high",
    at: {
      day: -4,
      time: "19:00",
    },
  },
  {
    id: "bp-tt-myth",
    platform: "tiktok",
    format: "video",
    status: "published",
    title: "Cilt bakımında 3 yanlış bilinen",
    caption: "Yağlı cilt nemlendirilmez mi? Üç yaygın yanlışı 30 saniyede düzeltiyoruz.",
    hashtags: ["#ciltbakımı", "#doğruyanlış"],
    media: [video("bp-myth-m", IMG.mask, "9:16", "Yüz maskesi", 30)],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -12,
      time: "20:30",
    },
  },
  {
    id: "bp-yt-routine",
    platform: "youtube",
    format: "video",
    status: "published",
    title: "Akşam cilt bakım rutini: Adım adım",
    caption: "Makyaj temizlemeden geceye hazırlığa, uzmanımızdan 9 dakikalık akşam rutini.",
    hashtags: ["#ciltbakımı", "#rutin"],
    media: [video("bp-yt-m", IMG.facial, "16:9", "Cilt bakımı uygulaması", 540)],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -15,
      time: "18:00",
    },
  },
  {
    id: "bp-x-spf",
    platform: "x",
    format: "post",
    status: "published",
    title: "SPF ne kadar sürülmeli?",
    caption: "Yüzün tamamı için yaklaşık iki parmak boyu güneş koruyucu. Azı korumuyor.",
    hashtags: ["#spf"],
    media: [],
    theme: "educational",
    performanceHint: "low",
    at: {
      day: -8,
      time: "11:00",
    },
  },
  {
    id: "bp-li-team",
    platform: "linkedin",
    format: "post",
    status: "published",
    title: "Ekibimize yeni bir uzman katıldı",
    caption:
      "Medikal estetisyen Selin, cilt analizi ve bakım protokollerinde ekibimizi güçlendiriyor.",
    hashtags: ["#ekip", "#güzelliksektörü"],
    media: [photo("bp-li-m", IMG.salon, "1:1", "Stüdyo")],
    theme: "communityFocused",
    performanceHint: "average",
    at: {
      day: -13,
      time: "09:30",
    },
  },
  {
    id: "bp-gift-card",
    platform: "instagram",
    format: "post",
    status: "scheduled",
    title: "Hediye kartlarımız yayında",
    caption: "Sevdiklerine kendine ayıracağı bir saat hediye et. Kartlar stüdyoda ve online.",
    hashtags: ["#hediyekartı", "#{handle}"],
    cta: "Detaylar profilde.",
    media: [photo("bp-gift-m", IMG.cosmetics, "4:5", "Bakım ürünleri")],
    theme: "promotional",
    at: {
      day: 1,
      time: "12:00",
    },
  },
  {
    id: "bp-tt-grwm",
    platform: "tiktok",
    format: "video",
    status: "scheduled",
    title: "GRWM: Akşam yemeği makyajı",
    caption: "15 dakikada akşam yemeği makyajı, sohbet ederek.",
    hashtags: ["#grwm", "#makyaj"],
    media: [video("bp-tt-grwm-m", IMG.makeupArtist, "9:16", "Makyaj", 40)],
    theme: "behindTheScenes",
    at: {
      day: 3,
      time: "20:00",
    },
  },
  {
    id: "bp-li-workshop",
    platform: "linkedin",
    format: "post",
    status: "scheduled",
    title: "Kurumsal öz bakım atölyesi",
    caption: "Ekipler için 90 dakikalık cilt bakımı ve öz bakım atölyesi.",
    hashtags: ["#kurumsal", "#wellbeing"],
    media: [photo("bp-workshop-m", IMG.bottles, "1:1", "Bakım ürünleri")],
    theme: "promotional",
    at: {
      day: 4,
      time: "10:00",
    },
  },
  {
    id: "bp-brush-care",
    platform: "instagram",
    format: "carousel",
    status: "draft",
    title: "Makyaj fırçası nasıl temizlenir?",
    caption: "Haftada bir temizlik, doğru kurutma: fırçaların ve cildin için 4 adım.",
    hashtags: ["#makyajfırçası", "#hijyen"],
    media: [
      photo("bp-brush-1", IMG.palette, "4:5", "Makyaj fırçaları"),
      photo("bp-brush-2", IMG.makeup, "4:5", "Makyaj ürünleri"),
    ],
    theme: "educational",
    at: {
      day: 6,
      time: "12:30",
    },
  },
  {
    id: "bp-yt-short-nails",
    platform: "youtube",
    format: "short",
    status: "draft",
    title: "1 dakikada tırnak bakımı",
    caption: "Evde tırnak bakımı için 4 kısa adım.",
    hashtags: ["#shorts", "#tırnakbakımı"],
    media: [video("bp-short-m", IMG.manicure, "9:16", "Manikür", 50)],
    theme: "educational",
    at: {
      day: 7,
      time: "18:00",
    },
  },
];
