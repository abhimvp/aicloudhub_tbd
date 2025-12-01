"use client";

import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const DEFAULT_TEMPLATE = `## Role Overview
Briefly describe the purpose of this role and how it fits into the team.

### Responsibilities
- Lead and own key initiatives...
- Collaborate with cross-functional teams...

### Requirements
- X+ years of relevant experience...
- Strong skills in ...

### Nice to have
- Experience with ...

### What we offer
- Competitive salary and benefits
- Opportunity to work with a high-performing team
`;

interface JobMarkdownEditorProps {
  defaultValue?: string;
}

export function JobMarkdownEditor({ defaultValue }: JobMarkdownEditorProps) {
  const [value, setValue] = useState(defaultValue || DEFAULT_TEMPLATE);

  useEffect(() => {
    if (defaultValue && defaultValue.trim().length > 0) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className="space-y-2" data-color-mode="light">
      <label className="text-sm font-medium block">
        Job Description (Markdown)
      </label>
      <MDEditor
        value={value}
        onChange={(val) => setValue(val || "")}
        height={400}
        textareaProps={{
          name: "descriptionMarkdown",
          required: true,
          style: { display: "none" },
        }}
      />
      {/* Hidden textarea so the markdown content is submitted with the form */}
      <textarea
        name="descriptionMarkdown"
        value={value}
        readOnly
        style={{ display: "none" }}
      />
      <p className="text-xs text-neutral-500">
        Use markdown headings and bullet lists to structure the role overview,
        responsibilities, and requirements.
      </p>
    </div>
  );
}


