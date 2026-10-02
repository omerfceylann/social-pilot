import type { Metadata } from "next";
import { Suspense } from "react";
import { BrandView } from "@/components/brand/BrandView";
import { FormPageSkeleton } from "@/components/layout/PageSkeletons";

export const metadata: Metadata = { title: "Marka" };

/** Sekme adresten okunur (/brand?tab=rules) → useSearchParams için Suspense. */
export default function BrandPage() {
  return (
    <Suspense fallback={<FormPageSkeleton tabs={4} />}>
      <BrandView />
    </Suspense>
  );
}
