import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Geliştirme göstergesi varsayılan olarak sol altta, sidebar'daki marka kartıyla çakışıyor.
  devIndicators: { position: "bottom-right" },
  images: {
    // Mock içerik görselleri Unsplash'ten geliyor (bkz. src/mock).
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
