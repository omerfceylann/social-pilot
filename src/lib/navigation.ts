import {
  BarChart3,
  CalendarDays,
  Inbox,
  LayoutGrid,
  Settings,
  Sparkles,
  SquarePen,
  type LucideIcon,
} from "lucide-react";
import type { TranslationKey } from "@/i18n/translate";

export type NavItem = {
  href: string;
  label: TranslationKey;
  icon: LucideIcon;
};

/**
 * Ana navigasyon bilerek kısa (spec §8). Trendler, AI Agent, raporlar gibi
 * özellikler ayrı menü öğesi değil, ilgili bölümlerin içinde yaşar.
 */
export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "nav.overview", icon: LayoutGrid },
  { href: "/content", label: "nav.content", icon: SquarePen },
  { href: "/calendar", label: "nav.calendar", icon: CalendarDays },
  { href: "/inbox", label: "nav.inbox", icon: Inbox },
  { href: "/analytics", label: "nav.analytics", icon: BarChart3 },
];

export const SECONDARY_NAV: NavItem[] = [
  { href: "/brand", label: "nav.brand", icon: Sparkles },
  { href: "/settings", label: "nav.settings", icon: Settings },
];

/** "/" sadece tam eşleşmede aktif; diğerleri alt sayfalarda da (ör. /content/123). */
export const isNavActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
