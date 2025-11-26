// components/layout/HomePage/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/utils/gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BUSINESS_VERTICALS = [
  {
    title: "IT Staffing",
    tagline: "Connect with Top-Tier Tech Talent",
    description:
      "Find the perfect talent to accelerate your digital transformation",
    image: "/HeroSectionITStaffing.webp",
    href: "/services/staffing",
  },
  {
    title: "IT Services",
    tagline: "Innovative Technology Solutions for Modern Business",
    description:
      "Transform your business with cutting-edge cloud, AI, and digital solutions",
    image: "/HeroSectionITServices.webp",
    href: "/services/it-services",
  },
  {
    title: "Corporate Training",
    tagline: "Empower Your Workforce with Future-Ready Skills",
    description: "Upskill your teams with industry-leading training programs",
    image: "/HeroSectionCorporateTraining.webp",
    href: "/services/corporate-training",
  },
];

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(() => {
    if (!rootRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    tlRef.current = tl;

    tl.to(rootRef.current, { duration: 0.4, autoAlpha: 1 }, 0);

    // Label to sync everything
    tl.add("intro", "+=0.1");

    // 🎨 Scroller animation
    const scrollerEl = scrollerRef.current;
    if (scrollerEl) {
      tl.fromTo(
        scrollerEl,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "intro"
      );
    }

    // ✨ Text + CTA animations
    if (headlineRef.current) {
      tl.fromTo(
        headlineRef.current,
        { autoAlpha: 0, y: 36 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        "intro"
      );
    }
    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
        "intro+=0.15"
      );
    }
    if (paraRef.current) {
      tl.fromTo(
        paraRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
        "intro+=0.3"
      );
    }
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "intro+=0.25"
      );
    }

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  // Auto-rotate scroller every 7 seconds for better readability, pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % BUSINESS_VERTICALS.length);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Fallback: Ensure text is visible even if GSAP doesn't animate
  useEffect(() => {
    const timer = setTimeout(() => {
      if (headlineRef.current && headlineRef.current.style.opacity === "0") {
        headlineRef.current.style.opacity = "1";
        headlineRef.current.style.transform = "translateY(0)";
      }
      if (taglineRef.current && taglineRef.current.style.opacity === "0") {
        taglineRef.current.style.opacity = "1";
        taglineRef.current.style.transform = "translateY(0)";
      }
      if (paraRef.current && paraRef.current.style.opacity === "0") {
        paraRef.current.style.opacity = "1";
        paraRef.current.style.transform = "translateY(0)";
      }
      if (ctaRef.current && ctaRef.current.style.opacity === "0") {
        ctaRef.current.style.opacity = "1";
        ctaRef.current.style.transform = "translateY(0)";
      }
    }, 2000); // Fallback after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const section = document.querySelector("#services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative z-0 min-h-screen pt-20 pb-8 lg:pt-0 lg:pb-0 opacity-0 transition-colors duration-300 bg-linear-to-br from-orange-50 via-white to-yellow-50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 overflow-hidden"
    >
      {/* Tech Grid Background */}
      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-[0.15] dark:opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated floating shapes for visual interest */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Animated gradient overlay for dark mode - reduced opacity */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none transition-opacity duration-300 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Container for responsive layout */}
      <div className="relative z-10 h-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 xl:gap-14 mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1440px] w-full lg:pt-24">
        {/* Left Content */}
        <div className="relative z-20 w-full lg:w-[55%] xl:w-[52%] text-center lg:text-left shrink-0">
          <div>
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-6 opacity-0 translate-y-5 text-slate-900 dark:text-white leading-[1.15]"
            >
              Empower Your Business with{" "}
              <span className="bg-linear-to-r from-orange-600 to-yellow-500 dark:from-orange-400 dark:to-yellow-300 bg-clip-text text-transparent">
                AI-Driven Innovation
              </span>
            </h1>

            <p
              ref={taglineRef}
              className="text-lg sm:text-xl md:text-2xl font-medium mb-6 opacity-0 translate-y-5 text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide"
            >
              Build, Scale, and Transform with Smart, Secure, and Connected
              Solutions.
            </p>

            <p
              ref={paraRef}
              className="text-base md:text-lg mb-8 opacity-0 translate-y-5 leading-relaxed text-slate-500 dark:text-slate-400 max-w-full lg:max-w-xl mx-auto lg:mx-0"
            >
              At aiCloudHub, we empower enterprises to thrive in the digital age
              through AI, Cloud, and Automation. From ideation to launch, our
              intelligent solutions accelerate innovation, strengthen security,
              and drive business excellence.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02] group text-lg"
              onClick={scrollToServices}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Link href="/about-us">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-200 text-slate-700 bg-transparent hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 px-8 py-6 rounded-full transition-all duration-300 hover:scale-[1.02] text-lg"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Visual Stage - Business Verticals Scroller */}
        <div className="relative z-20 w-full lg:w-[42%] xl:w-[40%] shrink-0 max-w-[440px] lg:max-w-[480px] xl:max-w-[520px]">
          <div
            ref={scrollerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl mx-auto cursor-pointer group bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-white/10"
          >
            {BUSINESS_VERTICALS.map((vertical, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out ${isActive
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                    }`}
                >
                  {/* Image Container - Larger with 4:3 Aspect Ratio */}
                  <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-800">
                    <Image
                      src={vertical.image}
                      alt={vertical.title}
                      fill
                      className="object-cover transition-transform duration-[8s] ease-linear group-hover:scale-105"
                      priority={index === 0}
                      quality={95}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                    />
                    {/* Gradient overlay at bottom for smooth transition */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white dark:from-slate-900/90 to-transparent" />
                  </div>

                  {/* Content Container - Compact with proper spacing */}
                  <div className="px-5 sm:px-6 py-4 sm:py-5">
                    {/* Text Content */}
                    <div className="space-y-1.5 mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {vertical.title}
                      </h2>
                      <p className="text-sm sm:text-base font-medium text-orange-600 dark:text-orange-400">
                        {vertical.tagline}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm pt-1">
                        {vertical.description}
                      </p>
                    </div>

                    {/* Footer: Learn More + Navigation Dots */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/10">
                      <Link
                        href={vertical.href}
                        className="inline-flex items-center text-slate-900 dark:text-white text-sm font-semibold hover:text-orange-600 dark:hover:text-orange-400 transition-colors group/link"
                      >
                        Learn More{" "}
                        <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>

                      {/* Navigation Dots */}
                      <div className="flex gap-2">
                        {BUSINESS_VERTICALS.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveIndex(dotIndex);
                            }}
                            className={`transition-all duration-300 rounded-full ${dotIndex === activeIndex
                              ? "w-6 sm:w-8 h-2 bg-orange-500"
                              : "w-2 h-2 bg-slate-300 dark:bg-white/40 hover:bg-orange-400"
                              }`}
                            aria-label={`Go to slide ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
