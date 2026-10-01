import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const automotiveReactions: FirstReaction[] = [
  {
    author: {
      name: "Kerem Aydın",
      handle: "keremaydn",
      avatarUrl: avatar(PEOPLE.kerem),
    },
    text: "Bu ne kadar sürdü?",
    intent: "question",
    likes: 3,
    aiReply: "Yaklaşık 3 saat Kerem. Detaylı işlemlerde acele etmiyoruz.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Pırıl pırıl olmuş ✨",
    intent: "praise",
    likes: 7,
    aiReply: "Teşekkürler Selin! Aracını da bekleriz.",
  },
  {
    author: {
      name: "Emre Topal",
      handle: "emretopal",
      avatarUrl: avatar(PEOPLE.emre),
    },
    text: "Fiyat alabilir miyim?",
    intent: "purchase",
    likes: 2,
    aiReply: "Tabii Emre, aracının modelini DM'den yazarsan net fiyat verelim.",
  },
  {
    author: {
      name: "Burak Yılmaz",
      handle: "burakyilmaz",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Hangi ürünleri kullanıyorsunuz?",
    intent: "question",
    likes: 4,
    aiReply: "pH nötr ürünler ve mikrofiber bezler kullanıyoruz Burak.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Hafta sonu açık mısınız?",
    intent: "question",
    likes: 2,
    aiReply: "Cumartesi 09:00–18:00 arası açığız Ayşe Hanım.",
  },
  {
    author: {
      name: "Arda Kaya",
      handle: "ardakaya",
      avatarUrl: avatar(PEOPLE.arda),
    },
    text: "Geçen hafta aracımı getirdim, çok memnun kaldım.",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Arda! Bir sonraki bakımda görüşmek üzere.",
  },
];
