import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir güzellik stüdyosunun ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const beautyStarter: StarterKit = {
  suggestions: [
    {
      id: "bst-welcome",
      platform: "instagram",
      format: "reel",
      title: "Stüdyomuza hoş geldin",
      description: "Stüdyoyu, bakım odasını ve atmosferi gösteren 20 saniyelik tur.",
      caption:
        "{brand} kapılarını açtı. Sakin bir ortam, uzman eller ve sana ayrılmış bir saat. Stüdyomuzu gez.",
      hashtags: ["#yenistüdyo", "#güzellik", "#ciltbakımı"],
      music: {
        title: "Golden Hour",
        artist: "JVKE",
      },
      cta: "İlk randevuna özel cilt analizi bizden.",
      media: [video("bst-welcome-m", IMG.salon, "9:16", "Güzellik stüdyosu", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Güzellik hizmetinde danışanlar önce mekânı görmek ister. Stüdyo turu ilk randevu taleplerini getirir.",
      estimate: {
        reach: [600, 2200],
        engagementRate: 8.6,
        potential: "high",
      },
      alternatives: {
        title: ["Stüdyo turu", "Kapılarımız açık"],
        caption: [
          "Yeni stüdyomuzu 20 saniyede gez. Seni bekliyoruz.",
          "Kendine ayıracağın saat için sakin bir yer.",
        ],
        hashtags: [
          ["#güzellikstüdyosu", "#bakım"],
          ["#yeniaçılış", "#{handle}"],
        ],
        cta: ["Randevu için DM.", "Konum profilde."],
        music: [
          {
            title: "Calm Waters",
            artist: "Lofi Spa",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "bst-services",
      platform: "instagram",
      format: "carousel",
      title: "Hizmetlerimiz",
      description: "Her hizmete bir kare: cilt bakımı, makyaj, tırnak, saç.",
      caption:
        "{brand} hizmetleri: cilt bakımı, makyaj, tırnak ve saç. Kaydır, sana uygun olanı bul.",
      hashtags: ["#güzellik", "#ciltbakımı", "#makyaj"],
      cta: "Hangisini denemek istersin?",
      media: [
        photo("bst-serv-1", IMG.facial, "4:5", "Cilt bakımı"),
        photo("bst-serv-2", IMG.makeupArtist, "4:5", "Makyaj"),
        photo("bst-serv-3", IMG.manicure, "4:5", "Manikür"),
      ],
      theme: "promotional",
      reasoning:
        "Yeni takipçiler önce ne sunduğunu görmek ister; hizmet carousel'i en çok kaydedilen ilk paylaşım.",
      estimate: {
        reach: [300, 1200],
        engagementRate: 6.8,
        potential: "average",
      },
      alternatives: {
        title: ["Neler yapıyoruz?", "Sana nasıl yardımcı olabiliriz?"],
        caption: [
          "Cilt bakımından tırnağa, tüm hizmetlerimiz tek carousel'de.",
          "Bakım, makyaj, tırnak: hepsi aynı çatı altında.",
        ],
        hashtags: [["#bakım", "#{handle}"], ["#güzellikmerkezi"]],
        cta: ["Fiyatlar için DM.", "Sorularını yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "bst-tt-intro",
      platform: "tiktok",
      format: "video",
      title: "Uzmanımızla tanış",
      description: "Uzmanın kameraya kendini ve yaklaşımını anlattığı 30 saniyelik video.",
      caption: "{brand} uzmanı Melis anlatıyor: neden doğal görünüm, neden sade bakım?",
      hashtags: ["#güzellikuzmanı", "#ciltbakımı", "#makyaj"],
      music: {
        title: "Golden Hour",
        artist: "JVKE",
      },
      cta: "Takip et, ipuçları her hafta.",
      media: [video("bst-tt-intro-m", IMG.makeupArtist, "9:16", "Makyaj uzmanı", 30)],
      theme: "storytelling",
      reasoning:
        "Güzellikte karar uzmana güvenle verilir. Tanışma videoları TikTok'ta yeni hesapları öne çıkarır.",
      estimate: {
        reach: [900, 4200],
        engagementRate: 8.9,
        potential: "high",
      },
      alternatives: {
        title: ["Seni kim karşılayacak?", "Uzman köşesi"],
        caption: [
          "Merhaba, ben Melis! Seni stüdyomuzda ağırlamak için sabırsızlanıyorum.",
          "Doğal görünümün sırrını uzmanımız anlatıyor.",
        ],
        hashtags: [
          ["#güzellik", "#{handle}"],
          ["#uzman", "#bakımipuçları"],
        ],
        cta: ["Soru sor, yanıtlayalım.", "Takipte kal."],
        music: [
          {
            title: "Calm Waters",
            artist: "Lofi Spa",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "bst-tt-tip",
      platform: "tiktok",
      format: "video",
      title: "30 saniyede cilt tipini anla",
      description: "Peçete testiyle cilt tipini anlamanın kolay yolu.",
      caption: "{brand} uzmanlarından 30 saniyelik ipucu: sabah bir peçeteyle cilt tipini anla.",
      hashtags: ["#ciltbakımı", "#ciltipi", "#skincare"],
      cta: "Hangi tipsin? Yorumlara yaz.",
      media: [video("bst-tt-tip-m", IMG.bottles, "9:16", "Bakım ürünleri", 30)],
      theme: "educational",
      reasoning: "Kısa eğitici videolar yeni hesapların keşfete düşmesini kolaylaştırır.",
      relatedTrendId: "bt-skin-routine",
      estimate: {
        reach: [800, 3800],
        engagementRate: 8.1,
        potential: "average",
      },
      alternatives: {
        title: ["Cilt tipin ne?", "Peçete testi"],
        caption: [
          "Cilt tipini bilmeden doğru ürünü seçemezsin. Bu test 30 saniye.",
          "Kuru mu, yağlı mı, karma mı? Peçete söylesin.",
        ],
        hashtags: [["#skincare", "#{handle}"], ["#güzellikipucu"]],
        cta: ["Kaydet.", "Takip et, devamı geliyor."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:30",
      },
    },
    {
      id: "bst-yt-short",
      platform: "youtube",
      format: "short",
      title: "Stüdyoda bir gün",
      description: "Sabahtan akşama stüdyodan kısa kesitler.",
      caption: "Stüdyoda bir gün: hazırlık, ilk danışan, son kahve. {brand} perde arkası.",
      hashtags: ["#shorts", "#güzellik", "#perdearkası"],
      cta: "Abone ol.",
      media: [video("bst-yt-short-m", IMG.salon, "9:16", "Stüdyo", 30)],
      theme: "behindTheScenes",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; perde arkası kesitler en çok izlenen tür.",
      estimate: {
        reach: [300, 1400],
        engagementRate: 6.0,
        potential: "average",
      },
      alternatives: {
        title: ["Perde arkası", "Bir günümüz"],
        caption: [
          "Sabah 9'dan akşam 7'ye stüdyomuzda bir gün.",
          "Danışanlarımızın görmediği hazırlıklar.",
        ],
        hashtags: [["#shorts", "#günlük"], ["#güzellikstüdyosu"]],
        cta: ["Bir sonraki videoyu sen seç.", "Sorunu yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "18:00",
      },
    },
    {
      id: "bst-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Stüdyomuzu tanıyın",
      description: "Hizmetleri, uzmanları ve hijyen süreçlerini anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak hangi hizmetleri sunduğumuzu, uzmanlarımızı ve hijyen süreçlerimizi anlatıyoruz.",
      hashtags: ["#güzellik", "#tanıtım"],
      cta: "Abone ol, bakım videoları yolda.",
      media: [video("bst-yt-intro-m", IMG.facial, "16:9", "Cilt bakımı", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; arama trafiği ve güven getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.1,
        potential: "average",
      },
      alternatives: {
        title: ["Biz kimiz?", "Hizmetlerimiz ve ekibimiz"],
        caption: [
          "Stüdyomuzu, ekibimizi ve çalışma şeklimizi tanıyın.",
          "Sakin, hijyenik ve uzman: yaklaşımımız bu videoda.",
        ],
        hashtags: [["#tanıtım"], ["#güzellikmerkezi"]],
        cta: ["Sorularınızı yorumlara yazın.", "Randevu bağlantısı açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "bst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Stüdyoyu kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: cilt bakımı, makyaj ve tırnak için sakin bir güzellik stüdyosu. Bakım sorularını burada da yanıtlıyoruz.",
      hashtags: ["#güzellik"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning: "X'te net bir ilk tanıtım, takipçilerin soru sormaya başlamasını kolaylaştırır.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.1,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Bakım sorularını yanıtlamaya hazırız.",
          "Yeni bir güzellik stüdyosuyuz. Sorularını bekliyoruz.",
        ],
        hashtags: [["#ciltbakımı"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "bst-x-ask",
      platform: "x",
      format: "post",
      title: "Bakım sorusu sor",
      description: "Takipçileri bakım sorusu sormaya davet eden gönderi.",
      caption:
        "Cilt bakımıyla ilgili kafana takılan ne var? Bu hafta {brand} uzmanları tüm soruları yanıtlıyor.",
      hashtags: ["#ciltbakımı"],
      cta: "Sorunu yanıta yaz.",
      media: [],
      theme: "communityFocused",
      reasoning: "Soru-cevap gönderileri X'te yeni hesapların ilk etkileşimlerini getirir.",
      estimate: {
        reach: [100, 500],
        engagementRate: 4.0,
        potential: "average",
      },
      alternatives: {
        title: ["Uzmanına sor", "Soru-cevap haftası"],
        caption: [
          "Bu hafta tüm bakım sorularını yanıtlıyoruz. Sor bakalım.",
          "Akne, leke, kuruluk? Uzmanlarımıza sor.",
        ],
        hashtags: [["#güzellikipucu"], ["#skincare"]],
        cta: ["Yanıtla.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "12:00",
      },
    },
    {
      id: "bst-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Stüdyomuzu açtık",
      description: "Stüdyonun kuruluşunu ve yaklaşımını anlatan duyuru.",
      caption:
        "Yeni güzellik stüdyomuzu duyurmaktan mutluluk duyuyoruz: {brand}. Doğal görünüm, sade bakım ve yüksek hijyen standartlarıyla hizmetinizdeyiz.",
      hashtags: ["#girişimcilik", "#güzelliksektörü"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("bst-li-launch-m", IMG.salon, "1:1", "Stüdyo")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de açılış duyurusu otel, spa ve kurumsal iş birlikleri için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.9,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Kapılarımızı açtık"],
        caption: [
          "Uzun bir hazırlığın ardından stüdyomuzu açtık.",
          "Küçük bir ekip, büyük bir özen: stüdyomuz açıldı.",
        ],
        hashtags: [["#girişim"], ["#güzellik", "#işletme"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "bst-li-corporate",
      platform: "linkedin",
      format: "post",
      title: "Kurumsal öz bakım günleri",
      description: "Şirketlere ekip öz bakım günleri teklif eden paylaşım.",
      caption:
        "{brand} ekipler için öz bakım günleri düzenliyor: kısa cilt analizi, el bakımı ve stres azaltan bir mola.",
      hashtags: ["#kurumsal", "#çalışanmutluluğu"],
      cta: "Teklif için mesaj atın.",
      media: [photo("bst-li-corp-m", IMG.manicure, "1:1", "El bakımı")],
      theme: "promotional",
      reasoning: "Net bir kurumsal teklif LinkedIn'de doğru karar vericilere ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.3,
        potential: "average",
      },
      alternatives: {
        title: ["Ekibiniz için bir mola", "Ofiste öz bakım"],
        caption: [
          "Çalışan mutluluğu küçük molalarla başlar.",
          "Ekibinize kendine ayıracağı bir saat hediye edin.",
        ],
        hashtags: [["#wellbeing"], ["#insankaynakları"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "bst-story-poll",
      platform: "instagram",
      format: "story",
      title: "Ne öğrenmek istersin?",
      description: "Takipçilere hangi konuda içerik istediklerini soran anket.",
      caption: "{brand} anket: Cilt bakımı mı, makyaj mı?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("bst-story-m", IMG.cosmetics, "9:16", "Bakım ürünleri")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.2,
        potential: "average",
      },
      alternatives: {
        title: ["Konu anketi", "Sen seç"],
        caption: ["Bu hafta hangi konuyu konuşalım?", "İpucu mu, tutorial mı?"],
        hashtags: [[], []],
        cta: ["Ankete katıl", "Seçimini yap"],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "10:00",
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
      instagram: 680,
      tiktok: 1900,
      youtube: 190,
      x: 70,
      linkedin: 120,
    },
    engagementRate: 8.6,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
