import type { Metadata } from "next";
import { PhasePlaceholder } from "@/components/layout/PhasePlaceholder";

export const metadata: Metadata = { title: "Gelen Kutusu" };

export default function InboxPage() {
  return <PhasePlaceholder title="nav.inbox" phase={7} />;
}
