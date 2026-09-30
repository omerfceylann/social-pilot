import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge, globals.css'teki özel tipografi skalasını bilmez; öğretmezsek
 * "text-caption" ile "text-fg-muted"ı aynı (renk) grubu sanıp birini siler.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display", "title", "heading", "body-lg", "body", "small", "caption"] },
      ],
    },
  },
});

/** Koşullu sınıfları birleştirir; çakışan Tailwind sınıflarında sonuncusu kazanır. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
