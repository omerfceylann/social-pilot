import { avatar, PEOPLE } from "@/mock/images";
import type { SeedComment, SeedConversation } from "@/types";

export const fitnessComments: SeedComment[] = [
  // Instagram
  {
    id: "fc-ig-price",
    platform: "instagram",
    postTitle: "Ayşe'nin 12 haftası",
    author: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    text: "Aylık üyelik ne kadar? Haftada 2 gün gelebilirim.",
    likes: 6,
    intent: "question",
    aiReply:
      "Merhaba Elif! Haftada 2 ders paketimiz var, güncel fiyatları profildeki bağlantıda bulabilirsin. İlk deneme dersin de ücretsiz 💪",
    minutesAgo: 22,
  },
  {
    id: "fc-ig-inspired",
    platform: "instagram",
    postTitle: "Ayşe'nin 12 haftası",
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "Çok ilham verici! Ben de 40 yaşındayım, geç kalmış sayılır mıyım?",
    likes: 31,
    intent: "praise",
    aiReply:
      "Kesinlikle hayır Selin! Üyelerimizin önemli bir kısmı 35 yaşın üstünde başladı. Seviyene göre ilerleyen bir programla başlayabiliriz.",
    minutesAgo: 80,
  },
  {
    id: "fc-ig-knee",
    platform: "instagram",
    postTitle: "Squat'ta yapılan 4 hata",
    author: { name: "Kerem Aydın", handle: "keremaydn", avatarUrl: avatar(PEOPLE.kerem) },
    text: "Dizimde eski bir sakatlık var, squat yapabilir miyim?",
    likes: 9,
    intent: "question",
    aiReply:
      "Güzel soru Kerem. Önce doktorunun onayını almanı öneriyoruz. Sonrasında koçlarımız dizini zorlamayan varyasyonlarla başlamana yardımcı olabilir.",
    minutesAgo: 60 * 3,
  },
  // TikTok
  {
    id: "fc-tt-marathon",
    platform: "tiktok",
    postTitle: "Masa başından ilk yarı maratona",
    author: { name: "koşan.mühendis", handle: "kosan.muhendis" },
    text: "8 ayda yarı maraton helal olsun 👏 program paylaşır mısınız?",
    likes: 342,
    intent: "praise",
    aiReply:
      "Teşekkürler! Can'ın programından örnek bir haftayı bu hafta ayrı bir videoda paylaşacağız, takipte kal.",
    minutesAgo: 35,
  },
  {
    id: "fc-tt-location",
    platform: "tiktok",
    postTitle: "30 günlük plank challenge",
    author: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    text: "Stüdyo nerede? Anadolu yakasında şubeniz var mı?",
    likes: 14,
    intent: "question",
    aiReply:
      "Şu an sadece Beşiktaş'tayız. Anadolu yakası için online derslerimize katılabilirsin, detaylar profilde!",
    minutesAgo: 60 * 5,
  },
  {
    id: "fc-tt-crowded",
    platform: "tiktok",
    postTitle: "Masa başından ilk yarı maratona",
    author: { name: "Ozan T.", handle: "ozant", avatarUrl: avatar(PEOPLE.ozan) },
    text: "Akşam dersleri çok kalabalık oluyor, yer bulamıyorum.",
    likes: 11,
    intent: "complaint",
    aiReply:
      "Geri bildirimin için teşekkürler Ozan. Bu yüzden Kasım'dan itibaren 20:30'a ek bir akşam dersi açıyoruz. Rezervasyonlar Pazartesi başlıyor.",
    minutesAgo: 60 * 9,
  },
  // YouTube
  {
    id: "fc-yt-daily",
    platform: "youtube",
    postTitle: "Masa başı çalışanlar için 15 dakikalık mobilite",
    author: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    text: "Bunu her gün yapmak sorun olur mu?",
    likes: 42,
    intent: "question",
    aiReply:
      "Hiç sorun olmaz Can! Mobilite rutinleri her gün yapılabilir. Özellikle uzun oturduğun günlerin sonunda çok iyi gelir.",
    minutesAgo: 60 * 11,
  },
  {
    id: "fc-yt-back",
    platform: "youtube",
    postTitle: "Masa başı çalışanlar için 15 dakikalık mobilite",
    author: { name: "Ayşe Kara", handle: "aysekara", avatarUrl: avatar(PEOPLE.ayse) },
    text: "1 haftadır yapıyorum, bel ağrım gerçekten azaldı. Teşekkürler!",
    likes: 67,
    intent: "praise",
    aiReply:
      "Bunu duymak harika Ayşe! Devam etmen en önemlisi. Bir sonraki videoda omuzlar için bir rutin geliyor.",
    minutesAgo: 60 * 18,
  },
  {
    id: "fc-yt-level",
    platform: "youtube",
    postTitle: "Masa başı çalışanlar için 15 dakikalık mobilite",
    author: { name: "Burak Ç.", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    text: "İleri seviye versiyonu da gelir mi?",
    likes: 15,
    intent: "feedback",
    aiReply: "Gelecek! İleri seviye mobilite rutinini ay sonunda yayınlamayı planlıyoruz.",
    minutesAgo: 60 * 26,
  },
  // X
  {
    id: "fc-x-protein",
    platform: "x",
    postTitle: "Günlük protein ihtiyacı nasıl hesaplanır?",
    author: { name: "Mert", handle: "mertkoşar", avatarUrl: avatar(PEOPLE.mert) },
    text: "Vejetaryenler için kaynak önerisi var mı?",
    likes: 8,
    intent: "question",
    aiReply:
      "Tabii! Mercimek, nohut, yoğurt, yumurta ve tofu iyi başlangıç noktaları. Bir diyetisyenle çalışmanı da öneririz.",
    minutesAgo: 60 * 2,
  },
  {
    id: "fc-x-agree",
    platform: "x",
    postTitle: "Günlük protein ihtiyacı nasıl hesaplanır?",
    author: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    text: "Sade ve net, bayıldım bu thread'e.",
    likes: 12,
    intent: "praise",
    aiReply: "Teşekkürler Deniz! Beslenme serisine devam edeceğiz 🙌",
    minutesAgo: 60 * 6,
  },
  {
    id: "fc-x-app",
    platform: "x",
    postTitle: "Günlük protein ihtiyacı nasıl hesaplanır?",
    author: { name: "Melis", handle: "melisarslan", avatarUrl: avatar(PEOPLE.melis) },
    text: "Rezervasyon uygulaması dün yine açılmadı.",
    likes: 3,
    intent: "complaint",
    aiReply:
      "Yaşadığın sorun için özür dileriz Melis. Dün akşam bir güncelleme yaptık, uygulama şu an sorunsuz çalışıyor. Tekrar yaşarsan DM'den yazman yeterli.",
    minutesAgo: 60 * 14,
  },
  // LinkedIn
  {
    id: "fc-li-corporate",
    platform: "linkedin",
    postTitle: "Kurumsal wellness programımızın ilk yılı",
    author: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    text: "60 kişilik ekibimiz için benzer bir program düşünüyoruz. Ofise gelerek ders veriyor musunuz?",
    likes: 7,
    intent: "purchase",
    aiReply:
      "Merhaba Zeynep Hanım, evet! Ofisinizde ya da stüdyomuzda haftalık grup dersleri düzenleyebiliyoruz. Size bir program önerisi gönderebilir miyiz?",
    minutesAgo: 60 * 21,
  },
  {
    id: "fc-li-congrats",
    platform: "linkedin",
    postTitle: "Kurumsal wellness programımızın ilk yılı",
    author: { name: "Emre Yılmaz", handle: "emre-yilmaz", avatarUrl: avatar(PEOPLE.emre) },
    text: "Harika bir girişim, tebrikler.",
    likes: 19,
    intent: "praise",
    aiReply: "Çok teşekkür ederiz Emre Bey!",
    minutesAgo: 60 * 30,
  },
  {
    id: "fc-li-coach",
    platform: "linkedin",
    postTitle: "Kurumsal wellness programımızın ilk yılı",
    author: { name: "Arda Güneş", handle: "arda-gunes", avatarUrl: avatar(PEOPLE.arda) },
    text: "Sertifikalı antrenörüm, ekibinize katılmak isterim.",
    likes: 4,
    intent: "question",
    aiReply:
      "Merhaba Arda Bey, ilginiz için teşekkürler! Özgeçmişinizi kariyer@{handle}.com adresine iletebilirsiniz.",
    minutesAgo: 60 * 46,
  },
];

export const fitnessConversations: SeedConversation[] = [
  {
    id: "fd-trial",
    platform: "instagram",
    customer: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba! Ücretsiz deneme dersine katılmak istiyorum. Hiç spor yapmadım, sorun olur mu?",
        minutesAgo: 40,
      },
      {
        id: "m2",
        from: "customer",
        text: "Hafta içi akşamları uygunum.",
        minutesAgo: 38,
      },
    ],
    aiSuggestions: [
      "Merhaba Elif, hiç sorun değil! Başlangıç dersimiz tam sana göre. Salı ya da Perşembe 19:00 sana uyar mı?",
      "Aramıza hoş geldin! İlk dersinde koçun seviyeni birlikte belirleyecek. Hangi akşam gelmek istersin?",
      "Harika! Hafta içi 19:00 başlangıç dersimizde yer var. İsmini ve telefonunu yazarsan kaydını hemen oluşturalım.",
    ],
  },
  {
    id: "fd-freeze",
    platform: "instagram",
    customer: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "2 haftalığına yurt dışına çıkıyorum, üyeliğimi dondurabilir miyim?",
        minutesAgo: 60 * 5,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Can, tabii ki! Hangi tarihler arasında olacaksın?",
        minutesAgo: 60 * 4,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "12–26 Ekim arası.",
        minutesAgo: 60 * 4 - 10,
      },
    ],
    aiSuggestions: [
      "Tamamdır Can, üyeliğini 12–26 Ekim arası donduruyoruz. Bitiş tarihin otomatik olarak 2 hafta uzayacak. İyi yolculuklar!",
      "Dondurma işlemin tamam. Döndüğünde ilk dersine rezervasyonunu şimdiden yapmak ister misin?",
      "Harika, 12–26 Ekim için dondurma talebini aldık. Onay e-postası birazdan gelecek.",
    ],
  },
  {
    id: "fd-collab",
    platform: "tiktok",
    customer: { name: "Deniz | Koşu", handle: "denizkosuyor", avatarUrl: avatar(PEOPLE.deniz) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Selam! Koşu içerikleri üreten bir hesabım var (85B). Hibrit antrenman üzerine ortak bir video çekelim mi?",
        minutesAgo: 60 * 7,
      },
    ],
    aiSuggestions: [
      "Selam Deniz! Çok isteriz. Hibrit antrenman şu an bizim de odağımızda. Stüdyoda bir çekim için önümüzdeki hafta uygun musun?",
      "Harika fikir! Koçumuz Kerem'le kuvvet kısmını, sen de koşu kısmını anlatabilirsin. Detayları konuşalım mı?",
      "İlgin için teşekkürler! Çekim için e-posta adresini paylaşır mısın? Bir konsept taslağı gönderelim.",
    ],
  },
  {
    id: "fd-pt",
    platform: "x",
    customer: { name: "Burak Çelik", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Birebir PT fiyatlarınızı öğrenebilir miyim?",
        minutesAgo: 60 * 16,
      },
    ],
    aiSuggestions: [
      "Merhaba Burak! Birebir PT için 8 ve 12 derslik paketlerimiz var. Güncel fiyat listesini e-postayla gönderebilir miyiz?",
      "Tabii! Önce ücretsiz bir değerlendirme seansı yapıp hedefine göre paket önerelim mi?",
      "Birebir PT paketlerimiz 8 dersten başlıyor. Hedefini paylaşırsan sana uygun koçu önerelim.",
    ],
  },
  {
    id: "fd-corporate",
    platform: "linkedin",
    customer: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, yorumunuz için teşekkürler. 60 kişilik ekibimiz için teklif alabilir miyiz? Haftada 2 ders düşünüyoruz.",
        minutesAgo: 60 * 19,
      },
    ],
    aiSuggestions: [
      "Merhaba Zeynep Hanım, memnuniyetle! Haftada 2 ders için ofisinizde ya da stüdyomuzda iki seçenekli bir teklif hazırlayalım. Tercih ettiğiniz gün ve saatler nelerdir?",
      "Teşekkürler! 60 kişilik ekipler için dersleri 2 gruba bölmeyi öneriyoruz. Kısa bir görüşmede detayları netleştirelim mi?",
      "Teklifimizi bu hafta içinde e-postanıza iletebiliriz. Ofis adresinizi paylaşır mısınız?",
    ],
  },
];
