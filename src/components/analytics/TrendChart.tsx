"use client";

import { useId } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipContentProps,
} from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { useT } from "@/i18n/useT";
import { formatCompact, formatDateTime, formatPercent } from "@/lib/format";
import type { DailyPoint, MetricKey } from "@/types";

type TrendChartProps = {
  metric: MetricKey;
  series: DailyPoint[];
};

/** "2026-10-01" → yerel gün başı (UTC kayması olmasın diye elle ayrıştırılır). */
const parseDay = (key: string) => {
  const [year = 0, month = 1, day = 1] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};

/**
 * Tek grafik (spec §29: grafikleri az ve net etiketli kullan). Seçili metriğin günlük
 * seyri; eksenler ve ipucu etiketli. Renkler tema değişkenlerinden: tema ve accent
 * değişince grafik de değişir. İlk çizim animasyonlu (spec §7 "Charts").
 */
export const TrendChart = ({ metric, series }: TrendChartProps) => {
  const { t, language } = useT();
  const gradientId = useId();
  const formatValue = (value: number) =>
    metric === "engagement" ? formatPercent(value, language) : formatCompact(value, language);
  // Takipçi birikimli bir sayıdır: eksen 0'dan başlarsa büyüme düz çizgi gibi görünür.
  // Bu yüzden ekseni verinin aralığına odaklarız; diğer metrikler 0'dan başlar.
  const cumulative = metric === "followers";
  const formatDay = (key: string) =>
    formatDateTime(parseDay(key).toISOString(), language, { day: "numeric", month: "short" });

  const renderTooltip = ({ active, payload, label }: TooltipContentProps<ValueType, NameType>) => {
    const value = payload?.[0]?.value;
    if (!active || typeof value !== "number" || typeof label !== "string") return null;
    return (
      <div className="rounded-lg border border-border bg-surface-elevated px-3 py-2 shadow-md">
        <p className="text-caption text-fg-muted">
          {formatDateTime(parseDay(label).toISOString(), language, {
            weekday: "long",
            day: "numeric",
            month: "long",
          })}
        </p>
        <p className="text-body font-semibold text-fg tabular-nums">
          {t(`metrics.${metric}`)}: {formatValue(value)}
        </p>
      </div>
    );
  };

  return (
    <figure className="flex flex-col gap-3">
      <figcaption className="sr-only">
        {t("analytics.chartCaption", { metric: t(`metrics.${metric}`) })}
      </figcaption>
      <div className="h-64 w-full sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.28} />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={formatDay}
              tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              minTickGap={24}
              tickMargin={8}
            />
            <YAxis
              domain={cumulative ? ["dataMin", "dataMax"] : [0, "auto"]}
              tickFormatter={formatValue}
              tick={{ fill: "var(--color-fg-muted)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={48}
            />
            <Tooltip
              content={renderTooltip}
              cursor={{ stroke: "var(--color-border-strong)", strokeDasharray: "3 3" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-accent)"
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              baseValue={cumulative ? "dataMin" : 0}
              animationDuration={700}
              activeDot={{ r: 4, strokeWidth: 0, fill: "var(--color-accent)" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </figure>
  );
};
