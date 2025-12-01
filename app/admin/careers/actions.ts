"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { upsertJobPosting, deleteJobPosting } from "@/lib/sanity/adminActions";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/lib/sanity/serverClient";
import { jobAdminSchema } from "@/lib/admin/jobValidation";
import { z } from "zod";

export async function getAdminJobs() {
  const query = `*[_type == "jobPosting"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    jobType,
    experienceLevel,
    isActive,
    publishedAt
  }`;
  return client.fetch(query);
}

export async function getAdminLocations() {
  const query = `*[_type == "jobLocation" && isActive == true] | order(displayOrder asc){
    _id,
    name
  }`;
  return client.fetch(query);
}

export async function getAdminJobById(id: string) {
  const query = `*[_type == "jobPosting" && _id == $id][0]{
    _id,
    title,
    "slug": slug.current,
    locations[]->{_id},
    jobType,
    experienceLevel,
    snippet,
    descriptionMarkdown,
    isActive,
    applicationEmail
  }`;
  return client.fetch(query, { id });
}

export type JobFormState = {
  fieldErrors?: Record<string, string[]>;
};

const locationSchema = z.object({
  name: z.string().min(2, "Location name must be at least 2 characters."),
});

export type LocationFormState = {
  fieldErrors?: Record<string, string[]>;
  location?: { _id: string; name: string };
};

export async function saveJobAction(
  _prevState: JobFormState,
  formData: FormData
): Promise<JobFormState> {
  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString() || "";
  const rawSlug = formData.get("slug")?.toString() || "";
  const jobType = formData.get("jobType")?.toString() || "";
  const experienceLevel = formData.get("experienceLevel")?.toString() || "";
  const snippet = formData.get("snippet")?.toString() || "";
  const descriptionMarkdown =
    formData.get("descriptionMarkdown")?.toString() || "";
  const isActive = formData.get("isActive") === "on";
  const applicationEmailRaw =
    formData.get("applicationEmail")?.toString() || "";
  const locationIds = formData
    .getAll("locationIds")
    .map((v) => v.toString())
    .filter(Boolean);

  const baseSlug = (rawSlug || title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const slug = baseSlug || `job-${Date.now()}`;

  const parsed = jobAdminSchema.safeParse({
    title,
    slug,
    snippet,
    descriptionMarkdown,
    applicationEmail: applicationEmailRaw || undefined,
  });

  if (!parsed.success) {
    return {
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const applicationEmail = applicationEmailRaw || undefined;

  await upsertJobPosting({
    _id: id || undefined,
    title,
    slug,
    locationIds,
    jobType,
    experienceLevel,
    snippet,
    descriptionMarkdown,
    isActive,
    applicationEmail,
  });

  revalidatePath("/careers");
  redirect("/admin/careers");
}

export async function removeJob(id: string) {
  await deleteJobPosting(id);
  revalidatePath("/careers");
}

export async function createJobLocationAction(
  _prevState: LocationFormState,
  formData: FormData
): Promise<LocationFormState> {
  const name = formData.get("name")?.toString() || "";

  const parsed = locationSchema.safeParse({ name });
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const baseSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const slug = baseSlug || `loc-${Date.now()}`;

  const existing = await client.fetch<{ _id: string }[]>(
    `*[_type == "jobLocation" && slug.current == $slug][0...1]{ _id }`,
    { slug }
  );

  if (existing.length > 0) {
    return {
      fieldErrors: {
        name: ["A location with this name already exists."],
      },
    };
  }

  const doc = await writeClient.create({
    _type: "jobLocation",
    name,
    slug: { _type: "slug", current: slug },
    isActive: true,
    displayOrder: 0,
  });

  return {
    location: { _id: doc._id, name: doc.name },
  };
}

