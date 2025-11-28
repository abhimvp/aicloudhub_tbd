"use client";

import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import ClientLogos from "@/components/layout/ClientLogos/ClientLogos";
import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  Rocket,
  Globe,
  Brain,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Users,
  Zap,
  Heart,
  Handshake,
  BookOpen,
  Lightbulb,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";

const AboutPageClient = () => {
  const { actualTheme } = useTheme();

  const coreValues = [
    {
      icon: Zap,
      title: "Agility",
      description: "Adapting with speed.",
      color: "from-orange-500 to-yellow-400",
      bg: "bg-orange-500/10",
      text: "text-orange-500",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "Unwavering honesty.",
      color: "from-blue-500 to-cyan-400",
      bg: "bg-blue-500/10",
      text: "text-blue-500",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Shared vision.",
      color: "from-purple-500 to-pink-400",
      bg: "bg-purple-500/10",
      text: "text-purple-500",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Continuous growth.",
      color: "from-green-500 to-emerald-400",
      bg: "bg-green-500/10",
      text: "text-green-500",
    },
    {
      icon: Lightbulb,
      title: "Quality",
      description: "Excellence standard.",
      color: "from-yellow-500 to-orange-400",
      bg: "bg-yellow-500/10",
      text: "text-yellow-500",
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Unique solutions.",
      color: "from-indigo-500 to-purple-400",
      bg: "bg-indigo-500/10",
      text: "text-indigo-500",
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Committed impact.",
      color: "from-red-500 to-pink-400",
      bg: "bg-red-500/10",
      text: "text-red-500",
    },
  ];

  const services = [
    {
      title: "AI & ML",
      description: "Intelligent automation.",
      icon: Brain,
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infra.",
      icon: Cloud,
    },
    {
      title: "Cybersecurity",
      description: "Fortified protection.",
      icon: ShieldCheck,
    },
    {
      title: "Quality Eng.",
      description: "Reliability assured.",
      icon: CheckCircle2,
    },
    {
      title: "Data & Analytics",
      description: "Actionable insights.",
      icon: BarChart3,
    },
    {
      title: "Staffing",
      description: "Future-ready talent.",
      icon: Users,
    },
  ];

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        actualTheme === "dark"
          ? "bg-black text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Hero Section - Premium & Architectural */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {actualTheme === "dark" ? (
            <>
              <div className="absolute top-0 inset-x-0 h-[500px] bg-linear-to-b from-zinc-900 to-black" />
              <div className="absolute top-[-10%] left-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-orange-500/10 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[100px]" />
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </>
          ) : (
            <>
              <div className="absolute top-0 inset-x-0 h-[500px] bg-linear-to-b from-white to-slate-50" />
              <div className="absolute top-[-10%] right-[20%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-orange-100 rounded-full blur-[60px] md:blur-[100px]" />
              <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-50 rounded-full blur-[50px] md:blur-[80px]" />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8 border backdrop-blur-md ${
                actualTheme === "dark"
                  ? "bg-white/5 border-white/10 text-orange-400"
                  : "bg-white/60 border-slate-200 text-orange-600"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Global Impact
              </span>
            </div>
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 md:mb-8 leading-[1.1] ${
                actualTheme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Driving Digital <br />
              <span className="bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Transformation.
              </span>
            </h1>

            <p
              className={`text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto ${
                actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
              }`}
            >
              We partner with global enterprises to build smart, secure, and
              scalable technologies that define the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Card */}
      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-xl border rounded-3xl p-8 md:p-10 shadow-2xl ${
              actualTheme === "dark"
                ? "bg-zinc-900/50 border-white/5 shadow-black/20"
                : "bg-white/70 border-zinc-200 shadow-zinc-200/50"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-4 ${
                    actualTheme === "dark" ? "text-white" : "text-zinc-900"
                  }`}
                >
                  <span className="text-orange-500">aiCloudHub</span>: Global
                  leader in IT services & corporate training
                </h2>
                <div
                  className={`space-y-4 text-base leading-relaxed ${
                    actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
                  }`}
                >
                  <p>
                    Since 2018, we&apos;ve been helping enterprises accelerate
                    digital transformation while strengthening IT capabilities
                    through practical, hands-on learning experiences.
                    Headquartered in{" "}
                    <span className="text-orange-500 font-semibold">
                      Atlanta, GA
                    </span>
                    , we specialize in AI/ML, Cloud, Cybersecurity, DevSecOps,
                    Quality Engineering, and IT Staffing.
                  </p>
                </div>
              </div>
              <div
                className={`md:w-1/3 p-6 rounded-2xl ${
                  actualTheme === "dark" ? "bg-zinc-800/50" : "bg-orange-50"
                }`}
              >
                <p
                  className={`font-semibold text-lg italic ${
                    actualTheme === "dark" ? "text-zinc-200" : "text-zinc-800"
                  }`}
                >
                  &quot;We bridge innovation with enablement—helping
                  organizations adopt the right technologies and develop the
                  right talent.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message - Premium Layout */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden group mx-auto max-w-sm lg:max-w-sm xl:max-w-md">
                <div
                  className={`absolute inset-0 z-10 opacity-20 transition-opacity duration-500 group-hover:opacity-10 ${
                    actualTheme === "dark"
                      ? "bg-linear-to-t from-black via-transparent to-transparent"
                      : "bg-linear-to-t from-slate-900 via-transparent to-transparent"
                  }`}
                />
                <Image
                  src="/clientProfileImages/RoshiReddy.png"
                  alt="Roshi Jambula"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 mt-4 lg:mt-0"
            >
              <div className="relative pt-8 md:pt-0">
                <Quote
                  className={`absolute -top-8 -left-0 md:-top-12 md:-left-4 w-12 h-12 md:w-16 md:h-16 opacity-10 ${
                    actualTheme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                />
                <h2
                  className={`relative text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight pl-2 md:pl-0 ${
                    actualTheme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  Innovation is not just about technology. It&apos;s about{" "}
                  <span className="text-orange-500">empowering people</span>.
                </h2>
                <div
                  className={`space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed ${
                    actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
                  }`}
                >
                  <p>
                    &quot;With over 25 years in the industry, I&apos;ve seen
                    technology evolve rapidly. But one thing remains constant:
                    the need for authentic, human-centric leadership. At
                    aiCloudHub, we don&apos;t just deliver IT services; we build
                    partnerships rooted in trust and transparency.&quot;
                  </p>
                  <p>
                    &quot;Our mission goes beyond code and cloud. We are deeply
                    committed to diversity and inclusion, especially in
                    empowering women in tech. We are building a future where
                    innovation is inclusive, agility is the norm, and our
                    clients&apos; success is our only metric.&quot;
                  </p>
                </div>

                <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-dashed border-zinc-700/30">
                  <div className="flex items-center gap-4">
                    <div className="h-10 md:h-12 w-1 bg-orange-500 rounded-full"></div>
                    <div>
                      <p
                        className={`font-serif text-xl md:text-2xl italic ${
                          actualTheme === "dark"
                            ? "text-zinc-300"
                            : "text-slate-800"
                        }`}
                      >
                        Roshi Jambula
                      </p>
                      <p
                        className={`text-xs md:text-sm font-medium uppercase tracking-wider ${
                          actualTheme === "dark"
                            ? "text-zinc-500"
                            : "text-slate-600"
                        }`}
                      >
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Bento Style */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className={`relative p-6 md:p-10 rounded-3xl border overflow-hidden group ${
                actualTheme === "dark"
                  ? "bg-zinc-900/50 border-white/10 hover:border-orange-500/30"
                  : "bg-white border-slate-200 hover:border-orange-200 shadow-xl shadow-slate-200/50"
              }`}
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-24 h-24 md:w-32 md:h-32 text-orange-500" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-500 mb-4 md:mb-6">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Our Mission
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed ${
                    actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
                  }`}
                >
                  To empower organizations through innovative technology solutions
                  and hands-on learning—enabling faster growth, smarter
                  decisions, and sustainable success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className={`relative p-6 md:p-10 rounded-3xl border overflow-hidden group ${
                actualTheme === "dark"
                  ? "bg-zinc-900/50 border-white/10 hover:border-blue-500/30"
                  : "bg-white border-slate-200 hover:border-blue-200 shadow-xl shadow-slate-200/50"
              }`}
            >
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-24 h-24 md:w-32 md:h-32 text-blue-500" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-500 mb-4 md:mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Our Vision
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed ${
                    actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
                  }`}
                >
                  To be a trusted global leader in digital transformation, driving
                  innovation and building capabilities that help businesses and
                  communities succeed in a rapidly evolving world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* Core Values - Premium Grid */}
      <section
        className={`py-20 md:py-32 ${
          actualTheme === "dark" ? "bg-zinc-900/30" : "bg-slate-50/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Values</h2>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
              }`}
            >
              The principles that guide our innovation, shape our culture, and
              drive our partnerships.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -8 }}
                  className={`p-8 rounded-3xl border text-center transition-all duration-300 group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] ${
                    actualTheme === "dark"
                      ? "bg-zinc-900/50 border-white/5 hover:bg-zinc-900 hover:border-white/20"
                      : "bg-white border-slate-100 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50"
                  }`}
                >
                  <div
                    className={`mx-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${value.bg} ${value.text}`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm md:text-base leading-relaxed font-medium ${
                      actualTheme === "dark"
                        ? "text-zinc-400"
                        : "text-slate-700"
                    }`}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services - Premium Layout */}
      <section className="py-20 md:py-32 relative border-t border-dashed border-zinc-700/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our Expertise
              </h2>
              <p
                className={`text-lg md:text-xl leading-relaxed ${
                  actualTheme === "dark" ? "text-zinc-400" : "text-slate-700"
                }`}
              >
                Comprehensive, scalable, and future-ready solutions designed for
                the digital age.
              </p>
            </div>
            <Link
              href="/#services"
              className="group hidden md:flex text-base font-bold text-orange-500 hover:text-orange-400 items-center gap-2 transition-colors px-6 py-3 rounded-full bg-orange-500/10 hover:bg-orange-500/20"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                  className={`p-8 md:p-10 rounded-[2rem] border text-left group cursor-default transition-all duration-300 ${
                    actualTheme === "dark"
                      ? "bg-zinc-900/50 border-white/5 hover:bg-zinc-900 hover:border-orange-500/30"
                      : "bg-white border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10"
                  }`}
                >
                  <div className="mb-6 md:mb-8 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-orange-500 transition-all duration-300">
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed ${
                      actualTheme === "dark"
                        ? "text-zinc-400"
                        : "text-slate-700"
                    }`}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 md:hidden text-center">
            <Link
              href="/#services"
              className="group inline-flex text-base font-bold text-orange-500 hover:text-orange-400 items-center gap-2 transition-colors px-6 py-3 rounded-full bg-orange-500/10"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPageClient;
