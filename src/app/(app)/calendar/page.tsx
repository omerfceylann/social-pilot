import type { Metadata } from "next";
import { Suspense } from "react";
import { CalendarView } from "@/components/calendar/CalendarView";
import { CalendarSkeleton } from "@/components/layout/PageSkeletons";

export const metadata: Metadata = { title: "Takvim" };

/** Görünüm ve odak tarihi adresten okunur (useSearchParams) → Suspense gerekir. */
export default function CalendarPage() {
  return (
    <Suspense fallback={<CalendarSkeleton />}>
      <CalendarView />
    </Suspense>
  );
}
