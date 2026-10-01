import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type SettingsSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Ayar ve marka formlarının bölüm kartı: solda başlık ve açıklama, sağda
 * kontroller (masaüstü); mobilde alt alta. Bütün ayar ekranları aynı ritimde.
 */
export const SettingsSection = ({
  title,
  description,
  children,
  className,
}: SettingsSectionProps) => (
  <Card
    className={cn(
      "grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-8",
      className,
    )}
  >
    <div className="flex flex-col gap-1">
      <h2 className="text-heading">{title}</h2>
      {description && <p className="text-small text-fg-secondary">{description}</p>}
    </div>
    <div className="flex min-w-0 flex-col gap-5">{children}</div>
  </Card>
);
