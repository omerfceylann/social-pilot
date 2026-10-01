"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Logo } from "@/components/layout/Logo";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { useT } from "@/i18n/useT";

type AuthLayoutProps = { children: ReactNode };

/** Masaüstünde form + ürün vitrini; mobilde sadece form (kayda giden yol kısa kalsın). */
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { t } = useT();
  return (
    <div className="grid min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="flex flex-col px-5 py-6 sm:px-10 sm:py-8">
        <Logo />
        <main className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-sm">{children}</div>
        </main>
        <p className="text-center text-caption text-fg-muted">{t("auth.prototypeNote")}</p>
      </div>

      <aside className="relative hidden overflow-hidden border-l border-border bg-surface lg:flex lg:flex-col lg:justify-center lg:px-16">
        {/* Accent'in çok hafif yansıması: dikkat çekmeden derinlik verir (spec §2). */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 size-[480px] rounded-full bg-accent-soft blur-3xl"
        />
        <div className="relative flex max-w-md flex-col gap-10">
          <h2 className="text-title">{t("auth.showcaseTitle")}</h2>
          <ul className="flex flex-col gap-4">
            {(["auth.showcasePoint1", "auth.showcasePoint2", "auth.showcasePoint3"] as const).map(
              (key) => (
                <li key={key} className="flex items-center gap-3 text-body-lg text-fg-secondary">
                  <span className="flex size-6 items-center justify-center rounded-full bg-accent-soft text-accent-text [&_svg]:size-3.5">
                    <Check strokeWidth={2.5} />
                  </span>
                  {t(key)}
                </li>
              ),
            )}
          </ul>

          <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface-elevated p-5 shadow-md">
            <div className="flex items-center justify-between">
              <AIBadge>{t("ai.suggestion")}</AIBadge>
              <span className="flex items-center gap-1.5 text-caption text-fg-muted">
                <PlatformIcon platform="instagram" colored className="size-4" />
                {t("formats.reel")}
              </span>
            </div>
            <p className="text-heading">Sabah 07:00: İlk demleme</p>
            <p className="text-small text-fg-secondary">
              Perde arkası Reel&apos;lerin ortalamadan %34 daha fazla etkileşim aldı.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

/** Form başlığı: kayıt ve giriş ekranlarında aynı hiyerarşi. */
export const AuthHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-8 flex flex-col gap-2">
    <h1 className="text-title sm:text-display">{title}</h1>
    <p className="text-body-lg text-fg-secondary">{subtitle}</p>
  </div>
);
