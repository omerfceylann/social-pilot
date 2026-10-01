import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const travelReactions: FirstReaction[] = [
  {
    author: {
      name: "Elif Yıldız",
      handle: "elifyildiz",
      avatarUrl: avatar(PEOPLE.elif),
    },
    text: "Burası neresi?",
    intent: "question",
    likes: 3,
    aiReply: "Rotanın detaylarını DM'den paylaşalım Elif!",
  },
  {
    author: {
      name: "Selin Koç",
      handle: "selinkoc_",
      avatarUrl: avatar(PEOPLE.selin),
    },
    text: "Hemen gitmek istiyorum 😍",
    intent: "praise",
    likes: 7,
    aiReply: "Takvimimiz profilde Selin, seni de bekleriz!",
  },
  {
    author: {
      name: "Kerem Aydın",
      handle: "keremaydn",
      avatarUrl: avatar(PEOPLE.kerem),
    },
    text: "Tur fiyatı ne kadar?",
    intent: "purchase",
    likes: 2,
    aiReply: "Fiyat ve dahil olanları DM'den paylaşalım Kerem.",
  },
  {
    author: {
      name: "Irem Gezer",
      handle: "iremgezer",
      avatarUrl: avatar(PEOPLE.irem),
    },
    text: "Tek başıma katılabilir miyim?",
    intent: "question",
    likes: 4,
    aiReply: "Elbette Irem, gruplarımızda tek gelenler çok.",
  },
  {
    author: {
      name: "Ayşe Kara",
      handle: "aysekara",
      avatarUrl: avatar(PEOPLE.ayse),
    },
    text: "Bir sonraki tur ne zaman?",
    intent: "question",
    likes: 2,
    aiReply: "Ekim ortasında Ayşe Hanım, takvim profilde.",
  },
  {
    author: {
      name: "Zeynep Arslan",
      handle: "zeyneparslan",
      avatarUrl: avatar(PEOPLE.zeynep),
    },
    text: "Geçen ay katıldım, hayatımın gezisiydi.",
    intent: "praise",
    likes: 5,
    aiReply: "Çok sevindik Zeynep! Bir sonraki rotada görüşmek üzere.",
  },
];
