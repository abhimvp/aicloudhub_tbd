import Link from "next/link";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, CloudOff } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950 overflow-hidden relative">
            {/* Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Icon */}
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full" />
                        <CloudOff className="w-24 h-24 text-orange-500 relative z-10 mx-auto" />
                    </div>

                    {/* Text */}
                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                        Lost in the Cloud?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
                        The page you are looking for seems to have drifted away. It might have been removed, renamed, or is temporarily unavailable.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button size="lg" className="rounded-full bg-orange-600 hover:bg-orange-700 text-white px-8 h-12 shadow-lg shadow-orange-500/20">
                                <Home className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/contact-us">
                            <Button size="lg" variant="outline" className="rounded-full border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 h-12 px-8">
                                Contact Support
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 max-w-2xl mx-auto">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-6 uppercase tracking-wider font-semibold">
                            Popular Destinations
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
                            <Link href="/services" className="text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                                Our Services
                            </Link>
                            <Link href="/careers" className="text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                                Careers
                            </Link>
                            <Link href="/blogs" className="text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                                Latest Insights
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
