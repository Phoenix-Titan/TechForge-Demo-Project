import * as React from "react";

import { cn } from "@/lib/utils";

/* Multi-line text input for the contact form message field. */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-border bg-surface-container-high px-4 py-3 text-base text-on-surface transition-all",
        "placeholder:text-on-surface-variant/60",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
