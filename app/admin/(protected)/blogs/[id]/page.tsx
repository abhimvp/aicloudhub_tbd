import Link from "next/link";
import { redirect } from "next/navigation";
import {
  getAdminBlogCategories,
  getAdminBlogPostById,
  removeBlog,
} from "../../../blogs/actions";
import { BlogFormEdit } from "@/components/admin/BlogFormEdit";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: Props) {
  const { id } = await params;

  const [post, categories] = await Promise.all([
    getAdminBlogPostById(id),
    getAdminBlogCategories(),
  ]);

  if (!post) {
    redirect("/admin/blogs");
  }

  async function handleDelete() {
    "use server";
    await removeBlog(id);
    redirect("/admin/blogs");
  }

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
        <h1 className="text-2xl font-bold">Edit blog post</h1>
      </header>

      <BlogFormEdit post={post} categories={categories} />
      <form action={handleDelete}>
        <button
          type="submit"
          className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
        >
          Delete
        </button>
      </form>
    </div>
  );
}


