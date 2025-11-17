// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLenis } from "lenis/react";
import LandingPage from "@/components/layout/LandingPage/LandingPage";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/layout/HomePage/Hero";
// import Categories from "@/components/layout/HomePage/Categories";
import AboutUs from "@/components/layout/HomePage/AboutUs";
import Blogs from "@/components/layout/Blogs/Blogs";
// import Services from "@/components/layout/Services";
import TechnologyServicesTabs from "@/components/layout/HomePage/TechnologyServicesTabs";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function Home() {
  const searchParams = useSearchParams();
  const skipLanding = searchParams.get('skipLanding') === 'true';
  const lenis = useLenis();
  
  const [showLanding, setShowLanding] = useState(!skipLanding);
  const [heroReady, setHeroReady] = useState(skipLanding);
  const [hasScrolledToHash, setHasScrolledToHash] = useState(false);

  const handleLandingFinish = () => {
    // Step 1: Fade out landing
    setTimeout(() => {
      setShowLanding(false);

      // Step 2: After a short cinematic overlap, start Hero animations
      setTimeout(() => {
        setHeroReady(true);
      }, 100);
    }, 400);
  };

  // Lock scroll during landing
  useEffect(() => {
    document.body.style.overflow = showLanding ? "hidden" : "auto";
  }, [showLanding]);

  // Handle hash navigation - scroll to section after page loads
  useEffect(() => {
    if (showLanding || hasScrolledToHash) return;

    const hash = window.location.hash;
    if (hash) {
      // Wait for the page to fully render
      const scrollToSection = () => {
        // Try multiple times to find the element (in case it's not rendered yet)
        const tryScroll = (attempts = 0) => {
          const element = document.querySelector(hash);
          if (element) {
            // Use a small delay to ensure the page is fully rendered
            setTimeout(() => {
              if (lenis) {
                lenis.scrollTo(hash, {
                  duration: 1.5,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              setHasScrolledToHash(true);
            }, 300);
          } else if (attempts < 10) {
            // Retry after a short delay if element not found
            setTimeout(() => tryScroll(attempts + 1), 200);
          }
        };

        tryScroll();
      };

      // If landing is skipped, scroll immediately after a short delay
      if (skipLanding && !showLanding) {
        scrollToSection();
      } else if (!showLanding) {
        // If landing was shown, wait for it to finish
        scrollToSection();
      }
    }
  }, [showLanding, skipLanding, lenis, hasScrolledToHash]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white dark:bg-linear-to-br dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950 transition-colors duration-300">
      {showLanding && <LandingPage onFinish={handleLandingFinish} />}

      {!showLanding && (
        <>
          <Navbar />
          <div className="flex flex-col">
            <Hero startAnimation={heroReady} />
            {/* <Categories /> */}
            <TechnologyServicesTabs />
            <AboutUs />
            {/* <Services /> */}
            <Blogs />
          </div>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </main>
  );
}
