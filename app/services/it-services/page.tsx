// app/services/it-services/page.tsx
import type { Metadata } from "next";
import ITServicesContent from "@/components/layout/ITServices/ITServicesContent";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Transform your business with cutting-edge cloud, AI, and digital solutions. From ideation to launch, our intelligent solutions accelerate innovation, strengthen security, and drive business excellence.",
  openGraph: {
    title: "IT Services - AI Cloud Hub",
    description:
      "Transform your business with cutting-edge cloud, AI, and digital solutions.",
    type: "website",
  },
};

export default function ITServicesPage() {
  return <ITServicesContent />;
}
