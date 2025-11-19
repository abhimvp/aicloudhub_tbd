// components/layout/HomePage/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/utils/gsap";
import { Button } from "@/components/ui/button";
import { Code2, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BUSINESS_VERTICALS = [
  {
    title: "IT Staffing",
    tagline: "Connect with Top-Tier Tech Talent",
    description:
      "Find the perfect talent to accelerate your digital transformation",
    icon: Users,
    gradient: "from-orange-500 to-yellow-400",
    image: "/HeroSectionITStaffing.png",
    href: "/services/staffing",
  },
  {
    title: "IT Services",
    tagline: "Innovative Technology Solutions for Modern Business",
    description:
      "Transform your business with cutting-edge cloud, AI, and digital solutions",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    image: "/HeroSectionITServices.png",
    href: "/services/it-services",
  },
  {
    title: "Corporate Training",
    tagline: "Empower Your Workforce with Future-Ready Skills",
    description: "Upskill your teams with industry-leading training programs",
    icon: GraduationCap,
    gradient: "from-purple-500 to-pink-400",
    image: "/HeroSectionCorporateTraining.png",
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
      if (headlineRef.current && headlineRef.current.style.opacity === '0') {
        headlineRef.current.style.opacity = '1';
        headlineRef.current.style.transform = 'translateY(0)';
      }
      if (taglineRef.current && taglineRef.current.style.opacity === '0') {
        taglineRef.current.style.opacity = '1';
        taglineRef.current.style.transform = 'translateY(0)';
      }
      if (paraRef.current && paraRef.current.style.opacity === '0') {
        paraRef.current.style.opacity = '1';
        paraRef.current.style.transform = 'translateY(0)';
      }
      if (ctaRef.current && ctaRef.current.style.opacity === '0') {
        ctaRef.current.style.opacity = '1';
        ctaRef.current.style.transform = 'translateY(0)';
      }
    }, 2000); // Fallback after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    const section = document.querySelector("#technology-services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative z-0 min-h-screen pt-32 pb-16 lg:pt-0 lg:pb-0 opacity-0 transition-colors duration-300 bg-linear-to-br from-orange-50 via-white to-yellow-50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950"
    >
      {/* Animated floating shapes for visual interest */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      {/* Animated gradient overlay for dark mode - reduced opacity */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none transition-opacity duration-300 z-[1]">
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
      <div className="relative z-10 h-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Left Content */}
        <div className="relative z-20 w-full lg:w-[48%] xl:w-[50%] text-center lg:text-left flex-shrink-0 py-8 lg:py-0">
          <div>
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black mb-3 md:mb-4 opacity-0 translate-y-5 text-slate-900 dark:text-white leading-tight"
            >
              Empower Your Business with AI-Driven Innovation
            </h1>
            
            <p
              ref={taglineRef}
              className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-semibold mb-4 md:mb-6 opacity-0 translate-y-5 bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-400 dark:via-yellow-300 dark:to-orange-500 bg-clip-text text-transparent leading-snug"
            >
              Build, Scale, and Transform with Smart, Secure, and Connected Solutions.
            </p>
            
            <p
              ref={paraRef}
              className="text-base md:text-lg lg:text-base xl:text-lg mb-6 md:mb-8 opacity-0 translate-y-5 leading-relaxed text-slate-700 dark:text-gray-200 max-w-full lg:max-w-lg mx-auto lg:mx-0"
            >
              At AICloudHub, we empower enterprises to thrive in the digital age
              through AI, Cloud, and Automation. From ideation to launch, our
              intelligent solutions accelerate innovation, strengthen security,
              and drive business excellence.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 translate-y-8 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold px-6 md:px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,170,60,0.6)] transition-all duration-300 hover:scale-[1.05] group"
              onClick={scrollToServices}
          >
            <span className="relative z-10">Explore our Services</span>

            {/* ✨ Moving shine overlay */}
            <span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent 
                   translate-x-[-200%] group-hover:translate-x-[200%] 
                   transition-transform duration-[1.5s] ease-in-out rounded-full"
            />
          </Button>

          <Link href="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-900 bg-white hover:bg-slate-50 dark:border-white/60 dark:text-white dark:bg-white/5 dark:hover:bg-white/15 px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.05] dark:hover:border-white/80"
            >
              About Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Visual Stage - Business Verticals Scroller */}
      <div className="relative z-20 w-full lg:w-[48%] xl:w-[45%] shrink-0">
        <div
          ref={scrollerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full h-[420px] sm:h-[480px] lg:h-[500px] xl:h-[560px] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-[600px] lg:max-w-full cursor-pointer"
        >
          {BUSINESS_VERTICALS.map((vertical, index) => {
            const Icon = vertical.icon;
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={vertical.image}
                    alt={vertical.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Dark gradient at bottom for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 text-white">
                  {/* Icon */}
                  <div className="flex justify-start">
                    <div className="p-3 sm:p-4 bg-white/25 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                      <Icon size={40} className="sm:w-12 sm:h-12" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight drop-shadow-lg">
                      {vertical.title}
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-medium leading-snug drop-shadow-md">
                      {vertical.tagline}
                    </p>
                    <p className="text-sm sm:text-base lg:text-base xl:text-lg max-w-md leading-relaxed drop-shadow-md">
                      {vertical.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="pt-2 sm:pt-4">
                      <Link href={vertical.href}>
                        <Button
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-white/95 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
            {BUSINESS_VERTICALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-10 sm:w-12 h-2.5 sm:h-3 bg-white"
                    : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-8 z-30">
        <div className="w-7 h-12 border-2 border-slate-400 dark:border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-slate-600 dark:bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
