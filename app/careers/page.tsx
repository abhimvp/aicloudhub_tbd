import type { Metadata } from "next";
import CareersPageClient from "@/components/layout/Careers/CareersPageClient";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open roles at AI Cloud Hub across AI, cloud, and enterprise consulting teams. Discover our culture pillars and mock application process.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
