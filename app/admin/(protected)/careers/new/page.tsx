import Link from "next/link";
import { getAdminLocations } from "../../../careers/actions";
import { JobFormNew } from "@/components/admin/JobFormNew";

export default async function NewJobPage() {
  const locations = await getAdminLocations();

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
        <h1 className="text-2xl font-bold">New job</h1>
      </header>

      <JobFormNew locations={locations} />
    </div>
  );
}


