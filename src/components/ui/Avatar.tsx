import { cva, type VariantProps } from "class-variance-authority";
import { Avatar as AvatarPrimitive } from "radix-ui";
import { cn } from "@/lib/cn";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden rounded-full bg-surface-muted ring-1 ring-border",
  {
    variants: {
      size: {
        xs: "size-6 text-[0.625rem]",
        sm: "size-8 text-caption",
        md: "size-10 text-small",
        lg: "size-14 text-body-lg",
      },
    },
    defaultVariants: { size: "md" },
  },
);

type AvatarProps = VariantProps<typeof avatarVariants> & {
  name: string;
  src?: string;
  className?: string;
};

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toLocaleUpperCase("tr"))
    .join("");

/** Görsel yüklenemezse isim baş harflerine düşer. */
export const Avatar = ({ name, src, size, className }: AvatarProps) => (
  <AvatarPrimitive.Root className={cn(avatarVariants({ size }), className)}>
    {src && <AvatarPrimitive.Image src={src} alt={name} className="size-full object-cover" />}
    <AvatarPrimitive.Fallback
      delayMs={src ? 400 : 0}
      className="flex size-full items-center justify-center font-semibold text-fg-secondary"
    >
      {initialsOf(name)}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);
