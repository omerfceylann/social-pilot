import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "Analitik" };

export default function AnalyticsPage() {
  return <PhasePlaceholder title="nav.analytics" phase={9} />;
}
