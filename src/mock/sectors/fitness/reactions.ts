import { avatar, PEOPLE } from "@/mock/images";
import type { FirstReaction } from "@/types";

/** Yeni paylaşılan bir posta gelen ilk yorumlar; her posta uyacak kadar genel. */
export const fitnessReactions: FirstReaction[] = [
  {
    author: { name: "Elif Yıldız", handle: "elifyildiz", avatarUrl: avatar(PEOPLE.elif) },
    text: "Hiç spor yapmadım, başlangıç için uygun mu?",
    intent: "question",
    likes: 3,
    aiReply: "Kesinlikle Elif! Başlangıç derslerimiz tam sana göre. İlk deneme dersin bizden 💪",
  },
  {
    author: { name: "Can Özdemir", handle: "canozdemir", avatarUrl: avatar(PEOPLE.can) },
    text: "Stüdyo nerede, otopark var mı?",
    intent: "question",
    likes: 1,
    aiReply: "Adresimiz profilde Can. Hemen yanında ücretli bir otopark bulunuyor.",
  },
  {
    author: { name: "Selin Koç", handle: "selinkoc_", avatarUrl: avatar(PEOPLE.selin) },
    text: "Enerji çok iyi görünüyor! 🔥",
    intent: "praise",
    likes: 5,
    aiReply: "Teşekkürler Selin! Bu enerjiyi bir derste canlı yaşamaya ne dersin?",
  },
  {
    author: { name: "Burak Ç.", handle: "burakcelik", avatarUrl: avatar(PEOPLE.burak) },
    text: "Aylık üyelik ücreti ne kadar?",
    intent: "purchase",
    likes: 2,
    aiReply:
      "Üyelik paketlerimizi DM'den paylaşabiliriz Burak. Haftada 2 ve 3 ders seçeneklerimiz var.",
  },
  {
    author: { name: "koşan.mühendis", handle: "kosan.muhendis" },
    text: "Sabah erken saatte ders var mı? İşe gitmeden gelmek istiyorum.",
    intent: "question",
    likes: 4,
    aiReply: "Var! Hafta içi her sabah 07:00'de dersimiz var, işe gitmeden önce ideal.",
  },
  {
    author: { name: "Ayşe Kara", handle: "aysekara", avatarUrl: avatar(PEOPLE.ayse) },
    text: "Hayırlı olsun, arkadaşlarımla geleceğiz!",
    intent: "praise",
    likes: 3,
    aiReply: "Çok sevindik Ayşe! Arkadaşlarınla gelirsen ilk ders hepinize bizden.",
  },
];
