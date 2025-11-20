"use client";

import React from "react";
import * as motion from "motion/react-client";
import { useTheme } from "@/components/theme/ThemeProvider";

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Projects Delivered", value: "500+" },
  { label: "Global Clients", value: "50+" },
  { label: "Expert Consultants", value: "100+" },
];

const Stats = () => {
  const { actualTheme } = useTheme();

  return (
    <section className={`py-16 border-y ${
      actualTheme === 'dark' 
        ? 'bg-zinc-900/30 border-white/5' 
        : 'bg-orange-50/30 border-orange-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-black mb-2 ${
                actualTheme === 'dark' 
                  ? 'bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent' 
                  : 'text-orange-600'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm md:text-base font-medium ${
                actualTheme === 'dark' ? 'text-zinc-400' : 'text-slate-600'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
