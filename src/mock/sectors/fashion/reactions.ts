import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/**
 * Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel.
 * Marka kuralı "emoji yok" olduğu için AI yanıtları emojisiz.
 */
export const fashionReactions: FirstReaction[] = [
  {
    author: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    text: "Bedenler kaç numaradan başlıyor?",
    intent: "question",
    likes: 2,
    aiReply:
      "Merhaba Elif, XS'ten L'ye kadar üretiyoruz. Beden tablosu ürün sayfalarında yer alıyor.",
  },
  {
    author: { name: "Melis", handle: "melisarslan", avatarUrl: avatar(PEOPLE.melis) },
    text: "Çok zarif, bayıldım 🤍",
    intent: "praise",
    likes: 6,
    aiReply: "Çok teşekkür ederiz Melis. Her parçayı büyük bir özenle hazırlıyoruz.",
  },
  {
    author: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    text: "Kargo süresi ne kadar?",
    intent: "question",
    likes: 1,
    aiReply: "Siparişe göre ürettiğimiz için parçalar 5–7 iş gününde kargoya veriliyor.",
  },
  {
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "Kumaş içeriği nedir?",
    intent: "question",
    likes: 3,
    aiReply:
      "Doğal kumaşlarla çalışıyoruz. Her ürünün kumaş içeriği ve bakım bilgisi ürün sayfasında.",
  },
  {
    author: { name: "moda.notlari", handle: "moda.notlari" },
    text: "Yerel üretim olması çok değerli, desteklemek lazım.",
    intent: "praise",
    likes: 5,
    aiReply: "Desteğin için teşekkür ederiz. Yerel ustalarla çalışmak bizim için en önemli değer.",
  },
  {
    author: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    text: "Başka renk seçeneği gelecek mi?",
    intent: "feedback",
    likes: 2,
    aiReply:
      "Yeni renkler üzerinde çalışıyoruz. Hangi rengi görmek istediğini yazarsan ekibe iletelim.",
  },
];
