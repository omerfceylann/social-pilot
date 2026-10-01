import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "Ayarlar" };

export default function SettingsPage() {
  return <PhasePlaceholder title="nav.settings" phase={10} />;
}
