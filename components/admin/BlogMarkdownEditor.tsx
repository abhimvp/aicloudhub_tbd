"use client";

import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

interface BlogMarkdownEditorProps {
  name?: string;
  label?: string;
  defaultValue?: string;
}

export function BlogMarkdownEditor({
  name = "bodyMarkdown",
  label = "Body (Markdown)",
  defaultValue = "",
}: BlogMarkdownEditorProps) {
  const [value, setValue] = React.useState<string>(defaultValue);

  return (
    <div className="space-y-2" data-color-mode="light">
      <label className="text-sm font-medium">{label}</label>
      <div className="border border-neutral-200 rounded-md overflow-hidden bg-white">
        <MDEditor
          value={value}
          onChange={(val) => setValue(val || "")}
          height={400}
        />
      </div>
      <input type="hidden" name={name} value={value} readOnly />
      <p className="text-xs text-neutral-500">
        Write your post in Markdown. Use headings, bullet lists, links, and
        code blocks as needed.
      </p>
    </div>
  );
}


