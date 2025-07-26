import { getPosts } from "@/lib/posts";
import { Post } from "@/components/feature/post";

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6 pb-2">
            Posts
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ai, Web, Data, and more. Explore our latest posts and articles.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Post key={post.slug} post={post} />
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
