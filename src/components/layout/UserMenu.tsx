"use client";

import { ChevronsUpDown, LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { Dropdown } from "@/components/ui/Dropdown";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { signOut } from "@/store/auth";
import { useBrand } from "@/store/useBrand";
import { useSession } from "@/store/useSession";

type UserMenuProps = { collapsed: boolean };

/**
 * Sidebar'ın altındaki çalışma alanı kartı. Asıl kimlik marka olduğu için marka adı
 * öne çıkar, kullanıcı adı ikincil. İkincil eylemler menüde gizli (spec §47).
 */
export const UserMenu = ({ collapsed }: UserMenuProps) => {
  const { t } = useT();
  const router = useRouter();
  const user = useSession((state) => state.user);
  const brandName = useBrand((state) => state.profile?.name ?? user?.brandName ?? "");
  if (!user) return null;

  const handleSignOut = () => {
    signOut();
    router.replace("/login");
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
      <Dropdown.Content side="top" align="start" className="w-56">
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
