import { avatar, PEOPLE } from "@/mock/images";
import type { SeedComment, SeedConversation } from "@/types";

export const fashionComments: SeedComment[] = [
  // Instagram
  {
    id: "nc-ig-size",
    platform: "instagram",
    postTitle: "Trençkot, 3 farklı stil",
    author: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    text: "1.62 boyundayım, S mi M mi almalıyım?",
    likes: 8,
    intent: "question",
    aiReply:
      "Merhaba Elif! Trençkotumuz rahat kesimli, 1.62 boy için genellikle S bedeni öneriyoruz. Ölçülerini DM'den paylaşırsan birlikte netleştirebiliriz.",
    minutesAgo: 16,
  },
  {
    id: "nc-ig-love",
    platform: "instagram",
    postTitle: "Sonbahar/Kış '26 koleksiyonu",
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "Renk paleti o kadar güzel ki, hepsini istiyorum.",
    likes: 44,
    intent: "praise",
    aiReply: "Çok teşekkürler Selin! Palet, İzmir'in sonbahar tonlarından ilham aldı.",
    minutesAgo: 110,
  },
  {
    id: "nc-ig-return",
    platform: "instagram",
    postTitle: "Sonbahar/Kış '26 koleksiyonu",
    author: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    text: "Beden olmazsa iade süreci nasıl işliyor?",
    likes: 5,
    intent: "question",
    aiReply:
      "Merhaba Deniz! Teslimattan sonraki 14 gün içinde ücretsiz değişim ve iade yapabiliyorsun. Adımlar sipariş e-postanda yer alıyor.",
    minutesAgo: 60 * 4,
  },
  // TikTok
  {
    id: "nc-tt-atelier",
    platform: "tiktok",
    postTitle: "Bir ceketin atölyede 3 günü",
    author: { name: "moda.notlari", handle: "moda.notlari" },
    text: "Bu emeği görünce fiyat çok daha anlamlı geliyor",
    likes: 263,
    intent: "praise",
    aiReply: "Tam da bunu göstermek istedik. Her parça atölyemizde ustalarımızın elinden çıkıyor.",
    minutesAgo: 48,
  },
  {
    id: "nc-tt-fabric",
    platform: "tiktok",
    postTitle: "GRWM: Ofis kombini",
    author: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    text: "Pantolonun kumaşı ne? Tüylenme yapar mı?",
    likes: 17,
    intent: "question",
    aiReply:
      "Yün karışımlı bir kumaş kullanıyoruz, tüylenmeye karşı dayanıklı. Bakım önerileri ürün etiketinde yer alıyor.",
    minutesAgo: 60 * 6,
  },
  {
    id: "nc-tt-delay",
    platform: "tiktok",
    postTitle: "GRWM: Ofis kombini",
    author: { name: "Ozan T.", handle: "ozant", avatarUrl: avatar(PEOPLE.ozan) },
    text: "Siparişim 8 gündür kargoya verilmedi.",
    likes: 9,
    intent: "complaint",
    aiReply:
      "Ozan, beklettiğimiz için özür dileriz. Siparişe göre üretim yaptığımız için bazı parçalar 7–10 gün sürebiliyor. Sipariş numaranı DM'den paylaşırsan durumu hemen kontrol edelim.",
    minutesAgo: 60 * 10,
  },
  // YouTube
  {
    id: "nc-yt-cashmere",
    platform: "youtube",
    postTitle: "Yün mü, kaşmir mi?",
    author: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    text: "Kaşmir gerçekten fiyat farkına değer mi?",
    likes: 28,
    intent: "question",
    aiReply:
      "Doğru bakımla evet. Kaşmir daha hafif ve sıcak tutar, uzun yıllar kullanılabilir. Günlük kullanım için yün de harika bir tercih.",
    minutesAgo: 60 * 12,
  },
  {
    id: "nc-yt-helpful",
    platform: "youtube",
    postTitle: "Yün mü, kaşmir mi?",
    author: { name: "Ayşe Kara", handle: "aysekara", avatarUrl: avatar(PEOPLE.ayse) },
    text: "45 saniyede bu kadar net anlatılabilirmiş.",
    likes: 39,
    intent: "praise",
    aiReply: "Teşekkürler Ayşe! Kumaş serisinin devamında keten ve pamuğu karşılaştıracağız.",
    minutesAgo: 60 * 17,
  },
  {
    id: "nc-yt-men",
    platform: "youtube",
    postTitle: "Yün mü, kaşmir mi?",
    author: { name: "Burak Ç.", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    text: "Erkek koleksiyonu düşünüyor musunuz?",
    likes: 21,
    intent: "feedback",
    aiReply:
      "Güzel soru Burak. Şimdilik kadın giyime odaklanıyoruz ama unisex triko serisi üzerinde çalışıyoruz.",
    minutesAgo: 60 * 25,
  },
  // X
  {
    id: "nc-x-burgundy",
    platform: "x",
    postTitle: "Hangi rengi üretelim?",
    author: { name: "Melis", handle: "melisarslan", avatarUrl: avatar(PEOPLE.melis) },
    text: "Bordo, kesinlikle bordo.",
    likes: 12,
    intent: "feedback",
    aiReply: "Bordo şu an önde. Sonucu Cuma günü paylaşacağız.",
    minutesAgo: 80,
  },
  {
    id: "nc-x-store",
    platform: "x",
    postTitle: "Hangi rengi üretelim?",
    author: { name: "Mert", handle: "mertyazar", avatarUrl: avatar(PEOPLE.mert) },
    text: "İstanbul'da mağazanız var mı?",
    likes: 4,
    intent: "question",
    aiReply:
      "Şu an sadece İzmir Alsancak'ta showroom'umuz var. İstanbul'a tüm siparişleri 2 iş gününde ulaştırıyoruz.",
    minutesAgo: 60 * 5,
  },
  {
    id: "nc-x-site",
    platform: "x",
    postTitle: "Hangi rengi üretelim?",
    author: { name: "Kerem Aydın", handle: "keremaydn", avatarUrl: avatar(PEOPLE.kerem) },
    text: "Sitede ödeme adımında hata alıyorum.",
    likes: 3,
    intent: "complaint",
    aiReply:
      "Kerem, haber verdiğin için teşekkürler. Ödeme altyapısında kısa süreli bir sorun vardı ve giderildi. Tekrar denediğinde sorun yaşarsan DM'den yaz.",
    minutesAgo: 60 * 13,
  },
  // LinkedIn
  {
    id: "nc-li-wholesale",
    platform: "linkedin",
    postTitle: "Sürdürülebilir üretime geçişimiz",
    author: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    text: "Butik mağazamız için toptan çalışıyor musunuz?",
    likes: 6,
    intent: "purchase",
    aiReply:
      "Merhaba Zeynep Hanım, seçili butiklerle toptan çalışıyoruz. Size katalog ve koşullarımızı iletebilir miyiz?",
    minutesAgo: 60 * 22,
  },
  {
    id: "nc-li-inspiring",
    platform: "linkedin",
    postTitle: "Sürdürülebilir üretime geçişimiz",
    author: { name: "Emre Yılmaz", handle: "emre-yilmaz", avatarUrl: avatar(PEOPLE.emre) },
    text: "Stok fazlasının %60 azalması çok etkileyici bir sonuç.",
    likes: 26,
    intent: "praise",
    aiReply:
      "Teşekkürler Emre Bey. Siparişe göre üretim hem kaynakları hem atölyemizi daha verimli kullanmamızı sağladı.",
    minutesAgo: 60 * 31,
  },
  {
    id: "nc-li-intern",
    platform: "linkedin",
    postTitle: "Sürdürülebilir üretime geçişimiz",
    author: { name: "Ece Demir", handle: "ece-demir", avatarUrl: avatar(PEOPLE.ece) },
    text: "Moda tasarımı öğrencisiyim, staj imkânı var mı?",
    likes: 7,
    intent: "question",
    aiReply:
      "Merhaba Ece Hanım! Yaz dönemi staj başvurularımızı Mart ayında açıyoruz. Portfolyonuzu kariyer@{handle}.com adresine iletebilirsiniz.",
    minutesAgo: 60 * 42,
  },
];

export const fashionConversations: SeedConversation[] = [
  {
    id: "nd-size",
    platform: "instagram",
    customer: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, Ada paltoyu almak istiyorum. Göğüs 88, bel 70, boyum 1.62.",
        minutesAgo: 26,
      },
      {
        id: "m2",
        from: "customer",
        text: "Kolları uzun gelir mi acaba?",
        minutesAgo: 24,
      },
    ],
    aiSuggestions: [
      "Merhaba Elif! Ölçülerine göre S beden tam olacaktır. Kol boyu 1.62 boy için bilek hizasında duruyor, uzun gelmez.",
      "Teşekkürler Elif. S beden ölçülerinle birebir uyumlu. İstersen kol boyunu siparişe göre 2 cm kısaltabiliriz.",
      "S bedeni öneriyoruz. Kumaş esnemediği için içine kalın triko giyeceksen M de düşünebilirsin.",
    ],
  },
  {
    id: "nd-exchange",
    platform: "instagram",
    customer: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Keten gömleği M'den S'ye değiştirmek istiyorum.",
        minutesAgo: 60 * 3,
      },
      {
        id: "m2",
        from: "brand",
        text: "Merhaba Deniz, tabii ki! Sipariş numaranı paylaşır mısın?",
        minutesAgo: 60 * 3 - 5,
        status: "read",
      },
      {
        id: "m3",
        from: "customer",
        text: "NV-20418",
        minutesAgo: 60 * 2,
      },
    ],
    aiSuggestions: [
      "Teşekkürler Deniz. NV-20418 için değişim kodun e-postana gönderildi. Kargo ücreti bizden.",
      "Değişim talebini oluşturduk. Kurye yarın 10:00–14:00 arası ürünü adresinden alacak.",
      "Hemen hallediyoruz. Yeni S beden gömleğin 2 iş günü içinde kargoda olacak.",
    ],
  },
  {
    id: "nd-collab",
    platform: "tiktok",
    customer: { name: "Selin | Stil", handle: "selinstil", avatarUrl: avatar(PEOPLE.selin) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba! Kapsül gardırop üzerine içerik üreten bir hesabım var. Koleksiyonunuzla bir video hazırlamak isterim.",
        minutesAgo: 60 * 8,
      },
    ],
    aiSuggestions: [
      "Merhaba Selin, çok isteriz! Kapsül gardırop şu an bizim de odağımızda. Beden bilgini paylaşırsan 5 parçalık bir seçki gönderelim.",
      "Teşekkürler Selin! Birlikte 10 parça 30 kombin konseptinde bir video hazırlayabiliriz. Detayları konuşalım mı?",
      "İlgin için teşekkürler. İş birliği koşullarımızı e-postayla gönderebilir miyiz?",
    ],
  },
  {
    id: "nd-order",
    platform: "x",
    customer: { name: "Ozan Taş", handle: "ozant", avatarUrl: avatar(PEOPLE.ozan) },
    unread: false,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Sipariş numaram NV-20377. Ne zaman kargolanır?",
        minutesAgo: 60 * 9,
      },
    ],
    aiSuggestions: [
      "Merhaba Ozan, siparişin atölyede son kontrolde. Yarın kargoya verilecek, takip numarası e-postana gelecek.",
      "Beklettiğimiz için özür dileriz. NV-20377 yarın kargoda olacak.",
      "Siparişin üretimin son aşamasında. En geç Perşembe kargoya teslim edeceğiz.",
    ],
  },
  {
    id: "nd-wholesale",
    platform: "linkedin",
    customer: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    unread: true,
    messages: [
      {
        id: "m1",
        from: "customer",
        text: "Merhaba, Ankara'da bir butik mağazamız var. Sonbahar koleksiyonundan 40–50 parçalık bir sipariş düşünüyoruz. Katalog alabilir miyiz?",
        minutesAgo: 60 * 20,
      },
    ],
    aiSuggestions: [
      "Merhaba Zeynep Hanım, ilginiz için teşekkürler! Toptan kataloğumuzu ve fiyat listemizi e-postanıza iletebilir miyiz?",
      "Memnuniyetle! 40 parça üzeri siparişlerde renk seçimi ve etiketleme esnekliği sunuyoruz. Kısa bir görüşme ayarlayalım mı?",
      "Kataloğumuzu bugün gönderiyoruz. Mağazanızın web sitesini de paylaşabilirseniz koleksiyon önerisi hazırlayalım.",
    ],
  },
];
