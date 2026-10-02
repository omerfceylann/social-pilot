import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir dil kursunun ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const educationStarter: StarterKit = {
  suggestions: [
    {
      id: "edst-welcome",
      platform: "instagram",
      format: "reel",
      title: "Kursumuza hoş geldin",
      description: "Sınıfları, kütüphaneyi ve ders atmosferini gösteren kısa tur.",
      caption:
        "{brand} kapılarını açtı! Küçük gruplar, aydınlık sınıflar ve konuşmaktan korkmayacağın bir ortam. Bizi gez.",
      hashtags: ["#dilkursu", "#ingilizce", "#yenidönem"],
      music: {
        title: "Rainy Desk",
        artist: "Lofi Girl",
      },
      cta: "Ücretsiz seviye testi için DM.",
      media: [video("edst-welcome-m", IMG.classroom, "9:16", "Sınıf turu", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Kurs seçimi yapan öğrenciler ortamı görmek ister. Tanıtım Reel'i ilk seviye testi taleplerini getirir.",
      estimate: {
        reach: [600, 2200],
        engagementRate: 8.4,
        potential: "high",
      },
      alternatives: {
        title: ["Sınıflarımızı gez", "Kapılarımız açık"],
        caption: ["Yeni kursumuzu 20 saniyede gez.", "Konuşarak öğreneceğin sınıflar burada."],
        hashtags: [
          ["#ingilizcekursu", "#{handle}"],
          ["#dilöğren", "#eğitim"],
        ],
        cta: ["Konum profilde.", "Takip et, ilk ipucu yarın."],
        music: [
          {
            title: "Study Session",
            artist: "Lofi Girl",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "edst-levels",
      platform: "instagram",
      format: "carousel",
      title: "Seviyeni bul",
      description: "A1'den C1'e her seviyeyi tek karede anlatan rehber.",
      caption: "Hangi seviyedesin? {brand} rehberiyle A1'den C1'e kendini bul, kaydır.",
      hashtags: ["#ingilizce", "#seviyetesti", "#dilöğren"],
      cta: "Ücretsiz seviye testine katıl.",
      media: [
        photo("edst-levels-1", IMG.books, "4:5", "Kitaplar"),
        photo("edst-levels-2", IMG.openBooks, "4:5", "Açık kitaplar"),
        photo("edst-levels-3", IMG.writing, "4:5", "Not alan öğrenci"),
      ],
      theme: "educational",
      reasoning: "Seviye rehberleri yeni hesapların en çok kaydedilen ilk paylaşımları arasında.",
      estimate: {
        reach: [300, 1200],
        engagementRate: 6.9,
        potential: "average",
      },
      alternatives: {
        title: ["A1 mi, B2 mi?", "Seviye rehberi"],
        caption: [
          "Kendini nereye koyarsın? Seviye rehberimize bak.",
          "Doğru gruba girmek için önce seviyeni bil.",
        ],
        hashtags: [["#ingilizceseviye", "#{handle}"], ["#englishlevels"]],
        cta: ["Yorumlara seviyeni yaz.", "Test için DM."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "edst-tt-teacher",
      platform: "tiktok",
      format: "video",
      title: "Eğitmenimizle tanış",
      description: "Eğitmenin kameraya kendini ve ders yaklaşımını anlattığı video.",
      caption:
        "Merhaba! Ben {brand} eğitmeni Deniz. Derslerimizde dil bilgisi değil, konuşma önce gelir. Neden mi? Anlatayım.",
      hashtags: ["#ingilizce", "#eğitmen", "#dilöğren"],
      music: {
        title: "Rainy Desk",
        artist: "Lofi Girl",
      },
      cta: "Takip et, her hafta ipucu.",
      media: [video("edst-tt-teacher-m", IMG.lecture, "9:16", "Eğitmen", 30)],
      theme: "storytelling",
      reasoning:
        "Dil öğreniminde öğrenciler önce eğitmene güvenir. Tanışma videoları TikTok'ta yeni hesapları öne çıkarır.",
      estimate: {
        reach: [900, 4200],
        engagementRate: 8.7,
        potential: "high",
      },
      alternatives: {
        title: ["Ben Deniz", "Eğitmen köşesi"],
        caption: [
          "Konuşmaktan korkuyorsan doğru yerdesin. Ben Deniz!",
          "Dil bilgisini değil, konuşmayı önceliklendiriyoruz.",
        ],
        hashtags: [["#englishteacher", "#{handle}"], ["#dilkursu"]],
        cta: ["Soru sor.", "Takipte kal."],
        music: [
          {
            title: "Study Session",
            artist: "Lofi Girl",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "edst-tt-tip",
      platform: "tiktok",
      format: "video",
      title: "İlk ipucu: Ezberleme, kullan",
      description: "Kelime öğrenmenin pratik yolunu anlatan 25 saniyelik ipucu.",
      caption: "{brand} ipucu #1: yeni kelimeyi ezberleme, aynı gün 3 cümlede kullan.",
      hashtags: ["#englishtips", "#kelime", "#ingilizce"],
      cta: "Bugünkü kelimen ne? Yorumlara yaz.",
      media: [video("edst-tt-tip-m", IMG.desk, "9:16", "Masada kitaplar", 25)],
      theme: "educational",
      reasoning: "Kısa eğitici videolar yeni hesapların keşfete düşmesini kolaylaştırır.",
      relatedTrendId: "edt-one-mistake",
      estimate: {
        reach: [800, 3800],
        engagementRate: 8.0,
        potential: "average",
      },
      alternatives: {
        title: ["Kelime nasıl öğrenilir?", "Ezber yerine kullan"],
        caption: [
          "Kelimeyi aklında tutmanın yolu onu kullanmak.",
          "3 cümle kuralı: kelimeyi aynı gün 3 kez kullan.",
        ],
        hashtags: [["#vocabulary", "#{handle}"], ["#dilöğren"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:30",
      },
    },
    {
      id: "edst-yt-short",
      platform: "youtube",
      format: "short",
      title: "20 saniyede bir hata",
      description: "Tek bir yaygın hatayı düzelten Shorts.",
      caption: '"Explain me" değil, "explain to me". {brand} ile 20 saniyelik düzeltme.',
      hashtags: ["#shorts", "#ingilizce", "#englishtips"],
      cta: "Abone ol.",
      media: [video("edst-yt-short-m", IMG.writing, "9:16", "Not alan öğrenci", 20)],
      theme: "educational",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; kısa düzeltmeler en çok izlenen tür.",
      estimate: {
        reach: [300, 1500],
        engagementRate: 6.3,
        potential: "average",
      },
      alternatives: {
        title: ["Explain to me", "Bir hata, bir düzeltme"],
        caption: [
          "Bu hatayı çok sık duyuyoruz. 20 saniyede düzeltelim.",
          'Explain kimden sonra "to" ister? Hemen öğren.',
        ],
        hashtags: [["#shorts", "#dilbilgisi"], ["#{handle}"]],
        cta: ["Sıradaki hatayı yorumlara yaz.", "Bir sonraki videoyu sen seç."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "18:00",
      },
    },
    {
      id: "edst-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Kursumuzu tanıyın: Konuşarak öğrenmek",
      description: "Ders yöntemini, grupları ve seviye testini anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak nasıl ders yaptığımızı, gruplarımızı ve ücretsiz seviye testini anlatıyoruz.",
      hashtags: ["#ingilizcekursu", "#tanıtım"],
      cta: "Abone ol, ders videoları yolda.",
      media: [video("edst-yt-intro-m", IMG.groupStudy, "16:9", "Grup dersi", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; arama trafiği ve güven getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.2,
        potential: "average",
      },
      alternatives: {
        title: ["Biz nasıl ders yapıyoruz?", "Yöntemimiz"],
        caption: [
          "Konuşarak öğrenme yöntemimizi bu videoda anlatıyoruz.",
          "Küçük gruplar, gerçek konuşmalar: kursumuzu tanıyın.",
        ],
        hashtags: [["#tanıtım"], ["#dilkursu"]],
        cta: ["Sorularınızı yazın.", "Seviye testi bağlantısı açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "edst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Kursu kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: küçük gruplarla, konuşarak İngilizce öğreten bir kurs. Burada her gün bir kelime paylaşacağız.",
      hashtags: ["#ingilizce"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning: "X'te net bir ilk tanıtım, günlük içerik serisine zemin hazırlar.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.4,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Her gün bir kelime, her hafta bir ipucu.",
          "Yeni bir dil kursuyuz; İngilizce sorularını bekliyoruz.",
        ],
        hashtags: [["#dilöğren"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "edst-x-word",
      platform: "x",
      format: "post",
      title: "İlk kelimemiz",
      description: "Günlük kelime serisinin ilk gönderisi.",
      caption: '{brand} günün kelimesi #1: resilient (dirençli). "She is resilient." Senin cümlen?',
      hashtags: ["#gününkelimesi"],
      cta: "Cümleni yanıtla.",
      media: [],
      theme: "educational",
      reasoning: "Günlük seri gönderiler X'te düzenli takipçi getirir.",
      estimate: {
        reach: [100, 600],
        engagementRate: 4.3,
        potential: "average",
      },
      alternatives: {
        title: ["Kelime #1: Resilient", "Günün kelimesi başlıyor"],
        caption: [
          "Seriye başlıyoruz: resilient, dirençli.",
          "Her gün bir kelime. Bugün: resilient.",
        ],
        hashtags: [["#vocabulary"], ["#ingilizce"]],
        cta: ["Cümle kur.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "09:00",
      },
    },
    {
      id: "edst-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Kursumuzu açtık",
      description: "Kursun kuruluşunu ve yöntemini anlatan duyuru.",
      caption:
        "Yeni dil kursumuzu duyurmaktan mutluluk duyuyoruz: {brand}. Küçük gruplar ve konuşma odaklı yöntemle bireylere ve ekiplere hizmet veriyoruz.",
      hashtags: ["#eğitim", "#girişimcilik"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("edst-li-launch-m", IMG.lecture, "1:1", "Ders")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de açılış duyurusu kurumsal eğitim talepleri için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.9,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Kapılarımızı açtık"],
        caption: [
          "Konuşarak öğrenmeye inanan bir ekip olarak kursumuzu açtık.",
          "Dil öğreniminde yeni bir yaklaşım: kursumuz açıldı.",
        ],
        hashtags: [["#girişim"], ["#dileğitimi"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "edst-li-corporate",
      platform: "linkedin",
      format: "post",
      title: "Kurumsal İngilizce programı",
      description: "Şirketlere kurumsal dil programı teklif eden paylaşım.",
      caption:
        "{brand} kurumsal programı: ekibiniz için seviye testi, 8 haftalık konuşma odaklı eğitim ve ilerleme raporu.",
      hashtags: ["#kurumsaleğitim", "#businessenglish"],
      cta: "Teklif için mesaj atın.",
      media: [photo("edst-li-corp-m", IMG.groupStudy, "1:1", "Grup çalışması")],
      theme: "promotional",
      reasoning: "Net bir kurumsal teklif LinkedIn'de İK yöneticilerine ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.4,
        potential: "average",
      },
      alternatives: {
        title: ["Ekibiniz için İngilizce", "Kurumsal dil eğitimi"],
        caption: [
          "Toplantılarda daha özgüvenli bir ekip için.",
          "Ekibinize özel 8 haftalık konuşma programı.",
        ],
        hashtags: [["#ik"], ["#gelişim"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "edst-story-poll",
      platform: "instagram",
      format: "story",
      title: "Hangi konuda zorlanıyorsun?",
      description: "Takipçilere zorlandıkları konuyu soran anket.",
      caption: "{brand} anket: Konuşma mı, dinleme mi?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("edst-story-m", IMG.loveToLearn, "9:16", "Love to learn tabelası")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.1,
        potential: "average",
      },
      alternatives: {
        title: ["Zorlandığın konu", "Sen seç"],
        caption: ["Seni en çok ne zorluyor?", "Bir sonraki ipucunu sen belirle."],
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
      id: "edsx-ig-class",
      platform: "instagram",
      format: "reel",
      title: "İlk dersimizden bir an",
      description: "İlk konuşma dersinden kısa bir kesit.",
      caption:
        "{brand} ilk konuşma dersinde herkes kendini İngilizce tanıttı. Heyecan vardı, hata vardı, ama herkes konuştu.",
      hashtags: ["#ingilizce", "#konuşmadersi", "#{handle}"],
      music: {
        title: "Study Session",
        artist: "Lofi Girl",
      },
      cta: "Deneme dersine katıl.",
      media: [video("edsx-ig-class-m", IMG.classroom, "9:16", "Sınıf", 20)],
      theme: "storytelling",
      reasoning:
        "İlk ders anları yeni kursların güvenilir görünmesini sağlar ve deneme dersi taleplerini getirir.",
      estimate: {
        reach: [500, 2200],
        engagementRate: 7.6,
        potential: "average",
      },
      alternatives: {
        title: ["İlk konuşma dersi", "Herkes konuştu"],
        caption: [
          "Hata yapmaktan korkmadan konuşulan ilk ders.",
          "İlk derste herkes kendini tanıttı.",
        ],
        hashtags: [["#speaking", "#{handle}"], ["#ingilizceöğren"]],
        cta: ["Takip et.", "Soru sor."],
        music: [
          {
            title: "Rainy Desk",
            artist: "Lofi Girl",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "19:00",
      },
    },
    {
      id: "edsx-tt-teacher",
      platform: "tiktok",
      format: "video",
      title: "Eğitmenimizden ilk ipucu",
      description: "Eğitmenin kendini tanıtıp bir ipucu verdiği video.",
      caption:
        "{brand} eğitmeni Mert: 'Her gün 10 dakika sesli okuma yap. Konuşma kasların böyle gelişir.'",
      hashtags: ["#ingilizce", "#eğitmen", "#{handle}"],
      music: {
        title: "Study Session",
        artist: "Lofi Girl",
      },
      cta: "Takip et.",
      media: [video("edsx-tt-teacher-m", IMG.lecture, "9:16", "Eğitmen", 20)],
      theme: "educational",
      reasoning:
        "Eğitmen tanıtımı ve hızlı ipucu, yeni kursların TikTok'ta ilk kitlesini bulmasını sağlar.",
      estimate: {
        reach: [800, 3600],
        engagementRate: 7.7,
        potential: "average",
      },
      alternatives: {
        title: ["Mert'ten ipucu", "10 dakika sesli okuma"],
        caption: ["Konuşma pratiği için en basit alışkanlık.", "Her gün 10 dakika yeter."],
        hashtags: [["#speaking", "#{handle}"], ["#ingilizceöğren"]],
        cta: ["Soru sor.", "Deneme dersine katıl."],
        music: [
          {
            title: "Rainy Desk",
            artist: "Lofi Girl",
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
      instagram: 600,
      tiktok: 2000,
      youtube: 240,
      x: 110,
      linkedin: 150,
    },
    engagementRate: 8.3,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
