"use client";

import { useT } from "@/i18n/useT";
import type { TranslationKey } from "@/i18n/translate";
import { PageContainer, PageHeader } from "./PageHeader";

type PhasePlaceholderProps = { title: TranslationKey; phase: number };

/** GEÇİCİ: Sayfanın kendi fazı gelene kadar kabuğu test etmek için. Fazlar ilerledikçe silinir. */
export const PhasePlaceholder = ({ title, phase }: PhasePlaceholderProps) => {
  const { t } = useT();
  return (
    <PageContainer>
      <PageHeader title={t(title)} description={`Bu bölüm Faz ${phase}'da hazırlanacak.`} />
      <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border-strong text-small text-fg-muted">
        Faz {phase}
      </div>
    </PageContainer>
  );
};
