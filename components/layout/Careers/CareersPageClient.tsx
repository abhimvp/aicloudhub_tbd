'use client';

import React, { useState } from "react";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import Link from "next/link";
import ScrollToTop from "@/components/layout/ScrollToTop";

const CareersPageClient = () => {
  const { actualTheme } = useTheme();
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "processing" | "success">(
    "idle"
  );
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
      description: "Launch, learn, and iterate—every teammate ships meaningful work.",
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
      ? "bg-[#050506] text-white"
      : "bg-white text-gray-900";

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
            ? "bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
            : "bg-gradient-to-b from-orange-50 via-white to-amber-50"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="w-[45rem] h-[45rem] bg-orange-500/10 rounded-full blur-3xl absolute -top-10 -left-10"
            aria-hidden
          />
          <div
            className="w-[35rem] h-[35rem] bg-purple-500/10 rounded-full blur-3xl absolute bottom-0 right-0"
            aria-hidden
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <span
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm	font-semibold ${
                actualTheme === "dark"
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white text-orange-600 border border-orange-100"
              }`}
            >
              🚀 Careers at AiCloudHub
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Build a career that feels
              <span
                className={`block text-transparent bg-clip-text bg-gradient-to-r ${
                  actualTheme === "dark"
                    ? "from-orange-300 via-yellow-200 to-white"
                    : "from-orange-600 via-rose-500 to-amber-500"
                }`}
              >
                handcrafted for your ambition
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto ${
                actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We are a cloud-native, AI-forward studio where strategists, engineers,
              and product craft leaders invent customer moments that feel effortless.
              Join the crew that treats careers like long-form design projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                className="px-7 py-6 text-base font-semibold rounded-full"
              >
                <Link href="#open-roles">Explore open roles</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="open-roles"
        className={`py-20 ${
          actualTheme === "dark"
            ? "bg-gradient-to-b from-zinc-950 to-zinc-900"
            : "bg-gradient-to-b from-orange-50 to-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Open roles
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Teams hiring right now
            </h2>
            <div
              className={`max-w-3xl mx-auto flex items-center gap-3 rounded-full border px-4 py-2 ${
                actualTheme === "dark"
                  ? "border-white/20 bg-white/5"
                  : "border-gray-200 bg-white shadow-sm"
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
                No roles match “{searchQuery}”. Try another keyword or pitch us a role.
              </div>
            )}
            {filteredJobs.map((job) => (
              <motion.article
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-3xl border p-6 md:p-8 flex flex-col gap-5 ${
                  actualTheme === "dark"
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-gray-200 bg-white shadow-md/30 hover:shadow-lg"
                }`}
              >
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p
                      className={`text-sm font-semibold uppercase tracking-wide ${
                        actualTheme === "dark"
                          ? "text-orange-200"
                          : "text-orange-500"
                      }`}
                    >
                      {job.team}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    className="rounded-full px-6 py-2 text-sm font-semibold"
                  >
                    Mock apply
                  </Button>
                </div>
                <p
                  className={`text-base ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {job.snippet}
                </p>
                <div
                  className={`flex flex-wrap gap-3 text-sm font-medium ${
                    actualTheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="px-3 py-1 rounded-full border border-current/20">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-current/20">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-current/20">
                    {job.experience}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleMockSubmit}
          className={`rounded-4xl border p-8 space-y-6 ${
            actualTheme === "dark"
              ? "border-white/10 bg-gradient-to-br from-orange-500/10 to-pink-500/5"
              : "border-orange-100 bg-orange-50"
          }`}
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
              Mock application
            </p>
            <h2 className="text-3xl font-black">Drop your resume</h2>
            <p
              className={`text-base ${
                actualTheme === "dark" ? "text-gray-200" : "text-gray-600"
              }`}
            >
              This is a preview of the experience. Files are not stored yet, and
              clicking submit simply simulates the confirmation state.
            </p>
          </div>

          <label
            htmlFor="fullName"
            className="text-sm font-semibold uppercase tracking-wide text-orange-400"
          >
            Your name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            placeholder="Alex Rivera"
            className={`w-full rounded-2xl px-4 py-3 border focus:outline-none focus:ring-2 ${
              actualTheme === "dark"
                ? "bg-black/30 border-white/10 focus:ring-orange-300"
                : "bg-white border-orange-200 focus:ring-orange-400"
            }`}
          />

          <label
            htmlFor="email"
            className="text-sm font-semibold uppercase tracking-wide text-orange-400"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className={`w-full rounded-2xl px-4 py-3 border focus:outline-none focus:ring-2 ${
              actualTheme === "dark"
                ? "bg-black/30 border-white/10 focus:ring-orange-300"
                : "bg-white border-orange-200 focus:ring-orange-400"
            }`}
          />

          <div className="space-y-2">
            <label
              htmlFor="resume"
              className="text-sm font-semibold uppercase tracking-wide text-orange-400"
            >
              Resume upload (mock)
            </label>
            <div
              className={`rounded-2xl border border-dashed p-5 flex flex-col gap-3 ${
                actualTheme === "dark"
                  ? "border-white/20 bg-black/20"
                  : "border-orange-200 bg-white"
              }`}
            >
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="text-sm"
              />
              <p
                className={`text-xs ${
                  actualTheme === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Files stay on your device during this mock experience.
              </p>
              {selectedFileName && (
                <p className="text-sm font-semibold">
                  Selected: {selectedFileName}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={formStatus === "processing"}
            className="w-full rounded-2xl py-6 text-lg font-semibold"
          >
            {formStatus === "processing"
              ? "Simulating..."
              : formStatus === "success"
              ? "Received! (mock)"
              : "Submit for preview"}
          </Button>

          <p
            className={`text-sm italic ${
              actualTheme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Nothing is stored yet—we’ll wire integrations once the team finalizes
            the workflow.
          </p>
        </motion.form>
      </section>
      <ScrollToTop />
    </main>
  );
};

export default CareersPageClient;

