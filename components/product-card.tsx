import Image from "next/image";
import { ArrowRight, ShoppingCart } from "lucide-react";

import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* Maps a product's status to the matching Badge style. */
function statusVariant(status: Product["status"]) {
  if (status === "Best Seller") return "tertiary" as const;
  if (status === "Limited") return "warning" as const;
  return "success" as const; // "In Stock"
}

/**
 * FeaturedProductCard — the compact card used in the Home page "Top Selling"
 * grid. Photo fills the top; specs, copy, price, and an add-to-cart button sit
 * below in a glass footer.
 */
export function FeaturedProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col rounded-xl border border-outline-variant/20 transition-all glass hover:scale-[1.02]">
      {/* Product photo */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl bg-surface-container-highest/30">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          // Tell the optimizer how wide the image renders at each breakpoint
          // so it serves the smallest file possible.
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {product.status && (
          <Badge className="absolute right-4 top-4">{product.status}</Badge>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <Badge key={spec} variant="spec">
              {spec}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold">{product.name}</h3>
        <p className="mb-6 flex-grow text-sm text-on-surface-variant">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-primary">
            {product.price}
          </span>
          <Button
            variant="container"
            size="icon"
            aria-label={`Add ${product.name} to cart`}
            className="glow-hover"
          >
            <ShoppingCart className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * CatalogProductCard — the larger card used on the Products page. Photo is
 * shown "contained" on a dark stage; a full-width "View Details" button anchors
 * the footer.
 */
export function CatalogProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl transition-all duration-300 glass glow-hover">
      {/* Product photo on a dark stage */}
      <div className="relative aspect-square bg-surface-container-lowest p-6">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-6"
        />
        {product.status && (
          <Badge
            variant={statusVariant(product.status)}
            className="absolute right-4 top-4 rounded-md uppercase"
          >
            {product.status}
          </Badge>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-grow flex-col p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-on-surface">
            {product.name}
          </h3>
          <span className="font-display text-xl font-semibold text-primary">
            {product.price}
          </span>
        </div>
        <p className="mb-6 text-on-surface-variant">{product.description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {product.specs.map((spec) => (
            <Badge key={spec} variant="spec">
              {spec}
            </Badge>
          ))}
        </div>
        <Button variant="secondary" className="mt-auto w-full">
          View Details
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </article>
  );
}
