"use client";

import { useActionState } from "react";
import { JobMarkdownEditor } from "@/components/admin/JobMarkdownEditor";
import {
  saveJobAction,
  type JobFormState,
} from "@/app/admin/careers/actions";
import { JobLocationSelector } from "./JobLocationSelector";

const initialState: JobFormState = {};

type JobForEdit = {
  _id: string;
  title: string;
  slug: string;
  locations?: Array<{ _id: string }>;
  jobType: string;
  experienceLevel: string;
  snippet: string;
  descriptionMarkdown?: string;
  isActive: boolean;
  applicationEmail?: string;
};

type JobLocationForForm = {
  _id: string;
  name: string;
};

export function JobFormEdit({
  job,
  locations,
}: {
  job: JobForEdit;
  locations: JobLocationForForm[];
}) {
  const [state, formAction] = useActionState(saveJobAction, initialState);

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-lg border bg-white p-6 text-neutral-900"
    >
      <input type="hidden" name="id" value={job._id} />
      <input type="hidden" name="slug" value={job.slug} />

      <div className="space-y-1">
        <label className="text-sm font-medium">Title</label>
        <input
          name="title"
          defaultValue={job.title}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          required
        />
        {state.fieldErrors?.title && (
          <p className="text-xs text-red-600">{state.fieldErrors.title[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <JobLocationSelector
          locations={locations}
          selectedLocationIds={(job.locations || []).map((l) => l._id)}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium">Job type</label>
          <select
            name="jobType"
            defaultValue={job.jobType}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
            required
          >
            <option value="">Select type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium">Experience level</label>
          <select
            name="experienceLevel"
            defaultValue={job.experienceLevel}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
            required
          >
            <option value="">Select level</option>
            <option value="Entry (0-3 years)">Entry (0-3 years)</option>
            <option value="Mid (3-7 years)">Mid (3-7 years)</option>
            <option value="Senior (7+ years)">Senior (7+ years)</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Snippet</label>
        <textarea
          name="snippet"
          defaultValue={job.snippet}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          rows={3}
          required
        />
        {state.fieldErrors?.snippet && (
          <p className="text-xs text-red-600">{state.fieldErrors.snippet[0]}</p>
        )}
      </div>

      <JobMarkdownEditor defaultValue={job.descriptionMarkdown || ""} />
      {state.fieldErrors?.descriptionMarkdown && (
        <p className="text-xs text-red-600">
          {state.fieldErrors.descriptionMarkdown[0]}
        </p>
      )}

      <div className="space-y-1">
        <label className="text-sm font-medium">
          Application email (optional)
        </label>
        <input
          name="applicationEmail"
          defaultValue={job.applicationEmail || ""}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          type="email"
        />
        {state.fieldErrors?.applicationEmail && (
          <p className="text-xs text-red-600">
            {state.fieldErrors.applicationEmail[0]}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          id="isActive"
          name="isActive"
          type="checkbox"
          defaultChecked={job.isActive}
          className="h-4 w-4 rounded border border-neutral-300"
        />
        <label htmlFor="isActive" className="text-sm">
          Active
        </label>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}


