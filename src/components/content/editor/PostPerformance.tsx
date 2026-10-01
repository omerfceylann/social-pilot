"use client";

import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { useT } from "@/i18n/useT";
import { formatCompact, formatDateTime, formatPercent } from "@/lib/format";
import type { PerformanceTier, PostAnalytics } from "@/types";

const TIER_TONE: Record<PerformanceTier, "success" | "warning" | "danger"> = {
  high: "success",
  average: "warning",
  low: "danger",
};

const STAT_KEYS = ["views", "likes", "comments", "shares", "saves"] as const;

type PostPerformanceProps = { analytics: PostAnalytics; publishedAt?: string };

/**
 * Yayınlanan içeriğin performansı (spec §23). Her post iyi gitmez: bazıları
 * ortalama, bazıları zayıf; durum etiketi bunu açıkça söyler.
 */
export const PostPerformance = ({ analytics, publishedAt }: PostPerformanceProps) => {
  const { t, language } = useT();
  return (
    <Card className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-heading">{t("content.editor.performance")}</h2>
          {publishedAt && (
            <span className="text-caption text-fg-muted">
              {t("content.editor.publishedOn", { date: formatDateTime(publishedAt, language) })}
            </span>
          )}
        </div>
        <Badge tone={TIER_TONE[analytics.tier]}>{t(`content.editor.tier.${analytics.tier}`)}</Badge>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
        {STAT_KEYS.map((key) => (
          <div key={key} className="flex flex-col gap-1">
            <dt className="text-caption text-fg-muted">{t(`metrics.${key}`)}</dt>
            <dd>
              <AnimatedNumber
                value={analytics[key]}
                format={(value) => formatCompact(Math.round(value), language)}
                className="text-title tabular-nums"
              />
            </dd>
          </div>
        ))}
        <div className="flex flex-col gap-1">
          <dt className="text-caption text-fg-muted">{t("metrics.engagementRate")}</dt>
          <dd>
            <AnimatedNumber
              value={analytics.engagementRate}
              format={(value) => formatPercent(Number(value.toFixed(1)), language)}
              className="text-title tabular-nums"
            />
          </dd>
        </div>
      </dl>
    </Card>
  );
};
