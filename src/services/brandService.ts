import type {
  BrandGoal,
  BrandPersonality,
  BrandProfile,
  BrandRules,
  ContentStyle,
  PlatformId,
  SectorSelection,
} from "@/types";
import { simulateAiLatency } from "./latency";
import { resolveDataset } from "./workspaceService";

/** "Yeni bir marka oluşturuyorum" akışının cevapları (spec §11). */
export type NewBrandAnswers = {
  origin: "new";
  name: string;
  sector: SectorSelection;
  country: string;
  language: string;
  website?: string;
  audienceSummary: string;
  ageRange: [number, number];
  audienceDescription: string;
  personality: BrandPersonality[];
  contentStyles: ContentStyle[];
  rules: Partial<BrandRules>;
};

/** "Mevcut markamı yönetmek istiyorum" akışının cevapları (spec §12). */
export type ExistingBrandAnswers = {
  origin: "existing";
  name: string;
  sector: SectorSelection;
  website?: string;
  platformsUsed: PlatformId[];
  activePlatforms: PlatformId[];
  currentStyle: string;
  improvementFocus: string;
  goals: BrandGoal[];
};

export type BrandAnswers = NewBrandAnswers | ExistingBrandAnswers;

/** Kişilikten ses tonu sıfatları (marka içeriğinin dili Türkçe). */
const TONE_BY_PERSONALITY: Record<BrandPersonality, string> = {
  friendly: "Samimi",
  professional: "Net",
  premium: "Zarif",
  energetic: "Enerjik",
  minimal: "Kısa",
  playful: "Esprili",
  trustworthy: "Güven veren",
  bold: "İddialı",
};

/** Mevcut markada stil sorulmaz; hedeflerden çıkarılır. */
const STYLES_BY_GOAL: Record<BrandGoal, ContentStyle[]> = {
  engagement: ["entertaining", "communityFocused"],
  followers: ["trendFocused", "entertaining"],
  sales: ["productFocused", "promotional"],
  awareness: ["storytelling", "behindTheScenes"],
  consistency: ["educational", "productFocused"],
  quality: ["behindTheScenes", "storytelling"],
  community: ["communityFocused", "behindTheScenes"],
};

const TURKISH_ASCII: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u" };

/** "Sokak Kahvesi" → "sokakkahvesi" */
export const toHandle = (name: string) =>
  name
    .toLocaleLowerCase("tr")
    .replace(/[çğıöşü]/g, (char) => TURKISH_ASCII[char] ?? char)
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 24) || "markam";

const unique = <T>(items: T[]) => [...new Set(items)];

/**
 * Onboarding cevaplarından marka profili üretir (spec'teki generateBrandDNA).
 * Kullanıcının söylemediği her şey, sektörün örnek markasından gelir.
 */
export const generateBrandProfile = async (answers: BrandAnswers): Promise<BrandProfile> => {
  await simulateAiLatency();
  const preset = resolveDataset(answers.sector).brand;
  const base = {
    ...preset,
    name: answers.name.trim(),
    handle: toHandle(answers.name),
    sector: answers.sector,
    website: answers.website?.trim() || undefined,
    origin: answers.origin,
  };

  if (answers.origin === "new") {
    const personality = answers.personality.length > 0 ? answers.personality : preset.personality;
    return {
      ...base,
      country: answers.country,
      language: answers.language,
      audience: {
        summary: answers.audienceSummary || preset.audience.summary,
        ageRange: answers.ageRange,
        description: answers.audienceDescription || preset.audience.description,
      },
      personality,
      tone: personality.map((trait) => TONE_BY_PERSONALITY[trait]),
      contentStyles:
        answers.contentStyles.length > 0 ? answers.contentStyles : preset.contentStyles,
      rules: { ...preset.rules, ...answers.rules },
    };
  }

  const contentStyles = unique(answers.goals.flatMap((goal) => STYLES_BY_GOAL[goal])).slice(0, 4);
  return {
    ...base,
    goals: answers.goals.length > 0 ? answers.goals : preset.goals,
    contentStyles: contentStyles.length > 0 ? contentStyles : preset.contentStyles,
    activePlatforms:
      answers.activePlatforms.length > 0 ? answers.activePlatforms : preset.activePlatforms,
  };
};
