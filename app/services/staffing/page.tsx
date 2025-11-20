import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Users, ChevronRight, CheckCircle2 } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "IT Staffing — aicloudhub",
    description: "Connect with Top-Tier Tech Talent - Find the perfect talent to accelerate your digital transformation",
  };
}

export default function ITStaffingPage() {
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

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 relative z-10">
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
                <span className="text-slate-900 dark:text-white font-medium">IT Staffing</span>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
                <Users className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                IT Staffing
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Connect with Top-Tier Tech Talent
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Find the perfect talent to accelerate your digital transformation. 
                Our IT staffing solutions connect you with skilled professionals who 
                drive innovation and deliver results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
                >
                  Get Started
                </Link>
                <a
                  href="#overview"
                  className="inline-flex px-8 py-4 border-2 border-slate-900/20 text-slate-900 dark:border-white/20 dark:text-white font-semibold rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/10 transition"
                >
                  Learn More
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
                  src="/HeroSectionITStaffing.png"
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

      {/* Coming Soon / Overview Section */}
      <section
        id="overview"
        className="container mx-auto px-6 py-16 lg:py-24 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/20 border border-orange-300 dark:border-orange-500/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-6">
            <span>🚧</span>
            <span>Page Under Development</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 dark:text-white">
            IT Staffing Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed mb-8">
            We're building a comprehensive page for our IT Staffing services. 
            This page will showcase our talent acquisition solutions, recruitment 
            process, and how we help businesses find the right tech professionals.
          </p>
          <p className="text-base text-slate-500 dark:text-zinc-400 leading-relaxed">
            In the meantime, please contact us to learn more about our IT staffing 
            solutions and how we can help you find the perfect talent for your team.
          </p>
        </motion.div>
      </section>

      {/* Placeholder Features Section */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-orange-50 to-yellow-50 dark:from-gray-800/50 dark:to-slate-800/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black mb-4 text-slate-900 dark:text-white">
                What We Offer
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Comprehensive IT staffing solutions (details coming soon)
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Talent Acquisition",
              "Technical Recruiting",
              "Contract Staffing",
              "Permanent Placement",
              "Skill Assessment",
              "Team Augmentation",
            ].map((feature, index) => (
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
                    {feature}
                  </p>
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
              Ready to Find Your Next Tech Talent?
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our IT staffing solutions 
              and how we can help you build your dream team.
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

