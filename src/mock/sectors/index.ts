import type { SectorDataset, SectorId } from "@/types";
import { fashionDataset } from "./fashion";
import { fitnessDataset } from "./fitness";
import { restaurantDataset } from "./restaurant";
import { technologyDataset } from "./technology";

/**
 * Sektör → mock veri kayıt defteri. Yeni sektör eklemek: klasörü oluştur,
 * buraya bir satır ekle. (Faz 11'de kalan sektörler eklenince Partial kalkacak.)
 */
export const SECTOR_DATASETS: Partial<Record<SectorId, SectorDataset>> = {
  restaurant: restaurantDataset,
  technology: technologyDataset,
  fitness: fitnessDataset,
  fashion: fashionDataset,
};

/** Özel ("Diğer") ya da verisi olmayan sektörlerde kullanılan yedek veri. */
export const FALLBACK_SECTOR_ID: SectorId = "restaurant";
