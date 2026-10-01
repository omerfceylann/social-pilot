"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useInboxBadge } from "@/hooks/useInboxBadge";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { isNavActive, PRIMARY_NAV } from "@/lib/navigation";

/**
 * Mobilde (<768px) alttaki 5 ana sekme: başparmakla ulaşılabilir (spec §43).
 * Marka ve Ayarlar üstteki menüde; alt çubuk sadece günlük kullanılanlar için.
 */
export const MobileNav = () => {
  const { t } = useT();
  const pathname = usePathname();
  const inboxBadge = useInboxBadge();

  return (
    <nav
      aria-label={t("shell.primaryNav")}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
    >
      {/* Eşit hücre yerine içerik kadar genişlik: "Gelen Kutusu" 320px'te de taşmaz. */}
      <ul className="flex">
        {PRIMARY_NAV.map((item) => {
          const active = isNavActive(item.href, pathname);
          const Icon = item.icon;
          const showBadge = item.href === "/inbox" && inboxBadge > 0;
          return (
            <li key={item.href} className="flex-auto">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 transition-colors duration-150",
                  active ? "text-accent-text" : "text-fg-muted",
                )}
              >
                <span className="relative flex h-7 w-12 items-center justify-center">
                  {active && (
                    <motion.span
                      layoutId="mobile-nav-active"
                      transition={transition.indicator}
                      className="absolute inset-0 rounded-full bg-accent-soft"
                      aria-hidden
                    />
                  )}
                  <Icon className="relative size-5" strokeWidth={active ? 2.2 : 1.8} aria-hidden />
                  {showBadge && (
                    <span className="absolute top-0.5 right-2.5 size-2 rounded-full bg-accent ring-2 ring-surface" />
                  )}
                </span>
                <span className="text-caption font-medium whitespace-nowrap">{t(item.label)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
