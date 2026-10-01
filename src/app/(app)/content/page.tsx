import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "İçerikler" };

export default function ContentPage() {
  return <PhasePlaceholder title="nav.content" phase={6} />;
}
