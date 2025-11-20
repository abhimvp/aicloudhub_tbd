// components/layout/HomePage/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "@/utils/gsap";
import { Button } from "@/components/ui/button";
import { Code2, GraduationCap, Users, ArrowRight, Sparkles } from "lucide-react";
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
      className="relative z-0 min-h-screen pt-32 pb-16 lg:pt-0 lg:pb-0 opacity-0 transition-colors duration-300 bg-linear-to-br from-orange-50 via-white to-yellow-50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 overflow-hidden"
    >
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animated floating shapes for visual interest */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Animated gradient overlay for dark mode - reduced opacity */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none transition-opacity duration-300 z-1">
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
      <div className="relative z-10 h-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-20 mx-auto px-4 sm:px-8 xl:px-12 max-w-360 w-full">
        {/* Left Content */}
        <div className="relative z-20 w-full lg:w-[55%] xl:w-[52%] text-center lg:text-left shrink-0 py-8 lg:py-0">
          <div>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6 opacity-0 translate-y-4"
              ref={(el) => {
                if (el && !headlineRef.current?.classList.contains('badge-animated')) {
                  gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.6, delay: 0.2 });
                  el.classList.add('badge-animated');
                }
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Digital Transformation</span>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 opacity-0 translate-y-5 text-slate-900 dark:text-white leading-[1.1]"
            >
              Empower Your Business with <span className="bg-linear-to-r from-orange-600 to-yellow-500 dark:from-orange-400 dark:to-yellow-300 bg-clip-text text-transparent">AI-Driven Innovation</span>
            </h1>
            
            <p
              ref={taglineRef}
              className="text-lg sm:text-xl md:text-2xl font-medium mb-6 opacity-0 translate-y-5 text-slate-600 dark:text-slate-300 leading-relaxed tracking-wide"
            >
              Build, Scale, and Transform with Smart, Secure, and Connected Solutions.
            </p>
            
            <p
              ref={paraRef}
              className="text-base md:text-lg mb-8 opacity-0 translate-y-5 leading-relaxed text-slate-500 dark:text-slate-400 max-w-full lg:max-w-xl mx-auto lg:mx-0"
            >
              At AICloudHub, we empower enterprises to thrive in the digital age
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
              Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Link href="/about">
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
      <div className="relative z-20 w-full lg:w-[45%] xl:w-[40%] shrink-0 max-w-[640px] lg:max-w-none">
        <div
          ref={scrollerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full h-[500px] sm:h-[560px] lg:h-[600px] rounded-4xl overflow-hidden shadow-2xl mx-auto max-w-[600px] lg:max-w-full cursor-pointer group"
        >
          {BUSINESS_VERTICALS.map((vertical, index) => {
            const Icon = vertical.icon;
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={vertical.image}
                    alt={vertical.title}
                    fill
                    className="object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 45vw"
                  />
                  {/* Gradient Overlay - Lighter to show faces */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content Card */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 sm:p-6 shadow-lg transform transition-all duration-500 hover:bg-white/10 hover:backdrop-blur-md hover:-translate-y-1">
                    {/* Icon */}
                    <div className={`inline-flex p-2.5 rounded-lg bg-linear-to-br ${vertical.gradient} mb-3 shadow-md`}>
                      <Icon size={24} className="text-white" strokeWidth={2} />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {vertical.title}
                      </h2>
                      <p className="text-base font-medium text-orange-200/90">
                        {vertical.tagline}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                        {vertical.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="pt-3">
                        <Link href={vertical.href} className="inline-flex items-center text-white text-sm font-semibold hover:text-orange-300 transition-colors group/link">
                          Learn More <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation Dots */}
          <div className="absolute top-6 right-6 z-20 flex flex-col gap-3">
            {BUSINESS_VERTICALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full border border-white/30 ${
                  index === activeIndex
                    ? "w-3 h-8 bg-white"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
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
