"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function AnchorInterceptor() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

type Props = { children: React.ReactNode };

export function SmoothScrollProvider({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1, smoothWheel: true }}>
      <AnchorInterceptor />
      {children}
    </ReactLenis>
  );
}
