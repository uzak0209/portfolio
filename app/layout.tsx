import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "uzak0209 - Portfolio",
  description: "Portfolio website of uzak0209 - Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
