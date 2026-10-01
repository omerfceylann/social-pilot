"use client";

import { ArrowRight, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { useT } from "@/i18n/useT";
import { activeSuggestions } from "@/lib/content";
import { weekdayName } from "@/lib/format";
import { revealVariants, staggerContainer } from "@/lib/motion";
import { PLATFORMS } from "@/mock/platforms";
import { generateAnalyticsInsight } from "@/services/aiService";
import { useContent } from "@/store/useContent";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import {
  PLATFORM_IDS,
  type AnalyticsBaseline,
  type AnalyticsInsight,
  type AnalyticsRecommendation,
} from "@/types";

/** İçgörülerin anlamlı olması için gereken en az paylaşım (bkz. computeInsights). */
const MIN_POSTS_FOR_INSIGHTS = 3;

type InsightResult = {
  insights: AnalyticsInsight[];
  recommendation: AnalyticsRecommendation | null;
};

type InsightPanelProps = { baseline?: AnalyticsBaseline; publishedCount: number };

/**
 * ✦ AI İçgörüsü + ✦ AI Tavsiyesi (spec §29). Sabit metin değil: yayınlanan
 * postların gerçek (mock) performansından hesaplanır; yeni paylaşım sonucu değiştirir.
 */
export const InsightPanel = ({ baseline, publishedCount }: InsightPanelProps) => {
  const { t, language } = useT();
  const router = useRouter();
  const posts = useContent((state) => state.posts);
  const suggestions = useContent((state) => state.suggestions);
  const usedSuggestionIds = useContent((state) => state.usedSuggestionIds);
  const createFromSuggestion = useContent((state) => state.createFromSuggestion);
  const accounts = useSocialAccounts((state) => state.accounts);
  const [result, setResult] = useState<InsightResult | null>(null);

  useEffect(() => {
    if (!baseline) return;
    let cancelled = false;
    void generateAnalyticsInsight(posts, baseline).then((next) => {
      if (!cancelled) setResult(next);
    });
    return () => {
      cancelled = true;
    };
  }, [baseline, posts]);

  /** Tavsiyeye en uygun görünür öneri: aynı platform, mümkünse aynı tema ve biçim. */
  const matchingSuggestion = useMemo(() => {
    const recommendation = result?.recommendation;
    if (!recommendation) return undefined;
    const connected = PLATFORM_IDS.filter((id) => id in accounts);
    const candidates = activeSuggestions(suggestions, usedSuggestionIds, connected).filter(
      (suggestion) => suggestion.platform === recommendation.platform,
    );
    return (
      candidates.find(
        (suggestion) =>
          suggestion.theme === recommendation.theme && suggestion.format === recommendation.format,
      ) ??
      candidates.find((suggestion) => suggestion.theme === recommendation.theme) ??
      candidates[0]
    );
  }, [accounts, result, suggestions, usedSuggestionIds]);

  const describe = (insight: AnalyticsInsight) => {
    switch (insight.kind) {
      case "themeLift":
        return t("insights.themeLift", {
          theme: t(`contentStyles.${insight.theme}`),
          format: t(`formats.${insight.format}`),
          lift: insight.liftPct,
        });
      case "platformLead":
        return t("insights.platformLead", {
          platform: PLATFORMS[insight.platform].name,
          lift: insight.liftPct,
        });
      case "bestTime":
        return t("insights.bestTime", {
          weekday: weekdayName(insight.weekday, language),
          hour: String(insight.hour).padStart(2, "0"),
        });
    }
  };

  if (publishedCount < MIN_POSTS_FOR_INSIGHTS) {
    return (
      <Card className="flex flex-col gap-3">
        <AIBadge>{t("ai.insight")}</AIBadge>
        <p className="text-body text-fg-secondary">
          {t("analytics.insightsNeedMore", { count: MIN_POSTS_FOR_INSIGHTS - publishedCount })}
        </p>
      </Card>
    );
  }

  if (!result) {
    return (
      <Card className="flex flex-col gap-3" aria-busy>
        <AIBadge>{t("ai.thinking")}</AIBadge>
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </Card>
    );
  }

  const { recommendation } = result;

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-4"
    >
      <motion.section
        variants={revealVariants}
        className="flex flex-col gap-3 rounded-xl border border-accent/15 bg-accent-soft p-5"
        aria-labelledby="ai-insight-heading"
      >
        <h2 id="ai-insight-heading">
          <AIBadge>{t("ai.insight")}</AIBadge>
        </h2>
        <ul className="flex flex-col gap-3">
          {result.insights.map((insight) => (
            <li key={insight.kind} className="flex gap-2.5 text-body text-fg">
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden />
              {describe(insight)}
            </li>
          ))}
        </ul>
      </motion.section>

      {recommendation && (
        <motion.section
          variants={revealVariants}
          className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-5"
          aria-labelledby="ai-recommendation-heading"
        >
          <h2 id="ai-recommendation-heading">
            <AIBadge>{t("ai.recommendation")}</AIBadge>
          </h2>
          <p className="flex gap-2.5 text-body text-fg">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden />
            {t("insights.recommendation", {
              days: recommendation.withinDays,
              platform: PLATFORMS[recommendation.platform].name,
              theme: t(`contentStyles.${recommendation.theme}`),
              format: t(`formats.${recommendation.format}`),
            })}
          </p>
          {matchingSuggestion ? (
            <Button
              variant="primary"
              className="self-start"
              onClick={() => router.push(`/content/${createFromSuggestion(matchingSuggestion)}`)}
            >
              {t("analytics.createRecommended")}
              <ArrowRight />
            </Button>
          ) : (
            <Button asChild variant="secondary" className="self-start">
              <Link href="/content">
                {t("analytics.browseSuggestions")}
                <ArrowRight />
              </Link>
            </Button>
          )}
        </motion.section>
      )}
    </motion.div>
  );
};
