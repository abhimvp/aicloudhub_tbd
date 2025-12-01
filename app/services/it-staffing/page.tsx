// app/services/staffing/page.tsx
import type { Metadata } from "next";
import StaffingContent from "@/components/layout/Staffing/StaffingContent";

export const metadata: Metadata = {
  title: "IT Staffing",
  description:
    "Find the perfect talent to accelerate your digital transformation. Our women-empowered, agile teams rapidly address evolving priorities with strong engineering capabilities.",
  openGraph: {
    title: "IT Staffing - AI Cloud Hub",
    description:
      "Connect with top-tier tech talent to accelerate your digital transformation.",
    type: "website",
  },
};

export default function ITStaffingPage() {
  return <StaffingContent />;
}
