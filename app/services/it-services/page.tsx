import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Code2, ChevronRight, CheckCircle2 } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "IT Services — aiCloudHub",
    description:
      "Innovative Technology Solutions for Modern Business - Transform your business with cutting-edge cloud, AI, and digital solutions",
  };
}

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 transition-colors duration-300">
      {/* Hero Section with Floating Elements */}
      <section className="relative bg-linear-to-br from-orange-50 via-white to-yellow-50 dark:bg-linear-to-r dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Tech Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]"
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

              <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] mb-6 backdrop-blur-sm">
                <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-200" />
                IT Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
                Innovative Technology Solutions for Modern Business
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge cloud, AI, and digital
                solutions. Our comprehensive IT services help you stay ahead in
                the digital landscape and drive sustainable growth.
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
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl" />
                <Image
                  src="/HeroSectionITServices.png"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <span>Page Under Development</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 dark:text-white">
            IT Services & Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-zinc-300 leading-relaxed mb-8">
            We&apos;re building a comprehensive page for our IT Services
            offerings. This page will showcase our technology solutions, service
            capabilities, and how we help businesses transform their digital
            infrastructure.
          </p>
          <p className="text-base text-slate-500 dark:text-zinc-400 leading-relaxed">
            In the meantime, please contact us to learn more about our IT
            services and how we can help accelerate your digital transformation
            journey.
          </p>
        </motion.div>
      </section>

      {/* Placeholder Features Section */}
      <section className="py-16 lg:py-20 bg-linear-to-br from-orange-50 to-yellow-50 dark:bg-linear-to-b dark:from-zinc-900 dark:to-zinc-950">
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
                Comprehensive IT services and solutions (details coming soon)
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cloud Solutions",
              "AI & Machine Learning",
              "Application Development",
              "Digital Transformation",
              "DevOps & Automation",
              "Cybersecurity",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-zinc-900/50 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg p-6 hover:shadow-xl hover:border-orange-300 dark:hover:bg-zinc-800/80 dark:hover:border-orange-500/30 transition-all duration-300"
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our IT services and how we
              can help you achieve your digital transformation goals.
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
