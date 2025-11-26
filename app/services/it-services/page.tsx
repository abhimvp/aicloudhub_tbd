"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import {
  Code2,
  ChevronRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Server,
  Zap,
  Globe,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

// Data from PDF
const BUSINESS_UNITS = [
  {
    title: "Product & Digital Engineering",
    description:
      "Empowering customers to harness the transformative potential of digital by developing smart, secure, and connected products and platforms.",
    icon: Code2,
    offerings: [
      "Digital Innovation",
      "Accelerated Product Development",
      "Platform Modernization & Engineering",
      "IoT Device Integration",
      "Quality Assurance",
      "Consulting & Industry Specific Solutions",
    ],
    highlight:
      "We leverage a cloud-first, mobile-friendly approach combined with an agile framework and test automation to help clients accelerate time-to-market.",
  },
  {
    title: "Generative AI Business Services",
    description:
      "Integrating content, data, and AI to craft innovative solutions tailored to the evolving demands of modern businesses.",
    icon: Cpu,
    offerings: [
      "Gen AI-Powered Applications",
      "Custom Gen AI Model Development",
      "End-to-End Generative AI Solutions",
      "CoE for Generative AI",
      "Gen AI Security & Compliance",
    ],
    highlight:
      "Our Generative AI ecosystem combines key components that enable businesses to fully harness the transformative power of this groundbreaking technology.",
  },
  {
    title: "Infrastructure Management & Security",
    description:
      "Comprehensive monitoring and management solutions, ensuring secure ring-fencing of customers' applications and infrastructure.",
    icon: ShieldCheck,
    offerings: [
      "Cloud & DC Infrastructure",
      "Digital Workspaces",
      "Networks",
      "ITSM, ITOM Tools & Platforms",
      "Cyber, Infrastructure & Data Security",
      "Data Privacy, Governance, Risk & Compliance",
      "Identity & Access Management",
    ],
    highlight:
      "We provide 24/7 support and managed security services tailored for mid-sized enterprises, leveraging automation through a DevSecOps approach.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Proven Expertise",
    description:
      "With 20+ successful projects and a track record of innovation, we empower businesses to achieve measurable success.",
    icon: Zap,
  },
  {
    title: "Comprehensive Portfolio",
    description:
      "From Cloud Computing and DevOps to AI/ML and Data Analytics, we provide end-to-end services to accelerate your digital journey.",
    icon: Globe,
  },
  {
    title: "Disruptive Technologies",
    description:
      "We pioneer innovation by leveraging an ecosystem of transformative technologies including Generative AI and Product Engineering.",
    icon: Server,
  },
];

export default function ITServicesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-orange-50 via-white to-yellow-50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Tech Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated floating shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Animated gradient overlay for dark mode */}
        <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none transition-opacity duration-300 z-1">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb Navigation */}
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/70 mb-6">
                <Link
                  href="/"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/50" />
                <Link
                  href="/#services"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/50" />
                <span className="text-slate-900 dark:text-white font-medium">
                  IT Services
                </span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
                <Code2 className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                IT Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
                Empower Your Business with{" "}
                <span className="bg-linear-to-r from-orange-600 to-yellow-500 dark:from-orange-400 dark:to-yellow-300 bg-clip-text text-transparent">
                  AI-Driven Innovation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge cloud, AI, and digital
                solutions. From ideation to launch, our intelligent solutions
                accelerate innovation, strengthen security, and drive business
                excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  Get Started
                </Link>
                <a
                  href="#offerings"
                  className="inline-flex px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-2xl" />
                <Image
                  src="/ServiceSectionImages/ServicePage_ITServices.webp"
                  alt="IT Services"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-16 lg:py-20 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
            Driving Innovation from Atlanta to the World
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Headquartered in Atlanta, GA,{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">
              aiCloudHub
            </span>{" "}
            drives innovation with smart, secure, and connected solutions,
            helping businesses unlock the full potential of digital
            technologies. Our team of 50+ professionals delivers tailored
            solutions that accelerate growth and ensure you stay ahead in the
            digital era.
          </p>
        </motion.div>
      </section>

      {/* Business Units / Offerings Section */}
      <section
        id="offerings"
        className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
            Our Business Units
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Specialized expertise across three core pillars of digital
            transformation
          </p>
        </motion.div>

        <div className="grid gap-8">
          {BUSINESS_UNITS.map((unit, index) => {
            const Icon = unit.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-900/50 rounded-3xl border border-orange-100 dark:border-white/10 shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                  }
                  className="w-full text-left p-6 lg:p-8 focus:outline-none"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-400 text-white shadow-lg shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {unit.title}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                        />
                      </div>
                      <p className="text-slate-600 dark:text-zinc-300 text-lg mb-4">
                        {unit.description}
                      </p>

                      {/* Mobile Icon (visible only on small screens) */}
                      <div className="sm:hidden mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-yellow-400 text-white shadow-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden bg-orange-50/50 dark:bg-white/5"
                >
                  <div className="p-6 lg:p-8 border-t border-orange-100 dark:border-white/10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-500" />
                          Key Offerings
                        </h4>
                        <ul className="space-y-3">
                          {unit.offerings.map((offering, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-slate-600 dark:text-zinc-300 text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                              {offering}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-orange-100 dark:border-white/10 h-fit">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                          Our Approach
                        </h4>
                        <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                          {unit.highlight}
                        </p>
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                          <Link href="/contact" className="text-orange-600 dark:text-orange-400 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                            Discuss Your Project <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-orange-50 to-yellow-50 dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Why Partner with aiCloudHub?
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto">
              We combine deep industry expertise with next-gen technology to deliver tangible business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 text-center bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-700 dark:via-orange-600 dark:to-yellow-600 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl lg:text-4xl font-black mb-6">
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our IT services can help you build, scale, and transform your business with smart, secure solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black text-lg font-bold rounded-lg hover:opacity-90 transition shadow-xl shadow-orange-500/30"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

