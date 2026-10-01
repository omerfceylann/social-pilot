import { Skeleton } from "@/components/ui/Skeleton";

/**
 * Store'lar yüklenirken kabuğun şeklini korur (spec §36): kullanıcı boş ekran
 * yerine sayfanın gelmek üzere olan iskeletini görür; içerik gelince zıplama olmaz.
 */
export const AppShellSkeleton = () => (
  <div className="flex min-h-dvh" aria-busy="true">
    <div className="hidden w-[76px] shrink-0 flex-col gap-3 border-r border-border bg-surface p-4 md:flex lg:w-[248px]">
      <Skeleton className="mb-6 h-8 w-8 rounded-lg lg:w-32" />
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton key={index} className="h-9 w-full rounded-lg" />
      ))}
    </div>
    <div className="flex flex-1 flex-col">
      <div className="flex h-14 items-center border-b border-border px-4 md:hidden">
        <Skeleton className="h-8 w-32 rounded-lg" />
      </div>
      <PageSkeleton />
    </div>
  </div>
);

/** Genel sayfa iskeleti: başlık + birkaç içerik bloğu. Sayfalar kendi iskeletini de yazabilir. */
export const PageSkeleton = () => (
  <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 md:px-8 md:pt-16 lg:px-12 lg:pb-10">
    <div className="flex flex-col gap-3">
      <Skeleton className="h-9 w-56" />
      <Skeleton className="h-4 w-80 max-w-full" />
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Skeleton className="h-28 rounded-xl" />
      <Skeleton className="h-28 rounded-xl" />
      <Skeleton className="h-28 rounded-xl" />
    </div>
    <Skeleton className="h-64 rounded-xl" />
  </div>
);
