"use client";
import React from "react";
import Image from "next/image";
import { clientLogos } from "@/lib/constants";
import { useTheme } from "@/components/theme/ThemeProvider";
import "./ClientLogos.css";

const ClientLogos = () => {
  const { actualTheme } = useTheme();

  // Duplicate the logos array for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        actualTheme === "dark" ? "bg-zinc-950" : "bg-gray-50"
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            actualTheme === "dark"
              ? `radial-gradient(circle at top center, rgba(59,130,246,0.1) 0%, transparent 50%),
                 radial-gradient(circle at bottom center, rgba(249,115,22,0.08) 0%, transparent 50%)`
              : `radial-gradient(circle at top center, rgba(59,130,246,0.05) 0%, transparent 50%),
                 radial-gradient(circle at bottom center, rgba(249,115,22,0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-black mb-4 ${
              actualTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Trusted By
          </h2>
          <p
            className={`text-xl ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Industry leaders who{" "}
            <span className="text-orange-400 font-semibold">
              trust our expertise
            </span>
          </p>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
              actualTheme === "dark"
                ? "bg-linear-to-r from-zinc-950 to-transparent"
                : "bg-linear-to-r from-gray-50 to-transparent"
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
              actualTheme === "dark"
                ? "bg-linear-to-l from-zinc-950 to-transparent"
                : "bg-linear-to-l from-gray-50 to-transparent"
            }`}
          />

          {/* Scrolling Track */}
          <div className="logos-scroll-container">
            <div className="logos-scroll-track">
              {duplicatedLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className={`logo-item shrink-0 mx-8 transition-all duration-300 ${
                    actualTheme === "dark"
                      ? "bg-white/5 hover:bg-white/10 border-white/10"
                      : "bg-white hover:bg-gray-50 border-gray-200"
                  } border rounded-xl p-6 backdrop-blur-sm`}
                >
                  <div className="relative w-40 h-20 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain transition-all duration-300"
                      sizes="160px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
