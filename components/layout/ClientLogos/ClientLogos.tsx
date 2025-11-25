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
          {/* Scrolling Track */}
          <div className="logos-scroll-container">
            <div className="logos-scroll-track">
              {duplicatedLogos.map((client, index) => {
                const scale = client.scale || 1.0;

                return (
                  <div
                    key={`${client.name}-${index}`}
                    className={`logo-item shrink-0 mx-6 transition-all duration-300 hover:scale-105 ${
                      actualTheme === "dark"
                        ? "bg-white hover:bg-gray-50 border-gray-200"
                        : "bg-white hover:bg-gray-50 border-gray-200"
                    } border shadow-sm hover:shadow-md rounded-xl backdrop-blur-sm overflow-hidden`}
                    style={{ width: "240px", height: "130px" }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full p-6">
                      <div
                        className="relative w-full h-full"
                        style={{ transform: `scale(${scale})` }}
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain! transition-opacity duration-300 hover:opacity-80"
                          sizes="200px"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
