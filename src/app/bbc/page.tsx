import Link from "next/link";
import { getBBCList } from "@/lib/posts";

interface BBCPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BBCPage({ searchParams }: BBCPageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const {
    items: bbcItems,
    totalCount,
    hasMore,
  } = await getBBCList(currentPage, 8);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent py-2">
              BBC Content
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore BBC articles and content
            </p>
          </div>

          <div className="grid gap-6">
            {bbcItems.map((item) => (
              <Link
                key={item.id}
                href={`/bbc/${item.id}`}
                className="group block bg-card rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border p-6"
              >
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
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

          {bbcItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No BBC content available yet.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalCount > 8 && (
            <div className="flex justify-center items-center mt-12 gap-4">
              {currentPage > 1 && (
                <Link
                  href={`/bbc?page=${currentPage - 1}`}
                  className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Previous
                </Link>
              )}

              <span className="text-muted-foreground">
                Page {currentPage} of {Math.ceil(totalCount / 8)}
              </span>

              {hasMore && (
                <Link
                  href={`/bbc?page=${currentPage + 1}`}
                  className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
