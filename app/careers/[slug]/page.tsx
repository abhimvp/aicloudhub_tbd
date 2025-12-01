// app/careers/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getJobPostingBySlug,
  getAllJobPostingSlugs,
} from "@/lib/sanity/jobQueries";
import JobDetailContent from "@/components/layout/Careers/JobDetailContent";
import { renderMarkdownToHtml } from "@/lib/markdown";

interface JobPostingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all job postings
export async function generateStaticParams() {
  const slugs = await getAllJobPostingSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each job posting
export async function generateMetadata({
  params,
}: JobPostingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobPostingBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} - Careers`,
    description: job.snippet,
    openGraph: {
      title: job.title,
      description: job.snippet,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: job.title,
      description: job.snippet,
    },
  };
}

export default async function JobPostingPage({ params }: JobPostingPageProps) {
  const { slug } = await params;
  const job = await getJobPostingBySlug(slug);

  if (!job) {
    notFound();
  }

  const jobWithDescriptionHtml = {
    ...job,
    descriptionHtml: renderMarkdownToHtml(job.descriptionMarkdown),
  };

  return <JobDetailContent job={jobWithDescriptionHtml} />;
}

