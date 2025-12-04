import type { Metadata } from "next";
import ContactPageClient from "@/components/layout/Contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach out to aiCloudHub for AI consulting, staffing, and corporate training inquiries. Share your goals and we will craft a tailored solution.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
