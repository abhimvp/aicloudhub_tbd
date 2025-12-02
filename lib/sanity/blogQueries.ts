import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextBlock } from "@portabletext/types";

export interface BlogCategory {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  description?: string;
  displayOrder: number;
  isActive: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  bodyMarkdown?: string;
  content?: PortableTextBlock[]; // Portable Text
  cover: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  category: BlogCategory;
  date: string;
  readTime: string;
  featured?: boolean;
}

/**
 * GROQ query to fetch all active blog categories
 */
const BLOG_CATEGORIES_QUERY = `*[_type == "blogCategory" && isActive == true] | order(displayOrder asc) {
  _id,
  name,
  slug,
  description,
  displayOrder,
  isActive
}`;

/**
 * GROQ query to fetch blog posts with filtering
 */
const BLOG_POSTS_QUERY = `*[_type == "blogPost" && 
  ($category == "All" || $category == null || category->slug.current == $category) &&
  ($search == "" || $search == null || title match $search + "*" || excerpt match $search + "*")
] | order(date desc) [($page - 1) * $limit...$page * $limit] {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
  content,
  cover,
  category->{
    _id,
    name,
    slug,
    description,
    displayOrder,
    isActive
  },
  date,
  readTime,
  featured
}`;

/**
 * GROQ query to count total blog posts for pagination
 */
const BLOG_POSTS_COUNT_QUERY = `count(*[_type == "blogPost" && 
  ($category == "All" || $category == null || category->slug.current == $category) &&
  ($search == "" || $search == null || title match $search + "*" || excerpt match $search + "*")
])`;

/**
 * GROQ query to fetch featured blog posts
 */
const FEATURED_BLOG_POSTS_QUERY = `*[_type == "blogPost" && featured == true] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
  content,
  cover,
  category->{
    _id,
    name,
    slug,
    description,
    displayOrder,
    isActive
  },
  date,
  readTime,
  featured
}`;

/**
 * GROQ query to fetch a single blog post by slug
 */
const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
  content,
  cover,
  category->{
    _id,
    name,
    slug,
    description,
    displayOrder,
    isActive
  },
  date,
  readTime,
  featured
}`;

/**
 * GROQ query to fetch related blog posts (same category, exclude current post)
 */
const RELATED_BLOG_POSTS_QUERY = `*[_type == "blogPost" && category._ref == $categoryId && _id != $currentPostId] | order(date desc)[0...$limit] {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
  content,
  cover,
  category->{
    _id,
    name,
    slug,
    description,
    displayOrder,
    isActive
  },
  date,
  readTime,
  featured
}`;



/**
 * Fetch all active blog categories
 */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  const categories = await client.fetch<BlogCategory[]>(BLOG_CATEGORIES_QUERY);
  return categories || [];
}

/**
 * Fetch blog posts with filtering and pagination
 */
export async function getBlogPosts(
  category: string = "All",
  search: string = "",
  page: number = 1,
  limit: number = 100 // High limit for now, can implement real pagination UI later
): Promise<{ posts: BlogPost[]; total: number }> {
  const [posts, total] = await Promise.all([
    client.fetch<BlogPost[]>(BLOG_POSTS_QUERY, { category, search, page, limit }),
    client.fetch<number>(BLOG_POSTS_COUNT_QUERY, { category, search }),
  ]);
  return { posts: posts || [], total: total || 0 };
}

/**
 * Fetch featured blog posts
 */
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(FEATURED_BLOG_POSTS_QUERY);
  return posts || [];
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await client.fetch<BlogPost | null>(BLOG_POST_BY_SLUG_QUERY, {
    slug,
  });
  return post || null;
}

/**
 * Fetch related blog posts
 */
export async function getRelatedBlogPosts(
  categoryId: string,
  currentPostId: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(RELATED_BLOG_POSTS_QUERY, {
    categoryId,
    currentPostId,
    limit,
  });
  return posts || [];
}

/**
 * Get all blog post slugs for static generation
 */
export async function getAllBlogPostSlugs(): Promise<string[]> {
  const posts = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "blogPost"] { slug }`
  );
  return posts
    .map((post) => post.slug?.current)
    .filter((slug): slug is string => Boolean(slug));
}

