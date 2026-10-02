import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir oto bakım ve detaylı temizlik atölyesinin ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const automotiveStarter: StarterKit = {
  suggestions: [
    {
      id: "ast-welcome",
      platform: "instagram",
      format: "reel",
      title: "Atölyemize hoş geldin",
      description: "Atölyenin ilk gününü gösteren kısa tur.",
      caption:
        "{brand} kapılarını açtı. Periyodik bakımdan detaylı temizliğe, aracına özenle bakan bir atölye.",
      hashtags: ["#otoservis", "#detailing", "#yeniatölye"],
      music: {
        title: "Chrome Lines",
        artist: "Night Drive",
      },
      cta: "İlk yıkama indirimi için DM'den yaz.",
      media: [video("ast-welcome-m", IMG.repair, "9:16", "Atölye", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Oto hizmetinde güven, atölyeyi görmekle başlar. Atölye turu ilk randevu taleplerini getirir.",
      estimate: {
        reach: [600, 2400],
        engagementRate: 8.1,
        potential: "high",
      },
      alternatives: {
        title: ["Atölye turu", "Kapılarımız açık"],
        caption: ["Yeni atölyemizi 20 saniyede gez.", "Aracın için özenli bir adres."],
        hashtags: [["#otoyıkama", "#{handle}"], ["#atölye"]],
        cta: ["Konum profilde.", "Takip et."],
        music: [
          {
            title: "Garage Groove",
            artist: "Night Drive",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "ast-services",
      platform: "instagram",
      format: "carousel",
      title: "Hizmetlerimiz",
      description: "Her hizmete bir kare: bakım, iç temizlik, pasta cila, seramik kaplama.",
      caption:
        "{brand} hizmetleri: periyodik bakım, detaylı iç temizlik, pasta cila ve seramik kaplama. Kaydır.",
      hashtags: ["#otoservis", "#detailing", "#pastacila"],
      cta: "Hangisine ihtiyacın var?",
      media: [
        photo("ast-services-1", IMG.mechanic, "4:5", "Bakım"),
        photo("ast-services-2", IMG.interior, "4:5", "İç temizlik"),
        photo("ast-services-3", IMG.porsche, "4:5", "Parlak araç"),
      ],
      theme: "promotional",
      reasoning:
        "Yeni takipçiler önce hizmetleri görmek ister; hizmet carousel'i en çok kaydedilen ilk paylaşım.",
      estimate: {
        reach: [350, 1300],
        engagementRate: 6.4,
        potential: "average",
      },
      alternatives: {
        title: ["Neler yapıyoruz?", "Hizmet menümüz"],
        caption: [
          "Bakımdan cilaya, tüm hizmetlerimiz bir arada.",
          "Aracın neye ihtiyaç duyuyor? Kaydır.",
        ],
        hashtags: [["#otoyıkama", "#{handle}"], ["#seramikkaplama"]],
        cta: ["Fiyat için DM'den yaz.", "Kaydet."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "ast-tt-master",
      platform: "tiktok",
      format: "video",
      title: "Ustamızla tanış",
      description: "Atölyenin ustasının kendini tanıttığı video.",
      caption:
        "Merhaba, ben {brand} atölyesinden Usta Burak. 15 yıldır her araca kendi arabam gibi bakıyorum.",
      hashtags: ["#usta", "#otoservis", "#atölye"],
      music: {
        title: "Chrome Lines",
        artist: "Night Drive",
      },
      cta: "Takip et, atölyeden kısa videolar geliyor.",
      media: [video("ast-tt-master-m", IMG.mechanic2, "9:16", "Usta", 30)],
      theme: "storytelling",
      reasoning:
        "Oto hizmetinde karar ustaya güvenle verilir. Tanışma videoları TikTok'ta yeni hesapları öne çıkarır.",
      estimate: {
        reach: [900, 4200],
        engagementRate: 8.3,
        potential: "high",
      },
      alternatives: {
        title: ["Ben Usta Burak", "Atölyenin ustası"],
        caption: ["15 yıllık tecrübe, her araca aynı özen.", "Bir arabayı sesinden tanırım."],
        hashtags: [["#ustalık", "#{handle}"], ["#araba"]],
        cta: ["Soru sor.", "Takipte kal."],
        music: [
          {
            title: "Garage Groove",
            artist: "Night Drive",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "ast-tt-first",
      platform: "tiktok",
      format: "video",
      title: "İlk dönüşümümüz",
      description: "Atölyenin ilk detaylı temizlik işinin önce ve sonrası.",
      caption: "{brand} ilk dönüşüm: 2 yıldır yıkanmamış bir iç mekân, 3 saat sonra.",
      hashtags: ["#detailing", "#öncesonra", "#oddlysatisfying"],
      cta: "Sıradaki dönüşüm için takip et.",
      media: [video("ast-tt-first-m", IMG.carWash, "9:16", "Araç yıkama", 30)],
      theme: "behindTheScenes",
      reasoning: "Önce/sonra videoları yeni hesapların keşfete düşmesini kolaylaştırır.",
      relatedTrendId: "at-detailing",
      estimate: {
        reach: [800, 3800],
        engagementRate: 7.9,
        potential: "average",
      },
      alternatives: {
        title: ["Dönüşüm #1", "3 saatlik özen"],
        caption: ["İlk işimiz, ilk dönüşümümüz.", "Bu araç 2 yıldır yıkanmamış."],
        hashtags: [["#otoyıkama", "#{handle}"], ["#temizlik"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "20:00",
      },
    },
    {
      id: "ast-yt-short",
      platform: "youtube",
      format: "short",
      title: "30 saniyede lastik basıncı",
      description: "Lastik basıncının nasıl kontrol edileceğini gösteren kısa video.",
      caption: "{brand} ile 30 saniyelik bakım: lastik basıncını kontrol et.",
      hashtags: ["#shorts", "#lastik"],
      cta: "Abone ol.",
      media: [video("ast-yt-short-m", IMG.car, "9:16", "Araba", 30)],
      theme: "educational",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; kısa bakım ipuçları en çok izlenen tür.",
      estimate: {
        reach: [300, 1500],
        engagementRate: 6.2,
        potential: "average",
      },
      alternatives: {
        title: ["Kısa bakım ipucu", "Basınç kontrolü"],
        caption: ["Lastik basıncı yakıt tüketimini de etkiler.", "Ayda bir kontrol yeter."],
        hashtags: [["#shorts", "#araba"], ["#{handle}"]],
        cta: ["Bir sonraki ipucunu sen seç.", "Sorunu yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "ast-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Atölyemizi ve çalışma şeklimizi tanıyın",
      description: "Hizmetleri, ekibi ve şeffaf fiyat yaklaşımını anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak hangi hizmetleri verdiğimizi, ekibimizi ve şeffaf fiyat yaklaşımımızı anlatıyoruz.",
      hashtags: ["#otoservis", "#tanıtım"],
      cta: "Abone ol, atölye videoları yolda.",
      media: [video("ast-yt-intro-m", IMG.repair, "16:9", "Atölye", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; güven ve arama trafiği getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.0,
        potential: "average",
      },
      alternatives: {
        title: ["Biz kimiz?", "Atölye turu"],
        caption: [
          "Şeffaf, özenli ve ustalıklı: atölyemiz bu videoda.",
          "Hizmetlerimiz, ekibimiz ve fiyat yaklaşımımız.",
        ],
        hashtags: [["#tanıtım"], ["#atölye"]],
        cta: ["Sorularınızı yazın.", "Randevu bağlantısı açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "ast-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Atölyeyi kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: periyodik bakım ve detaylı temizlik yapan bir oto atölyesi. Burada bakım ipuçları paylaşacağız.",
      hashtags: ["#otoservis"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning: "X'te net bir ilk tanıtım, ipucu serisine zemin hazırlar.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.2,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Kısa bakım ipuçları için takip et.",
          "Yeni bir oto atölyesiyiz.",
        ],
        hashtags: [["#araba"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "ast-x-ask",
      platform: "x",
      format: "post",
      title: "En son ne zaman bakım yaptırdın?",
      description: "Takipçilere son bakım zamanlarını soran gönderi.",
      caption: "Aracının en son ne zaman bakımı yapıldı? {brand} ekibi olarak merak ediyoruz.",
      hashtags: ["#arababakımı"],
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
        title: ["Bakım zamanı", "Hatırlıyor musun?"],
        caption: [
          "Son bakım tarihini hatırlıyor musun?",
          "Bakım kitapçığına en son ne zaman baktın?",
        ],
        hashtags: [["#araba"], ["#bakım"]],
        cta: ["Fikrini yaz.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "18:00",
      },
    },
    {
      id: "ast-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Atölyemizi açtık",
      description: "Atölyenin kuruluşunu anlatan duyuru.",
      caption:
        "Yeni oto bakım ve detaylı temizlik atölyemizi duyurmaktan mutluluk duyuyoruz: {brand}. Bireysel araç sahiplerine ve şirket filolarına hizmet veriyoruz.",
      hashtags: ["#otomotiv", "#girişimcilik"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("ast-li-launch-m", IMG.repair, "1:1", "Atölye")],
      theme: "storytelling",
      reasoning: "LinkedIn'de açılış duyurusu filo müşterileri için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.7,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Kapılarımızı açtık"],
        caption: [
          "Şeffaf ve özenli bir oto atölyesi kurduk.",
          "Bireyler ve filolar için yeni bir bakım adresi.",
        ],
        hashtags: [["#girişim"], ["#otoservis"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "ast-li-fleet",
      platform: "linkedin",
      format: "post",
      title: "Şirket araçlarınız için bakım",
      description: "Şirketlere filo bakım hizmeti teklif eden paylaşım.",
      caption:
        "{brand} filo programı: aylık bakım takvimi, araç başına rapor ve yerinde iç temizlik.",
      hashtags: ["#filoyönetimi", "#kurumsal"],
      cta: "Teklif için mesaj atın.",
      media: [photo("ast-li-fleet-m", IMG.car2, "1:1", "Şirket aracı")],
      theme: "promotional",
      reasoning: "Net bir filo teklifi LinkedIn'de satın alma yöneticilerine ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.3,
        potential: "average",
      },
      alternatives: {
        title: ["Filo bakımı", "Kurumsal oto bakım"],
        caption: ["Şirket araçlarınızı tek bir takvimle yönetin.", "Raporlu, planlı filo bakımı."],
        hashtags: [["#lojistik"], ["#filo"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "ast-story-poll",
      platform: "instagram",
      format: "story",
      title: "Bakım mı cila mı?",
      description: "Takipçilere hangi hizmeti merak ettiklerini soran anket.",
      caption: "{brand} anket: Bakım mı, cila mı?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("ast-story-m", IMG.porsche, "9:16", "Parlak araç")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.1,
        potential: "average",
      },
      alternatives: {
        title: ["Hizmet anketi", "Sen seç"],
        caption: ["Hangi hizmeti daha çok merak ediyorsun?", "Sıradaki videoyu birlikte seçelim."],
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
      id: "astx-ig-first",
      platform: "instagram",
      format: "reel",
      title: "İlk aracımız teslim",
      description: "Atölyenin ilk işini teslim ettiği anı gösteren Reel.",
      caption:
        "{brand} ilk aracını teslim etti: iç temizlik ve pasta cila, 4 saat. Sahibi anahtarı alınca gülümsedi.",
      hashtags: ["#detailing", "#ilkiş", "#{handle}"],
      music: {
        title: "Chrome Lines",
        artist: "Night Drive",
      },
      cta: "İlk yıkama indirimi için DM.",
      media: [video("astx-ig-first-m", IMG.car, "9:16", "Teslim edilen araba", 20)],
      theme: "storytelling",
      reasoning:
        "İlk teslim anı yeni atölyelerin güvenilir görünmesini sağlar ve ilk randevuları getirir.",
      estimate: {
        reach: [500, 2300],
        engagementRate: 7.7,
        potential: "average",
      },
      alternatives: {
        title: ["İlk teslim", "4 saatin sonunda"],
        caption: ["İlk aracımız sahibine kavuştu.", "Bir anahtar, bir gülümseme."],
        hashtags: [["#otoservis", "#{handle}"], ["#araba"]],
        cta: ["Takip et.", "Randevu al."],
        music: [
          {
            title: "Garage Groove",
            artist: "Night Drive",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "19:00",
      },
    },
    {
      id: "astx-tt-tools",
      platform: "tiktok",
      format: "video",
      title: "Atölyemizin aletleri",
      description: "Detaylı temizlikte kullanılan ekipmanı tanıtan video.",
      caption:
        "{brand} atölyesinde: buhar makinesi, pasta makinesi, mikrofiber bezler ve pH nötr ürünler.",
      hashtags: ["#detailing", "#atölye", "#{handle}"],
      music: {
        title: "Chrome Lines",
        artist: "Night Drive",
      },
      cta: "Takip et.",
      media: [video("astx-tt-tools-m", IMG.mechanic2, "9:16", "Atölye ekipmanı", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Ekipman tanıtımları yeni atölyelerin işini ciddiye aldığını gösterir ve TikTok'ta ilk izleyicileri getirir.",
      estimate: {
        reach: [700, 3300],
        engagementRate: 7.3,
        potential: "average",
      },
      alternatives: {
        title: ["Ekipman turu", "Doğru alet, temiz iş"],
        caption: ["Aracına dokunan her alet burada.", "Detaylı temizliğin ekipmanı."],
        hashtags: [["#otoyıkama", "#{handle}"], ["#araba"]],
        cta: ["Soru sor.", "Randevu al."],
        music: [
          {
            title: "Garage Groove",
            artist: "Night Drive",
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
      youtube: 260,
      x: 90,
      linkedin: 130,
    },
    engagementRate: 8.2,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
