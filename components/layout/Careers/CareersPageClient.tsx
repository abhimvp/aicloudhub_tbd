"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import Link from "next/link";
import ScrollToTop from "@/components/layout/ScrollToTop";

const CareersPageClient = () => {
  const { actualTheme } = useTheme();
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "processing" | "success"
  >("idle");
  const [searchQuery, setSearchQuery] = useState("");

  const culturePillars = [
    {
      title: "People over process",
      description:
        "We design policies around people’s lives, not the other way around.",
      emoji: "🧡",
    },
    {
      title: "Prototype mindset",
      description:
        "Launch, learn, and iterate—every teammate ships meaningful work.",
      emoji: "🛠️",
    },
    {
      title: "Playful rigor",
      description:
        "We mix experimentation with accountability to keep momentum high.",
      emoji: "🎯",
    },
    {
      title: "Coaching culture",
      description:
        "Mentors, guilds, and lightning talks keep curiosity on the roadmap.",
      emoji: "📚",
    },
  ];

  const jobOpenings = [
    {
      title: "AI Experience Designer",
      team: "Humanized AI Studio",
      location: "Remote (North America / India overlap)",
      type: "Full-time",
      experience: "5+ years",
      snippet:
        "Blend interaction design and prompt craft to ship adaptive AI copilots.",
    },
    {
      title: "Cloud FinOps Strategist",
      team: "Platform Economics",
      location: "Austin, TX or Hyderabad",
      type: "Hybrid",
      experience: "7+ years",
      snippet:
        "Architect cost-aware, performance-first cloud topologies across Azure and AWS.",
    },
    {
      title: "Data Reliability Engineer",
      team: "Observability Guild",
      location: "Bangalore",
      type: "Full-time",
      experience: "4+ years",
      snippet:
        "Instrument pipelines with lineage, contracts, and delightful developer tooling.",
    },
    {
      title: "Enterprise Solutions Partner",
      team: "Client Acceleration",
      location: "Atlanta, GA",
      type: "On-site",
      experience: "8+ years",
      snippet:
        "Translate boardroom goals into pragmatic digital roadmaps with measurable ROI.",
    },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFileName(file ? file.name : null);
    setFormStatus("idle");
  };

  const handleMockSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("processing");
    setTimeout(() => {
      setFormStatus("success");
    }, 800);
  };

  const bgClass =
    actualTheme === "dark"
      ? "bg-linear-to-r from-gray-950 via-slate-950 to-zinc-950 text-white"
      : "bg-linear-to-br from-white via-orange-50/40 to-yellow-50/50 text-gray-900";

  const filteredJobs = jobOpenings.filter((job) => {
    const query = searchQuery.toLowerCase();
    return (
      job.title.toLowerCase().includes(query) ||
      job.team.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.snippet.toLowerCase().includes(query)
    );
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

      {/* Culture Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-3xl md:text-5xl font-black mb-6 ${
                actualTheme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              The <span className="text-orange-500">values</span> that drive us
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              We&apos;re building a company where you can do the best work of
              your life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {culturePillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                  actualTheme === "dark"
                    ? "bg-zinc-900/50 border-white/10 hover:bg-zinc-800/80 hover:border-orange-500/30"
                    : "bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-orange-200"
                }`}
              >
                <div className="text-4xl mb-4">{pillar.emoji}</div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    actualTheme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.length === 0 && (
              <div
                className={`rounded-3xl border p-10 text-center text-lg font-semibold ${
                  actualTheme === "dark"
                    ? "border-white/10 bg-white/5 text-gray-300"
                    : "border-gray-200 bg-white text-gray-600"
                }`}
              >
                No roles match “{searchQuery}”. Try another keyword or pitch us
                a role.
              </div>
            )}
            {filteredJobs.map((job, index) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                className={`group rounded-3xl border p-6 md:p-8 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.01] ${
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
                      className={`text-sm font-bold uppercase tracking-wide ${
                        actualTheme === "dark"
                          ? "text-orange-300"
                          : "text-orange-600"
                      }`}
                    >
                      {job.team}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
                      actualTheme === "dark"
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-orange-50 text-orange-700 hover:bg-orange-100"
                    }`}
                  >
                    Mock apply
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
                  <span
                    className={`px-3 py-1 rounded-full border ${
                      actualTheme === "dark"
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    {job.location}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full border ${
                      actualTheme === "dark"
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    {job.type}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full border ${
                      actualTheme === "dark"
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    {job.experience}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleMockSubmit}
          className={`rounded-4xl border p-8 space-y-6 backdrop-blur-xl ${
            actualTheme === "dark"
              ? "border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/50"
              : "border-orange-100 bg-white/80 shadow-2xl shadow-orange-500/10"
          }`}
        >
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
              Mock application
            </p>
            <h2
              className={`text-3xl font-black ${
                actualTheme === "dark" ? "text-white" : "text-slate-900"
              }`}
            >
              Drop your resume
            </h2>
            <p
              className={`text-base ${
                actualTheme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              This is a preview of the experience. Files are not stored yet, and
              clicking submit simply simulates the confirmation state.
            </p>
          </div>

          <label
            htmlFor="fullName"
            className="text-sm font-bold uppercase tracking-wide text-orange-500"
          >
            Your name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            placeholder="Alex Rivera"
            className={`w-full rounded-2xl px-4 py-3 border focus:outline-none focus:ring-2 transition-all ${
              actualTheme === "dark"
                ? "bg-zinc-800/50 border-white/10 focus:ring-orange-500/50 text-white placeholder-zinc-500"
                : "bg-white border-slate-200 focus:ring-orange-400 focus:border-orange-400"
            }`}
          />

          <label
            htmlFor="email"
            className="text-sm font-bold uppercase tracking-wide text-orange-500"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className={`w-full rounded-2xl px-4 py-3 border focus:outline-none focus:ring-2 transition-all ${
              actualTheme === "dark"
                ? "bg-zinc-800/50 border-white/10 focus:ring-orange-500/50 text-white placeholder-zinc-500"
                : "bg-white border-slate-200 focus:ring-orange-400 focus:border-orange-400"
            }`}
          />

          <div className="space-y-2">
            <label
              htmlFor="resume"
              className="text-sm font-bold uppercase tracking-wide text-orange-500"
            >
              Resume upload (mock)
            </label>
            <div
              className={`rounded-2xl border border-dashed p-5 flex flex-col gap-3 transition-colors ${
                actualTheme === "dark"
                  ? "border-white/20 bg-zinc-800/30 hover:bg-zinc-800/50"
                  : "border-orange-200 bg-orange-50/50 hover:bg-orange-50"
              }`}
            >
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className={`text-sm ${
                  actualTheme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}
              />
              <p
                className={`text-xs ${
                  actualTheme === "dark" ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Files stay on your device during this mock experience.
              </p>
              {selectedFileName && (
                <p
                  className={`text-sm font-semibold ${
                    actualTheme === "dark"
                      ? "text-orange-300"
                      : "text-orange-600"
                  }`}
                >
                  Selected: {selectedFileName}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={formStatus === "processing"}
            className="w-full rounded-2xl py-6 text-lg font-bold bg-linear-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 border-0 shadow-lg shadow-orange-500/20"
          >
            {formStatus === "processing"
              ? "Simulating..."
              : formStatus === "success"
              ? "Received! (mock)"
              : "Submit for preview"}
          </Button>

          <p
            className={`text-sm italic ${
              actualTheme === "dark" ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Nothing is stored yet—we’ll wire integrations once the team
            finalizes the workflow.
          </p>
        </motion.form>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default CareersPageClient;
