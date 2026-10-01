"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { revealVariants } from "@/lib/motion";
import { AIBadge } from "./AIBadge";

type AIInsightProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * AI'ın ürettiği yorum için tek tip kutu (spec §34): ✦ etiketi + hafif accent zemin.
 * Kullanıcının yazdığı metinle asla karışmaz. Yumuşakça açılır (spec §7).
 */
export const AIInsight = ({ label, children, className }: AIInsightProps) => (
  <motion.div
    variants={revealVariants}
    initial="initial"
    animate="animate"
    className={cn(
      "flex flex-col gap-1.5 rounded-lg border border-accent/15 bg-accent-soft px-3.5 py-3",
      className,
    )}
  >
    <AIBadge>{label}</AIBadge>
    <div className="text-small text-fg">{children}</div>
  </motion.div>
);
