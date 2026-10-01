import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const healthReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Yeni başlayanlara uygun mu?",
    intent: "question",
    likes: 3,
    aiReply: "Kesinlikle Elif! Her harekette daha kolay bir alternatif gösteriyoruz.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Çok huzurlu 🤍",
    intent: "praise",
    likes: 7,
    aiReply: "Teşekkürler Selin! Bu huzuru stüdyoda da yaşamaya bekleriz.",
  },
  {
    author: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    text: "Ders ücretleri ne kadar?",
    intent: "purchase",
    likes: 2,
    aiReply: "Paketlerimizi DM'den paylaşalım Can; ilk ders ücretsiz.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Online katılabilir miyim?",
    intent: "question",
    likes: 4,
    aiReply: "Evet Irem, online derslerimiz de var.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Akşam dersleri kaçta?",
    intent: "question",
    likes: 2,
    aiReply: "Hafta içi 19:30'da Ayşe Hanım.",
  },
  {
    author: {
      name: "Zeynep Arslan",
      handle: "zeyneparslan",
      avatarUrl: avatar(PEOPLE.zeynep),
    },
    text: "Geçen hafta katıldım, çok iyi geldi.",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Zeynep! Seni yeniden bekliyoruz.",
  },
];
