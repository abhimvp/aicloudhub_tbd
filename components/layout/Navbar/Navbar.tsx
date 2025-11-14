"use client";

import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react"; // 1. Import the useLenis hook
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";

const Navbar = () => {
  const { actualTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis(); // 2. Get the Lenis instance
  const pathname = usePathname(); // Get current path

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Create the scroll-to function
  const handleScrollTo = (e: React.MouseEvent, target: string) => {
    // If it's the blogs link or any external page link, don't prevent default
    if (!target.startsWith("#")) {
      setIsMobileMenuOpen(false);
      return;
    }

    // If we're not on homepage and trying to navigate to home sections, go to homepage first
    if (!isHomePage && target.startsWith("#")) {
      setIsMobileMenuOpen(false);
      return; // Let the Link handle navigation to homepage
    }

    e.preventDefault(); // Stop the link from navigating normally
    if (lenis) {
      // 4. Tell Lenis to scroll smoothly
      lenis.scrollTo(target, {
        duration: 2, // How long the scroll should take (in seconds)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Use same easing
      });
    } else {
      // Fallback if Lenis isn't available
      window.location.href = target;
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 
    
    // --- Mobile Styles (default) ---
    // Full-width bar at the very top, always blurred
    top-0 px-4 border-b backdrop-blur-xl
    ${
      actualTheme === "dark"
        ? "bg-black/30 border-white/10"
        : "bg-white/80 border-orange-200"
    }

    // --- Desktop Styles (md and up) ---
    // Becomes a "pill"
    md:top-4 md:mx-auto md:max-w-7xl sm:px-6 lg:px-8 
    md:rounded-full md:border 
    
    // Desktop scroll logic
    ${
      isScrolled
        ? actualTheme === "dark"
          ? "md:bg-white/10 md:backdrop-blur-xl md:shadow-md"
          : "md:bg-white/90 md:backdrop-blur-xl md:shadow-md md:border-orange-200"
        : actualTheme === "dark"
        ? "md:bg-transparent md:border-transparent md:border-b-transparent"
        : "md:bg-white/20 md:border-orange-100/50 md:backdrop-blur-md"
    }`}
    >
      <div className="flex justify-between items-center h-18 relative">
        {/* Logo Transition */}
        <motion.div
          initial={false}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <Link
            href={isHomePage ? "#home" : "/?skipLanding=true"}
            onClick={(e) =>
              handleScrollTo(e, isHomePage ? "#home" : "/?skipLanding=true")
            }
            aria-label="Scroll to home"
          >
            <Image
              src="/AiCloudHub.png"
              alt="AICLOUDHUB Logo"
              width={1024}
              height={328}
              className="object-contain h-18 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* Mini Icon when scrolled */}
        <motion.div
          initial={false}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center absolute left-4 sm:left-6 lg:left-8"
        >
          <Link
            href={isHomePage ? "#home" : "/?skipLanding=true"}
            onClick={(e) =>
              handleScrollTo(e, isHomePage ? "#home" : "/?skipLanding=true")
            }
            aria-label="Scroll to home"
          >
            <Image
              src="/icon.png"
              alt="AICloudHub Icon"
              width={40}
              height={40}
              className="object-contain h-10 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block mx-auto">
          <div className="flex items-baseline space-x-8">
            {navItems.map((item) => {
              // If we're not on homepage and item is Home, navigate to root with skipLanding
              const href =
                !isHomePage && item.name === "Home"
                  ? "/?skipLanding=true"
                  : item.href;

              return (
                <Link
                  className={`px-3 py-2 text-lg font-semibold uppercase transition-colors duration-300 ${
                    actualTheme === "dark"
                      ? "text-white hover:text-orange-400"
                      : "text-gray-900 hover:text-orange-600"
                  }`}
                  key={item.name}
                  href={href}
                  onClick={(e) => handleScrollTo(e, href)} // 5. Add onClick
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="font-semibold">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 ${
              actualTheme === "dark"
                ? "text-white hover:text-orange-400"
                : "text-gray-900 hover:text-orange-600"
            }`}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {/* Hamburger Icon */}
            <svg
              className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`overflow-hidden md:hidden backdrop-blur-xl rounded-2xl mt-2 border ${
          actualTheme === "dark"
            ? `border-border ${isScrolled ? "bg-black/60" : "bg-black/30"}`
            : `border-orange-200 ${isScrolled ? "bg-white/80" : "bg-white/60"}`
        }`}
      >
        <div className="flex flex-col items-stretch text-center">
          {navItems.map((item) => {
            // If we're not on homepage and item is Home, navigate to root with skipLanding
            const href =
              !isHomePage && item.name === "Home"
                ? "/?skipLanding=true"
                : item.href;

            return (
              <Link
                key={item.name}
                href={href}
                onClick={(e) => handleScrollTo(e, href)}
                className={`text-lg font-semibold uppercase transition-all duration-200 py-4 ${
                  actualTheme === "dark"
                    ? "text-white hover:text-orange-400 hover:bg-white/10"
                    : "text-gray-900 hover:text-orange-600 hover:bg-orange-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link href="/contact" className="w-full">
            <Button
              className="font-semibold w-full rounded-none py-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
