"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconButton } from "@/components/ui/IconButton";
import { Tooltip } from "@/components/ui/Tooltip";
import { useInboxBadge } from "@/hooks/useInboxBadge";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { isNavActive, PRIMARY_NAV, SECONDARY_NAV, type NavItem } from "@/lib/navigation";
import { usePreferences } from "@/store/usePreferences";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";

const WIDTH = { expanded: 248, collapsed: 76 } as const;

type SidebarLinkProps = {
  item: NavItem;
  active: boolean;
  collapsed: boolean;
  badge?: number;
};

const SidebarLink = ({ item, active, collapsed, badge = 0 }: SidebarLinkProps) => {
  const { t } = useT();
  const label = t(item.label);
  const Icon = item.icon;

  const link = (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      aria-label={collapsed ? label : undefined}
      className={cn(
        "relative flex h-10 items-center gap-3 rounded-lg px-3 transition-colors duration-150",
        active ? "text-fg" : "text-fg-secondary hover:text-fg",
        collapsed && "justify-center px-0",
      )}
    >
      {active && (
        <motion.span
          layoutId="sidebar-active"
          transition={transition.indicator}
          className="absolute inset-0 rounded-lg bg-surface-muted"
          aria-hidden
        />
      )}
      <span className="relative">
        <Icon className="size-[18px]" strokeWidth={active ? 2.2 : 1.8} aria-hidden />
        {collapsed && badge > 0 && (
          <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-accent ring-2 ring-surface" />
        )}
      </span>
      {!collapsed && (
        <>
          <span className="relative flex-1 truncate text-body font-medium">{label}</span>
          {badge > 0 && (
            <span className="relative rounded-full bg-accent-soft px-1.5 text-caption font-medium text-accent-text tabular-nums">
              {badge}
            </span>
          )}
        </>
      )}
    </Link>
  );

  return collapsed ? (
    <Tooltip content={label} side="right">
      {link}
    </Tooltip>
  ) : (
    link
  );
};

/** Masaüstü (≥1024px) tam, tablet (768–1023px) ikon şeridi; mobilde gizli. */
export const Sidebar = () => {
  const { t } = useT();
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const collapsedPreference = usePreferences((state) => state.sidebarCollapsed);
  const toggleSidebar = usePreferences((state) => state.toggleSidebar);
  const inboxBadge = useInboxBadge();
  const collapsed = !isDesktop || collapsedPreference;

  const renderItem = (item: NavItem) => (
    <li key={item.href}>
      <SidebarLink
        item={item}
        active={isNavActive(item.href, pathname)}
        collapsed={collapsed}
        badge={item.href === "/inbox" ? inboxBadge : 0}
      />
    </li>
  );

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? WIDTH.collapsed : WIDTH.expanded }}
      transition={transition.base}
      className="sticky top-0 hidden h-dvh shrink-0 flex-col overflow-hidden border-r border-border bg-surface md:flex"
    >
      <div
        className={cn(
          "flex h-16 shrink-0 items-center px-5",
          collapsed ? "justify-center px-0" : "justify-between",
        )}
      >
        <Link href="/" aria-label="SocialPilot" className="rounded-lg">
          <Logo showWordmark={!collapsed} />
        </Link>
        {isDesktop && !collapsed && (
          <IconButton
            label={t("shell.collapseSidebar")}
            icon={<PanelLeftClose />}
            size="sm"
            onClick={toggleSidebar}
          />
        )}
      </div>

      <nav aria-label={t("shell.primaryNav")} className="flex flex-1 flex-col gap-6 px-3 pt-4">
        <ul className="flex flex-col gap-1">{PRIMARY_NAV.map(renderItem)}</ul>
        <div className="mx-3 border-t border-border" />
        <ul className="flex flex-col gap-1">{SECONDARY_NAV.map(renderItem)}</ul>
      </nav>

      <div className="flex flex-col gap-2 p-3">
        {isDesktop && collapsed && (
          <div className="flex justify-center">
            <IconButton
              label={t("shell.expandSidebar")}
              icon={<PanelLeftOpen />}
              size="sm"
              onClick={toggleSidebar}
            />
          </div>
        )}
        <UserMenu collapsed={collapsed} />
      </div>
    </motion.aside>
  );
};
