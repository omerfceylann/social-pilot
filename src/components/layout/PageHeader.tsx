import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageContainerProps = { children: ReactNode; className?: string };

/**
 * Sayfa içeriğinin genişlik ve boşluk standardı; tüm sayfalarda aynı ritim.
 * md+'da üst boşluk, sağ üstteki tema/dil butonlarının altından başlar.
 */
export const PageContainer = ({ children, className }: PageContainerProps) => (
  <div
    className={cn(
      "mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6 sm:px-6 md:px-8 md:pt-16 lg:gap-12 lg:px-12 lg:pb-10",
      className,
    )}
  >
    {children}
  </div>
);

type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  /** Ekranın birincil (ve en fazla ikincil) eylemi (spec §48). */
  actions?: ReactNode;
};

/** Görsel öncelik (spec §51): önce sayfa başlığı, sonra ana eylem. */
export const PageHeader = ({ title, description, actions }: PageHeaderProps) => (
  // Yan yana yerleşim ekran genişliğine değil başlığa kalan alana göre (container query):
  // kenar çubuğu açıkken 1024px'te başlık eylemlerin yanında sıkışmasın.
  <div className="@container">
    <header className="flex flex-col gap-5 @3xl:flex-row @3xl:items-end @3xl:justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-title sm:text-display">{title}</h1>
        {description && <p className="max-w-2xl text-body-lg text-fg-secondary">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
    </header>
  </div>
);
