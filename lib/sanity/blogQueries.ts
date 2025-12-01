import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
 * GROQ query to fetch all blog posts
 */
const ALL_BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
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
 * GROQ query to fetch featured blog posts
 */
const FEATURED_BLOG_POSTS_QUERY = `*[_type == "blogPost" && featured == true] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
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
 * GROQ query to fetch blog posts by category
 */
const BLOG_POSTS_BY_CATEGORY_QUERY = `*[_type == "blogPost" && category->slug.current == $category] | order(date desc) {
  _id,
  title,
  slug,
  excerpt,
  bodyMarkdown,
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
 * Get image URL from Sanity image reference
 */
function getImageUrl(image: BlogPost["cover"]): string {
  if (!image?.asset) {
    return "";
  }
  const imageUrl = urlFor(image).url();
  return imageUrl || "";
}

/**
 * Fetch all active blog categories
 */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  const categories = await client.fetch<BlogCategory[]>(BLOG_CATEGORIES_QUERY);
  return categories || [];
}

/**
 * Fetch all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(ALL_BLOG_POSTS_QUERY);
  return posts || [];
}

/**
 * Fetch featured blog posts
 */
export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(FEATURED_BLOG_POSTS_QUERY);
  return posts || [];
}

/**
 * Fetch blog posts by category
 */
export async function getBlogPostsByCategory(
  categorySlug: string
): Promise<BlogPost[]> {
  const posts = await client.fetch<BlogPost[]>(BLOG_POSTS_BY_CATEGORY_QUERY, {
    category: categorySlug === "All" ? "*" : categorySlug,
  });
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

/**
 * Convert BlogPost to format compatible with existing components
 * This is a helper function to maintain backward compatibility
 */
export function formatBlogPostForComponent(post: BlogPost) {
  return {
    id: post._id,
    slug: post.slug.current,
    title: post.title,
    excerpt: post.excerpt,
    // Legacy components expect a "content" string field; use bodyMarkdown for compatibility
    content: post.bodyMarkdown || "",
    cover: getImageUrl(post.cover),
    category: post.category.name,
    tags: [], // Tags removed as per requirements
    author: {
      name: "",
      avatar: "",
      role: "",
    },
    date: post.date,
    readTime: post.readTime,
    featured: post.featured || false,
  };
}

