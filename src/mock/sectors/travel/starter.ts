import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni kurulan bir butik tur şirketinin ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const travelStarter: StarterKit = {
  suggestions: [
    {
      id: "tst-welcome",
      platform: "instagram",
      format: "reel",
      title: "Yolculuğumuz başlıyor",
      description: "Tur şirketinin ruhunu anlatan kısa video.",
      caption:
        "{brand} yola çıktı. Küçük gruplar, yerel ev sahipleri ve Türkiye'nin saklı köşeleri.",
      hashtags: ["#seyahat", "#butiktur", "#türkiye"],
      music: {
        title: "Sea Breeze",
        artist: "Coastline",
      },
      cta: "İlk turumuzun takvimi için DM'den yaz.",
      media: [video("tst-welcome-m", IMG.roadTrip, "9:16", "Yolculuk", 20)],
      theme: "storytelling",
      reasoning:
        "Seyahatte karar duyguyla verilir. Ruhu anlatan bir açılış videosu ilk rezervasyon sorularını getirir.",
      estimate: {
        reach: [700, 2600],
        engagementRate: 8.4,
        potential: "high",
      },
      alternatives: {
        title: ["Yola çıktık", "Saklı köşelere"],
        caption: [
          "Kalabalık turlardan sıkılanlar için yeni bir yol.",
          "Küçük gruplarla Türkiye'yi keşfetmeye hazır mısın?",
        ],
        hashtags: [["#gezilecekyerler", "#{handle}"], ["#seyahat"]],
        cta: ["Takip et.", "Rotaları profilde gör."],
        music: [
          {
            title: "Golden Hour",
            artist: "Coastline",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "tst-routes",
      platform: "instagram",
      format: "carousel",
      title: "Rotalarımız",
      description: "Her rotaya bir kare: Kaş, Kapadokya, Karadeniz, İstanbul.",
      caption:
        "{brand} rotaları: Kaş koyları, Kapadokya vadileri, Karadeniz yaylaları ve yerel bir İstanbul. Kaydır.",
      hashtags: ["#rota", "#seyahat", "#türkiye"],
      cta: "Hangisi seni çağırıyor?",
      media: [
        photo("tst-routes-1", IMG.beach, "4:5", "Koy"),
        photo("tst-routes-2", IMG.mountains, "4:5", "Dağlar"),
        photo("tst-routes-3", IMG.istanbul, "4:5", "İstanbul"),
      ],
      theme: "promotional",
      reasoning:
        "Yeni takipçiler önce rotaları görmek ister; rota carousel'i en çok kaydedilen ilk paylaşım.",
      estimate: {
        reach: [400, 1400],
        engagementRate: 6.7,
        potential: "average",
      },
      alternatives: {
        title: ["Nereye gidiyoruz?", "Dört rota, dört hikâye"],
        caption: [
          "Tüm rotalarımız tek bir carousel'de.",
          "Denizden yaylaya, seni hangisi bekliyor?",
        ],
        hashtags: [["#gezilecekyerler", "#{handle}"], ["#butiktur"]],
        cta: ["Sorularını yorumlara yaz.", "Kaydet."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "tst-tt-guide",
      platform: "tiktok",
      format: "video",
      title: "Rehberimizle tanış",
      description: "Rehberin kendini ve sevdiği rotayı anlattığı video.",
      caption:
        "Merhaba, ben {brand} rehberi Ece. En sevdiğim an, bir köyde yabancıların sofraya davet edildiği an.",
      hashtags: ["#rehber", "#seyahat", "#türkiye"],
      music: {
        title: "Sea Breeze",
        artist: "Coastline",
      },
      cta: "Takip et, yoldan videolar geliyor.",
      media: [video("tst-tt-guide-m", IMG.traveler, "9:16", "Rehber", 30)],
      theme: "storytelling",
      reasoning:
        "Tur seçiminde rehbere güven belirleyicidir. Tanışma videoları TikTok'ta yeni hesapları öne çıkarır.",
      estimate: {
        reach: [1000, 4400],
        engagementRate: 8.4,
        potential: "high",
      },
      alternatives: {
        title: ["Ben Ece", "Rehber köşesi"],
        caption: [
          "10 yıldır Anadolu'yu küçük gruplarla geziyorum.",
          "Bir rotayı en iyi yerel bir sofrada tanırsın.",
        ],
        hashtags: [["#turrehberi", "#{handle}"], ["#gezi"]],
        cta: ["Soru sor.", "Takipte kal."],
        music: [
          {
            title: "Golden Hour",
            artist: "Coastline",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "tst-tt-first",
      platform: "tiktok",
      format: "video",
      title: "İlk turumuzdan bir an",
      description: "İlk turdan kısa bir kesit.",
      caption: "{brand} ilk tur: 8 kişi, 3 gün, 1 saklı koy. En güzel an bu 15 saniyede.",
      hashtags: ["#pov", "#seyahat", "#saklıköşeler"],
      cta: "Sıradaki tur için takip et.",
      media: [video("tst-tt-first-m", IMG.beach, "9:16", "Koy", 15)],
      theme: "behindTheScenes",
      reasoning: "Gerçek tur anları yeni hesapların keşfete düşmesini kolaylaştırır.",
      relatedTrendId: "tt-pov",
      estimate: {
        reach: [900, 4000],
        engagementRate: 7.8,
        potential: "average",
      },
      alternatives: {
        title: ["Tur #1", "15 saniyelik koy"],
        caption: ["İlk turumuzun en güzel anı.", "8 yabancı, 3 günün sonunda 8 arkadaş."],
        hashtags: [["#tekneturu", "#{handle}"], ["#türkiye"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:00",
      },
    },
    {
      id: "tst-yt-short",
      platform: "youtube",
      format: "short",
      title: "30 saniyede bir rota",
      description: "Bir rotayı 30 saniyede özetleyen kısa video.",
      caption: "{brand} ile 30 saniyede Kaş: koy, kahvaltı, gün batımı.",
      hashtags: ["#shorts", "#kaş"],
      cta: "Abone ol.",
      media: [video("tst-yt-short-m", IMG.beach, "9:16", "Koy", 30)],
      theme: "storytelling",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; kısa rota özetleri en çok izlenen tür.",
      estimate: {
        reach: [350, 1600],
        engagementRate: 6.3,
        potential: "average",
      },
      alternatives: {
        title: ["Kısa rota", "Kaş özeti"],
        caption: ["Bir rotayı 30 saniyede gez.", "Kaş'ın en güzel üç anı."],
        hashtags: [["#shorts", "#seyahat"], ["#{handle}"]],
        cta: ["Bir sonraki rotayı sen seç.", "Sorunu yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "tst-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Tur anlayışımızı tanıyın",
      description: "Küçük grup yaklaşımını, rotaları ve rehberleri anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak neden küçük gruplarla gezdiğimizi, rotalarımızı ve rehberlerimizi anlatıyoruz.",
      hashtags: ["#butiktur", "#tanıtım"],
      cta: "Abone ol, rota videoları yolda.",
      media: [video("tst-yt-intro-m", IMG.roadTrip, "16:9", "Yolculuk", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; güven ve arama trafiği getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.1,
        potential: "average",
      },
      alternatives: {
        title: ["Biz kimiz?", "Küçük grup, büyük keşif"],
        caption: [
          "Yerel, sakin ve küçük gruplarla: tur anlayışımız bu videoda.",
          "Rotalarımız, rehberlerimiz ve yaklaşımımız.",
        ],
        hashtags: [["#tanıtım"], ["#seyahat"]],
        cta: ["Sorularınızı yazın.", "Tur takvimi açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "tst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Tur şirketini kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: Türkiye'nin saklı köşelerine küçük grup turları düzenliyoruz. Burada rota ve valiz ipuçları paylaşacağız.",
      hashtags: ["#seyahat"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning: "X'te net bir ilk tanıtım, ipucu serisine zemin hazırlar.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.3,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Rota ipuçları için takip et.",
          "Yeni bir butik tur şirketiyiz.",
        ],
        hashtags: [["#gezi"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "tst-x-ask",
      platform: "x",
      format: "post",
      title: "Hayalindeki rota neresi?",
      description: "Takipçilere hayallerindeki rotayı soran gönderi.",
      caption:
        "Türkiye'de görmeyi en çok istediğin yer neresi? {brand} ekibi olarak bir sonraki rotayı birlikte seçelim.",
      hashtags: ["#gezilecekyerler"],
      cta: "Yanıtla.",
      media: [],
      theme: "communityFocused",
      reasoning: "Soru soran gönderiler X'te yeni hesapların ilk etkileşimlerini getirir.",
      estimate: {
        reach: [100, 500],
        engagementRate: 4.3,
        potential: "average",
      },
      alternatives: {
        title: ["Sıradaki rota", "Rotayı sen seç"],
        caption: ["Bir sonraki turumuz nereye olsun?", "Hep gitmek isteyip gidemediğin yer?"],
        hashtags: [["#seyahat"], ["#türkiye"]],
        cta: ["Fikrini yaz.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "18:00",
      },
    },
    {
      id: "tst-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Şirketimizi kurduk",
      description: "Tur şirketinin kuruluşunu anlatan duyuru.",
      caption:
        "Yeni butik tur şirketimizi duyurmaktan mutluluk duyuyoruz: {brand}. Bireylere ve ekiplere küçük grup turları planlıyoruz.",
      hashtags: ["#turizm", "#girişimcilik"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("tst-li-launch-m", IMG.roadTrip, "1:1", "Yolculuk")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de açılış duyurusu kurumsal etkinlik müşterileri için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.8,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir yolculuk", "Yola çıktık"],
        caption: [
          "Türkiye'yi küçük gruplarla keşfetmek için şirketimizi kurduk.",
          "Bireyler ve ekipler için yeni bir tur anlayışı.",
        ],
        hashtags: [["#girişim"], ["#seyahat"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "tst-li-team",
      platform: "linkedin",
      format: "post",
      title: "Ekibiniz için iki günlük rota",
      description: "Şirketlere kurumsal gezi programı teklif eden paylaşım.",
      caption:
        "{brand} kurumsal program: 15–30 kişilik ekipler için 2 günlük doğa ve yerel kültür rotaları.",
      hashtags: ["#kurumsaletkinlik", "#ekipruhu"],
      cta: "Teklif için mesaj atın.",
      media: [photo("tst-li-team-m", IMG.hiking, "1:1", "Yürüyüş yapan grup")],
      theme: "promotional",
      reasoning: "Net bir kurumsal teklif LinkedIn'de İK yöneticilerine ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.4,
        potential: "average",
      },
      alternatives: {
        title: ["Kurumsal kaçamak", "Ekip gezisi"],
        caption: [
          "Ekibinizi bir patikada buluşturalım.",
          "Ofis dışında iki gün, birlikte bir rota.",
        ],
        hashtags: [["#ik"], ["#kurumsal"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "tst-story-poll",
      platform: "instagram",
      format: "story",
      title: "Deniz mi dağ mı?",
      description: "Takipçilere rota tercihlerini soran anket.",
      caption: "{brand} anket: Deniz mi, dağ mı?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("tst-story-m", IMG.lake, "9:16", "Göl")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.4,
        potential: "average",
      },
      alternatives: {
        title: ["Rota anketi", "Sen seç"],
        caption: ["Bir sonraki rotayı hangisi belirlesin?", "Mavi mi, yeşil mi?"],
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
      instagram: 640,
      tiktok: 2100,
      youtube: 250,
      x: 90,
      linkedin: 140,
    },
    engagementRate: 8.5,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
