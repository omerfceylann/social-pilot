import type { Metadata } from "next";
import { ContentEditor } from "@/components/content/editor/ContentEditor";

export const metadata: Metadata = { title: "İçerik" };

/** params bir Promise (Next 16); id'yi sunucuda çözüp istemci editörüne veririz. */
export default async function ContentEditorPage({ params }: PageProps<"/content/[id]">) {
  const { id } = await params;
  return <ContentEditor postId={id} />;
}
