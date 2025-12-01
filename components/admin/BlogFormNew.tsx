"use client";

import { useActionState } from "react";
import { BlogMarkdownEditor } from "@/components/admin/BlogMarkdownEditor";
import {
  saveBlogAction,
  type BlogFormState,
} from "@/app/admin/blogs/actions";
import { BlogCategorySelector } from "@/components/admin/BlogCategorySelector";

const initialState: BlogFormState = {};

type BlogCategoryForForm = {
  _id: string;
  name: string;
};

export function BlogFormNew({ categories }: { categories: BlogCategoryForForm[] }) {
  const [state, formAction] = useActionState(saveBlogAction, initialState);

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-lg border bg-white p-6 text-neutral-900"
    >
      <div className="space-y-1">
        <label className="text-sm font-medium">Title</label>
        <input
          name="title"
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          required
        />
        {state.fieldErrors?.title && (
          <p className="text-xs text-red-600">{state.fieldErrors.title[0]}</p>
        )}
      </div>

      {/* Slug is auto-generated from title; no field needed for new posts */}

      <div className="space-y-1">
        <label className="text-sm font-medium">Excerpt</label>
        <textarea
          name="excerpt"
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          rows={3}
          required
        />
        {state.fieldErrors?.excerpt && (
          <p className="text-xs text-red-600">{state.fieldErrors.excerpt[0]}</p>
        )}
      </div>

      <BlogMarkdownEditor />
      {state.fieldErrors?.bodyMarkdown && (
        <p className="text-xs text-red-600">
          {state.fieldErrors.bodyMarkdown[0]}
        </p>
      )}

      <BlogCategorySelector categories={categories} />

      <div className="space-y-1">
        <label className="text-sm font-medium">Cover image</label>
        <input
          type="file"
          name="coverImage"
          accept="image/*"
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
        />
        <p className="text-xs text-neutral-500">
          Optional: upload a main image for this blog post.
        </p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium">Date</label>
          <input
            name="date"
            type="date"
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
            required
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium">Read time</label>
          <input
            name="readTime"
            defaultValue="5 min read"
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          id="featured"
          name="featured"
          type="checkbox"
          className="h-4 w-4 rounded border"
        />
        <label htmlFor="featured" className="text-sm">
          Featured
        </label>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Create
        </button>
      </div>
    </form>
  );
}


