import type { MetadataRoute } from "next";

const baseUrl = "https://techforge.local";

/**
 * Generates /robots.txt automatically. Allows all crawlers to index the whole
 * site and points them to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
