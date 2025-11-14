"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BrainCircuit,
  CloudCog,
  AppWindow,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import * as motion from "motion/react-client";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  cta: {
    label: string;
    href: string;
  };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
};

const SERVICES: Service[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle:
      "Harness the power of AI to drive automation, intelligent analytics, and smarter decision-making.",
    description: [
      "Transform your business with intelligent automation, predictive analytics, and data-driven insights.",
      "Our AI solutions empower you to make smarter, faster, and more impactful decisions.",
    ],
    cta: {
      label: "Learn More →",
      href: "/services/ai-ml",
    },
    Icon: BrainCircuit,
    image: "/ServiceSectionImages/Services-AI-ML.png",
  },
  {
    id: "cloud",
    title: "Cloud Services",
    subtitle:
      "Modernize your infrastructure with scalable and secure cloud-native solutions.",
    description: [
      "From migration to management, we help you achieve agility and performance across platforms.",
      "Build a resilient, future-ready foundation with proactive governance and automation.",
    ],
    cta: {
      label: "Learn More →",
      href: "/services/cloud",
    },
    Icon: CloudCog,
    image: "/ServiceSectionImages/Services-Cloud-Migration.png",
  },
  {
    id: "applications",
    title: "Application Services",
    subtitle:
      "Build, modernize, and optimize your business applications for enhanced usability and performance.",
    description: [
      "Our end-to-end engineering services combine agile delivery with modern UI/UX practices.",
      "Ship experiences that feel intuitive, performant, and ready for continuous evolution.",
    ],
    cta: {
      label: "Learn More →",
      href: "/services/applications",
    },
    Icon: AppWindow,
    image: "/ServiceSectionImages/Services-IT-Staffing.png",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    subtitle:
      "Convert your enterprise data into actionable insights for strategic growth.",
    description: [
      "We design analytics frameworks that uncover patterns, trends, and real-time intelligence.",
      "Empower teams with trusted dashboards, governed pipelines, and decision-ready data.",
    ],
    cta: {
      label: "Learn More →",
      href: "/services/data-analytics",
    },
    Icon: BarChart3,
    image: "/ServiceSectionImages/Services-DE-Analytics.png",
  },
];

export default function TechnologyServicesTabs() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const { actualTheme } = useTheme();
  const isDark = actualTheme === "dark";
  const activeService = SERVICES.find((service) => service.id === activeId)!;
  const subtleText = isDark ? "text-zinc-400" : "text-slate-500";
  const sectionBg = isDark
    ? "bg-linear-to-br from-gray-900 via-slate-900 to-zinc-950"
    : "bg-gradient-to-br from-white via-orange-50/40 to-yellow-50/50";
  const bodyText = isDark ? "text-zinc-200" : "text-slate-600";
  const tabInactive = isDark ? "text-zinc-400" : "text-slate-500";
  const tabUnderline = isDark ? "bg-orange-400" : "bg-orange-500";
  const headingColor = isDark ? "text-white" : "text-slate-900";
  const panelBadge = isDark
    ? "border-white/10 bg-white/5 text-orange-200"
    : "border-orange-100 bg-orange-50 text-orange-600";
  const ctaClasses = isDark
    ? "bg-linear-to-r from-orange-500 to-yellow-400 text-black hover:opacity-90"
    : "bg-linear-to-r from-orange-500 to-yellow-400 text-black shadow-lg shadow-orange-200/60 hover:opacity-95";

  return (
    <section
      id="technology-services"
      className={`relative px-4 py-24 sm:px-6 lg:px-8 transition-colors duration-300 ${sectionBg} -mt-px overflow-hidden`}
    >
      {/* Animated gradient overlay for dark mode */}
      {isDark && (
        <div className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}
      <div
        className={`absolute inset-0 -z-10 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top,_rgba(255,153,51,0.25),rgba(15,23,42,0))]"
            : "bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),rgba(255,255,255,0))]"
        }`}
      />
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <p
            className={`text-sm font-semibold uppercase tracking-[0.4em] ${
              isDark ? "text-orange-400" : "text-orange-600"
            }`}
          >
            Our Technology Services
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-black ${headingColor}`}
          >
            Empowering Enterprises with Intelligent, Secure, and Scalable
            Solutions.
          </h2>
        </motion.div>

        {/* Mobile Dropdown */}
        <motion.div
          className="mt-12 md:hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative">
            <select
              value={activeId}
              onChange={(e) => setActiveId(e.target.value)}
              className={`w-full appearance-none rounded-lg border px-4 py-3 pl-12 pr-10 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDark
                  ? "border-white/20 bg-white/10 text-white focus:ring-orange-400 focus:border-orange-400 [&>option]:bg-gray-900 [&>option]:text-white"
                  : "border-orange-200 bg-white text-slate-900 focus:ring-orange-500 focus:border-orange-500 shadow-md [&>option]:bg-white [&>option]:text-slate-900"
              }`}
              aria-label="Select technology service"
            >
              {SERVICES.map(({ id, title }) => (
                <option
                  key={id}
                  value={id}
                  className={isDark ? "bg-gray-900 text-white" : "bg-white text-slate-900"}
                >
                  {title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
              <activeService.Icon
                className={`h-5 w-5 ${
                  isDark ? "text-orange-400" : "text-orange-600"
                }`}
              />
            </div>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <ChevronDown
                className={`h-5 w-5 ${
                  isDark ? "text-zinc-400" : "text-slate-500"
                }`}
              />
            </div>
          </div>
        </motion.div>

        {/* Desktop Tabs */}
        <motion.div
          className="mt-12 hidden md:flex flex-wrap justify-center gap-x-12 gap-y-4 text-base font-semibold"
          role="tablist"
          aria-label="Technology services"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          {SERVICES.map(({ id, title, subtitle, Icon }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${id}-panel`}
                id={`${id}-tab`}
                className="relative pb-3 transition-all duration-300"
                onClick={() => setActiveId(id)}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? (isDark ? "text-white" : "text-slate-900") : tabInactive
                    }`}
                  />
                  <span
                    className={`text-lg ${
                      isActive ? (isDark ? "text-white" : "text-slate-900") : tabInactive
                    }`}
                  >
                    {title}
                  </span>
                </div>
                <span
                  className={`absolute bottom-0 left-0 h-1 w-full rounded-full transition-opacity ${
                    isActive ? `${tabUnderline} opacity-100` : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className={`mt-10 rounded-3xl border px-6 py-10 sm:px-12 transition-colors duration-300 ${
            isDark ? "border-white/10 bg-white/5" : "border-orange-100 bg-white shadow-lg"
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
            <div
              className={`w-full overflow-hidden rounded-2xl ${
                isDark ? "bg-black/10" : "bg-white shadow-xl"
              } lg:w-7/12`}
            >
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={960}
                height={540}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full space-y-4 lg:w-5/12">
              <div
                className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${panelBadge}`}
              >
                <activeService.Icon className="h-4 w-4" />
                {activeService.title}
              </div>
              <p
                className={`text-xl font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {activeService.subtitle}
              </p>
              <div className={`space-y-4 ${bodyText}`}>
                {activeService.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Link
                href={activeService.cta.href}
                className={`inline-flex w-fit items-center rounded-lg px-6 py-3 text-sm font-semibold transition ${ctaClasses}`}
              >
                {activeService.cta.label}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

