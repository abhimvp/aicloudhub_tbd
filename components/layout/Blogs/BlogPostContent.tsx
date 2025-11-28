// components/layout/Blogs/BlogPostContent.tsx
"use client";

import React from "react";
import * as motion from "motion/react-client";
import type { BlogPost } from "@/lib/blogData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Tag, Share2, User } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import "@/app/blogs/blog-content.css";

interface BlogPostContentProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogPostContent({
  blog,
  relatedBlogs,
}: BlogPostContentProps) {
  const { actualTheme } = useTheme();

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        actualTheme === "dark"
          ? "bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"
          : "bg-white"
      }`}
    >
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/blogs">
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${
              actualTheme === "dark"
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
              {blog.category}
            </span>
            {blog.featured && (
              <span className="ml-3 px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-colors duration-300 ${
              actualTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p
            className={`text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-300 ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div
            className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b transition-colors duration-300 ${
              actualTheme === "dark" ? "border-white/10" : "border-gray-200"
            }`}
          >
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p
                  className={`font-semibold transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {blog.author.name}
                </p>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {blog.author.role}
                </p>
              </div>
            </div>

            {/* Date */}
            <div
              className={`flex items-center gap-2 transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{blog.date}</span>
            </div>

            {/* Read Time */}
            <div
              className={`flex items-center gap-2 transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>

            {/* Share Button */}
            <Button
              variant="outline"
              size="sm"
              className={`ml-auto transition-colors duration-300 ${
                actualTheme === "dark"
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Share2 className="mr-2 w-4 h-4" />
              Share
            </Button>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={blog.cover}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Tag
              className={`w-4 h-4 transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            />
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-sm rounded-lg transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                    : "bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div
            className={`blog-content prose prose-lg max-w-none transition-colors duration-300
              prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:leading-relaxed prose-p:mb-6
              prose-a:no-underline
              prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-li:my-2 prose-li:leading-relaxed
              prose-code:px-2 prose-code:py-1 prose-code:rounded
              ${
                actualTheme === "dark"
                  ? "prose-invert prose-headings:text-white hover:prose-a:text-orange-300 prose-code:text-orange-400 prose-code:bg-white/5 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
                  : "prose-headings:text-gray-900 hover:prose-a:text-orange-600 prose-code:text-orange-600 prose-code:bg-orange-50 prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
              }`}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Bio */}
          <Card
            className={`backdrop-blur-lg mt-16 transition-colors duration-300 ${
              actualTheme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    About {blog.author.name}
                  </h3>
                  <p
                    className={`mb-4 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {blog.author.role} at AI Cloud Hub. Passionate about sharing
                    knowledge and helping others grow in their tech careers.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`transition-colors duration-300 ${
                      actualTheme === "dark"
                        ? "border-orange-400/60 text-orange-400 hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-black"
                        : "border-orange-500 text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    <User className="mr-2 w-4 h-4" />
                    View Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </article>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section
          className={`py-20 transition-colors duration-300 ${
            actualTheme === "dark" ? "bg-black/30" : "bg-gray-50"
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
                className={`text-3xl md:text-4xl font-black mb-12 transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blogs/${relatedBlog.slug}`}
                  >
                    <Card
                      className={`group backdrop-blur-lg overflow-hidden transition-all duration-300 h-full cursor-pointer hover:scale-[1.02] ${
                        actualTheme === "dark"
                          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-400/50"
                          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-orange-400"
                      }`}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedBlog.cover}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                            {relatedBlog.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3
                          className={`text-lg font-bold mb-2 transition-colors line-clamp-2 ${
                            actualTheme === "dark"
                              ? "text-white group-hover:text-orange-400"
                              : "text-gray-900 group-hover:text-orange-600"
                          }`}
                        >
                          {relatedBlog.title}
                        </h3>
                        <p
                          className={`text-sm line-clamp-2 mb-4 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {relatedBlog.excerpt}
                        </p>
                        <div
                          className={`flex items-center gap-3 text-xs transition-colors duration-300 ${
                            actualTheme === "dark"
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
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity, transform" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl md:text-4xl font-black mb-6 transition-colors duration-300 ${
                actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Level Up Your Skills?
            </h2>
            <p
              className={`text-xl mb-8 transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Join thousands of learners mastering AI, Cloud, DevOps, and
              Cybersecurity
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#courses">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold hover:scale-105 transition-transform"
                >
                  Explore Courses
                </Button>
              </Link>
              <Link href="/blogs">
                <Button
                  size="lg"
                  variant="outline"
                  className={`transition-colors duration-300 ${
                    actualTheme === "dark"
                      ? "border-white/20 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  Read More Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

