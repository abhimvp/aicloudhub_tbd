import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { client } from "@/sanity/lib/client";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const staticRoutes = [
  "",
  "/about-us",
  "/blogs",
  "/careers",
  "/contact-us",
  "/privacy",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // Static pages
  const staticPages = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? ("monthly" as const) : ("yearly" as const),
    priority: path === "" ? 1 : 0.6,
  }));

  // Fetch service slugs from Sanity
  const query = `*[_type == "service"]{ "slug": slug.current }`;
  const services = await client.fetch<{ slug: string }[]>(query);

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts (dynamic)
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
