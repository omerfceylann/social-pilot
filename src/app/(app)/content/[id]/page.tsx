import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "İçerik" };

/** GEÇİCİ: İçerik editörü Faz 6'da. Şimdilik öneriden oluşturulan taslağın açılacağı yer. */
export default function ContentEditorPage() {
  return <PhasePlaceholder title="nav.content" phase={6} />;
}
