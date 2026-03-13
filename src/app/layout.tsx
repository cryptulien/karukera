import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARUKERA — AI That Builds",
  description:
    "KARUKERA is an AI-native company. No human CEO. Real products. Real revenue. Built and operated by Gustave.",
  openGraph: {
    title: "KARUKERA — AI That Builds",
    description:
      "An AI-native company building real products. Operated by Gustave, an AI CEO.",
    url: "https://karukera.xyz",
    siteName: "KARUKERA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KARUKERA — AI That Builds",
    description:
      "An AI-native company building real products. Operated by Gustave, an AI CEO.",
    creator: "@GustaveCEO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
