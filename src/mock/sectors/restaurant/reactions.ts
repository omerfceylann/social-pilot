import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const restaurantReactions: FirstReaction[] = [
  {
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "Çok güzel görünüyor! Adresiniz neresi?",
    intent: "question",
    likes: 2,
    aiReply:
      "Teşekkürler Selin! Adresimiz ve yol tarifi profilimizdeki bağlantıda. Seni bekliyoruz 😊",
  },
  {
    author: { name: "Mert", handle: "mertkahve", avatarUrl: avatar(PEOPLE.mert) },
    text: "Pazar günleri açık mısınız?",
    intent: "question",
    likes: 1,
    aiReply: "Evet Mert, pazar günleri de 09:00–20:00 arası açığız.",
  },
  {
    author: { name: "Ayşe Kara", handle: "aysekara", avatarUrl: avatar(PEOPLE.ayse) },
    text: "Bu hafta sonu kesin geliyorum 😍",
    intent: "praise",
    likes: 4,
    aiReply: "Çok sevindik Ayşe! Geldiğinde kendini tanıt, ilk kahven bizden.",
  },
  {
    author: { name: "Deniz Şahin", handle: "denizsahin", avatarUrl: avatar(PEOPLE.deniz) },
    text: "Vegan seçenekleriniz var mı?",
    intent: "question",
    likes: 3,
    aiReply:
      "Var Deniz! Kahvelerimizi bitkisel sütle hazırlayabiliyoruz, menüde vegan seçenekler de işaretli.",
  },
  {
    author: { name: "berkcan", handle: "berkcan.eats" },
    text: "Fiyatlar nasıl, öğrenci dostu mu?",
    intent: "question",
    likes: 2,
    aiReply:
      "Menümüzü profildeki bağlantıdan inceleyebilirsin. Hafta içi öğrencilere özel indirimimiz de var.",
  },
  {
    author: { name: "Irem", handle: "iremgezer", avatarUrl: avatar(PEOPLE.irem) },
    text: "Mahalleye böyle bir yer lazımdı, hayırlı olsun!",
    intent: "praise",
    likes: 5,
    aiReply: "Çok teşekkür ederiz İrem! Mahallenin buluşma noktası olmak için buradayız.",
  },
];
