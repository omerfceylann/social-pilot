"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { AccountConnectionList } from "@/components/social/AccountConnectionList";
import { Avatar } from "@/components/ui/Avatar";
import { Tabs } from "@/components/ui/Tabs";
import { useT } from "@/i18n/useT";
import { useBrand } from "@/store/useBrand";
import { BrandDnaForm, BrandProfileForm, BrandRulesForm } from "./BrandForms";

export const BRAND_TABS = ["profile", "dna", "rules", "accounts"] as const;
type BrandTab = (typeof BRAND_TABS)[number];

const isBrandTab = (value: string | null): value is BrandTab =>
  BRAND_TABS.some((tab) => tab === value);

/**
 * Marka (spec §30): Profil, Marka DNA'sı, İçerik kuralları, Bağlı hesaplar.
 * Hepsi düzenlenebilir; AI'ın önerileri ve yanıtları bu bilgilere göre şekillenir.
 */
export const BrandView = () => {
  const { t } = useT();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const profile = useBrand((state) => state.profile);
  const requested = searchParams.get("tab");
  const tab: BrandTab = isBrandTab(requested) ? requested : "profile";

  if (!profile) return null;

  const sectorLabel =
    profile.sector.kind === "preset" ? t(`sectors.${profile.sector.id}`) : profile.sector.label;
  // Hesap değişince formlar yeni markanın verisiyle baştan başlasın.
  const formKey = profile.handle;

  return (
    <PageContainer className="gap-8">
      <PageHeader
        title={
          <span className="flex items-center gap-4">
            <Avatar name={profile.name} size="lg" />
            <span className="flex min-w-0 flex-col">
              <span className="truncate">{profile.name}</span>
              <span className="text-body font-normal text-fg-secondary">
                {sectorLabel} · @{profile.handle}
              </span>
            </span>
          </span>
        }
        description={profile.tagline}
      />

      <Tabs
        variant="underline"
        value={tab}
        onValueChange={(next) =>
          isBrandTab(next) && router.replace(`${pathname}?tab=${next}`, { scroll: false })
        }
        className="flex flex-col gap-6"
      >
        <Tabs.List aria-label={t("nav.brand")}>
          {BRAND_TABS.map((value) => (
            <Tabs.Trigger key={value} value={value}>
              {t(`brand.tabs.${value}`)}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value="profile">
          <BrandProfileForm key={formKey} profile={profile} />
        </Tabs.Content>
        <Tabs.Content value="dna">
          <BrandDnaForm key={formKey} profile={profile} />
        </Tabs.Content>
        <Tabs.Content value="rules">
          <BrandRulesForm key={formKey} profile={profile} />
        </Tabs.Content>
        <Tabs.Content value="accounts" className="flex flex-col gap-4">
          <p className="text-body text-fg-secondary">{t("brand.accountsHint")}</p>
          <AccountConnectionList manageable />
        </Tabs.Content>
      </Tabs>
    </PageContainer>
  );
};
