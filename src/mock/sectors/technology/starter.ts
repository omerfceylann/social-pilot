import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni bir yazılım ürününün ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const technologyStarter: StarterKit = {
  suggestions: [
    {
      id: "tst-launch",
      platform: "linkedin",
      format: "post",
      title: "{brand} ile tanışın: Hangi problemi çözüyoruz?",
      description: "Ürünü özellik listesiyle değil, çözdüğü problemle tanıtan lansman paylaşımı.",
      caption:
        "Ekiplerin haftada saatlerini kaybettiği bir problem vardı ve biz onu çözmek için {brand} ürününü geliştirdik. Bugün ilk sürümü paylaşıyoruz. Geri bildirimleriniz yol haritamızı şekillendirecek.",
      hashtags: ["#ürünlansmanı", "#saas", "#girişim"],
      cta: "İlk kullanıcılarımızdan biri olun.",
      media: [photo("tst-launch-m", IMG.dashboard, "16:9", "Ürün arayüzü")],
      theme: "storytelling",
      reasoning:
        "B2B ürünlerde ilk takipçiler LinkedIn'den gelir. Problemle başlayan lansman paylaşımları, özellik listelerinden daha fazla yorum ve paylaşım alır.",
      estimate: { reach: [400, 1500], engagementRate: 6.8, potential: "high" },
      alternatives: {
        title: ["Bugün yayındayız", "Neden bu ürünü geliştirdik?"],
        caption: [
          "Aylardır üzerinde çalıştığımız ürün bugün yayında. {brand} ekiplerin daha az toplantıyla daha çok iş çıkarması için tasarlandı.",
          "Kendi ekibimizde yaşadığımız bir problemi çözmek için başladık. Şimdi aynı çözümü sizinle paylaşıyoruz.",
        ],
        hashtags: [
          ["#lansman", "#saas"],
          ["#girişimcilik", "#ürün"],
        ],
        cta: ["Ücretsiz deneyin.", "Düşüncelerinizi yorumlarda paylaşın."],
        music: [],
      },
      suggestedAt: { day: 0, time: "10:00" },
    },
    {
      id: "tst-demo",
      platform: "instagram",
      format: "reel",
      title: "30 saniyede {brand}",
      description: "Ürünün tek bir temel akışını gösteren kısa ekran kaydı.",
      caption: "Uzun bir tanıtım yerine 30 saniyelik bir gösterim. Görev oluştur, ata, takip et.",
      hashtags: ["#ürün", "#verimlilik", "#saas"],
      music: { title: "Focus Flow", artist: "Lofi Code" },
      cta: "Ücretsiz dene, link profilde.",
      media: [video("tst-demo-m", IMG.laptopDesk, "9:16", "Ekranda ürün demosu", 30)],
      theme: "productFocused",
      reasoning:
        "Yeni kullanıcılar bir ürünü denemeden önce çalıştığını görmek ister. Kısa ekran kayıtları, yazılı açıklamalardan daha hızlı güven oluşturur.",
      estimate: { reach: [500, 1800], engagementRate: 5.9, potential: "average" },
      alternatives: {
        title: ["Tek akış, 30 saniye", "Nasıl çalışıyor?"],
        caption: [
          "Nasıl çalıştığını anlatmak yerine gösterelim. 30 saniyede temel akış.",
          "Kurulum yok, eğitim yok. Aç ve kullan.",
        ],
        hashtags: [
          ["#demo", "#ürün"],
          ["#verimlilik", "#ekip"],
        ],
        cta: ["Hemen dene.", "Sorularını yorumlara yaz."],
        music: [{ title: "Coding Night", artist: "Lofi Code" }],
      },
      suggestedAt: { day: 2, time: "18:00" },
    },
    {
      id: "tst-why",
      platform: "linkedin",
      format: "carousel",
      title: "Kuruluş hikâyemiz 5 slaytta",
      description: "Kurucu ekibi, çıkış noktasını ve ilk hedefi anlatan carousel.",
      caption:
        "Bir ürünün arkasındaki insanları tanımak güven verir. Ekibimizi, neden başladığımızı ve ilk yıl hedefimizi 5 slaytta anlattık.",
      hashtags: ["#kuruluşhikayesi", "#girişim", "#ekip"],
      cta: "Yolculuğumuzu takip edin.",
      media: [
        photo("tst-why-1", IMG.founder, "1:1", "Kurucu portresi"),
        photo("tst-why-2", IMG.teamMeeting, "1:1", "Ekip toplantısı"),
      ],
      theme: "behindTheScenes",
      reasoning:
        "Erken aşama girişimlerde kurucu hikâyeleri, ürün paylaşımlarından daha fazla etkileşim alır.",
      estimate: { reach: [300, 1100], engagementRate: 6.2, potential: "average" },
      alternatives: {
        title: ["Neden başladık?", "Ekibimizle tanışın"],
        caption: [
          "3 kişilik bir ekip, bir problem ve çok fazla kahve. Hikâyemiz kısaca böyle.",
          "Ürünü geliştiren ekibi tanıyın: kim olduğumuz ve neden bu işi yaptığımız.",
        ],
        hashtags: [["#startup", "#ekip"], ["#girişimcilik"]],
        cta: ["Takip edin.", "Bize yazın."],
        music: [],
      },
      suggestedAt: { day: 4, time: "09:30" },
    },
    {
      id: "tst-ask",
      platform: "x",
      format: "post",
      title: "İlk soru: En çok zaman kaybettiren iş?",
      description: "Hedef kitleyle ilk teması kuran kısa bir soru paylaşımı.",
      caption:
        "Ekip olarak çalışırken en çok zamanınızı ne kaybettiriyor? Cevapları bir sonraki özelliğimiz için okuyacağız.",
      hashtags: ["#buildinpublic", "#verimlilik"],
      cta: "Cevabınızı yazın.",
      media: [],
      theme: "communityFocused",
      reasoning:
        "#buildinpublic etiketiyle yapılan soru paylaşımları erken kullanıcı bulmanın en ucuz yolu. Cevaplar ürün yol haritasına da girdi sağlar.",
      relatedTrendId: "tt-build-in-public",
      estimate: { reach: [200, 900], engagementRate: 5.4, potential: "average" },
      alternatives: {
        title: ["Size soruyoruz", "Yol haritamızı birlikte yazalım"],
        caption: [
          "Bir sonraki özelliğimizi siz belirleyin: iş yerinde en çok hangi süreç sizi yavaşlatıyor?",
          "Toplantı mı, e-posta mı, dağınık dosyalar mı? En büyük zaman hırsızınız hangisi?",
        ],
        hashtags: [["#buildinpublic"], ["#saas", "#ürün"]],
        cta: ["Yanıtlayın.", "Ekibinize sorun."],
        music: [],
      },
      suggestedAt: { day: 5, time: "11:00" },
    },
    {
      id: "tst-ig-team",
      platform: "instagram",
      format: "carousel",
      title: "Ürünün arkasındaki ekip",
      description: "Ekip üyelerini ve rollerini tanıtan, samimi fotoğraflı carousel.",
      caption:
        "Bir ürünün arkasında insanlar var. {brand} ekibiyle tanış: kim ne yapıyor, en sevdiği özellik ne?",
      hashtags: ["#ekip", "#startup", "#yazılım"],
      cta: "Sorularını yorumlara bırak.",
      media: [
        photo("tst-ig-team-1", IMG.teamLaptops, "4:5", "Ekip çalışırken"),
        photo("tst-ig-team-2", IMG.office, "4:5", "Ofis ortamı"),
      ],
      theme: "behindTheScenes",
      reasoning:
        "Yeni bir yazılım markasına güven, ürünü geliştiren insanları görünce oluşur. Ekip tanıtımları Instagram'da ürün görsellerinden daha fazla etkileşim alır.",
      estimate: {
        reach: [250, 900],
        engagementRate: 6.4,
        potential: "average",
      },
      alternatives: {
        title: ["Ekibimizle tanış", "Kodun arkasındakiler"],
        caption: [
          "Her özelliğin arkasında bir hikâye var. Ekibimizle tanış.",
          "Küçük bir ekip, büyük bir hedef. Biz kimiz?",
        ],
        hashtags: [["#ekip", "#girişim"]],
        cta: ["Takip et.", "Sorunu yaz."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "12:00",
      },
    },
    {
      id: "tst-x-shipped",
      platform: "x",
      format: "post",
      title: "İlk hafta: Ne gönderdik?",
      description: "#buildinpublic formatında haftalık ilerleme paylaşımı.",
      caption:
        "{brand} ilk haftasını tamamladı: 3 hata düzeltildi, 1 özellik eklendi, 40 geri bildirim okundu. Sıradaki hafta: bildirim ayarları. #buildinpublic",
      hashtags: ["#buildinpublic", "#saas"],
      cta: "Önerini yaz, listeye ekleyelim.",
      media: [],
      theme: "productFocused",
      reasoning:
        "#buildinpublic paylaşımları erken aşama ürünlerin X'te topluluk bulmasının en etkili yolu. Düzenli ilerleme notları güven oluşturur.",
      relatedTrendId: "tt-build-in-public",
      estimate: {
        reach: [200, 1000],
        engagementRate: 5.1,
        potential: "average",
      },
      alternatives: {
        title: ["Haftalık ilerleme", "Bu hafta neler yaptık?"],
        caption: [
          "Bu hafta ne gönderdik? Kısa bir ilerleme notu.",
          "Ürün günlüğü, 1. hafta: neler değişti?",
        ],
        hashtags: [["#buildinpublic", "#ürün"]],
        cta: ["Geri bildirim bırak.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "17:00",
      },
    },
    {
      id: "tst-tt-meeting",
      platform: "tiktok",
      format: "video",
      title: "Bu toplantı e-posta olabilirdi",
      description: "Ofis hayatındaki tanıdık bir anı esprili biçimde canlandıran kısa video.",
      caption:
        "60 dakikalık 'kısa senkron'. Tanıdık geldi mi? Biz bu yüzden {brand} ürününü geliştirdik.",
      hashtags: ["#ofishayatı", "#toplantı", "#iş"],
      music: {
        title: "Oh No",
        artist: "Kreepa",
      },
      cta: "Sen en uzun hangi toplantıdaydın?",
      media: [video("tst-tt-meeting-m", IMG.office, "9:16", "Toplantı odası", 22)],
      theme: "entertaining",
      reasoning:
        "TikTok'ta B2B ürünler ürünü değil, çözdüğü problemi eğlenceli anlatınca keşfedilir. Ofis mizahı en çok paylaşılan kategorilerden.",
      estimate: {
        reach: [1000, 5000],
        engagementRate: 6.8,
        potential: "high",
      },
      alternatives: {
        title: ["Toplantılar hakkında", "Tanıdık bir sahne"],
        caption: [
          "Takvimde 'kısa senkron' yazıyor. Süre: 60 dakika.",
          "Herkesin katıldığı, kimsenin konuşmadığı toplantı.",
        ],
        hashtags: [["#ofis", "#iş", "#mizah"]],
        cta: ["Etiketle.", "Yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "19:00",
      },
    },
    {
      id: "tst-tt-setup",
      platform: "tiktok",
      format: "video",
      title: "3 adımda ilk projeni kur",
      description: "Ekran kaydıyla ilk projenin kurulumunu gösteren eğitici video.",
      caption: "İlk projeni kurmak 30 saniye sürüyor: oluştur, ekibi davet et, ilk görevi ekle.",
      hashtags: ["#verimlilik", "#nasılyapılır", "#saas"],
      music: {
        title: "Focus Flow",
        artist: "Lofi Code",
      },
      cta: "Dene ve sonucu yorumlara yaz.",
      media: [video("tst-tt-setup-m", IMG.laptopMinimal, "9:16", "Ekran kaydı", 28)],
      theme: "educational",
      reasoning:
        "Kısa 'nasıl yapılır' videoları TikTok'ta kaydedilme oranı en yüksek içerik. Kurulumun kolay olduğunu göstermek ilk kayıtları artırır.",
      estimate: {
        reach: [800, 3500],
        engagementRate: 5.9,
        potential: "average",
      },
      alternatives: {
        title: ["30 saniyede kurulum", "İlk projen hazır"],
        caption: [
          "Kurulum için eğitime gerek yok. 30 saniyede izle.",
          "Oluştur, davet et, başla. Bu kadar.",
        ],
        hashtags: [["#verimlilik", "#araç"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "18:30",
      },
    },
    {
      id: "tst-yt-walkthrough",
      platform: "youtube",
      format: "video",
      title: "{brand} ile ilk 10 dakika",
      description: "Ürünün temel özelliklerini sırayla gösteren kapsamlı tanıtım videosu.",
      caption:
        "Yeni başlayanlar için {brand} turu: proje oluşturma, görev atama, panolar ve raporlar. 10 dakikada temel her şey.",
      hashtags: ["#eğitim", "#projeyönetimi", "#saas"],
      cta: "Sorularını yorumlarda yanıtlıyoruz.",
      media: [video("tst-yt-walkthrough-m", IMG.codeScreen, "16:9", "Ürün arayüzü", 600)],
      theme: "educational",
      reasoning:
        "YouTube'da ürün eğitimleri, deneme sürümündeki kullanıcıların en çok aradığı içerik. Uzun video arama trafiği getirir.",
      estimate: {
        reach: [150, 1000],
        engagementRate: 5.4,
        potential: "average",
      },
      alternatives: {
        title: ["Başlangıç rehberi", "Temel özellikler turu"],
        caption: [
          "Ürünü ilk kez açanlar için adım adım tur.",
          "10 dakikada ekibinle kullanmaya hazır ol.",
        ],
        hashtags: [["#rehber", "#saas"]],
        cta: ["Abone ol.", "Soru sor."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "20:00",
      },
    },
    {
      id: "tst-yt-short",
      platform: "youtube",
      format: "short",
      title: "Tek özellik, 30 saniye",
      description: "Tek bir özelliği hızlıca gösteren Shorts serisinin ilk bölümü.",
      caption:
        "Bir özellik, 30 saniye: tekrarlayan görevler. Her pazartesi aynı işi elle açmaya son.",
      hashtags: ["#shorts", "#verimlilik", "#ipucu"],
      cta: "Abone ol, seri devam ediyor.",
      media: [video("tst-yt-short-m", IMG.laptopCode, "9:16", "Ekranda görev listesi", 30)],
      theme: "productFocused",
      reasoning:
        "Shorts yeni kanallara hızla izlenme getirir. Tek özelliğe odaklanan seri, izleyiciyi uzun videolara yönlendirir.",
      estimate: {
        reach: [300, 1500],
        engagementRate: 5.0,
        potential: "average",
      },
      alternatives: {
        title: ["30 saniyelik ipucu", "Özellik serisi #1"],
        caption: ["Bugünün özelliği: tekrarlayan görevler.", "Zaman kazandıran küçük bir özellik."],
        hashtags: [["#shorts", "#ipucu"]],
        cta: ["Abone ol.", "Sıradaki özelliği sen seç."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "18:00",
      },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 260, tiktok: 700, youtube: 120, x: 380, linkedin: 520 },
    engagementRate: 6.1,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
