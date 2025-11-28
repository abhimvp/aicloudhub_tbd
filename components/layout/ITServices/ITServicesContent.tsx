// components/layout/ITServices/ITServicesContent.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import {
  BriefcaseBusiness,
  ChevronRight,
  CheckCircle2,
  BrainCircuit,
  CloudCog,
  AppWindow,
  BarChart3,
  ArrowRight,
  ChevronDown,
  Check,
} from "lucide-react";

// Core IT Service Offerings
const CORE_SERVICES = [
  {
    title: "AI & Machine Learning Services",
    description:
      "Harness the power of artificial intelligence to automate processes, enhance decision-making, and build intelligent digital experiences.",
    icon: BrainCircuit,
    deliverables: [
      "GenAI & LLM-based solutions",
      "Custom machine learning models",
      "Intelligent search, chatbots & virtual assistants",
      "Predictive analytics & forecasting",
      "NLP, computer vision & text processing",
      "AI automation for business workflows",
    ],
    businessImpact: [
      "Better decision-making through data-driven intelligence",
      "Reduced manual effort and increased productivity",
      "Smarter customer experiences",
    ],
  },
  {
    title: "Cloud Services",
    description:
      "Modernize, scale, and secure your business with our comprehensive cloud offerings across AWS, Azure, and GCP.",
    icon: CloudCog,
    deliverables: [
      "Cloud migration & modernization",
      "Cloud-native application development",
      "Infrastructure automation (IaC)",
      "DevOps enablement & CI/CD pipelines",
      "Cost optimization & cloud governance",
      "Hybrid & multi-cloud solutions",
    ],
    businessImpact: [
      "Agility and scalability",
      "Reduced operational costs",
      "Faster innovation cycles",
    ],
  },
  {
    title: "Application Services",
    description:
      "Design, build, modernize, and maintain enterprise-grade applications tailored to your business goals.",
    icon: AppWindow,
    deliverables: [
      "Custom application development",
      "Web, mobile & API engineering",
      "Legacy modernization & re-platforming",
      "Microservices & modular architecture",
      "Enterprise application integration",
      "UX/UI design & modernization",
    ],
    businessImpact: [
      "High-performing digital products",
      "Enhanced customer engagement",
      "Reduced maintenance costs",
    ],
  },
  {
    title: "Data & Analytics Services",
    description:
      "Turn your data into a competitive advantage with our end-to-end data engineering and analytics services.",
    icon: BarChart3,
    deliverables: [
      "Data warehousing & data lakes",
      "ETL/ELT development",
      "BI dashboards & reporting",
      "Big data engineering",
      "Data governance & data quality",
      "Real-time analytics",
    ],
    businessImpact: [
      "Actionable insights for better decisions",
      "Strong data foundation for AI initiatives",
      "Improved business visibility",
    ],
  },
];

const INDUSTRIES = [
  "Retail & E-Commerce",
  "Telecom",
  "Banking & FinTech",
  "Supply Chain & Logistics",
  "Healthcare",
  "Technology & SaaS",
];

const WHY_CHOOSE_US = [
  {
    title: "Holistic Expertise Across AI, Cloud, Data & Applications",
    description:
      "A unified partner for full-stack modernization and innovation.",
  },
  {
    title: "Proven Engineering Excellence",
    description:
      "Decades of combined experience delivering enterprise-grade solutions.",
  },
  {
    title: "Flexible Engagement Models",
    description:
      "On-demand experts, project-based delivery, or dedicated teams.",
  },
  {
    title: "Faster, Value-Driven Delivery",
    description: "Agile practices and automation-first execution.",
  },
  {
    title: "Deep Domain Experience",
    description:
      "Understanding of business processes across critical industries.",
  },
];

export default function ITServicesContent() {
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
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white/70 mb-6">
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
                <BriefcaseBusiness className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                IT Services
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] mb-6 tracking-tight break-words" style={{ lineHeight: '1.1' }}>
                <span className="whitespace-normal">Transforming Businesses with </span>
                <span className="bg-linear-to-r from-orange-600 to-yellow-500 dark:from-orange-400 dark:to-yellow-300 bg-clip-text text-transparent whitespace-normal">
                  Modern and Intelligent IT Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Empowering organizations with AI-driven intelligence,
                cloud-powered scalability, robust applications, and data-led
                decision-making.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#offerings"
                  className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-3xl lg:max-w-4xl">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-3xl opacity-60" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-orange-500/10 dark:ring-orange-500/20">
                  <Image
                    src="/ServiceSectionImages/ServicePage_ITServices.webp"
                    alt="IT Services"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 lg:py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            IT Services — Overview
          </h2>
          <div className="space-y-4 text-lg text-slate-700 dark:text-zinc-300 leading-relaxed">
            <p>
              At{" "}
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                aicloudhub
              </span>
              , we deliver end-to-end IT services designed to meet the demands
              of the digital-first world. Whether you&apos;re modernizing legacy
              systems, migrating to the cloud, building intelligent
              applications, or driving business insights from data — we bring
              deep technical expertise, proven engineering excellence, and
              industry experience to support your transformation.
            </p>
            <p>
              Our four core service pillars enable businesses to innovate
              faster, operate efficiently, and stay ahead of technology
              disruption.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Core IT Service Offerings Section */}
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
            Our Core IT Service Offerings
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {CORE_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-900/50 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-6 lg:p-8 focus:outline-none"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-400 text-white shadow-lg shrink-0">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {index + 1}. {service.title}
                        </h3>
                        <ChevronDown
                          className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <p className="text-slate-700 dark:text-zinc-300 text-lg mb-4">
                        {service.description}
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
                          {service.title.includes("AI")
                            ? "What We Deliver"
                            : service.title.includes("Cloud")
                            ? "Our Cloud Capabilities"
                            : service.title.includes("Application")
                            ? "What We Offer"
                            : "Our Expertise Includes"}
                        </h4>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-slate-700 dark:text-zinc-300 text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-orange-100 dark:border-white/10 h-fit">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                          Business Impact
                        </h4>
                        <ul className="space-y-3">
                          {service.businessImpact.map((impact, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-slate-700 dark:text-zinc-400 text-sm"
                            >
                              <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                          <Link
                            href="/contact"
                            className="text-orange-600 dark:text-orange-400 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                          >
                            Discuss Your Project{" "}
                            <ArrowRight className="w-4 h-4" />
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

      {/* Industries We Support Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-orange-50 to-yellow-50 dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Industries We Support
            </h2>
            <p className="text-slate-700 dark:text-zinc-400 max-w-3xl mx-auto mb-8">
              We help clients across:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {INDUSTRIES.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300 text-center min-h-[120px] flex items-center justify-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-slate-900 dark:text-white font-semibold text-base lg:text-lg">
                  {industry}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Why Choose aicloudhub for IT Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <Check className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-700 dark:text-zinc-400 leading-relaxed ml-11 text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
              Let&apos;s discuss how our IT services can help you build, scale,
              and transform your business with smart, secure solutions.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black text-lg font-bold rounded-lg hover:opacity-90 transition shadow-xl shadow-orange-500/30"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
