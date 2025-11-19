// app/courses/[slug]/page.tsx
"use client";

import React, { use, useState } from "react";
import * as motion from "motion/react-client";
import { getCourseBySlug, getRelatedCourses } from "@/lib/courseData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  Star,
  ArrowLeft,
  BookOpen,
  Award,
  CheckCircle,
  Play,
  Calendar,
  Mail,
} from "lucide-react";
import { notFound } from "next/navigation";
import { useTheme } from "@/components/theme/ThemeProvider";
import CourseInquiryForm from "@/components/layout/CourseInquiryForm";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = use(params);
  const { actualTheme } = useTheme();
  const course = getCourseBySlug(slug);
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(slug);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        actualTheme === "dark"
          ? "bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]"
          : "bg-white"
      }`}
    >
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <Link href="/courses">
          <Button
            variant="outline"
            className={`transition-colors duration-300 ${
              actualTheme === "dark"
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Courses
          </Button>
        </Link>
      </div>

      {/* Course Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full">
                  {course.category}
                </span>
                <span className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full">
                  {course.level}
                </span>
                {course.featured && (
                  <span className="px-4 py-2 bg-linear-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1
                className={`text-4xl md:text-5xl font-black mb-6 leading-tight transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {course.title}
              </h1>

              {/* Short Description */}
              <p
                className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {course.shortDescription}
              </p>

              {/* Meta Info */}
              <div
                className={`flex flex-wrap gap-6 mb-8 pb-8 border-b transition-colors duration-300 ${
                  actualTheme === "dark" ? "border-white/10" : "border-gray-200"
                }`}
              >
                <div
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.rating}
                  </span>
                  <span>rating</span>
                </div>
                <div
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.students.toLocaleString()}
                  </span>
                  <span>students</span>
                </div>
                <div
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Clock className="w-5 h-5" />
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.duration}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  <span
                    className={`font-semibold transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.modules}
                  </span>
                  <span>modules</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-start gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className={`text-sm mb-1 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Instructor
                  </p>
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.instructor.name}
                  </h3>
                  <p className="text-orange-400 text-sm mb-2">
                    {course.instructor.role}
                  </p>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <Card
                className={`backdrop-blur-lg overflow-hidden transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Corporate Training Info */}
                  <div className="mb-6 pb-6 border-b transition-colors duration-300">
                    <h3
                      className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Corporate Training Program
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      This course is designed for corporate teams. Get in touch
                      with us to discuss customized training solutions for your
                      organization.
                    </p>
                  </div>

                  {/* Inquiry Button */}
                  <Button
                    size="lg"
                    onClick={() => setIsInquiryFormOpen(true)}
                    className="w-full bg-linear-to-r from-orange-500 to-yellow-400 text-black font-bold hover:scale-105 transition-transform mb-6"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Inquire About This Course
                  </Button>

                  {/* Course Includes */}
                  <div
                    className={`space-y-3 mb-6 pb-6 border-b transition-colors duration-300 ${
                      actualTheme === "dark"
                        ? "border-white/10"
                        : "border-gray-200"
                    }`}
                  >
                    <h4
                      className={`font-semibold mb-3 transition-colors duration-300 ${
                        actualTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      This course includes:
                    </h4>
                    <div
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{course.duration} of content</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{course.modules} comprehensive modules</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Lifetime access</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Certificate of completion</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                        actualTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Hands-on projects</span>
                    </div>
                  </div>

                  {/* Release Date */}
                  <div
                    className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Released: {course.releaseDate}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className={`backdrop-blur-lg transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <CardContent className="p-8">
                  <h2
                    className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    About This Course
                  </h2>
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className={`backdrop-blur-lg transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <CardContent className="p-8">
                  <h2
                    className={`text-3xl font-bold mb-6 flex items-center gap-2 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <Award className="w-8 h-8 text-orange-400" />
                    Skills You'll Learn
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          actualTheme === "dark"
                            ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                            : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Course Syllabus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className={`backdrop-blur-lg transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <CardContent className="p-8">
                  <h2
                    className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Course Syllabus
                  </h2>
                  <div className="space-y-4">
                    {course.syllabus.map((module, index) => (
                      <div
                        key={index}
                        className={`rounded-lg p-6 transition-colors ${
                          actualTheme === "dark"
                            ? "bg-white/5 border border-white/10 hover:bg-white/10"
                            : "bg-white border border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <h3
                          className={`text-xl font-bold mb-3 flex items-center gap-2 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          <span className="w-8 h-8 rounded-full bg-orange-500 text-black flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          {module.module}
                        </h3>
                        <ul className="space-y-2 ml-10">
                          {module.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className={`flex items-start gap-2 transition-colors duration-300 ${
                                actualTheme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }`}
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className={`backdrop-blur-lg transition-colors duration-300 ${
                  actualTheme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <CardContent className="p-8">
                  <h2
                    className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
                      actualTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Requirements
                  </h2>
                  <ul className="space-y-3">
                    {course.requirements.map((req, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3 transition-colors duration-300 ${
                          actualTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-700"
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section
          className={`py-20 transition-colors duration-300 ${
            actualTheme === "dark" ? "bg-black/30" : "bg-gray-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`text-3xl md:text-4xl font-black mb-12 transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Related Courses
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedCourses.map((relatedCourse) => (
                  <Link
                    key={relatedCourse.id}
                    href={`/courses/${relatedCourse.slug}`}
                  >
                    <Card
                      className={`group backdrop-blur-lg overflow-hidden transition-all duration-300 h-full cursor-pointer hover:scale-[1.02] ${
                        actualTheme === "dark"
                          ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-orange-400/50"
                          : "bg-white border-gray-200 hover:shadow-xl hover:border-orange-400/50"
                      }`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedCourse.thumbnail}
                          alt={relatedCourse.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                            {relatedCourse.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3
                          className={`text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors line-clamp-2 ${
                            actualTheme === "dark"
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {relatedCourse.title}
                        </h3>
                        <p
                          className={`text-sm line-clamp-2 mb-4 transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {relatedCourse.shortDescription}
                        </p>
                        <div
                          className={`flex items-center gap-3 text-xs transition-colors duration-300 ${
                            actualTheme === "dark"
                              ? "text-gray-500"
                              : "text-gray-500"
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{relatedCourse.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{relatedCourse.rating}</span>
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

      {/* Inquiry Form Modal */}
      <CourseInquiryForm
        isOpen={isInquiryFormOpen}
        onClose={() => setIsInquiryFormOpen(false)}
        courseTitle={course.title}
      />
    </main>
  );
}
