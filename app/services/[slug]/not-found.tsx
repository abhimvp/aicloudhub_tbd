import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/40 to-yellow-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl" />
            <SearchX className="relative h-24 w-24 text-orange-500 dark:text-orange-400" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Service Not Found
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-zinc-300 mb-8">
          We couldn&apos;t find the service you&apos;re looking for. It may have been removed or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition shadow-lg shadow-orange-500/30"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-orange-500 dark:border-orange-400 text-orange-600 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-500/10 transition"
          >
            View All Services
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-white/5 rounded-2xl border border-orange-100 dark:border-white/10">
          <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
            Available Services:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/services/ai-ml"
              className="px-4 py-2 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-500/20 transition"
            >
              AI & Machine Learning
            </Link>
            <Link
              href="/services/cloud"
              className="px-4 py-2 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-500/20 transition"
            >
              Cloud Services
            </Link>
            <Link
              href="/services/applications"
              className="px-4 py-2 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-500/20 transition"
            >
              Application Services
            </Link>
            <Link
              href="/services/data-analytics"
              className="px-4 py-2 bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 rounded-lg text-sm font-medium hover:bg-orange-200 dark:hover:bg-orange-500/20 transition"
            >
              Data & Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
