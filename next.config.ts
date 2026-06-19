import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Image Optimization ─────────────────────────────────────────────
  // All photos are now local files in /public/images, so no remote hosts
  // need to be whitelisted. We still ask the optimizer to serve modern,
  // smaller formats (AVIF/WebP) — browsers fall back automatically.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
