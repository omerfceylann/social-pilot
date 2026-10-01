"use client";

import { useCallback, useState } from "react";
import { resolveDataset } from "@/services/workspaceService";
import type { BrandAnswers } from "@/services/brandService";
import { useBrand } from "@/store/useBrand";
import { useSession } from "@/store/useSession";
import type {
  BrandGoal,
  BrandPersonality,
  BrandRules,
  ContentLanguage,
  ContentStyle,
  PlatformId,
  SectorId,
  SectorSelection,
} from "@/types";

export type Origin = BrandAnswers["origin"];

export type StepId =
  | "choice"
  | "basics"
  | "audience"
  | "personality"
  | "style"
  | "rules"
  | "platformsUsed"
  | "currentState"
  | "goals"
  | "analysis"
  | "profile"
  | "connect";

/** İki akışın adımları (spec §11, §12). Sıra değiştirmek = diziyi değiştirmek. */
const FLOWS: Record<Origin, StepId[]> = {
  new: [
    "choice",
    "basics",
    "audience",
    "personality",
    "style",
    "rules",
    "analysis",
    "profile",
    "connect",
  ],
  existing: [
    "choice",
    "basics",
    "platformsUsed",
    "currentState",
    "goals",
    "analysis",
    "profile",
    "connect",
  ],
};

/** Analizden sonra geri dönülmez: profil oluştuktan sonra soruları değiştirmek Marka sayfasının işi. */
const NO_BACK: StepId[] = ["choice", "analysis", "profile", "connect"];

export type EditableRules = Pick<
  BrandRules,
  | "emojiUsage"
  | "captionLength"
  | "maxHashtags"
  | "ctaStyle"
  | "bannedWords"
  | "preferredWords"
  | "visualStyle"
>;

export type OnboardingDraft = {
  origin: Origin | null;
  brandName: string;
  sector: SectorId | "other" | null;
  otherSector: string;
  country: string;
  language: ContentLanguage;
  website: string;
  audienceSummary: string;
  ageMin: number;
  ageMax: number;
  audienceDescription: string;
  personality: BrandPersonality[];
  contentStyles: ContentStyle[];
  /** Kurallar adımına gelince sektör varsayılanlarıyla doldurulur. */
  rules: EditableRules | null;
  platformsUsed: PlatformId[];
  currentStyle: string;
  improvementFocus: string;
  goals: BrandGoal[];
};

const AGE_LIMITS = { min: 13, max: 80 } as const;

const toSectorSelection = (draft: OnboardingDraft): SectorSelection | null => {
  if (draft.sector === null) return null;
  if (draft.sector === "other") return { kind: "custom", label: draft.otherSector.trim() };
  return { kind: "preset", id: draft.sector };
};

const isValidAgeRange = ({ ageMin, ageMax }: OnboardingDraft) =>
  ageMin >= AGE_LIMITS.min && ageMax <= AGE_LIMITS.max && ageMin < ageMax;

/** Her adımda "Devam" butonu ne zaman aktif? */
const canContinueFrom = (step: StepId, draft: OnboardingDraft): boolean => {
  switch (step) {
    case "choice":
      return draft.origin !== null;
    case "basics":
      return (
        draft.brandName.trim().length > 0 &&
        draft.sector !== null &&
        (draft.sector !== "other" || draft.otherSector.trim().length > 0)
      );
    case "audience":
      return isValidAgeRange(draft);
    case "personality":
      return draft.personality.length > 0;
    case "style":
      return draft.contentStyles.length > 0;
    case "goals":
      return draft.goals.length > 0;
    case "rules":
    case "platformsUsed":
    case "currentState":
    case "analysis":
    case "profile":
    case "connect":
      return true;
    default:
      return assertNever(step);
  }
};

const assertNever = (value: never): never => {
  throw new Error(`Beklenmeyen adım: ${String(value)}`);
};

/** Taslağı, marka servisinin beklediği cevap biçimine çevirir. */
export const toBrandAnswers = (draft: OnboardingDraft): BrandAnswers | null => {
  const sector = toSectorSelection(draft);
  if (!sector || !draft.origin) return null;
  const base = { name: draft.brandName, sector, website: draft.website };

  if (draft.origin === "new") {
    return {
      ...base,
      origin: "new",
      country: draft.country,
      language: draft.language,
      audienceSummary: draft.audienceSummary.trim(),
      ageRange: [draft.ageMin, draft.ageMax],
      audienceDescription: draft.audienceDescription.trim(),
      personality: draft.personality,
      contentStyles: draft.contentStyles,
      rules: draft.rules ?? {},
    };
  }
  return {
    ...base,
    origin: "existing",
    platformsUsed: draft.platformsUsed,
    currentStyle: draft.currentStyle.trim(),
    improvementFocus: draft.improvementFocus.trim(),
    goals: draft.goals,
  };
};

const createDraft = (brandName: string): OnboardingDraft => ({
  origin: null,
  brandName,
  sector: null,
  otherSector: "",
  country: "TR",
  language: "tr",
  website: "",
  audienceSummary: "",
  ageMin: 22,
  ageMax: 40,
  audienceDescription: "",
  personality: [],
  contentStyles: [],
  rules: null,
  platformsUsed: [],
  currentStyle: "",
  improvementFocus: "",
  goals: [],
});

const rulesFor = (draft: OnboardingDraft): EditableRules => {
  const sector = toSectorSelection(draft) ?? { kind: "preset", id: "restaurant" };
  const {
    emojiUsage,
    captionLength,
    maxHashtags,
    ctaStyle,
    bannedWords,
    preferredWords,
    visualStyle,
  } = resolveDataset(sector).brandDefaults.rules;
  return {
    emojiUsage,
    captionLength,
    maxHashtags,
    ctaStyle,
    bannedWords,
    preferredWords,
    visualStyle,
  };
};

/**
 * Onboarding sihirbazının tüm mantığı; ekranlar sadece çizer (spec §38).
 * Profil zaten oluşturulmuşsa (sayfa yenilendiyse) hesap bağlama adımından devam eder.
 */
export const useOnboardingWizard = () => {
  const [initial] = useState(() => {
    const profile = useBrand.getState().profile;
    const brandName = profile?.name ?? useSession.getState().user?.brandName ?? "";
    const draft = { ...createDraft(brandName), origin: profile?.origin ?? null };
    return { draft, step: profile ? ("connect" as const) : ("choice" as const) };
  });
  const [draft, setDraft] = useState<OnboardingDraft>(initial.draft);
  const [step, setStep] = useState<StepId>(initial.step);
  const [direction, setDirection] = useState<1 | -1>(1);

  const flow = FLOWS[draft.origin ?? "new"];
  const index = Math.max(0, flow.indexOf(step));

  const update = useCallback((patch: Partial<OnboardingDraft>) => {
    setDraft((current) => ({ ...current, ...patch }));
  }, []);

  const goTo = useCallback((next: StepId, nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    setStep(next);
  }, []);

  const next = useCallback(() => {
    const target = flow[index + 1];
    if (!target || !canContinueFrom(step, draft)) return;
    // Kurallar adımına girerken, kullanıcı henüz düzenlemediyse sektör önerileriyle doldur.
    if (target === "rules" && draft.rules === null) update({ rules: rulesFor(draft) });
    goTo(target, 1);
  }, [draft, flow, goTo, index, step, update]);

  const back = useCallback(() => {
    const target = flow[index - 1];
    if (target && !NO_BACK.includes(step)) goTo(target, -1);
  }, [flow, goTo, index, step]);

  return {
    draft,
    update,
    step,
    direction,
    next,
    back,
    goTo,
    canContinue: canContinueFrom(step, draft),
    canGoBack: !NO_BACK.includes(step),
    progress: { current: index + 1, total: flow.length },
    ageLimits: AGE_LIMITS,
  };
};

export type OnboardingWizard = ReturnType<typeof useOnboardingWizard>;
