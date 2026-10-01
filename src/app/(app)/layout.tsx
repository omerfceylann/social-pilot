import { AppShell } from "@/components/layout/AppShell";
import { AuthGate } from "@/components/layout/AuthGate";

/**
 * Kabuğu (sidebar + navigasyon) paylaşan uygulama sayfaları. "(app)" bir route
 * group: URL'ye eklenmez, sadece bu sayfaları aynı layout altında toplar.
 */
export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <AuthGate>
      <AppShell>{children}</AppShell>
    </AuthGate>
  );
}
