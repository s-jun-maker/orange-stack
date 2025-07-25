import Link from "next/link";
import { getEnglishs } from "@/lib/posts";

export default async function EnglishsPage() {
  const englishs = await getEnglishs();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent py-2">
              English Posts
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore English language content and articles
            </p>
          </div>

          <div className="grid gap-6">
            {englishs.map((english) => (
              <Link
                key={english.slug}
                href={english.path}
                className="group block bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border p-6"
              >
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {english.title}
                </h2>
                <div className="flex items-center text-muted-foreground group-hover:translate-x-1 transition-transform">
                  <span>Read article</span>
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {englishs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No English posts available yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}