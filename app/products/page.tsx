import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { ProductsExplorer } from "@/components/products-explorer";

/* Page-specific SEO. The title becomes "Products | TechForge Systems" via the
   template defined in the root layout. */
export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse TechForge's high-performance catalog — laptops, desktops, keyboards, and peripherals. Filter by category and price to find your perfect build.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-[100px]">
      {/* ── Page header ── */}
      <Reveal>
        <header className="mx-auto mb-16 flex h-64 max-w-[1440px] flex-col justify-center overflow-hidden rounded-3xl px-4 md:px-16">
          <h1 className="mb-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            High-Performance Catalog
          </h1>
          <p className="max-w-2xl text-lg text-on-surface-variant">
            Precision-engineered hardware for developers, creators, and
            enthusiasts. Filter by performance metrics to find your perfect build.
          </p>
        </header>
      </Reveal>

      {/* ── Filters + product grid (interactive) ── */}
      <ProductsExplorer />
    </main>
  );
}
