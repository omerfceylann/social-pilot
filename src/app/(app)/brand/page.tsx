import type { Metadata } from "next";
import { Suspense } from "react";
import { BrandView } from "@/components/brand/BrandView";
import { PageSkeleton } from "@/components/layout/AppShellSkeleton";

export const metadata: Metadata = { title: "Marka" };

/** Sekme adresten okunur (/brand?tab=rules) → useSearchParams için Suspense. */
export default function BrandPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <BrandView />
    </Suspense>
  );
}
