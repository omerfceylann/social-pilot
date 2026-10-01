import type { Metadata } from "next";
import { SessionGate } from "@/components/layout/SessionGate";
import { OnboardingWizard } from "@/components/onboarding/OnboardingWizard";

export const metadata: Metadata = { title: "Başlarken" };

/** Sadece giriş yapmış ama onboarding'i bitirmemiş kullanıcılar için. */
export default function OnboardingPage() {
  return (
    <SessionGate audience="onboarding" fallback={<div className="min-h-dvh" />}>
      <OnboardingWizard />
    </SessionGate>
  );
}
