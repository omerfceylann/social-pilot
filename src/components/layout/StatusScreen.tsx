"use client";

import { Compass, RotateCcw, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useT } from "@/i18n/useT";

type StatusScreenProps = { kind: "error"; onRetry: () => void } | { kind: "notFound" };

/**
 * Hata ve "sayfa bulunamadı" ekranı (spec §53). Kullanıcıyı çıkmazda bırakmaz:
 * her zaman bir sonraki adım (tekrar dene / genel bakışa dön) gösterilir.
 */
export const StatusScreen = (props: StatusScreenProps) => {
  const { t } = useT();
  const isError = props.kind === "error";

  return (
    <div className="mx-auto flex min-h-[60dvh] w-full max-w-md flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-surface-muted text-fg-secondary [&_svg]:size-6">
        {isError ? <TriangleAlert aria-hidden /> : <Compass aria-hidden />}
      </span>
      <div className="flex flex-col gap-2">
        <h1 className="text-title">{isError ? t("errors.generic") : t("errors.notFoundTitle")}</h1>
        <p className="text-body text-fg-secondary">
          {isError ? t("errors.genericDescription") : t("errors.notFoundDescription")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {props.kind === "error" && (
          <Button variant="primary" onClick={props.onRetry}>
            <RotateCcw />
            {t("errors.retry")}
          </Button>
        )}
        <Button asChild variant={isError ? "secondary" : "primary"}>
          <Link href="/">{t("errors.goHome")}</Link>
        </Button>
      </div>
    </div>
  );
};
