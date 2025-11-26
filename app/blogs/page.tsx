// app/blogs/page.tsx
import type { Metadata } from "next";
import BlogsPageContent from "@/components/layout/Blogs/BlogsPageContent";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Insights, tutorials, and thought leadership on AI, Cloud, DevOps, and Cybersecurity from the AI Cloud Hub team.",
  openGraph: {
    title: "Blogs - AI Cloud Hub",
    description:
      "Insights, tutorials, and thought leadership on AI, Cloud, DevOps, and Cybersecurity.",
    type: "website",
  },
};

export default function BlogsPage() {
  return <BlogsPageContent />;
}
