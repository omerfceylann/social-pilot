import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const ecommerceReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Bu ürün stokta var mı?",
    intent: "question",
    likes: 3,
    aiReply: "Merhaba Elif! Şu an stokta. 15:00'e kadar verirsen aynı gün kargoda.",
  },
  {
    author: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    text: "Kargo ücreti ne kadar?",
    intent: "question",
    likes: 2,
    aiReply:
      "500 TL üzeri siparişlerde kargo ücretsiz Can. Altında sabit bir ücret var, sepette görünüyor.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Çok şık görünüyor 😍",
    intent: "praise",
    likes: 6,
    aiReply: "Teşekkürler Selin! Canlısı daha da güzel, emin ol.",
  },
  {
    author: {
      name: "Burak Ç.",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Taksit seçeneği var mı?",
    intent: "purchase",
    likes: 2,
    aiReply: "Var Burak! Tüm kartlara 3 taksit seçeneğimiz bulunuyor.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Hediye paketi yapıyor musunuz?",
    intent: "question",
    likes: 4,
    aiReply: "Evet Irem, hediye paketi ücretsiz. Not da ekleyebilirsin.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Geçen hafta aldım, çok memnunum!",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Ayşe! Paylaştığın için teşekkürler.",
  },
];
