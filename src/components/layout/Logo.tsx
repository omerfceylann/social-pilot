import { cn } from "@/lib/cn";

type LogoProps = {
  /** false: sadece işaret (dar sidebar, mobil). */
  showWordmark?: boolean;
  className?: string;
};

/** SocialPilot işareti: accent kare üzerinde yön oku. ✦ sadece AI'a ait olduğu için kullanılmaz. */
export const Logo = ({ showWordmark = true, className }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-2.5", className)}>
    <span
      aria-hidden
      className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-fg shadow-xs"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M12 2.5 19.2 20.4a.6.6 0 0 1-.83.75L12 18.1l-6.37 3.05a.6.6 0 0 1-.83-.75L12 2.5Z" />
      </svg>
    </span>
    {showWordmark && (
      <span className="text-heading font-semibold tracking-tight text-fg">SocialPilot</span>
    )}
  </span>
);
