import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Afrah Limited — Commercial & shopping mall developers",
  description:
    "Al Afrah Limited develops shopping malls, retail plazas, and Grade-A commercial towers across Bangladesh and abroad, built on precision, craft, and trust.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
