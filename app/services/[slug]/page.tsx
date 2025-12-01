import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";

// Create a client without CDN for fresh data on dynamic routes
const freshClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disable CDN for fresh data on dynamic routes
});
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import {
  Sparkles,
  Target,
  Brain,
  Database,
  Eye,
  Cpu,
  Network,
  GitBranch,
  Shield,
  Layers,
  BarChart3,
  ChevronRight,
  ShoppingBag,
  Stethoscope,
  Factory,
  Banknote,
  ArrowRight,
  BrainCircuit,
  CloudCog,
  AppWindow,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceOffering = {
  title: string;
  description: string;
};

type ServiceCapability = {
  title: string;
  description: string;
};

type ServiceSolution = {
  title: string;
  description: string;
};

type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

// Animation configurations - defined outside component to prevent re-renders
const OFFERING_HOVER = { y: -8, scale: 1.01 };
const CAPABILITY_3D_STYLE = {
  transformStyle: "preserve-3d" as const,
  perspective: 1000,
};
const getCapability3DHover = (index: number) => ({
  y: -12,
  rotateX: 5,
  rotateY: index === 1 ? 0 : index === 0 ? -5 : 5,
  scale: 1.02,
});
const INDUSTRY_HOVER = { scale: 1.05, rotate: 2 };

// Icon mapping function
const getIconByName = (iconName: string): LucideIcon => {
  const iconMap: Record<string, LucideIcon> = {
    BrainCircuit,
    CloudCog,
    AppWindow,
    BarChart3,
    UserCheck,
  };
  return iconMap[iconName] || BrainCircuit;
};

// GROQ query for service offering
const SERVICE_OFFERING_QUERY = `*[_type == "serviceOffering" && id.current == $slug][0]{
  _id,
  "id": id.current,
  title,
  subtitle,
  description,
  iconName,
  image,
  heroTitle,
  heroDescription,
  heroImage,
  heroCTA,
  offerings,
  capabilities,
  solutions,
  process,
  industries,
  whyChoose{
    title,
    reasons,
    image
  },
  finalCTA
}`;

// Enable ISR (Incremental Static Regeneration) and allow dynamic params
export const revalidate = 3600; // Revalidate every hour
export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch<{ id: { current: string } }[]>(
      `*[_type == "serviceOffering" && defined(id.current)]{ "id": id }`
    );
    return slugs
      .map((item) => ({
        slug: item.id?.current || '',
      }))
      .filter((item) => item.slug !== ''); // Filter out empty slugs
  } catch (error) {
    console.error('Error fetching service offerings for static params:', error);
    return [];
  }
}

// Icon mapping for each offering - moved outside component to prevent re-renders
const getOfferingIcon = (index: number, serviceId: string) => {
  if (serviceId === "ai-ml") {
    return [Target, Brain, Cpu, Database, Eye, GitBranch][index];
  } else if (serviceId === "cloud") {
    return [Target, Network, Layers, GitBranch, Shield, Shield][index];
  } else if (serviceId === "applications") {
    return [Cpu, Network, GitBranch, Layers, Shield, BarChart3][index];
  } else {
    return [Database, Layers, BarChart3, Brain, Shield, Network][index];
  }
};

// Bento grid layout patterns - moved outside component to prevent re-renders
const getBentoGridClass = (index: number, isAIML: boolean) => {
  if (!isAIML) return "";
  const patterns = [
    "md:col-span-2", // Wide card - top
    "md:col-span-1", // Standard
    "md:col-span-1", // Standard
    "md:col-span-1", // Standard
    "md:col-span-1", // Standard
    "md:col-span-2", // Wide card - bottom
  ];
  return patterns[index] || "";
};

// Map service IDs to their respective Why Choose images
const getWhyChooseImage = (serviceId: string) => {
  const imageMap: Record<string, string> = {
    "ai-ml": "/WhyChooseAICloudhubAIML.png",
    cloud: "/WhyChooseAICloudhubCloudServices.png",
    applications: "/WhyChooseAICloudhubApplicationServices.png",
    "data-analytics": "/WhyChooseAICloudhubDataAnalytics.png",
  };
  return imageMap[serviceId] || "/WhyChooseAICloudhubAIML.png";
};

const INDUSTRY_ICON_RULES: { match: RegExp; icon: LucideIcon }[] = [
  { match: /(retail|commerce)/i, icon: ShoppingBag },
  { match: /(healthcare|life sciences)/i, icon: Stethoscope },
  { match: /(finance|financial)/i, icon: Banknote },
  { match: /(manufacturing|supply chain|logistics|iot)/i, icon: Factory },
  { match: /(technology|saas)/i, icon: Cpu },
];

const getIndustryIcon = (industry: string): LucideIcon => {
  return (
    INDUSTRY_ICON_RULES.find(({ match }) => match.test(industry))?.icon ||
    Sparkles
  );
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await client.fetch(SERVICE_OFFERING_QUERY, { slug });

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Services`,
    description: service.heroDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let service;
  try {
    // Use fresh client (no CDN) for dynamic routes to get latest data
    service = await freshClient.fetch(SERVICE_OFFERING_QUERY, { slug });
  } catch (error) {
    console.error(`Error fetching service with slug "${slug}":`, error);
    notFound();
  }

  if (!service) {
    console.warn(`Service with slug "${slug}" not found in Sanity. Available services:`, 
      await freshClient.fetch(`*[_type == "serviceOffering"]{ "id": id.current, title }`).catch(() => [])
    );
    notFound();
  }

  const Icon = getIconByName(service.iconName);
  const serviceId = service.id || '';
  const isAIML = serviceId === "ai-ml";
  
  // Handle image URLs - use urlFor for Sanity images, fallback to direct URL
  const heroImageUrl = service.heroImage?.asset
    ? urlFor(service.heroImage).width(800).height(600).url()
    : typeof service.heroImage === 'string' && service.heroImage.startsWith('http')
    ? service.heroImage
    : '';
  
  const whyChooseImageUrl = service.whyChoose?.image?.asset
    ? urlFor(service.whyChoose.image).width(500).height(500).url()
    : typeof service.whyChoose?.image === 'string' && service.whyChoose.image.startsWith('http')
    ? service.whyChoose.image
    : getWhyChooseImage(serviceId);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 transition-colors duration-300">
      {/* Hero Section with Floating Elements */}
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

        <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
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
                  {service.title}
                </span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                <Icon className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                {service.title}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.1] mb-6 tracking-tight wrap-break-word" style={{ lineHeight: '1.1' }}>
                <span className="whitespace-normal">{service.heroTitle}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  {service.heroCTA.primary}
                </Link>
                <a
                  href="#offerings"
                  className="inline-flex px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  {service.heroCTA.secondary}
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
                  {heroImageUrl && (
                    <Image
                      src={heroImageUrl}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 45vw"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section - Bento Grid for AI/ML, Regular Grid for Others */}
      <section
        id="offerings"
        className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-4 text-slate-900 dark:text-white">
            What We Offer
          </h2>
          <p className="text-center text-slate-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto">
            {isAIML
              ? "Comprehensive AI & ML solutions designed to transform your business operations"
              : `Everything you need for ${service.title?.toLowerCase() || ''}`}
          </p>
        </motion.div>

        <div
          className={`grid gap-4 lg:gap-6 ${isAIML ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {service.offerings?.map((offering: ServiceOffering, index: number) => {
            const OfferingIcon = getOfferingIcon(index, serviceId);

            return (
              <motion.article
                key={index}
                className={`flex flex-col h-full ${getBentoGridClass(
                  index,
                  isAIML
                )}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={OFFERING_HOVER}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="group relative bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg dark:shadow-none p-6 lg:p-8 hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 via-yellow-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-yellow-500/5 group-hover:to-orange-500/5 dark:group-hover:from-orange-500/10 dark:group-hover:via-yellow-500/10 dark:group-hover:to-orange-500/10 transition-all duration-500" />

                  {/* Icon - unique for each offering */}
                  <div className="relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-400 text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <OfferingIcon className="w-7 h-7" />
                  </div>

                  <div className="relative flex-1">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-slate-600 dark:text-zinc-300 leading-relaxed text-sm lg:text-base">
                      {offering.description}
                    </p>
                  </div>

                  {/* Subtle gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Capabilities Section - 3D Tilt Cards with Glassmorphism */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-orange-50 to-yellow-50 dark:from-gray-800/50 dark:to-slate-800/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 text-slate-900 dark:text-white">
              {service.solutions
                ? "Capabilities & Technologies"
                : "Key Capabilities"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {service.capabilities?.map((capability: ServiceCapability, index: number) => {
              const capability3DHover = getCapability3DHover(index);
              return (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={capability3DHover}
                  style={CAPABILITY_3D_STYLE}
                >
                  <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-orange-100 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Glassmorphism effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-orange-400/10 via-transparent to-yellow-400/10 dark:from-orange-400/20 dark:to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated glow effect */}
                    <div className="absolute -inset-1 bg-linear-to-r from-orange-500 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                    {/* Number badge */}
                    <div className="relative mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-orange-500/20 to-yellow-500/20 dark:from-orange-500/30 dark:to-yellow-500/30 border border-orange-300/50 dark:border-orange-400/30 font-bold text-orange-600 dark:text-orange-400">
                      {index + 1}
                    </div>

                    <h4 className="relative font-bold text-lg mb-3 text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {capability.title}
                    </h4>
                    <p className="relative text-slate-600 dark:text-zinc-300">
                      {capability.description}
                    </p>

                    {/* Corner shine effect */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-white/40 to-transparent dark:from-white/20 rounded-tr-2xl rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section (conditional) */}
      {service.solutions && (
        <section className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 text-slate-900 dark:text-white">
              Tailored Solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {service.solutions?.map((solution: ServiceSolution, index: number) => (
              <motion.div
                key={index}
                className="h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg p-6 lg:p-8 hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 h-full">
                  <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-300 mb-4">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section - Horizontal Scroll Timeline */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-4 text-slate-900 dark:text-white">
              How We Work
            </h2>
            <p className="text-center text-slate-600 dark:text-zinc-400 mb-12">
              Scroll to explore our process →
            </p>
          </motion.div>

          {/* Horizontal scroll container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100 dark:scrollbar-track-gray-800">
              {service.process?.map((step: ProcessStep, index: number) => (
                <motion.div
                  key={index}
                  className="group relative min-w-[320px] md:min-w-[380px] snap-center"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                >
                  {/* Connector line */}
                  {index < (service.process?.length || 0) - 1 && (
                    <div className="hidden md:block absolute top-6 -right-6 w-6 h-0.5 bg-linear-to-r from-orange-400 to-yellow-400 dark:from-orange-500 dark:to-yellow-500" />
                  )}

                  <div className="relative h-full bg-white dark:bg-white/5 rounded-2xl border-2 border-orange-100 dark:border-white/10 p-6 hover:border-orange-300 dark:hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl">
                    {/* Step number with gradient */}
                    <div className="mb-4 relative inline-flex items-center justify-center">
                      <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-400 rounded-full blur-lg opacity-50" />
                      <div className="relative w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-yellow-400 flex items-center justify-center text-white font-black text-lg shadow-lg border-2 border-white dark:border-gray-900">
                        {step.step}
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-t-2xl overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-orange-500 to-yellow-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      />
                    </div>

                    <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-orange-400/10 to-transparent dark:from-orange-400/20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gradient fade edges */}
            <div className="pointer-events-none absolute top-0 left-0 bottom-8 w-12 bg-linear-to-r from-white dark:from-gray-900/50 to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 bottom-8 w-12 bg-linear-to-l from-white dark:from-gray-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Industries Section - Animated Badges */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-orange-50 to-yellow-50 dark:from-gray-800/50 dark:to-slate-800/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-12 text-slate-900 dark:text-white">
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {service.industries?.map((industry: string, index: number) => {
              const IndustryIcon = getIndustryIcon(industry);

              return (
                <motion.div
                  key={index}
                  className="h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={INDUSTRY_HOVER}
                  style={{ willChange: "opacity, transform" }}
                >
                  <div className="relative p-6 lg:p-8 bg-white dark:bg-zinc-900/50 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg font-semibold text-center text-slate-900 dark:text-white hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 overflow-hidden h-[150px] flex flex-col items-center justify-center gap-3 group">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-orange-400/0 via-yellow-400/0 to-orange-400/0 group-hover:from-orange-400/10 group-hover:via-yellow-400/10 group-hover:to-orange-400/10 dark:group-hover:from-orange-400/20 dark:group-hover:via-yellow-400/20 dark:group-hover:to-orange-400/20 transition-all duration-300" />

                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <IndustryIcon className="w-6 h-6 text-orange-500 dark:text-orange-300" />
                      </div>

                      {/* Industry name */}
                      <span className="relative z-10 block group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 text-sm lg:text-base leading-tight">
                        {industry}
                      </span>
                    </div>

                    {/* Sparkle effect on hover */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <Sparkles className="w-4 h-4 text-orange-500 dark:text-yellow-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-linear-to-r from-orange-600 via-orange-500 to-yellow-500 dark:from-orange-700 dark:via-orange-600 dark:to-yellow-600 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl font-black mb-6">
                {service.whyChoose.title}
              </h2>
              <ul className="space-y-4">
                {service.whyChoose?.reasons?.map((reason: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-white/95"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  >
                    <span className="text-2xl leading-none">•</span>
                    <span className="text-lg">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-3xl" />
                {whyChooseImageUrl && (
                  <Image
                    src={whyChooseImageUrl}
                    alt={`Why Choose aiCloudHub - ${service.title}`}
                    width={500}
                    height={500}
                    className="relative rounded-2xl w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                )}
              </div>
            </motion.div>
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
              {service.finalCTA.title}
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              {service.finalCTA.description}
            </p>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black text-lg font-bold rounded-lg hover:opacity-90 transition shadow-xl shadow-orange-500/30"
            >
              <span>{service.finalCTA.buttonText}</span>
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
