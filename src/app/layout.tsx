import "./globals.css";
import { Header } from "@/components/feature/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main className="container mx-auto px-0 py-8">{children}</main>
      </body>
    </html>
  );
}
