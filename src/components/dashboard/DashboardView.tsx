"use client";

import { ArrowRight, CalendarDays, Link2, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AgentStatusCard } from "@/components/ai/AgentStatusCard";
import { MetricCard } from "@/components/analytics/MetricCard";
import { SuggestionCard } from "@/components/content/SuggestionCard";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { AccountConnectionList } from "@/components/social/AccountConnectionList";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Drawer } from "@/components/ui/Drawer";
import { EmptyState } from "@/components/ui/EmptyState";
import { useDashboard } from "@/hooks/useDashboard";
import { useT } from "@/i18n/useT";
import { useBrand } from "@/store/useBrand";
import { useContent } from "@/store/useContent";
import type { PostSuggestion } from "@/types";
import { SignalList } from "./SignalList";
import { TrendsDrawer } from "./TrendsDrawer";

/**
 * Genel Bakış (spec §9): "Ne oluyor?" ve "Ne yapmalıyım?" Az ama önemli bilgi;
 * trendler ve hesap bağlama ayrı bölüm değil, drawer.
 */
export const DashboardView = () => {
  const { t } = useT();
  const router = useRouter();
  const brandName = useBrand((state) => state.profile?.name ?? "");
  const createFromSuggestion = useContent((state) => state.createFromSuggestion);
  const { firstName, mode, recommendations, signals, metrics, metricDays, agent, trends } =
    useDashboard();
  const [trendsOpen, setTrendsOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const handleCreate = (suggestion: PostSuggestion) => {
    const postId = createFromSuggestion(suggestion);
    router.push(`/content/${postId}`);
  };

  const subtitle =
    mode === "noAccounts"
      ? undefined
      : mode === "starter"
        ? t("starter.subtitle", { brand: brandName })
        : signals.opportunities > 0
          ? t("dashboard.opportunities", { count: signals.opportunities })
          : t("dashboard.noOpportunities");

  return (
    <PageContainer>
      <PageHeader
        title={t("dashboard.greeting", { name: firstName })}
        description={subtitle}
        actions={
          <>
            {/* Hesap yokken tek birincil eylem "Hesap bağla" (spec §48); içerik oluşturmak anlamsız. */}
            {mode !== "noAccounts" && (
              <Button asChild variant="primary">
                <Link href="/content">
                  <Plus />
                  {t("dashboard.createContent")}
                </Link>
              </Button>
            )}
            {trends.length > 0 && (
              <Button variant="secondary" onClick={() => setTrendsOpen(true)}>
                <TrendingUp />
                {/* 375px'te iki buton yan yana sığsın diye mobilde kısa etiket. */}
                <span className="sm:hidden">{t("trends.title")}</span>
                <span className="hidden sm:inline">{t("dashboard.exploreTrends")}</span>
              </Button>
            )}
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="/calendar">
                <CalendarDays />
                {t("dashboard.viewCalendar")}
              </Link>
            </Button>
          </>
        }
      />

      {mode === "noAccounts" ? (
        <EmptyState
          icon={<Link2 />}
          title={t("dashboard.noAccountsTitle")}
          description={t("dashboard.noAccountsDescription")}
          action={
            <Button variant="primary" onClick={() => setConnectOpen(true)}>
              {t("empty.connectAccount")}
            </Button>
          }
        />
      ) : (
        <>
          <SignalList
            opportunities={signals.opportunities}
            pendingComments={signals.pendingComments}
            unreadMessages={signals.unreadMessages}
            nextPost={signals.nextPost}
          />

          {recommendations.length > 0 && (
            <section className="flex flex-col gap-5" aria-labelledby="recommended-heading">
              <div className="flex items-end justify-between gap-4">
                <h2 id="recommended-heading" className="text-title">
                  {mode === "starter" ? t("starter.title") : t("dashboard.recommended")}
                </h2>
                <Link
                  href="/content"
                  className="inline-flex items-center gap-1 text-small font-medium text-accent-text hover:underline"
                >
                  {t("dashboard.seeAllContent")}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </div>
              {/* Mobilde yatay kaydırma (bir sonraki kartın kenarı görünür), tablette 2, masaüstünde 3 sütun.
                  scroll-px-4: snap noktası kenar boşluğunu hesaba katsın, kart ekrana yapışmasın. */}
              <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 [scrollbar-width:none] gap-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
                {recommendations.map((suggestion, index) => (
                  <SuggestionCard
                    key={suggestion.id}
                    suggestion={suggestion}
                    highlighted={index === 0}
                    onCreate={handleCreate}
                    className="w-[80%] shrink-0 snap-start sm:w-auto"
                  />
                ))}
              </div>
            </section>
          )}

          <section className="grid gap-6 lg:grid-cols-3" aria-labelledby="performance-heading">
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div className="flex items-baseline justify-between gap-4">
                <h2 id="performance-heading" className="text-title">
                  {t("dashboard.performance")}
                </h2>
                {metrics && (
                  <span className="text-small text-fg-muted">
                    {t("dashboard.lastDays", { days: metricDays })}
                  </span>
                )}
              </div>
              {metrics ? (
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.key} metric={metric} />
                  ))}
                </div>
              ) : (
                <Card className="flex min-h-40 items-center justify-center text-center">
                  <p className="max-w-xs text-body text-fg-secondary">
                    {t("starter.emptyAnalytics")}
                  </p>
                </Card>
              )}
            </div>
            {agent && (
              <div className="flex flex-col gap-5">
                {/* Başlık hizası için boşluk: performans başlığıyla aynı satırda başlar. */}
                <div className="hidden h-[1.875rem] lg:block" aria-hidden />
                <AgentStatusCard activity={agent} />
              </div>
            )}
          </section>
        </>
      )}

      <TrendsDrawer open={trendsOpen} onOpenChange={setTrendsOpen} trends={trends} />
      <Drawer
        open={connectOpen}
        onOpenChange={setConnectOpen}
        title={t("dashboard.connectTitle")}
        description={t("onboarding.connect.subtitle")}
        closeLabel={t("common.close")}
      >
        <div className="p-4 sm:p-6">
          <AccountConnectionList />
        </div>
      </Drawer>
    </PageContainer>
  );
};
