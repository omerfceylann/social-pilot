"use client";

import type { ReactNode } from "react";
import { useT } from "@/i18n/useT";
import { MobileNav } from "./MobileNav";
import { MobileTopbar } from "./MobileTopbar";
import { PreferenceToggles } from "./PreferenceToggles";
import { Sidebar } from "./Sidebar";

type AppShellProps = { children: ReactNode };

/**
 * Uygulama kabuğu. Masaüstü/tablette sidebar, mobilde üst çubuk + alt sekmeler.
 * Mobilde alt çubuk içeriğin üstüne binmesin diye ana alana alt boşluk verilir.
 */
export const AppShell = ({ children }: AppShellProps) => {
  const { t } = useT();
  return (
    <div className="flex min-h-dvh">
      <a
        href="#main"
        className="sr-only rounded-lg bg-surface-elevated px-4 py-2 text-body text-fg shadow-md focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        {t("shell.skipToContent")}
      </a>
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <MobileTopbar />
        <main
          id="main"
          tabIndex={-1}
          className="relative flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] focus:outline-none md:pb-0"
        >
          {/* Masaüstünde sağ üst köşe; sayfayla birlikte kayar. Mobilde üst çubukta. */}
          <PreferenceToggles className="absolute top-4 right-4 z-10 hidden md:flex lg:right-6" />
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
};
