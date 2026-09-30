import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const technologyReactions: FirstReaction[] = [
  {
    author: { name: "Emre Yılmaz", handle: "emredev", avatarUrl: avatar(PEOPLE.emre) },
    text: "Ücretsiz planınız var mı?",
    intent: "question",
    likes: 3,
    aiReply: "Var Emre! 5 kişiye kadar ekipler ücretsiz kullanabiliyor. Detaylar web sitemizde.",
  },
  {
    author: { name: "Zeynep Arslan", handle: "zeynep-arslan", avatarUrl: avatar(PEOPLE.zeynep) },
    text: "Jira'dan veri aktarımı yapılabiliyor mu?",
    intent: "question",
    likes: 2,
    aiReply:
      "Evet Zeynep Hanım, içe aktarma aracımızla projeleri birkaç dakikada taşıyabilirsiniz.",
  },
  {
    author: { name: "Kerem Aydın", handle: "keremaydn", avatarUrl: avatar(PEOPLE.kerem) },
    text: "Arayüz çok temiz görünüyor, deneyeceğim.",
    intent: "praise",
    likes: 4,
    aiReply: "Teşekkürler Kerem! Denedikten sonra geri bildirimini duymak isteriz.",
  },
  {
    author: { name: "Ece Demir", handle: "ece-demir", avatarUrl: avatar(PEOPLE.ece) },
    text: "Mobil uygulama da var mı?",
    intent: "question",
    likes: 1,
    aiReply: "Mobil uygulamamız yol haritamızda. Şimdilik tarayıcıdan mobilde sorunsuz çalışıyor.",
  },
  {
    author: { name: "yazilimci.ahmet", handle: "yazilimci.ahmet" },
    text: "Slack entegrasyonu planlıyor musunuz?",
    intent: "feedback",
    likes: 3,
    aiReply: "Kesinlikle, Slack entegrasyonu en çok istenen özellik ve üzerinde çalışıyoruz.",
  },
  {
    author: { name: "Arda Güneş", handle: "arda-gunes", avatarUrl: avatar(PEOPLE.arda) },
    text: "Başarılar, yolunuz açık olsun!",
    intent: "praise",
    likes: 6,
    aiReply: "Çok teşekkür ederiz Arda Bey!",
  },
];
