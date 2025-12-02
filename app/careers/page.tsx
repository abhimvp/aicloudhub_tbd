import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CareersFilter } from "@/components/careers/CareersFilter";

export const metadata: Metadata = {
  title: "Careers | aiCloudHub",
  description:
    "Join our team of innovators. Explore open roles in AI, Cloud, and Enterprise Consulting.",
};

// Query to fetch active job postings with filters
const JOBS_QUERY = groq`*[_type == "jobPosting" && isActive == true 
  && ($location == "all" || $location in locations[]->name)
  && ($type == "all" || jobType == $type)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  locations[]->{name},
  jobType,
  snippet,
  publishedAt
}`;

// Query to fetch filter options
const FILTERS_QUERY = groq`{
  "locations": *[_type == "jobLocation" && isActive == true].name,
  "jobTypes": array::unique(*[_type == "jobPosting" && isActive == true].jobType)
}`;

interface JobPosting {
  _id: string;
  title: string;
  slug: { current: string };
  locations: { name: string }[];
  jobType: string;
  snippet: string;
  publishedAt: string;
}

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CareersPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const location = (resolvedParams.location as string) || "all";
  const type = (resolvedParams.type as string) || "all";

  const [jobs, filters] = await Promise.all([
    client.fetch<JobPosting[]>(JOBS_QUERY, { location, type }, { next: { revalidate: 3600 } }),
    client.fetch<{ locations: string[]; jobTypes: string[] }>(FILTERS_QUERY, {}, { next: { revalidate: 3600 } }),
  ]);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50/80 dark:bg-white/5 border border-orange-100 dark:border-white/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <Rocket className="w-4 h-4" />
            Careers at aiCloudHub
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight mb-8 leading-[1.1]">
            Build a career that feels <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600">
              handcrafted for your ambition
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            We are a cloud-native, AI-forward studio where strategists, engineers, and product craft leaders invent customer moments that feel effortless. Join the crew that treats careers like long-form design projects.
          </p>

          {/* CTA */}
          <Link href="#open-roles">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-orange-500/20 transition-all hover:scale-105">
              Explore open roles
            </Button>
          </Link>
        </div>
      </section>

      <div id="open-roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Open Positions</h2>

          {/* Filters */}
          <CareersFilter locations={filters.locations} jobTypes={filters.jobTypes} />
        </div>

        {/* Job Grid */}
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <Link key={job._id} href={`/careers/${job.slug.current}`} className="group">
                <Card className="h-full border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group-hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {job.locations?.map((l) => l.name).join(", ") || "Remote"}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.jobType}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 flex-grow">
                      {job.snippet}
                    </p>

                    <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      View Position
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 dark:bg-zinc-900 rounded-3xl border border-dashed border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No Openings Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or check back later.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
