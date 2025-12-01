"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import {
  createBlogCategoryAction,
  type CategoryFormState,
} from "@/app/admin/blogs/actions";

interface BlogCategorySelectorProps {
  categories: { _id: string; name: string }[];
  defaultCategoryId?: string;
}

const initialCategoryState: CategoryFormState = {};

export function BlogCategorySelector({
  categories: initialCategories,
  defaultCategoryId,
}: BlogCategorySelectorProps) {
  const [categories, setCategories] = useState(initialCategories);
  const [selectedId, setSelectedId] = useState<string>(
    defaultCategoryId || initialCategories[0]?._id || ""
  );
  const [showNew, setShowNew] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isPending, startTransition] = useTransition();

  const [state, formAction] = useActionState(
    createBlogCategoryAction,
    initialCategoryState
  );

  useEffect(() => {
    if (state.category) {
      // Append new category and select it
      setCategories((prev) => [...prev, state.category!]);
      setSelectedId(state.category._id);
      setShowNew(false);
    }
  }, [state.category]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Category</label>
        <button
          type="button"
          onClick={() => setShowNew((v) => !v)}
          className="text-xs text-orange-600 hover:text-orange-700 underline-offset-4 hover:underline"
        >
          {showNew ? "Cancel new category" : "+ New category"}
        </button>
      </div>

      <select
        name="categoryId"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
        required
      >
        <option value="">Select category</option>
        {categories.map((c) => (
          <option key={c._id} value={c._id}>
            {c.name}
          </option>
        ))}
      </select>

      {showNew && (
        <div className="space-y-2 rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-3">
          <div className="space-y-1">
            <label className="text-xs font-medium">New category name</label>
            <input
              name="name"
              className="w-full rounded-md border border-neutral-300 bg-white px-2 py-1 text-xs"
              placeholder="e.g. AI & ML"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              required
            />
            {state.fieldErrors?.name && (
              <p className="text-xs text-red-600">
                {state.fieldErrors.name[0]}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              const formData = new FormData();
              formData.append("name", newCategoryName);
              formData.append("currentCategoryId", selectedId);
              startTransition(() => {
                formAction(formData);
              });
            }}
            disabled={isPending}
            className="rounded-md bg-black px-3 py-1 text-xs font-semibold text-white disabled:opacity-60"
          >
            {isPending ? "Adding..." : "Add category"}
          </button>
        </div>
      )}
    </div>
  );
}


