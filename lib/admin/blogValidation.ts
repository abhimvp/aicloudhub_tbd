import { z } from "zod";

export const blogAdminSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  slug: z.string().min(1, "Slug is required."),
  excerpt: z.string().min(20, "Excerpt should be at least 20 characters."),
  bodyMarkdown: z
    .string()
    .min(50, "Body should be at least 50 characters of markdown content."),
});

export type BlogAdminInput = z.infer<typeof blogAdminSchema>;


