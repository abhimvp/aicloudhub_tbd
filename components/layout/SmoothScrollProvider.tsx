"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => {
      setAllowMotion(!mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // If user prefers reduced motion, render children without smooth scroll
  if (!allowMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
