import { writeClient } from "@/lib/sanity/serverClient";

type SanityDocument = Record<string, unknown> & {
  _type: string;
  _id?: string;
};

type BlogPostInput = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: unknown;
  bodyMarkdown?: string;
  coverAssetId?: string;
  categoryId: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

type JobPostingInput = {
  _id?: string;
  title: string;
  slug: string;
  locationIds: string[];
  jobType: string;
  experienceLevel: string;
  snippet: string;
  descriptionMarkdown?: string;
  isActive: boolean;
  applicationEmail?: string;
};

export async function upsertBlogPost(input: BlogPostInput) {
  const { _id, slug, categoryId, coverAssetId, bodyMarkdown, ...rest } = input;

  const doc: SanityDocument = {
    _type: "blogPost",
    ...rest,
    slug: {
      _type: "slug",
      current: slug,
    },
    category: {
      _type: "reference",
      _ref: categoryId,
    },
  };

  if (typeof bodyMarkdown === "string") {
    doc.bodyMarkdown = bodyMarkdown;
  }

  if (coverAssetId) {
    doc.cover = {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: coverAssetId,
      },
    };
  }

  if (_id) {
    doc._id = _id;
    return writeClient.createOrReplace(doc as SanityDocument & { _id: string });
  }

  return writeClient.create(doc);
}

export async function deleteBlogPost(id: string) {
  return writeClient.delete(id);
}

export async function upsertJobPosting(input: JobPostingInput) {
  const { _id, slug, locationIds, descriptionMarkdown, ...rest } = input;

  const doc: SanityDocument = {
    _type: "jobPosting",
    ...rest,
    slug: {
      _type: "slug",
      current: slug,
    },
    locations: locationIds.map((id) => ({
      _type: "reference",
      _ref: id,
      _key: id,
    })),
  };

  if (typeof descriptionMarkdown === "string") {
    doc.descriptionMarkdown = descriptionMarkdown;
  }

  if (_id) {
    doc._id = _id;
    return writeClient.createOrReplace(doc as SanityDocument & { _id: string });
  }

  return writeClient.create(doc);
}

export async function deleteJobPosting(id: string) {
  return writeClient.delete(id);
}


