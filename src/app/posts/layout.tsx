import { unstable_ViewTransition as ViewTransition } from "react";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition name={`post-test`}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </div>
    </ViewTransition>
  );
}
