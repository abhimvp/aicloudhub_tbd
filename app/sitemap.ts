import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { getAllServiceSlugs } from "@/lib/servicesData";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const staticRoutes = [
  "",
  "/about-us",
  "/blogs",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static pages
  const staticPages = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? ("monthly" as const) : ("yearly" as const),
    priority: path === "" ? 1 : 0.6,
  }));

  // Service pages (dynamic)
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Business vertical pages (staffing, corporate-training, it-services)
  const verticalPages = [
    "/services/staffing",
    "/services/corporate-training",
    "/services/it-services",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
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

  return [...staticPages, ...servicePages, ...verticalPages, ...blogPages];
}
