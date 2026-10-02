"use client";

import { LayoutGrid } from "lucide-react";
import { motion } from "motion/react";
import { useId, type ReactNode } from "react";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import type { PlatformFilter } from "@/hooks/useContentLibrary";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { PLATFORMS } from "@/mock/platforms";
import type { PlatformId } from "@/types";

type PlatformFilterBarProps = {
  platforms: PlatformId[];
  value: PlatformFilter;
  onChange: (platform: PlatformFilter) => void;
};

/**
 * İçerikler'de tek seçimli platform filtresi. "Tümü" + platformlar; seçili
 * zemin seçenekler arasında kayar. Mobilde yatay kaydırılır.
 */
export const PlatformFilterBar = ({ platforms, value, onChange }: PlatformFilterBarProps) => {
  const { t } = useT();
  const indicatorId = useId();

  return (
    <div
      role="group"
      aria-label={t("content.filterByPlatform")}
      className="-mx-4 flex [scrollbar-width:none] gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      <FilterOption
        selected={value === null}
        onSelect={() => onChange(null)}
        indicatorId={indicatorId}
        icon={<LayoutGrid className="size-4" aria-hidden />}
        label={t("content.allPlatforms")}
      />
      {platforms.map((platform) => (
        <FilterOption
          key={platform}
          selected={value === platform}
          onSelect={() => onChange(platform)}
          indicatorId={indicatorId}
          icon={
            <PlatformIcon platform={platform} colored={value === platform} className="size-4" />
          }
          label={PLATFORMS[platform].name}
        />
      ))}
    </div>
  );
};

type FilterOptionProps = {
  selected: boolean;
  onSelect: () => void;
  indicatorId: string;
  icon: ReactNode;
  label: string;
};

const FilterOption = ({ selected, onSelect, indicatorId, icon, label }: FilterOptionProps) => (
  <button
    type="button"
    aria-pressed={selected}
    onClick={onSelect}
    className={cn(
      "relative inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-3.5 text-small font-medium",
      "transition-colors duration-150 active:scale-97",
      selected ? "text-fg" : "text-fg-secondary hover:bg-surface-muted hover:text-fg",
    )}
  >
    {selected && (
      <motion.span
        layoutId={indicatorId}
        transition={transition.indicator}
        className="absolute inset-0 rounded-full border border-border-strong bg-surface-raised shadow-xs"
        aria-hidden
      />
    )}
    <span className="relative flex items-center gap-2">
      {icon}
      {label}
    </span>
  </button>
);
