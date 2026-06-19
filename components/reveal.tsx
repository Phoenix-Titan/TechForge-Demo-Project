"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal — fades + slides its children up when they scroll into view.
 *
 * It uses the browser's IntersectionObserver (cheap, no scroll listeners) to
 * flip a `visible` flag the first time the element enters the viewport, which
 * triggers the `animate-fade-up` keyframes defined in globals.css.
 *
 * Wrap any section in <Reveal> to give the page its smooth on-scroll entrance.
 */
export function Reveal({
  children,
  className,
  delay = 0, // optional stagger, in milliseconds
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animate once, then stop observing to save work.
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // fire when 10% of the element is visible
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        // Start hidden; the animation reveals it.
        isVisible ? "animate-fade-up" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
