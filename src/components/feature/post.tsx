import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

interface Post {
  slug: string;
  path: string;
  title: string;
}

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  return (
    <ViewTransition name={`post-${post.slug}`}>
      <Link
        href={post.path}
        className="group block p-8 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground mt-2">Click to read more</p>
          </div>
          <div className="text-primary group-hover:translate-x-1 transition-transform">
            →
          </div>
        </div>
      </Link>
    </ViewTransition>
  );
}
