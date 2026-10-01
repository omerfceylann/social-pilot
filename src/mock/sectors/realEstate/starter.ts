import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir emlak ofisinin ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const realEstateStarter: StarterKit = {
  suggestions: [
    {
      id: "rest-welcome",
      platform: "instagram",
      format: "reel",
      title: "Ofisimize hoş geldin",
      description: "Ofisi ve ekibi tanıtan 20 saniyelik video.",
      caption:
        "{brand} olarak kapılarımızı açtık. Doğru evi bulmak için önce seni dinliyoruz. Ofisimize uğra.",
      hashtags: ["#emlak", "#yeniofis", "#gayrimenkul"],
      music: {
        title: "Sunday Morning",
        artist: "Acoustic Home",
      },
      cta: "Ev arayışını DM'den anlat.",
      media: [video("rest-welcome-m", IMG.exterior, "9:16", "Modern konut", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Emlakta karar güvene dayanır. Ekibi gösteren tanıtım videosu ilk danışma taleplerini getirir.",
      estimate: {
        reach: [500, 2000],
        engagementRate: 7.8,
        potential: "high",
      },
      alternatives: {
        title: ["Ekibimizle tanış", "Kapımız açık"],
        caption: ["Yeni emlak ofisimizden merhaba!", "Ev arayan herkese kahvemiz hazır."],
        hashtags: [
          ["#emlakofisi", "#{handle}"],
          ["#gayrimenkul", "#istanbul"],
        ],
        cta: ["Konum profilde.", "Takip et, ilk portföy yarın."],
        music: [
          {
            title: "Morning Light",
            artist: "Acoustic Home",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "rest-how",
      platform: "instagram",
      format: "carousel",
      title: "Nasıl çalışıyoruz?",
      description: "İlk görüşmeden tapuya kadar süreci 4 karede anlatan rehber.",
      caption: "{brand} ile ev arayışı 4 adımda: dinleme, eşleşme, gezme, tapu. Kaydır.",
      hashtags: ["#emlak", "#evarıyorum", "#süreç"],
      cta: "Sorularını yorumlara yaz.",
      media: [
        photo("rest-how-1", IMG.keys, "4:5", "Anahtarlar"),
        photo("rest-how-2", IMG.livingRoom, "4:5", "Salon"),
        photo("rest-how-3", IMG.buildings, "4:5", "Binalar"),
      ],
      theme: "educational",
      reasoning:
        "Yeni takipçiler önce süreci anlamak ister; süreç carousel'i en çok kaydedilen ilk paylaşım.",
      estimate: {
        reach: [300, 1100],
        engagementRate: 6.5,
        potential: "average",
      },
      alternatives: {
        title: ["Sürecimiz", "Tapuya 4 adım"],
        caption: [
          "Ev ararken neler oluyor? Süreci baştan sona anlattık.",
          "Şeffaf süreç: ilk görüşmeden anahtar teslimine.",
        ],
        hashtags: [["#gayrimenkul", "#{handle}"], ["#ilkev"]],
        cta: ["Bize yaz.", "Kaydet."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "rest-tt-intro",
      platform: "tiktok",
      format: "video",
      title: "Danışmanınızla tanışın",
      description: "Danışmanın kameraya yaklaşımını anlattığı video.",
      caption:
        "Merhaba, ben {brand} danışmanı Mert. İlan fotoğrafları değil, mahalle ve süreç anlatıyorum. Neden mi?",
      hashtags: ["#emlakdanışmanı", "#gayrimenkul", "#evarıyorum"],
      music: {
        title: "Sunday Morning",
        artist: "Acoustic Home",
      },
      cta: "Takip et, ev arayanlara ipuçları geliyor.",
      media: [video("rest-tt-intro-m", IMG.street, "9:16", "Sokakta danışman", 30)],
      theme: "storytelling",
      reasoning:
        "Emlakta danışmana güven kararın yarısı. Tanışma videoları TikTok'ta yeni hesapları öne çıkarır.",
      estimate: {
        reach: [800, 3800],
        engagementRate: 8.2,
        potential: "high",
      },
      alternatives: {
        title: ["Ben Mert", "Danışman köşesi"],
        caption: [
          "Ev ararken kafan karışıyorsa doğru yerdesin.",
          "Satış değil, doğru ev için çalışıyoruz.",
        ],
        hashtags: [["#emlak", "#{handle}"], ["#danışman"]],
        cta: ["Soru sor.", "Takipte kal."],
        music: [
          {
            title: "Morning Light",
            artist: "Acoustic Home",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "rest-tt-tip",
      platform: "tiktok",
      format: "video",
      title: "Ev gezerken ilk kontrol",
      description: "Ev gezerken yapılacak ilk kontrolü anlatan kısa ipucu.",
      caption:
        "{brand} ipucu: ev gezerken önce musluğu aç ve suyun basıncına bak. Neden mi? Anlatıyoruz.",
      hashtags: ["#emlakipucu", "#evgezerken", "#ilkev"],
      cta: "Sence başka neye bakılmalı?",
      media: [video("rest-tt-tip-m", IMG.kitchen, "9:16", "Mutfak", 25)],
      theme: "educational",
      reasoning: "Kısa eğitici videolar yeni hesapların keşfete düşmesini kolaylaştırır.",
      estimate: {
        reach: [700, 3500],
        engagementRate: 7.6,
        potential: "average",
      },
      alternatives: {
        title: ["Su basıncını kontrol et", "Ev gezerken ipucu"],
        caption: [
          "Ev gezerken çoğu kişinin unuttuğu kontrol.",
          "Musluğu aç: tesisatın durumu hakkında çok şey söyler.",
        ],
        hashtags: [["#emlak", "#{handle}"], ["#evalırken"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:30",
      },
    },
    {
      id: "rest-yt-short",
      platform: "youtube",
      format: "short",
      title: "Bir ev turu",
      description: "Portföydeki bir dairenin 30 saniyelik turu.",
      caption: "{brand} portföyünden 30 saniyelik ev turu.",
      hashtags: ["#shorts", "#evturu"],
      cta: "Abone ol, her hafta yeni tur.",
      media: [video("rest-yt-short-m", IMG.apartment, "9:16", "Daire", 30)],
      theme: "productFocused",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; ev turları en çok izlenen tür.",
      estimate: {
        reach: [300, 1500],
        engagementRate: 6.0,
        potential: "average",
      },
      alternatives: {
        title: ["30 saniyelik tur", "Portföyden bir ev"],
        caption: ["Bu evi 30 saniyede gez.", "Kapıdan balkona hızlı bir tur."],
        hashtags: [["#shorts", "#emlak"], ["#{handle}"]],
        cta: ["Bir sonraki turu sen seç.", "Sorunu yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "18:00",
      },
    },
    {
      id: "rest-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Ofisimizi ve yaklaşımımızı tanıyın",
      description: "Ofisin çalışma şeklini ve bölgelerini anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak hangi bölgelerde çalıştığımızı, nasıl portföy seçtiğimizi ve süreci nasıl yönettiğimizi anlatıyoruz.",
      hashtags: ["#gayrimenkul", "#tanıtım"],
      cta: "Abone ol, mahalle rehberleri yolda.",
      media: [video("rest-yt-intro-m", IMG.exterior, "16:9", "Konut", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; arama trafiği ve güven getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.0,
        potential: "average",
      },
      alternatives: {
        title: ["Biz kimiz?", "Nasıl çalışıyoruz?"],
        caption: [
          "Şeffaf emlak danışmanlığı nasıl olur? Bu videoda anlattık.",
          "Bölgelerimiz, ekibimiz ve sürecimiz.",
        ],
        hashtags: [["#tanıtım"], ["#emlak"]],
        cta: ["Sorularınızı yazın.", "Portföy bağlantısı açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "rest-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Ofisi kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: şeffaf süreçle doğru evi bulan butik bir emlak ofisi. Piyasa özetlerini ve ipuçlarını burada paylaşacağız.",
      hashtags: ["#emlak"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning: "X'te net bir ilk tanıtım, piyasa özetleri serisine zemin hazırlar.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.2,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Ev ve kira sorularını yanıtlıyoruz.",
          "Yeni bir emlak ofisiyiz; sorularını bekliyoruz.",
        ],
        hashtags: [["#gayrimenkul"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "rest-x-question",
      platform: "x",
      format: "post",
      title: "Ev ararken en zor ne?",
      description: "Takipçilere ev arayışında zorlandıkları konuyu soran gönderi.",
      caption:
        "Ev ararken seni en çok ne zorluyor? Fiyat, mahalle seçimi, kredi? {brand} danışmanları yanıtlıyor.",
      hashtags: ["#evarıyorum"],
      cta: "Yanıtla.",
      media: [],
      theme: "communityFocused",
      reasoning: "Soru soran gönderiler X'te yeni hesapların ilk etkileşimlerini getirir.",
      estimate: {
        reach: [100, 500],
        engagementRate: 4.0,
        potential: "average",
      },
      alternatives: {
        title: ["Sana nasıl yardım edelim?", "Ev arayışı anketi"],
        caption: ["Ev ararken en çok neye takılıyorsun?", "Fiyat mı, mahalle mi, kredi mi?"],
        hashtags: [["#emlak"], ["#ilkev"]],
        cta: ["Fikrini yaz.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "12:00",
      },
    },
    {
      id: "rest-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Ofisimizi açtık",
      description: "Ofisin kuruluşunu ve değerlerini anlatan duyuru.",
      caption:
        "Yeni emlak ofisimizi duyurmaktan mutluluk duyuyoruz: {brand}. Şeffaf fiyatlama ve mahalle bilgisiyle alıcı ve satıcılara danışmanlık veriyoruz.",
      hashtags: ["#gayrimenkul", "#girişimcilik"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("rest-li-launch-m", IMG.buildings, "1:1", "Konut binaları")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de açılış duyurusu iş ortakları ve yatırımcılar için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.8,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Kapılarımızı açtık"],
        caption: [
          "Uzun yıllık sektör deneyimimizi kendi ofisimizde sürdürüyoruz.",
          "Şeffaf gayrimenkul danışmanlığı için ofisimizi açtık.",
        ],
        hashtags: [["#girişim"], ["#emlak"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "rest-li-owners",
      platform: "linkedin",
      format: "post",
      title: "Mülk sahipleri için kiralama yönetimi",
      description: "Mülk sahiplerine kiralama yönetimi hizmetini anlatan paylaşım.",
      caption:
        "{brand} kiralama yönetimi: doğru kiracı seçimi, sözleşme ve aylık takip. Mülkünüzü dert etmeyin.",
      hashtags: ["#kiralama", "#mülkyönetimi"],
      cta: "Detaylar için mesaj atın.",
      media: [photo("rest-li-owners-m", IMG.apartment, "1:1", "Daire")],
      theme: "promotional",
      reasoning: "Net bir hizmet tanımı LinkedIn'de yatırımcı mülk sahiplerine ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.3,
        potential: "average",
      },
      alternatives: {
        title: ["Kiralama yönetimi", "Mülkünüz güvende"],
        caption: [
          "Kiracı bulmaktan aylık takibe, her şey bizde.",
          "Yatırımcılar için kiralama yönetimi hizmeti.",
        ],
        hashtags: [["#yatırım"], ["#gayrimenkul"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "rest-story-poll",
      platform: "instagram",
      format: "story",
      title: "Hangi mahalle?",
      description: "Takipçilere rehberini görmek istedikleri mahalleyi soran anket.",
      caption: "{brand} anket: Moda mı, Yeldeğirmeni mi?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("rest-story-m", IMG.street, "9:16", "Sokak")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.0,
        potential: "average",
      },
      alternatives: {
        title: ["Mahalle anketi", "Sen seç"],
        caption: ["Bir sonraki mahalle rehberini sen seç.", "Hangi mahalleyi anlatalım?"],
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
      instagram: 520,
      tiktok: 1700,
      youtube: 210,
      x: 80,
      linkedin: 190,
    },
    engagementRate: 7.4,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
