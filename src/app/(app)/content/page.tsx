import type { Metadata } from "next";
import { Suspense } from "react";
import { ContentLibrary } from "@/components/content/ContentLibrary";
import { ContentSkeleton } from "@/components/layout/PageSkeletons";

export const metadata: Metadata = { title: "İçerikler" };

/** Sekme adresten okunur (useSearchParams); bu yüzden Suspense sınırı gerekir. */
export default function ContentPage() {
  return (
    <Suspense fallback={<ContentSkeleton />}>
      <ContentLibrary />
    </Suspense>
  );
}
