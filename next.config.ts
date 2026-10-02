import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next'in geliştirme göstergesi (köşedeki "N" butonu) kapalı; derleme ve çalışma
  // zamanı hataları yine ekranda gösterilir.
  devIndicators: false,
  images: {
    // Mock içerik görselleri Unsplash'ten geliyor (bkz. src/mock/images.ts).
    // URL nesnesi biçimi ("new URL(...)") sorgu parametresini yasaklar; bizim adreslerde
    // kırpma parametreleri (?w=…&h=…&fit=crop) var. Host tek alan adına kilitli olduğu
    // için search'ü serbest bırakmak güvenli.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
};

export default nextConfig;
