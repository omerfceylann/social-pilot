import type { Transition, Variants } from "motion/react";

/**
 * Uygulamadaki tüm JS animasyonlarının ortak dili.
 * Süreler saniye cinsinden (Motion'ın beklediği birim).
 */
export const duration = {
  fast: 0.15,
  base: 0.22,
  slow: 0.32,
  slower: 0.42,
} as const;

/** Hızlı başlayıp yumuşakça duran eğri: premium hissin çoğu buradan gelir. */
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const transition = {
  fast: { duration: duration.fast, ease: easeOutSoft },
  base: { duration: duration.base, ease: easeOutSoft },
  slow: { duration: duration.slow, ease: easeOutSoft },
  /** Sekme göstergesi gibi "takip eden" öğeler için hafif, zıplamayan yay. */
  indicator: { type: "spring", stiffness: 500, damping: 40, mass: 0.8 },
  drawer: { duration: duration.slower, ease: easeOutSoft },
} satisfies Record<string, Transition>;

/** Sayfa geçişi: hafif fade + dikey kayma (spec §7). */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: transition.slow },
  exit: { opacity: 0, y: -4, transition: transition.fast },
};

/** AI önerileri ve üretilen içerik: yumuşak açılma. */
export const revealVariants: Variants = {
  initial: { opacity: 0, y: 6, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: transition.slow },
  exit: { opacity: 0, y: -4, transition: transition.fast },
};

/** Liste öğelerini sırayla gösterir; çocuklar revealVariants kullanır. */
export const staggerContainer = (stagger = 0.05): Variants => ({
  animate: { transition: { staggerChildren: stagger } },
});
