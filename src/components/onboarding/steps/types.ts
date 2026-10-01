import type { OnboardingDraft } from "../useOnboardingWizard";

/** Soru adımlarının ortak sözleşmesi: cevapları okur, sadece kendi alanlarını günceller. */
export type StepProps = {
  draft: OnboardingDraft;
  update: (patch: Partial<OnboardingDraft>) => void;
};
