export default function EnglishsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
