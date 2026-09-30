import { avatar, PEOPLE } from "@/mock/images";
import type { SeedComment, SeedConversation } from "@/types";

export const restaurantComments: SeedComment[] = [
  // Instagram
  {
    id: "rc-ig-price",
    platform: "instagram",
    postTitle: "Yeni: Tarçınlı yulaf latte",
    author: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    text: "Fiyatınız nedir? Tarçınlı yulaf latte kaç TL?",
    likes: 3,
    intent: "question",
    aiReply:
      "Merhaba Elif! Güncel fiyatlarımızı profilimizdeki menü bağlantısından inceleyebilirsin. Hafta içi 14:00–17:00 arası öğrencilere %15 indirim de var 😊",
    minutesAgo: 18,
  },
  {
    id: "rc-ig-course",
    platform: "instagram",
    postTitle: "Latte art provası",
    author: { name: "Kerem Aydın", handle: "keremaydn", avatarUrl: avatar(PEOPLE.kerem) },
    text: "Kuğu bence gayet iyi 😄 Latte art kursu veriyor musunuz?",
    likes: 12,
    intent: "praise",
    aiReply:
      "Teşekkürler Kerem! Ayda bir Cumartesi sabahı küçük gruplarla latte art atölyesi yapıyoruz. Sıradaki tarih için DM'den yazman yeterli.",
    minutesAgo: 95,
  },
  {
    id: "rc-ig-reservation",
    platform: "instagram",
    postTitle: "Hafta sonu brunch tabağı",
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "Cumartesi 11:00 için 6 kişilik yer ayırtabilir miyiz?",
    likes: 1,
    intent: "purchase",
    aiReply:
      "Merhaba Selin! Hafta sonu rezervasyonlarını DM üzerinden alıyoruz. İsim ve şube bilgisini yazarsan hemen yerini ayıralım.",
    minutesAgo: 240,
  },
  // TikTok
  {
    id: "rc-tt-croissant",
    platform: "tiktok",
    postTitle: "Kruvasan hamuru 3 günde nasıl hazırlanıyor?",
    author: { name: "berkcan", handle: "berkcan.eats" },
    text: "3 gün mü?? ciddi misiniz 😳 o zaman fiyatı hak ediyor",
    likes: 214,
    intent: "praise",
    aiReply:
      "Evet, tam 72 saat! Hamur dinlendikçe katlar oluşuyor. Sabah erken gelirsen fırından yeni çıkmış hâlini yakalarsın.",
    minutesAgo: 42,
  },
  {
    id: "rc-tt-hours",
    platform: "tiktok",
    postTitle: "Kruvasan hamuru 3 günde nasıl hazırlanıyor?",
    author: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    text: "Kadıköy şubesi kaçta açılıyor?",
    likes: 8,
    intent: "question",
    aiReply: "Moda ve Yeldeğirmeni şubelerimiz her gün 07:30'da açılıyor. Hafta sonu 08:30'da.",
    minutesAgo: 130,
  },
  {
    id: "rc-tt-delay",
    platform: "tiktok",
    postTitle: "Latte art provası",
    author: { name: "Ozan T.", handle: "ozant", avatarUrl: avatar(PEOPLE.ozan) },
    text: "Geçen gün siparişim 25 dakika gecikti, açıkçası üzüldüm.",
    likes: 5,
    intent: "complaint",
    aiReply:
      "Ozan, bunu duyduğumuza çok üzüldük. Yaşadığın gecikme için özür dileriz. Hangi şubede olduğunu DM'den paylaşırsan bir sonraki kahveni bizden ısmarlamak isteriz.",
    minutesAgo: 380,
  },
  // YouTube
  {
    id: "rc-yt-machine",
    platform: "youtube",
    postTitle: "Açılıştan önceki 60 saniye",
    author: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    text: "Kullandığınız espresso makinesi hangi model? Ses çok güzel.",
    likes: 27,
    intent: "question",
    aiReply:
      "Çift gruplu bir La Marzocco Linea kullanıyoruz. Değirmenimiz de Mahlkönig. Sesi biz de çok seviyoruz!",
    minutesAgo: 60 * 9,
  },
  {
    id: "rc-yt-hungry",
    platform: "youtube",
    postTitle: "Açılıştan önceki 60 saniye",
    author: { name: "Ayşe Kara", handle: "aysekara", avatarUrl: avatar(PEOPLE.ayse) },
    text: "Bu videoyu izleyince acıktım, yarın sabah geliyorum.",
    likes: 41,
    intent: "praise",
    aiReply: "Seni bekliyoruz Ayşe! Kruvasanlar 08:00'de fırından çıkıyor, erken gel 🥐",
    minutesAgo: 60 * 14,
  },
  {
    id: "rc-yt-vegan",
    platform: "youtube",
    postTitle: "Açılıştan önceki 60 saniye",
    author: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    text: "Vegan seçenekleriniz var mı?",
    likes: 9,
    intent: "question",
    aiReply:
      "Var! Tüm kahvelerimizi yulaf ya da badem sütüyle hazırlayabiliyoruz. Menümüzde vegan muzlu ekmek ve granola kasesi de var.",
    minutesAgo: 60 * 20,
  },
  // X
  {
    id: "rc-x-carrot",
    platform: "x",
    postTitle: "Hafta sonu tatlı anketi",
    author: { name: "Mert", handle: "mertkahve", avatarUrl: avatar(PEOPLE.mert) },
    text: "Havuç kek, tartışmaya gerek yok 🥕",
    likes: 16,
    intent: "feedback",
    aiReply: "Havuç kek ekibi şimdilik önde görünüyor. Sonuçları Cuma günü paylaşacağız!",
    minutesAgo: 75,
  },
  {
    id: "rc-x-wifi",
    platform: "x",
    postTitle: "Hafta sonu tatlı anketi",
    author: { name: "Burak Ç.", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    text: "Wi-fi var mı, çalışmak için uygun mu?",
    likes: 2,
    intent: "question",
    aiReply:
      "Var! Tüm şubelerde ücretsiz wi-fi ve priz bulunan masalar var. Hafta içi öğleden sonra en sakin saatler.",
    minutesAgo: 60 * 5,
  },
  {
    id: "rc-x-card",
    platform: "x",
    postTitle: "Hafta sonu tatlı anketi",
    author: { name: "Melis", handle: "melisarslan", avatarUrl: avatar(PEOPLE.melis) },
    text: "Dün Moda şubesinde kart makinesi çalışmıyordu, düzeldi mi?",
    likes: 4,
    intent: "complaint",
    aiReply:
      "Haber verdiğin için teşekkürler Melis. Cihaz dün akşam değiştirildi, artık sorunsuz çalışıyor. Yaşadığın aksaklık için özür dileriz.",
    minutesAgo: 60 * 11,
  },
  // LinkedIn
  {
    id: "rc-li-supply",
    platform: "linkedin",
    postTitle: "3 yılda 1 şubeden 3 şubeye",
    author: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    text: "Ofisimiz için haftalık kahve tedariği yapıyor musunuz?",
    likes: 6,
    intent: "purchase",
    aiReply:
      "Merhaba Zeynep Hanım, evet! Kadıköy ve Ataşehir'deki ofislere haftalık taze çekirdek servisi yapıyoruz. Detayları konuşmak için size mesaj gönderebiliriz.",
    minutesAgo: 60 * 26,
  },
  {
    id: "rc-li-congrats",
    platform: "linkedin",
    postTitle: "3 yılda 1 şubeden 3 şubeye",
    author: { name: "Emre Yılmaz", handle: "emre-yilmaz", avatarUrl: avatar(PEOPLE.emre) },
    text: "Büyüme hikâyeniz çok ilham verici, tebrikler!",
    likes: 18,
    intent: "praise",
    aiReply: "Çok teşekkür ederiz Emre Bey! Mahallemizin desteği olmadan mümkün olmazdı.",
    minutesAgo: 60 * 30,
  },
  {
    id: "rc-li-hiring",
    platform: "linkedin",
    postTitle: "3 yılda 1 şubeden 3 şubeye",
    author: { name: "Ece Demir", handle: "ece-demir", avatarUrl: avatar(PEOPLE.ece) },
    text: "Barista alımınız var mı? Başvuru nereden yapılıyor?",
    likes: 3,
    intent: "question",
    aiReply:
      "Merhaba Ece Hanım! Açık pozisyonlarımızı web sitemizdeki Kariyer sayfasında paylaşıyoruz. Özgeçmişinizi oradan iletebilirsiniz.",
    minutesAgo: 60 * 44,
  },
];

export const restaurantConversations: SeedConversation[] = [
  {
    id: "rd-birthday",
    platform: "instagram",
    customer: { name: "Zeynep Arslan", handle: "zeyneparslan", avatarUrl: avatar(PEOPLE.zeynep) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, Cumartesi için doğum günü pastası sipariş edebilir miyim?",
        minutesAgo: 34,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Zeynep! Tabii ki. Kaç kişilik düşünüyorsun?",
        minutesAgo: 30,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "8 kişilik. Havuçlu kek olabilir mi? Üstüne de 'İyi ki doğdun Ece' yazılsın.",
        minutesAgo: 12,
      },
    ],
    aiSuggestions: [
      "Harika bir seçim! 8 kişilik havuçlu kek hazırlayabiliriz. Cumartesi kaçta ve hangi şubeden teslim almak istersin?",
      "Olur! 8 kişilik havuçlu kek üzerine 'İyi ki doğdun Ece' yazısıyla hazır olacak. Teslim saati ve şube bilgisini paylaşır mısın?",
      "Seve seve hazırlarız. Siparişi kesinleştirmek için teslim saatini ve iletişim numaranı alabilir miyiz?",
    ],
  },
  {
    id: "rd-gluten",
    platform: "instagram",
    customer: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Glutensiz tatlınız var mı? Çölyak hastasıyım.",
        minutesAgo: 60 * 3,
      },
    ],
    aiSuggestions: [
      "Merhaba Can! Glutensiz brownie ve San Sebastian cheesecake'imiz var. Ancak aynı mutfakta hazırlandığı için çapraz bulaşma riskini belirtmek isteriz.",
      "Evet, iki glutensiz tatlımız var: brownie ve cheesecake. Çölyak için ayrı bir hazırlık alanımız olmadığını da bilmeni isteriz.",
      "Glutensiz seçeneklerimiz var ama tamamen ayrı bir mutfakta hazırlanmıyor. Detaylı bilgi için şube ekibimiz de yardımcı olabilir.",
    ],
  },
  {
    id: "rd-collab",
    platform: "tiktok",
    customer: { name: "Deniz | Yeme İçme", handle: "denizyiyor", avatarUrl: avatar(PEOPLE.deniz) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Selam! 120B takipçili bir yeme içme hesabım var. Kadıköy kahvecileri serisi için sizi çekmek isterim.",
        minutesAgo: 60 * 6,
      },
      {
        id: "m2",
        from: "customer",
        text: "Hafta içi sabah saatleri uygun olur mu?",
        minutesAgo: 60 * 6 - 2,
      },
    ],
    aiSuggestions: [
      "Selam Deniz, teşekkürler! Seriye dahil olmak isteriz. Salı ya da Çarşamba 08:00–10:00 arası Moda şubemizde ağırlayabiliriz.",
      "Çok güzel bir fikir! Hafta içi sabahları uygunuz. Detayları konuşmak için e-posta adresini paylaşır mısın?",
      "İlgin için teşekkürler! Çekim için hafta içi sabah ideal. Hangi gün sana uyar?",
    ],
  },
  {
    id: "rd-lost-item",
    platform: "x",
    customer: { name: "Burak Çelik", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Dün Yeldeğirmeni şubesinde beyaz bir kulaklık kutusu unuttum, bulundu mu acaba?",
        minutesAgo: 60 * 20,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Burak, hemen şube ekibine soruyoruz.",
        minutesAgo: 60 * 19,
        status: "read",
      },
    ],
    aiSuggestions: [
      "Müjde Burak, kulaklık kutun kasada seni bekliyor! Gelirken kimlik göstermen yeterli.",
      "Kulaklığın bulundu ve kasada güvende. Şube 22:00'ye kadar açık.",
      "Şube ekibimiz kulaklığı buldu. Ne zaman almak istersin?",
    ],
  },
  {
    id: "rd-catering",
    platform: "linkedin",
    customer: { name: "Selin Koç", handle: "selin-koc", avatarUrl: avatar(PEOPLE.selin) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, 40 kişilik bir şirket etkinliği için kahve ve kahvaltı catering'i yapıyor musunuz? 14 Kasım için düşünüyoruz.",
        minutesAgo: 60 * 27,
      },
    ],
    aiSuggestions: [
      "Merhaba Selin Hanım, evet! 40 kişilik kahve barı ve kahvaltı menüsü hazırlayabiliriz. Etkinlik saati ve adresini paylaşırsanız bir teklif gönderelim.",
      "Teşekkürler Selin Hanım! 14 Kasım uygun görünüyor. Size menü seçeneklerini ve fiyat teklifini e-postayla iletebilir miyiz?",
      "Kurumsal catering hizmetimiz var. Detayları konuşmak için kısa bir görüşme ayarlayabilir miyiz?",
    ],
  },
];
