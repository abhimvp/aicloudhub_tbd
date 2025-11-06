"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "@/utils/gsap";

type LandingPageProps = {
  onFinish?: () => void;
};

const LandingPage = ({ onFinish }: LandingPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.3,
      });

      // Split title into letters for reveal
      const titleChars = titleRef.current?.textContent?.split("") || [];
      titleRef.current!.innerHTML = titleChars
        .map(
          (char) =>
            `<span class='inline-block opacity-0 translate-y-6'>${char}</span>`
        )
        .join("");

      const chars = titleRef.current!.querySelectorAll("span");

      // Animation sequence - faster overall timing
      tl.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.025,
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.2"
        )
        .to({}, { duration: 0.5 }) // shorter hold time
        .to(
          [chars, subtitleRef.current],
          {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "+=0.2"
        )
        .to(containerRef.current, {
          opacity: 0,
          scale: 1.03,
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: () => onFinish && onFinish(),
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
      text-white font-sans select-none overflow-hidden"
    >
      {/* 🔥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/cloud-animation.webm" type="video/webm" />
      </video>

      {/* ✨ Company Title */}
      <h1
        ref={titleRef}
        className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,180,80,0.7)]"
      >
        AICLOUDHUB
      </h1>

      {/* 🌤️ Tagline */}
      <p
        ref={subtitleRef}
        className="relative mt-4 text-lg sm:text-xl font-medium text-white/90 opacity-0 translate-y-4"
      >
        Changing lives through innovation
      </p>

      {/* 🌈 Optional Light Sweep / Reflection */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_70%)] animate-pulse" />
      </div>
    </div>
  );
};

export default LandingPage;
