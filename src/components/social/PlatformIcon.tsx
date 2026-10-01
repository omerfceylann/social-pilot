import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { PlatformId } from "@/types";

/**
 * Platformların sade işaretleri. Lucide 1.x marka logolarını kaldırdığı için
 * kendi SVG'lerimiz; birebir logo değil, tanınabilir sadeleştirmeler.
 */
const GLYPHS: Record<PlatformId, ReactNode> = {
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </g>
  ),
  tiktok: (
    <path
      d="M14.5 3v11.2a3.8 3.8 0 1 1-3.8-3.8M14.5 3c.4 2.6 2.4 4.4 5 4.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  youtube: (
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M6.2 5h11.6A4.2 4.2 0 0 1 22 9.2v5.6a4.2 4.2 0 0 1-4.2 4.2H6.2A4.2 4.2 0 0 1 2 14.8V9.2A4.2 4.2 0 0 1 6.2 5Zm4 3.8v6.4l5.4-3.2-5.4-3.2Z"
    />
  ),
  x: (
    <g fill="currentColor">
      <path d="M3.5 3.5h4.8l12.2 17h-4.8z" />
      <path d="m19.6 3.5-6.6 7.4-1.2-1.6 5.2-5.8zM4.4 20.5l6.6-7.4 1.2 1.6-5.2 5.8z" />
    </g>
  ),
  linkedin: (
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm1.8 7v7.5h2.5V10H6.8Zm1.25-3.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM11 10v7.5h2.5v-3.7c0-1.1.6-1.8 1.5-1.8.9 0 1.3.6 1.3 1.7v3.8h2.5v-4.2c0-2.3-1.1-3.5-3-3.5-1.1 0-1.9.5-2.3 1.2V10H11Z"
    />
  ),
};

const COLOR_CLASS: Record<PlatformId, string> = {
  instagram: "text-instagram",
  tiktok: "text-tiktok",
  youtube: "text-youtube",
  x: "text-x",
  linkedin: "text-linkedin",
};

type PlatformIconProps = {
  platform: PlatformId;
  /** true: platformun kendi rengi. false: çevredeki metin rengi. */
  colored?: boolean;
  className?: string;
};

export const PlatformIcon = ({ platform, colored = false, className }: PlatformIconProps) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden
    className={cn("size-5 shrink-0", colored && COLOR_CLASS[platform], className)}
  >
    {GLYPHS[platform]}
  </svg>
);
