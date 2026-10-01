import { avatar, PEOPLE } from "@/mock/images";
import type { SeedComment, SeedConversation } from "@/types";

export const educationComments: SeedComment[] = [
  {
    id: "edc-ig-level",
    platform: "instagram",
    postTitle: "Make mi do mu?",
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "B1 seviyesindeyim ama konuşamıyorum, hangi grup bana uygun?",
    likes: 12,
    intent: "question",
    aiReply:
      "Merhaba Elif! Çok yaygın bir durum. B1 konuşma grubumuz tam sana göre; önce ücretsiz seviye testiyle netleştirelim.",
    minutesAgo: 28,
  },
  {
    id: "edc-ig-thanks",
    platform: "instagram",
    postTitle: "Make mi do mu?",
    author: {
      name: "Kerem Aydın",
      handle: "keremaydn",
      avatarUrl: avatar(PEOPLE.kerem),
    },
    text: "Yıllardır karıştırıyordum, şimdi oturdu 🙏",
    likes: 37,
    intent: "praise",
    aiReply: 'Ne güzel Kerem! Bir sonraki videoda "say" ve "tell" farkını anlatıyoruz.',
    minutesAgo: 90,
  },
  {
    id: "edc-ig-price",
    platform: "instagram",
    postTitle: "Since mi for mu?",
    author: {
      name: "Burak Çelik",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Kurs ücretleri ne kadar? Taksit var mı?",
    likes: 6,
    intent: "purchase",
    aiReply:
      "Merhaba Burak! Güncel ücretleri DM'den paylaşalım; tüm kartlara taksit seçeneğimiz var.",
    minutesAgo: 240,
  },
  {
    id: "edc-tt-brave",
    platform: "tiktok",
    postTitle: "Öğrencilerimiz hafta sonunu anlatıyor",
    author: {
      name: "ingilizce.öğreniyorum",
      handle: "ingilizceogreniyorum",
    },
    text: "Ben de böyle bir ortamda konuşabilmek isterdim 😢",
    likes: 189,
    intent: "feedback",
    aiReply:
      "Yapabilirsin! İlk derse çoğu öğrencimiz hiç konuşmadan geliyor. Deneme dersi için bize yaz.",
    minutesAgo: 45,
  },
  {
    id: "edc-tt-online",
    platform: "tiktok",
    postTitle: "Öğrencilerimiz hafta sonunu anlatıyor",
    author: {
      name: "Irem",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Online grup var mı? Başka şehirdeyim.",
    likes: 74,
    intent: "question",
    aiReply:
      "Var Irem! Haftada 2 akşam online konuşma gruplarımız var. Detaylar profildeki bağlantıda.",
    minutesAgo: 75,
  },
  {
    id: "edc-tt-pron",
    platform: "tiktok",
    postTitle: "Bu 5 kelimeyi yanlış okuyor olabilirsin",
    author: {
      name: "Ozan K.",
      handle: "ozankurt",
      avatarUrl: avatar(PEOPLE.ozan),
    },
    text: "Wednesday'i hep yanlış okuyormuşum 😅",
    likes: 142,
    intent: "feedback",
    aiReply: 'Çok kişi öyle Ozan! "Wenzdey" diye düşün, kolayca oturur.',
    minutesAgo: 540,
  },
  {
    id: "edc-yt-helpful",
    platform: "youtube",
    postTitle: "Konuşurken donup kalıyorsan izle",
    author: {
      name: "Zeynep Arslan",
      handle: "zeyneparslan",
      avatarUrl: avatar(PEOPLE.zeynep),
    },
    text: "Kafamda Türkçe çevirme meselesini çok iyi anlatmışsınız.",
    likes: 28,
    intent: "praise",
    aiReply:
      "Teşekkürler Zeynep! Bir sonraki videoda düşünmeden konuşma alıştırmaları paylaşacağız.",
    minutesAgo: 360,
  },
  {
    id: "edc-yt-exam",
    platform: "youtube",
    postTitle: "Konuşurken donup kalıyorsan izle",
    author: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    text: "IELTS speaking için de bu yöntemler işe yarar mı?",
    likes: 17,
    intent: "question",
    aiReply:
      "Kesinlikle Can! Özellikle Part 2'de not alma tekniği çok faydalı. IELTS videomuz da yakında.",
    minutesAgo: 1140,
  },
  {
    id: "edc-yt-more",
    platform: "youtube",
    postTitle: "Konuşurken donup kalıyorsan izle",
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Haftada bir video yeterli değil, daha sık çekin lütfen :)",
    likes: 9,
    intent: "feedback",
    aiReply: "Çok teşekkürler Selin! Shorts ile araya kısa ipuçları ekleyeceğiz.",
    minutesAgo: 1620,
  },
  {
    id: "edc-x-sentence",
    platform: "x",
    postTitle: "Günün kelimesi: Procrastinate",
    author: {
      name: "Melis Ak",
      handle: "melisak",
      avatarUrl: avatar(PEOPLE.melis),
    },
    text: "I always procrastinate on Mondays.",
    likes: 11,
    intent: "feedback",
    aiReply: 'Harika cümle Melis! "On Mondays" kullanımı da çok doğal.',
    minutesAgo: 40,
  },
  {
    id: "edc-x-more",
    platform: "x",
    postTitle: "Günün kelimesi: Procrastinate",
    author: {
      name: "Emre T.",
      handle: "emretopal",
      avatarUrl: avatar(PEOPLE.emre),
    },
    text: "Bunun gibi iş hayatında geçen kelimeler paylaşır mısınız?",
    likes: 7,
    intent: "feedback",
    aiReply: "Tabii Emre! Önümüzdeki hafta iş İngilizcesi serisine başlıyoruz.",
    minutesAgo: 180,
  },
  {
    id: "edc-x-q",
    platform: "x",
    postTitle: "Günün kelimesi: Procrastinate",
    author: {
      name: "Deniz Arslan",
      handle: "denizarslan",
      avatarUrl: avatar(PEOPLE.deniz),
    },
    text: "Procrastinate ile delay arasındaki fark ne?",
    likes: 5,
    intent: "question",
    aiReply:
      "Güzel soru Deniz! Delay genel erteleme; procrastinate ise bir işi bilerek, isteksizlikten ertelemek.",
    minutesAgo: 480,
  },
  {
    id: "edc-li-congrats",
    platform: "linkedin",
    postTitle: "Kurumsal programımızın ilk mezunları",
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Ekibimiz programdan çok memnun kaldı, teşekkürler!",
    likes: 22,
    intent: "praise",
    aiReply: "Biz teşekkür ederiz Ayşe Hanım! Ekibinizle çalışmak çok keyifliydi.",
    minutesAgo: 300,
  },
  {
    id: "edc-li-quote",
    platform: "linkedin",
    postTitle: "Kurumsal programımızın ilk mezunları",
    author: {
      name: "Mert Demir",
      handle: "mertdemir",
      avatarUrl: avatar(PEOPLE.mert),
    },
    text: "40 kişilik ekibimiz için teklif alabilir miyiz?",
    likes: 8,
    intent: "purchase",
    aiReply:
      "Merhaba Mert Bey, elbette. Mesaj kutumuzdan iletişime geçerseniz önce seviye testi planlayalım.",
    minutesAgo: 600,
  },
  {
    id: "edc-li-online",
    platform: "linkedin",
    postTitle: "Kurumsal programımızın ilk mezunları",
    author: {
      name: "Zeynep Arslan",
      handle: "zeyneparslan",
      avatarUrl: avatar(PEOPLE.zeynep),
    },
    text: "Program online da yürütülebiliyor mu?",
    likes: 4,
    intent: "question",
    aiReply: "Evet Zeynep Hanım, programı tamamen online ya da karma olarak yürütebiliyoruz.",
    minutesAgo: 1740,
  },
];

export const educationConversations: SeedConversation[] = [
  {
    id: "edd-trial",
    platform: "instagram",
    customer: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, seviye testine girmek istiyorum. Ne kadar sürüyor?",
        minutesAgo: 30,
      },
      {
        id: "m2",
        from: "customer",
        text: "Hafta sonu yapılabiliyor mu?",
        minutesAgo: 28,
      },
    ],
    aiSuggestions: [
      "Merhaba Elif! Seviye testi yaklaşık 30 dakika sürüyor ve ücretsiz. Cumartesi 11:00 sana uyar mı?",
      "Tabii! Cumartesi sabahları test yapıyoruz. Adını ve telefonunu yazarsan randevunu oluşturalım.",
      "30 dakikalık kısa bir konuşma ve yazılı bölüm. Cumartesi ya da Pazar, hangisi uygun?",
    ],
  },
  {
    id: "edd-schedule",
    platform: "instagram",
    customer: {
      name: "Burak Çelik",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Akşam grupları saat kaçta?",
        minutesAgo: 360,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Burak! Salı-Perşembe 19:30 ve Pazartesi-Çarşamba 20:00 gruplarımız var.",
        minutesAgo: 300,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "İşten 19:00'da çıkıyorum, 20:00 grubu B1 mi?",
        minutesAgo: 288,
      },
    ],
    aiSuggestions: [
      "Evet, Pazartesi-Çarşamba 20:00 grubu B1. Seviye testinden sonra seni oraya yerleştirebiliriz.",
      "20:00 grubu B1 seviyesinde ve 2 kişilik yer var. Seviye testi için bir gün belirleyelim mi?",
    ],
  },
  {
    id: "edd-tt-online",
    platform: "tiktok",
    customer: {
      name: "Irem",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Online derslerde kamera açmak zorunlu mu? Biraz çekiniyorum.",
        minutesAgo: 50,
      },
    ],
    aiSuggestions: [
      "Merhaba Irem! İlk derslerde zorunlu değil; zamanla rahatladıkça açmanı öneriyoruz. Çoğu öğrencimiz ilk hafta kapalı başlıyor.",
      "Hiç sorun değil. Kendini hazır hissettiğinde açabilirsin; önemli olan konuşmaya katılman.",
    ],
  },
  {
    id: "edd-x-certificate",
    platform: "x",
    customer: {
      name: "Emre T.",
      handle: "emretopal",
      avatarUrl: avatar(PEOPLE.emre),
    },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Kurs sonunda sertifika veriyor musunuz?",
        minutesAgo: 120,
      },
    ],
    aiSuggestions: [
      "Merhaba Emre! Evet, her seviyeyi tamamlayanlara katılım ve seviye sertifikası veriyoruz.",
      "Veriyoruz! Seviye sonu değerlendirmesini geçenlere sertifika düzenliyoruz.",
    ],
  },
  {
    id: "edd-li-corporate",
    platform: "linkedin",
    customer: {
      name: "Mert Demir",
      handle: "mertdemir",
      avatarUrl: avatar(PEOPLE.mert),
    },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, satış ekibimiz için müşteri sunumlarına odaklı bir program arıyoruz.",
        minutesAgo: 1560,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Mert Bey, tam bu ihtiyaca yönelik bir modülümüz var. Ekip kaç kişilik?",
        minutesAgo: 1500,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "12 kişi, seviyeler karışık.",
        minutesAgo: 1440,
      },
    ],
    aiSuggestions: [
      "12 kişilik karma seviye için önce seviye testi yapıp iki gruba ayırmayı öneriyoruz. Teklifi bu hafta iletelim mi?",
      "Karma seviyelerde iki grupla daha verimli ilerliyoruz. Bir tanışma toplantısında detayları konuşabilir miyiz?",
    ],
  },
];
