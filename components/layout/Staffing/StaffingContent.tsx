// components/layout/Staffing/StaffingContent.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import {
  UserCheck,
  ChevronRight,
  Check,
  Zap,
  Users,
  Target,
  BrainCircuit,
  CloudCog,
  Code,
  BarChart3,
  TestTube,
  Briefcase,
  ArrowRight,
  Search,
  UserPlus,
  TrendingUp,
  Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type WhyChooseCard = {
  title: string;
  description: string;
  iconName?: string;
};

type StaffingApproachStep = {
  step: string;
  title: string;
  description: string;
};

type RolesCategory = {
  category: string;
  iconName?: string;
  roles: string[];
};

type HeroContent = {
  badgeLabel: string;
  title: string;
  description: string;
  image?: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

type FinalCtaContent = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
};

type ItStaffingDocument = {
  hero?: {
    badgeLabel?: string;
    title?: string;
    description?: string;
    image?: SanityImageSource;
    primaryCtaLabel?: string;
    primaryCtaHref?: string;
    secondaryCtaLabel?: string;
    secondaryCtaHref?: string;
  };
  overviewTitle?: string;
  overviewBody?: string[];
  whyChooseCards?: WhyChooseCard[];
  technologyDomains?: string[];
  engagementModels?: string[];
  staffingApproach?: StaffingApproachStep[];
  rolesByCategory?: RolesCategory[];
  industries?: string[];
  valueProposition?: string[];
  finalCta?: FinalCtaContent;
};

const IT_STAFFING_QUERY = `*[_type == "itStaffingService"][0]{
  hero,
  overviewTitle,
  overviewBody,
  whyChooseCards,
  technologyDomains,
  engagementModels,
  staffingApproach,
  rolesByCategory,
  industries,
  valueProposition,
  finalCta
}`;

const iconMap: Record<string, LucideIcon> = {
  Award,
  Zap,
  Users,
  Target,
  BrainCircuit,
  CloudCog,
  Code,
  BarChart3,
  TestTube,
  Briefcase,
  UserCheck,
  Search,
  UserPlus,
  TrendingUp,
};

function getIconByName(name?: string): LucideIcon | undefined {
  if (!name) return undefined;
  return iconMap[name] ?? undefined;
}

export default function StaffingContent() {
  const [hero, setHero] = useState<HeroContent | null>(null);
  const [overviewTitle, setOverviewTitle] = useState("");
  const [overviewBody, setOverviewBody] = useState<string[]>([]);
  const [whyChooseCards, setWhyChooseCards] = useState<
    (WhyChooseCard & { icon?: LucideIcon })[]
  >([]);
  const [technologyDomains, setTechnologyDomains] = useState<string[]>([]);
  const [engagementModels, setEngagementModels] = useState<string[]>([]);
  const [staffingApproach, setStaffingApproach] = useState<
    StaffingApproachStep[]
  >([]);
  const [rolesByCategory, setRolesByCategory] = useState<
    (RolesCategory & { icon?: LucideIcon })[]
  >([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [valueProposition, setValueProposition] = useState<string[]>([]);
  const [finalCta, setFinalCta] = useState<FinalCtaContent | null>(null);

  useEffect(() => {
    let isMounted = true;

    client
      .fetch<ItStaffingDocument>(IT_STAFFING_QUERY)
      .then((data) => {
        if (!isMounted || !data) return;

        if (data.hero) {
          setHero({
            badgeLabel: data.hero.badgeLabel ?? "IT Staffing",
            title: data.hero.title ?? "",
            description: data.hero.description ?? "",
            image: data.hero.image
              ? urlFor(data.hero.image).width(800).height(600).url()
              : undefined,
            primaryCtaLabel: data.hero.primaryCtaLabel ?? "",
            primaryCtaHref: data.hero.primaryCtaHref ?? "/contact-us",
            secondaryCtaLabel: data.hero.secondaryCtaLabel ?? "",
            secondaryCtaHref: data.hero.secondaryCtaHref ?? "#why-choose",
          });
        }

        if (data.overviewTitle) setOverviewTitle(data.overviewTitle);
        if (data.overviewBody) setOverviewBody(data.overviewBody);

        if (data.whyChooseCards) {
          setWhyChooseCards(
            data.whyChooseCards.map((card) => ({
              ...card,
              icon: getIconByName(card.iconName) ?? Award,
            }))
          );
        }

        if (data.technologyDomains)
          setTechnologyDomains(data.technologyDomains);

        if (data.engagementModels)
          setEngagementModels(data.engagementModels);

        if (data.staffingApproach)
          setStaffingApproach(data.staffingApproach);

        if (data.rolesByCategory) {
          setRolesByCategory(
            data.rolesByCategory.map((cat) => ({
              ...cat,
              icon: getIconByName(cat.iconName),
            }))
          );
        }

        if (data.industries) setIndustries(data.industries);

        if (data.valueProposition)
          setValueProposition(data.valueProposition);

        if (data.finalCta) {
          setFinalCta({
            title: data.finalCta.title ?? "",
            description: data.finalCta.description ?? "",
            buttonText: data.finalCta.buttonText ?? "",
            buttonHref: data.finalCta.buttonHref ?? "/contact-us",
          });
        }
      })
      .catch(() => {
        // Keep fallbacks on error
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!hero || !finalCta) {
    return null;
  }

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
                  IT Staffing
                </span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
                <UserCheck className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                {hero.badgeLabel}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] mb-6 tracking-tight wrap-break-word" style={{ lineHeight: '1.1' }}>
                <span className="whitespace-normal">{hero.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={hero.primaryCtaHref}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  <span>{hero.primaryCtaLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={hero.secondaryCtaHref}
                  className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  <span>{hero.secondaryCtaLabel}</span>
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
                  {hero.image && (
                    <Image
                      src={hero.image}
                      alt={hero.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  )}
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
            {overviewTitle}
          </h2>
          <div className="space-y-4 text-lg text-slate-700 dark:text-zinc-300 leading-relaxed">
            {overviewBody.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Our IT Staffing Services Section */}
      <section
        id="why-choose"
        className="py-16 lg:py-24 bg-linear-to-br from-orange-50 to-yellow-50 dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Why Choose Our IT Staffing Services?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseCards.map((item, index) => {
              const Icon = item.icon ?? Award;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Across Key Technology Domains Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Expertise Across Key Technology Domains
            </h2>
            <p className="text-slate-700 dark:text-zinc-400 max-w-3xl mx-auto">
              We specialize in staffing roles across:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologyDomains.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300 min-h-[100px] flex items-center h-full">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                    <p className="text-slate-900 dark:text-white font-medium text-base">
                      {domain}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Engagement Models Section */}
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
              Flexible Engagement Models
            </h2>
            <p className="text-slate-700 dark:text-zinc-400 max-w-3xl mx-auto">
              Choose the model that suits your goals:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300 text-center min-h-[120px] flex items-center justify-center h-full">
                  <p className="text-slate-900 dark:text-white font-semibold text-base lg:text-lg">
                    {model}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Staffing Approach Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Our Staffing Approach
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffingApproach.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="mb-5">
                      <div className="relative inline-flex items-center justify-center">
                        <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-400 rounded-2xl blur-lg opacity-40" />
                        <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-400 text-white flex items-center justify-center font-black text-2xl shadow-lg">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-700 dark:text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles We Support Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-orange-50 to-yellow-50 dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Roles We Support
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rolesByCategory.map((category, index) => {
              const Icon = category.icon ?? Briefcase;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {category.roles.map((role, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-700 dark:text-zinc-300 text-base"
                        >
                          <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300 text-center min-h-[120px] flex items-center justify-center h-full">
                  <p className="text-slate-900 dark:text-white font-semibold text-base lg:text-lg">
                    {industry}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-orange-50 to-yellow-50 dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Value Proposition
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valueProposition.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="bg-white dark:bg-zinc-900/50 p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <Check className="w-7 h-7 text-orange-500 shrink-0 mt-0.5" />
                    <p className="text-slate-900 dark:text-white font-semibold text-base lg:text-lg">
                      {value}
                    </p>
                  </div>
                </div>
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
              {finalCta.title}
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              {finalCta.description}
            </p>
            <Link
              href={finalCta.buttonHref}
              className="group inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black text-lg font-bold rounded-lg hover:opacity-90 transition shadow-xl shadow-orange-500/30"
            >
              <span>{finalCta.buttonText}</span>
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
