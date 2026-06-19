/* Product catalog data. Keeping content in one typed array means the Home and
   Products pages just map over data instead of repeating markup — easy to edit
   and ready to swap for a real API/CMS later. */

/** The category buckets used by the Products page filter sidebar. */
export const productCategories = [
  "Laptops",
  "Desktops",
  "Keyboards",
  "Peripherals",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  id: string;
  name: string;
  price: string; // pre-formatted for display
  description: string;
  specs: string[]; // short technical chips shown on the card
  image: string; // local product photo under /public/images
  alt: string; // descriptive alt text for SEO + accessibility
  status?: "In Stock" | "Best Seller" | "Limited"; // optional corner badge
  category?: ProductCategory; // used for filtering
  priceValue?: number; // numeric price, used for the price-range filter
};

/** Full catalog shown on the Products page. */
export const catalogProducts: Product[] = [
  {
    id: "forgebook-pro-16",
    name: "ForgeBook Pro 16",
    price: "$2,499",
    description: "M3 Pro Equivalent Architecture, 32GB Unified Memory, 1TB SSD.",
    specs: ["RTX 4080", "120Hz OLED"],
    status: "In Stock",
    category: "Laptops",
    priceValue: 2499,
    image:
      "/images/product-laptop.jpg",
    alt: "ForgeBook Pro 16 high-performance laptop, slightly open on a dark slate background with blue studio lighting.",
  },
  {
    id: "apex-sentinel-v2",
    name: "Apex Sentinel V2",
    price: "$3,850",
    description: "Intel i9-14900K, 64GB DDR5, RTX 4090, Liquid Cooled.",
    specs: ["Locked 5.4GHz", "4TB RAID 0"],
    status: "Best Seller",
    category: "Desktops",
    priceValue: 3850,
    image:
      "/images/product-desktop.jpg",
    alt: "Apex Sentinel V2 desktop tower with tempered glass and glowing blue liquid cooling.",
  },
  {
    id: "forgekey-ultra",
    name: "ForgeKey Ultra",
    price: "$220",
    description: "Gasket Mounted, Hotswap PCB, Machined Aluminum Frame.",
    specs: ["Wireless 2.4G", "75% Layout"],
    category: "Keyboards",
    priceValue: 220,
    image:
      "/images/product-keyboard.jpg",
    alt: "ForgeKey Ultra mechanical keyboard with a slate aluminum frame and soft cyan backlight.",
  },
  {
    id: "devnode-x14",
    name: "DevNode X14",
    price: "$1,899",
    description: "Native Linux Support, Coreboot BIOS, Modular Components.",
    specs: ["Ryzen 9", "64GB RAM"],
    status: "Limited",
    category: "Laptops",
    priceValue: 1899,
    image:
      "/images/product-devlaptop.jpg",
    alt: "DevNode X14 developer laptop with dual screens showing an IDE and terminal in a matte black chassis.",
  },
  {
    id: "forgevision-34c",
    name: "ForgeVision 34C",
    price: "$899",
    description: '34" Ultrawide OLED, 175Hz, 99.3% DCI-P3 Color Accuracy.',
    specs: ["HDR 1000", "USB-C PD"],
    category: "Peripherals",
    priceValue: 899,
    image:
      "/images/product-monitor.jpg",
    alt: "ForgeVision 34C curved ultrawide monitor with a near-invisible bezel and brushed metal stand.",
  },
  {
    id: "enthusiast-bundle",
    name: "Enthusiast Bundle",
    price: "$450",
    description: "Includes ForgeMouse Pro, X-Pad, and 2TB External NVMe SSD.",
    specs: ["Savings 15%", "Pro Grade"],
    category: "Peripherals",
    priceValue: 450,
    image:
      "/images/product-peripherals.jpg",
    alt: "Enthusiast Bundle of matte-obsidian tech peripherals arranged on a carbon-fiber surface.",
  },
];

/** Four hand-picked best sellers featured on the Home page. */
export const featuredProducts: Product[] = [
  {
    id: "forge-rtx-4080",
    name: "Forge Edition RTX 4080",
    price: "$1,199.99",
    description:
      "Advanced cooling with whisper-quiet fans and a custom Forge backplate.",
    specs: ["RTX 4080", "16GB VRAM"],
    status: "In Stock",
    image:
      "/images/feat-gpu.jpg",
    alt: "Forge Edition RTX 4080 graphics card on a dark background with electric-blue lighting.",
  },
  {
    id: "forgesight-27-pro",
    name: 'ForgeSight 27" Pro',
    price: "$549.00",
    description:
      "Professional-grade color accuracy for creators and low latency for gamers.",
    specs: ["4K 144Hz", "IPS"],
    image:
      "/images/feat-monitor.jpg",
    alt: 'ForgeSight 27" Pro gaming monitor with thin bezels displaying a vibrant abstract wallpaper.',
  },
  {
    id: "apex-click-tkl",
    name: "Apex Click TKL",
    price: "$179.95",
    description:
      "Custom switches pre-lubed for the smoothest typing experience imaginable.",
    specs: ["Mechanical", "Hotswap"],
    image:
      "/images/feat-keyboard.jpg",
    alt: "Apex Click TKL mechanical keyboard with artisan keycaps and electric-blue RGB backlighting.",
  },
  {
    id: "ironclad-laptop-g16",
    name: "Ironclad Laptop G16",
    price: "$2,499.00",
    description:
      "Desktop-class performance in a portable frame. The ultimate mobile station.",
    specs: ["i9-14900HX", "32GB RAM"],
    image:
      "/images/feat-laptop.jpg",
    alt: "Ironclad Laptop G16 gaming laptop with a glowing blue keyboard in a dark, moody setting.",
  },
];
