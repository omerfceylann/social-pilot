import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "Marka" };

export default function BrandPage() {
  return <PhasePlaceholder title="nav.brand" phase={10} />;
}
