// components/layout/Blogs/BlogPostContent.tsx
"use client";

import React from "react";
import * as motion from "motion/react-client";
import type { BlogPost } from "@/lib/sanity/blogQueries";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import "@/app/blogs/blog-post-content.css";
import { PortableTextRenderer } from "@/components/blocks/PortableTextRenderer";

interface BlogPostContentProps {
  blog: BlogPost & { coverImageUrl?: string; bodyHtml?: string };
  relatedBlogs: (BlogPost & { coverImageUrl?: string })[];
}

export default function BlogPostContent({
  blog,
  relatedBlogs,
}: BlogPostContentProps) {
  const { actualTheme } = useTheme();

  // Use pre-processed image URL from server
  const coverUrl = blog.coverImageUrl || "";

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${actualTheme === "dark"
        ? "bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"
        : "bg-white"
        }`}
    >
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        <Link href="/blogs">
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${actualTheme === "dark"
              ? "border-white/20 text-white hover:bg-white/10"
              : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Articles
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
              {blog.category?.name || "Uncategorized"}
            </span>
            {blog.featured && (
              <span className="ml-3 px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-colors duration-300 ${actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
          >
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p
            className={`text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-300 ${actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
          >
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div
            className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b transition-colors duration-300 ${actualTheme === "dark" ? "border-white/10" : "border-gray-200"
              }`}
          >
            {/* Date */}
            <div
              className={`flex items-center gap-2 transition-colors duration-300 ${actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>

            {/* Read Time */}
            <div
              className={`flex items-center gap-2 transition-colors duration-300 ${actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
            >
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Cover Image */}
          {coverUrl && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={coverUrl}
                alt={blog.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>
          )}



          {/* Content - Render Portable Text or Markdown HTML */}
          {blog.content ? (
            <PortableTextRenderer value={blog.content} />
          ) : blog.bodyHtml ? (
            <div
              className={`blog-markdown-content transition-colors duration-300 ${actualTheme === "dark"
                ? "text-gray-300"
                : "text-gray-800"
                }`}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
              dangerouslySetInnerHTML={{ __html: blog.bodyHtml }}
            />
          ) : null}

        </motion.div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section
          className={`py-20 transition-colors duration-300 ${actualTheme === "dark" ? "bg-black/30" : "bg-gray-50"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ willChange: "opacity, transform" }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`text-3xl md:text-4xl font-black mb-12 transition-colors duration-300 ${actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
              >
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => {
                  const relatedCoverUrl = relatedBlog.coverImageUrl || "";

                  return (
                    <Link
                      key={relatedBlog._id}
                      href={`/blogs/${relatedBlog.slug.current}`}
                    >
                      <Card
                        className={`group backdrop-blur-lg overflow-hidden transition-all duration-300 h-full cursor-pointer hover:scale-[1.02] ${actualTheme === "dark"
                          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-400/50"
                          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-orange-400"
                          }`}
                      >
                        {/* Image */}
                        {relatedCoverUrl && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={relatedCoverUrl}
                              alt={relatedBlog.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                {relatedBlog.category?.name || "Uncategorized"}
                              </span>
                            </div>
                          </div>
                        )}

                        <CardContent className="p-6">
                          <h3
                            className={`text-lg font-bold mb-2 transition-colors line-clamp-2 ${actualTheme === "dark"
                              ? "text-white group-hover:text-orange-400"
                              : "text-gray-900 group-hover:text-orange-600"
                              }`}
                          >
                            {relatedBlog.title}
                          </h3>
                          <p
                            className={`text-sm line-clamp-2 mb-4 transition-colors duration-300 ${actualTheme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                              }`}
                          >
                            {relatedBlog.excerpt}
                          </p>
                          <div
                            className={`flex items-center gap-3 text-xs transition-colors duration-300 ${actualTheme === "dark"
                              ? "text-gray-500"
                              : "text-gray-500"
                              }`}
                          >
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{relatedBlog.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{relatedBlog.readTime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
