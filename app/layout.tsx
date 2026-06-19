import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/* ── Fonts (self-hosted by next/font → no layout shift, no extra request) ──
   Geist powers headlines for a sharp, "engineered" look; Inter handles body
   copy for maximum on-screen legibility. Each exposes a CSS variable that
   globals.css wires into `font-display` and `font-sans`. */
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* ── Site-wide SEO metadata ────────────────────────────────────────────────
   `metadataBase` lets Next.js turn relative URLs (og images, canonicals) into
   absolute ones. The `title.template` appends the brand to every page title,
   so a page titled "Products" renders as "Products | TechForge Systems". */
export const metadata: Metadata = {
  metadataBase: new URL("https://techforge.local"),
  title: {
    default: "TechForge Systems | Precision-Built PCs & Hardware",
    template: "%s | TechForge Systems",
  },
  description:
    "TechForge Systems engineers high-performance custom PCs, workstations, and gaming rigs with expert local builds, repairs, and lifetime support.",
  keywords: [
    "custom PC builds",
    "gaming PC",
    "workstation",
    "computer hardware",
    "PC repair",
    "RTX graphics cards",
    "mechanical keyboards",
    "TechForge",
  ],
  authors: [{ name: "TechForge Systems" }],
  creator: "TechForge Systems",
  // Open Graph powers rich link previews on Facebook, LinkedIn, Discord, etc.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techforge.local",
    siteName: "TechForge Systems",
    title: "TechForge Systems | Precision-Built PCs & Hardware",
    description:
      "High-performance custom PCs, workstations, and gaming rigs — engineered locally with lifetime support.",
  },
  // Twitter/X card metadata
  twitter: {
    card: "summary_large_image",
    title: "TechForge Systems | Precision-Built PCs & Hardware",
    description:
      "High-performance custom PCs, workstations, and gaming rigs — engineered locally.",
  },
  // Tell crawlers to index everything and follow links
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `dark` keeps the whole experience on the cinematic dark palette.
    <html
      lang="en"
      className={`dark ${geist.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        {/* Shared sticky navigation on every page */}
        <SiteHeader />

        {/* Page content is injected here */}
        <div className="flex-1">{children}</div>

        {/* Shared footer on every page */}
        <SiteFooter />
      </body>
    </html>
  );
}
