"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/Card";
import { useT } from "@/i18n/useT";
import { revealVariants, staggerContainer } from "@/lib/motion";
import type { AgentActivity } from "@/types";
import { AISparkle } from "./AIBadge";

type AgentStatusCardProps = { activity: AgentActivity };

/**
 * Kompakt AI Agent kartı (spec §9). Büyük bir AI paneli değil; son 24 saatin özeti.
 * Sıfır olan satırlar gösterilmez ("0 yorum incelendi" bilgi değil, gürültü).
 */
export const AgentStatusCard = ({ activity }: AgentStatusCardProps) => {
  const { t } = useT();
  const lines = [
    {
      count: activity.trendsAnalyzed,
      text: t("dashboard.agentTrends", { count: activity.trendsAnalyzed }),
    },
    {
      count: activity.opportunitiesFound,
      text: t("dashboard.agentOpportunities", { count: activity.opportunitiesFound }),
    },
    {
      count: activity.commentsReviewed,
      text: t("dashboard.agentComments", { count: activity.commentsReviewed }),
    },
  ].filter((line) => line.count > 0);

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <span className="relative flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent-text">
          <AISparkle />
          {/* Ajanın çalıştığını gösteren sakin bir nabız; dikkat dağıtmaz. */}
          <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2.5 rounded-full bg-success ring-2 ring-surface" />
          </span>
        </span>
        <div className="flex flex-col">
          <p className="text-body font-medium">{t("dashboard.agentTitle")}</p>
          <p className="text-caption text-fg-muted">{t("dashboard.agentPeriod")}</p>
        </div>
      </div>
      <motion.ul
        variants={staggerContainer(0.08)}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-2.5"
      >
        {lines.map((line) => (
          <motion.li
            key={line.text}
            variants={revealVariants}
            className="flex items-center gap-2.5 text-small text-fg-secondary"
          >
            <Check className="size-4 shrink-0 text-success" strokeWidth={2.5} aria-hidden />
            {line.text}
          </motion.li>
        ))}
      </motion.ul>
    </Card>
  );
};
