"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { upsertBlogPost, deleteBlogPost } from "@/lib/sanity/adminActions";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/lib/sanity/serverClient";
import { blogAdminSchema } from "@/lib/admin/blogValidation";
import { z } from "zod";

export async function getAdminBlogPosts() {
  const query = `*[_type == "blogPost"] | order(date desc){
    _id,
    title,
    "slug": slug.current,
    excerpt,
    date,
    readTime,
    featured,
    "categoryName": category->name
  }`;
  return client.fetch(query);
}

export async function getAdminBlogCategories() {
  const query = `*[_type == "blogCategory"] | order(name asc){
    _id,
    name
  }`;
  return client.fetch(query);
}

export async function getAdminBlogPostById(id: string) {
  const query = `*[_type == "blogPost" && _id == $id][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    bodyMarkdown,
    cover{
      asset->{ _id }
    },
    date,
    readTime,
    featured,
    "categoryId": category->_id
  }`;
  return client.fetch(query, { id });
}

export type BlogFormState = {
  fieldErrors?: Record<string, string[]>;
};

const categorySchema = z.object({
  name: z.string().min(2, "Category name must be at least 2 characters."),
});

export type CategoryFormState = {
  fieldErrors?: Record<string, string[]>;
  category?: { _id: string; name: string };
};

export async function saveBlogAction(
  _prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const id = formData.get("id")?.toString();
  const title = formData.get("title")?.toString() || "";
  const rawSlug = formData.get("slug")?.toString() || "";
  const excerpt = formData.get("excerpt")?.toString() || "";
  const bodyMarkdown = formData.get("bodyMarkdown")?.toString() || "";
  const categoryId = formData.get("categoryId")?.toString() || "";
  const date = formData.get("date")?.toString() || "";
  const readTime = formData.get("readTime")?.toString() || "";
  const featured = formData.get("featured") === "on";
  const coverFile = formData.get("coverImage");
  const existingCoverId = formData.get("existingCoverId")?.toString() || "";
  let coverAssetId: string | undefined;

  const baseSlug = (rawSlug || title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const slug = baseSlug || `post-${Date.now()}`;

  const parsed = blogAdminSchema.safeParse({
    title,
    slug,
    excerpt,
    bodyMarkdown,
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  if (coverFile instanceof File && coverFile.size > 0) {
    const uploaded = await writeClient.assets.upload("image", coverFile);
    coverAssetId = uploaded._id;
  }

  if (!coverAssetId && existingCoverId) {
    coverAssetId = existingCoverId;
  }

  await upsertBlogPost({
    _id: id || undefined,
    title,
    slug,
    excerpt,
    bodyMarkdown,
    coverAssetId,
    categoryId,
    date,
    readTime,
    featured,
  });

  revalidatePath("/blogs");
  redirect("/admin/blogs");
}

export async function createBlogCategoryAction(
  _prevState: CategoryFormState,
  formData: FormData
): Promise<CategoryFormState> {
  const name = formData.get("name")?.toString() || "";

  const parsed = categorySchema.safeParse({ name });
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  const baseSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const slug = baseSlug || `cat-${Date.now()}`;

  const existing = await client.fetch<{ _id: string }[]>(
    `*[_type == "blogCategory" && slug.current == $slug][0...1]{ _id }`,
    { slug }
  );
  if (existing.length > 0) {
    return {
      fieldErrors: {
        name: ["A category with this name already exists."],
      },
    };
  }

  const doc = await writeClient.create({
    _type: "blogCategory",
    name,
    slug: { _type: "slug", current: slug },
    isActive: true,
    displayOrder: 0,
  });

  return {
    category: { _id: doc._id, name: doc.name },
  };
}

export async function removeBlog(id: string) {
  await deleteBlogPost(id);
  revalidatePath("/blogs");
}


