// components/layout/SmoothScroll.tsx
"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";

interface SmoothScrollProps {
  children: ReactNode;
}

// This small component is necessary to sync GSAP with the Lenis provider
function GsapScrollSync() {
  // 1. Get the Lenis instance and sync it with ScrollTrigger
  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => {
    if (!lenis) return;

    // 2. Sync GSAP's ticker with Lenis's animation frame
    gsap.ticker.add(lenis.raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      // 3. Cleanup on unmount
      gsap.ticker.remove(lenis.raf);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    // 4. Use the ReactLenis provider component
    <ReactLenis
      root // This makes it control the whole page
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <GsapScrollSync /> {/* This component runs the sync logic */}
      {children}
    </ReactLenis>
  );
}
