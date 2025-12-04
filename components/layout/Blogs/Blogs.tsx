// components/layout/Blogs/Blogs.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import type { BlogPost } from "@/lib/sanity/blogQueries";
import {
  getFeaturedBlogPosts,
  getBlogPosts,
} from "@/lib/sanity/blogQueries";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./Blogs.css";
import { useTheme } from "@/components/theme/ThemeProvider";

// Blog card component
const BlogCard = ({
  post,
  isActive,
  actualTheme,
  coverImageUrl,
}: {
  post: BlogPost;
  isActive: boolean;
  actualTheme: string;
  coverImageUrl: string;
}) => {
  return (
    <div
      className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${actualTheme === "dark"
        ? "bg-neutral-900 shadow-orange-500/10"
        : "bg-white shadow-orange-500/20 border border-orange-100"
        } ${isActive ? "shadow-2xl ring-1 ring-orange-500/50" : ""}`}
    >
      {coverImageUrl && (
        <div className="relative w-full h-[200px] md:h-[240px] overflow-hidden rounded-t-3xl">
          <Image
            src={coverImageUrl}
            alt={post.title}
            fill
            priority={isActive}
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
              {post.category?.name || "Uncategorized"}
            </span>
          </div>
        </div>
      )}
      <div
        className={`p-6 text-left flex flex-col justify-between h-[calc(100%-200px)] md:h-[calc(100%-240px)] ${actualTheme === "dark" ? "text-white" : "text-slate-900"
          }`}
      >
        <div>
          <h3
            className={`text-lg md:text-xl font-semibold mb-2 line-clamp-2 hover:text-orange-400 transition-colors`}
          >
            {post.title}
          </h3>
          <p
            className={`text-sm mb-3 line-clamp-2 ${actualTheme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}
          >
            {post.excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <p
            className={`text-xs ${actualTheme === "dark" ? "text-gray-500" : "text-slate-500"
              }`}
          >
            {post.date}
          </p>
          <span className="text-orange-500 text-xs font-semibold">
            {post.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const { actualTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [featuredBlogs, setFeaturedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        // First, try to get featured blogs
        const featured = await getFeaturedBlogPosts();

        // If no featured blogs, get the latest blogs instead (limit to 6)
        if (featured.length === 0) {
          const { posts } = await getBlogPosts("All", "", 1, 6);
          setFeaturedBlogs(posts);
        } else {
          setFeaturedBlogs(featured);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying || featuredBlogs.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex, featuredBlogs.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % featuredBlogs.length);
  }, [featuredBlogs.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
  }, [featuredBlogs.length]);

  const getCardProps = (index: number) => {
    const total = featuredBlogs.length;
    if (total === 0) return {
      x: "0%",
      scale: 1,
      zIndex: 10,
      opacity: 0,
      rotateY: 0,
      isCenter: false
    };

    // Calculate shortest distance in circular array
    let dist = (index - activeIndex + total) % total;
    if (dist > total / 2) dist -= total;

    // Determine position state
    const isCenter = dist === 0;
    const isLeft = dist === -1;
    const isRight = dist === 1;
    const isFarLeft = dist < -1;
    const isFarRight = dist > 1;

    // Mobile: Stacked cards
    // Desktop: 3D Carousel

    // We'll use a simplified logic for 3 visible items
    // If we have fewer than 3 items, we might need special handling, but let's assume 3+ for the 3D effect

    let x = "0%";
    let scale = 1;
    let zIndex = 10;
    let opacity = 1;
    let rotateY = 0;

    if (isCenter) {
      x = "0%";
      scale = 1;
      zIndex = 20;
      opacity = 1;
      rotateY = 0;
    } else if (isLeft) {
      x = "-60%"; // Shift left
      scale = 0.85;
      zIndex = 10;
      opacity = 0.6;
      rotateY = 15;
    } else if (isRight) {
      x = "60%"; // Shift right
      scale = 0.85;
      zIndex = 10;
      opacity = 0.6;
      rotateY = -15;
    } else {
      // Hidden items
      x = dist < 0 ? "-120%" : "120%";
      scale = 0.5;
      zIndex = 0;
      opacity = 0;
    }

    return {
      x,
      scale,
      zIndex,
      opacity,
      rotateY,
      isCenter
    };
  };

  return (
    <section
      id="blogs"
      className={`blogs-section flex flex-col items-center justify-center relative transition-colors duration-300 py-24 -mb-px overflow-hidden ${actualTheme === "dark"
        ? "bg-linear-to-br from-gray-900 via-slate-900 to-zinc-950"
        : "bg-linear-to-br from-yellow-50 via-orange-50 to-gray-100"
        }`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {actualTheme === "dark" && (
          <div className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        )}
        <div
          className={`absolute inset-0 ${actualTheme === "dark"
            ? "bg-linear-to-b from-gray-900/30 via-slate-900/30 to-zinc-950/30"
            : "bg-linear-to-b from-orange-50/30 via-yellow-50/30 to-white/30"
            }`}
        />
      </div>

      {/* Content */}
      <motion.h2
        className={`text-4xl md:text-6xl font-serif mb-4 relative z-10 ${actualTheme === "dark" ? "text-white" : "text-gray-900"
          }`}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        Featured Blogs
      </motion.h2>

      <motion.p
        className={`mb-8 relative z-10 ${actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Discover insights and best practices from industry experts
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-16 relative z-10"
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

      {/* 3D Carousel Container */}
      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 h-[450px] md:h-[500px] flex items-center justify-center perspective-1000">
        {loading ? (
          <div className="text-gray-500 dark:text-gray-400">Loading...</div>
        ) : featuredBlogs.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400">No blogs available</div>
        ) : (
          <div className="relative w-full h-full max-w-[340px] md:max-w-[400px] mx-auto flex items-center justify-center">
            <AnimatePresence initial={false} mode="popLayout">
              {featuredBlogs.map((post, index) => {
                const { x, scale, zIndex, opacity, rotateY, isCenter } = getCardProps(index);
                const coverImageUrl = post.cover?.asset ? urlFor(post.cover).url() : "";

                // Only render if visible (center, left, right) or animating out
                if (opacity === 0) return null;

                return (
                  <motion.div
                    key={post._id}
                    className="absolute top-0 left-0 w-full h-full"
                    initial={false}
                    animate={{
                      x,
                      scale,
                      zIndex,
                      opacity,
                      rotateY,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth "Apple-like" feel
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    drag={isCenter ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = offset.x;
                      if (swipe < -50) {
                        handleNext();
                      } else if (swipe > 50) {
                        handlePrev();
                      }
                    }}
                  >
                    <Link href={`/blogs/${post.slug.current}`} className={`block w-full h-full ${!isCenter ? 'pointer-events-none' : ''}`}>
                      <BlogCard
                        post={post}
                        isActive={isCenter}
                        actualTheme={actualTheme}
                        coverImageUrl={coverImageUrl}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Navigation Buttons */}
        {!loading && featuredBlogs.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 z-30 ${actualTheme === "dark"
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-black/5 hover:bg-black/10 text-slate-900"
                }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className={`absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 z-30 ${actualTheme === "dark"
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-black/5 hover:bg-black/10 text-slate-900"
                }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {!loading && featuredBlogs.length > 1 && (
        <div className="flex gap-2 mt-8 relative z-10">
          {featuredBlogs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                ? "w-8 bg-orange-500"
                : actualTheme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blogs;
