"use client";

import { CalendarClock, FilePen, Filter, Link2, Plus, Send, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type ReactNode } from "react";
import { AISparkle } from "@/components/ai/AIBadge";
import { PageContainer, PageHeader } from "@/components/layout/PageHeader";
import { PlatformIcon } from "@/components/social/PlatformIcon";
import { Button } from "@/components/ui/Button";
import { Dropdown } from "@/components/ui/Dropdown";
import { EmptyState } from "@/components/ui/EmptyState";
import { Tabs } from "@/components/ui/Tabs";
import {
  CONTENT_TABS,
  isContentTab,
  useContentLibrary,
  type ContentTab,
  type PlatformFilter,
} from "@/hooks/useContentLibrary";
import { useT } from "@/i18n/useT";
import { revealVariants, staggerContainer, transition } from "@/lib/motion";
import { PLATFORMS } from "@/mock/platforms";
import { generatePostSuggestion } from "@/services/aiService";
import { useBrand } from "@/store/useBrand";
import { useContent } from "@/store/useContent";
import { toast } from "@/store/useToasts";
import {
  PLATFORM_IDS,
  type PlatformId,
  type Post,
  type PostAnalytics,
  type PostSuggestion,
} from "@/types";
import { PlatformFilterBar } from "./PlatformFilterBar";
import { PostRow } from "./PostRow";
import { SuggestionCard } from "./SuggestionCard";

/**
 * İçerikler (spec §17): dört sekme ve tek bir platform filtresi. İkisi de adreste
 * tutulur (/content?tab=drafts&platform=instagram): paylaşımdan sonra doğrudan
 * "Yayınlanan"a dönülebilir, filtreli görünüm paylaşılabilir.
 */
export const ContentLibrary = () => {
  const { t } = useT();
  const router = useRouter();
  const searchParams = useSearchParams();
  const requested = searchParams.get("tab");
  const tab: ContentTab = isContentTab(requested) ? requested : "suggested";
  const platform: PlatformFilter =
    PLATFORM_IDS.find((id) => id === searchParams.get("platform")) ?? null;

  const profile = useBrand((state) => state.profile);
  const createFromSuggestion = useContent((state) => state.createFromSuggestion);
  const createBlankPost = useContent((state) => state.createBlankPost);
  const addSuggestion = useContent((state) => state.addSuggestion);
  const { suggested, drafts, scheduled, published, counts, analytics, connected, filterPlatforms } =
    useContentLibrary(platform);

  const [generating, setGenerating] = useState(false);
  /** Bu oturumda üretilen öneri en başta ve vurgulu gösterilir. */
  const [freshId, setFreshId] = useState<string | null>(null);

  const navigate = (next: { tab: ContentTab; platform: PlatformFilter }) => {
    const params = new URLSearchParams({ tab: next.tab });
    if (next.platform) params.set("platform", next.platform);
    router.replace(`/content?${params.toString()}`, { scroll: false });
  };
  const setTab = (next: string) => {
    if (isContentTab(next)) navigate({ tab: next, platform });
  };
  const setPlatform = (next: PlatformFilter) => navigate({ tab, platform: next });

  /** Filtre yüzünden boş kalan liste için ortak boş durum. */
  const filteredEmpty = platform && (
    <EmptyState
      icon={<Filter />}
      title={t("content.empty.filteredTitle", { platform: PLATFORMS[platform].name })}
      description={t("content.empty.filteredDescription")}
      action={
        <Button variant="secondary" onClick={() => setPlatform(null)}>
          {t("content.clearFilter")}
        </Button>
      }
    />
  );

  const openSuggestion = (suggestion: PostSuggestion) => {
    router.push(`/content/${createFromSuggestion(suggestion)}`);
  };

  const openBlank = (platform: PlatformId) => {
    if (!profile) return;
    const id = createBlankPost({
      platform,
      format: PLATFORMS[platform].defaultFormat,
      theme: profile.contentStyles[0] ?? "productFocused",
    });
    router.push(`/content/${id}`);
  };

  const generate = async () => {
    if (!profile) return;
    setGenerating(true);
    // Tohum olarak zaman: her tıklama farklı bir varyasyon üretir (olay işleyicisinde, render'da değil).
    const next = await generatePostSuggestion(suggested, profile.rules, Date.now());
    setGenerating(false);
    if (!next) return;
    addSuggestion(next);
    setFreshId(next.id);
    setTab("suggested");
    toast.success(t("content.newSuggestionReady"), next.title);
  };

  const fresh = suggested.find((suggestion) => suggestion.id === freshId);
  const orderedSuggestions = fresh
    ? [fresh, ...suggested.filter((suggestion) => suggestion.id !== fresh.id)]
    : suggested;

  const hasAccounts = connected.length > 0;

  return (
    <PageContainer>
      <PageHeader
        title={t("content.title")}
        description={t("content.subtitle")}
        actions={
          hasAccounts && (
            <>
              <Button
                variant="primary"
                onClick={() => void generate()}
                loading={generating}
                disabled={suggested.length === 0}
              >
                <AISparkle />
                {t("content.generateSuggestion")}
              </Button>
              <Dropdown>
                <Dropdown.Trigger asChild>
                  <Button variant="secondary">
                    <Plus />
                    {t("content.blankDraft")}
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Label>{t("content.choosePlatform")}</Dropdown.Label>
                  {connected.map((platform) => (
                    <Dropdown.Item
                      key={platform}
                      icon={<PlatformIcon platform={platform} />}
                      onSelect={() => openBlank(platform)}
                    >
                      {PLATFORMS[platform].name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Content>
              </Dropdown>
            </>
          )
        }
      />

      <Tabs variant="underline" value={tab} onValueChange={setTab} className="flex flex-col gap-6">
        <Tabs.List aria-label={t("content.title")}>
          {CONTENT_TABS.map((value) => (
            <Tabs.Trigger key={value} value={value}>
              {t(`content.tabs.${value}`)}
              {counts[value] > 0 && (
                <span className="rounded-full bg-surface-muted px-1.5 text-caption text-fg-secondary tabular-nums">
                  {counts[value]}
                </span>
              )}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Tek platform varsa filtrelemenin anlamı yok; satır hiç gösterilmez. */}
        {filterPlatforms.length > 1 && (
          <PlatformFilterBar platforms={filterPlatforms} value={platform} onChange={setPlatform} />
        )}

        <Tabs.Content value="suggested">
          {!hasAccounts ? (
            <EmptyState
              icon={<Link2 />}
              title={t("content.empty.noAccountsTitle")}
              description={t("content.empty.noAccountsDescription")}
              action={
                <Button asChild variant="primary">
                  <Link href="/">{t("empty.connectAccount")}</Link>
                </Button>
              }
            />
          ) : orderedSuggestions.length === 0 ? (
            (filteredEmpty ?? (
              <EmptyState
                icon={<Sparkles />}
                title={t("content.empty.suggestedTitle")}
                description={t("content.empty.suggestedDescription")}
              />
            ))
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              transition={transition.base}
            >
              <AnimatePresence initial={false}>
                {orderedSuggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion.id}
                    layout
                    variants={revealVariants}
                    initial="initial"
                    animate="animate"
                    transition={transition.base}
                    className="flex"
                  >
                    <SuggestionCard
                      suggestion={suggestion}
                      highlighted={index === 0}
                      onCreate={openSuggestion}
                      className="w-full"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </Tabs.Content>

        <Tabs.Content value="drafts">
          <PostList
            posts={drafts}
            empty={
              filteredEmpty || (
                <EmptyState
                  icon={<FilePen />}
                  title={t("content.empty.draftsTitle")}
                  description={t("content.empty.draftsDescription")}
                  action={
                    hasAccounts && (
                      <Button variant="secondary" onClick={() => setTab("suggested")}>
                        {t("content.empty.browseSuggestions")}
                      </Button>
                    )
                  }
                />
              )
            }
          />
        </Tabs.Content>

        <Tabs.Content value="scheduled">
          <PostList
            posts={scheduled}
            empty={
              filteredEmpty || (
                <EmptyState
                  icon={<CalendarClock />}
                  title={t("empty.noScheduled")}
                  description={t("content.empty.scheduledDescription")}
                />
              )
            }
          />
        </Tabs.Content>

        <Tabs.Content value="published">
          <PostList
            posts={published}
            analytics={analytics}
            empty={
              filteredEmpty || (
                <EmptyState
                  icon={<Send />}
                  title={t("content.empty.publishedTitle")}
                  description={t("content.empty.publishedDescription")}
                />
              )
            }
          />
        </Tabs.Content>
      </Tabs>
    </PageContainer>
  );
};

type PostListProps = {
  posts: Post[];
  analytics?: Map<string, PostAnalytics>;
  empty: ReactNode;
};

const PostList = ({ posts, analytics, empty }: PostListProps) => {
  if (posts.length === 0) return empty;
  return (
    <motion.ul
      variants={staggerContainer(0.04)}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-2"
    >
      {posts.map((post) => (
        <motion.li key={post.id} variants={revealVariants}>
          <PostRow post={post} analytics={analytics?.get(post.id)} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
