// components/layout/Staffing/StaffingContent.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import {
  Users,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  Award,
  Zap,
  Target,
  Globe,
  ArrowRight,
} from "lucide-react";

// Data from PDF
const KEY_METRICS = [
  { label: "Financial Value", value: "$50M", icon: TrendingUp },
  { label: "Clients Served", value: "20+", icon: Globe },
  { label: "Professionals", value: "50+", icon: Users },
  { label: "Strategic Placements", value: "100+", icon: Target },
];

const STAFFING_OFFERINGS = [
  {
    title: "Agile, Diverse Workforce",
    description:
      "Our women-empowered, agile teams rapidly address evolving priorities, leveraging strong engineering capabilities to meet client demands efficiently.",
    icon: Users,
  },
  {
    title: "Strategic Placements",
    description:
      "With 100+ strategic placements, we empower businesses to find the right talent that drives measurable success and competitive advantage.",
    icon: Target,
  },
  {
    title: "Rapid Resource Scaling",
    description:
      "Quickly scale your teams with top-tier tech talent to meet project deadlines and business objectives without compromising on quality.",
    icon: Zap,
  },
  {
    title: "Strong Engineering Capabilities",
    description:
      "We connect you with professionals who possess deep technical expertise in Cloud, AI, DevOps, and Data Analytics.",
    icon: Briefcase,
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Proven Track Record",
    description:
      "With 20+ successful projects and over 100 strategic placements, we have a history of delivering excellence.",
    icon: Award,
  },
  {
    title: "Speed & Efficiency",
    description:
      "Our agile approach ensures quick turnaround times, helping you fill critical roles faster and more effectively.",
    icon: Zap,
  },
  {
    title: "Quality Focused",
    description:
      "We rigorously vet every candidate to ensure they not only have the right skills but also fit your company culture.",
    icon: CheckCircle2,
  },
];

export default function StaffingContent() {
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
                  IT Staffing
                </span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
                <Users className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                IT Staffing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
                Connect with{" "}
                <span className="bg-linear-to-r from-orange-600 to-yellow-500 dark:from-orange-400 dark:to-yellow-300 bg-clip-text text-transparent">
                  Top-Tier Tech Talent
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Find the perfect talent to accelerate your digital
                transformation. Our women-empowered, agile teams rapidly address
                evolving priorities, leveraging strong engineering capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  Find Talent
                </Link>
                <a
                  href="#offerings"
                  className="inline-flex px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  Our Solutions
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
                  src="/ServiceSectionImages/ServicePage_Staffing.webp"
                  alt="IT Staffing"
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
            Empowering Growth Through Talent
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            As a distinguished IT services and staffing company, we take pride
            in delivering unparalleled solutions that propel growth and elevate
            careers. We specialize in providing agile, diverse workforces that
            leverage strong engineering capabilities to meet client demands
            efficiently.
          </p>
        </motion.div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-12 bg-orange-50 dark:bg-white/5 border-y border-orange-100 dark:border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {KEY_METRICS.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-zinc-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
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
            Our Staffing Solutions
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Tailored workforce solutions to meet your specific business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {STAFFING_OFFERINGS.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-900/50 p-8 rounded-3xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-400 text-white shadow-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                      {offering.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                      {offering.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold text-sm hover:gap-2 transition-all group-hover:text-orange-700 dark:group-hover:text-orange-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
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
              We deliver more than just resumes; we deliver results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
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
              Ready to Build Your Dream Team?
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your staffing needs and let us help
              you find the talent that drives your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black text-lg font-bold rounded-lg hover:opacity-90 transition shadow-xl shadow-orange-500/30"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

