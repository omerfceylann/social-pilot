"use client";

import { TrendingUp } from "lucide-react";
import { AIInsight } from "@/components/ai/AIInsight";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Badge } from "@/components/ui/Badge";
import { Drawer } from "@/components/ui/Drawer";
import { useT } from "@/i18n/useT";
import type { Trend } from "@/types";

type TrendsDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trends: Trend[];
};

/**
 * Trendler ayrı bir menü öğesi değil (spec §8); dashboard'dan açılan bir panel.
 * Her trend için büyüme ve markaya nasıl uyarlanacağına dair ✦ AI içgörüsü.
 */
export const TrendsDrawer = ({ open, onOpenChange, trends }: TrendsDrawerProps) => {
  const { t } = useT();
  const sorted = trends.toSorted((a, b) => b.momentum - a.momentum);

  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={t("trends.title")}
      description={t("trends.subtitle")}
      closeLabel={t("common.close")}
    >
      <ul className="flex flex-col divide-y divide-border">
        {sorted.map((trend) => (
          <li key={trend.id} className="flex flex-col gap-3 px-6 py-5">
            <div className="flex items-center justify-between gap-3">
              <Badge tone="outline">{t(`trends.category.${trend.category}`)}</Badge>
              <span className="inline-flex items-center gap-1 text-caption font-medium text-success tabular-nums">
                <TrendingUp className="size-3.5" aria-hidden />
                {t("trends.momentum", { value: trend.momentum })}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-heading">{trend.title}</h3>
              <p className="text-small text-fg-secondary">{trend.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {trend.platforms.map((platform) => (
                <PlatformIcon key={platform} platform={platform} colored className="size-4" />
              ))}
              <span className="text-caption text-fg-muted">{trend.hashtags.join(" ")}</span>
            </div>
            <AIInsight label={t("ai.insight")}>{trend.insight}</AIInsight>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};
