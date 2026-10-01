import { avatar, PEOPLE } from "@/mock/images";
import type { SeedComment, SeedConversation } from "@/types";

export const ecommerceComments: SeedComment[] = [
  {
    id: "ec-ig-size",
    platform: "instagram",
    postTitle: "Kırmızı koşu ayakkabısı kutu açılışı",
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "42 numara stokta var mı? Kalıbı dar mı geniş mi?",
    likes: 8,
    intent: "question",
    aiReply:
      "Merhaba Elif! 42 numara şu an stokta. Kalıbı standart; arada kalırsan bir büyüğünü öneriyoruz. İade de ücretsiz.",
    minutesAgo: 25,
  },
  {
    id: "ec-ig-love",
    platform: "instagram",
    postTitle: "Kırmızı koşu ayakkabısı kutu açılışı",
    author: {
      name: "Deniz Arslan",
      handle: "denizarslan",
      avatarUrl: avatar(PEOPLE.deniz),
    },
    text: "Paketleme çok özenli, notu görünce çok mutlu oldum 🥹",
    likes: 41,
    intent: "praise",
    aiReply:
      "Bunu duymak harika Deniz! Her notu ekipten biri elle yazıyor. Keyifle kullanman dileğiyle.",
    minutesAgo: 95,
  },
  {
    id: "ec-ig-delay",
    platform: "instagram",
    postTitle: "Akıllı saatin 5 gizli özelliği",
    author: {
      name: "Kerem Aydın",
      handle: "keremaydn",
      avatarUrl: avatar(PEOPLE.kerem),
    },
    text: "Siparişim 4 gündür kargoya verilmedi, ne zaman çıkar?",
    likes: 3,
    intent: "complaint",
    aiReply:
      "Kerem, gecikme için çok özür dileriz. Sipariş numaranı DM'den paylaşırsan hemen kontrol edip bugün içinde dönüş yapalım.",
    minutesAgo: 240,
  },
  {
    id: "ec-tt-which",
    platform: "tiktok",
    postTitle: "Bir siparişi paketliyoruz",
    author: {
      name: "mert.alır",
      handle: "mertalir",
    },
    text: "Ben de sipariş verdim, benimki de böyle mi geliyor? 😄",
    likes: 214,
    intent: "question",
    aiReply: "Aynen öyle geliyor! Senin siparişin de üç katman korumayla ve notla yola çıkacak.",
    minutesAgo: 40,
  },
  {
    id: "ec-tt-buy",
    platform: "tiktok",
    postTitle: "Bir siparişi paketliyoruz",
    author: {
      name: "Ece",
      handle: "ecesahin",
      avatarUrl: avatar(PEOPLE.ece),
    },
    text: "Bu kutudaki kulaklığın linki nerede?",
    likes: 57,
    intent: "purchase",
    aiReply:
      "Profilimizdeki bağlantıda 'Kulaklıklar' bölümünde Ece. Bugün 15:00'e kadar verirsen aynı gün kargoda.",
    minutesAgo: 70,
  },
  {
    id: "ec-tt-color",
    platform: "tiktok",
    postTitle: "Hangisi: Beyaz mı siyah mı?",
    author: {
      name: "Ozan K.",
      handle: "ozankurt",
      avatarUrl: avatar(PEOPLE.ozan),
    },
    text: "Siyah tabii ki, beyaz hemen kirleniyor",
    likes: 88,
    intent: "feedback",
    aiReply:
      "Haklısın Ozan, satışların %60'ı siyah! Yine de beyaz için özel temizleme spreyimiz var 😉",
    minutesAgo: 540,
  },
  {
    id: "ec-yt-battery",
    platform: "youtube",
    postTitle: "Doğru akıllı saati seçmek: 8 dakikalık rehber",
    author: {
      name: "Burak Çelik",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Pil karşılaştırması çok işime yaradı. Su geçirmezlik testi de yapar mısınız?",
    likes: 19,
    intent: "feedback",
    aiReply: "Teşekkürler Burak! Su geçirmezlik testi güzel fikir, bir sonraki videoya ekliyoruz.",
    minutesAgo: 360,
  },
  {
    id: "ec-yt-ios",
    platform: "youtube",
    postTitle: "Doğru akıllı saati seçmek: 8 dakikalık rehber",
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Videodaki saat iPhone ile uyumlu mu?",
    likes: 7,
    intent: "question",
    aiReply:
      "Merhaba Selin! Videodaki iki model de hem iOS hem Android ile uyumlu. Ayrıntılar ürün sayfasında.",
    minutesAgo: 1200,
  },
  {
    id: "ec-yt-great",
    platform: "youtube",
    postTitle: "Doğru akıllı saati seçmek: 8 dakikalık rehber",
    author: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    text: "Satış yapmaya çalışmadan bu kadar net anlatan kanal az. Abone oldum.",
    likes: 33,
    intent: "praise",
    aiReply: "Çok teşekkürler Can! Amacımız doğru ürünü seçmene yardım etmek. Hoş geldin!",
    minutesAgo: 1560,
  },
  {
    id: "ec-x-cargo",
    platform: "x",
    postTitle: "Bayram kargo takvimi",
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Bayramdan önce verdiğim sipariş ne zaman gelir?",
    likes: 4,
    intent: "question",
    aiReply:
      "Merhaba Irem! Bayram öncesi siparişler bayramın ikinci günü kargoya veriliyor. Takip numaran SMS ile gelecek.",
    minutesAgo: 50,
  },
  {
    id: "ec-x-thanks",
    platform: "x",
    postTitle: "Bayram kargo takvimi",
    author: {
      name: "Melis Ak",
      handle: "melisak",
      avatarUrl: avatar(PEOPLE.melis),
    },
    text: "Önceden haber vermeniz çok iyi, teşekkürler.",
    likes: 12,
    intent: "praise",
    aiReply: "Biz teşekkür ederiz Melis! İyi bayramlar.",
    minutesAgo: 180,
  },
  {
    id: "ec-x-refund",
    platform: "x",
    postTitle: "Bayram kargo takvimi",
    author: {
      name: "Emre T.",
      handle: "emretopal",
      avatarUrl: avatar(PEOPLE.emre),
    },
    text: "İade ettiğim ürünün parası hâlâ yatmadı.",
    likes: 6,
    intent: "complaint",
    aiReply:
      "Emre, bunun için özür dileriz. Sipariş numaranı DM'den iletirsen iade durumunu hemen kontrol edelim.",
    minutesAgo: 420,
  },
  {
    id: "ec-li-congrats",
    platform: "linkedin",
    postTitle: "Depo ekibimizle tanışın",
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Harika bir ekip! Operasyon tarafını göstermeniz çok değerli.",
    likes: 24,
    intent: "praise",
    aiReply:
      "Teşekkürler Ayşe Hanım! Ekibimiz her gün büyük özen gösteriyor, mesajınızı onlara ileteceğiz.",
    minutesAgo: 300,
  },
  {
    id: "ec-li-software",
    platform: "linkedin",
    postTitle: "Depo ekibimizle tanışın",
    author: {
      name: "Mert Demir",
      handle: "mertdemir",
      avatarUrl: avatar(PEOPLE.mert),
    },
    text: "Stok takibi için hangi yazılımı kullanıyorsunuz?",
    likes: 9,
    intent: "question",
    aiReply:
      "Merhaba Mert Bey, şu an kendi geliştirdiğimiz basit bir panel kullanıyoruz. Deneyimimizi bir yazıda paylaşacağız.",
    minutesAgo: 600,
  },
  {
    id: "ec-li-partner",
    platform: "linkedin",
    postTitle: "Depo ekibimizle tanışın",
    author: {
      name: "Zeynep Arslan",
      handle: "zeyneparslan",
      avatarUrl: avatar(PEOPLE.zeynep),
    },
    text: "Kargo firmanızla ilgili bir iş birliği önerimiz var, iletişime geçebilir miyiz?",
    likes: 5,
    intent: "purchase",
    aiReply:
      "Elbette Zeynep Hanım, mesaj kutumuzdan bize ulaşabilirsiniz. Görüşmekten memnuniyet duyarız.",
    minutesAgo: 1800,
  },
];

export const ecommerceConversations: SeedConversation[] = [
  {
    id: "ed-size",
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
        text: "Merhaba, kırmızı ayakkabıdan 41 mi 42 mi almalıyım? Normalde 41,5 giyiyorum.",
        minutesAgo: 30,
      },
      {
        id: "m2",
        from: "customer",
        text: "Bir de iade süresi kaç gün?",
        minutesAgo: 28,
      },
    ],
    aiSuggestions: [
      "Merhaba Elif! Arada kalıyorsan 42 öneriyoruz; kalıbı standart. İade süremiz 14 gün ve ücretsiz.",
      "42 numara senin için daha rahat olur. Olmazsa 14 gün içinde ücretsiz değiştirebilirsin.",
      "Merhaba! 42 alırsan rahat edersin. İade ve değişim 14 gün boyunca ücretsiz.",
    ],
  },
  {
    id: "ed-gift",
    platform: "instagram",
    customer: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Hediye paketi yapıyor musunuz? Not ekleyebilir miyim?",
        minutesAgo: 360,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Can! Evet, hediye paketi ücretsiz. Sepette not alanına yazman yeterli.",
        minutesAgo: 300,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "Süper! Fiyat etiketi çıkmıyor değil mi?",
        minutesAgo: 290,
      },
    ],
    aiSuggestions: [
      "Doğru, hediye paketli siparişlerde fiyat etiketi ve fatura kutuya konmuyor.",
      "Hiç merak etme, hediye siparişlerinde fiyat görünmez; fatura e-postana gelir.",
    ],
  },
  {
    id: "ed-tt-stock",
    platform: "tiktok",
    customer: {
      name: "mert.alır",
      handle: "mertalir",
    },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Videodaki kulaklık ne zaman stoğa girer?",
        minutesAgo: 45,
      },
    ],
    aiSuggestions: [
      "Merhaba! Yeni stok yarın 10:00'da satışa çıkıyor. Ürün sayfasından 'Gelince haber ver'e basarsan bildirim alırsın.",
      "Yarın sabah stoklarda! Haber almak için ürün sayfasındaki bildirimi açabilirsin.",
    ],
  },
  {
    id: "ed-x-invoice",
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
        text: "Kurumsal fatura kesebiliyor musunuz?",
        minutesAgo: 120,
      },
    ],
    aiSuggestions: [
      "Merhaba Emre! Evet, ödeme adımında 'Kurumsal fatura' seçip vergi bilgilerini girmen yeterli.",
      "Tabii! Siparişte kurumsal fatura seçeneğini işaretle, fatura e-postana gelsin.",
    ],
  },
  {
    id: "ed-li-bulk",
    platform: "linkedin",
    customer: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, şirketimiz için 40 adet kulaklık almak istiyoruz. Toplu alım indiriminiz var mı?",
        minutesAgo: 1440,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Ayşe Hanım, elbette. 20 adet üzeri siparişlerde özel fiyat sunuyoruz.",
        minutesAgo: 1380,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "Teslim süresi ne olur?",
        minutesAgo: 1320,
      },
    ],
    aiSuggestions: [
      "40 adetlik sipariş için teslim süremiz 3 iş günü. Teklifi bugün e-postanıza iletebiliriz.",
      "Stoğumuz yeterli; onayın ardından 3 iş gününde teslim ediyoruz. Fatura bilgilerinizi alabilir miyiz?",
    ],
  },
];
