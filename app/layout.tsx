import type { Metadata } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "Lucato AI — Get Recommended by AI Search Engines",
  description:
    "Lucato AI makes your business the top answer on ChatGPT, Perplexity, Gemini, and Google. 8 AI agents optimize your presence automatically.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
