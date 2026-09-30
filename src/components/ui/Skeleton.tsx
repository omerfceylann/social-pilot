import { cn } from "@/lib/cn";

type SkeletonProps = { className?: string };

/**
 * Yükleme sırasında gerçek içeriğin yerini tutar. Boyutunu çağıran verir,
 * böylece içerik geldiğinde sayfa zıplamaz (spec §36).
 */
export const Skeleton = ({ className }: SkeletonProps) => (
  <div aria-hidden className={cn("skeleton rounded-md", className)} />
);
