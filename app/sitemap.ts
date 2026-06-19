import type { MetadataRoute } from "next";

// Base URL of the site — keep in sync with `metadataBase` in layout.tsx.
const baseUrl = "https://techforge.local";

/**
 * Generates /sitemap.xml automatically. Search engines use this to discover
 * and prioritize every page on the site.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/products", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8, // homepage gets top priority
  }));
}
