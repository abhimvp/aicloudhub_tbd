import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableTextRenderer } from "@/components/blocks/PortableTextRenderer";
import { PortableTextBlock } from "@portabletext/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";

// Query to fetch a single job by slug
const JOB_QUERY = groq`*[_type == "jobPosting" && slug.current == $slug][0] {
  _id,
  title,
  locations[]->{name},
  jobType,
  experienceLevel,
  snippet,
  content,
  publishedAt
}`;

interface JobPosting {
  _id: string;
  title: string;
  locations: { name: string }[];
  jobType: string;
  experienceLevel: string;
  snippet: string;
  content: PortableTextBlock[];
  publishedAt: string;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await client.fetch<JobPosting>(JOB_QUERY, { slug });

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} | Careers at aiCloudHub`,
    description: job.snippet,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await client.fetch<JobPosting>(JOB_QUERY, { slug }, { next: { revalidate: 3600 } });

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/careers">
            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Careers
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-gray-200 dark:border-white/10 pb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="font-medium">
                {job.locations?.map((l) => l.name).join(", ") || "Remote"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-orange-500" />
              <span className="font-medium">{job.jobType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="font-medium">{job.experienceLevel}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {job.content ? (
                <PortableTextRenderer value={job.content} />
              ) : (
                <p className="text-gray-500 italic">No detailed description available.</p>
              )}
            </div>
          </div>

          {/* Sidebar / Application Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Apply for this Role
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Ready to make an impact? Fill out the form below to start your journey with us.
                </p>

                {/* Application Form Component */}
                <JobApplicationForm jobTitle={job.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
