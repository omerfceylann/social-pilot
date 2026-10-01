import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

/** Boş durum: "bitmemiş" değil, bilinçli tasarlanmış hissettirmeli (spec §35). */
export const EmptyState = ({ icon, title, description, action, className }: EmptyStateProps) => (
  <div
    className={cn(
      "flex flex-col items-center gap-4 rounded-xl border border-dashed border-border-strong px-6 py-12 text-center",
      className,
    )}
  >
    <span className="flex size-12 items-center justify-center rounded-full bg-surface-muted text-fg-secondary [&_svg]:size-5">
      {icon}
    </span>
    <div className="flex max-w-sm flex-col gap-1.5">
      <p className="text-heading">{title}</p>
      {description && <p className="text-body text-fg-secondary">{description}</p>}
    </div>
    {action}
  </div>
);
