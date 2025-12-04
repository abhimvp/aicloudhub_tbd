// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/layout/HomePage/Hero";
import AboutUs from "@/components/layout/HomePage/AboutUs";
import Blogs from "@/components/layout/Blogs/Blogs";
import TechnologyServicesTabs from "@/components/layout/HomePage/TechnologyServicesTabs";
import ScrollToTop from "@/components/layout/ScrollToTop";
import FeaturedClientLogos from "@/components/layout/ClientLogos/FeaturedClientLogos";
import Stats from "@/components/layout/HomePage/Stats";
import CTA from "@/components/layout/HomePage/CTA";

export const metadata: Metadata = {
  title: "aiCloudHub",
  description:
    "aiCloudHub delivers AI consulting, cloud migration, and corporate upskilling programs for high-growth enterprises.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-linear-to-br dark:from-gray-900 dark:via-slate-900 dark:to-zinc-950 transition-colors duration-300">
      <div className="flex flex-col">
        <Hero />
        <FeaturedClientLogos />
        <Stats />
        <TechnologyServicesTabs />
        <AboutUs />
        <Blogs />
        <CTA />
      </div>
      <ScrollToTop />
    </main>
  );
}
