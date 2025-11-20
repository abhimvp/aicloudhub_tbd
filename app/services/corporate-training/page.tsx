import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getBusinessVerticalBySlug,
  getAllBusinessVerticalSlugs,
} from "@/lib/businessVerticalsData";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import CollapsibleCategories from "@/components/layout/CorporateTraining/CollapsibleCategories";
import {
  Sparkles,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Users,
  Award,
} from "lucide-react";

// Animation configurations
const DELIVERY_HOVER = { scale: 1.05, rotate: 1 };
const PROCESS_HOVER = { scale: 1.05 };

export async function generateStaticParams() {
  return getAllBusinessVerticalSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata() {
  const vertical = getBusinessVerticalBySlug("corporate-training");

  if (!vertical) {
    return {
      title: "Corporate Training Not Found",
    };
  }

  return {
    title: `${vertical.title} — aicloudhub`,
    description: vertical.heroDescription,
  };
}

export default async function CorporateTrainingPage() {
  const vertical = getBusinessVerticalBySlug("corporate-training");

  if (!vertical) {
    notFound();
  }

  const Icon = vertical.Icon;

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950">
      {/* Hero Section with Floating Elements */}
      <section className="relative bg-linear-to-b from-orange-50 via-white to-amber-50 text-slate-900 dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 dark:text-white overflow-hidden">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-36 h-36 bg-cyan-500 rounded-full blur-3xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
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
                  href="/?skipLanding=true"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/50" />
                <Link
                  href="/?skipLanding=true#technology-services"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-white/50" />
                <span className="text-slate-900 dark:text-white font-medium">{vertical.title}</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                <Icon className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                {vertical.title}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                {vertical.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {vertical.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  {vertical.heroCTA.primary}
                </Link>
                <a
                  href="#categories"
                  className="inline-flex px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  {vertical.heroCTA.secondary}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-2xl" />
                <Image
                  src={vertical.heroImage}
                  alt={vertical.title}
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
      <section className="container mx-auto px-6 py-12 lg:py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-slate-600 dark:text-zinc-300 text-lg leading-relaxed"
        >
          {vertical.description.map((paragraph, index) => {
            // Highlight "aicloudhub" with orange-yellow gradient
            const parts = paragraph.split(/(aicloudhub)/i);
            return (
              <p key={index}>
                {parts.map((part, partIndex) =>
                  part.toLowerCase() === "aicloudhub" ? (
                    <span
                      key={partIndex}
                      className="font-semibold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"
                    >
                      {part}
                    </span>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </motion.div>
      </section>

      {/* Training Categories Section */}
      <section
        id="categories"
        className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Our Core Training Categories
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Comprehensive training programs across all major technology domains
            </p>
          </div>
        </motion.div>

        <CollapsibleCategories categories={vertical.categories} />
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-orange-50 to-yellow-50 dark:from-gray-800/50 dark:to-slate-800/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                {vertical.whyChoose.title}
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vertical.whyChoose.reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg p-6 hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-zinc-200 font-medium">
                    {reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery Models Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
              Training Delivery Models
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vertical.deliveryModels.map((model, index) => (
            <motion.div
              key={index}
              className="group relative bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg p-6 hover:shadow-xl hover:border-orange-300 dark:hover:border-orange-500/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.0 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={DELIVERY_HOVER}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-500/20 to-yellow-500/20 dark:from-orange-500/30 dark:to-yellow-500/30 border border-orange-300/50 dark:border-orange-400/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {model.title}
                </h4>
              </div>
              {model.description && (
                <p className="text-slate-600 dark:text-zinc-300 text-sm">
                  {model.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section - Horizontal Scroll Timeline */}
      <section className="py-16 lg:py-20 bg-white dark:bg-gray-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-center mb-4 text-slate-900 dark:text-white">
              How We Work
            </h2>
            <p className="text-center text-slate-600 dark:text-zinc-400 mb-12">
              Scroll to explore our training process →
            </p>
          </motion.div>

          {/* Horizontal scroll container */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100 dark:scrollbar-track-gray-800">
              {vertical.process.map((step, index) => (
                <motion.div
                  key={index}
                  className="group relative min-w-[320px] md:min-w-[380px] snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  {/* Connector line */}
                  {index < vertical.process.length - 1 && (
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
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1.7 + index * 0.2 }}
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
              {vertical.finalCTA.title}
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              {vertical.finalCTA.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black text-lg font-bold rounded-lg hover:opacity-90 transition shadow-xl shadow-orange-500/30"
            >
              {vertical.finalCTA.buttonText}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

