import { notFound } from "next/navigation";
import {
  getBusinessVerticalBySlug,
  getAllBusinessVerticalSlugs,
} from "@/lib/businessVerticalsData";
import CorporateTrainingContent from "@/components/layout/CorporateTraining/CorporateTrainingContent";

export async function generateStaticParams() {
  return getAllBusinessVerticalSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata() {
  const vertical = getBusinessVerticalBySlug("corporate-training");

  if (!vertical) {
    return {
      title: "Corporate Training Not Found",
    };
  }

  return {
    title: `${vertical.title} — aiCloudHub`,
    description: vertical.heroDescription,
  };
}

export default async function CorporateTrainingPage() {
  const vertical = getBusinessVerticalBySlug("corporate-training");

  if (!vertical) {
    notFound();
  }

  // Exclude Icon component to prevent serialization error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Icon, ...verticalData } = vertical;

  return <CorporateTrainingContent vertical={verticalData} />;
}
