import type { Metadata } from "next";
import BlogsPageContent from "@/components/layout/Blogs/BlogsPageContent";
import { getBlogPosts, getBlogCategories } from "@/lib/sanity/blogQueries";

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

export const revalidate = 3600; // ISR: Revalidate every hour

interface BlogsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const resolvedSearchParams = await searchParams;
  const category = typeof resolvedSearchParams.category === 'string' ? resolvedSearchParams.category : 'All';
  const search = typeof resolvedSearchParams.search === 'string' ? resolvedSearchParams.search : '';

  const [postsData, categories] = await Promise.all([
    getBlogPosts(category, search),
    getBlogCategories(),
  ]);

  return (
    <BlogsPageContent
      initialPosts={postsData.posts}
      categories={categories}
      initialCategory={category}
      initialSearch={search}
    />
  );
}
