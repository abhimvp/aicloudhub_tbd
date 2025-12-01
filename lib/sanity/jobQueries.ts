import { client } from "@/sanity/lib/client";

export interface JobLocation {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  displayOrder: number;
  isActive: boolean;
}

export interface JobPosting {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  locations: JobLocation[];
  jobType: string;
  experienceLevel: string;
  snippet: string;
  descriptionMarkdown?: string;
  isActive: boolean;
  publishedAt: string;
  applicationEmail?: string;
}

/**
 * GROQ query to fetch all active job postings
 */
const ALL_JOB_POSTINGS_QUERY = `*[_type == "jobPosting" && isActive == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  locations[]->{
    _id,
    name,
    slug,
    displayOrder,
    isActive
  },
  jobType,
  experienceLevel,
  snippet,
  descriptionMarkdown,
  isActive,
  publishedAt,
  applicationEmail
}`;

/**
 * GROQ query to fetch a single job posting by slug
 */
const JOB_POSTING_BY_SLUG_QUERY = `*[_type == "jobPosting" && slug.current == $slug && isActive == true][0] {
  _id,
  title,
  slug,
  locations[]->{
    _id,
    name,
    slug,
    displayOrder,
    isActive
  },
  jobType,
  experienceLevel,
  snippet,
  descriptionMarkdown,
  isActive,
  publishedAt,
  applicationEmail
}`;

/**
 * GROQ query to fetch job postings with filters
 */
const FILTERED_JOB_POSTINGS_QUERY = `*[_type == "jobPosting" && isActive == true 
  && (!defined($location) || $location in locations[]->name)
  && (!defined($experienceLevel) || experienceLevel == $experienceLevel)
  && (!defined($jobType) || jobType == $jobType)
] | order(publishedAt desc) {
  _id,
  title,
  slug,
  locations[]->{
    _id,
    name,
    slug,
    displayOrder,
    isActive
  },
  jobType,
  experienceLevel,
  snippet,
  descriptionMarkdown,
  isActive,
  publishedAt,
  applicationEmail
}`;

/**
 * GROQ query to get all job posting slugs for static generation
 */
const JOB_POSTING_SLUGS_QUERY = `*[_type == "jobPosting" && isActive == true] {
  slug
}`;

/**
 * Fetch all active job postings
 */
export async function getAllJobPostings(): Promise<JobPosting[]> {
  const jobs = await client.fetch<JobPosting[]>(ALL_JOB_POSTINGS_QUERY);
  return jobs || [];
}

/**
 * Fetch a single job posting by slug
 */
export async function getJobPostingBySlug(slug: string): Promise<JobPosting | null> {
  const job = await client.fetch<JobPosting | null>(JOB_POSTING_BY_SLUG_QUERY, {
    slug,
  });
  return job || null;
}

/**
 * Fetch filtered job postings
 */
export async function getFilteredJobPostings(filters: {
  location?: string;
  experienceLevel?: string;
  jobType?: string;
}): Promise<JobPosting[]> {
  const jobs = await client.fetch<JobPosting[]>(FILTERED_JOB_POSTINGS_QUERY, {
    location: filters.location,
    experienceLevel: filters.experienceLevel,
    jobType: filters.jobType,
  });
  return jobs || [];
}

/**
 * Get all job posting slugs for static generation
 */
export async function getAllJobPostingSlugs(): Promise<string[]> {
  const jobs = await client.fetch<{ slug: { current: string } }[]>(
    JOB_POSTING_SLUGS_QUERY
  );
  return jobs
    .map((job) => job.slug?.current)
    .filter((slug): slug is string => Boolean(slug));
}

/**
 * Get unique values for filters
 */
export async function getFilterOptions(): Promise<{
  locations: string[];
  experienceLevels: string[];
  jobTypes: string[];
}> {
  const jobs = await getAllJobPostings();
  const locations = Array.from(
    new Set(
      jobs
        .flatMap((job) => job.locations || [])
        .filter((loc) => loc && loc.name && loc.isActive)
        .map((loc) => loc.name)
    )
  ).sort();
  const experienceLevels = Array.from(
    new Set(jobs.map((job) => job.experienceLevel))
  ).sort();
  const jobTypes = Array.from(new Set(jobs.map((job) => job.jobType))).sort();

  return {
    locations,
    experienceLevels,
    jobTypes,
  };
}

