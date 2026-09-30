import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AIBadgeProps = {
  children: ReactNode;
  /** "subtle": sadece renkli metin. "filled": hafif accent zemin. */
  variant?: "subtle" | "filled";
  className?: string;
};

/** AI'ın tek görsel imzası: ✦ ve accent tonu (spec §34). Başka yerde AI rengi kullanılmaz. */
export const AISparkle = ({ className }: { className?: string }) => (
  <span aria-hidden className={cn("leading-none", className)}>
    ✦
  </span>
);

export const AIBadge = ({ children, variant = "subtle", className }: AIBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center gap-1 text-caption font-medium whitespace-nowrap text-accent-text",
      variant === "filled" && "rounded-full bg-accent-soft px-2 py-0.5",
      className,
    )}
  >
    <AISparkle />
    {children}
  </span>
);
