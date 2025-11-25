import {
  AppWindow,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  GraduationCap,
  UserCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type HomepageServiceSummary = {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  Icon: LucideIcon;
  image: string;
  cta: {
    label: string;
    href: string;
  };
};

export const HOMEPAGE_SERVICE_SUMMARIES: Record<
  string,
  HomepageServiceSummary
> = {
  "ai-ml": {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle:
      "Harness the power of AI to drive automation, intelligent analytics, and smarter decision-making.",
    description: [
      "Transform your business with intelligent automation, predictive analytics, and data-driven insights.",
      "Our AI solutions empower you to make smarter, faster, and more impactful decisions.",
    ],
    Icon: BrainCircuit,
    image: "/HeroSectionAIML.webp",
    cta: {
      label: "Explore AI Services →",
      href: "/services/ai-ml",
    },
  },
  cloud: {
    id: "cloud",
    title: "Cloud Services",
    subtitle:
      "Modernize your infrastructure with scalable and secure cloud-native solutions.",
    description: [
      "From migration to management, we help you achieve agility and performance across platforms.",
      "Build a resilient, future-ready foundation with proactive governance and automation.",
    ],
    Icon: CloudCog,
    image: "/HeroSectionCloud.webp",
    cta: {
      label: "See Cloud Capabilities →",
      href: "/services/cloud",
    },
  },
  applications: {
    id: "applications",
    title: "Application Services",
    subtitle:
      "Build, modernize, and optimize your business applications for enhanced usability and performance.",
    description: [
      "Our end-to-end engineering services combine agile delivery with modern UI/UX practices.",
      "Ship experiences that feel intuitive, performant, and ready for continuous evolution.",
    ],
    Icon: AppWindow,
    image: "/HeroSectionApplications.webp",
    cta: {
      label: "Modernize Apps →",
      href: "/services/applications",
    },
  },
  "data-analytics": {
    id: "data-analytics",
    title: "Data & Analytics",
    subtitle:
      "Convert your enterprise data into actionable insights for strategic growth.",
    description: [
      "We design analytics frameworks that uncover patterns, trends, and real-time intelligence.",
      "Empower teams with trusted dashboards, governed pipelines, and decision-ready data.",
    ],
    Icon: BarChart3,
    image: "/HeroSectionDataAnalytics.webp",
    cta: {
      label: "Unlock Insights →",
      href: "/services/data-analytics",
    },
  },
  staffing: {
    id: "staffing",
    title: "IT Staffing",
    subtitle:
      "Access top-tier tech talent to accelerate your digital transformation journey.",
    description: [
      "Scale your teams with skilled professionals across AI, Cloud, Development, and Data domains.",
      "Our IT staffing solutions provide flexible, vetted talent to meet your project demands and strategic goals.",
    ],
    Icon: UserCheck,
    image: "/HeroSectionITStaffing.webp",
    cta: {
      label: "Find Talent →",
      href: "/services/staffing",
    },
  },
  "corporate-training": {
    id: "corporate-training",
    title: "Corporate Training",
    subtitle: "Empower Your Workforce with Future-Ready Skills",
    description: [
      "Modern enterprises need teams who can adopt new technologies fast and deliver innovation at scale.",
      "Our practitioner-led programs combine hands-on labs, live projects, and tailored curricula for your business.",
    ],
    Icon: GraduationCap,
    image: "/HeroSectionCorporateTraining.webp",
    cta: {
      label: "Explore Trainings →",
      href: "/services/corporate-training",
    },
  },
  "it-services": {
    id: "it-services",
    title: "IT Services",
    subtitle: "Innovative Technology Solutions for Modern Business",
    description: [
      "End-to-end modernization, application engineering, and managed services that align technology investments with measurable business outcomes.",
      "From cloud-native platforms to secure operations, we deliver future-ready software, automation, and 24/7 support built for growth.",
    ],
    Icon: BriefcaseBusiness,
    image: "/HeroSectionITServices.webp",
    cta: {
      label: "Discover IT Services →",
      href: "/services/it-services",
    },
  },
};
