import type { Metadata } from "next";
import { StatusScreen } from "@/components/layout/StatusScreen";

export const metadata: Metadata = { title: "Sayfa bulunamadı" };

/** Eşleşmeyen tüm adresler (ör. /eski-sayfa) bu ekrana düşer. */
export default function NotFound() {
  return <StatusScreen kind="notFound" />;
}
