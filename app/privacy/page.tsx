import Link from "next/link";
import * as motion from "motion/react-client";
import { ChevronRight, Shield } from "lucide-react";

export async function generateMetadata() {
  return {
    title: "Privacy Policy | AI Cloud Hub",
    description:
      "Privacy Policy for aiCloudHub - Learn about how we collect, use, and protect your personal information.",
  };
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950">
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-orange-50 via-white to-amber-50 text-slate-900 dark:from-gray-950 dark:via-slate-950 dark:to-zinc-950 dark:text-white overflow-hidden">
        {/* Animated floating shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
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
            className="absolute top-40 right-20 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"
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
                  Privacy Policy
                </span>
              </div>

              <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-blue-500/30 bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-200" />
                <span className="whitespace-nowrap">Privacy & Security</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 break-words text-slate-900 dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-gray-300 leading-relaxed">
                At aiCloudHub, we respect your privacy and are committed to
                protecting your personal information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10 shadow-lg p-4 sm:p-6 md:p-8 lg:p-12 space-y-8 sm:space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                1. Information We Collect
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>
                    Personal details (name, email, phone) when you register for
                    services or trainings.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>Website usage data (via cookies, analytics).</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                2. How We Use Your Information
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>To provide services and training programs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>
                    To send updates, newsletters, and relevant offers (with your
                    consent).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>To improve our website and services.</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                3. Sharing of Data
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>We do not sell or rent personal data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>
                    Data may be shared with trusted partners (e.g., payment
                    providers, cloud hosting) only for service delivery.
                  </span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white break-words">
                4. Cookies
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>
                    Our website uses cookies to enhance user experience and
                    track performance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 dark:text-orange-400 mt-1">
                    •
                  </span>
                  <span>
                    You may disable cookies in your browser, though some
                    features may not work properly.
                  </span>
                </li>
              </ul>
            </div>

            {/* Refund & Cancellation Policy Section */}
            <div className="pt-6 sm:pt-8 border-t border-orange-100 dark:border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white break-words">
                Refund & Cancellation Policy
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                We strive to provide the best training and IT services. If for
                any reason you are not satisfied, our refund policy is as
                follows:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    Corporate Trainings
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-zinc-300 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 dark:text-orange-400 mt-1">
                        •
                      </span>
                      <span>
                        Cancellations made at least 14 days before the start
                        date are eligible for a full refund.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 dark:text-orange-400 mt-1">
                        •
                      </span>
                      <span>
                        Cancellations within 7 days may be eligible for a
                        partial refund (50%).
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-500 dark:text-orange-400 mt-1">
                        •
                      </span>
                      <span>
                        No refunds will be issued once training has commenced.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                    IT Services
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                    For IT services, refund eligibility will be reviewed case by
                    case, based on contract agreements.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer Section */}
            <div className="pt-6 sm:pt-8 border-t border-orange-100 dark:border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white break-words">
                Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed">
                The information, training programs, and services provided by
                aiCloudHub are for educational and professional development
                purposes only. While we strive for accuracy and quality,
                aiCloudHub makes no guarantees regarding outcomes or performance
                improvements.
              </p>
            </div>

            {/* Contact Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-orange-100 dark:border-white/10">
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 text-sm sm:text-base">
                If you have any questions about this Privacy Policy, please
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
    </div>
  );
}
