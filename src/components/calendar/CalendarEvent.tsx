"use client";

import { AISparkle } from "@/components/ai/AIBadge";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import type { CalendarItem } from "@/lib/content";
import { formatDateTime } from "@/lib/format";
import { PLATFORMS } from "@/mock/platforms";
import type { CalendarStatus } from "@/types";

/**
 * Durumun görsel dili; takvimin her yerinde (çip, nokta, açıklama) aynı:
 * yayınlanan yeşil, planlanan accent, taslak nötr, öneri kesik çizgili + ✦.
 */
export const STATUS_STYLE: Record<CalendarStatus, { chip: string; dot: string }> = {
  published: { chip: "bg-success-soft text-fg", dot: "bg-success" },
  scheduled: { chip: "bg-accent-soft text-fg", dot: "bg-accent" },
  draft: { chip: "bg-surface-muted text-fg-secondary", dot: "bg-fg-muted" },
  suggested: {
    chip: "border border-dashed border-accent/40 text-fg-secondary",
    dot: "border border-accent bg-transparent",
  },
};

type CalendarEventProps = {
  item: CalendarItem;
  onOpen: (item: CalendarItem) => void;
  /** "compact": ay hücresinde tek satır. "card": hafta sütununda iki satır. */
  variant?: "compact" | "card";
};

/** Takvimdeki bir içerik: platform ikonu, saat, başlık. Tıklanınca detay açılır. */
export const CalendarEvent = ({ item, onOpen, variant = "compact" }: CalendarEventProps) => {
  const { t, language } = useT();
  const time = formatDateTime(item.date, language, { hour: "2-digit", minute: "2-digit" });
  const label = `${t(`postStatus.${item.status}`)}: ${item.title || t("content.untitled")}, ${time}, ${PLATFORMS[item.platform].name}`;

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={label}
      className={cn(
        "w-full rounded-md text-left transition-[filter,transform] duration-150 hover:brightness-95 active:scale-[0.98] dark:hover:brightness-125",
        STATUS_STYLE[item.status].chip,
        variant === "compact"
          ? "flex items-center gap-1.5 px-1.5 py-1 text-caption"
          : "flex flex-col gap-1 px-2.5 py-2 text-small",
      )}
    >
      <span className="flex min-w-0 items-center gap-1.5">
        <PlatformIcon platform={item.platform} colored className="size-3.5 shrink-0" />
        <span className="shrink-0 text-fg-secondary tabular-nums">{time}</span>
        {variant === "compact" && (
          <span className="flex min-w-0 items-center gap-1 truncate">
            {item.status === "suggested" && <AISparkle className="text-accent-text" />}
            <span className="truncate">{item.title || t("content.untitled")}</span>
          </span>
        )}
      </span>
      {variant === "card" && (
        <span className="line-clamp-2 font-medium">
          {item.status === "suggested" && <AISparkle className="mr-1 text-accent-text" />}
          {item.title || t("content.untitled")}
        </span>
      )}
    </button>
  );
};
