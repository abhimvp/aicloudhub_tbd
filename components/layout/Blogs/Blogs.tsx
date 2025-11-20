// components/layout/Blogs/Blogs.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import * as motion from "motion/react-client";
import { getFeaturedBlogs } from "@/lib/blogData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import "./Blogs.css";
import { useTheme } from "@/components/theme/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const { actualTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  const featuredBlogs = getFeaturedBlogs();

  // Swiper GSAP Animation
  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const animateSlides = () => {
      swiper.slides.forEach((slide: HTMLElement, i: number) => {
        if (i === swiper.activeIndex) {
          gsap.to(slide, {
            scale: 1,
            opacity: 1,
            y: 0,
            z: 0,
            duration: 0.4, // <-- FASTER
            ease: "power3.out",
          });
        } else {
          gsap.to(slide, {
            scale: 0.9,
            opacity: 0.5,
            y: 30,
            z: -40,
            duration: 0.35, // <-- FASTER
            ease: "power2.out",
          });
        }
      });
    };

    animateSlides();
    swiper.on("slideChangeTransitionStart", animateSlides);

    return () => swiper.off("slideChangeTransitionStart", animateSlides);
  }, []);

  // Background Parallax Effect - Disabled to prevent cut-off issues
  // useEffect(() => {
  //   if (!sectionRef.current || !bgRef.current) return;

  //   gsap.to(bgRef.current, {
  //     yPercent: -20, // moves upward as user scrolls
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top bottom", // when section enters viewport
  //       end: "bottom top", // until it leaves
  //       scrub: 1.5, // smooth follow
  //     },
  //   });
  // }, []);

  return (
    <section
      id="blogs"
      ref={sectionRef}
      className={`blogs-section flex flex-col items-center justify-center relative transition-colors duration-300 py-24 -mb-px ${
        actualTheme === "dark" ? "bg-linear-to-br from-gray-900 via-slate-900 to-zinc-950" : "bg-gradient-to-br from-yellow-50 via-orange-50 to-gray-100"
      }`}
    >
      {/* Background container with overflow-hidden for glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient overlay for dark mode */}
        {actualTheme === "dark" && (
          <div className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>
        )}
        {/* Static Background Overlay - Parallax removed to prevent cut-off */}
        <div
          ref={bgRef}
          className={`absolute inset-0 ${
            actualTheme === "dark" 
              ? "bg-linear-to-b from-gray-900/30 via-slate-900/30 to-zinc-950/30" 
              : "bg-linear-to-b from-orange-50/30 via-yellow-50/30 to-white/30"
          }`}
        />
      </div>

      {/* Content */}
      <motion.h2
        className={`text-4xl md:text-6xl font-serif mb-4 relative z-10 ${
          actualTheme === "dark" ? "text-white" : "text-gray-900"
        }`}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Featured Blogs
      </motion.h2>

      <motion.p
        className={`mb-8 relative z-10 ${
          actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Discover insights and best practices from industry experts
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-12 relative z-10"
      >
        <Link href="/blogs">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-400/60 text-orange-400 hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-black font-semibold transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </motion.div>

      {/* Swiper */}
      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <Swiper
          ref={swiperRef}
          grabCursor
          centeredSlides
          // --- THIS IS THE FIX ---
          // We let breakpoints control all the settings.
          // On desktop (1024px) we set slidesPerView to 3.
          // Your GSAP animation will now correctly
          // scale the center (active) slide to 1
          // and the two side slides to 0.9.
          breakpoints={{
            // Mobile: Show main slide + a peek of the next
            0: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            // Tablet: Show main slide + two peeking slides
            768: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            // Desktop: Show 3 slides
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          // --- END OF FIX ---

          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="blogSwiper"
        >
        {featuredBlogs.map((post) => (
          <SwiperSlide key={post.id}>
            <Link href={`/blogs/${post.slug}`}>
              <div className={`relative w-full rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-700 hover:shadow-2xl ${
                actualTheme === "dark" 
                  ? "bg-neutral-900 hover:shadow-orange-500/20" 
                  : "bg-white hover:shadow-orange-500/30 border border-orange-100"
              }`}>
                <div className="relative w-full h-[260px] overflow-hidden rounded-t-3xl">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className={`p-6 text-left ${
                  actualTheme === "dark" ? "text-white" : "text-slate-900"
                }`}>
                  <h3 className={`text-xl font-semibold mb-2 line-clamp-2 hover:text-orange-400 transition-colors`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm mb-3 line-clamp-2 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-slate-600"
                  }`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs ${
                      actualTheme === "dark" ? "text-gray-500" : "text-slate-500"
                    }`}>{post.date}</p>
                    <span className="text-orange-500 text-xs font-semibold">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
