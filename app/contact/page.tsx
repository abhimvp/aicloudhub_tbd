import type { Metadata } from "next";
import ContactPageClient from "@/components/layout/Contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach out to AI Cloud Hub for AI consulting, staffing, and corporate training inquiries. Share your goals and we’ll craft a tailored solution.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}

