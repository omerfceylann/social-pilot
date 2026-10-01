"use client";

import { BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { PostRow } from "@/components/content/PostRow";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { ANALYTICS_PERIODS, useAnalytics } from "@/hooks/useAnalytics";
import { useT } from "@/i18n/useT";
import { revealVariants, staggerContainer } from "@/lib/motion";
import { InsightPanel } from "./InsightPanel";
import { MetricCard } from "./MetricCard";
import { TrendChart } from "./TrendChart";

/**
 * Analitik (spec §29): sade. Dört metrik, tek grafik, en iyi içerikler,
 * ✦ AI İçgörüsü ve ✦ AI Tavsiyesi. Grafik yalnızca seçili metriği gösterir.
 */
export const AnalyticsView = () => {
  const { t } = useT();
  const analytics = useAnalytics();
  const { metrics, period, chartMetric } = analytics;

  const periodControl = (
    <SegmentedControl
      value={String(period)}
      onChange={(value) => {
        const next = ANALYTICS_PERIODS.find((days) => String(days) === value);
        if (next) analytics.setPeriod(next);
      }}
      options={ANALYTICS_PERIODS.map((days) => ({
        value: String(days),
        label: t("analytics.lastDays", { days }),
      }))}
      aria-label={t("analytics.period")}
    />
  );

  if (!metrics) {
    return (
      <PageContainer>
        <PageHeader title={t("nav.analytics")} description={t("analytics.subtitle")} />
        <EmptyState
          icon={<BarChart3 />}
          title={t("analytics.emptyTitle")}
          description={t("analytics.emptyDescription")}
          action={
            <Button asChild variant="primary">
              <Link href="/content">{t("dashboard.createContent")}</Link>
            </Button>
          }
        />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={t("nav.analytics")}
        description={t("analytics.subtitle")}
        actions={periodControl}
      />

      <motion.section
        variants={staggerContainer(0.05)}
        initial="initial"
        animate="animate"
        aria-label={t("analytics.overview")}
        className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      >
        {metrics.map((metric) => (
          <motion.div key={metric.key} variants={revealVariants}>
            <MetricCard
              metric={metric}
              selected={metric.key === chartMetric}
              onSelect={() => analytics.setChartMetric(metric.key)}
            />
          </motion.div>
        ))}
      </motion.section>

      <Card className="flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-heading">{t(`metrics.${chartMetric}`)}</h2>
          <span className="text-small text-fg-muted">
            {t("analytics.chartHint", { days: period })}
          </span>
        </div>
        <TrendChart
          key={`${chartMetric}-${period}`}
          metric={chartMetric}
          series={analytics.chartSeries}
        />
      </Card>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-10">
        <section className="flex flex-col gap-4" aria-labelledby="top-content-heading">
          <div className="flex items-baseline justify-between gap-3">
            <h2 id="top-content-heading" className="text-title">
              {t("analytics.topContent")}
            </h2>
            <Link
              href="/content?tab=published"
              className="text-small font-medium text-accent-text hover:underline"
            >
              {t("analytics.allPublished")}
            </Link>
          </div>
          <motion.ol
            variants={staggerContainer(0.05)}
            initial="initial"
            animate="animate"
            className="flex flex-col gap-2"
          >
            {analytics.topPosts.map(({ post, analytics: postAnalytics }, index) => (
              <motion.li
                key={post.id}
                variants={revealVariants}
                className="flex items-center gap-3"
              >
                <span
                  className="w-5 shrink-0 text-center text-small font-semibold text-fg-muted tabular-nums"
                  aria-label={t("analytics.rank", { rank: index + 1 })}
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <PostRow post={post} analytics={postAnalytics} />
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </section>

        <aside aria-label={t("ai.insight")}>
          <InsightPanel baseline={analytics.baseline} publishedCount={analytics.publishedCount} />
        </aside>
      </div>
    </PageContainer>
  );
};
