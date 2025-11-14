// components/layout/HomePage/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/utils/gsap";
import { Button } from "@/components/ui/button";
import { Code2, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  startAnimation?: boolean;
}

const BUSINESS_VERTICALS = [
  {
    title: "IT Services",
    tagline: "Innovative Technology Solutions for Modern Business",
    description:
      "Transform your business with cutting-edge cloud, AI, and digital solutions",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-400",
    image: "/images/it-services.jpg", // placeholder
    href: "/services/it-services",
  },
  {
    title: "Corporate Training",
    tagline: "Empower Your Workforce with Future-Ready Skills",
    description: "Upskill your teams with industry-leading training programs",
    icon: GraduationCap,
    gradient: "from-purple-500 to-pink-400",
    image: "/images/training.jpg", // placeholder
    href: "/services/corporate-training",
  },
  {
    title: "Staffing",
    tagline: "Connect with Top-Tier Tech Talent",
    description:
      "Find the perfect talent to accelerate your digital transformation",
    icon: Users,
    gradient: "from-orange-500 to-yellow-400",
    image: "/images/staffing.jpg", // placeholder
    href: "/services/staffing",
  },
];

export default function Hero({ startAnimation = true }: HeroProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!startAnimation || !rootRef.current) return;

    // 🔒 Lock scroll at the start of animation
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // 🔓 Unlock scroll once the full timeline finishes
        document.body.style.overflow = "auto";
      },
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
    tl.fromTo(
      headlineRef.current,
      { autoAlpha: 0, y: 36 },
      { autoAlpha: 1, y: 0, duration: 0.8 },
      "intro"
    )
      .fromTo(
        paraRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.7 },
        "intro+=0.1"
      )
      .fromTo(
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

    return () => {
      tl.kill();
      tlRef.current = null;
      // ensure scroll is restored even if unmounted early
      document.body.style.overflow = "auto";
    };
  }, [startAnimation]);

  // Auto-rotate scroller every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BUSINESS_VERTICALS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative z-0 flex flex-col lg:flex-row min-h-screen pt-32 pb-16 lg:pt-0 lg:pb-0 items-center overflow-hidden opacity-0 bg-linear-to-br from-orange-50 via-yellow-50 to-white dark:bg-linear-to-br dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900 transition-colors duration-300"
    >
      {/* Animated gradient overlay for dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 pointer-events-none transition-opacity duration-300 z-0">
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

      {/* Left Content */}
      <div className="relative z-10 max-w-3xl px-8 lg:px-16 text-center lg:text-left">
        <div>
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 opacity-0 translate-y-5 text-gray-900 dark:text-white"
          >
            Accelerate your business growth with Smart, Secure, and Connected
            solutions.
          </h1>
          <p
            ref={paraRef}
            className="text-lg mb-8 opacity-0 max-w-xl translate-y-5 leading-relaxed text-gray-700 dark:text-gray-200"
          >
            At AICloudHub, we help businesses and professionals thrive in the
            digital era through cutting-edge technology services and workforce
            enablement. Our solutions empower enterprises to innovate, scale,
            and stay ahead with AI, Cloud, and next-gen technologies.
          </p>
        </div>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8 justify-center lg:justify-start"
        >
          <Button
            size="lg"
            className="relative overflow-hidden bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,170,60,0.6)] transition-all duration-300 hover:scale-[1.05] group"
          >
            <span className="relative z-10">Explore our Services</span>

            {/* ✨ Moving shine overlay */}
            <span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent 
                   translate-x-[-200%] group-hover:translate-x-[200%] 
                   transition-transform duration-[1.5s] ease-in-out rounded-full"
            />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-900 bg-white/80 hover:bg-white dark:border-white/60 dark:text-white dark:bg-white/5 dark:hover:bg-white/15 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.05] dark:hover:border-white/80"
          >
            About Us
          </Button>
        </div>
      </div>

      {/* Right Visual Stage - Business Verticals Scroller */}
      <div className="relative z-30 w-full mt-16 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-[50%] max-w-[720px] px-8 lg:px-12">
        <div
          ref={scrollerRef}
          className="relative w-full h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-2xl"
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
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${vertical.gradient} opacity-90`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-12 text-white">
                  {/* Icon */}
                  <div className="flex justify-start">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Icon size={48} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                      {vertical.title}
                    </h2>
                    <p className="text-xl lg:text-2xl font-medium opacity-95">
                      {vertical.tagline}
                    </p>
                    <p className="text-base lg:text-lg opacity-90 max-w-md">
                      {vertical.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className="pt-4">
                      <Link href={vertical.href}>
                        <Button
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Placeholder for smiling image - can be added later */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64 opacity-20">
                    <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-md" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {BUSINESS_VERTICALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-12 h-3 bg-white"
                    : "w-3 h-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 bottom-8 z-30">
        <div className="w-7 h-12 border-2 border-gray-900 dark:border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gray-900 dark:bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
