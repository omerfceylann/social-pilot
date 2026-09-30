import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Spinner } from "./Spinner";

export const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 items-center justify-center gap-2 font-medium whitespace-nowrap select-none",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out",
    // Yüklenirken buton soluklaşmaz; sadece içindeki spinner döner.
    "active:scale-97 disabled:pointer-events-none [&:disabled:not([aria-busy])]:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        /** Ekranın tek ana eylemi. */
        primary: "bg-accent text-accent-fg shadow-xs hover:bg-accent-hover",
        /** İkincil eylem: görünür ama sakin. */
        secondary:
          "border border-border bg-surface-elevated text-fg shadow-xs hover:border-border-strong hover:bg-surface-muted",
        /** Üçüncül eylem ve araç çubukları. */
        ghost: "text-fg-secondary hover:bg-surface-muted hover:text-fg",
        /** Soft accent: seçili durumlar ve AI ile ilgili hafif eylemler. */
        soft: "bg-accent-soft text-accent-text hover:bg-accent-soft/80",
        danger: "bg-danger-soft text-danger hover:bg-danger hover:text-white",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-small",
        md: "h-10 rounded-lg px-4 text-body",
        lg: "h-12 rounded-lg px-5 text-body-lg",
        "icon-sm": "size-8 rounded-md",
        icon: "size-10 rounded-lg",
      },
    },
    defaultVariants: { variant: "secondary", size: "md" },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Stili, verilen tek çocuğa (ör. Next Link) aktarır. */
    asChild?: boolean;
    loading?: boolean;
  };

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild) {
    return (
      <Slot.Root className={classes} {...props}>
        {children}
      </Slot.Root>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <Spinner className="absolute" />}
      <span className={cn("inline-flex items-center gap-2", loading && "invisible")}>
        {children}
      </span>
    </button>
  );
};
