// components/layout/HomePage/AboutUs.tsx
"use client";
import React from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Award, Brain, CloudCog, Handshake, Shield, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const { actualTheme } = useTheme();

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden transition-colors duration-300 ${actualTheme === "dark"
          ? "bg-linear-to-br from-gray-900 via-slate-900 to-zinc-950"
          : "bg-gradient-to-br from-white via-orange-50 to-yellow-50"
        }`}
    >
      {/* Animated gradient overlay for dark mode */}
      {actualTheme === "dark" && (
        <div className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
            className={`text-4xl md:text-5xl font-black font-heading mb-6 tracking-tight ${actualTheme === "dark"
                ? "bg-linear-to-r from-orange-400 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,165,0,0.35)]"
                : "bg-linear-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent"
              }`}
          >
            Why Choose aiCloudHub
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "opacity, transform" }}
            className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
          >
            Trusted by global enterprises for delivering innovation, agility,
            and measurable impact.
          </motion.p>
        </div>

        {/* Why Choose Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Proven Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            style={{ willChange: "opacity, transform" }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-orange-500/50 transition-all duration-500 ${actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${actualTheme === "dark"
                      ? "bg-orange-500/20"
                      : "bg-orange-100"
                    }`}
                >
                  <Award
                    className={`w-6 h-6 ${actualTheme === "dark"
                        ? "text-orange-400"
                        : "text-orange-600"
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  Proven Expertise Across Domains
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Our team brings years of hands-on experience in Retail,
                E-commerce, Telecom, and Supply Chain — enabling us to deliver
                context-aware, outcome-driven solutions tailored to your
                business.
              </p>
            </div>
          </motion.div>

          {/* Card 2: AI-Driven Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity, transform" }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-purple-500/50 transition-all duration-500 ${actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${actualTheme === "dark"
                      ? "bg-purple-500/20"
                      : "bg-purple-100"
                    }`}
                >
                  <Brain
                    className={`w-6 h-6 ${actualTheme === "dark"
                        ? "text-purple-400"
                        : "text-purple-600"
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  AI-Driven Innovation
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                We embed AI, automation, and analytics into every layer of your
                digital ecosystem — helping you make faster, smarter, and more
                predictive decisions.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Scalable Cloud Transformation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity, transform" }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-blue-500/50 transition-all duration-500 ${actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${actualTheme === "dark" ? "bg-blue-500/20" : "bg-blue-100"
                    }`}
                >
                  <CloudCog
                    className={`w-6 h-6 ${actualTheme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  Scalable Cloud Transformation
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Whether you&apos;re migrating, modernizing, or managing — we ensure
                your cloud environment is optimized for cost, performance, and
                security.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Full Lifecycle Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity, transform" }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-green-500/50 transition-all duration-500 ${actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${actualTheme === "dark" ? "bg-green-500/20" : "bg-green-100"
                    }`}
                >
                  <Handshake
                    className={`w-6 h-6 ${actualTheme === "dark"
                        ? "text-green-400"
                        : "text-green-600"
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  Full Lifecycle Partnership
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                From strategy to implementation and beyond, we work as an
                extension of your team — ensuring long-term success, agility,
                and business continuity.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Quality & Reliability - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity, transform" }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="relative group md:col-span-2"
          >
            <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div
              className={`relative backdrop-blur-md border rounded-2xl p-8 h-full
              hover:border-orange-500/50 transition-all duration-500 ${actualTheme === "dark"
                  ? "bg-[#111111]/80 border-white/10"
                  : "bg-white/80 border-gray-200"
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${actualTheme === "dark"
                      ? "bg-orange-500/20"
                      : "bg-orange-100"
                    }`}
                >
                  <Shield
                    className={`w-6 h-6 ${actualTheme === "dark"
                        ? "text-orange-400"
                        : "text-orange-600"
                      }`}
                  />
                </div>
                <h3
                  className={`text-xl font-bold ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                >
                  Quality & Reliability
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                100% on-time delivery and proven frameworks that ensure seamless
                performance, scalability, and security — every single time.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ willChange: "opacity, transform" }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <Link href="/about-us">
            <Button
              size="lg"
              className="bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold text-lg px-10 py-6 rounded-full 
              hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all duration-300 hover:scale-105 group inline-flex items-center gap-2"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
