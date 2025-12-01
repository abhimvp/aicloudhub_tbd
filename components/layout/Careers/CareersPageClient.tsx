"use client";

import React, { useState, useEffect } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import Link from "next/link";
import ScrollToTop from "@/components/layout/ScrollToTop";
import {
  getAllJobPostings,
  getFilterOptions,
  type JobPosting,
} from "@/lib/sanity/jobQueries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CareersPageClient = () => {
  const { actualTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState<{
    locations: string[];
    experienceLevels: string[];
    jobTypes: string[];
  }>({
    locations: [],
    experienceLevels: [],
    jobTypes: [],
  });
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedExperience, setSelectedExperience] = useState<string>("all");
  const [selectedJobType, setSelectedJobType] = useState<string>("all");

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        const [jobs, options] = await Promise.all([
          getAllJobPostings(),
          getFilterOptions(),
        ]);
        setJobPostings(jobs);
        setFilterOptions(options);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const bgClass =
    actualTheme === "dark"
      ? "bg-linear-to-r from-gray-950 via-slate-950 to-zinc-950 text-white"
      : "bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 text-gray-900";

  const filteredJobs = jobPostings.filter((job) => {
    const query = searchQuery.toLowerCase();
    const locationNames = (job.locations || []).map((loc) => loc.name || "");
    const matchesSearch =
      job.title.toLowerCase().includes(query) ||
      locationNames.some((name) => name.toLowerCase().includes(query)) ||
      job.snippet.toLowerCase().includes(query);

    const matchesLocation =
      selectedLocation === "all" ||
      locationNames.includes(selectedLocation);
    const matchesExperience =
      selectedExperience === "all" || job.experienceLevel === selectedExperience;
    const matchesJobType =
      selectedJobType === "all" || job.jobType === selectedJobType;

    return matchesSearch && matchesLocation && matchesExperience && matchesJobType;
  });

  return (
    <main className={`min-h-screen transition-colors duration-300 ${bgClass}`}>
      <section
        className={`relative overflow-hidden pt-32 pb-16 ${
          actualTheme === "dark"
            ? "bg-linear-to-r from-gray-950 via-slate-950 to-zinc-950"
            : "bg-linear-to-br from-orange-50 via-white to-yellow-50"
        }`}
      >
        {/* Tech Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#999 1px, transparent 1px), linear-gradient(90deg, #999 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated floating shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Animated gradient overlay for dark mode */}
        {actualTheme === "dark" && (
          <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300 z-1">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ willChange: "opacity, transform" }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm"
              style={{
                borderColor:
                  actualTheme === "dark"
                    ? "rgba(249, 115, 22, 0.3)"
                    : "rgba(249, 115, 22, 0.2)",
                backgroundColor:
                  actualTheme === "dark"
                    ? "rgba(249, 115, 22, 0.1)"
                    : "rgba(255, 237, 213, 0.5)",
                color:
                  actualTheme === "dark"
                    ? "rgb(253, 186, 116)"
                    : "rgb(194, 65, 12)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              🚀 Careers at aiCloudHub
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Build a career that feels <br className="hidden md:block" />
              <span className="bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                handcrafted for your ambition
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
                actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              We are a cloud-native, AI-forward studio where strategists,
              engineers, and product craft leaders invent customer moments that
              feel effortless. Join the crew that treats careers like long-form
              design projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                className="px-8 py-6 text-base font-bold rounded-full shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform duration-300 bg-linear-to-r from-orange-600 to-amber-500 border-0"
              >
                <Link href="#open-roles">Explore open roles</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="open-roles"
        className={`py-20 relative ${
          actualTheme === "dark" ? "bg-zinc-950" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ willChange: "opacity, transform" }}
            className="flex flex-col gap-4 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
              Open roles
            </p>
            <h2
              className={`text-3xl md:text-5xl font-black ${
                actualTheme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Teams hiring right now
            </h2>
            <div
              className={`max-w-3xl mx-auto flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300 ${
                actualTheme === "dark"
                  ? "border-white/10 bg-white/5 focus-within:bg-white/10 focus-within:border-orange-500/50"
                  : "border-gray-200 bg-white shadow-sm focus-within:shadow-md focus-within:border-orange-400"
              }`}
            >
              <span className="text-xl">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by role, location, or team"
                className={`flex-1 bg-transparent focus:outline-none text-base ${
                  actualTheme === "dark"
                    ? "text-white placeholder:text-gray-400"
                    : "text-gray-900 placeholder:text-gray-500"
                }`}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger
                  className={`w-[180px] ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {filterOptions.locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedExperience}
                onValueChange={setSelectedExperience}
              >
                <SelectTrigger
                  className={`w-[180px] ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  <SelectValue placeholder="All Experience Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience Levels</SelectItem>
                  {filterOptions.experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                <SelectTrigger
                  className={`w-[180px] ${
                    actualTheme === "dark"
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-white border-gray-200 text-gray-900"
                  }`}
                >
                  <SelectValue placeholder="All Job Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Job Types</SelectItem>
                  {filterOptions.jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div
                className={`text-lg ${
                  actualTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Loading job openings...
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredJobs.length === 0 && (
                <div
                  className={`rounded-3xl border p-10 text-center text-lg font-semibold ${
                    actualTheme === "dark"
                      ? "border-white/10 bg-white/5 text-gray-300"
                      : "border-gray-200 bg-white text-gray-600"
                  }`}
                >
                  {searchQuery || selectedLocation !== "all" || selectedExperience !== "all" || selectedJobType !== "all"
                    ? "No roles match your filters. Try adjusting your search or filters."
                    : "No job openings available at the moment. Check back soon!"}
                </div>
              )}
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <Link href={`/careers/${job.slug.current}`}>
                    <article
                      className={`h-full group rounded-3xl border p-6 md:p-8 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                        actualTheme === "dark"
                          ? "border-white/10 bg-zinc-900/50 hover:bg-zinc-800/80 hover:border-orange-500/30"
                          : "border-gray-200 bg-white shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-200"
                      }`}
                    >
                      <div className="flex flex-wrap gap-3 items-center justify-between">
                        <div>
                          <h3
                            className={`text-2xl font-bold mb-1 ${
                              actualTheme === "dark" ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {job.title}
                          </h3>
                          <p
                            className={`text-sm font-semibold ${
                              actualTheme === "dark"
                                ? "text-slate-400"
                                : "text-slate-600"
                            }`}
                          >
                            {(job.locations || []).length > 0
                              ? (job.locations || [])
                                  .map((loc) => loc.name)
                                  .filter(Boolean)
                                  .join(" • ")
                              : "Location to be announced"}
                          </p>
                          {job.publishedAt && (
                            <p
                              className={`text-xs mt-1 ${
                                actualTheme === "dark"
                                  ? "text-slate-500"
                                  : "text-slate-500"
                              }`}
                            >
                              Posted on{" "}
                              {new Date(job.publishedAt)
                                .toISOString()
                                .slice(0, 10)}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="secondary"
                          className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
                            actualTheme === "dark"
                              ? "bg-white/10 text-white hover:bg-white/20"
                              : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/careers/${job.slug.current}`;
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                      <p
                        className={`text-base leading-relaxed ${
                          actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {job.snippet}
                      </p>
                      <div
                        className={`flex flex-wrap gap-3 text-sm font-medium ${
                          actualTheme === "dark" ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {(job.locations || []).map((loc) => (
                          <span
                            key={loc._id}
                            className={`px-3 py-1 rounded-full border ${
                              actualTheme === "dark"
                                ? "border-white/10 bg-white/5"
                                : "border-slate-200 bg-slate-50"
                            }`}
                          >
                            {loc.name}
                          </span>
                        ))}
                        <span
                          className={`px-3 py-1 rounded-full border ${
                            actualTheme === "dark"
                              ? "border-white/10 bg-white/5"
                              : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          {job.jobType}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full border ${
                            actualTheme === "dark"
                              ? "border-white/10 bg-white/5"
                              : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          {job.experienceLevel}
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default CareersPageClient;
