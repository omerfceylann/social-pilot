# Faz 1: Tasarım sistemi

**Commit:** `6b1c56b`

## Amaç

Ekranlara geçmeden önce uygulamanın görsel dilini tek bir yerde tanımlamak: renkler, tipografi, boşluklar, köşe yarıçapları, animasyonlar ve temel bileşenler. Spec "bileşenleri rastgele yeniden renklendirme" diyor (§4). Her şey token'lardan beslendiği için tema değiştirmek tek satırlık bir iş, ekranlar da birbiriyle tutarlı kalıyor.

## Yapılanlar

### Tema ve token'lar

| Dosya | Görevi |
| --- | --- |
| [`src/app/globals.css`](../../src/app/globals.css) | Tüm renk, gölge, radius, tipografi ve animasyon token'ları |
| [`src/lib/theme.ts`](../../src/lib/theme.ts) | Accent listesi, mod tipleri, varsayılanlar, storage anahtarı |
| [`src/lib/themeScript.ts`](../../src/lib/themeScript.ts) | `<head>` içinde ilk boyamadan önce çalışan tema script'i |
| [`src/store/usePreferences.ts`](../../src/store/usePreferences.ts) | Mod, accent ve dil tercihi (Zustand + localStorage) |
| [`src/components/providers/ThemeSync.tsx`](../../src/components/providers/ThemeSync.tsx) | Store değişince `<html>` attribute'larını günceller |
| [`src/components/providers/StoreHydration.tsx`](../../src/components/providers/StoreHydration.tsx) | Kalıcı store'ları sayfa yüklendikten sonra localStorage'dan okur |
| [`src/components/providers/Providers.tsx`](../../src/components/providers/Providers.tsx) | İstemci tarafı sağlayıcılar: Motion, Tooltip, Toaster |
| [`src/app/layout.tsx`](../../src/app/layout.tsx) | Inter fontu, tema script'i, Providers |

### Yardımcılar

- [`src/lib/cn.ts`](../../src/lib/cn.ts): sınıf birleştirme, özel tipografi skalasını tanıyan `tailwind-merge` ile.
- [`src/lib/motion.ts`](../../src/lib/motion.ts): süreler, easing'ler ve hazır varyantlar (sayfa geçişi, AI önerisi açılışı, sıralı liste).

### Bileşenler: `src/components/ui/`

| Bileşen | Not |
| --- | --- |
| `Button` | `primary` / `secondary` / `ghost` / `soft` / `danger` varyantları, `loading`, `asChild`, tıklamada hafif küçülme |
| `IconButton` | `label` zorunlu (erişilebilirlik), otomatik tooltip |
| `Card` | `interactive` varyantı: hover'da hafif yükselme |
| `Badge` | Durum tonları: neutral, accent, success, warning, danger, outline |
| `Tabs` | Compound bileşen, `segmented` ve `underline` görünümleri, kayan animasyonlu gösterge |
| `Modal` | Masaüstünde ortada açılır, mobilde alttan açılan sheet olur |
| `Drawer` | Yandan kayarak açılan panel |
| `Dropdown` | İkincil eylemler için "…" menüsü |
| `Tooltip`, `Avatar`, `Skeleton`, `Switch`, `Spinner` | |
| `Field` + `Input` / `Textarea` | Etiket, yardım ve hata metnini `id`/`aria` ile otomatik bağlar |
| `Toaster` + [`store/useToasts.ts`](../../src/store/useToasts.ts) | `toast.success("…")` her yerden çağrılabilir |
| [`ai/AIBadge`](../../src/components/ai/AIBadge.tsx) | AI'ın tek görsel imzası: ✦ + accent tonu |

### Vitrin sayfası

[`src/app/dev/ui/page.tsx`](../../src/app/dev/ui/page.tsx): tüm bileşenleri mod ve accent seçiciyle gösteren **geçici** bir sayfa. Faz 12'de silinecek. Adres: `http://localhost:3000/dev/ui`

## Nasıl çalışıyor

### 1. Token katmanları

```
Nötr renkler (moda göre)     →  --bg, --surface, --text, --border …
Accent (temaya göre)         →  sadece --accent-h / -c / -l (ton, doygunluk, açıklık)
Türetilmiş renkler           →  --accent, --accent-soft, --accent-text … (oklch + color-mix ile)
@theme inline                →  bg-surface, text-fg-muted, bg-accent … (Tailwind sınıfları)
```

Bileşenler **hiçbir zaman** `dark:` öneki veya ham renk kullanmaz. Mod değişince değişkenler değişir, sınıflar aynı kalır.

### 2. Temanın uygulanması

```
localStorage ──▶ themeScript (<head>, ilk boyamadan önce) ──▶ <html data-mode data-accent lang>
     ▲                                                                   ▲
usePreferences (Zustand + persist) ──────▶ ThemeSync (değişince) ────────┘
```

1. Sayfa açılırken `themeScript` tercihi okur ve `<html>` etiketine yazar. Kayıtlı tercih yoksa işletim sisteminin ayarını kullanır. Kullanıcı yanlış temayı hiç görmez.
2. React yüklenince `StoreHydration`, Zustand store'unu localStorage'dan doldurur.
3. Kullanıcı tema değiştirdiğinde store güncellenir, `ThemeSync` bunu `<html>` etiketine yansıtır, `persist` de localStorage'a yazar.

## Kavramlar

- **OKLCH renk uzayı:** `oklch(L C H)` sırasıyla algısal açıklık, doygunluk ve ton. Aynı `L` değerine sahip farklı tonlar göze eşit parlaklıkta görünür. 6 accent temasının birbirine denk ağırlıkta durmasının nedeni bu.
- **`color-mix()`:** `color-mix(in oklab, var(--accent) 12%, transparent)` ifadesi accent renginin %12 opak bir hâlini üretir. Her tema için ayrı "soft" renk yazmaya gerek kalmaz.
- **Server Component ve Client Component:** `layout.tsx` sunucuda çalışır ve hook kullanamaz. Hook gerektiren her şey `"use client"` ile işaretli `Providers` dosyasının içinde.
- **Hydration mismatch:** Sunucu localStorage'ı göremez. Store tarayıcıda farklı bir değerle başlarsa, iki taraftaki HTML tutmaz ve React hata verir. Bu yüzden store'lar `skipHydration: true` ile başlıyor ve localStorage'dan okuma sayfa yüklendikten sonra `rehydrate()` ile yapılıyor.
- **Zustand seçicileri:** `usePreferences(s => s.accent)` sadece `accent` değişince yeniden render eder. `useToasts.getState()` ise React dışından (servisler, event handler'lar) store'a erişmeyi sağlar.
- **`cva` (class-variance-authority):** Varyantları nesne olarak tanımlar ve TypeScript tipini otomatik üretir.
- **`asChild` (Radix Slot):** `<Button asChild><Link/></Button>` yazınca Link, butonun stilini alır. Gezinme `<a>`, eylem `<button>` olarak kalır, yani HTML semantiği doğru olur.
- **Compound component:** `Tabs`, `Tabs.List` ve `Tabs.Trigger` ortak durumu bir React Context üzerinden paylaşır. Kullanan kişi parçaları istediği gibi dizebilir.
- **`layoutId` (Motion):** Aynı `layoutId` başka bir yerde render edildiğinde Motion öğeyi eski konumundan yenisine kaydırır. Sekme göstergesinin kayması bu şekilde yapılıyor.
- **`forceMount` + `AnimatePresence`:** Radix bir pencereyi kapandığı anda DOM'dan kaldırır. `forceMount` bu kararı Motion'a devreder ve Motion çıkış animasyonu bitene kadar öğeyi ekranda tutar.
- **React 19'da `ref` sıradan bir prop.** `forwardRef` sarmalayıcısına gerek yok.

## Kararlar

| Karar | Seçilen | Alternatif | Neden |
| --- | --- | --- | --- |
| Tema mekanizması | `data-mode` / `data-accent` attribute + CSS değişkenleri | `dark:` sınıfları | Mod veya accent değişince tek bir attribute değişiyor; bileşenlere dokunmak gerekmiyor. |
| Accent tanımı | Tema başına ton + doygunluk + açıklık | Tema başına tam palet | 6 tema × 2 mod = 12 palet yerine 6 satır. |
| Toast | Kendi küçük store'umuz | Radix Toast | Daha az kod, toast'lar React dışından da tetiklenebiliyor. |
| Açık accent'ler | Emerald ve amber'de koyu buton metni | Hepsinde beyaz metin | Açık zemin üzerinde beyaz metin yetersiz kontrast veriyor. |

## Sorunlar ve çözümleri

1. **Dark modda sekme göstergesi görünmüyordu.** Gösterge (`surface-elevated`), bulunduğu kaptan (`surface-muted`) daha koyuydu. Her iki modda da zeminden açık kalan yeni bir `surface-raised` token'ı eklendi. Ders: light modu ters çevirmek yetmez, her mod ayrı düşünülmeli.
2. **Light modda sarı "Bekliyor" badge'i okunmuyordu.** Durum renkleri (success, warning, danger) moda göre ayrı açıklıklarla tanımlandı.
3. **`tailwind-merge` yazı boyutu sınıflarını siliyordu.** `text-caption` sınıfını renk sanıp `text-fg-secondary` ile çakıştırdığı için Badge 12px yerine 14px görünüyordu. `cn.ts` içinde `extendTailwindMerge` ile özel skala tanıtıldı, Prettier'a da `tailwindStylesheet` ayarı verildi. Ders: özel token eklediğinde, sınıfları işleyen araçlara da tanıt. Bu tür hatalar derleme hatası vermez, sadece ekrana bakınca yakalanır.
4. **Yüklenme durumundaki buton soluk görünüyordu.** `disabled` opaklığı, `aria-busy` (yükleniyor) durumunda uygulanmayacak şekilde ayarlandı.

## Doğrulama

- `npm run typecheck && npm run lint && npm run build` hatasız geçiyor.
- `/dev/ui` sayfasında şunlar test edildi:
  - Dark ve light mod.
  - Emerald accent seçip sayfayı yenileyince tercihin korunması.
  - Modal, toast ve dropdown'ın açılıp kapanması.
  - 375px genişlikte yatay taşma olmaması ve modalın alttan açılan sheet olarak görünmesi.
  - Konsolda hata olmaması.
