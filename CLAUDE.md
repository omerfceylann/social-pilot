@AGENTS.md

# Çalışma kuralları

- Ürün gereksinimleri `PROJECT_SPEC.md` dosyasında. Uygulama faz faz ilerliyor; fazların listesi ve durumu `docs/fazlar/README.md` içinde.
- Kullanıcı projeyi öğrenmek ve devralmak istiyor. Türkçe açıkla: ne yapıldı, hangi dosyalar, neden, nasıl çalışıyor, hangi kavramlar var.
- Her fazın sonunda:
  1. `docs/fazlar/NN-konu.md` dosyasına fazın özetini yaz (amaç, yapılanlar, nasıl çalışıyor, kavramlar, kararlar, sorunlar, doğrulama) ve `docs/fazlar/README.md` tablosunu güncelle.
  2. `npm run typecheck && npm run lint && npm run build` çalıştır.
  3. Commit al; sonra durup kullanıcının onayını bekle.
- Faz içinde önemli ara noktalarda da commit al.
