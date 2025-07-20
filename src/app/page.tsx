import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6 pb-2">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover insights, tutorials, and thoughts on technology,
            development, and beyond.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Latest Posts
          </h2>
          {posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.path}
                  className="group block p-8 bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Click to read more
                      </p>
                    </div>
                    <div className="text-primary group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-xl text-muted-foreground">No posts yet</p>
              <p className="text-muted-foreground/80 mt-2">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
