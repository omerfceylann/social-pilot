import { photo, video } from "@/mock/images";
import type { SeedPost, SeedSuggestion, Trend } from "@/types";

export const IMG = {
  desk: "1503676260728-1c00da094a0b",
  library: "1427504494785-3a9ca7044f45",
  books: "1497633762265-9d179a990aa6",
  groupStudy: "1522202176988-66273c2fd55f",
  classroom: "1509062522246-3755977927d7",
  student: "1513258496099-48168024aec0",
  openBooks: "1456513080510-7bf3a84b82f8",
  writing: "1434030216411-0b793f4b4173",
  lecture: "1524178232363-1fb2b075b655",
  kidsClass: "1588072432836-e10032774350",
  loveToLearn: "1546410531-bb4caa6b424d",
};

export const educationTrends: Trend[] = [
  {
    id: "edt-one-mistake",
    title: "Tek hata, tek düzeltme",
    description:
      "Türklerin İngilizcede en sık yaptığı tek bir hatayı düzelten kısa videolar çok paylaşılıyor.",
    category: "format",
    platforms: ["tiktok", "instagram"],
    momentum: 57,
    insight: '"I am agree" gibi yaygın bir hatayı 15 saniyede düzelt; doğru kullanımı ekranda yaz.',
    hashtags: ["#ingilizce", "#englishtips", "#dilöğren"],
  },
  {
    id: "edt-speaking",
    title: "Konuşma pratiği",
    description: "Dil bilgisi yerine konuşma odaklı öğrenme içeriklerine ilgi artıyor.",
    category: "topic",
    platforms: ["instagram", "youtube"],
    momentum: 44,
    insight:
      "Bir dersin konuşma pratiği bölümünden 30 saniyelik bir kesit paylaş (öğrenci izniyle).",
    hashtags: ["#speaking", "#konuşmapratiği"],
  },
  {
    id: "edt-ielts",
    title: "IELTS hazırlığı",
    description: "Yurt dışı başvuru dönemi yaklaşırken sınav hazırlık içerikleri yükseliyor.",
    category: "topic",
    platforms: ["youtube", "x"],
    momentum: 36,
    insight: "Writing Task 2 için bir giriş paragrafı şablonu paylaşan kısa bir rehber hazırla.",
    hashtags: ["#ielts", "#yurtdışıeğitim"],
  },
  {
    id: "edt-study-with-me",
    title: "#studywithme",
    description: "Birlikte çalışma videoları öğrenci kitlesinde yeniden gündemde.",
    category: "hashtag",
    platforms: ["tiktok", "youtube"],
    momentum: 29,
    insight: "Kurs kütüphanesinde 25 dakikalık bir pomodoro oturumu çek, sonunda bir kelime öğret.",
    hashtags: ["#studywithme", "#pomodoro"],
  },
];

export const educationSuggestions: SeedSuggestion[] = [
  {
    id: "eds-mistake",
    platform: "instagram",
    format: "reel",
    title: '"I am agree" demeyi bırak',
    description: "Türklerin en sık yaptığı İngilizce hatasını 15 saniyede düzelten Reel.",
    caption:
      '"I am agree" değil, "I agree". Çünkü agree zaten bir fiil. Kaydet, bir daha karıştırma.',
    hashtags: ["#ingilizce", "#englishtips", "#dilöğren", "#{handle}"],
    music: {
      title: "Study Session",
      artist: "Lofi Girl",
    },
    cta: "Sıradaki hatayı yorumlara yaz, biz düzeltelim.",
    media: [video("eds-mistake-m", IMG.writing, "9:16", "Deftere not alan öğrenci", 18)],
    theme: "educational",
    reasoning:
      '"Tek hata, tek düzeltme" formatı %57 yükselişte. Hesabındaki kısa dil ipuçları ortalamanın %45 üstünde kaydediliyor.',
    relatedTrendId: "edt-one-mistake",
    estimate: {
      reach: [12000, 21000],
      engagementRate: 7.9,
      potential: "high",
    },
    alternatives: {
      title: ["En sık yapılan İngilizce hata", "Agree nasıl kullanılır?"],
      caption: [
        "Bu hatayı yapanların çoğu farkında bile değil. 15 saniyede düzeltelim.",
        'Agree bir fiil, "am" gerekmez. Kısa ama çok önemli.',
      ],
      hashtags: [
        ["#englishtips", "#{handle}"],
        ["#ingilizceöğren", "#dilbilgisi", "#hata"],
      ],
      cta: ["Kaydet, tekrar et.", "Arkadaşına gönder."],
      music: [
        {
          title: "Study Session",
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
    id: "eds-phrases",
    platform: "instagram",
    format: "carousel",
    title: "İş görüşmesi için 6 kalıp",
    description: "Mülakatta kullanılabilecek 6 doğal İngilizce kalıp ve Türkçe karşılıkları.",
    caption: "İş görüşmesinde ezber cümleler yerine bu 6 doğal kalıbı kullan. Kaydır, kaydet.",
    hashtags: ["#işgörüşmesi", "#businessenglish", "#{handle}"],
    cta: "Kaydet, mülakattan önce bir kez daha bak.",
    media: [
      photo("eds-phr-1", IMG.openBooks, "4:5", "Açık kitaplar"),
      photo("eds-phr-2", IMG.writing, "4:5", "Not alan öğrenci"),
      photo("eds-phr-3", IMG.groupStudy, "4:5", "Birlikte çalışan öğrenciler"),
    ],
    theme: "educational",
    reasoning:
      "Kalıp listeleri hesabında en çok kaydedilen içerik; iş İngilizcesi aramaları bu ay arttı.",
    estimate: {
      reach: [7000, 13000],
      engagementRate: 6.6,
      potential: "high",
    },
    alternatives: {
      title: ["Mülakat İngilizcesi", "Mülakatta rahat konuş"],
      caption: [
        '"Tell me about yourself" sorusuna hazır mısın? Bu 6 kalıp işini kolaylaştırır.',
        "Doğal konuşmak için uzun cümleler değil, doğru kalıplar lazım.",
      ],
      hashtags: [
        ["#businessenglish", "#kariyer"],
        ["#ingilizce", "#mülakat", "#{handle}"],
      ],
      cta: ["Hangi kalıbı kullanıyorsun? Yorumlara yaz.", "Mülakat provası için DM."],
      music: [],
    },
    suggestedAt: {
      day: 3,
      time: "12:00",
    },
  },
  {
    id: "eds-speaking",
    platform: "tiktok",
    format: "video",
    title: "Derste bir konuşma pratiği",
    description: "Küçük grup dersinden, öğrenci izniyle 40 saniyelik konuşma kesiti.",
    caption:
      "Dersin en sevdiğimiz kısmı: 10 dakikalık serbest konuşma. Bugünün konusu: hayalindeki tatil. (Öğrenci izniyle)",
    hashtags: ["#speaking", "#ingilizce", "#konuşmapratiği", "#{handle}"],
    music: {
      title: "Rainy Desk",
      artist: "Lofi Girl",
    },
    cta: "Sen olsan ne anlatırdın? Yorumlara İngilizce yaz.",
    media: [video("eds-speak-m", IMG.groupStudy, "9:16", "Sohbet eden öğrenciler", 40)],
    theme: "behindTheScenes",
    reasoning:
      "Konuşma pratiği içerikleri %44 yükselişte; ders kesitleri güven ve kayıt talebi getiriyor.",
    relatedTrendId: "edt-speaking",
    estimate: {
      reach: [15000, 27000],
      engagementRate: 7.2,
      potential: "high",
    },
    alternatives: {
      title: ["Bir dersimizden", "Serbest konuşma saati"],
      caption: [
        "Hata yapmaktan korkmadan konuşmak böyle bir şey.",
        "Küçük grup, büyük cesaret: bir konuşma pratiğimiz.",
      ],
      hashtags: [
        ["#speaking", "#dilkursu"],
        ["#englishclass", "#{handle}"],
      ],
      cta: ["Deneme dersi için profile bak.", "Takip et, yeni kesitler geliyor."],
      music: [
        {
          title: "Study Session",
          artist: "Lofi Girl",
        },
      ],
    },
    suggestedAt: {
      day: 0,
      time: "20:00",
    },
  },
  {
    id: "eds-yt-ielts",
    platform: "youtube",
    format: "video",
    title: "IELTS Writing Task 2: Giriş paragrafı şablonu",
    description: "Writing Task 2 için her konuya uyarlanabilir giriş paragrafı yapısı.",
    caption:
      "IELTS Writing Task 2'de giriş paragrafını 3 cümlede kurmanın yolu. Şablonu, örnekleri ve sık yapılan hataları anlatıyoruz.",
    hashtags: ["#ielts", "#writing", "#yurtdışıeğitim"],
    cta: "Abone ol, Task 2'nin diğer bölümleri yolda.",
    media: [video("eds-yt-m", IMG.lecture, "16:9", "Ders anlatımı", 720)],
    theme: "educational",
    reasoning:
      "IELTS hazırlık içerikleri başvuru dönemi öncesi %36 yükseliyor; YouTube'da arama trafiği getiriyor.",
    relatedTrendId: "edt-ielts",
    estimate: {
      reach: [4000, 9000],
      engagementRate: 5.8,
      potential: "average",
    },
    alternatives: {
      title: ["IELTS giriş paragrafı", "Task 2'ye güçlü başla"],
      caption: [
        "3 cümlede güçlü bir giriş: IELTS Writing Task 2 şablonu.",
        "Giriş paragrafı puanını düşürüyorsa bu video senin için.",
      ],
      hashtags: [
        ["#ielts", "#sınav"],
        ["#ingilizce", "#writing"],
      ],
      cta: ["Sorularını yorumlara yaz.", "Şablonun PDF'i açıklamada."],
      music: [],
    },
    suggestedAt: {
      day: 4,
      time: "19:00",
    },
  },
  {
    id: "eds-x-word",
    platform: "x",
    format: "post",
    title: "Günün kelimesi: Overwhelmed",
    description: "Günlük kelime gönderisi, örnek cümleyle.",
    caption:
      'Günün kelimesi: overwhelmed (bunalmış). "I felt overwhelmed by all the emails." Senin cümlen ne olurdu?',
    hashtags: ["#ingilizce", "#gününkelimesi"],
    cta: "Kendi cümleni yanıtla.",
    media: [],
    theme: "educational",
    reasoning:
      "Günlük kelime gönderileri X'te düzenli etkileşim getiriyor; yanıtlarda öğrenciler pratik yapıyor.",
    estimate: {
      reach: [900, 2400],
      engagementRate: 4.2,
      potential: "average",
    },
    alternatives: {
      title: ["Overwhelmed ne demek?", "Kelime: Overwhelmed"],
      caption: [
        "Bunalmış hissettiğinde İngilizcede ne dersin? Overwhelmed.",
        "Overwhelmed: bunalmış, altında ezilmiş. Bir cümle kur, düzeltelim.",
      ],
      hashtags: [["#vocabulary"], ["#ingilizceöğren"]],
      cta: ["Cümleni yaz.", "Takip et, her gün bir kelime."],
      music: [],
    },
    suggestedAt: {
      day: 1,
      time: "09:00",
    },
  },
  {
    id: "eds-li-corporate",
    platform: "linkedin",
    format: "post",
    title: "Ekipler için iş İngilizcesi",
    description: "Şirketlere yönelik kurumsal dil programını anlatan paylaşım.",
    caption:
      "Toplantılarda sessiz kalan ekip arkadaşlarınızı fark ettiniz mi? Kurumsal İngilizce programımız, gerçek iş senaryolarıyla konuşma özgüvenini artırıyor.",
    hashtags: ["#kurumsaleğitim", "#businessenglish", "#insankaynakları"],
    cta: "Ekibiniz için seviye testi talep edin.",
    media: [photo("eds-li-m", IMG.lecture, "1:1", "Toplantı odasında eğitim")],
    theme: "educational",
    reasoning:
      "LinkedIn'de kurumsal eğitim içerikleri İK yöneticilerine ulaşıyor; hesabında en yüksek teklif talebini bu tür paylaşımlar getirdi.",
    estimate: {
      reach: [2000, 5600],
      engagementRate: 4.8,
      potential: "average",
    },
    alternatives: {
      title: ["Toplantılarda özgüven", "Kurumsal İngilizce"],
      caption: [
        "Ekibinizin İngilizcesi var ama konuşmaya çekiniyor mu? Çözümü konuşarak öğrenmek.",
        "Gerçek iş senaryolarıyla 8 haftalık konuşma programı.",
      ],
      hashtags: [
        ["#eğitim", "#gelişim"],
        ["#ik", "#yetenek"],
      ],
      cta: ["Bize yazın.", "Program detaylarını isteyin."],
      music: [],
    },
    suggestedAt: {
      day: 5,
      time: "09:30",
    },
  },
  {
    id: "edx-ig-word",
    platform: "instagram",
    format: "post",
    title: "Günün ifadesi: 'on the same page'",
    description: "İş İngilizcesinde sık kullanılan bir ifadeyi örnek cümleyle anlatan gönderi.",
    caption:
      "'On the same page' = aynı fikirde olmak. Örnek: Before the meeting, let's make sure we're on the same page.",
    hashtags: ["#ingilizce", "#işingilizcesi", "#{handle}"],
    cta: "Kendi cümleni yorumlara yaz.",
    media: [photo("edx-ig-word-m", IMG.writing, "4:5", "Not alan öğrenci")],
    theme: "educational",
    reasoning:
      "Günün ifadesi gönderileri hesabında en çok yorum alan içerik; takipçiler kendi cümlelerini yazıyor.",
    estimate: {
      reach: [5000, 9000],
      engagementRate: 6.6,
      potential: "average",
    },
    alternatives: {
      title: ["İş İngilizcesi: bir ifade", "Toplantı ifadesi"],
      caption: [
        "Toplantılarda en çok duyacağın ifadelerden biri.",
        "Bir ifade, bir örnek, bir alıştırma.",
      ],
      hashtags: [
        ["#ingilizceöğren", "#{handle}"],
        ["#businessenglish", "#kelime"],
      ],
      cta: ["Kaydet, toplantıda kullan.", "Deneme dersine katıl."],
      music: [],
    },
    suggestedAt: {
      day: 2,
      time: "08:30",
    },
  },
  {
    id: "edx-ig-reel-mistake",
    platform: "instagram",
    format: "reel",
    title: "'I am agree' değil!",
    description: "Türkçe konuşanların sık yaptığı bir hatayı düzelten Reel.",
    caption:
      "'I am agree' değil, 'I agree'. Türkçedeki 'katılıyorum' yapısı yüzünden en sık yapılan hata bu.",
    hashtags: ["#ingilizcehatalar", "#ingilizce", "#{handle}"],
    music: {
      title: "Study Session",
      artist: "Lofi Girl",
    },
    cta: "Kaydet, bir daha yapma.",
    media: [video("edx-ig-reel-mistake-m", IMG.student, "9:16", "Öğrenci", 20)],
    theme: "educational",
    reasoning:
      "Tek hata formatı yükselişte; hesabındaki hata düzeltme Reel'leri ortalamanın %50 üstünde kaydediliyor.",
    relatedTrendId: "edt-one-mistake",
    estimate: {
      reach: [14000, 24000],
      engagementRate: 8.0,
      potential: "high",
    },
    alternatives: {
      title: ["En sık hata", "Agree'nin doğrusu"],
      caption: ["Bu hatayı neredeyse herkes yapıyor.", "Tek kelimelik düzeltme, büyük fark."],
      hashtags: [
        ["#ingilizceöğren", "#{handle}"],
        ["#gramer", "#speaking"],
      ],
      cta: ["Arkadaşını etiketle.", "Deneme dersine katıl."],
      music: [
        {
          title: "Rainy Desk",
          artist: "Lofi Girl",
        },
      ],
    },
    suggestedAt: {
      day: 3,
      time: "19:00",
    },
  },
  {
    id: "edx-ig-carousel-email",
    platform: "instagram",
    format: "carousel",
    title: "E-postada 5 kalıp",
    description: "İş e-postalarında kullanılabilecek kalıpları sıralayan carousel.",
    caption:
      "I hope this email finds you well, Please find attached, Could you please, I look forward to, Best regards. Her biri için örnek kaydırmada.",
    hashtags: ["#işingilizcesi", "#eposta", "#{handle}"],
    cta: "Kaydet, bir sonraki e-postada kullan.",
    media: [
      photo("edx-ig-carousel-email-1", IMG.desk, "4:5", "Çalışma masası"),
      photo("edx-ig-carousel-email-2", IMG.writing, "4:5", "Yazı yazan kişi"),
      photo("edx-ig-carousel-email-3", IMG.openBooks, "4:5", "Açık kitaplar"),
    ],
    theme: "educational",
    reasoning:
      "İş İngilizcesi kalıpları hesabında en çok kaydedilen carousel'ler; çalışan kitle hazır kalıp arıyor.",
    estimate: {
      reach: [7000, 13000],
      engagementRate: 6.9,
      potential: "high",
    },
    alternatives: {
      title: ["Hazır e-posta kalıpları", "Profesyonel e-posta"],
      caption: [
        "İngilizce e-posta yazmak bu kalıplarla kolaylaşır.",
        "Beş kalıp, her e-postada işe yarar.",
      ],
      hashtags: [
        ["#ingilizce", "#{handle}"],
        ["#businessenglish", "#kariyer"],
      ],
      cta: ["Ekip arkadaşına gönder.", "İş İngilizcesi kursumuzu incele."],
      music: [],
    },
    suggestedAt: {
      day: 5,
      time: "12:00",
    },
  },
  {
    id: "edx-tt-pronounce",
    platform: "tiktok",
    format: "video",
    title: "Bu kelimeyi nasıl okuyorsun?",
    description: "Yanlış telaffuz edilen kelimeleri düzelten video.",
    caption:
      "Comfortable, vegetable, Wednesday. Üç kelime, üç sessiz hece. Doğru telaffuzu dinle ve tekrar et.",
    hashtags: ["#telaffuz", "#ingilizce", "#{handle}"],
    music: {
      title: "Study Session",
      artist: "Lofi Girl",
    },
    cta: "Hangisini yanlış okuyordun?",
    media: [video("edx-tt-pronounce-m", IMG.student, "9:16", "Konuşan öğrenci", 25)],
    theme: "educational",
    reasoning:
      "Telaffuz videoları TikTok'ta en çok tekrar izlenen dil içeriği; tek hata formatı yükselişte.",
    relatedTrendId: "edt-one-mistake",
    estimate: {
      reach: [16000, 28000],
      engagementRate: 8.3,
      potential: "high",
    },
    alternatives: {
      title: ["Üç sessiz hece", "Telaffuz testi"],
      caption: ["Bu üç kelimeyi doğru okuyor musun?", "Yazıldığı gibi okunmayan üç kelime."],
      hashtags: [
        ["#ingilizceöğren", "#{handle}"],
        ["#pronunciation", "#dil"],
      ],
      cta: ["Takip et, her gün bir kelime.", "Deneme dersine katıl."],
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
    id: "edx-tt-study",
    platform: "tiktok",
    format: "video",
    title: "Benimle 25 dakika çalış",
    description: "Pomodoro tekniğiyle birlikte çalışma videosu.",
    caption:
      "25 dakika odak, 5 dakika mola. Bugün kelime listeni benimle çalış; ekranda sayaç var.",
    hashtags: ["#studywithme", "#pomodoro", "#{handle}"],
    music: {
      title: "Study Session",
      artist: "Lofi Girl",
    },
    cta: "Takip et, her akşam birlikte çalışalım.",
    media: [video("edx-tt-study-m", IMG.desk, "9:16", "Çalışma masası", 60)],
    theme: "communityFocused",
    reasoning:
      "Study with me formatı yükselişte; birlikte çalışma videoları izlenme süresinde ortalamanın çok üstünde.",
    relatedTrendId: "edt-study-with-me",
    estimate: {
      reach: [12000, 22000],
      engagementRate: 7.4,
      potential: "high",
    },
    alternatives: {
      title: ["Pomodoro seansı", "25 dakika odak"],
      caption: ["Yalnız çalışmak zorsa benimle çalış.", "Bir pomodoro, bir kelime listesi."],
      hashtags: [
        ["#ders", "#{handle}"],
        ["#odak", "#ingilizce"],
      ],
      cta: ["Yorumlara ne çalıştığını yaz.", "Online çalışma grubumuza katıl."],
      music: [
        {
          title: "Rainy Desk",
          artist: "Lofi Girl",
        },
      ],
    },
    suggestedAt: {
      day: 3,
      time: "20:00",
    },
  },
  {
    id: "edx-tt-interview",
    platform: "tiktok",
    format: "video",
    title: "Mülakatta 'Tell me about yourself'",
    description: "İngilizce mülakat sorusuna örnek cevap yapısını anlatan video.",
    caption:
      "Şimdi, geçmiş, gelecek: 30 saniyelik cevap için üç adım. Örnek cevabı ekranda takip et.",
    hashtags: ["#mülakat", "#işingilizcesi", "#{handle}"],
    music: {
      title: "Study Session",
      artist: "Lofi Girl",
    },
    cta: "Kaydet, mülakattan önce izle.",
    media: [video("edx-tt-interview-m", IMG.lecture, "9:16", "Eğitmen", 30)],
    theme: "educational",
    reasoning:
      "Mülakat hazırlığı içerikleri hesabının çalışan kitlesinde en çok kaydedilen video türü.",
    estimate: {
      reach: [11000, 20000],
      engagementRate: 7.1,
      potential: "average",
    },
    alternatives: {
      title: ["Mülakatın ilk sorusu", "30 saniyelik cevap"],
      caption: ["Mülakatın ilk sorusuna hazır mısın?", "Kendini üç adımda tanıt."],
      hashtags: [
        ["#kariyer", "#{handle}"],
        ["#ingilizce", "#jobinterview"],
      ],
      cta: ["Takip et.", "Mülakat provası için DM."],
      music: [
        {
          title: "Rainy Desk",
          artist: "Lofi Girl",
        },
      ],
    },
    suggestedAt: {
      day: 5,
      time: "19:00",
    },
  },
];

export const educationPosts: SeedPost[] = [
  {
    id: "edp-mistake-make",
    platform: "instagram",
    format: "reel",
    status: "published",
    title: "Make mi do mu?",
    caption: '"Make a mistake", "do homework". Karıştırılan iki fiilin farkı 20 saniyede.',
    hashtags: ["#englishtips", "#ingilizce", "#{handle}"],
    music: {
      title: "Study Session",
      artist: "Lofi Girl",
    },
    media: [video("edp-make-m", IMG.writing, "9:16", "Not alan öğrenci", 20)],
    theme: "educational",
    performanceHint: "high",
    at: {
      day: -2,
      time: "19:00",
    },
  },
  {
    id: "edp-mistake-since",
    platform: "instagram",
    format: "reel",
    status: "published",
    title: "Since mi for mu?",
    caption: "Zaman ifadelerinde en çok karıştırılan ikili: since ve for. Örneklerle.",
    hashtags: ["#englishtips", "#dilbilgisi"],
    media: [video("edp-since-m", IMG.openBooks, "9:16", "Açık kitaplar", 22)],
    theme: "educational",
    performanceHint: "high",
    at: {
      day: -9,
      time: "19:30",
    },
  },
  {
    id: "edp-success",
    platform: "instagram",
    format: "carousel",
    status: "published",
    title: "Zeynep'in IELTS yolculuğu",
    caption: "4 ay, haftada 3 ders ve sonunda 7.0. Zeynep'in çalışma planı (paylaşım izniyle).",
    hashtags: ["#ielts", "#başarıhikâyesi"],
    media: [
      photo("edp-success-1", IMG.student, "4:5", "Çalışan öğrenci"),
      photo("edp-success-2", IMG.library, "4:5", "Kütüphane"),
      photo("edp-success-3", IMG.loveToLearn, "4:5", "Love to learn yazılı tabela"),
    ],
    theme: "storytelling",
    performanceHint: "average",
    at: {
      day: -6,
      time: "12:00",
    },
  },
  {
    id: "edp-story-slots",
    platform: "instagram",
    format: "story",
    status: "published",
    title: "Akşam grubunda 2 kişilik yer",
    caption: "Salı-Perşembe 19:30 B1 grubunda 2 kişilik yer kaldı.",
    hashtags: [],
    cta: "Yerini ayır",
    media: [photo("edp-slots-m", IMG.classroom, "9:16", "Sınıf")],
    theme: "promotional",
    performanceHint: "low",
    at: {
      day: -1,
      time: "10:00",
    },
  },
  {
    id: "edp-tt-speaking",
    platform: "tiktok",
    format: "video",
    status: "published",
    title: "Öğrencilerimiz hafta sonunu anlatıyor",
    caption:
      "Serbest konuşma saatinden bir kesit. Hata mı? Olsun, önemli olan konuşmak. (Öğrenci izniyle)",
    hashtags: ["#speaking", "#ingilizce", "#{handle}"],
    media: [video("edp-tt-speak-m", IMG.groupStudy, "9:16", "Sohbet eden öğrenciler", 38)],
    theme: "behindTheScenes",
    performanceHint: "high",
    at: {
      day: -4,
      time: "20:00",
    },
  },
  {
    id: "edp-tt-pronounce",
    platform: "tiktok",
    format: "video",
    status: "published",
    title: "Bu 5 kelimeyi yanlış okuyor olabilirsin",
    caption: "Comfortable, vegetable, Wednesday… Doğru telaffuzlarıyla.",
    hashtags: ["#telaffuz", "#ingilizce"],
    media: [video("edp-tt-pron-m", IMG.desk, "9:16", "Masada kitaplar", 25)],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -11,
      time: "20:30",
    },
  },
  {
    id: "edp-yt-speaking",
    platform: "youtube",
    format: "video",
    status: "published",
    title: "Konuşurken donup kalıyorsan izle",
    caption: "Konuşma sırasında takılmanın nedenleri ve 4 pratik çözüm.",
    hashtags: ["#speaking", "#ingilizce"],
    media: [video("edp-yt-m", IMG.lecture, "16:9", "Ders anlatımı", 600)],
    theme: "educational",
    performanceHint: "average",
    at: {
      day: -14,
      time: "18:00",
    },
  },
  {
    id: "edp-x-word",
    platform: "x",
    format: "post",
    status: "published",
    title: "Günün kelimesi: Procrastinate",
    caption: 'Procrastinate: işi ertelemek. "Stop procrastinating and start today."',
    hashtags: ["#gününkelimesi"],
    media: [],
    theme: "educational",
    performanceHint: "low",
    at: {
      day: -8,
      time: "09:00",
    },
  },
  {
    id: "edp-li-program",
    platform: "linkedin",
    format: "post",
    status: "published",
    title: "Kurumsal programımızın ilk mezunları",
    caption: "8 haftalık iş İngilizcesi programını tamamlayan ilk ekibi tebrik ediyoruz.",
    hashtags: ["#kurumsaleğitim", "#businessenglish"],
    media: [photo("edp-li-m", IMG.lecture, "1:1", "Kurumsal eğitim")],
    theme: "storytelling",
    performanceHint: "average",
    at: {
      day: -12,
      time: "09:30",
    },
  },
  {
    id: "edp-new-term",
    platform: "instagram",
    format: "post",
    status: "scheduled",
    title: "Yeni dönem kayıtları başladı",
    caption: "Ekim dönemi grupları açılıyor. Seviye testi ücretsiz.",
    hashtags: ["#yenidönem", "#ingilizcekursu", "#{handle}"],
    cta: "Seviye testi için DM.",
    media: [photo("edp-term-m", IMG.classroom, "4:5", "Sınıf")],
    theme: "promotional",
    at: {
      day: 1,
      time: "12:00",
    },
  },
  {
    id: "edp-tt-study",
    platform: "tiktok",
    format: "video",
    status: "scheduled",
    title: "Benimle 25 dakika çalış",
    caption: "Kurs kütüphanesinde bir pomodoro oturumu; sonunda bir kelime.",
    hashtags: ["#studywithme", "#pomodoro"],
    media: [video("edp-tt-study-m", IMG.library, "9:16", "Kütüphane", 60)],
    theme: "entertaining",
    at: {
      day: 3,
      time: "20:00",
    },
  },
  {
    id: "edp-li-hiring",
    platform: "linkedin",
    format: "post",
    status: "scheduled",
    title: "Eğitmen arıyoruz",
    caption: "Konuşma odaklı derslere tutkulu bir İngilizce eğitmeni arıyoruz.",
    hashtags: ["#işilanı", "#eğitim"],
    media: [photo("edp-hiring-m", IMG.lecture, "1:1", "Eğitmen")],
    theme: "communityFocused",
    at: {
      day: 4,
      time: "10:00",
    },
  },
  {
    id: "edp-idioms",
    platform: "instagram",
    format: "carousel",
    status: "draft",
    title: "Günlük hayatta 5 deyim",
    caption: '"Piece of cake" gibi günlük konuşmada sık duyacağın 5 deyim.',
    hashtags: ["#idioms", "#ingilizce"],
    media: [
      photo("edp-idioms-1", IMG.books, "4:5", "Kitaplar"),
      photo("edp-idioms-2", IMG.writing, "4:5", "Not alan öğrenci"),
    ],
    theme: "educational",
    at: {
      day: 6,
      time: "12:30",
    },
  },
  {
    id: "edp-yt-short",
    platform: "youtube",
    format: "short",
    status: "draft",
    title: "Tek kelime: Actually",
    caption: 'Actually aslında "aktüel" değil. 20 saniyede.',
    hashtags: ["#shorts", "#ingilizce"],
    media: [video("edp-short-m", IMG.student, "9:16", "Öğrenci", 20)],
    theme: "educational",
    at: {
      day: 7,
      time: "18:00",
    },
  },
];
