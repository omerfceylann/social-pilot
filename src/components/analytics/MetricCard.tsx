"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Card } from "@/components/ui/Card";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { formatCompact, formatPercent } from "@/lib/format";
import type { MetricSummary } from "@/types";
import { Sparkline } from "./Sparkline";

type MetricCardProps = { metric: MetricSummary };

/** Sade metrik kartı (spec §9): etiket, büyük değer, değişim ve küçük eğilim çizgisi. */
export const MetricCard = ({ metric }: MetricCardProps) => {
  const { t, language } = useT();
  const format = (value: number) =>
    metric.key === "engagement" ? formatPercent(value, language) : formatCompact(value, language);
  const change = metric.changePct;
  const trend = change > 0 ? "up" : change < 0 ? "down" : "flat";

  return (
    <Card padding="sm" className="flex flex-col gap-3 sm:p-5">
      <p className="text-small text-fg-secondary">{t(`metrics.${metric.key}`)}</p>
      <div className="flex items-end justify-between gap-3">
        <AnimatedNumber value={metric.value} format={format} className="text-title tabular-nums" />
        {trend !== "flat" && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-caption font-medium tabular-nums [&_svg]:size-3.5",
              trend === "up" ? "bg-success-soft text-success" : "bg-danger-soft text-danger",
            )}
            aria-label={`${formatPercent(Math.abs(change), language)} ${t("dashboard.vsPrevious")}`}
          >
            {trend === "up" ? <ArrowUpRight /> : <ArrowDownRight />}
            {formatPercent(Math.abs(change), language)}
          </span>
        )}
      </div>
      <Sparkline values={metric.series.map((point) => point.value)} />
    </Card>
  );
};
