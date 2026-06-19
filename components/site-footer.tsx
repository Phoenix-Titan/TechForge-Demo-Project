import Link from "next/link";
import { Mail, Share2 } from "lucide-react";

import { footerLinks, siteConfig } from "@/lib/site";

/**
 * SiteFooter — shared footer with brand line, utility links, and social icons.
 * Pure presentational Server Component (no interactivity needed).
 */
export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-16">
        {/* ── Brand + copyright ── */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="font-display text-lg font-black text-on-surface">
            {siteConfig.shortName}
          </div>
          <p className="text-center text-xs text-on-surface-variant md:text-left">
            © 2024 {siteConfig.name}. {siteConfig.tagline}
          </p>
        </div>

        {/* ── Utility links ── */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Social icons ── */}
        <div className="flex gap-4">
          <Link
            href="#"
            aria-label="Share"
            className="flex size-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:text-primary"
          >
            <Share2 className="size-5" />
          </Link>
          <Link
            href="/contact"
            aria-label="Email us"
            className="flex size-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:text-primary"
          >
            <Mail className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
