import type { Metadata } from "next";
import { Suspense } from "react";
import { ContentLibrary } from "@/components/content/ContentLibrary";
import { PageSkeleton } from "@/components/layout/AppShellSkeleton";

export const metadata: Metadata = { title: "İçerikler" };

/** Sekme adresten okunur (useSearchParams); bu yüzden Suspense sınırı gerekir. */
export default function ContentPage() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ContentLibrary />
    </Suspense>
  );
}
