import type { Metadata } from "next";
import { Suspense } from "react";
import { CalendarView } from "@/components/calendar/CalendarView";
import { PageSkeleton } from "@/components/layout/AppShellSkeleton";

export const metadata: Metadata = { title: "Takvim" };

/** Görünüm ve odak tarihi adresten okunur (useSearchParams) → Suspense gerekir. */
export default function CalendarPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <CalendarView />
    </Suspense>
  );
}
