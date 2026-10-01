import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { fieldControlClasses } from "./Input";

/**
 * Yerel <select> bilerek kullanılır: mobilde işletim sisteminin kendi seçicisi
 * açılır; kısa listeler için özel bir açılır menüden daha iyi deneyimdir.
 */
export const Select = ({ className, children, ...props }: ComponentProps<"select">) => (
  <div className="relative">
    <select className={cn(fieldControlClasses, "h-10 appearance-none pr-9", className)} {...props}>
      {children}
    </select>
    <ChevronDown
      className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-fg-muted"
      aria-hidden
    />
  </div>
);
