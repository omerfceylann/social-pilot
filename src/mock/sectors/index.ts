import type { SectorDataset, SectorId } from "@/types";
import { travelDataset } from "./travel";
import { automotiveDataset } from "./automotive";
import { healthDataset } from "./health";
import { localServiceDataset } from "./localService";
import { realEstateDataset } from "./realEstate";
import { educationDataset } from "./education";
import { beautyDataset } from "./beauty";
import { ecommerceDataset } from "./ecommerce";
import { fashionDataset } from "./fashion";
import { fitnessDataset } from "./fitness";
import { restaurantDataset } from "./restaurant";
import { technologyDataset } from "./technology";

/**
 * Sektör → mock veri kayıt defteri. Record tam olduğu için yeni bir SectorId
 * eklenince buraya veri seti eklenmeden derleme geçmez.
 */
export const SECTOR_DATASETS: Record<SectorId, SectorDataset> = {
  restaurant: restaurantDataset,
  technology: technologyDataset,
  fitness: fitnessDataset,
  fashion: fashionDataset,
  ecommerce: ecommerceDataset,
  beauty: beautyDataset,
  education: educationDataset,
  realEstate: realEstateDataset,
  localService: localServiceDataset,
  health: healthDataset,
  automotive: automotiveDataset,
  travel: travelDataset,
};

/** Özel ("Diğer") sektörde kullanılan yedek veri. */
export const FALLBACK_SECTOR_ID: SectorId = "restaurant";
