import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const realEstateReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Fiyat bilgisi alabilir miyim?",
    intent: "purchase",
    likes: 3,
    aiReply: "Merhaba Elif! Fiyat ve detayları DM'den paylaşalım.",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Çok aydınlık bir ev 😍",
    intent: "praise",
    likes: 6,
    aiReply: "Değil mi Selin! Gün ışığı bu evin en güzel yanı.",
  },
  {
    author: {
      name: "Can Özdemir",
      handle: "canozdemir",
      avatarUrl: avatar(PEOPLE.can),
    },
    text: "Krediye uygun mu?",
    intent: "question",
    likes: 2,
    aiReply: "Evet Can, ekspertiz raporu hazır ve krediye uygun.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Bu hafta görebilir miyiz?",
    intent: "question",
    likes: 4,
    aiReply: "Tabii Irem! Uygun günlerini DM'den yazarsan randevu oluşturalım.",
  },
  {
    author: {
      name: "Burak Ç.",
      handle: "burakcelik",
      avatarUrl: avatar(PEOPLE.burak),
    },
    text: "Aidat ne kadar?",
    intent: "question",
    likes: 2,
    aiReply: "Aidat bilgisini DM'den paylaşabiliriz Burak.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Sizinle ev aldık, çok memnun kaldık!",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Ayşe Hanım! Yeni evinizde mutluluklar.",
  },
];
