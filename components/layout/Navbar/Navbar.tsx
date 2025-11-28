"use client";

import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react"; // 1. Import the useLenis hook
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";

const Navbar = () => {
  const { actualTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis(); // 2. Get the Lenis instance
  const pathname = usePathname(); // Get current path
  const router = useRouter();

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
    // Handle "/#services" or similar patterns
    if (target.includes("#services")) {
      const sectionId = "#services";

      // If we're on homepage, scroll to section
      if (isHomePage) {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(sectionId, {
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        setIsMobileMenuOpen(false);
        return;
      }
      // If not on homepage, navigate to homepage with hash
      e.preventDefault();
      router.push(`/${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 
    
    // --- Mobile Styles (default) ---
    top-0 px-4 border-b backdrop-blur-xl
    ${
      actualTheme === "dark"
        ? "bg-black/40 border-white/5"
        : "bg-white/60 border-orange-100/50"
    }

    // --- Desktop Styles (md and up) ---
    md:top-6 md:mx-auto md:max-w-6xl md:px-8
    md:rounded-full md:border 
    
    // Desktop scroll logic
    ${
      isScrolled
        ? actualTheme === "dark"
          ? "md:bg-zinc-900/70 md:backdrop-blur-2xl md:border-white/10 md:shadow-2xl md:shadow-black/40"
          : "md:bg-white/70 md:backdrop-blur-2xl md:border-white/40 md:shadow-xl md:shadow-orange-500/10"
        : "md:bg-transparent md:border-transparent md:shadow-none md:backdrop-blur-none"
    }`}
    >
      <div className="flex justify-between items-center h-16 md:h-20 relative">
        {/* Logo Transition */}
        <motion.div
          initial={false}
          animate={{ opacity: isScrolled ? 0 : 1, x: isScrolled ? -20 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center ${
            isScrolled ? "pointer-events-none" : ""
          }`}
        >
          <Link
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => handleScrollTo(e, isHomePage ? "#home" : "/")}
            aria-label="Scroll to home"
          >
            <Image
              src="/AiCloudHub.png"
              alt="aiCloudHub Logo"
              width={240}
              height={80}
              className="object-contain h-12 md:h-16 w-auto"
              priority
              onError={(e) => {
                console.error('Logo failed to load, trying SVG fallback');
                const target = e.target as HTMLImageElement;
                if (target.src !== '/AICLOUDHUB.svg') {
                  target.src = '/AICLOUDHUB.svg';
                }
              }}
            />
          </Link>
        </motion.div>

        {/* Mini Icon when scrolled */}
        <motion.div
          initial={false}
          animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center absolute left-0 ${
            !isScrolled ? "pointer-events-none" : ""
          }`}
        >
          <Link
            href={isHomePage ? "#home" : "/"}
            onClick={(e) => handleScrollTo(e, isHomePage ? "#home" : "/")}
            aria-label="Scroll to home"
          >
            <Image
              src="/icon.png"
              alt="aiCloudHub Icon"
              width={40}
              height={40}
              className="object-contain h-9 w-auto"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:block mx-auto absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              // If we're not on homepage and item is Home, navigate to root
              let href = !isHomePage && item.name === "Home" ? "/" : item.href;

              // If navigating to services from another page, add hash
              if (!isHomePage && href.includes("#services")) {
                const hash = href.includes("#")
                  ? href.substring(href.indexOf("#"))
                  : "";
                href = `/${hash}`;
              }

              return (
                <Link
                  className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full group ${
                    actualTheme === "dark"
                      ? "text-zinc-300 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                  key={item.name}
                  href={href}
                  onClick={(e) => handleScrollTo(e, href)}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full group ${
                actualTheme === "dark"
                  ? "text-zinc-300 hover:text-white hover:bg-white/10"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
              }`}
              href="/careers"
              onClick={(e) => handleScrollTo(e, "/careers")}
            >
              Careers
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button
              size="sm"
              className={`rounded-full px-6 font-medium transition-all duration-300 ${
                actualTheme === "dark"
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              Let&apos;s Talk
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className={`inline-flex items-center justify-center p-2 rounded-full transition-colors duration-200 ${
              actualTheme === "dark"
                ? "text-white hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-100"
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
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`overflow-hidden md:hidden backdrop-blur-2xl rounded-3xl mt-4 border shadow-2xl ${
          actualTheme === "dark"
            ? `border-white/10 bg-zinc-900/90`
            : `border-white/40 bg-white/90`
        }`}
      >
        <div className="flex flex-col items-stretch text-center p-2 space-y-1">
          {navItems.map((item) => {
            // If we're not on homepage and item is Home, navigate to root
            let href = !isHomePage && item.name === "Home" ? "/" : item.href;

            // If navigating to services from another page, add hash
            if (!isHomePage && href.includes("#services")) {
              const hash = href.includes("#")
                ? href.substring(href.indexOf("#"))
                : "";
              href = `/${hash}`;
            }

            return (
              <Link
                key={item.name}
                href={href}
                onClick={(e) => handleScrollTo(e, href)}
                className={`text-base font-medium tracking-wide transition-all duration-200 py-3 rounded-xl ${
                  actualTheme === "dark"
                    ? "text-zinc-300 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/careers"
            onClick={(e) => {
              handleScrollTo(e, "/careers");
              setIsMobileMenuOpen(false);
            }}
            className={`text-base font-medium tracking-wide transition-all duration-200 py-3 rounded-xl ${
              actualTheme === "dark"
                ? "text-zinc-300 hover:text-white hover:bg-white/10"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            Careers
          </Link>
          <div className="pt-2 pb-1 px-2">
            <Link href="/contact" className="w-full block">
              <Button
                className={`font-semibold w-full rounded-xl py-6 ${
                  actualTheme === "dark"
                    ? "bg-white text-black"
                    : "bg-slate-900 text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
