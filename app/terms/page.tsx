import Link from "next/link";
import * as motion from "motion/react-client";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { ChevronRight, FileText } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Terms & Conditions",
    description:
      "Terms and Conditions for aiCloudHub - Learn about our terms of service, intellectual property, and legal policies.",
  };
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950">
      {/* Hero Section */}
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
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 xl:py-28 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb Navigation */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 dark:text-white/70 mb-4 sm:mb-6 flex-wrap">
                <Link
                  href="/"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors whitespace-nowrap"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-slate-400 dark:text-white/50" />
                <span className="text-slate-900 dark:text-white font-medium break-words">
                  Terms & Conditions
                </span>
              </div>

              <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-orange-500/30 bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-orange-600 dark:text-orange-300" />
                <span className="whitespace-nowrap">Legal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 break-words text-slate-900 dark:text-white">
                Terms & Conditions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed">
                Please read these terms carefully before using our website,
                services, or training programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
            <p className="text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
              Welcome to{" "}
              <span className="font-semibold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                aiCloudHub
              </span>
              . By accessing or using our website, services, or training
              programs, you agree to comply with and be bound by the following
              Terms & Conditions. If you do not agree, please discontinue use.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                  1. Use of Services
                </h2>
                <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">
                      •
                    </span>
                    <span>
                      Our website and services are provided for lawful purposes
                      only.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">
                      •
                    </span>
                    <span>
                      You agree not to misuse, copy, or resell our content or
                      intellectual property.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                  2. Intellectual Property
                </h2>
                <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">
                      •
                    </span>
                    <span>
                      All content, including logos, text, graphics, and training
                      materials, are the property of aiCloudHub.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 dark:text-orange-400 mt-1">
                      •
                    </span>
                    <span>
                      You may not reproduce, distribute, or use our content
                      without written consent.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                  3. Service & Training Disclaimer
                </h2>
                <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                  While we provide corporate training and IT services with the
                  highest standards, we do not guarantee specific outcomes.
                  Success depends on individual effort and organizational
                  implementation.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                  4. Limitation of Liability
                </h2>
                <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                  aiCloudHub will not be liable for any indirect, incidental, or
                  consequential damages arising from use of our website,
                  services, or training.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                  5. Governing Law
                </h2>
                <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                  These Terms shall be governed by the laws of USA/Atlanta where
                  aiCloudHub is registered.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-orange-100 dark:border-white/10">
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 text-sm sm:text-base">
                If you have any questions about these Terms & Conditions, please
                contact us.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
              >
                Contact Us
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
