// components/layout/HomePage/Categories.tsx
"use client";

import React, { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useTransform } from "motion/react";
import { TopCategories } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

const Categories = () => {
  const { actualTheme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"], // From when section enters viewport to when it reaches top
  });

  // Transform values for pop-up animation
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="courses"
      style={{ scale, opacity, y }}
      className={`relative py-24 overflow-hidden transition-colors duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] ${
        actualTheme === "dark"
          ? "bg-gradient-to-b from-zinc-950 to-zinc-900"
          : "bg-gradient-to-br from-orange-50 via-yellow-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 leading-snug">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`text-4xl md:text-5xl font-black font-heading mb-5 tracking-tight leading-[1.2] ${
              actualTheme === "dark"
                ? "bg-linear-to-r from-orange-400 via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,165,0,0.35)]"
                : "bg-linear-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent"
            }`}
          >
            Our Top Categories
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight leading-[1.3] ${
              actualTheme === "dark" ? "text-white/90" : "text-gray-900"
            }`}
          >
            Learn. Build. Grow.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Master the technologies shaping tomorrow through expert-guided,
            real-world training at AICloudHub.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TopCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              key={category.title}
              className="group cursor-pointer"
            >
              <Card
                className={`p-0 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,165,0,0.4)] 
hover:-translate-y-1 backdrop-blur-md border h-full flex flex-col ${
                  actualTheme === "dark"
                    ? "bg-[#111111]/70 border-white/10"
                    : "bg-white/80 border-gray-200"
                }`}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-t-lg w-full h-48">
                  <Image
                    src={category.image}
                    fill
                    alt={category.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content Section */}
                <CardContent className="flex flex-col grow justify-between p-6 text-center">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      className={`text-lg md:text-xl font-bold font-heading mb-3 group-hover:text-orange-400 transition-colors ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {category.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.3,
                      }}
                      className={`mb-6 leading-relaxed min-h-20 ${
                        actualTheme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {category.description}
                    </motion.p>
                  </div>

                  {/* Fixed Button Position */}
                  <div className="mt-auto">
                    <Link
                      href={`/courses?category=${encodeURIComponent(
                        category.title
                      )}`}
                    >
                      <Button
                        variant="outline"
                        className="w-full border border-orange-400/60 text-orange-700 
        hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-400 
        hover:text-black font-semibold transition-all duration-300 
        rounded-full shadow-[0_0_8px_rgba(255,165,0,0.4)]"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Categories;
