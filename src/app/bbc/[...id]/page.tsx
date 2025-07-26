import { notFound } from "next/navigation";
import BBCContentRenderer from "@/components/feature/bbc-content-renderer";
import { generateBBCPost } from "@/lib/posts";

type BBCPageProps = {
  params: Promise<{
    id: string[];
  }>;
};

export default async function BBCPage({ params }: BBCPageProps) {
  const { id } = await params;
  const contentId = parseInt(id[0]);

  if (isNaN(contentId)) {
    notFound();
  }

  const post = await generateBBCPost(contentId);

  return (
    <BBCContentRenderer
      title={post.title}
      content={post.content}
      audioUrl={post.audio_url}
    />
  );
}
