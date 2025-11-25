import type { Metadata } from "next";
import AboutPageClient from "@/components/layout/About/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the AI Cloud Hub leadership team, mission, vision, and the values that power our AI, cloud, and enterprise training services.",
};

export default function AboutUsPage() {
  return <AboutPageClient />;
}
