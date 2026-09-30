import { createRandom, type SeededRandom } from "@/lib/random";
import { addDays, toDayKey } from "@/lib/time";
import type {
  AnalyticsBaseline,
  AnalyticsInsight,
  AnalyticsRecommendation,
  ContentFormat,
  MetricSummary,
  PerformanceTier,
  PlatformId,
  Post,
  PostAnalytics,
} from "@/types";
import { PLATFORM_IDS } from "@/types";

/**
 * Tüm analitik sayılar burada hesaplanır; hiçbiri veride sabit yazılı değildir.
 * Aynı girdiler her zaman aynı sonucu verir (tohumlu rastgelelik).
 */

const FORMAT_REACH_FACTOR: Record<ContentFormat, number> = {
  reel: 1.6,
  short: 1.4,
  video: 1.25,
  carousel: 1.1,
  post: 0.9,
  story: 0.45,
};

/** [min, max] çarpan aralıkları. */
const TIER_VIEWS: Record<PerformanceTier, [number, number]> = {
  high: [1.6, 2.3],
  average: [0.85, 1.2],
  low: [0.35, 0.65],
};
const TIER_ENGAGEMENT: Record<PerformanceTier, [number, number]> = {
  high: [1.35, 1.6],
  average: [0.85, 1.1],
  low: [0.45, 0.7],
};

const HOUR_MS = 3_600_000;
/** Bir post ilk 72 saatte nihai izlenmesine ulaşır. */
const GROWTH_WINDOW_HOURS = 72;

const pickTier = (random: SeededRandom): PerformanceTier => {
  const roll = random.next();
  if (roll < 0.25) return "high";
  if (roll < 0.8) return "average";
  return "low";
};

/** Yeni postlar düşük başlar ve 3 günde olgunlaşır. */
const ageFactor = (publishedAt: string, now: Date) => {
  const hours = Math.max(0, (now.getTime() - new Date(publishedAt).getTime()) / HOUR_MS);
  return Math.min(1, 0.12 + (hours / GROWTH_WINDOW_HOURS) * 0.88);
};

export const getPostAnalytics = (
  post: Post,
  baseline: AnalyticsBaseline,
  now = new Date(),
): PostAnalytics | null => {
  if (post.status !== "published" || !post.publishedAt) return null;

  const random = createRandom(post.id);
  const tier = post.performanceHint ?? pickTier(random);
  const [viewMin, viewMax] = TIER_VIEWS[tier];
  const [erMin, erMax] = TIER_ENGAGEMENT[tier];

  const views = Math.round(
    baseline.avgViews[post.platform] *
      FORMAT_REACH_FACTOR[post.format] *
      random.between(viewMin, viewMax) *
      ageFactor(post.publishedAt, now),
  );
  const reach = Math.round(views * random.between(0.62, 0.8));
  const engagementRate = Number(
    (baseline.engagementRate * random.between(erMin, erMax)).toFixed(1),
  );

  const interactions = Math.round((reach * engagementRate) / 100);
  const likes = Math.round(interactions * random.between(0.72, 0.8));
  const comments = Math.round(interactions * random.between(0.04, 0.07));
  const shares = Math.round(interactions * random.between(0.08, 0.12));
  const saves = Math.max(0, interactions - likes - comments - shares);

  return { postId: post.id, views, reach, likes, comments, shares, saves, engagementRate, tier };
};

const publishedPosts = (posts: Post[]) =>
  posts.filter((post): post is Post & { publishedAt: string } => post.status === "published");

type OverviewOptions = { days: number; now?: Date; seed: string };

/**
 * Hesap geneli 4 metrik + günlük seri. Seçilen dönemi bir önceki eşit
 * uzunluktaki dönemle karşılaştırır. Yeni yayınlanan postlar o günün erişimini artırır.
 */
export const getAccountOverview = (
  posts: Post[],
  baseline: AnalyticsBaseline,
  { days, now = new Date(), seed }: OverviewOptions,
): MetricSummary[] => {
  const published = publishedPosts(posts);
  const analyticsByDay = new Map<string, PostAnalytics[]>();
  for (const post of published) {
    const analytics = getPostAnalytics(post, baseline, now);
    if (!analytics) continue;
    const key = toDayKey(post.publishedAt);
    analyticsByDay.set(key, [...(analyticsByDay.get(key) ?? []), analytics]);
  }

  const totalFollowers = PLATFORM_IDS.reduce((sum, id) => sum + baseline.followers[id], 0);
  const totalDays = days * 2;
  const reach: number[] = [];
  const views: number[] = [];
  const engagement: number[] = [];
  const followerGain: number[] = [];

  for (let offset = totalDays - 1; offset >= 0; offset--) {
    const date = addDays(now, -offset);
    const key = toDayKey(date);
    const random = createRandom(`${seed}:${key}`);
    const weekend = date.getDay() === 0 || date.getDay() === 6 ? 1.12 : 1;
    const dayPosts = analyticsByDay.get(key) ?? [];
    const postViews = dayPosts.reduce((sum, item) => sum + item.views, 0);
    const postReach = dayPosts.reduce((sum, item) => sum + item.reach, 0);

    reach.push(
      Math.round(baseline.dailyReach * random.between(0.8, 1.15) * weekend + postReach * 0.6),
    );
    views.push(
      Math.round(baseline.dailyReach * 1.35 * random.between(0.8, 1.15) + postViews * 0.7),
    );
    engagement.push(
      Number(
        (dayPosts.length > 0
          ? dayPosts.reduce((sum, item) => sum + item.engagementRate, 0) / dayPosts.length
          : baseline.engagementRate * random.between(0.75, 1.05)
        ).toFixed(1),
      ),
    );
    followerGain.push(
      Math.round(baseline.dailyFollowerGrowth * random.between(0.4, 1.6) + postReach * 0.004),
    );
  }

  // Takipçi serisi: bugünkü toplamdan geriye doğru kazanımları çıkararak.
  const followers: number[] = new Array(totalDays);
  let running = totalFollowers;
  for (let index = totalDays - 1; index >= 0; index--) {
    followers[index] = running;
    running -= followerGain[index] ?? 0;
  }

  const dates = Array.from({ length: totalDays }, (_, index) =>
    toDayKey(addDays(now, index - totalDays + 1)),
  );

  const summarize = (
    key: MetricSummary["key"],
    values: number[],
    aggregate: "sum" | "avg" | "last",
  ): MetricSummary => {
    const previous = values.slice(0, days);
    const current = values.slice(days);
    const reduce = (list: number[]) => {
      if (aggregate === "last") return list.at(-1) ?? 0;
      const sum = list.reduce((total, value) => total + value, 0);
      return aggregate === "sum" ? sum : sum / Math.max(1, list.length);
    };
    const value = reduce(current);
    const before = reduce(previous);
    return {
      key,
      value: aggregate === "avg" ? Number(value.toFixed(1)) : Math.round(value),
      changePct: before === 0 ? 0 : Number((((value - before) / before) * 100).toFixed(1)),
      series: current.map((point, index) => ({ date: dates[days + index] ?? "", value: point })),
    };
  };

  return [
    summarize("reach", reach, "sum"),
    summarize("engagement", engagement, "avg"),
    summarize("followers", followers, "last"),
    summarize("views", views, "sum"),
  ];
};

export type RankedPost = { post: Post; analytics: PostAnalytics };

export const getTopPosts = (
  posts: Post[],
  baseline: AnalyticsBaseline,
  limit = 3,
  now = new Date(),
): RankedPost[] =>
  publishedPosts(posts)
    .flatMap((post) => {
      const analytics = getPostAnalytics(post, baseline, now);
      return analytics ? [{ post, analytics }] : [];
    })
    .sort(
      (a, b) =>
        b.analytics.engagementRate * b.analytics.reach -
        a.analytics.engagementRate * a.analytics.reach,
    )
    .slice(0, limit);

const average = (values: number[]) =>
  values.reduce((sum, value) => sum + value, 0) / Math.max(1, values.length);

/**
 * Veriden içgörü çıkarır: hangi tema + format ortalamanın üstünde, hangi platform öne çıkıyor.
 * Tek bir post bir eğilim sayılmaz; en az 2 örnekli gruplar dikkate alınır.
 */
export const computeInsights = (
  posts: Post[],
  baseline: AnalyticsBaseline,
  now = new Date(),
): { insights: AnalyticsInsight[]; recommendation: AnalyticsRecommendation | null } => {
  const ranked = publishedPosts(posts).flatMap((post) => {
    const analytics = getPostAnalytics(post, baseline, now);
    return analytics ? [{ post, analytics }] : [];
  });
  if (ranked.length < 3) return { insights: [], recommendation: null };

  const overall = average(ranked.map(({ analytics }) => analytics.engagementRate));
  const insights: AnalyticsInsight[] = [];

  // Temaya göre grupla; raporlanan format, grubun en iyi postunun formatı.
  const groups = new Map<string, RankedPost[]>();
  for (const item of ranked) {
    groups.set(item.post.theme, [...(groups.get(item.post.theme) ?? []), item]);
  }
  const bestGroup = [...groups.values()]
    .filter((group) => group.length >= 2)
    .map((group) => ({
      group,
      rate: average(group.map(({ analytics }) => analytics.engagementRate)),
    }))
    .sort((a, b) => b.rate - a.rate)[0];

  let recommendation: AnalyticsRecommendation | null = null;
  const leader = bestGroup?.group.toSorted(
    (a, b) => b.analytics.engagementRate - a.analytics.engagementRate,
  )[0]?.post;
  if (bestGroup && leader && bestGroup.rate > overall) {
    insights.push({
      kind: "themeLift",
      theme: leader.theme,
      format: leader.format,
      liftPct: Math.round(((bestGroup.rate - overall) / overall) * 100),
    });
    recommendation = {
      theme: leader.theme,
      format: leader.format,
      platform: leader.platform,
      withinDays: 3,
    };
  }

  const byPlatform = new Map<PlatformId, number[]>();
  for (const { post, analytics } of ranked) {
    byPlatform.set(post.platform, [
      ...(byPlatform.get(post.platform) ?? []),
      analytics.engagementRate,
    ]);
  }
  const bestPlatform = [...byPlatform.entries()]
    .map(([platform, rates]) => ({ platform, rate: average(rates) }))
    .sort((a, b) => b.rate - a.rate)[0];
  if (bestPlatform && bestPlatform.rate > overall) {
    insights.push({
      kind: "platformLead",
      platform: bestPlatform.platform,
      liftPct: Math.round(((bestPlatform.rate - overall) / overall) * 100),
    });
  }

  const best = [...ranked].sort(
    (a, b) => b.analytics.engagementRate - a.analytics.engagementRate,
  )[0];
  if (best?.post.publishedAt) {
    const date = new Date(best.post.publishedAt);
    insights.push({ kind: "bestTime", weekday: date.getDay(), hour: date.getHours() });
  }

  return { insights, recommendation };
};
