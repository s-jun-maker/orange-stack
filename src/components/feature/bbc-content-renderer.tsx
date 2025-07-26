import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/../mdx-components";
import { AudioPlayer } from "./audio-player";

interface BBCContentRendererProps {
  title: string;
  content: string | null;
  audioUrl: string | null;
}

export default function BBCContentRenderer({
  title,
  content,
  audioUrl,
}: BBCContentRendererProps) {
  const contentHook = useMDXComponents({});
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-8">
            {title}
          </h1>
          {audioUrl && (
            <div className="mb-8">
              <AudioPlayer src={audioUrl} title="BBC Audio Content" />
            </div>
          )}
          {content && (
            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={content}
                components={{
                  ...contentHook,
                  h1: () => null, // Remove h1 tags from content
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
