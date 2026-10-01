import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "Takvim" };

export default function CalendarPage() {
  return <PhasePlaceholder title="nav.calendar" phase={8} />;
}
