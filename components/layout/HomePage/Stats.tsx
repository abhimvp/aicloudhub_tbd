"use client";

import React from "react";
import * as motion from "motion/react-client";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Briefcase, CheckCircle, Globe, Users } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "10+", icon: Briefcase },
  { label: "Projects Delivered", value: "500+", icon: CheckCircle },
  { label: "Global Clients", value: "50+", icon: Globe },
  { label: "Expert Consultants", value: "100+", icon: Users },
];

const Stats = () => {
  const { actualTheme } = useTheme();

  return (
    <section
      className={`relative py-20 border-y overflow-hidden ${
        actualTheme === "dark"
          ? "border-white/5 bg-zinc-900/30"
          : "bg-orange-50/30 border-orange-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-500/30"
                    : "bg-white border-orange-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/10"
                }`}
              >
                <div
                  className={`mb-4 inline-flex p-3 rounded-xl ${
                    actualTheme === "dark"
                      ? "bg-orange-500/10 text-orange-400"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div
                  className={`text-4xl md:text-5xl font-black mb-2 tracking-tight ${
                    actualTheme === "dark"
                      ? "bg-linear-to-r from-orange-400 to-yellow-200 bg-clip-text text-transparent"
                      : "text-slate-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm md:text-base font-medium ${
                    actualTheme === "dark" ? "text-zinc-400" : "text-slate-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
