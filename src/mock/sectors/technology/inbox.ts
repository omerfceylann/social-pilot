import { avatar, PEOPLE } from "@/mock/images";
import type { SeedComment, SeedConversation } from "@/types";

export const technologyComments: SeedComment[] = [
  // Instagram
  {
    id: "tc-ig-price",
    platform: "instagram",
    postTitle: "Stand-up'ı 10 dakikada bitirmenin 5 yolu",
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "5 kişilik ekip için fiyat ne kadar?",
    likes: 4,
    intent: "question",
    aiReply:
      "Merhaba Selin! 5 kişiye kadar ekipler için ücretsiz planımız var. Daha fazla özellik için Pro planın detaylarını profildeki bağlantıda bulabilirsin.",
    minutesAgo: 25,
  },
  {
    id: "tc-ig-saved",
    platform: "instagram",
    postTitle: "Stand-up'ı 10 dakikada bitirmenin 5 yolu",
    author: { name: "Kerem Aydın", handle: "keremaydn", avatarUrl: avatar(PEOPLE.kerem) },
    text: "3. madde bizim ekip için tam ilaç oldu, teşekkürler 🙏",
    likes: 22,
    intent: "praise",
    aiReply:
      "Buna çok sevindik Kerem! Bir sonraki carousel'da retrospektif toplantılarını ele alacağız.",
    minutesAgo: 140,
  },
  {
    id: "tc-ig-mobile",
    platform: "instagram",
    postTitle: "Ekibimizle bir sprint günü",
    author: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    text: "Mobil uygulamanız var mı?",
    likes: 3,
    intent: "question",
    aiReply:
      "Var! iOS ve Android uygulamalarımızı App Store ve Google Play'de 'Taskly' diye aratarak bulabilirsin.",
    minutesAgo: 300,
  },
  // TikTok
  {
    id: "tc-tt-shortcut",
    platform: "tiktok",
    postTitle: "Klavye kısayoluyla 3 saniyede görev",
    author: { name: "yazilimci.ahmet", handle: "yazilimci.ahmet" },
    text: "Jira'da bunu yapmak 3 tık sürüyor 😅",
    likes: 188,
    intent: "feedback",
    aiReply:
      "Tam da bu yüzden kısayollara takıntılıyız 😄 Tüm kısayol listesi için ? tuşuna basman yeterli.",
    minutesAgo: 55,
  },
  {
    id: "tc-tt-student",
    platform: "tiktok",
    postTitle: "Klavye kısayoluyla 3 saniyede görev",
    author: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    text: "Öğrenciler için indirim var mı? Bitirme projesi için kullanmak istiyoruz.",
    likes: 12,
    intent: "purchase",
    aiReply:
      "Harika bir fikir Deniz! Öğrenci ekipleri için Pro planı ücretsiz sunuyoruz. Okul e-postanla kayıt olman yeterli.",
    minutesAgo: 200,
  },
  {
    id: "tc-tt-bug",
    platform: "tiktok",
    postTitle: "Ekibimizle bir sprint günü",
    author: { name: "Ozan T.", handle: "ozant", avatarUrl: avatar(PEOPLE.ozan) },
    text: "Dün akşam bildirimler hiç gelmedi, sorun mu vardı?",
    likes: 7,
    intent: "complaint",
    aiReply:
      "Ozan, haber verdiğin için teşekkürler. Dün 21:00–22:30 arası bildirim servisinde bir gecikme yaşandı ve giderildi. Yaşadığın aksaklık için özür dileriz.",
    minutesAgo: 60 * 7,
  },
  // YouTube
  {
    id: "tc-yt-wip",
    platform: "youtube",
    postTitle: "Sıfırdan Kanban: 20 dakikalık rehber",
    author: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    text: "WIP limitini kaç olarak başlatmamızı önerirsiniz? 6 kişilik ekibiz.",
    likes: 31,
    intent: "question",
    aiReply:
      "Güzel soru! Genelde kişi sayısı kadar ya da biraz altında başlamayı öneriyoruz. 6 kişilik ekip için 'Devam eden' sütununda 5 ile başlayıp 2 hafta sonra gözden geçirebilirsiniz.",
    minutesAgo: 60 * 10,
  },
  {
    id: "tc-yt-thanks",
    platform: "youtube",
    postTitle: "Sıfırdan Kanban: 20 dakikalık rehber",
    author: { name: "Ayşe Kara", handle: "aysekara", avatarUrl: avatar(PEOPLE.ayse) },
    text: "Bu kadar sade anlatan başka video görmedim, ekibe izletiyorum.",
    likes: 54,
    intent: "praise",
    aiReply:
      "Çok teşekkürler Ayşe! Ekibinle kurulumda takılırsanız yardım merkezimiz ve canlı destek her zaman açık.",
    minutesAgo: 60 * 16,
  },
  {
    id: "tc-yt-scrum",
    platform: "youtube",
    postTitle: "Sıfırdan Kanban: 20 dakikalık rehber",
    author: { name: "Burak Ç.", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    text: "Scrum için de benzer bir video gelir mi?",
    likes: 19,
    intent: "feedback",
    aiReply:
      "Geliyor! Scrum rehberi şu an montajda, önümüzdeki hafta yayında olacak. Bildirimleri açmayı unutma.",
    minutesAgo: 60 * 22,
  },
  // X
  {
    id: "tc-x-tools",
    platform: "x",
    postTitle: "Ürün yöneticileri için 7 araç",
    author: { name: "Mert", handle: "mertpm", avatarUrl: avatar(PEOPLE.mert) },
    text: "Listeye Linear'ı da eklerdim ama güzel thread.",
    likes: 28,
    intent: "feedback",
    aiReply:
      "Haklısın, Linear harika bir araç! Farklı ihtiyaçlar için alternatifleri ayrı bir thread'de karşılaştıracağız.",
    minutesAgo: 90,
  },
  {
    id: "tc-x-api",
    platform: "x",
    postTitle: "Ürün yöneticileri için 7 araç",
    author: { name: "Emre Yılmaz", handle: "emredev", avatarUrl: avatar(PEOPLE.emre) },
    text: "Public API'niz var mı? Kendi dashboard'umuza çekmek istiyoruz.",
    likes: 9,
    intent: "question",
    aiReply: "Var! REST API ve webhook dokümantasyonumuz taskly.io/developers adresinde.",
    minutesAgo: 60 * 4,
  },
  {
    id: "tc-x-down",
    platform: "x",
    postTitle: "Bu toplantı e-posta olabilirdi",
    author: { name: "Melis", handle: "melisarslan", avatarUrl: avatar(PEOPLE.melis) },
    text: "Sabah uygulama açılmıyordu, bir tek bende mi?",
    likes: 6,
    intent: "complaint",
    aiReply:
      "Melis, sabah 08:10–08:25 arası kısa bir erişim sorunu yaşandı ve çözüldü. Durum sayfamızı status.taskly.io adresinden takip edebilirsin. Özür dileriz.",
    minutesAgo: 60 * 12,
  },
  // LinkedIn
  {
    id: "tc-li-sso",
    platform: "linkedin",
    postTitle: "Taskly 2.0: Zaman çizelgesi görünümü",
    author: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    text: "200 kişilik bir şirketiz. SSO ve KVKK uyumluluğu konusunda bilgi alabilir miyiz?",
    likes: 8,
    intent: "purchase",
    aiReply:
      "Merhaba Zeynep Hanım, Kurumsal planımız SSO, rol bazlı yetkilendirme ve Türkiye'de veri barındırma seçeneği sunuyor. Detaylar için satış ekibimiz size ulaşabilir mi?",
    minutesAgo: 60 * 20,
  },
  {
    id: "tc-li-congrats",
    platform: "linkedin",
    postTitle: "Taskly 2.0: Zaman çizelgesi görünümü",
    author: { name: "Arda Güneş", handle: "arda-gunes", avatarUrl: avatar(PEOPLE.arda) },
    text: "Zaman çizelgesi tam ihtiyacımız olan şeydi. Tebrikler ekibe!",
    likes: 24,
    intent: "praise",
    aiReply:
      "Teşekkürler Arda Bey! Geri bildirimlerinizi ürün ekibimize iletmeye devam edin, yol haritamızı onlar şekillendiriyor.",
    minutesAgo: 60 * 28,
  },
  {
    id: "tc-li-careers",
    platform: "linkedin",
    postTitle: "Neden Taskly'yi kurduk?",
    author: { name: "Ece Demir", handle: "ece-demir", avatarUrl: avatar(PEOPLE.ece) },
    text: "Frontend pozisyonunuz hâlâ açık mı?",
    likes: 5,
    intent: "question",
    aiReply:
      "Merhaba Ece Hanım! Evet, ilan hâlâ açık. Başvurunuzu taskly.io/kariyer üzerinden iletebilirsiniz.",
    minutesAgo: 60 * 40,
  },
];

export const technologyConversations: SeedConversation[] = [
  {
    id: "td-demo",
    platform: "linkedin",
    customer: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, ekibimiz için bir demo görüşmesi ayarlayabilir miyiz? 45 kişilik bir yazılım ekibiyiz.",
        minutesAgo: 50,
      },
      {
        id: "m2",
        from: "customer",
        text: "Özellikle Jira'dan geçiş sürecini merak ediyoruz.",
        minutesAgo: 48,
      },
    ],
    aiSuggestions: [
      "Merhaba Zeynep Hanım, memnuniyetle! Jira'dan tek tıkla içe aktarma aracımız var. Bu hafta Perşembe 14:00 ya da Cuma 10:00 uygun olur mu?",
      "Teşekkürler Zeynep Hanım! 30 dakikalık bir demoda hem ürünü hem Jira geçişini gösterebiliriz. Size uyan bir zaman aralığı paylaşır mısınız?",
      "Harika! Jira geçişi genelde bir öğleden sonra sürüyor. Demo için takvim bağlantımızı iletiyorum, uygun saati seçebilirsiniz.",
    ],
  },
  {
    id: "td-partnership",
    platform: "linkedin",
    customer: { name: "Arda Güneş", handle: "arda-gunes", avatarUrl: avatar(PEOPLE.arda) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Bir yazılım ajansıyız, müşterilerimize Taskly öneriyoruz. Partner programınız var mı?",
        minutesAgo: 60 * 26,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Arda Bey, ilginiz için teşekkürler! Ekibe soruyoruz.",
        minutesAgo: 60 * 25,
        status: "read",
      },
    ],
    aiSuggestions: [
      "Arda Bey, partner programımız var: önerdiğiniz her ekipte ilk yıl %20 gelir paylaşımı ve özel destek hattı. Detayları e-postayla gönderebilir miyiz?",
      "Evet! Ajans partnerlerimize ücretsiz çalışma alanı ve komisyon modeli sunuyoruz. Kısa bir tanışma görüşmesi yapalım mı?",
      "Programımız hakkında bir sunum hazırladık. E-posta adresinizi paylaşırsanız hemen iletelim.",
    ],
  },
  {
    id: "td-bug",
    platform: "x",
    customer: { name: "Emre Yılmaz", handle: "emredev", avatarUrl: avatar(PEOPLE.emre) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Selam, webhook'lar bazen iki kez tetikleniyor. Bilinen bir sorun mu?",
        minutesAgo: 60 * 3,
      },
    ],
    aiSuggestions: [
      "Selam Emre, haber verdiğin için teşekkürler! Ekibimiz inceliyor. Tekrarları ayıklamak için her olaydaki event_id alanını kullanabilirsin. Workspace adını paylaşır mısın?",
      "Bilinen bir durum: yeniden deneme mekanizması nadiren çift tetikleme yapabiliyor. Bu hafta bir düzeltme yayınlıyoruz.",
      "Bunu hemen inceleyelim. Son 24 saatte etkilenen webhook URL'sini ve örnek bir event_id paylaşabilir misin?",
    ],
  },
  {
    id: "td-student",
    platform: "instagram",
    customer: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, okul e-postamla kayıt oldum ama Pro plan aktif olmadı.",
        minutesAgo: 60 * 9,
      },
    ],
    aiSuggestions: [
      "Merhaba Deniz! Öğrenci doğrulaması 24 saat içinde tamamlanıyor. Kayıtlı e-posta adresini paylaşırsan hemen kontrol edelim.",
      "Bazen okul alan adları listemizde olmayabiliyor. Üniversiteni yazarsan manuel olarak onaylayabiliriz.",
      "Hemen bakıyoruz! Hangi e-posta ile kayıt olduğunu yazar mısın?",
    ],
  },
  {
    id: "td-feature",
    platform: "tiktok",
    customer: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Karanlık mod gelecek mi? Gece çalışırken göz yoruyor 🥲",
        minutesAgo: 60 * 30,
      },
    ],
    aiSuggestions: [
      "Güzel haber İrem: karanlık mod beta'da! Ayarlar > Görünüm'den açabilirsin.",
      "Karanlık mod bu ay içinde herkese açılıyor. Beta'ya katılmak istersen seni listeye ekleyebiliriz.",
      "Çok isteniyor, biz de heyecanlıyız! Birkaç hafta içinde yayında olacak.",
    ],
  },
];
