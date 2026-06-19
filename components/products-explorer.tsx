"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  catalogProducts,
  productCategories,
  type ProductCategory,
} from "@/lib/products";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CatalogProductCard } from "@/components/product-card";

// CPU architecture chips — decorative selection (visual filter UI).
const architectures = ["x86_64", "ARMv9", "RISC-V"];
const MAX_PRICE = 5000;

/**
 * ProductsExplorer — the interactive part of the Products page.
 *
 * Holds all filter state (categories, max price, architecture) and recomputes
 * the visible product list whenever a filter changes. This is a Client
 * Component because filters need React state and event handlers.
 */
export function ProductsExplorer() {
  // Which category checkboxes are ticked. Empty = show every category.
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>(
    []
  );
  // Upper price limit from the range slider.
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  // Highlighted architecture chip (purely visual here).
  const [selectedArch, setSelectedArch] = useState<string | null>(null);

  // Toggle a category in/out of the selected list.
  const toggleCategory = (category: ProductCategory) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((c) => c !== category)
        : [...current, category]
    );
  };

  // Derive the filtered products. `useMemo` avoids re-filtering on every render.
  const visibleProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        (product.category && selectedCategories.includes(product.category));
      const matchesPrice = (product.priceValue ?? 0) <= maxPrice;
      return matchesCategory && matchesPrice;
    });
  }, [selectedCategories, maxPrice]);

  return (
    <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6 px-4 pb-24 md:px-16">
      {/* ════════════ FILTER SIDEBAR ════════════ */}
      <aside className="col-span-12 space-y-6 lg:col-span-3">
        {/* Categories */}
        <div className="rounded-2xl p-6 glass">
          <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
            Categories
          </h2>
          <div className="space-y-3">
            {productCategories.map((category) => {
              const isChecked = selectedCategories.includes(category);
              return (
                <div key={category} className="flex items-center gap-3">
                  <Checkbox
                    id={`cat-${category}`}
                    checked={isChecked}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label
                    htmlFor={`cat-${category}`}
                    className={cn(
                      "cursor-pointer text-base normal-case tracking-normal transition-colors",
                      isChecked ? "text-primary" : "text-on-surface"
                    )}
                  >
                    {category}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Price range */}
        <div className="rounded-2xl p-6 glass">
          <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
            Price Range
          </h2>
          <input
            type="range"
            min={500}
            max={MAX_PRICE}
            step={100}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            aria-label="Maximum price"
            className="h-2 w-full cursor-pointer rounded-lg accent-primary"
          />
          <div className="mt-4 flex justify-between text-sm text-on-surface-variant">
            <span>$500</span>
            <span>
              {maxPrice >= MAX_PRICE
                ? "$5,000+"
                : `$${maxPrice.toLocaleString()}`}
            </span>
          </div>
        </div>

        {/* Architecture (visual selector) */}
        <div className="rounded-2xl p-6 glass">
          <h2 className="mb-4 font-display text-2xl font-semibold text-primary">
            Architecture
          </h2>
          <div className="flex flex-wrap gap-2">
            {architectures.map((arch) => (
              <button
                key={arch}
                type="button"
                onClick={() =>
                  setSelectedArch((current) => (current === arch ? null : arch))
                }
                className={cn(
                  "rounded-full border px-3 py-1 font-display text-xs font-medium transition-colors",
                  selectedArch === arch
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-outline-variant bg-surface-container-high text-primary hover:border-primary"
                )}
              >
                {arch}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* ════════════ PRODUCT GRID ════════════ */}
      <section className="col-span-12 lg:col-span-9">
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <CatalogProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          // Friendly empty state when filters match nothing.
          <div className="flex h-64 items-center justify-center rounded-2xl glass">
            <p className="text-on-surface-variant">
              No products match your filters. Try widening your price range.
            </p>
          </div>
        )}

        {/* Pagination (static — the demo catalog fits on one page) */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous page"
            className="rounded-lg border border-outline-variant p-2 transition-colors hover:bg-surface-container"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button className="size-10 rounded-lg bg-primary font-display text-sm text-primary-foreground">
            1
          </button>
          {[2, 3].map((page) => (
            <button
              key={page}
              className="size-10 rounded-lg border border-outline-variant text-on-surface-variant transition-colors hover:bg-surface-container"
            >
              {page}
            </button>
          ))}
          <span className="text-on-surface-variant">...</span>
          <button className="size-10 rounded-lg border border-outline-variant text-on-surface-variant transition-colors hover:bg-surface-container">
            12
          </button>
          <button
            type="button"
            aria-label="Next page"
            className="rounded-lg border border-outline-variant p-2 transition-colors hover:bg-surface-container"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
