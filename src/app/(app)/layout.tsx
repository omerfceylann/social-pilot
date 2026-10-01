import { AppShell } from "@/components/layout/AppShell";
import { AppShellSkeleton } from "@/components/layout/AppShellSkeleton";
import { SessionGate } from "@/components/layout/SessionGate";

/**
 * Kabuğu (sidebar + navigasyon) paylaşan uygulama sayfaları. "(app)" bir route
 * group: URL'ye eklenmez, sadece bu sayfaları aynı layout altında toplar.
 */
export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <SessionGate audience="app" fallback={<AppShellSkeleton />}>
      <AppShell>{children}</AppShell>
    </SessionGate>
  );
}
