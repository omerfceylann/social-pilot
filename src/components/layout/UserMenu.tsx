"use client";

import { Check, ChevronsUpDown, LogOut, Settings, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { Dropdown } from "@/components/ui/Dropdown";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { signOut, switchAccount } from "@/store/auth";
import { useBrand } from "@/store/useBrand";
import { useSession } from "@/store/useSession";
import { useUserDirectory } from "@/store/useUserDirectory";

const MAX_OTHER_ACCOUNTS = 4;

type UserMenuProps = { collapsed: boolean };

type AccountRowProps = { brandName: string; username: string };

const AccountRow = ({ brandName, username }: AccountRowProps) => (
  <>
    <Avatar name={brandName} size="sm" />
    <span className="flex min-w-0 flex-1 flex-col">
      <span className="truncate text-small font-medium text-fg">{brandName}</span>
      <span className="truncate text-caption text-fg-muted">@{username}</span>
    </span>
  </>
);

/**
 * Sidebar'ın altındaki çalışma alanı kartı. Asıl kimlik marka olduğu için marka adı
 * öne çıkar, kullanıcı adı ikincil. İkincil eylemler menüde gizli (spec §47).
 * Menü, bu cihazdaki diğer hesaplara tek tıkla geçişi de sağlar.
 */
export const UserMenu = ({ collapsed }: UserMenuProps) => {
  const { t } = useT();
  const router = useRouter();
  const user = useSession((state) => state.user);
  const brandName = useBrand((state) => state.profile?.name ?? user?.brandName ?? "");
  const entries = useUserDirectory((state) => state.entries);
  const otherAccounts = useMemo(
    () =>
      Object.values(entries)
        .filter((entry) => entry.user.username !== user?.username)
        .toSorted((a, b) => b.lastActiveAt.localeCompare(a.lastActiveAt))
        .slice(0, MAX_OTHER_ACCOUNTS),
    [entries, user?.username],
  );
  if (!user) return null;

  const handleSignOut = () => {
    signOut();
    router.replace("/login");
  };

  /** Mevcut hesap dizine kaydedilir, seçilen hesabın çalışma alanı yüklenir. */
  const handleSwitch = (username: string) => {
    const onboarded = switchAccount(username);
    router.replace(onboarded ? "/" : "/onboarding");
  };

  const handleAddAccount = () => {
    signOut();
    router.replace("/register");
  };

  return (
    <Dropdown>
      <Dropdown.Trigger asChild>
        <button
          type="button"
          aria-label={t("shell.accountMenu")}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-surface-muted",
            collapsed && "justify-center",
          )}
        >
          <Avatar name={brandName} size="sm" />
          {!collapsed && (
            <>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-small font-medium text-fg">{brandName}</span>
                <span className="truncate text-caption text-fg-muted">@{user.username}</span>
              </span>
              <ChevronsUpDown className="size-4 shrink-0 text-fg-muted" aria-hidden />
            </>
          )}
        </button>
      </Dropdown.Trigger>
      <Dropdown.Content side="top" align="start" className="w-64">
        <Dropdown.Label>{t("auth.savedAccounts")}</Dropdown.Label>
        <Dropdown.Item
          disabled
          aria-label={`${brandName}, ${t("shell.currentAccount")}`}
          className="h-auto py-2 data-[disabled]:opacity-100"
        >
          <AccountRow brandName={brandName} username={user.username} />
          <Check className="ml-auto text-accent-text!" aria-hidden />
        </Dropdown.Item>
        {otherAccounts.map((entry) => (
          <Dropdown.Item
            key={entry.user.username}
            className="h-auto py-2"
            onSelect={() => handleSwitch(entry.user.username)}
          >
            <AccountRow brandName={entry.user.brandName} username={entry.user.username} />
          </Dropdown.Item>
        ))}
        <Dropdown.Item icon={<UserPlus />} onSelect={handleAddAccount}>
          {t("shell.addAccount")}
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item icon={<Settings />} onSelect={() => router.push("/settings")}>
          {t("nav.settings")}
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item icon={<LogOut />} onSelect={handleSignOut}>
          {t("shell.signOut")}
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};
