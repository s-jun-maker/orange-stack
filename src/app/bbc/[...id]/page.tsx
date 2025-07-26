import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db, bbcContentTable } from "@/db";
import BBCContentRenderer from "@/components/feature/BBCContentRenderer";

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

  try {
    const result = await db
      .select()
      .from(bbcContentTable)
      .where(eq(bbcContentTable.id, contentId))
      .limit(1);

    if (result.length === 0) {
      notFound();
    }

    const content = result[0];

    return (
      <BBCContentRenderer
        title={content.title}
        content={content.content}
        audioUrl={content.audio_url}
      />
    );
  } catch (error) {
    console.error("Error fetching BBC content:", error);
    notFound();
  }
}

export async function generateMetadata({ params }: BBCPageProps) {
  const { id } = await params;
  const contentId = parseInt(id[0]);

  if (isNaN(contentId)) {
    return {
      title: "Not Found",
    };
  }

  try {
    const result = await db
      .select({ title: bbcContentTable.title })
      .from(bbcContentTable)
      .where(eq(bbcContentTable.id, contentId))
      .limit(1);

    if (result.length === 0) {
      return {
        title: "Not Found",
      };
    }

    return {
      title: result[0].title,
    };
  } catch {
    return {
      title: "BBC Learning English",
    };
  }
}
