"use client";

import { motion } from "motion/react";
import { Tabs as TabsPrimitive } from "radix-ui";
import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";

type TabsVariant = "segmented" | "underline";

type TabsContextValue = {
  value: string;
  variant: TabsVariant;
  /** Aynı sayfadaki iki Tabs'ın göstergeleri birbirine karışmasın diye örneğe özel. */
  indicatorId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs parçaları <Tabs> içinde kullanılmalı.");
  return context;
};

type TabsRootProps = Omit<
  ComponentProps<typeof TabsPrimitive.Root>,
  "value" | "defaultValue" | "onValueChange"
> & {
  variant?: TabsVariant;
  /** Kontrollü kullanım: değer dışarıdan yönetilir. */
  value?: string;
  /** Kontrolsüz kullanım: başlangıç değeri. */
  defaultValue?: string;
  onValueChange?: (value: string) => void;
};

const TabsRoot = ({
  variant = "segmented",
  value: controlledValue,
  defaultValue = "",
  onValueChange,
  children,
  ...props
}: TabsRootProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;
  const indicatorId = useId();

  const handleValueChange = (next: string) => {
    if (controlledValue === undefined) setUncontrolledValue(next);
    onValueChange?.(next);
  };

  const contextValue = useMemo(
    () => ({ value, variant, indicatorId }),
    [value, variant, indicatorId],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root value={value} onValueChange={handleValueChange} {...props}>
        {children}
      </TabsPrimitive.Root>
    </TabsContext.Provider>
  );
};

const listClasses: Record<TabsVariant, string> = {
  segmented: "inline-flex max-w-full gap-0.5 rounded-lg bg-surface-muted p-1",
  underline: "flex gap-6 border-b border-border",
};

const TabsList = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) => {
  const { variant } = useTabsContext();
  return (
    <TabsPrimitive.List
      className={cn(listClasses[variant], "[scrollbar-width:none] overflow-x-auto", className)}
      {...props}
    />
  );
};

const triggerClasses: Record<TabsVariant, string> = {
  segmented: "h-8 rounded-md px-3 text-small",
  underline: "pb-3 text-body",
};

const indicatorClasses: Record<TabsVariant, string> = {
  segmented: "inset-0 rounded-md bg-surface-raised shadow-sm ring-1 ring-border",
  underline: "inset-x-0 -bottom-px h-0.5 rounded-full bg-accent",
};

type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Trigger> & {
  value: string;
  children: ReactNode;
};

const TabsTrigger = ({ value, className, children, ...props }: TabsTriggerProps) => {
  const { value: activeValue, variant, indicatorId } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center gap-1.5 font-medium whitespace-nowrap",
        "text-fg-secondary transition-colors duration-150 hover:text-fg data-[state=active]:text-fg",
        "[&_svg]:size-4",
        triggerClasses[variant],
        className,
      )}
      {...props}
    >
      {isActive && (
        <motion.span
          layoutId={indicatorId}
          transition={transition.indicator}
          className={cn("absolute", indicatorClasses[variant])}
          aria-hidden
        />
      )}
      <span className="relative inline-flex items-center gap-1.5">{children}</span>
    </TabsPrimitive.Trigger>
  );
};

const TabsContent = ({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cn("focus-visible:outline-none", className)} {...props} />
);

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
