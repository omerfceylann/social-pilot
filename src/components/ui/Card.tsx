import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const cardVariants = cva("rounded-xl border border-border bg-surface", {
  variants: {
    padding: {
      none: "",
      sm: "p-4",
      md: "p-5 sm:p-6",
      lg: "p-6 sm:p-8",
    },
    /** Tıklanabilir kartlarda çok hafif yükselme (spec §52). */
    interactive: {
      true: [
        "transition-[border-color,box-shadow,transform] duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
      ],
      false: "",
    },
  },
  defaultVariants: { padding: "md", interactive: false },
});

type CardProps = ComponentProps<"div"> & VariantProps<typeof cardVariants>;

export const Card = ({ className, padding, interactive, ...props }: CardProps) => (
  <div className={cn(cardVariants({ padding, interactive }), className)} {...props} />
);
