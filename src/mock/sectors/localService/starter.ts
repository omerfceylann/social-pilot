import { photo, video } from "@/mock/images";
import type { StarterKit } from "@/types";
import { IMG } from "./content";

/** Yeni açılan bir ev temizliği ve tamir hizmetinin ilk haftası. {brand} kullanıcının marka adıyla doldurulur. */
export const localServiceStarter: StarterKit = {
  suggestions: [
    {
      id: "lsst-welcome",
      platform: "instagram",
      format: "reel",
      title: "Ekibimizle tanış",
      description: "Ekibi, aracı ve malzemeleri gösteren kısa tanıtım.",
      caption:
        "Merhaba komşu! Biz {brand}: ev temizliği ve küçük tamirler için saatinde gelen bir ekip. Tanışalım.",
      hashtags: ["#evtemizliği", "#tamir", "#yenihizmet"],
      music: {
        title: "Fresh Start",
        artist: "Lofi Home",
      },
      cta: "İlk randevuna özel keşif bizden.",
      media: [video("lsst-welcome-m", IMG.drill, "9:16", "Alet çantası", 20)],
      theme: "behindTheScenes",
      reasoning:
        "Evine birini alacak kişi önce onu görmek ister. Ekip tanıtımı ilk randevu taleplerini getirir.",
      estimate: {
        reach: [500, 1900],
        engagementRate: 7.9,
        potential: "high",
      },
      alternatives: {
        title: ["Merhaba komşu", "Ekibimiz"],
        caption: [
          "Evine gelecek ekip biziz. Tanışalım!",
          "Saatinde gelen, temiz çalışan bir ekip.",
        ],
        hashtags: [
          ["#hizmet", "#{handle}"],
          ["#temizlik", "#usta"],
        ],
        cta: ["Randevu için DM.", "Takip et, ipuçları geliyor."],
        music: [
          {
            title: "Clean Slate",
            artist: "Lofi Home",
          },
        ],
      },
      suggestedAt: {
        day: 0,
        time: "19:00",
      },
    },
    {
      id: "lsst-services",
      platform: "instagram",
      format: "carousel",
      title: "Neler yapıyoruz?",
      description: "Her hizmete bir kare: temizlik, tesisat, elektrik, montaj.",
      caption:
        "{brand} hizmetleri: ev temizliği, tesisat, elektrik ve montaj. Fiyatlar önceden net. Kaydır.",
      hashtags: ["#evtemizliği", "#tesisat", "#montaj"],
      cta: "Hangisine ihtiyacın var?",
      media: [
        photo("lsst-serv-1", IMG.windowCleaning, "4:5", "Cam temizliği"),
        photo("lsst-serv-2", IMG.faucet, "4:5", "Tesisat"),
        photo("lsst-serv-3", IMG.electrician, "4:5", "Elektrik"),
      ],
      theme: "promotional",
      reasoning:
        "Yeni takipçiler önce hizmetleri görmek ister; hizmet carousel'i en çok kaydedilen ilk paylaşım.",
      estimate: {
        reach: [300, 1100],
        engagementRate: 6.4,
        potential: "average",
      },
      alternatives: {
        title: ["Hizmetlerimiz", "Sana nasıl yardım edebiliriz?"],
        caption: [
          "Temizlikten tamire, tüm hizmetlerimiz bir arada.",
          "Tek telefonla temizlik, tesisat ve elektrik.",
        ],
        hashtags: [["#hizmet", "#{handle}"], ["#evbakımı"]],
        cta: ["Fiyat için DM.", "Kaydet."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "12:00",
      },
    },
    {
      id: "lsst-tt-first",
      platform: "tiktok",
      format: "video",
      title: "İlk işimiz",
      description: "İlk müşteride yapılan temizliğin kısa kesiti.",
      caption: "{brand} olarak ilk işimiz: 3 yıldır temizlenmemiş bir balkon. Sonuç sonda.",
      hashtags: ["#cleantok", "#ilkiş", "#temizlik"],
      music: {
        title: "Fresh Start",
        artist: "Lofi Home",
      },
      cta: "Sıradaki iş senin evin olsun mu?",
      media: [video("lsst-tt-first-m", IMG.vacuum, "9:16", "Temizlik", 28)],
      theme: "storytelling",
      reasoning:
        '"İlk iş" videoları yerel hizmetlere samimiyet katar ve TikTok\'ta yeni hesapları keşfete taşır.',
      relatedTrendId: "lst-satisfying",
      estimate: {
        reach: [900, 4400],
        engagementRate: 9.0,
        potential: "high",
      },
      alternatives: {
        title: ["İş #1", "İlk müşterimiz"],
        caption: [
          "Bir yerden başlamak lazım: ilk işimiz bir balkon.",
          "İlk müşterimiz, ilk önce/sonra.",
        ],
        hashtags: [["#temizlik", "#{handle}"], ["#küçükişletme"]],
        cta: ["Takip et.", "Randevu için yaz."],
        music: [
          {
            title: "Clean Slate",
            artist: "Lofi Home",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "20:00",
      },
    },
    {
      id: "lsst-tt-tip",
      platform: "tiktok",
      format: "video",
      title: "Mutfak lavabosu için tek ipucu",
      description: "Lavaboyu parlatmanın kolay yolunu anlatan ipucu.",
      caption: "{brand} ipucu: lavabonu karbonat ve limonla parlat, sert kimyasala gerek yok.",
      hashtags: ["#temizlikipucu", "#mutfak", "#kendinyap"],
      cta: "Denedin mi? Yorumlara yaz.",
      media: [video("lsst-tt-tip-m", IMG.faucet, "9:16", "Lavabo", 25)],
      theme: "educational",
      reasoning: "Kısa ipuçları yeni hesapların keşfete düşmesini kolaylaştırır.",
      estimate: {
        reach: [800, 3600],
        engagementRate: 7.8,
        potential: "average",
      },
      alternatives: {
        title: ["Lavabo parlatma", "Kimyasalsız temizlik"],
        caption: [
          "Mutfakta zaten olan iki şeyle lavabo parlatma.",
          "Sert kimyasal yerine karbonat ve limon.",
        ],
        hashtags: [["#temizlik", "#{handle}"], ["#evipucu"]],
        cta: ["Kaydet.", "Takip et."],
        music: [],
      },
      suggestedAt: {
        day: 3,
        time: "19:30",
      },
    },
    {
      id: "lsst-yt-short",
      platform: "youtube",
      format: "short",
      title: "30 saniyelik önce/sonra",
      description: "Bir yüzeyin hızlı temizlik dönüşümü.",
      caption: "{brand} ekibinden 30 saniyelik önce/sonra.",
      hashtags: ["#shorts", "#öncesonra"],
      cta: "Abone ol.",
      media: [video("lsst-yt-short-m", IMG.spray, "9:16", "Temizlik", 30)],
      theme: "behindTheScenes",
      reasoning:
        "Shorts yeni kanalların ilk izleyicilerini bulduğu yer; önce/sonra videoları en çok izlenen tür.",
      estimate: {
        reach: [300, 1500],
        engagementRate: 6.2,
        potential: "average",
      },
      alternatives: {
        title: ["Önce/sonra", "Hızlı dönüşüm"],
        caption: ["30 saniyede bir yüzeyin dönüşümü.", "Bu yüzey 30 saniyede yenilendi."],
        hashtags: [["#shorts", "#temizlik"], ["#{handle}"]],
        cta: ["Bir sonraki yüzeyi sen seç.", "Sorunu yorumlara yaz."],
        music: [],
      },
      suggestedAt: {
        day: 2,
        time: "18:00",
      },
    },
    {
      id: "lsst-yt-intro",
      platform: "youtube",
      format: "video",
      title: "Hizmetlerimizi ve fiyatlandırmamızı tanıyın",
      description: "Hizmetleri, fiyatlandırma şeklini ve güvenlik önlemlerini anlatan tanıtım.",
      caption:
        "Bu videoda {brand} olarak hangi hizmetleri verdiğimizi, fiyatı nasıl belirlediğimizi ve ekip güvenliğini anlatıyoruz.",
      hashtags: ["#evhizmetleri", "#tanıtım"],
      cta: "Abone ol, ev bakım ipuçları yolda.",
      media: [video("lsst-yt-intro-m", IMG.planning, "16:9", "İş planlaması", 240)],
      theme: "storytelling",
      reasoning: "Uzun tanıtım videosu kanalın vitrini olur; güven ve arama trafiği getirir.",
      estimate: {
        reach: [150, 900],
        engagementRate: 5.0,
        potential: "average",
      },
      alternatives: {
        title: ["Biz kimiz?", "Nasıl çalışıyoruz?"],
        caption: [
          "Şeffaf fiyat ve güvenilir ekip: nasıl çalıştığımızı anlatıyoruz.",
          "Hizmetlerimiz, fiyatlarımız ve ekibimiz.",
        ],
        hashtags: [["#tanıtım"], ["#hizmet"]],
        cta: ["Sorularınızı yazın.", "Randevu bağlantısı açıklamada."],
        music: [],
      },
      suggestedAt: {
        day: 5,
        time: "19:00",
      },
    },
    {
      id: "lsst-x-hello",
      platform: "x",
      format: "post",
      title: "Merhaba X!",
      description: "Hizmeti kısa tanıtan ilk gönderi.",
      caption:
        "Merhaba! Biz {brand}: ev temizliği ve küçük tamirler için saatinde gelen bir ekip. Ev bakım sorularını burada yanıtlıyoruz.",
      hashtags: ["#evbakımı"],
      cta: "Takip et.",
      media: [],
      theme: "storytelling",
      reasoning:
        "X'te net bir ilk tanıtım, bölgedeki takipçilerin soru sormaya başlamasını kolaylaştırır.",
      estimate: {
        reach: [100, 500],
        engagementRate: 3.1,
        potential: "average",
      },
      alternatives: {
        title: ["İlk gönderimiz", "Biz kimiz?"],
        caption: [
          "{brand} yayında. Ev bakım sorularını yanıtlıyoruz.",
          "Yeni bir ev hizmetleri ekibiyiz.",
        ],
        hashtags: [["#temizlik"], ["#{handle}"]],
        cta: ["Bize yaz.", "Takipte kal."],
        music: [],
      },
      suggestedAt: {
        day: 0,
        time: "13:00",
      },
    },
    {
      id: "lsst-x-ask",
      platform: "x",
      format: "post",
      title: "Evde en çok neyi erteliyorsun?",
      description: "Takipçilere ertelenen ev işini soran gönderi.",
      caption:
        "Evde en çok hangi işi erteliyorsun? Cam silmek mi, damlayan musluk mu? {brand} ekibi merak ediyor.",
      hashtags: ["#evhali"],
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
        title: ["Ertelenen ev işleri", "Dürüst ol"],
        caption: [
          "Hepimizin ertelediği bir ev işi var. Seninki hangisi?",
          "Cam mı, musluk mu, dolap içi mi?",
        ],
        hashtags: [["#temizlik"], ["#ev"]],
        cta: ["Fikrini yaz.", "Arkadaşını etiketle."],
        music: [],
      },
      suggestedAt: {
        day: 4,
        time: "12:00",
      },
    },
    {
      id: "lsst-li-launch",
      platform: "linkedin",
      format: "post",
      title: "Hizmetimizi başlattık",
      description: "İşletmenin kuruluşunu anlatan duyuru.",
      caption:
        "Ev temizliği ve küçük tamir hizmetimizi duyurmaktan mutluluk duyuyoruz: {brand}. Sigortalı ekip, sabit fiyat ve zamanında hizmet.",
      hashtags: ["#girişimcilik", "#hizmet"],
      cta: "Yolculuğumuzu takip edin.",
      media: [photo("lsst-li-launch-m", IMG.plans, "1:1", "Proje planı")],
      theme: "storytelling",
      reasoning:
        "LinkedIn'de açılış duyurusu site yönetimleri ve kurumsal müşteriler için ilk görünürlüğü sağlar.",
      estimate: {
        reach: [200, 900],
        engagementRate: 4.7,
        potential: "average",
      },
      alternatives: {
        title: ["Yeni bir başlangıç", "Hizmetimiz başladı"],
        caption: [
          "Güvenilir ev hizmeti için yola çıktık.",
          "Sigortalı ve saatinde: hizmetimiz yayında.",
        ],
        hashtags: [["#girişim"], ["#yerelhizmet"]],
        cta: ["Destek mesajlarınız için teşekkürler.", "Bize ulaşın."],
        music: [],
      },
      suggestedAt: {
        day: 1,
        time: "09:30",
      },
    },
    {
      id: "lsst-li-offices",
      platform: "linkedin",
      format: "post",
      title: "Ofisler için düzenli bakım",
      description: "Küçük ofislere düzenli temizlik ve bakım teklif eden paylaşım.",
      caption: "{brand} ofis paketi: haftalık temizlik, aylık küçük bakım ve acil arıza desteği.",
      hashtags: ["#ofis", "#tesisyönetimi"],
      cta: "Teklif için mesaj atın.",
      media: [photo("lsst-li-office-m", IMG.cleanRoom, "1:1", "Temiz ofis alanı")],
      theme: "promotional",
      reasoning: "Net bir kurumsal teklif LinkedIn'de doğru karar vericilere ulaşır.",
      estimate: {
        reach: [150, 700],
        engagementRate: 4.2,
        potential: "average",
      },
      alternatives: {
        title: ["Ofisiniz için düzenli bakım", "Küçük ofislere özel"],
        caption: ["Ofisinizin temizliği ve bakımı tek elden.", "Haftalık temizlik, aylık bakım."],
        hashtags: [["#işletme"], ["#ofisyönetimi"]],
        cta: ["Bize yazın.", "Paylaşarak destek olun."],
        music: [],
      },
      suggestedAt: {
        day: 6,
        time: "10:00",
      },
    },
    {
      id: "lsst-story-poll",
      platform: "instagram",
      format: "story",
      title: "Temizlik mi tamir mi?",
      description: "Takipçilere ihtiyaçlarını soran anket.",
      caption: "{brand} anket: Temizlik mi, tamir mi?",
      hashtags: [],
      cta: "Oy ver",
      media: [photo("lsst-story-m", IMG.gloves, "9:16", "Eldivenler")],
      theme: "communityFocused",
      reasoning: "Anketli hikâyeler yeni hesaplarda en kolay etkileşim yolu.",
      estimate: {
        reach: [200, 700],
        engagementRate: 6.0,
        potential: "average",
      },
      alternatives: {
        title: ["İhtiyaç anketi", "Sen seç"],
        caption: ["Bu ay evinde neye ihtiyaç var?", "Önce hangisi lazım?"],
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
      id: "lssx-ig-team",
      platform: "instagram",
      format: "reel",
      title: "Ekibimiz yola çıktı",
      description: "Ekibin ilk iş gününe çıkışını gösteren Reel.",
      caption:
        "{brand} ekibi ilk işine yola çıktı: malzemeler tam, randevu saati 09:00, saatinde kapıdayız.",
      hashtags: ["#temizlik", "#tamir", "#{handle}"],
      music: {
        title: "Fresh Start",
        artist: "Lofi Home",
      },
      cta: "İlk randevunu oluştur.",
      media: [video("lssx-ig-team-m", IMG.vacuum, "9:16", "Temizlik ekipmanı", 15)],
      theme: "behindTheScenes",
      reasoning:
        "Yerel hizmette güven saatinde gelmekle başlar; ilk gün videosu ilk randevuları getirir.",
      estimate: {
        reach: [500, 2200],
        engagementRate: 7.5,
        potential: "average",
      },
      alternatives: {
        title: ["İlk iş günü", "Saatinde kapıda"],
        caption: ["Malzemeler tam, saat 09:00.", "İlk işimize yola çıktık."],
        hashtags: [["#evtemizliği", "#{handle}"], ["#yerelhizmet"]],
        cta: ["Takip et.", "Bize yaz."],
        music: [
          {
            title: "Clean Slate",
            artist: "Lofi Home",
          },
        ],
      },
      suggestedAt: {
        day: 1,
        time: "09:00",
      },
    },
    {
      id: "lssx-tt-promise",
      platform: "tiktok",
      format: "video",
      title: "Üç sözümüz",
      description: "Hizmetin üç temel sözünü anlatan kısa video.",
      caption:
        "{brand} üç söz veriyor: saatinde geliriz, fiyatı önceden söyleriz, işi temiz bitiririz.",
      hashtags: ["#yerelhizmet", "#temizlik", "#{handle}"],
      music: {
        title: "Fresh Start",
        artist: "Lofi Home",
      },
      cta: "Takip et.",
      media: [video("lssx-tt-promise-m", IMG.cleanRoom, "9:16", "Temiz oda", 20)],
      theme: "storytelling",
      reasoning: "Net söz veren tanıtımlar yeni hizmetlerin TikTok'ta güven kazanmasını sağlar.",
      estimate: {
        reach: [700, 3300],
        engagementRate: 7.3,
        potential: "average",
      },
      alternatives: {
        title: ["Saat, fiyat, temizlik", "Sözümüz"],
        caption: ["Üç basit söz, her işte aynı.", "Saatinde, net fiyatla, temiz."],
        hashtags: [["#tamir", "#{handle}"], ["#evhizmeti"]],
        cta: ["Soru sor.", "Randevu al."],
        music: [
          {
            title: "Clean Slate",
            artist: "Lofi Home",
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
      instagram: 480,
      tiktok: 2100,
      youtube: 200,
      x: 70,
      linkedin: 110,
    },
    engagementRate: 7.6,
    dailyReach: 0,
    dailyFollowerGrowth: 0,
  },
};
