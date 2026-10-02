import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir wellness stüdyosunun ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const healthStarter: StarterKit = {
  suggestions: [
    {
      id: "hst-welcome",
      platform: "instagram",
      format: "reel",
      title: "Stüdyomuza hoş geldin",
      description: "Stüdyonun sakin atmosferini gösteren kısa tur.",
      caption:
        "{brand} kapılarını açtı. Yoga, nefes ve beslenmeyle kendine iyi gelmek için sakin bir alan.",
      hashtags: ["#wellness", "#yoga", "#yenistüdyo"],
      music: {
        title: "Soft Rain",
        artist: "Ambient Rooms",
      },
      cta: "İlk dersin bizden.",
      media: [video("hst-welcome-m", IMG.spa, "9:16", "Stüdyo", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Wellness hizmetinde atmosfer karar sebebidir. Stüdyo turu ilk deneme dersi taleplerini getirir.",
      estimate: {
        reach: [500, 2000],
        engagementRate: 8.3,
        potential: "high",
      },
      alternatives: {
        title: ["Stüdyo turu", "Kapılarımız açık"],
        caption: ["Yeni stüdyomuzu 20 saniyede gez.", "Kendine ayıracağın sakin bir saat için."],
        hashtags: [["#wellbeing", "#{handle}"], ["#yogastüdyosu"]],
        cta: ["Konum profilde.", "Takip et."],
        music: [
          {
            title: "Still Waters",
            artist: "Ambient Rooms",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "hst-classes",
      platform: "instagram",
      format: "carousel",
      title: "Derslerimiz",
      description: "Her derse bir kare: hatha, yin, nefes, beslenme.",
      caption:
        "{brand} programı: hatha yoga, yin yoga, nefes atölyesi ve beslenme danışmanlığı. Kaydır.",
      hashtags: ["#yoga", "#nefes", "#beslenme"],
      cta: "Hangisiyle başlamak istersin?",
      media: [
        photo("hst-classes-1", IMG.yoga, "4:5", "Yoga"),
        photo("hst-classes-2", IMG.meditation, "4:5", "Meditasyon"),
        photo("hst-classes-3", IMG.food, "4:5", "Sağlıklı yemek"),
      ],
      theme: "promotional",
      reasoning:
        "Yeni takipçiler önce programı görmek ister; ders carousel'i en çok kaydedilen ilk paylaşım.",
      estimate: {
        reach: [300, 1100],
        engagementRate: 6.6,
        potential: "average",
      },
      alternatives: {
        title: ["Programımız", "Seni neler bekliyor?"],
        caption: ["Tüm derslerimiz tek bir carousel'de.", "Hangi ders sana iyi gelir? Kaydır."],
        hashtags: [["#wellness", "#{handle}"], ["#dersprogramı"]],
        cta: ["Sorularını yorumlara yaz.", "Kaydet."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "hst-tt-teacher",
      platform: "tiktok",
      format: "video",
      title: "Eğitmenimizle tanış",
      description: "Eğitmenin yaklaşımını anlattığı video.",
      caption:
        "Merhaba, ben {brand} eğitmeni Deniz. Esnek olmak zorunda değilsin; sadece gelmen yeterli.",
      hashtags: ["#yoga", "#eğitmen", "#wellness"],
      music: {
        title: "Soft Rain",
        artist: "Ambient Rooms",
      },
      cta: "Takip et, kısa seanslar geliyor.",
      media: [video("hst-tt-teacher-m", IMG.yoga, "9:16", "Yoga eğitmeni", 30)],
      theme: "storytelling",
      reasoning:
        "Wellness'ta karar eğitmene güvenle verilir. Tanışma videoları TikTok'ta yeni hesapları öne çıkarır.",
      estimate: {
        reach: [800, 3900],
        engagementRate: 8.5,
        potential: "high",
      },
      alternatives: {
        title: ["Ben Deniz", "Eğitmen köşesi"],
        caption: [
          "Yogaya başlamak için esnek olmak gerekmiyor.",
          "Derslerimizde yarış yok, sadece nefes var.",
        ],
        hashtags: [["#yogaeğitmeni", "#{handle}"], ["#wellbeing"]],
        cta: ["Soru sor.", "Takipte kal."],
        music: [
          {
            title: "Still Waters",
            artist: "Ambient Rooms",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "hst-tt-breath",
      platform: "tiktok",
      format: "video",
      title: "İlk nefes egzersizi",
      description: "Herkesin yapabileceği basit bir nefes egzersizi.",
      caption: "{brand} nefes köşesi #1: 4 saniye al, 6 saniye ver. Üç tur yeter.",
      hashtags: ["#nefes", "#stres", "#wellness"],
      cta: "Denedin mi? Nasıl hissettin?",
      media: [video("hst-tt-breath-m", IMG.meditation, "9:16", "Meditasyon", 30)],
      theme: "educational",
      reasoning: "Kısa egzersiz videoları yeni hesapların keşfete düşmesini kolaylaştırır.",
      relatedTrendId: "ht-breath",
      estimate: {
        reach: [700, 3500],
        engagementRate: 7.9,
        potential: "average",
      },
      alternatives: {
        title: ["Nefes köşesi #1", "Üç tur nefes"],
        caption: [
          "Stresli hissettiğinde bu basit egzersizi dene.",
          "Uzun nefes vermek bedeni sakinleştirir.",
        ],
        hashtags: [["#nefesegzersizi", "#{handle}"], ["#sakinlik"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "08:00",
      },
    },
    {
      id: "hst-yt-short",
      platform: "youtube",
      format: "short",
      title: "30 saniyelik mola",
      description: "Kısa bir nefes ve esneme molası.",
      caption: "{brand} ile 30 saniyelik mola: omuzlarını indir, nefes al.",
      hashtags: ["#shorts", "#mola"],
      cta: "Abone ol.",
      media: [video("hst-yt-short-m", IMG.mountain, "9:16", "Meditasyon", 30)],
      theme: "educational",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; kısa molalar en çok izlenen tür.",
      estimate: {
        reach: [300, 1400],
        engagementRate: 6.4,
        potential: "average",
      },
      alternatives: {
        title: ["Kısa mola", "Nefes al"],
        caption: ["30 saniyelik bir mola her şeyi değiştirebilir.", "Ekrandan uzaklaş, nefes al."],
        hashtags: [["#shorts", "#nefes"], ["#{handle}"]],
        cta: ["Bir sonraki molayı sen seç.", "Sorunu yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "hst-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Stüdyomuzu ve yaklaşımımızı tanıyın",
      description: "Dersleri, eğitmenleri ve yaklaşımı anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak hangi dersleri verdiğimizi, eğitmenlerimizi ve her seviyeye uygun yaklaşımımızı anlatıyoruz.",
      hashtags: ["#wellness", "#tanıtım"],
      cta: "Abone ol, seanslar yolda.",
      media: [video("hst-yt-intro-m", IMG.spa, "16:9", "Stüdyo", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; güven ve arama trafiği getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.1,
        potential: "average",
      },
      alternatives: {
        title: ["Biz kimiz?", "Yaklaşımımız"],
        caption: [
          "Sakin, kapsayıcı ve sürdürülebilir: yaklaşımımız bu videoda.",
          "Derslerimiz, eğitmenlerimiz ve stüdyomuz.",
        ],
        hashtags: [["#tanıtım"], ["#yoga"]],
        cta: ["Sorularınızı yazın.", "Ders programı açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "hst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Stüdyoyu kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: yoga, nefes ve beslenmeyle dengeli bir yaşam stüdyosu. Burada küçük hatırlatmalar paylaşacağız.",
      hashtags: ["#wellness"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning: "X'te net bir ilk tanıtım, hatırlatma serisine zemin hazırlar.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.3,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Küçük, nazik hatırlatmalar için takip et.",
          "Yeni bir wellness stüdyosuyuz.",
        ],
        hashtags: [["#denge"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "hst-x-ask",
      platform: "x",
      format: "post",
      title: "Bugün kendine ne iyi geldi?",
      description: "Takipçilere günün iyi gelen anını soran gönderi.",
      caption: "Bugün sana iyi gelen küçük bir şey neydi? {brand} ekibi olarak merak ediyoruz.",
      hashtags: ["#iyioluş"],
      cta: "Yanıtla.",
      media: [],
      theme: "communityFocused",
      reasoning: "Soru soran gönderiler X'te yeni hesapların ilk etkileşimlerini getirir.",
      estimate: {
        reach: [100, 500],
        engagementRate: 4.2,
        potential: "average",
      },
      alternatives: {
        title: ["Küçük iyilikler", "Günün iyi anı"],
        caption: ["Bir fincan çay mı, kısa bir yürüyüş mü?", "Sana bugün ne iyi geldi?"],
        hashtags: [["#wellbeing"], ["#denge"]],
        cta: ["Fikrini yaz.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "18:00",
      },
    },
    {
      id: "hst-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Stüdyomuzu açtık",
      description: "Stüdyonun kuruluşunu anlatan duyuru.",
      caption:
        "Yeni wellness stüdyomuzu duyurmaktan mutluluk duyuyoruz: {brand}. Bireylere ve ekiplere yoga, nefes ve beslenme programları sunuyoruz.",
      hashtags: ["#wellbeing", "#girişimcilik"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("hst-li-launch-m", IMG.spa, "1:1", "Stüdyo")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de açılış duyurusu kurumsal iyi oluş programları için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.8,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Kapılarımızı açtık"],
        caption: [
          "Dengeli bir yaşamı desteklemek için stüdyomuzu açtık.",
          "Bireyler ve ekipler için yeni bir wellness alanı.",
        ],
        hashtags: [["#girişim"], ["#iyioluş"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "hst-li-corporate",
      platform: "linkedin",
      format: "post",
      title: "Ekipler için iyi oluş programı",
      description: "Şirketlere kurumsal iyi oluş programı teklif eden paylaşım.",
      caption:
        "{brand} kurumsal programı: haftalık 20 dakikalık nefes ve esneme seansları, aylık bir beslenme semineri.",
      hashtags: ["#kurumsal", "#çalışaniyioluşu"],
      cta: "Teklif için mesaj atın.",
      media: [photo("hst-li-corp-m", IMG.meditation, "1:1", "Meditasyon")],
      theme: "promotional",
      reasoning: "Net bir kurumsal teklif LinkedIn'de İK yöneticilerine ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.4,
        potential: "average",
      },
      alternatives: {
        title: ["Ekibiniz için iyi oluş", "Kurumsal wellness"],
        caption: [
          "Ekibinizin enerjisini küçük molalarla destekleyin.",
          "Haftalık seanslarla daha dengeli bir ekip.",
        ],
        hashtags: [["#ik"], ["#wellbeing"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "hst-story-poll",
      platform: "instagram",
      format: "story",
      title: "Sabah mı akşam mı?",
      description: "Takipçilere ders saati tercihlerini soran anket.",
      caption: "{brand} anket: Sabah dersi mi, akşam dersi mi?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("hst-story-m", IMG.yoga, "9:16", "Yoga")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.3,
        potential: "average",
      },
      alternatives: {
        title: ["Ders saati anketi", "Sen seç"],
        caption: ["Hangi saat sana daha uygun?", "Programı birlikte belirleyelim."],
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
      id: "hsx-ig-space",
      platform: "instagram",
      format: "reel",
      title: "Bir dersin ilk anları",
      description: "Stüdyoda bir dersin başlangıcını gösteren sakin Reel.",
      caption:
        "{brand} stüdyosunda ders başlarken: matlar serili, ışık kısık, herkes nefesine dönüyor.",
      hashtags: ["#yoga", "#wellness", "#{handle}"],
      music: {
        title: "Soft Rain",
        artist: "Ambient Rooms",
      },
      cta: "İlk dersin bizden.",
      media: [video("hsx-ig-space-m", IMG.spa, "9:16", "Stüdyo", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Wellness hizmetinde atmosfer karar sebebidir; ders anları ilk deneme dersi taleplerini getirir.",
      estimate: {
        reach: [500, 2200],
        engagementRate: 7.9,
        potential: "average",
      },
      alternatives: {
        title: ["Ders başlarken", "Nefese dönüş"],
        caption: ["Bir dersin ilk sakin dakikaları.", "Kısık ışık, serili matlar."],
        hashtags: [["#yogastüdyosu", "#{handle}"], ["#nefes"]],
        cta: ["Takip et.", "Programı incele."],
        music: [
          {
            title: "Still Waters",
            artist: "Ambient Rooms",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "19:00",
      },
    },
    {
      id: "hsx-tt-why",
      platform: "tiktok",
      format: "video",
      title: "Neden bu stüdyoyu açtık?",
      description: "Kurucunun stüdyoyu açma hikâyesini anlattığı video.",
      caption:
        "{brand} kurucusu Melis: 'Yoğun bir iş hayatında kendime ayıracak sakin bir yer arıyordum. Bulamayınca açtım.'",
      hashtags: ["#wellness", "#hikâye", "#{handle}"],
      music: {
        title: "Soft Rain",
        artist: "Ambient Rooms",
      },
      cta: "Takip et.",
      media: [video("hsx-tt-why-m", IMG.meditation, "9:16", "Meditasyon", 25)],
      theme: "storytelling",
      reasoning:
        "Kuruluş hikâyeleri yeni stüdyoların TikTok'ta ilk izleyicilerini bulmasını sağlar.",
      estimate: {
        reach: [700, 3300],
        engagementRate: 7.6,
        potential: "average",
      },
      alternatives: {
        title: ["Melis'in hikâyesi", "Sakin bir yer"],
        caption: ["Bir stüdyo nasıl doğar?", "Aradığı yeri bulamayınca açtı."],
        hashtags: [["#yoga", "#{handle}"], ["#kendineiyigel"]],
        cta: ["Soru sor.", "Deneme dersine gel."],
        music: [
          {
            title: "Still Waters",
            artist: "Ambient Rooms",
          },
        ],
      },
      suggestedAt: {
        day: 2,
        time: "20:00",
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
      instagram: 560,
      tiktok: 1800,
      youtube: 230,
      x: 90,
      linkedin: 140,
    },
    engagementRate: 8.4,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
