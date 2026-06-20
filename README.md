# TechForge Systems

A modern, fully responsive **tech marketplace** website for a fictional high-performance PC & hardware retailer — built with **Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui**. Implemented pixel-for-pixel from a set of "Stitch" UI designs and turned into a fast, SEO-ready, animated multi-page app.

> Precision-built workstations and gaming rigs — engineered for elite performance.

---

## ✨ Overview

TechForge is a four-page marketing/commerce front end demonstrating production-quality frontend work: a cinematic dark "glassmorphism" design system, working interactive filtering, a validated contact form, full SEO, optimized local imagery, and tasteful scroll/hover animations — all rendered as fast static pages.

It doubles as a **portfolio reference project**: clean, typed, well-commented code organized so the pages just map over data instead of repeating markup.

## ✨ Features

- **Four complete pages** — Home, Products, About Us, Contact Us — sharing a sticky navbar (with active-link highlighting + mobile menu) and footer.
- **Interactive Products catalog** — client-side **category filters** and a **price-range filter**, product grid, status badges, and pagination UI.
- **Validated contact form** — controlled inputs, inquiry-type select, and a success state.
- **Fully responsive** — mobile-first, tested at phone / tablet / desktop breakpoints; sidebar, grids, and headers reflow cleanly.
- **Full SEO** — per-page metadata, Open Graph + Twitter cards, a title template, **Store JSON-LD**, plus generated `sitemap.xml` and `robots.txt`.
- **Optimized images** — every photo uses `next/image` (AVIF/WebP, per-device sizing, lazy loading; hero marked `priority` for LCP). All assets are local and self-hosted.
- **Design-system tokens** — the Stitch dark palette mapped onto both shadcn tokens and the design's own tokens via Tailwind v4 `@theme`.
- **Motion** — an `IntersectionObserver` scroll-reveal plus glassmorphism and electric-blue glow hover effects.
- **Accessible, semantic markup** — proper headings, alt text, keyboard-focusable controls (Radix-based shadcn primitives).

## 🧰 Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, React Server Components) |
| UI library | **React 19** |
| Styling | **Tailwind CSS v4** (CSS-first `@theme`) |
| Components | **shadcn/ui** (Radix primitives: checkbox, label, select, slot) |
| Icons | **lucide-react** |
| Utilities | `class-variance-authority`, `clsx`, `tailwind-merge` |
| Language | **TypeScript** |
| Fonts | Geist (display) + Inter (body) via `next/font` |

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Hero, "Explore Hardware" bento grid, Expert Builds section, top-selling products, Build-Your-Own CTA |
| `/products` | Filter sidebar (categories, price range, architecture), product grid, pagination |
| `/about` | Mission bento grid, "Meet the Experts" team cards, local-repair CTA |
| `/contact` | Contact info cards, store hours, validated contact form, HQ map section |

## 📁 Project Structure

```
techforge/
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, navbar + footer
│   ├── page.tsx             # Home page
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css          # Tailwind v4 + design tokens (@theme)
│   ├── sitemap.ts           # Generated sitemap.xml
│   └── robots.ts            # Generated robots.txt
├── components/
│   ├── site-header.tsx      # Sticky navbar + mobile menu
│   ├── site-footer.tsx
│   ├── reveal.tsx           # Scroll-reveal animation wrapper
│   ├── product-card.tsx
│   ├── products-explorer.tsx# Client-side filtering logic
│   ├── contact-form.tsx
│   └── ui/                  # shadcn primitives (button, badge, input, …)
├── lib/
│   ├── products.ts          # Typed product catalog data
│   ├── site.ts              # Nav links, footer links, site config
│   └── utils.ts             # cn() helper
├── public/images/           # 21 local, optimized stock photos
├── next.config.ts
└── components.json          # shadcn config
```

## 🏁 Getting Started

**Prerequisites:** Node.js 18.18+ (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev          # → http://localhost:3000

# 3. Production build + run
npm run build
npm run start
```

### Available scripts
| Script | Does |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build (all pages prerender as static) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## 🎨 Design System

- **Palette** — Deep slate background (`#101415`) with an electric-blue primary (`#adc6ff` / `#4d8eff`); a full set of surface/`on-surface` tonal tokens from the Stitch "High-Performance Tech Retail" system.
- **Typography** — Geist for headlines/labels (technical, engineered feel), Inter for body copy.
- **Depth** — glassmorphism (`backdrop-blur` + translucent surfaces) and electric-blue glow states instead of hard shadows.
- **Shape** — rounded corners (12–16px), generous whitespace, an 8px spacing rhythm.

Tokens are defined once in `app/globals.css` using Tailwind v4's `@theme`, so they drive both Tailwind utilities and shadcn components.

## 🔎 SEO

- Per-page `metadata` (title, description, canonical) with a site-wide title template.
- Open Graph + Twitter card tags for rich link previews.
- `Store` JSON-LD structured data on the home page.
- Auto-generated `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`).
- Semantic HTML and descriptive image `alt` text throughout.

## ⚡ Performance

- Pages prerender as **static** content for instant loads.
- `next/image` serves AVIF/WebP at the right size per device; the hero image is preloaded (`priority`) to optimize LCP.
- `next/font` self-hosts Geist + Inter with no layout shift.
- Heavy/interactive logic is isolated to small client components; the rest stays on the server.

## ☁️ Deployment

Deploys cleanly to **Vercel** (recommended) or any Node host:

```bash
npm run build && npm run start
```

For Vercel: push this repo, import it, and deploy — no extra configuration needed.

## 🙏 Credits

- **UI design** — generated with Google **Stitch** and implemented in code here.
- **Photography** — free stock images from **Unsplash**, downloaded and self-hosted under `public/images/`.
- Built with Next.js, React, Tailwind CSS, and shadcn/ui.

---

*This is a demo/portfolio project for a fictional company. "TechForge Systems" and all product names are fictional.*
