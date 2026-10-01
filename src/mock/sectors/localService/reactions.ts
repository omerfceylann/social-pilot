import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const localServiceReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Fiyat alabilir miyim?",
    intent: "purchase",
    likes: 3,
    aiReply: "Merhaba Elif! Keşif ücretsiz; net fiyatı DM'den paylaşalım.",
  },
  {
    author: {
      name: "Kerem Aydın",
      handle: "keremaydn",
      avatarUrl: avatar(PEOPLE.kerem),
    },
    text: "Sonuç inanılmaz 😳",
    intent: "praise",
    likes: 7,
    aiReply: "Teşekkürler Kerem! Doğru teknikle her şey mümkün.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Hangi semtlere geliyorsunuz?",
    intent: "question",
    likes: 2,
    aiReply: "Anadolu yakasının tamamına geliyoruz Ayşe Hanım.",
  },
  {
    author: {
      name: "Burak Ç.",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Hafta sonu çalışıyor musunuz?",
    intent: "question",
    likes: 4,
    aiReply: "Çalışıyoruz Burak! Cumartesi tüm gün randevu alabilirsin.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Kendi malzemenizi mi getiriyorsunuz?",
    intent: "question",
    likes: 2,
    aiReply: "Evet Irem, tüm malzemeler bizden.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Geçen ay geldiniz, çok memnun kaldık.",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Selin! Tekrar görüşmek üzere.",
  },
];
