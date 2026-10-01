"use client";

import { AccountConnectionList } from "@/components/social/AccountConnectionList";
import { useT } from "@/i18n/useT";
import { StepHeader } from "../StepHeader";

/**
 * Hesap bağlama. "Kullandığın platformlar"da seçilenler üstte ve geçmişli veri alır;
 * diğerleri yeni hesap sayılır ("Hesap oluştur" + bağla → başlangıç önerileri).
 */
export const ConnectStep = () => {
  const { t } = useT();
  return (
    <div className="flex flex-col gap-8">
      <StepHeader
        title={t("onboarding.connect.title")}
        subtitle={t("onboarding.connect.subtitle")}
      />
      <AccountConnectionList />
    </div>
  );
};
