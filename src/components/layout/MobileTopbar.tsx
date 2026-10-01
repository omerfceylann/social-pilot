"use client";

import { LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Drawer } from "@/components/ui/Drawer";
import { IconButton } from "@/components/ui/IconButton";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { isNavActive, SECONDARY_NAV } from "@/lib/navigation";
import { signOut } from "@/store/auth";
import { useBrand } from "@/store/useBrand";
import { useSession } from "@/store/useSession";
import { Logo } from "./Logo";
import { LanguageSwitch, ThemeToggle } from "./PreferenceToggles";

/** Mobilde (<768px) üst çubuk ve ikincil menü (Marka, Ayarlar, çıkış). */
export const MobileTopbar = () => {
  const { t } = useT();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSession((state) => state.user);
  const brandName = useBrand((state) => state.profile?.name ?? user?.brandName ?? "");

  const handleSignOut = () => {
    setMenuOpen(false);
    signOut();
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-bg/85 px-4 backdrop-blur-lg md:hidden">
      <Link href="/" aria-label="SocialPilot" className="rounded-lg">
        <Logo />
      </Link>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <IconButton
          label={t("shell.openMenu")}
          icon={<Menu />}
          showTooltip={false}
          onClick={() => setMenuOpen(true)}
        />
      </div>

      <Drawer
        open={menuOpen}
        onOpenChange={setMenuOpen}
        title={t("shell.menu")}
        closeLabel={t("common.close")}
        className="max-w-xs"
      >
        <div className="flex h-full flex-col gap-6 p-4">
          {user && (
            <div className="flex items-center gap-3 px-2">
              <Avatar name={brandName} />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-body font-medium text-fg">{brandName}</span>
                <span className="truncate text-caption text-fg-muted">@{user.username}</span>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between gap-3 px-3">
            <span className="text-small font-medium text-fg-secondary">{t("shell.language")}</span>
            <LanguageSwitch />
          </div>
          <ul className="flex flex-col gap-1">
            {SECONDARY_NAV.map((item) => {
              const Icon = item.icon;
              const active = isNavActive(item.href, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-12 items-center gap-3 rounded-lg px-3 text-body font-medium transition-colors",
                      active
                        ? "bg-surface-muted text-fg"
                        : "text-fg-secondary hover:bg-surface-muted",
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                    {t(item.label)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={handleSignOut}
            className="mt-auto flex h-12 items-center gap-3 rounded-lg px-3 text-body font-medium text-fg-secondary transition-colors hover:bg-surface-muted"
          >
            <LogOut className="size-5" aria-hidden />
            {t("shell.signOut")}
          </button>
        </div>
      </Drawer>
    </header>
  );
};
