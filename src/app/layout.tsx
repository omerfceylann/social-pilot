import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { DEFAULT_LANGUAGE } from "@/i18n/config";
import { DEFAULT_ACCENT } from "@/lib/theme";
import { themeScript } from "@/lib/themeScript";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: { default: "SocialPilot", template: "%s · SocialPilot" },
  description: "Markan için yapay zekâ destekli sosyal medya asistanı.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // Tema script'i bu attribute'ları ilk boyamadan önce değiştirir;
    // suppressHydrationWarning, React'in bu farkı hata saymamasını sağlar.
    <html
      lang={DEFAULT_LANGUAGE}
      data-mode="dark"
      data-accent={DEFAULT_ACCENT}
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
