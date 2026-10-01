"use client";

import { motion } from "motion/react";
import { useId } from "react";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { PLATFORMS } from "@/mock/platforms";
import type { PlatformId } from "@/types";

type PlatformSwitcherProps = {
  platforms: PlatformId[];
  value: PlatformId;
  onChange: (platform: PlatformId) => void;
  /** Platform başına bekleyen iş (yanıtsız yorum + okunmamış DM). */
  pending: Map<PlatformId, { comments: number; messages: number }>;
};

/**
 * Gelen Kutusu'nun en üstündeki platform seçici (spec §25). Aktif çizgi
 * platformun kendi renginde ve platformlar arasında kayarak geçer.
 */
export const PlatformSwitcher = ({
  platforms,
  value,
  onChange,
  pending,
}: PlatformSwitcherProps) => {
  const { t } = useT();
  const indicatorId = useId();

  return (
    <div
      role="tablist"
      aria-label={t("inbox.platforms")}
      className="-mx-4 flex [scrollbar-width:none] gap-1 overflow-x-auto border-b border-border px-4 sm:mx-0 sm:px-0"
    >
      {platforms.map((platform) => {
        const active = platform === value;
        const counts = pending.get(platform);
        const total = (counts?.comments ?? 0) + (counts?.messages ?? 0);
        return (
          <button
            key={platform}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(platform)}
            className={cn(
              "relative flex shrink-0 items-center gap-2 px-3 pt-1 pb-3.5 text-body font-medium transition-colors duration-150",
              active ? "text-fg" : "text-fg-secondary hover:text-fg",
            )}
          >
            <PlatformIcon platform={platform} colored={active} className="size-4" />
            {PLATFORMS[platform].name}
            {total > 0 && (
              <span
                className="min-w-5 rounded-full bg-surface-muted px-1.5 text-center text-caption text-fg-secondary tabular-nums"
                aria-label={t("inbox.pendingCount", { count: total })}
              >
                {total}
              </span>
            )}
            {active && (
              <motion.span
                layoutId={indicatorId}
                transition={transition.indicator}
                className="absolute inset-x-2 -bottom-px h-0.5 rounded-full"
                style={{ backgroundColor: PLATFORMS[platform].color }}
                aria-hidden
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
