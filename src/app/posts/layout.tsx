export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
