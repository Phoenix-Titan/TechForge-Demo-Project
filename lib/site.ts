/* Central place for site-wide constants so the header, footer, and pages all
   stay in sync. Update a link here and it changes everywhere. */

export const siteConfig = {
  name: "TechForge Systems",
  shortName: "TechForge",
  tagline: "Precision Engineering for Enthusiasts.",
};

/** Main navigation — the order/labels the client asked for. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

/** Footer legal/utility links. */
export const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Store Locations", href: "#" },
  { label: "Support Center", href: "#" },
  { label: "Terms of Service", href: "#" },
];
