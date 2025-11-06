// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LandingPage from "@/components/layout/LandingPage/LandingPage";
import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/layout/HomePage/Hero";
import Categories from "@/components/layout/HomePage/Categories";
import AboutUs from "@/components/layout/HomePage/AboutUs";
import Testing from "@/components/layout/Services";
import Blogs from "@/components/layout/Blogs/Blogs";
import Services from "@/components/layout/Services";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  const searchParams = useSearchParams();
  const skipLanding = searchParams.get('skipLanding') === 'true';
  
  const [showLanding, setShowLanding] = useState(!skipLanding);
  const [heroReady, setHeroReady] = useState(skipLanding);
  const [showNavbar, setShowNavbar] = useState(skipLanding);

  const handleLandingFinish = () => {
    // Step 1: Fade out landing and show navbar
    setTimeout(() => {
      setShowLanding(false);
      setShowNavbar(true);

      // Step 2: After a short cinematic overlap, start Hero animations
      setTimeout(() => {
        setHeroReady(true);
      }, 100); // slight overlap with Navbar entrance
    }, 400);
  };

  // Lock scroll during landing
  useEffect(() => {
    document.body.style.overflow = showLanding ? "hidden" : "auto";
  }, [showLanding]);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {showLanding && <LandingPage onFinish={handleLandingFinish} />}

      {!showLanding && (
        <>
          {showNavbar && <Navbar />}
          <Hero startAnimation={heroReady} />
          <Categories />
          <AboutUs />
          <Services />
          <Blogs />
          <Footer />
        </>
      )}
    </main>
  );
}
