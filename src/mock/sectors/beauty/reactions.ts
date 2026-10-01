import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const beautyReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Fiyat bilgisi alabilir miyim?",
    intent: "purchase",
    likes: 3,
    aiReply: "Merhaba Elif! Güncel fiyatları DM'den paylaşalım, ilk seansta cilt analizi bizden.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Çok doğal duruyor, bayıldım 🤍",
    intent: "praise",
    likes: 7,
    aiReply: "Teşekkürler Selin! Doğal görünüm en sevdiğimiz şey.",
  },
  {
    author: {
      name: "Deniz Arslan",
      handle: "denizarslan",
      avatarUrl: avatar(PEOPLE.deniz),
    },
    text: "Hassas cilde uygun mu?",
    intent: "question",
    likes: 2,
    aiReply:
      "Evet Deniz, seanstan önce cilt analizi yapıp hassas cilde uygun protokol uyguluyoruz.",
  },
  {
    author: {
      name: "Ece Şahin",
      handle: "ecesahin",
      avatarUrl: avatar(PEOPLE.ece),
    },
    text: "Hafta sonu açık mısınız?",
    intent: "question",
    likes: 4,
    aiReply: "Açığız Ece! Cumartesi 10:00–19:00 arası randevu alabilirsin.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Hediye kartınız var mı?",
    intent: "purchase",
    likes: 2,
    aiReply: "Var Irem! Hediye kartlarımız stüdyoda ve online alınabiliyor.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Geçen hafta geldim, çok rahatladım.",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Ayşe, seni yeniden ağırlamak için sabırsızlanıyoruz.",
  },
];
