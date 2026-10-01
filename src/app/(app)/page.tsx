import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "Genel Bakış" };

export default function OverviewPage() {
  return <PhasePlaceholder title="nav.overview" phase={5} />;
}
