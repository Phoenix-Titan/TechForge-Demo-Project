import * as React from "react";

import { cn } from "@/lib/utils";

/* Text input. On focus the border turns electric blue with a soft glow ring,
   matching the design's "form-input-focus" effect. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-border bg-surface-container-high px-4 py-2 text-base text-on-surface transition-all",
        "placeholder:text-on-surface-variant/60",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
