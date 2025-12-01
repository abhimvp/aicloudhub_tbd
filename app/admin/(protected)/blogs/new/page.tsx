import Link from "next/link";
import { getAdminBlogCategories } from "../../../blogs/actions";
import { BlogFormNew } from "@/components/admin/BlogFormNew";

export default async function NewBlogPage() {
  const categories = await getAdminBlogCategories();

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      <header className="space-y-2">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center text-sm text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white gap-1 underline-offset-4 hover:underline"
        >
          <span aria-hidden="true">←</span>
          <span>Back to blog posts</span>
        </Link>
        <h1 className="text-2xl font-bold">New blog post</h1>
      </header>

      <BlogFormNew categories={categories} />
    </div>
  );
}


