import Link from "next/link";
import { redirect } from "next/navigation";
import {
  getAdminJobById,
  getAdminLocations,
  removeJob,
} from "../../../careers/actions";
import { JobFormEdit } from "@/components/admin/JobFormEdit";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditJobPage({ params }: Props) {
  const { id } = await params;

  const [job, locations] = await Promise.all([
    getAdminJobById(id),
    getAdminLocations(),
  ]);

  if (!job) {
    redirect("/admin/careers");
  }

  async function handleDelete() {
    "use server";
    await removeJob(id);
    redirect("/admin/careers");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      <header className="space-y-2">
        <Link
          href="/admin/careers"
          className="inline-flex items-center text-sm text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white gap-1 underline-offset-4 hover:underline"
        >
          <span aria-hidden="true">←</span>
          <span>Back to job postings</span>
        </Link>
        <h1 className="text-2xl font-bold">Edit job</h1>
      </header>

      <JobFormEdit job={job} locations={locations} />

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

