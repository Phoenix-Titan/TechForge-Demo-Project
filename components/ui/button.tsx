import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* Button styles defined once with class-variance-authority (CVA).
   `variant` controls the look; `size` controls the dimensions. */
const buttonVariants = cva(
  // Base styles shared by every button
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display font-medium transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Solid electric-blue primary action
        default:
          "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)]",
        // Tonal blue (used for the "Build PC" nav button)
        container:
          "bg-primary-container text-on-primary-container hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(59,130,246,0.3)]",
        // Transparent with a hairline border (secondary action)
        outline:
          "border border-outline text-on-surface hover:bg-white/5",
        // Muted fill that turns blue on hover (product "View Details")
        secondary:
          "bg-secondary-container text-on-surface hover:bg-primary hover:text-on-primary",
        // Text-only button
        ghost: "text-on-surface-variant hover:bg-white/5 hover:text-primary",
        // Inline link styling
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10", // square icon-only button
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  /** Render the styles onto the child element instead of a <button>. */
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  // `asChild` lets us style a <Link> as a button (e.g. <Button asChild><Link/></Button>)
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
