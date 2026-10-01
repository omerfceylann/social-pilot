"use client";

import { useMemo, useState } from "react";
import { withInboxComments } from "@/lib/content";
import { getAccountOverview, getTopPosts } from "@/services/analyticsService";
import { useContent } from "@/store/useContent";
import { useInbox } from "@/store/useInbox";
import { useSession } from "@/store/useSession";
import type { MetricKey } from "@/types";
import { useNow } from "./useNow";
import { useWorkspaceContext } from "./useWorkspaceContext";

export const ANALYTICS_PERIODS = [7, 30] as const;
export type AnalyticsPeriod = (typeof ANALYTICS_PERIODS)[number];

const TOP_POST_LIMIT = 5;

/**
 * Analitik sayfasının verisi (spec §29). Hepsi aynı store'dan ve aynı mock
 * analitik fonksiyonlarından: paylaşılan bir post burada da hemen görünür.
 */
export const useAnalytics = () => {
  const posts = useContent((state) => state.posts);
  const comments = useInbox((state) => state.comments);
  const username = useSession((state) => state.user?.username ?? "");
  const context = useWorkspaceContext();
  const now = useNow();
  const [period, setPeriod] = useState<AnalyticsPeriod>(7);
  const [chartMetric, setChartMetric] = useState<MetricKey>("reach");

  const hasPublished = posts.some((post) => post.status === "published");

  const metrics = useMemo(
    () =>
      context && hasPublished
        ? getAccountOverview(posts, context.analytics, {
            days: period,
            now: new Date(now),
            seed: username,
          })
        : null,
    [context, hasPublished, now, period, posts, username],
  );

  /** En iyi içerikler; yorum sayısı Gelen Kutusu'ndaki gerçek yorumlardan az olamaz. */
  const topPosts = useMemo(
    () =>
      context
        ? getTopPosts(posts, context.analytics, TOP_POST_LIMIT, new Date(now)).map((item) => ({
            ...item,
            analytics: withInboxComments(item.analytics, item.post, comments),
          }))
        : [],
    [comments, context, now, posts],
  );

  return {
    period,
    setPeriod,
    chartMetric,
    setChartMetric,
    metrics,
    chartSeries: metrics?.find((metric) => metric.key === chartMetric)?.series ?? [],
    topPosts,
    publishedCount: posts.filter((post) => post.status === "published").length,
    baseline: context?.analytics,
  };
};
