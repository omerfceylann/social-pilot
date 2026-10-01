import { useId, type ReactNode } from "react";

type LabelledRowProps = { label: string; children: (labelId: string) => ReactNode };

/** Etiket + kontrol; kontrolün aria-labelledby'si etiketin id'sine bağlanır. */
export const LabelledRow = ({ label, children }: LabelledRowProps) => {
  const labelId = useId();
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span id={labelId} className="text-small font-medium text-fg">
        {label}
      </span>
      {children(labelId)}
    </div>
  );
};
