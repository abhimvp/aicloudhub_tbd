// app/blogs/page.tsx
"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { blogPosts, blogCategories, getBlogsByCategory } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar/Navbar";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function BlogsPage() {
  const { actualTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = getBlogsByCategory(selectedCategory).filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        actualTheme === "dark"
          ? "bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"
          : "bg-white"
      }`}
    >
      <Navbar />

      {/* Hero Section */}
      <section
        className={`relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${
          actualTheme === "dark"
            ? "bg-zinc-950"
            : "bg-gradient-to-br from-orange-50 via-yellow-50 to-white"
        }`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 ${
                actualTheme === "dark"
                  ? "bg-linear-to-r from-orange-400 via-yellow-200 to-white bg-clip-text text-transparent"
                  : "bg-linear-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent"
              }`}
            >
              Explore Our Blog
            </h1>
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Insights, tutorials, and thought leadership on AI, Cloud, DevOps,
              and Cybersecurity
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search articles, topics, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 rounded-2xl transition-all duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:border-orange-400/50 focus:bg-white/10"
                    : "bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-orange-500 shadow-sm"
                } focus:outline-none`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-64 shrink-0"
            >
              <div className="sticky top-24">
                <Card
                  className={`backdrop-blur-lg transition-colors duration-300 ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-gray-200 shadow-lg"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {blogCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                            selectedCategory === category
                              ? "bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold shadow-lg shadow-orange-500/20"
                              : actualTheme === "dark"
                              ? "text-gray-300 hover:bg-white/10 hover:text-white"
                              : "text-gray-600 hover:bg-orange-50 hover:text-gray-900"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    {/* Stats */}
                    <div
                      className={`mt-8 pt-6 transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "border-t border-white/10"
                          : "border-t border-gray-200"
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span
                            className={`text-sm transition-colors duration-300 ${
                              actualTheme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            Total Posts
                          </span>
                          <span
                            className={`font-semibold transition-colors duration-300 ${
                              actualTheme === "dark"
                                ? "text-white"
                                : "text-gray-900"
                            }`}
                          >
                            {blogPosts.length}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span
                            className={`text-sm transition-colors duration-300 ${
                              actualTheme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            Filtered
                          </span>
                          <span className="text-orange-400 font-semibold">
                            {filteredBlogs.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.aside>

            {/* Blog Grid */}
            <div className="flex-1">
              {filteredBlogs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20"
                >
                  <p
                    className={`text-xl transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    No articles found matching your search.
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredBlogs.map((blog, index) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={`/blogs/${blog.slug}`}>
                        <Card
                          className={`group backdrop-blur-lg overflow-hidden transition-all duration-300 h-full cursor-pointer hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10 ${
                            actualTheme === "dark"
                              ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-400/50"
                              : "bg-white border-gray-200 hover:bg-orange-50/50 hover:border-orange-400 shadow-lg"
                          }`}
                        >
                          {/* Image */}
                          <div className="relative h-56 overflow-hidden">
                            <Image
                              src={blog.cover}
                              alt={blog.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                {blog.category}
                              </span>
                            </div>

                            {/* Featured Badge */}
                            {blog.featured && (
                              <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                                  Featured
                                </span>
                              </div>
                            )}
                          </div>

                          <CardContent className="p-6">
                            {/* Title */}
                            <h3
                              className={`text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors line-clamp-2 ${
                                actualTheme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {blog.title}
                            </h3>

                            {/* Excerpt */}
                            <p
                              className={`mb-4 line-clamp-2 leading-relaxed transition-colors duration-300 ${
                                actualTheme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {blog.excerpt}
                            </p>

                            {/* Meta Info */}
                            <div
                              className={`flex items-center gap-4 text-sm mb-4 transition-colors duration-300 ${
                                actualTheme === "dark"
                                  ? "text-gray-500"
                                  : "text-gray-500"
                              }`}
                            >
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{blog.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readTime}</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {blog.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-2 py-1 text-xs rounded transition-colors duration-300 ${
                                    actualTheme === "dark"
                                      ? "bg-white/5 border border-white/10 text-gray-400"
                                      : "bg-orange-50 border border-orange-200 text-orange-600"
                                  }`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Read More Button */}
                            <Button
                              variant="outline"
                              className={`w-full font-semibold transition-all duration-300 ${
                                actualTheme === "dark"
                                  ? "border-orange-400/60 text-orange-400 hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-black group-hover:border-orange-400"
                                  : "border-orange-400 text-orange-500 hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-orange-500"
                              }`}
                            >
                              Read Article
                              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
