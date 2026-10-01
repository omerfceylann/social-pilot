import type {
  BrandGoal,
  BrandPersonality,
  BrandProfile,
  BrandRules,
  ContentLanguage,
  ContentStyle,
  PlatformId,
  SectorSelection,
} from "@/types";
import { simulateAiLatency } from "./latency";
import { resolveDataset } from "./workspaceService";

/** "Yeni bir marka oluşturuyorum" akışının cevapları (spec §11). Ad, kayıttan önceden doldurulur. */
export type NewBrandAnswers = {
  origin: "new";
  name: string;
  sector: SectorSelection;
  /** ISO 3166 ülke kodu. */
  country: string;
  language: ContentLanguage;
  website?: string;
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
  /** "Kullandığın platformlar" adımı: bağlandıklarında geçmişli veri alırlar. Boş olabilir. */
  platformsUsed: PlatformId[];
  goals: BrandGoal[];
};

export type BrandAnswers = NewBrandAnswers | ExistingBrandAnswers;

/**
 * Kişilikten ses tonu sıfatları (marka içeriğinin dili Türkçe). Kişilik etiketlerini
 * tekrar etmez; profilde "Kişilik" ve "Ses tonu" yan yana durduğunda birbirini tamamlar.
 */
const TONE_BY_PERSONALITY: Record<BrandPersonality, string> = {
  friendly: "Sıcak",
  professional: "Net",
  premium: "Zarif",
  energetic: "Coşkulu",
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
 * Kimlik (ad, sektör, website) kullanıcıdan; söylenmeyen her şey sektör varsayılanlarından gelir.
 */
export const generateBrandProfile = async (answers: BrandAnswers): Promise<BrandProfile> => {
  await simulateAiLatency();
  const defaults = resolveDataset(answers.sector).brandDefaults;
  const identity = {
    name: answers.name.trim(),
    handle: toHandle(answers.name),
    sector: answers.sector,
    website: answers.website?.trim() || undefined,
    origin: answers.origin,
  };

  if (answers.origin === "new") {
    const personality = answers.personality.length > 0 ? answers.personality : defaults.personality;
    return {
      ...defaults,
      ...identity,
      country: answers.country,
      language: answers.language,
      personality,
      tone: personality.map((trait) => TONE_BY_PERSONALITY[trait]),
      contentStyles:
        answers.contentStyles.length > 0 ? answers.contentStyles : defaults.contentStyles,
      rules: { ...defaults.rules, ...answers.rules },
      // Yeni markanın kullandığı platform yoktur; bağlanan her hesap yeni açılmış sayılır.
      usedPlatforms: [],
    };
  }

  const contentStyles = unique(answers.goals.flatMap((goal) => STYLES_BY_GOAL[goal])).slice(0, 4);
  return {
    ...defaults,
    ...identity,
    goals: answers.goals.length > 0 ? answers.goals : defaults.goals,
    contentStyles: contentStyles.length > 0 ? contentStyles : defaults.contentStyles,
    usedPlatforms: answers.platformsUsed,
  };
};
