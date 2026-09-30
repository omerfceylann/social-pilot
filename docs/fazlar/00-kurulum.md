# Faz 0: Proje kurulumu

**Commit:** `6e1c769`

## Amaç

Uygulama kodu yazılmadan önce projenin temelini hazırlamak: framework, bağımlılıklar, kod kalitesi araçları ve klasör yapısı. Bu kararlar sonradan değiştirilmesi en pahalı olanlar, bu yüzden en başta alındı.

## Yapılanlar

- `create-next-app` ile iskelet kuruldu: **Next.js 16.3**, **React 19.2**, TypeScript, Tailwind CSS v4, ESLint. Uygulama kodu `src/` altında, `@/…` import kısayolu aktif.
- Bağımlılıklar:

  | Paket | Ne için |
  | --- | --- |
  | `motion` | Animasyonlar (eski adıyla Framer Motion) |
  | `recharts` | Analitik grafikleri |
  | `lucide-react` | İkonlar |
  | `zustand` | Uygulama state'i + localStorage kalıcılığı |
  | `radix-ui` | Erişilebilir, stilsiz primitive'ler (Dialog, Tabs, Dropdown…) |
  | `class-variance-authority` | Bileşen varyantları (`variant="primary"`) |
  | `clsx` + `tailwind-merge` | `cn()` yardımcısı: sınıf birleştirme |
  | `prettier` + `prettier-plugin-tailwindcss` | Kod formatı + Tailwind sınıf sıralaması |

- Ayar dosyaları:
  - [`next.config.ts`](../../next.config.ts): `images.unsplash.com` görsellerine izin verir (mock içerik görselleri oradan geliyor).
  - [`tsconfig.json`](../../tsconfig.json): `noUncheckedIndexedAccess` açık, `target` ES2022.
  - [`.prettierrc.json`](../../.prettierrc.json), [`.prettierignore`](../../.prettierignore).
  - [`.gitignore`](../../.gitignore): `.claude/settings.local.json` eklendi (makineye özel izin ayarları).
- `package.json` script'leri: `dev`, `build`, `lint`, `typecheck`, `format`.
- Plandaki boş klasör yapısı açıldı: `components/`, `mock/`, `services/`, `store/`, `i18n/`, `lib/`, `types/`.
- `git init` yapıldı ve ilk commit alındı.

## Kavramlar

- **`noUncheckedIndexedAccess`:** `posts[0]` ifadesinin tipi `Post` değil, `Post | undefined` olur. "Liste boşsa ne olacak?" sorusunu derleyici sana sordurur. Mock verilerle çalışırken sessiz `undefined` hatalarını önler.
- **shadcn/ui bir paket değil, bir kalıptır.** Radix primitive'lerinin kaynak kodunu projeye kopyalayıp sahiplenmeyi öneren bir yaklaşım. CLI'ı kullanmadık, çünkü `globals.css` dosyasını kendi token'larıyla yeniden yazıyordu. Aynı parçaları (Radix + cva + cn) doğrudan kurduk. Sonuç aynı mimari, ama tasarım dili tamamen bize ait.

## Next.js 16'daki önemli değişiklikler

Projedeki `AGENTS.md`, bu sürümün önceki bilgilerden farklı olduğunu söylüyor. Yerel dokümanlar `node_modules/next/dist/docs/` altında. Bizi ilgilendirenler:

- **`params` artık bir Promise.** Dinamik route'larda (`content/[id]`) `await params` ile ya da istemci tarafında `use(params)` ile okunur.
- **Tip yardımcıları:** `LayoutProps<"/">` ve `PageProps<"/content/[id]">` route'tan otomatik üretilir. Tipler `next typegen` ile oluşur, bu yüzden `typecheck` script'i önce onu çalıştırıyor.
- **`middleware.ts` yerine `proxy.ts`.** Bizim işimize yaramıyor: onboarding durumu localStorage'da ve sunucu onu göremez, yönlendirme istemci tarafında yapılacak.
- **`next lint` kaldırıldı.** Artık doğrudan `eslint` komutu kullanılıyor.

## Kararlar

| Karar | Seçilen | Neden |
| --- | --- | --- |
| State yönetimi | Zustand + persist | Küçük, Provider gerektirmiyor, bileşen sadece okuduğu dilim değişince render oluyor. localStorage desteği hazır. |
| Görseller | Unsplash URL'leri | Gerçekçi sektör fotoğrafları. Dezavantajı: demo sırasında internet gerekiyor. |
| Sektör verisi | Önce 4 sektör | Mimari 4 sektörle derinlemesine kurulacak, kalan 8 sektör Faz 11'de aynı şablonla eklenecek. |
| Paket yöneticisi | npm | Makinede kurulu olan tek araç. |

## Sorunlar ve çözümleri

1. **`create-next-app` takıldı.** `--no-git` bayrağına rağmen `git add -A` çalıştırıp donmuştu. Süreci durdurdum, yarım kalan `.git` klasörünü (commit'i yoktu) sildim ve git'i elle kurdum.
2. **iCloud, `node_modules` klasörünü bozdu.** Proje ilk başta Masaüstündeydi ve macOS "Masaüstü ve Belgeler"i iCloud'a senkronize ediyordu. iCloud npm'in kurduğu dosyaları buluta taşıyıp yerelde boşalttığı için (`dataless` durumu) ESLint çöktü.
   - **Çözüm:** Proje `~/Projects/socialpilot` klasörüne taşındı ve bağımlılıklar temiz kuruldu.
   - **Genel kural:** JS projelerini iCloud, Dropbox veya OneDrive gibi senkronize klasörlerde tutma.

## Doğrulama

```bash
npm run typecheck && npm run lint && npm run build
```

Üçü de hatasız geçmeli.
