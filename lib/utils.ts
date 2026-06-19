import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — merge Tailwind class names safely.
 * `clsx` handles conditional classes; `twMerge` resolves conflicts so the last
 * utility wins (e.g. cn("p-2", "p-4") → "p-4"). Used by every shadcn component.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
