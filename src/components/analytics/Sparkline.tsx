"use client";

import { motion } from "motion/react";
import { useId } from "react";
import { cn } from "@/lib/cn";
import { duration, easeOutSoft } from "@/lib/motion";

type SparklineProps = {
  values: number[];
  className?: string;
};

const WIDTH = 120;
const HEIGHT = 36;
const PADDING = 2;

/**
 * Küçük eğilim çizgisi. Eksen ve etkileşim gerekmediği için saf SVG:
 * bu boyut için bir grafik kütüphanesi gereksiz ağırlık olurdu. Dekoratif (aria-hidden);
 * asıl bilgi kartın metninde.
 */
export const Sparkline = ({ values, className }: SparklineProps) => {
  const gradientId = useId();
  if (values.length < 2) return null;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((value, index) => ({
    x: (index / (values.length - 1)) * WIDTH,
    y: PADDING + (1 - (value - min) / range) * (HEIGHT - PADDING * 2),
  }));
  const line = points
    .map(({ x, y }, index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${WIDTH},${HEIGHT} L0,${HEIGHT} Z`;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="none"
      aria-hidden
      className={cn("h-9 w-full overflow-visible", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${gradientId})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.slower, delay: 0.3 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: easeOutSoft }}
      />
    </svg>
  );
};
