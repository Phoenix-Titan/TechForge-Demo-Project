"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * SiteHeader — the sticky, frosted-glass navigation bar shown on every page.
 *
 * Client component because it (a) highlights the active link based on the
 * current route and (b) opens/closes a mobile menu with local state.
 */
export function SiteHeader() {
  // Current URL path — used to mark the active nav link.
  const pathname = usePathname();
  // Whether the mobile dropdown menu is open.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // A link is "active" when its href matches the current path. "/" must match
  // exactly so it isn't highlighted on every page.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 z-50 h-[72px] w-full border-b border-outline-variant/30 bg-background/80 shadow-sm backdrop-blur-[20px]">
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-16">
        {/* ── Brand / Logo ── */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-on-surface transition-colors hover:text-primary"
        >
          {siteConfig.shortName}{" "}
          <span className="text-on-surface-variant">local</span>
        </Link>

        {/* ── Desktop navigation links ── */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-sm font-medium tracking-wide transition-colors",
                isActive(link.href)
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Right side: search (desktop) + CTA + mobile toggle ── */}
        <div className="flex items-center gap-4">
          {/* Decorative search field, hidden on smaller screens */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-on-surface-variant" />
            <Input
              type="search"
              placeholder="Search components..."
              aria-label="Search products"
              className="h-10 w-56 rounded-lg bg-surface-container-low pl-10 text-sm"
            />
          </div>

          {/* Primary call-to-action */}
          <Button asChild variant="container" size="sm" className="hidden sm:inline-flex">
            <Link href="/products">Build PC</Link>
          </Button>

          {/* Mobile menu open/close button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="text-on-surface md:hidden"
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      {isMobileMenuOpen && (
        <div className="border-b border-outline-variant/30 bg-background/95 backdrop-blur-[20px] md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // close after navigating
                className={cn(
                  "rounded-lg px-4 py-3 font-display text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="container" className="mt-2">
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Build PC
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
