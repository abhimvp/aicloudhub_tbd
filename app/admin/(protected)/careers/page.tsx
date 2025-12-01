import Link from "next/link";
import { getAdminJobs } from "../../careers/actions";

type AdminJob = {
  _id: string;
  title: string;
  slug: string;
  jobType: string;
  experienceLevel: string;
  isActive: boolean;
  publishedAt?: string;
};

export default async function AdminCareersPage() {
  const jobs = await getAdminJobs() as AdminJob[];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Job postings</h1>
        <Link
          href="/admin/careers/new"
          className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          New job
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
                Type
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Experience
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Published
              </th>
              <th className="px-4 py-3 text-left font-medium text-neutral-700">
                Status
              </th>
              <th className="px-4 py-3 text-right font-medium text-neutral-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {jobs.map((job) => (
              <tr key={job._id} className="border-t">
                <td className="px-4 py-3 text-neutral-900">
                  {job.title}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {job.jobType}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {job.experienceLevel}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {job.publishedAt
                    ? new Date(job.publishedAt).toISOString().slice(0, 10)
                    : "—"}
                </td>
                <td className="px-4 py-3 text-neutral-900">
                  {job.isActive ? (
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                      Active
                    </span>
                  ) : (
                    <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-right space-x-3">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-xs font-medium text-neutral-600 underline"
                  >
                    View
                  </Link>
                  <Link
                    href={`/admin/careers/${job._id}`}
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


