// components/layout/HomePage/AboutUs.tsx
"use client";
import React from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

const AboutUs = () => {
  const { actualTheme } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden transition-colors duration-300 ${
        actualTheme === "dark"
          ? "bg-gradient-to-b from-zinc-900 to-zinc-950"
          : "bg-gradient-to-br from-white via-orange-50 to-yellow-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              actualTheme === "dark"
                ? "bg-orange-500/10 border border-orange-500/30 text-orange-400"
                : "bg-orange-100 border border-orange-300 text-orange-700"
            }`}>
              About Us
            </span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className={`text-4xl md:text-5xl font-black font-heading mb-6 tracking-tight ${
              actualTheme === "dark"
                ? "bg-linear-to-r from-orange-400 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,165,0,0.35)]"
                : "bg-linear-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent"
            }`}
          >
            Innovating Through Teamwork,
            <br />
            Delivering Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            At AiCloudHub, collaboration is at the heart of everything we do.
            Our teams work together across domains and disciplines to create
            impactful, scalable, and future-ready solutions that drive
            measurable business success.
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-orange-500/50 transition-all duration-500 ${
                actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Mission
                </h3>
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                To{" "}
                <span className="text-orange-400 font-semibold">
                  empower organizations and individuals
                </span>{" "}
                through innovative technology solutions and hands-on
                learning—enabling faster growth, smarter decisions, and
                sustainable success.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-blue-500/50 transition-all duration-500 ${
                actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Vision
                </h3>
              </div>
              <p
                className={`text-lg leading-relaxed ${
                  actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                To be a{" "}
                <span className="text-blue-400 font-semibold">
                  trusted global leader in digital transformation
                </span>
                , driving innovation and building capabilities that help
                businesses and communities succeed in a rapidly evolving world.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <Link href="/about">
            <Button
              size="lg"
              className="bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold text-lg px-10 py-6 rounded-full 
              hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all duration-300 hover:scale-105 group"
            >
              Learn More About Us
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
