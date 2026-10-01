"use client";

import { ArrowLeft, LogOut } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { LanguageSwitch, ThemeToggle } from "@/components/layout/PreferenceToggles";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";
import { transition } from "@/lib/motion";
import { finishOnboarding, signOut } from "@/store/auth";
import { useSocialAccounts } from "@/store/useSocialAccounts";
import { AnalysisStep } from "./steps/AnalysisStep";
import { BasicsStep } from "./steps/BasicsStep";
import { ChoiceStep } from "./steps/ChoiceStep";
import { ConnectStep } from "./steps/ConnectStep";
import { ProfileStep } from "./steps/ProfileStep";
import { RulesStep } from "./steps/RulesStep";
import { GoalsStep, PersonalityStep, PlatformsUsedStep, StyleStep } from "./steps/SelectionSteps";
import { useOnboardingWizard, type StepId } from "./useOnboardingWizard";

/** İleri giderken içerik sola, geri giderken sağa kayar: yön hissi verir. */
const stepVariants: Variants = {
  enter: (direction: 1 | -1) => ({ opacity: 0, x: direction * 24 }),
  center: { opacity: 1, x: 0, transition: transition.slow },
  exit: (direction: 1 | -1) => ({ opacity: 0, x: direction * -16, transition: transition.fast }),
};

/** Footer'daki "Devam" butonu form dışında; form özniteliğiyle bu forma bağlanır. */
const STEP_FORM_ID = "onboarding-step";
const QUESTION_STEPS: StepId[] = [
  "choice",
  "basics",
  "personality",
  "style",
  "rules",
  "platformsUsed",
  "goals",
];

type StepFocusProps = { enabled: boolean; children: ReactNode };

/**
 * Adım mount olunca başlığına odaklanır: ekran okuyucu yeni soruyu hemen duyar.
 * AnimatePresence mode="wait" yeni adımı eski adım çıktıktan sonra mount ettiği için
 * o anda ekranda sadece yeni başlık vardır. Animasyonun bitmesini beklemez.
 */
const StepFocus = ({ enabled, children }: StepFocusProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (enabled) ref.current?.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
    // Sadece mount anında: adım değiştikçe bu bileşen yeniden mount edilir.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div ref={ref}>{children}</div>;
};

/** Onboarding sihirbazı: üstte ilerleme, ortada adım, altta (mobilde sabit) eylemler. */
export const OnboardingWizard = () => {
  const { t } = useT();
  const router = useRouter();
  const wizard = useOnboardingWizard();
  const { draft, update, step, direction, next, back, goTo, canContinue, canGoBack, progress } =
    wizard;
  const connectedCount = useSocialAccounts((state) => Object.keys(state.accounts).length);
  const isFirstRender = useRef(true);

  // İlk adımda odak taşınmaz; sonraki her adımda yeni başlık odak alır (bkz. StepFocus).
  const [hasNavigated, setHasNavigated] = useState(false);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setHasNavigated(true);
    window.scrollTo({ top: 0 });
  }, [step]);

  const handleAnalysisDone = useCallback(() => goTo("profile", 1), [goTo]);

  const finish = () => {
    finishOnboarding();
    router.replace("/");
  };

  const handleSignOut = () => {
    signOut();
    router.replace("/login");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    next();
  };

  const stepProps = { draft, update };
  const steps: Record<StepId, ReactNode> = {
    choice: <ChoiceStep {...stepProps} />,
    basics: <BasicsStep {...stepProps} />,
    personality: <PersonalityStep {...stepProps} />,
    style: <StyleStep {...stepProps} />,
    rules: <RulesStep {...stepProps} />,
    platformsUsed: <PlatformsUsedStep {...stepProps} />,
    goals: <GoalsStep {...stepProps} />,
    analysis: <AnalysisStep draft={draft} onDone={handleAnalysisDone} />,
    profile: <ProfileStep />,
    connect: <ConnectStep />,
  };

  const primaryAction = (() => {
    if (step === "analysis") return null;
    if (step === "profile") {
      return (
        <Button type="button" variant="primary" size="lg" onClick={() => goTo("connect", 1)}>
          {t("onboarding.profile.next")}
        </Button>
      );
    }
    if (step === "connect") {
      return connectedCount > 0 ? (
        <Button type="button" variant="primary" size="lg" onClick={finish}>
          {t("onboarding.connect.finish")}
        </Button>
      ) : (
        <Button type="button" variant="secondary" size="lg" onClick={finish}>
          {t("onboarding.connect.skip")}
        </Button>
      );
    }
    return (
      <Button type="submit" form={STEP_FORM_ID} variant="primary" size="lg" disabled={!canContinue}>
        {t("onboarding.next")}
      </Button>
    );
  })();

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/85 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-2xl items-center gap-4 px-5">
          <Logo showWordmark={false} />
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="text-caption text-fg-muted tabular-nums">
              {t("onboarding.stepOf", progress)}
            </span>
            <div
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={progress.total}
              aria-valuenow={progress.current}
              aria-label={t("onboarding.stepOf", progress)}
              className="h-1 overflow-hidden rounded-full bg-surface-muted"
            >
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={false}
                animate={{ width: `${(progress.current / progress.total) * 100}%` }}
                transition={transition.slow}
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            {/* Dar ekranda ilerleme çubuğuna yer kalsın diye dil seçici sm+'da. */}
            <LanguageSwitch className="mr-1 hidden sm:inline-flex" />
            <ThemeToggle />
          </div>
          <Button variant="ghost" size="sm" onClick={handleSignOut}>
            <LogOut />
            <span className="hidden sm:inline">{t("shell.signOut")}</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-10 sm:py-14 [&_h1]:outline-none">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <StepFocus enabled={hasNavigated}>
                {/* Sadece soru adımları form: Enter "Devam" gibi çalışır. Hesap kartlarının
                    kendi formu var; iç içe form HTML'de geçersiz olduğu için onları sarmayız. */}
                {QUESTION_STEPS.includes(step) ? (
                  <form id={STEP_FORM_ID} onSubmit={handleSubmit} noValidate>
                    {steps[step]}
                  </form>
                ) : (
                  steps[step]
                )}
              </StepFocus>
            </motion.div>
          </AnimatePresence>
        </main>

        {primaryAction && (
          <footer className="sticky bottom-0 border-t border-border bg-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 py-4">
              {canGoBack ? (
                <Button type="button" variant="ghost" size="lg" onClick={back}>
                  <ArrowLeft />
                  {t("onboarding.back")}
                </Button>
              ) : (
                <span />
              )}
              {primaryAction}
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};
