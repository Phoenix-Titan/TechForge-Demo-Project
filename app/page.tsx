import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Hammer,
  ShieldCheck,
  Terminal,
  Verified,
  Wrench,
} from "lucide-react";

import { featuredProducts } from "@/lib/products";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeaturedProductCard } from "@/components/product-card";

/* The Home page inherits the site-wide metadata from layout.tsx, so the title
   stays "TechForge Systems | Precision-Built PCs & Hardware". */

/* ── Page data kept local to the file it's used in ──────────────────────── */

// Bento grid of hardware categories. `span` controls the tile's grid footprint.
const hardwareCategories = [
  {
    title: "Modern Ultrabooks",
    tagline: "Precision Engineering",
    blurb: "Powerful performance in a slim silhouette.",
    span: "md:col-span-2 md:row-span-2",
    image:
      "/images/cat-laptops.jpg",
    alt: "Modern ultrabook laptop on a minimalist dark desk with cool blue highlights.",
  },
  {
    title: "Gaming & Workstations",
    blurb: "",
    span: "md:col-span-2 md:row-span-1",
    image:
      "/images/cat-desktops.jpg",
    alt: "Gaming desktop tower with a transparent side panel showing glowing blue internals.",
  },
  {
    title: "Keyboards",
    blurb: "",
    span: "md:col-span-1 md:row-span-1",
    image:
      "/images/cat-keyboards.jpg",
    alt: "Enthusiast mechanical keyboard with electric-blue RGB backlit keys in a dark setting.",
  },
  {
    title: "Accessories",
    blurb: "",
    span: "md:col-span-1 md:row-span-1",
    image:
      "/images/cat-accessories.jpg",
    alt: "Professional computer accessories — wireless mouse and headphones — in a dark monochrome style.",
  },
];

// Three selling points in the "Expert Builds" section.
const expertFeatures = [
  {
    icon: Hammer,
    title: "Custom PC Configuration",
    blurb:
      "Tailored components selected for your specific creative or gaming workload.",
  },
  {
    icon: Wrench,
    title: "Local Repair Services",
    blurb:
      "Don't mail your PC away. Get professional repairs and upgrades right here in the city.",
  },
  {
    icon: ShieldCheck,
    title: "Stress Tested & Verified",
    blurb:
      "Every build undergoes 24-hour benchmark testing before it leaves our shop.",
  },
];

// JSON-LD structured data helps Google show a richer search result for the brand.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "TechForge Systems",
  description:
    "High-performance custom PCs, workstations, and gaming rigs with expert local builds, repairs, and lifetime support.",
  url: "https://techforge.local",
  priceRange: "$$-$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "240",
  },
};

export default function HomePage() {
  return (
    <main className="pt-[72px]">
      {/* Structured data for SEO (invisible to users, read by crawlers) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden md:min-h-[820px]">
        {/* Full-bleed background photo. `priority` preloads it because it's the
            Largest Contentful Paint element (above the fold). */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-pc.jpg"
            alt="High-end gaming PC interior with electric-blue liquid cooling and glowing RGB components."
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
          {/* Left-to-right gradient so the headline stays readable over the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        {/* Hero copy */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-16">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Level Up <br />
              <span className="text-primary">Your Setup</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-on-surface-variant">
              Engineered for elite performance. Discover precision-built
              workstations and gaming rigs designed to push the boundaries of
              what&apos;s possible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/products">Shop New Arrivals</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">View Custom Builds</Link>
              </Button>
            </div>

            {/* Trust stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-primary">5.0</p>
                <p className="text-xs text-on-surface-variant">Customer Rating</p>
              </div>
              <div className="h-12 w-px bg-outline-variant" />
              <div>
                <p className="text-2xl font-bold text-primary">24h</p>
                <p className="text-xs text-on-surface-variant">
                  Fast Local Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ HARDWARE CATEGORIES (Bento grid) ════════════════ */}
      <Reveal>
        <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16">
          <div className="mb-12">
            <h2 className="mb-2 font-display text-3xl font-semibold">
              Explore Hardware
            </h2>
            <div className="h-1 w-24 rounded-full bg-primary" />
          </div>

          <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-4 md:auto-rows-[338px]">
            {hardwareCategories.map((category) => (
              <Link
                key={category.title}
                href="/products"
                className={`group relative overflow-hidden rounded-xl glass ${category.span}`}
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                />
                {/* Bottom fade so text is legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  {category.tagline && (
                    <Badge className="mb-4 bg-primary/20 text-primary">
                      {category.tagline}
                    </Badge>
                  )}
                  <h3 className="mb-2 font-display text-2xl font-semibold">
                    {category.title}
                  </h3>
                  {category.blurb && (
                    <p className="mb-4 text-on-surface-variant">{category.blurb}</p>
                  )}
                  <span className="flex items-center gap-2 font-display text-sm font-medium text-primary">
                    Explore Now <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ════════════════ EXPERT BUILDS / LOCAL SUPPORT ════════════════ */}
      <Reveal>
        <section className="bg-surface-container-low py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-4 md:px-16 lg:grid-cols-2">
            {/* Photo with floating "Local Shop" card */}
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/expert-technician.jpg"
                  alt="A technician in anti-static gear carefully installing a CPU into a high-end motherboard."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-[12px] border-white/5" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden max-w-xs rounded-xl border-primary/30 p-8 shadow-xl glass md:block">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Verified className="size-6" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold">Local Shop</h4>
                </div>
                <p className="text-base text-on-surface-variant">
                  Same-day diagnostics and in-person consultation for your custom
                  hardware needs.
                </p>
              </div>
            </div>

            {/* Copy + feature list */}
            <div className="mt-12 lg:mt-0">
              <h2 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Expert Builds,
                <br />
                Local Support
              </h2>
              <p className="mb-10 text-lg text-on-surface-variant">
                We don&apos;t just sell hardware; we engineer experiences. From
                cable management to thermal optimization, our local experts treat
                every build like it&apos;s their own.
              </p>
              <ul className="space-y-6">
                {expertFeatures.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-4">
                    <feature.icon className="mt-1 size-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-1 font-display text-xl font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-on-surface-variant">{feature.blurb}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════ TOP SELLING PRODUCTS ════════════════ */}
      <Reveal>
        <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="mb-2 font-display text-3xl font-semibold">
                Top Selling Hardware
              </h2>
              <p className="text-on-surface-variant">
                Current favorites among our local enthusiast community.
              </p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              View Full Catalog <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Map over the featured products data — no repeated markup */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <FeaturedProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* ════════════════ BUILD-YOUR-OWN CTA ════════════════ */}
      <Reveal>
        <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16">
          <div className="relative overflow-hidden rounded-3xl border-primary/20 p-12 text-center glass md:p-20">
            {/* Soft radial glow behind the content */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] opacity-50" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <Terminal className="mx-auto mb-6 size-16 text-primary" />
              <h2 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Build Your Legend
              </h2>
              <p className="mb-10 text-lg text-on-surface-variant">
                Our interactive configurator guides you through every component
                choice, ensuring total compatibility and peak performance. Start
                from a template or build from scratch.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="glow-hover">
                  <Link href="/products">Start Configurator</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">Browse Templates</Link>
                </Button>
              </div>
            </div>
            {/* Atmospheric blurred orbs */}
            <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/10 blur-[80px]" />
          </div>
        </section>
      </Reveal>
    </main>
  );
}
