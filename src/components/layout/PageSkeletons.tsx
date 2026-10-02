"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import { cn } from "@/lib/cn";

/*
 * Sayfaya özel yükleme iskeletleri (spec §36). Her biri gerçek sayfanın ana
 * bloklarını aynı ızgarayla taklit eder; içerik gelince düzen zıplamaz.
 * Genel bir spinner yerine kullanıcı, gelmek üzere olan sayfanın şeklini görür.
 */

type FrameProps = { children: ReactNode; withActions?: boolean };

/** PageContainer + PageHeader'ın iskelet karşılığı. */
const Frame = ({ children, withActions = false }: FrameProps) => (
  <div
    aria-busy="true"
    className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6 sm:px-6 md:px-8 md:pt-16 lg:gap-12 lg:px-12 lg:pb-10"
  >
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-8 w-56 sm:h-10" />
        <Skeleton className="h-5 w-80 max-w-full" />
      </div>
      {withActions && (
        <div className="flex gap-2">
          <Skeleton className="h-10 w-36 rounded-lg" />
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      )}
    </div>
    {children}
  </div>
);

type RepeatProps = { count: number; render: (index: number) => ReactNode };

const Repeat = ({ count, render }: RepeatProps) => (
  <>{Array.from({ length: count }, (_, index) => render(index))}</>
);

type TabBarProps = { count: number; className?: string };

const TabBar = ({ count, className }: TabBarProps) => (
  <div className={cn("flex gap-6 border-b border-border pb-3", className)}>
    <Repeat count={count} render={(index) => <Skeleton key={index} className="h-5 w-20" />} />
  </div>
);

type CardBlockProps = { className: string };

const CardBlock = ({ className }: CardBlockProps) => (
  <Skeleton className={cn("rounded-xl", className)} />
);

export const DashboardSkeleton = () => (
  <Frame withActions>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <Repeat count={5} render={(index) => <CardBlock key={index} className="h-24" />} />
    </div>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      <Repeat count={3} render={(index) => <CardBlock key={index} className="h-16" />} />
    </div>
    <div className="flex flex-col gap-5">
      <Skeleton className="h-7 w-48" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Repeat count={3} render={(index) => <CardBlock key={index} className="h-64" />} />
      </div>
    </div>
  </Frame>
);

export const ContentSkeleton = () => (
  <Frame withActions>
    <div className="flex flex-col gap-6">
      <TabBar count={4} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Repeat count={6} render={(index) => <CardBlock key={index} className="h-60" />} />
      </div>
    </div>
  </Frame>
);

export const EditorSkeleton = () => (
  <div
    aria-busy="true"
    className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-6 sm:px-6 md:px-8 md:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:px-12"
  >
    <div className="flex flex-col gap-6">
      <Skeleton className="h-8 w-64" />
      <CardBlock className="h-14" />
      <CardBlock className="h-48" />
      <CardBlock className="h-32" />
      <CardBlock className="h-24" />
    </div>
    <CardBlock className="hidden h-[640px] lg:block" />
  </div>
);

export const AnalyticsSkeleton = () => (
  <Frame withActions>
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      <Repeat count={4} render={(index) => <CardBlock key={index} className="h-28" />} />
    </div>
    <CardBlock className="h-80" />
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-10">
      <div className="flex flex-col gap-2">
        <Repeat count={5} render={(index) => <CardBlock key={index} className="h-16" />} />
      </div>
      <CardBlock className="h-72" />
    </div>
  </Frame>
);

export const InboxSkeleton = () => (
  <Frame>
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <Repeat
          count={5}
          render={(index) => <Skeleton key={index} className="h-10 w-28 rounded-full" />}
        />
      </div>
      <TabBar count={2} />
      <div className="flex flex-col gap-3">
        <Repeat count={3} render={(index) => <CardBlock key={index} className="h-44" />} />
      </div>
    </div>
  </Frame>
);

export const CalendarSkeleton = () => (
  <Frame withActions>
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Skeleton className="h-9 w-56 rounded-lg" />
        <Skeleton className="h-9 w-48 rounded-lg" />
      </div>
      <div className="hidden grid-cols-7 gap-px overflow-hidden rounded-xl border border-border md:grid">
        <Repeat
          count={35}
          render={(index) => <Skeleton key={index} className="h-28 rounded-none" />}
        />
      </div>
      <div className="flex flex-col gap-3 md:hidden">
        <Repeat count={4} render={(index) => <CardBlock key={index} className="h-20" />} />
      </div>
    </div>
  </Frame>
);

/** Marka ve Ayarlar: sekme/başlık + form bölümleri. */
type FormPageSkeletonProps = { tabs?: number };

export const FormPageSkeleton = ({ tabs = 0 }: FormPageSkeletonProps) => (
  <Frame>
    <div className="flex flex-col gap-6">
      {tabs > 0 && <TabBar count={tabs} />}
      <Repeat count={3} render={(index) => <CardBlock key={index} className="h-48" />} />
    </div>
  </Frame>
);

/**
 * Kabuk iskeleti layout'ta (sunucu bileşeni) render edilir ve hangi sayfanın
 * yükleneceğini bilmez; adresi tarayıcıda okuyup doğru iskeleti seçer.
 */
export const RouteSkeleton = () => {
  const pathname = usePathname();
  if (pathname === "/") return <DashboardSkeleton />;
  if (pathname === "/content") return <ContentSkeleton />;
  if (pathname.startsWith("/content/")) return <EditorSkeleton />;
  if (pathname.startsWith("/analytics")) return <AnalyticsSkeleton />;
  if (pathname.startsWith("/inbox")) return <InboxSkeleton />;
  if (pathname.startsWith("/calendar")) return <CalendarSkeleton />;
  if (pathname.startsWith("/brand")) return <FormPageSkeleton tabs={4} />;
  return <FormPageSkeleton />;
};
