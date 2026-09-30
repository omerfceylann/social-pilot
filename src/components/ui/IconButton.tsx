import type { ComponentProps } from "react";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

type IconButtonProps = Omit<ComponentProps<typeof Button>, "size" | "children"> & {
  /** Zorunlu: ekran okuyucular ve tooltip için ikonun anlamı. */
  label: string;
  icon: React.ReactNode;
  size?: "sm" | "md";
  showTooltip?: boolean;
};

/** Sadece ikondan oluşan buton. label zorunlu olduğu için erişilebilirlik unutulamaz. */
export const IconButton = ({
  label,
  icon,
  size = "md",
  variant = "ghost",
  showTooltip = true,
  ...props
}: IconButtonProps) => {
  const button = (
    <Button
      variant={variant}
      size={size === "sm" ? "icon-sm" : "icon"}
      aria-label={label}
      {...props}
    >
      {icon}
    </Button>
  );

  return showTooltip ? <Tooltip content={label}>{button}</Tooltip> : button;
};
