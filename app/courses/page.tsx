// app/courses/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import * as motion from "motion/react-client";
import {
  courses,
  courseCategories,
  courseLevels,
  getCoursesByFilters,
  sortCourses,
} from "@/lib/courseData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Users,
  Clock,
  BarChart,
  Star,
  Filter,
  ChevronDown,
  Mail,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar/Navbar";
import { useTheme } from "@/components/theme/ThemeProvider";
import CourseInquiryForm from "@/components/layout/CourseInquiryForm";

export default function CoursesPage() {
  const { actualTheme } = useTheme();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  // Update selected category when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredCourses = getCoursesByFilters(
    selectedCategory,
    selectedLevel
  ).filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      course.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const sortedCourses = sortCourses(filteredCourses, sortBy);

  const handleInquiry = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsInquiryFormOpen(true);
  };

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
            : "bg-linear-to-br from-orange-50 via-yellow-50 to-white"
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
              Courses
            </h1>
            <p
              className={`text-xl md:text-2xl max-w-3xl mx-auto transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Master the technologies shaping tomorrow through expert-guided
              training
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
                placeholder="Search courses by name, skills, or topics..."
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
            {/* Sidebar - Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-64 shrink-0"
            >
              <div className="sticky top-24 space-y-6">
                {/* Category Filter */}
                <Card
                  className={`backdrop-blur-lg transition-colors duration-300 ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-gray-200 shadow-lg"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-xl font-bold mb-4 flex items-center gap-2 transition-colors duration-300 ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Filter className="w-5 h-5" />
                      Category
                    </h3>
                    <div className="space-y-2">
                      {courseCategories.map((category) => (
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
                  </CardContent>
                </Card>

                {/* Level Filter */}
                <Card
                  className={`backdrop-blur-lg transition-colors duration-300 ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-gray-200 shadow-lg"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3
                      className={`text-xl font-bold mb-4 flex items-center gap-2 transition-colors duration-300 ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <BarChart className="w-5 h-5" />
                      Level
                    </h3>
                    <div className="space-y-2">
                      {courseLevels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSelectedLevel(level)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                            selectedLevel === level
                              ? "bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold shadow-lg shadow-orange-500/20"
                              : actualTheme === "dark"
                              ? "text-gray-300 hover:bg-white/10 hover:text-white"
                              : "text-gray-600 hover:bg-orange-50 hover:text-gray-900"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card
                  className={`backdrop-blur-lg transition-colors duration-300 ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10"
                      : "bg-white border-gray-200 shadow-lg"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
                        >
                          Total Courses
                        </span>
                        <span
                          className={`font-semibold transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {courses.length}
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
                          Showing
                        </span>
                        <span className="text-orange-400 font-semibold">
                          {sortedCourses.length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.aside>

            {/* Course Grid */}
            <div className="flex-1">
              {/* Sort Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex justify-end"
              >
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`appearance-none rounded-lg px-4 py-3 pr-10 cursor-pointer transition-colors duration-300 ${
                      actualTheme === "dark"
                        ? "bg-white/5 border border-white/10 text-white focus:border-orange-400/50"
                        : "bg-white border border-gray-200 text-gray-900 focus:border-orange-500 shadow-sm"
                    } focus:outline-none`}
                  >
                    <option value="newest">Release Date (Newest First)</option>
                    <option value="oldest">Release Date (Oldest First)</option>
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                </div>
              </motion.div>

              {sortedCourses.length === 0 ? (
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
                    No courses found matching your criteria.
                  </p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        className={`group backdrop-blur-lg overflow-hidden transition-all duration-300 h-full hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10 ${
                          actualTheme === "dark"
                            ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-400/50"
                            : "bg-white border-gray-200 hover:bg-orange-50/50 hover:border-orange-400 shadow-lg"
                        }`}
                      >
                        <Link href={`/courses/${course.slug}`}>
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden cursor-pointer">
                            <Image
                              src={course.thumbnail}
                              alt={course.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Category & Level Badges */}
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                                {course.category}
                              </span>
                              <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                                {course.level}
                              </span>
                            </div>

                            {/* Featured Badge */}
                            {course.featured && (
                              <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                                  Featured
                                </span>
                              </div>
                            )}
                          </div>
                        </Link>

                        <CardContent className="p-6">
                          <Link href={`/courses/${course.slug}`}>
                            {/* Title */}
                            <h3
                              className={`text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors line-clamp-2 cursor-pointer ${
                                actualTheme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {course.title}
                            </h3>

                            {/* Description */}
                            <p
                              className={`mb-4 line-clamp-2 leading-relaxed text-sm transition-colors duration-300 ${
                                actualTheme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {course.shortDescription}
                            </p>

                            {/* Meta Info */}
                            <div
                              className={`flex flex-wrap items-center gap-4 text-sm mb-4 transition-colors duration-300 ${
                                actualTheme === "dark"
                                  ? "text-gray-500"
                                  : "text-gray-500"
                              }`}
                            >
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{course.students.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span>{course.rating}</span>
                              </div>
                            </div>

                            {/* Instructor */}
                            <div
                              className={`flex items-center gap-2 mb-4 pb-4 transition-colors duration-300 ${
                                actualTheme === "dark"
                                  ? "border-b border-white/10"
                                  : "border-b border-gray-200"
                              }`}
                            >
                              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                  src={course.instructor.avatar}
                                  alt={course.instructor.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="text-xs">
                                <p
                                  className={`transition-colors duration-300 ${
                                    actualTheme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Instructor
                                </p>
                                <p
                                  className={`font-semibold transition-colors duration-300 ${
                                    actualTheme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {course.instructor.name}
                                </p>
                              </div>
                            </div>
                          </Link>

                          {/* Action Buttons */}
                          <div className="flex gap-3 mt-4">
                            <Link href={`/courses/${course.slug}`} className="flex-1">
                              <Button
                                variant="outline"
                                className={`w-full font-semibold transition-all duration-300 ${
                                  actualTheme === "dark"
                                    ? "border-orange-400/60 text-orange-400 hover:bg-linear-to-r hover:from-orange-500 hover:to-yellow-400 hover:text-black group-hover:border-orange-400"
                                    : "border-orange-400 text-orange-500 hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-orange-500"
                                }`}
                              >
                                View Details
                              </Button>
                            </Link>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleInquiry(course.title);
                              }}
                              className="flex-1 bg-linear-to-r from-orange-500 to-yellow-400 text-black font-semibold hover:scale-105 transition-transform"
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Inquire
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Modal */}
      <CourseInquiryForm
        isOpen={isInquiryFormOpen}
        onClose={() => setIsInquiryFormOpen(false)}
        courseTitle={selectedCourse}
      />
    </main>
  );
}
