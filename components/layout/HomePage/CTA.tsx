"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import * as motion from "motion/react-client";

const CTA = () => {
  const { actualTheme } = useTheme();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className={`absolute inset-0 ${
        actualTheme === 'dark' 
          ? 'bg-linear-to-br from-orange-900/20 via-zinc-900 to-zinc-950' 
          : 'bg-linear-to-br from-orange-100 via-white to-yellow-50'
      }`} />
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-black mb-6 ${
            actualTheme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Ready to Accelerate Your <span className="text-orange-500">Digital Journey?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
            actualTheme === 'dark' ? 'text-zinc-300' : 'text-slate-600'
          }`}
        >
          Join hundreds of forward-thinking companies transforming their future with AI Cloud Hub.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 h-12 text-lg shadow-lg shadow-orange-500/25 transition-all hover:scale-105">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/services/it-services">
            <Button size="lg" variant="outline" className={`rounded-full px-8 h-12 text-lg transition-all hover:scale-105 ${
              actualTheme === 'dark' 
                ? 'border-zinc-700 text-white hover:bg-zinc-800' 
                : 'border-slate-300 text-slate-900 hover:bg-slate-50'
            }`}>
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
