"use client";

/**
 * GEÇİCİ geliştirici sayfası (Faz 12'de silinecek). Kayıt/onboarding ekranları
 * gelene kadar kabuğu test etmek için tek tıkla demo kullanıcı oluşturur.
 * Gerçek akışla aynı fonksiyonları (registerUser, connectPlatform…) kullanır.
 */

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useT } from "@/i18n/useT";
import { generateBrandProfile } from "@/services/brandService";
import { finishOnboarding, registerUser, signIn } from "@/store/auth";
import { useUserDirectory } from "@/store/useUserDirectory";
import { connectPlatform, initializeWorkspace } from "@/store/workspace";
import type { PlatformId, SectorId } from "@/types";

const DEMO_BRANDS: { sector: SectorId; brandName: string }[] = [
  { sector: "restaurant", brandName: "Kahve Evim" },
  { sector: "technology", brandName: "Planora" },
  { sector: "fitness", brandName: "Güç Kulübü" },
  { sector: "fashion", brandName: "Lina Studio" },
];

type Scenario = "new" | "existing";

const SCENARIO_PLATFORMS: Record<Scenario, { used: PlatformId[]; connect: PlatformId[] }> = {
  new: { used: [], connect: ["instagram"] },
  existing: { used: ["instagram", "tiktok"], connect: ["instagram", "tiktok", "youtube"] },
};

export default function DevSeedPage() {
  const { t } = useT();
  const router = useRouter();
  const [busy, setBusy] = useState<string | null>(null);
  const entries = useUserDirectory((state) => state.entries);

  const start = async (sector: SectorId, brandName: string, scenario: Scenario) => {
    const username = `demo.${sector}.${scenario}`;
    setBusy(username);
    if (entries[username]) {
      await signIn(username);
    } else {
      await registerUser({
        username,
        name: "Demo Kullanıcı",
        email: `${username}@example.com`,
        brandName,
      });
      const { used, connect } = SCENARIO_PLATFORMS[scenario];
      const base = { name: brandName, sector: { kind: "preset", id: sector } as const };
      const profile = await generateBrandProfile(
        scenario === "new"
          ? {
              ...base,
              origin: "new",
              country: "TR",
              language: "tr",
              audienceSummary: "",
              ageRange: [22, 40],
              audienceDescription: "",
              personality: [],
              contentStyles: [],
              rules: {},
            }
          : {
              ...base,
              origin: "existing",
              platformsUsed: used,
              currentStyle: "",
              improvementFocus: "",
              goals: ["engagement"],
            },
      );
      initializeWorkspace(profile);
      for (const platform of connect) {
        await connectPlatform({ platform, handle: `${sector}.demo` });
      }
      finishOnboarding();
    }
    router.push("/");
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12">
      <div className="flex flex-col gap-3">
        <Logo />
        <h1 className="text-title">Demo kullanıcı oluştur</h1>
        <p className="text-body text-fg-secondary">
          Geçici geliştirici sayfası. Yeni marka: sadece Instagram (başlangıç verisi). Mevcut marka:
          Instagram + TikTok geçmişli, YouTube yeni hesap.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {DEMO_BRANDS.map(({ sector, brandName }) => (
          <Card key={sector} className="flex flex-col gap-4">
            <div>
              <p className="text-caption text-fg-muted">{t(`sectors.${sector}`)}</p>
              <p className="text-heading">{brandName}</p>
            </div>
            <div className="flex gap-2">
              {(["new", "existing"] as const).map((scenario) => (
                <Button
                  key={scenario}
                  size="sm"
                  variant={scenario === "new" ? "secondary" : "primary"}
                  loading={busy === `demo.${sector}.${scenario}`}
                  disabled={busy !== null}
                  onClick={() => void start(sector, brandName, scenario)}
                >
                  {scenario === "new" ? "Yeni marka" : "Mevcut marka"}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
