import { Skeleton } from "@/components/ui/Skeleton";
import { RouteSkeleton } from "./PageSkeletons";

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
      <RouteSkeleton />
    </div>
  </div>
);
