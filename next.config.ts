import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Mock içerik görselleri Unsplash'ten geliyor (bkz. src/mock).
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
