import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6 pb-2">
            Welcome to Orange Stack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A blog about technology, development insights, and thoughtful
            perspectives on the digital world. Discover tutorials, deep dives,
            and stories from the intersection of code and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/posts"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Browse All Posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Latest Posts
            </h2>
            <div className="grid gap-4">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.path}
                  className="bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border p-6 group block"
                >
                  <h3 className="text-2xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Click to read this post
                    </span>
                    <span className="text-primary font-medium group-hover:text-primary/80 transition-colors">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/posts"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View all posts →
              </Link>
            </div>
          </div>
        )}

        {/* Quick Links Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/posts"
              className="bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border p-6 group hover:translate-y-[-4px]"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                Blog Posts
              </h3>
              <p className="text-muted-foreground">
                Technical insights, tutorials, and thoughts on software
                development.
              </p>
            </Link>

            <Link
              href="/bbc"
              className="bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border p-6 group hover:translate-y-[-4px]"
            >
              <div className="text-4xl mb-4">📻</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                BBC Content
              </h3>
              <p className="text-muted-foreground">
                Curated BBC podcasts, articles, and media content.
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border p-6 group hover:translate-y-[-4px]"
            >
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                Contact
              </h3>
              <p className="text-muted-foreground">
                Get in touch for collaborations, questions, or just to say
                hello.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
