// app/blogs/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getRelatedBlogPosts,
  getAllBlogPostSlugs,
} from "@/lib/sanity/blogQueries";
import BlogPostContent from "@/components/layout/Blogs/BlogPostContent";
import { urlFor } from "@/sanity/lib/image";
import { renderMarkdownToHtml } from "@/lib/markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Enable ISR (Incremental Static Regeneration) and allow dynamic params
export const revalidate = 3600; // Revalidate every hour
export const dynamicParams = true; // Allow dynamic params not in generateStaticParams

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogPostSlugs();
    return slugs.map((slug) => ({
      slug,
    }));
  } catch (error) {
    console.error('Error fetching blog post slugs for static params:', error);
    return [];
  }
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const coverImageUrl = blog.cover?.asset ? urlFor(blog.cover).url() : "";

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      images: coverImageUrl ? [coverImageUrl] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: coverImageUrl ? [coverImageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogPosts(
    blog.category._id,
    blog._id,
    3
  );

  // Pre-process image URLs on the server
  const blogWithImageUrl = {
    ...blog,
    coverImageUrl: blog.cover?.asset ? urlFor(blog.cover).url() : "",
    bodyHtml: renderMarkdownToHtml(blog.bodyMarkdown),
  };

  const relatedBlogsWithImageUrls = relatedBlogs.map((relatedBlog) => ({
    ...relatedBlog,
    coverImageUrl: relatedBlog.cover?.asset
      ? urlFor(relatedBlog.cover).url()
      : "",
  }));

  return (
    <BlogPostContent
      blog={blogWithImageUrl}
      relatedBlogs={relatedBlogsWithImageUrls}
    />
  );
}
