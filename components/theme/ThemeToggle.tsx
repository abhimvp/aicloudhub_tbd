"use client";

import { useTheme } from "./ThemeProvider";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const morphBgRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline();

      // Animate based on theme
      if (theme === "light") {
        tl.to(morphBgRef.current, {
          left: "6px",
          background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow: "0 4px 20px rgba(251, 191, 36, 0.4)",
          duration: 0.6,
          ease: "power2.out",
        })
          .to(
            sunRef.current,
            {
              scale: 1,
              rotate: 180,
              opacity: 1,
              duration: 0.4,
            },
            "-=0.3"
          )
          .to(
            moonRef.current,
            {
              scale: 0.8,
              opacity: 0.3,
              duration: 0.3,
            },
            "-=0.4"
          )
          .to(
            orbitRef.current,
            {
              rotate: 0,
              duration: 0.6,
            },
            "-=0.6"
          );
      } else {
        tl.to(morphBgRef.current, {
          left: "42px",
          background: "linear-gradient(135deg, #4338ca, #3730a3)",
          boxShadow: "0 4px 20px rgba(67, 56, 202, 0.4)",
          duration: 0.6,
          ease: "power2.out",
        })
          .to(
            moonRef.current,
            {
              scale: 1,
              rotate: -180,
              opacity: 1,
              duration: 0.4,
            },
            "-=0.3"
          )
          .to(
            sunRef.current,
            {
              scale: 0.8,
              opacity: 0.3,
              duration: 0.3,
            },
            "-=0.4"
          )
          .to(
            orbitRef.current,
            {
              rotate: 180,
              duration: 0.6,
            },
            "-=0.6"
          );
      }
    },
    { scope: containerRef, dependencies: [theme] }
  );

  return (
    <div className="relative scale-75">
      {/* Floating Orbital Ring */}
      <div
        ref={orbitRef}
        className="absolute -inset-3 border border-electric-blue/20 rounded-full"
        style={{
          animation: "orbit 20s linear infinite",
          transform: "rotate(0deg)",
        }}
      >
        <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-electric-blue rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-0.5 h-0.5 bg-violet rounded-full" />
        <div className="absolute left-0 top-1/3 w-0.5 h-0.5 bg-pink rounded-full" />
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center bg-surface/80 backdrop-blur-md border border-border/50 rounded-xl p-1.5 shadow-md"
        style={{
          background: "rgba(var(--color-surface), 0.8)",
        }}
      >
        {/* Morphing Background */}
        <div
          ref={morphBgRef}
          className="absolute top-1.5 w-9 h-9 rounded-lg transition-all duration-600"
          style={{
            left: "42px", // Moon position (dark theme default)
            background: "linear-gradient(135deg, #4338ca, #3730a3)",
            boxShadow: "0 4px 20px rgba(67, 56, 202, 0.4)",
            filter: "blur(0px)",
          }}
        />

        {/* Sun Button */}
        <button
          onClick={() => setTheme("light")}
          className="relative z-10 flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110"
        >
          <div
            ref={sunRef}
            className="relative flex items-center justify-center"
            style={{
              transform: theme === "light" ? "scale(1)" : "scale(0.8)",
              opacity: theme === "light" ? 1 : 0.3,
            }}
          >
            {/* Sun Icon */}
            <div className="w-4 h-4 bg-white rounded-full relative">
              {/* Sun Rays */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-1.5 bg-white rounded-full"
                  style={{
                    top: "-5px",
                    left: "50%",
                    transformOrigin: "50% 13px",
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </button>

        {/* Moon Button */}
        <button
          onClick={() => setTheme("dark")}
          className="relative z-10 flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-300 hover:scale-110"
        >
          <div
            ref={moonRef}
            className="relative flex items-center justify-center"
            style={{
              transform: theme === "dark" ? "scale(1)" : "scale(0.8)",
              opacity: theme === "dark" ? 1 : 0.3,
            }}
          >
            {/* Moon Icon - Realistic Crescent */}
            <div className="relative w-4 h-4">
              {/* Full moon base */}
              <div className="w-4 h-4 bg-gray-300 rounded-full absolute"></div>
              {/* Dark shadow to create crescent */}
              <div
                className="w-4 h-4 rounded-full absolute"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(30, 41, 59, 0.9) 0%, rgba(30, 41, 59, 0.9) 60%, transparent 80%)",
                  transform: "translateX(0.5px)",
                }}
              ></div>
              {/* Craters */}
              <div className="absolute top-1 left-0.5 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
              <div className="absolute top-2 left-0.5 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + Math.sin(i) * 40}%`,
              animation: `particleFloat ${
                2 + i * 0.5
              }s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes particleFloat {
          to {
            transform: translateY(-10px) scale(1.2);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
