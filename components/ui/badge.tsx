import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Small pill used for technical specs ("RTX 4080", "16GB VRAM") and statuses
   ("In Stock", "Best Seller", "Limited"). */
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 font-display text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        // Solid blue — used for "In Stock" style status flags
        default: "border-transparent bg-primary text-primary-foreground",
        // Subtle blue spec chip on a dark fill
        spec: "border-outline-variant/40 bg-surface-container-high text-primary uppercase tracking-wider",
        // Outlined "In Stock" treatment
        success: "border-primary/30 bg-primary/20 text-primary",
        // Outlined "Best Seller" treatment
        tertiary: "border-tertiary/30 bg-tertiary-container/20 text-tertiary",
        // Outlined "Limited" / warning treatment
        warning: "border-error/30 bg-error-container/20 text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
