"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { pageVariants } from "@/lib/motion";

/**
 * Layout'tan farkı: template her gezinmede yeniden mount edilir. Bu yüzden
 * giriş animasyonu her sayfa değişiminde oynar (spec §7: fade + hafif yukarı kayma).
 */
export default function AppTemplate({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
