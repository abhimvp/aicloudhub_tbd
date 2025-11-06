// components/layout/HomePage/Hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/utils/gsap";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

interface HeroProps {
  startAnimation?: boolean;
}

const BLOCKS = [
  { height: 100, label: "Collect", gradient: "from-pink-400 to-pink-300" },
  { height: 150, label: "Process", gradient: "from-violet-400 to-violet-300" },
  { height: 200, label: "Connect", gradient: "from-sky-400 to-sky-300" },
  { height: 250, label: "AI", gradient: "from-indigo-400 to-indigo-300" },
  { height: 300, label: "Launch", gradient: "from-emerald-400 to-emerald-300" },
];

export default function Hero({ startAnimation = true }: HeroProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const blocksRef = useRef<HTMLDivElement | null>(null);
  const botRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

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

    // 🧱 Blocks animation
    const blockEls = blocksRef.current?.querySelectorAll<HTMLElement>(".block");
    if (blockEls?.length) {
      tl.fromTo(
        blockEls,
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "back.out(1.4)",
        },
        "intro"
      );
    }

    // 🤖 Bot animation
    const bot = botRef.current!;
    if (bot && blockEls && blockEls.length > 0 && blocksRef.current) {
      tl.set(bot, { autoAlpha: 0, scale: 0.95 }, "intro");
      tl.to(bot, { autoAlpha: 1, scale: 1, duration: 0.4 }, "intro+=0.1");

      const parentRect = bot.parentElement!.getBoundingClientRect();
      const botRect = bot.getBoundingClientRect();
      const botHalfW = botRect.width / 2;
      const blocksStyle = window.getComputedStyle(blocksRef.current);
      const paddingBottom = parseFloat(blocksStyle.paddingBottom);

      const targets = Array.from(blockEls).map((el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const x = rect.left - parentRect.left + rect.width / 2 - botHalfW;
        const y = -el.offsetHeight - paddingBottom - 12;
        return { x, y };
      });

      if (targets.length > 0) {
        gsap.set(bot, { x: targets[0].x, y: targets[0].y });

        let delay = "intro+=0.15";
        targets.forEach((t, i) => {
          const isLast = i === targets.length - 1;
          tl.to(
            bot,
            {
              x: t.x,
              y: t.y - 30,
              rotation: i % 2 === 0 ? 6 : -6,
              duration: 0.45,
              ease: "power2.out",
            },
            delay
          ).to(
            bot,
            {
              y: t.y,
              rotation: 0,
              duration: 0.28,
              ease: "bounce.out",
              onComplete: isLast
                ? () => {
                    gsap.to(bot, {
                      y: t.y - 25,
                      duration: 0.25,
                      ease: "power1.out",
                      yoyo: true,
                      repeat: 1,
                    });
                  }
                : undefined,
            },
            "-=0.15"
          );
          delay = "+=0.2";
        });
      }
    }

    // ✨ Text + CTA animations (run simultaneously)
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
          onStart: () => {
            // subtle shine on primary button
            const btn = ctaRef.current?.querySelector(".primary-btn");
            if (btn) {
              gsap.fromTo(
                btn,
                { boxShadow: "0 0 0px rgba(255,180,70,0.0)" },
                {
                  boxShadow: "0 0 20px rgba(255,180,70,0.5)",
                  duration: 0.5,
                  yoyo: true,
                  repeat: 1,
                  ease: "sine.inOut",
                }
              );
            }
          },
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
            Accelerate your business growth with{" "}
            <span className="font-bold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Smart, Secure, and Connected
            </span>{" "}
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

      {/* Right Visual Stage */}
      <div className="relative z-30 w-full mt-16 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-[56%] max-w-[980px]">
        <div className="relative w-full h-[520px] flex items-end justify-center pointer-events-none">
          {/* Bot */}
          <div
            ref={botRef}
            className="absolute z-50 bottom-0 left-0 opacity-0 text-black dark:text-black drop-shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none"
          >
            <Bot size={58} strokeWidth={2.5} />
          </div>

          {/* Blocks */}
          <div
            ref={blocksRef}
            className="flex items-end gap-3 sm:gap-6 lg:gap-8 justify-center px-6 py-8 bg-transparent rounded-lg z-20"
          >
            {BLOCKS.map((b, i) => (
              <div
                key={i}
                className={`w-14 sm:w-20 lg:w-24 rounded-lg lg:rounded-2xl shadow-lg relative flex items-end justify-center bg-linear-to-t ${b.gradient} border border-white/30`}
                style={{ height: b.height }}
              >
                <span className="absolute -bottom-6 text-xs font-medium text-gray-700 dark:text-gray-300">
                  {b.label}
                </span>
              </div>
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
