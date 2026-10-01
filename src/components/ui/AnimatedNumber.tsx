"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { easeOutSoft } from "@/lib/motion";

type AnimatedNumberProps = {
  value: number;
  format: (value: number) => string;
  className?: string;
};

const COUNT_DURATION = 0.9;

/**
 * Sayı ilk görününce (ve değişince) yumuşakça sayar (spec §52 "chart values animate").
 * "Hareketi azalt" açıksa doğrudan son değeri gösterir.
 */
export const AnimatedNumber = ({ value, format, className }: AnimatedNumberProps) => {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const previous = useRef(0);

  useEffect(() => {
    // Hareket azaltılmışsa sayma yok; değer aşağıda doğrudan gösterilir.
    if (reduceMotion) return;
    const controls = animate(previous.current, value, {
      duration: COUNT_DURATION,
      ease: easeOutSoft,
      onUpdate: setDisplay,
    });
    previous.current = value;
    return () => controls.stop();
  }, [value, reduceMotion]);

  return (
    <span className={className ?? "tabular-nums"}>{format(reduceMotion ? value : display)}</span>
  );
};
