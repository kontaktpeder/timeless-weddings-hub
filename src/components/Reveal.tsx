import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "../lib/utils";

type RevealVariant = "copy" | "media";

/**
 * Inngang når elementet kommer inn i bildet.
 * To rAF-rammer sikrer at CSS-overgangen faktisk spilles av.
 */
export function Reveal({
  children,
  className,
  delayMs = 0,
  as: Tag = "div",
  variant = "copy",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      className={cn(
        "reveal",
        variant === "media" && "reveal-media",
        visible && "is-in",
        className,
      )}
      style={style}
    >
      {children}
    </Component>
  );
}
