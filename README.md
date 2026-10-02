# SocialPilot

Küçük işletmeler için yapay zekâ destekli sosyal medya asistanı. Markanı tanıyor, sektörüne göre içerik öneriyor, yorumlara marka tonunda yanıt hazırlıyor ve paylaştıklarının nasıl gittiğini gösteriyor.

Bu bir **frontend prototipi**. Arka uç yok: yapay zekâ, sosyal medya bağlantıları ve analitik gerçekçi mock verilerle taklit ediliyor. Her şey tarayıcıda çalışıyor ve veriler `localStorage`'da tutuluyor.

## Neler var

- **Onboarding.** Yeni ya da mevcut marka için ayrı akış: sektör, kişilik, içerik stili, kurallar, ardından AI'ın hazırladığı marka profili.
- **12 sektör.** Restoran, teknoloji, fitness, moda, e-ticaret, güzellik, eğitim, gayrimenkul, yerel hizmet, sağlık, otomotiv, seyahat. Her birinin kendi öneri, post, yorum ve mesaj verisi var.
- **Hesap bağlama.** Instagram, TikTok, YouTube, X ve LinkedIn. "Kullandığım platformlar" seçildiyse geçmişli veri, seçilmediyse yeni hesap verisi yüklenir.
- **İçerikler.** AI önerileri, taslaklar, planlananlar ve yayınlananlar; platforma göre filtreleme.
- **İçerik editörü.** Her alan için AI alternatifleri, biçime göre alanlar (örneğin Hikâye'de açıklama yok), medya yükleme ve AI medya analizi, her platform için gerçekçi önizleme. AI'ın içeriği hazırladığı ya da içeriğin eksiksiz taşınabildiği platformlar ✦ ile işaretli.
- **Gelen Kutusu.** Platform bazında yorumlar ve DM'ler, her birine düzenlenebilir AI yanıtı.
- **Takvim.** Ay ve hafta görünümü, gün seçici, yayınlanan, planlanan ve önerilen içerikler bir arada.
- **Analitik.** 7 ve 30 günlük metrikler, grafik, en iyi içerikler, AI içgörüsü ve öneri.
- **Marka ve Ayarlar.** Profil, marka DNA'sı, içerik kuralları, bağlı hesaplar, tema (açık/koyu, 6 vurgu rengi), dil (TR/EN), bildirimler.
- **Birden fazla hesap.** Aynı cihazda hesaplar arasında geçiş.

## Demo akışı

1. Hesap oluştur, "Yeni bir marka oluşturuyorum"u seç.
2. Sektör, kişilik, içerik stili ve kuralları belirle; AI profilini hazırlasın.
3. Instagram ve TikTok'u bağla, panele geç.
4. İçerikler'den bir öneri seç, editörde AI alternatiflerini dene, kitaplıktan bir video seç.
5. Paylaş. Gönderi Analitik'te görünür, ilk yorumlar Gelen Kutusu'na düşer.
6. Gelen Kutusu'nda AI yanıtını düzenleyip gönder, Takvim'de paylaşılanı ve önerileri gör.

Şifre yok: giriş sadece kullanıcı adıyla yapılıyor.

## Teknolojiler

| | |
|---|---|
| Çatı | Next.js 16 (App Router), React 19 |
| Dil | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Stil | Tailwind CSS 4, container query'ler, CSS değişkenleriyle tema |
| Bileşenler | Radix UI, lucide-react |
| Durum | Zustand (`persist` ile `localStorage`) |
| Animasyon | Motion |
| Grafik | Recharts |

## Kurulum

Node.js 20.9 veya üstü gerekir.

```bash
npm install
npm run dev
```

Uygulama [http://localhost:4000](http://localhost:4000) adresinde açılır.

| Komut | Ne yapar |
|---|---|
| `npm run dev` | Geliştirme sunucusu (port 4000) |
| `npm run build` | Üretim derlemesi |
| `npm run start` | Derlenmiş uygulamayı çalıştırır |
| `npm run typecheck` | Rota tiplerini üretir ve TypeScript kontrolü yapar |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Proje yapısı

```
src/
  app/          Rotalar: (auth) giriş/kayıt, onboarding, (app) panel sayfaları
  components/   Sayfa bileşenleri ve ui/ altında ortak bileşenler
  hooks/        Sayfaların mantığı (useContentEditor, useInboxView, useCalendar…)
  store/        Zustand store'ları; workspace.ts store'ları birlikte yöneten tek yer
  services/     Mock API katmanı: AI, analitik, hesap, marka
  lib/          Saf yardımcılar: içerik kuralları, tarih, biçimlendirme, tema
  mock/         Sektör verileri, platform bilgileri, görseller, müzik
  i18n/         Türkçe ve İngilizce sözlükler
  types/        Paylaşılan tipler
```

Birkaç tasarım kararı:

- **Tek kaynak.** Postlar ve öneriler tek bir store'da duruyor; İçerikler, Takvim ve Analitik aynı veriden türetiliyor. Bir taslak paylaşılınca her ekran kendiliğinden güncelleniyor.
- **Mock servisler.** Bileşenler veriye doğrudan değil `services/` üzerinden erişiyor ve servisler gerçek bir API gibi kısa gecikmeyle yanıt veriyor. Gerçek arka uca geçmek için sadece bu katman değişir.
- **Adres de durum.** Sekme, filtre, takvim görünümü ve açık konuşma URL'de tutuluyor; yenileyince ya da link paylaşınca aynı görünüm açılıyor.
- **Biçime göre alanlar.** Hangi platform ve biçimde hangi alanların olduğu `lib/content.ts` içindeki `fieldsFor` fonksiyonundan geliyor. Editör, önizleme ve paylaşım kontrolü aynı kaynağı okuyor.

## Yayına alma

Proje ortam değişkeni istemiyor. Vercel'de GitHub deposunu içe aktarmak yeterli; Next.js ayarları otomatik algılanır. Her ziyaretçi kendi tarayıcısında sıfırdan bir demo kurar.
