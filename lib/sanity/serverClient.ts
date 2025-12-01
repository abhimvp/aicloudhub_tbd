import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  // We silently allow this in development so the app can still run
  if (process.env.NODE_ENV === "production") {
    console.warn(
      "SANITY_API_WRITE_TOKEN is not set. Admin CRUD operations will fail in production."
    );
  }
}

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "published",
});


