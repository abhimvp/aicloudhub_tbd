import { z } from "zod";

export const jobAdminSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  slug: z.string().min(1, "Slug is required."),
  snippet: z
    .string()
    .min(30, "Snippet should be at least 30 characters.")
    .max(300, "Snippet should be at most 300 characters."),
  descriptionMarkdown: z
    .string()
    .min(80, "Description should be at least 80 characters of markdown content."),
  applicationEmail: z
    .string()
    .email("Please provide a valid email address.")
    .optional()
    .or(z.literal("")),
});

export type JobAdminInput = z.infer<typeof jobAdminSchema>;


