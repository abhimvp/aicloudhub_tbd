"use client";

import Image from "next/image";
import { useActionState } from "react";
import { BlogMarkdownEditor } from "@/components/admin/BlogMarkdownEditor";
import {
  saveBlogAction,
  type BlogFormState,
} from "@/app/admin/blogs/actions";
import { BlogCategorySelector } from "@/components/admin/BlogCategorySelector";
import { urlFor } from "@/sanity/lib/image";

const initialState: BlogFormState = {};

type BlogPostForEdit = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyMarkdown?: string;
  cover?: {
    asset?: {
      _id: string;
    };
  };
  date: string;
  readTime: string;
  featured?: boolean;
  categoryId?: string;
};

type BlogCategoryForForm = {
  _id: string;
  name: string;
};

export function BlogFormEdit({
  post,
  categories,
}: {
  post: BlogPostForEdit;
  categories: BlogCategoryForForm[];
}) {
  const [state, formAction] = useActionState(saveBlogAction, initialState);

  const coverImageUrl =
    post?.cover?.asset?._id
      ? urlFor({
          _type: "image",
          asset: { _ref: post.cover.asset._id },
        })
          .width(800)
          .height(450)
          .url()
      : "";

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-lg border bg-white p-6 text-neutral-900"
    >
      <input type="hidden" name="id" value={post._id} />
      {/* Preserve existing slug in a hidden field; clients don't need to edit it */}
      <input type="hidden" name="slug" value={post.slug} />
      {/* Preserve existing cover image if no new file is uploaded */}
      {post.cover?.asset && (
        <input
          type="hidden"
          name="existingCoverId"
          value={post.cover.asset._id}
        />
      )}

      <div className="space-y-1">
        <label className="text-sm font-medium">Title</label>
        <input
          name="title"
          defaultValue={post.title}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          required
        />
        {state.fieldErrors?.title && (
          <p className="text-xs text-red-600">{state.fieldErrors.title[0]}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Excerpt</label>
        <textarea
          name="excerpt"
          defaultValue={post.excerpt}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          rows={3}
          required
        />
        {state.fieldErrors?.excerpt && (
          <p className="text-xs text-red-600">{state.fieldErrors.excerpt[0]}</p>
        )}
      </div>

      <BlogMarkdownEditor defaultValue={post.bodyMarkdown || ""} />
      {state.fieldErrors?.bodyMarkdown && (
        <p className="text-xs text-red-600">
          {state.fieldErrors.bodyMarkdown[0]}
        </p>
      )}

      <BlogCategorySelector
        categories={categories}
        defaultCategoryId={post.categoryId}
      />

      <div className="space-y-2">
        <label className="text-sm font-medium">Cover image</label>

        {coverImageUrl && (
          <div className="flex items-start gap-4 rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-3">
            <div className="relative h-24 w-40 overflow-hidden rounded-md bg-neutral-200">
              <Image
                src={coverImageUrl}
                alt={post.title || "Current cover image"}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-1 text-xs text-neutral-600">
              <p className="font-medium text-neutral-800">Current cover image</p>
              <p>
                This image will stay unless you upload a new one below. You don&apos;t
                need the original file on your computer to keep it.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-1">
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
          />
          <p className="text-xs text-neutral-500">
            Leave empty to keep the current cover image, or upload a new one to replace
            it.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium">Date</label>
          <input
            name="date"
            type="date"
            defaultValue={post.date}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
            required
          />
        </div>
        <div className="flex-1 space-y-1">
          <label className="text-sm font-medium">Read time</label>
          <input
            name="readTime"
            defaultValue={post.readTime}
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
          defaultChecked={post.featured}
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
          Save
        </button>
      </div>
    </form>
  );
}


