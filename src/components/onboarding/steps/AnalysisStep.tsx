"use client";

import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { AIBadge } from "@/components/ai/AIBadge";
import { Spinner } from "@/components/ui/Spinner";
import type { TranslationKey } from "@/i18n/translate";
import { useT } from "@/i18n/useT";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";
import { generateBrandProfile } from "@/services/brandService";
import { initializeWorkspace } from "@/store/workspace";
import { StepHeader } from "../StepHeader";
import { toBrandAnswers, type OnboardingDraft } from "../useOnboardingWizard";

const ANALYSIS_LINES: TranslationKey[] = [
  "onboarding.analysis.step1",
  "onboarding.analysis.step2",
  "onboarding.analysis.step3",
  "onboarding.analysis.step4",
];

/** Her satırın görünme aralığı; toplam ~2.6 sn. Çok hızlı geçerse "analiz" inandırıcı olmaz. */
const LINE_INTERVAL_MS = 650;

type AnalysisStepProps = { draft: OnboardingDraft; onDone: () => void };

/**
 * ✦ AI marka analizi (spec §36 "brand analysis" yükleme durumu). Profil arka planda
 * gerçekten üretilir; satırlar sırayla tamamlanır.
 */
export const AnalysisStep = ({ draft, onDone }: AnalysisStepProps) => {
  const { t } = useT();
  const [completed, setCompleted] = useState(0);
  // StrictMode geliştirmede efektleri iki kez çalıştırır; profil bir kez üretilmeli.
  const started = useRef(false);

  useEffect(() => {
    const timer = setInterval(
      () => setCompleted((count) => Math.min(count + 1, ANALYSIS_LINES.length)),
      LINE_INTERVAL_MS,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const answers = toBrandAnswers(draft);
    if (!answers) return;

    const minimumDuration = new Promise((resolve) =>
      setTimeout(resolve, LINE_INTERVAL_MS * (ANALYSIS_LINES.length + 0.5)),
    );
    void Promise.all([generateBrandProfile(answers), minimumDuration]).then(([profile]) => {
      initializeWorkspace(profile);
      onDone();
    });
  }, [draft, onDone]);

  return (
    <div className="flex flex-col gap-10" aria-live="polite">
      <StepHeader
        eyebrow={<AIBadge variant="filled">{t("ai.analysis")}</AIBadge>}
        title={t("onboarding.analysis.title")}
      />
      <ul className="flex flex-col gap-4">
        {ANALYSIS_LINES.map((key, index) => {
          const done = index < completed;
          const active = index === completed;
          return (
            <motion.li
              key={key}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: index <= completed ? 1 : 0.35, y: 0 }}
              transition={{ ...transition.slow, delay: index * 0.08 }}
              className="flex items-center gap-3"
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full transition-colors duration-300",
                  done ? "bg-accent text-accent-fg" : "bg-surface-muted text-fg-muted",
                )}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {done ? (
                    <motion.span
                      key="done"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={transition.fast}
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </motion.span>
                  ) : active ? (
                    <Spinner key="active" className="size-3.5" />
                  ) : null}
                </AnimatePresence>
              </span>
              <span className={cn("text-body-lg", done ? "text-fg" : "text-fg-secondary")}>
                {t(key)}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
