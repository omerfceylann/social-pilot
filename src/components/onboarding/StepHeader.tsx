import type { ReactNode } from "react";

type StepHeaderProps = {
  title: string;
  subtitle?: string;
  /** Başlığın üstündeki küçük etiket (ör. "✦ AI Analizi"). */
  eyebrow?: ReactNode;
};

/** Her onboarding adımında aynı başlık hiyerarşisi. */
export const StepHeader = ({ title, subtitle, eyebrow }: StepHeaderProps) => (
  <div className="flex flex-col gap-2">
    {/* flex-col içinde etiket genişliğe yayılmasın. */}
    {eyebrow && <div className="flex">{eyebrow}</div>}
    {/* tabIndex=-1: adım değişince odak buraya taşınabilsin (bkz. OnboardingWizard). */}
    <h1 tabIndex={-1} className="text-title sm:text-display">
      {title}
    </h1>
    {subtitle && <p className="text-body-lg text-fg-secondary">{subtitle}</p>}
  </div>
);
