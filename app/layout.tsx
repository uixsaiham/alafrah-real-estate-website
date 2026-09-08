import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Estate — Modern architecture, sustainable development",
  description:
    "Green Estate develops residential and commercial properties across Bangladesh and abroad, built on sustainability, precision, and trust.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
