// components/layout/Careers/JobDetailContent.tsx
"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import type { JobPosting } from "@/lib/sanity/jobQueries";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import JobApplicationForm from "./JobApplicationForm";
import ScrollToTop from "@/components/layout/ScrollToTop";

interface JobDetailContentProps {
  job: JobPosting & { descriptionHtml?: string };
}

export default function JobDetailContent({ job }: JobDetailContentProps) {
  const { actualTheme } = useTheme();
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  return (
    <>
      <main
        className={`min-h-screen transition-colors duration-300 ${
          actualTheme === "dark"
            ? "bg-linear-to-b from-gray-950 via-slate-950 to-zinc-950"
            : "bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50"
        }`}
      >
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
          <Link href="/careers">
            <Button
              variant="outline"
              className={`transition-colors duration-300 ${
                actualTheme === "dark"
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to All Jobs
            </Button>
          </Link>
        </div>

        {/* Job Detail Section */}
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-colors duration-300 ${
                actualTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {job.title}
            </h1>

            {/* Snippet */}
            <p
              className={`text-xl md:text-2xl mb-8 leading-relaxed transition-colors duration-300 ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {job.snippet}
            </p>

            {/* Meta Info */}
            <div
              className={`flex flex-wrap items-center gap-6 mb-8 pb-8 border-b transition-colors duration-300 ${
                actualTheme === "dark" ? "border-white/10" : "border-gray-200"
              }`}
            >
              {/* Published date */}
              {job.publishedAt && (
                <div
                  className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span className="font-medium">
                    Posted on{" "}
                    {new Date(job.publishedAt).toISOString().slice(0, 10)}
                  </span>
                </div>
              )}

              {/* Locations */}
              {job.locations && job.locations.length > 0 && (
                <div
                  className={`flex items-center gap-2 transition-colors duration-300 ${
                    actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">
                    {job.locations
                      .map((loc) => loc.name)
                      .filter(Boolean)
                      .join(" • ")}
                  </span>
                </div>
              )}

              {/* Job Type */}
              <div
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Briefcase className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{job.jobType}</span>
              </div>

              {/* Experience Level */}
              <div
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{job.experienceLevel}</span>
              </div>
            </div>

            {/* Job Description */}
            {job.descriptionHtml && (
              <div
                className={`blog-markdown-content mb-12 transition-colors duration-300 ${
                  actualTheme === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
                dangerouslySetInnerHTML={{ __html: job.descriptionHtml }}
              />
            )}

            {/* Apply Button */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
              <Button
                onClick={() => setIsApplicationFormOpen(true)}
                className="w-full sm:w-auto px-8 py-6 text-lg font-bold rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform bg-linear-to-r from-orange-600 to-amber-500 border-0"
              >
                Apply for this Position
              </Button>
            </div>
          </motion.div>
        </article>
      </main>

      {/* Application Form Modal */}
      <JobApplicationForm
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
        jobTitle={job.title}
        jobId={job._id}
        applicationEmail={job.applicationEmail}
      />

      <ScrollToTop />
    </>
  );
}

