import Link from "next/link";
import { getAdminBlogPosts } from "../../blogs/actions";

type AdminBlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  categoryName?: string;
};

export default async function AdminBlogsPage() {
  const posts = await getAdminBlogPosts() as AdminBlogPost[];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog posts</h1>
        <Link
          href="/admin/blogs/new"
          className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          New post
        </Link>
      </header>

      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="min-w-full text-sm text-neutral-900">
          <thead className="bg-neutral-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Title
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Category
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Date
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Read time
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Featured
              </th>
              <th className="px-4 py-3 text-right font-medium text-neutral-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {posts.map((post) => (
              <tr key={post._id} className="border-t">
                <td className="px-4 py-3 text-neutral-900">
                  {post.title}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {post.categoryName ?? "—"}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {post.date}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {post.readTime}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {post.featured ? (
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                      Yes
                    </span>
                  ) : (
                    <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">
                      No
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xs font-medium text-neutral-600 underline"
                  >
                    View
                  </Link>
                  <Link
                    href={`/admin/blogs/${post._id}`}
                    className="text-xs font-medium text-blue-600 underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


