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
  ],
  drafts: [
    {
      id: "tsd-launch-note",
      platform: "linkedin",
      format: "post",
      status: "draft",
      title: "İlk sürüm yayında",
      caption:
        "Bugün {brand} için büyük bir gün: ilk sürüm yayında. İlk 100 ekibe 3 ay ücretsiz kullanım sunuyoruz.",
      hashtags: ["#lansman", "#saas"],
      cta: "Erken erişim için yorum bırakın.",
      media: [
        photo("tsd-launch-note-m", IMG.laptopMinimal, "16:9", "Masa üstünde dizüstü bilgisayar"),
      ],
      theme: "productFocused",
      at: { day: 0, time: "11:00" },
    },
  ],
  analytics: {
    followers: { instagram: 0, tiktok: 0, youtube: 0, x: 0, linkedin: 0 },
    avgViews: { instagram: 260, tiktok: 700, youtube: 120, x: 380, linkedin: 520 },
    engagementRate: 6.1,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
  agentActivity: { trendsAnalyzed: 18, opportunitiesFound: 4, commentsReviewed: 0 },
};
