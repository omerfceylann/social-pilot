import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard/DashboardView";

export const metadata: Metadata = { title: "Genel Bakış" };

export default function OverviewPage() {
  return <DashboardView />;
}
