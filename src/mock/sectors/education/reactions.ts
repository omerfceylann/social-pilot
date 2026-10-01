import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const educationReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Seviye testi ücretsiz mi?",
    intent: "question",
    likes: 3,
    aiReply: "Evet Elif, seviye testimiz ücretsiz ve 30 dakika sürüyor.",
  },
  {
    author: {
      name: "Kerem Aydın",
      handle: "keremaydn",
      avatarUrl: avatar(PEOPLE.kerem),
    },
    text: "Çok faydalı, kaydettim!",
    intent: "praise",
    likes: 6,
    aiReply: "Ne güzel Kerem! Bu hafta yeni ipuçları geliyor.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Online grubunuz var mı?",
    intent: "question",
    likes: 4,
    aiReply: "Var Irem! Haftada iki akşam online konuşma gruplarımız var.",
  },
  {
    author: {
      name: "Burak Ç.",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Kurs ücreti ne kadar?",
    intent: "purchase",
    likes: 2,
    aiReply: "Güncel ücretleri DM'den paylaşalım Burak; taksit seçeneğimiz de var.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Keşke lisede böyle öğretselerdi 😄",
    intent: "feedback",
    likes: 8,
    aiReply: "Hiç geç değil Selin! Konuşarak öğrenmek her yaşta işe yarıyor.",
  },
  {
    author: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    text: "IELTS hazırlığı da var mı?",
    intent: "question",
    likes: 3,
    aiReply: "Var Can! IELTS hazırlık gruplarımız her ay başlıyor.",
  },
];
