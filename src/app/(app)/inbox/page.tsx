import type { Metadata } from "next";
import { Suspense } from "react";
import { InboxView } from "@/components/inbox/InboxView";
import { PageSkeleton } from "@/components/layout/AppShellSkeleton";

export const metadata: Metadata = { title: "Gelen Kutusu" };

/** Platform, görünüm ve açık konuşma adresten okunur (useSearchParams) → Suspense gerekir. */
export default function InboxPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <InboxView />
    </Suspense>
  );
}
