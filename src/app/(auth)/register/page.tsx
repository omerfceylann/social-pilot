import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

export const metadata: Metadata = { title: "Kayıt ol" };

/** GEÇİCİ: Faz 4'te gerçek ekranla değiştirilecek. Şimdilik demo kullanıcıyı /dev/seed oluşturur. */
export default function RegisterPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 p-6 text-center">
      <Logo />
      <h1 className="text-title">Kayıt ol</h1>
      <p className="text-body text-fg-secondary">{"Bu ekran Faz 4'te hazırlanacak."}</p>
      <Link href="/dev/seed" className="text-body font-medium text-accent-text underline">
        Demo kullanıcıyla devam et
      </Link>
    </main>
  );
}
