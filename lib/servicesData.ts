import {
  BrainCircuit,
  CloudCog,
  AppWindow,
  BarChart3,
  LucideIcon,
} from "lucide-react";

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceSolution {
  title: string;
  description: string;
  link?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  Icon: LucideIcon;
  image: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroCTA: {
    primary: string;
    secondary: string;
  };
  offerings: ServiceOffering[];
  capabilities: ServiceCapability[];
  solutions?: ServiceSolution[];
  process: ProcessStep[];
  industries: string[];
  whyChoose: {
    title: string;
    reasons: string[];
    image: string;
  };
  finalCTA: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    subtitle:
      "Harness the power of AI to drive automation, intelligent analytics, and smarter decision-making.",
    description: [
      "Transform your business with intelligent automation, predictive analytics, and data-driven insights.",
      "Our AI solutions empower you to make smarter, faster, and more impactful decisions.",
    ],
    Icon: BrainCircuit,
    image: "/ServiceSectionImages/Services-AI-ML.png",
    heroTitle: "AI-Driven Innovation for Business Growth",
    heroDescription:
      "We transform data into strategic advantage. Our AI & ML services enable enterprises to automate intelligently, make predictive decisions, and drive innovation - with security, scalability, and governance.",
    heroImage: "/AIMLHeroImg.png",
    heroCTA: {
      primary: "Book a Discovery",
      secondary: "Explore Offerings",
    },
    offerings: [
      {
        title: "AI Strategy & Advisory",
        description:
          "Define your AI vision, prioritize use-cases with ROI focus, and establish governance frameworks for compliance and fairness.",
      },
      {
        title: "Generative AI & LLM Applications",
        description:
          "Develop custom or fine-tuned LLMs, build enterprise copilots, and implement RAG-based systems for accurate, grounded responses.",
      },
      {
        title: "Machine Learning & Data Science",
        description:
          "From forecasting to deep learning, we build reproducible model pipelines for NLP, vision, and multimodal applications.",
      },
      {
        title: "Data Labeling & Annotation",
        description:
          "Secure, scalable annotation for text, image, audio, and sensor data — including advanced formats like polygons and LIDAR.",
      },
      {
        title: "Computer Vision & Multimodal",
        description:
          "Image and video analytics, OCR, defect detection, and multimodal embeddings for richer search and insights.",
      },
      {
        title: "MLOps & Productionization",
        description:
          "CI/CD for models, model registry, scalable serving, monitoring, drift detection, and lifecycle automation.",
      },
    ],
    capabilities: [
      {
        title: "Chatbots & Conversational AI",
        description:
          "Omnichannel conversational agents with context, RAG integration and analytics.",
      },
      {
        title: "Semantic Search & Retrieval",
        description:
          "Vector search, knowledge bases, and enterprise search solutions for fast, accurate answers.",
      },
      {
        title: "Autonomous AI Agents",
        description:
          "Agentic workflows that can orchestrate actions, integrate APIs, and automate complex tasks.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Discovery",
        description:
          "Understand objectives, data readiness, and success metrics.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Rapid PoCs to validate value and architecture choices.",
      },
      {
        step: 3,
        title: "Development & Training",
        description:
          "Build robust models and pipelines with reproducibility and test coverage.",
      },
      {
        step: 4,
        title: "Deployment & MLOps",
        description:
          "Production-ready deployment, monitoring, and automated retraining workflows.",
      },
      {
        step: 5,
        title: "Monitoring & Optimization",
        description:
          "Continuous improvements driven by metrics, feedback loops, and drift detection.",
      },
    ],
    industries: [
      "Retail & E-Commerce",
      "Healthcare",
      "Finance",
      "Manufacturing & Supply Chain",
    ],
    whyChoose: {
      title: "Why Choose aicloudhub",
      reasons: [
        "Deep technical expertise across AI, MLOps, and computer vision",
        "Business-first approach ensuring measurable ROI",
        "Secure, scalable deployments across cloud and edge",
        "Responsible AI and governance baked into delivery",
        "End-to-end partnership from strategy to operations",
      ],
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    },
    finalCTA: {
      title: "Ready to unlock AI for your business?",
      description:
        "Schedule a discovery session and explore high-impact AI use cases tailored to your needs.",
      buttonText: "Schedule Discovery →",
    },
  },
  {
    id: "cloud",
    title: "Cloud Services",
    subtitle:
      "Modernize your infrastructure with scalable and secure cloud-native solutions.",
    description: [
      "From migration to management, we help you achieve agility and performance across platforms.",
      "Build a resilient, future-ready foundation with proactive governance and automation.",
    ],
    Icon: CloudCog,
    image: "/ServiceSectionImages/Services-Cloud-Migration.png",
    heroTitle: "Cloud Services for Scalable, Secure Innovation",
    heroDescription:
      "We help enterprises migrate, architect, and manage cloud environments to accelerate business innovation and reduce operational risk.",
    heroImage: "/CloudServicesHeroImg.png",
    heroCTA: {
      primary: "Talk to a Cloud Architect",
      secondary: "Our Services",
    },
    offerings: [
      {
        title: "Cloud Strategy & Advisory",
        description:
          "Readiness assessment, adoption roadmap, cost & risk planning, compliance strategy.",
      },
      {
        title: "Migration & Modernization",
        description:
          "Rehost, refactor, or replatform legacy apps into cloud-native, containerized architecture.",
      },
      {
        title: "Cloud-Native Development",
        description:
          "Serverless, Kubernetes, API-first microservices for resilient, scalable systems.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automated pipelines, blue-green / canary releases, IaC, and infrastructure automation.",
      },
      {
        title: "Managed Cloud Services",
        description:
          "24/7 operations, auto-scaling, cost optimization, disaster recovery, SLAs.",
      },
      {
        title: "Cloud Security & Compliance",
        description:
          "IAM, encryption, compliance (PCI, GDPR, HIPAA), threat monitoring & risk management.",
      },
    ],
    capabilities: [
      {
        title: "Multi-Cloud & Hybrid",
        description:
          "AWS, Azure, GCP, and on-prem integration to tailor environments.",
      },
      {
        title: "Containers & Orchestration",
        description:
          "Kubernetes, Docker, service mesh for resilient, microservice systems.",
      },
      {
        title: "Serverless & IaC",
        description:
          "Serverless APIs and IaC via Terraform / CloudFormation for agility.",
      },
    ],
    solutions: [
      {
        title: "Cloud-Native Platforms",
        description:
          "Develop applications on serverless frameworks or microservices architectures for scale & agility.",
      },
      {
        title: "Hybrid Cloud Solutions",
        description:
          "Seamlessly integrate on-prem systems with public cloud to balance control and innovation.",
      },
      {
        title: "Disaster Recovery & DRaaS",
        description:
          "Design and implement resilient recovery strategies with automated backup and failover.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Assessment",
        description:
          "Evaluate your current infrastructure, workloads, and readiness for cloud.",
      },
      {
        step: 2,
        title: "Design & Architecture",
        description:
          "Define cloud architecture, security, cost models, and migration plans.",
      },
      {
        step: 3,
        title: "Build or Migrate",
        description:
          "Refactor or replatform applications, deploy via IaC, and set up pipelines.",
      },
      {
        step: 4,
        title: "Operate & Monitor",
        description:
          "Manage cloud operations with monitoring, alerts, and 24/7 support.",
      },
      {
        step: 5,
        title: "Optimize & Innovate",
        description:
          "Continuously enhance cost efficiency, performance, and adopt new cloud-native features.",
      },
    ],
    industries: [
      "Financial Services",
      "Retail & E-Commerce",
      "Manufacturing & Logistics",
      "Healthcare",
    ],
    whyChoose: {
      title: "Why Trust aicloudhub for Cloud",
      reasons: [
        "Multi-cloud mastery across AWS, Azure, and Google Cloud",
        "Proven cloud-migration and modernization experience",
        "DevOps-first mindset, automation & CI/CD expertise",
        "Security & compliance integrated from day one",
        "Dedicated managed services to keep you optimized",
      ],
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    },
    finalCTA: {
      title: "Ready to Accelerate Your Cloud Journey?",
      description:
        "Talk with our cloud architects to discuss strategy, migration, or modernization.",
      buttonText: "Get Started →",
    },
  },
  {
    id: "applications",
    title: "Application Services",
    subtitle:
      "Build, modernize, and optimize your business applications for enhanced usability and performance.",
    description: [
      "Our end-to-end engineering services combine agile delivery with modern UI/UX practices.",
      "Ship experiences that feel intuitive, performant, and ready for continuous evolution.",
    ],
    Icon: AppWindow,
    image: "/ServiceSectionImages/Services-IT-Staffing.png",
    heroTitle: "Application Services That Deliver Modern, Scalable Software",
    heroDescription:
      "From product engineering to modernization and managed services, we build resilient, cloud-native applications that drive business outcomes and user delight.",
    heroImage: "/ApplicationServicesHeroImg.png",
    heroCTA: {
      primary: "Talk to Our Architects",
      secondary: "Explore Services",
    },
    offerings: [
      {
        title: "Product Engineering & Development",
        description:
          "End-to-end product development: UX, microservices, API-first design, and continuous delivery to build market-ready software fast.",
      },
      {
        title: "Application Modernization",
        description:
          "Re-architect monoliths to cloud-native platforms, containerize workloads, and optimize for performance and cost.",
      },
      {
        title: "API & Integration Services",
        description:
          "Design secure APIs, integration layers, and event-driven architectures to connect systems and enable real-time data flows.",
      },
      {
        title: "Cloud-Native Development",
        description:
          "Build resilient applications using Kubernetes, serverless, and managed cloud services for scalability and reliability.",
      },
      {
        title: "Quality Engineering & Testing",
        description:
          "Shift-left testing, automation, performance engineering, and continuous validation to ensure high-quality releases.",
      },
      {
        title: "Managed Application Services",
        description:
          "24/7 support, application monitoring, incident management, and ongoing optimization under SLA-driven models.",
      },
    ],
    capabilities: [
      {
        title: "Microservices & Containers",
        description:
          "Domain-driven design, service meshes, and container orchestration for resilient systems.",
      },
      {
        title: "API Management",
        description:
          "API gateways, security, versioning, and lifecycle management for stable integrations.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automated pipelines, infrastructure as code, and blue-green/canary deployments for safe releases.",
      },
    ],
    solutions: [
      {
        title: "Customer Experience Platforms",
        description:
          "Omnichannel platforms, personalization, CMS integrations, and front-end engineering for superior UX.",
      },
      {
        title: "Digital Commerce & Marketplaces",
        description:
          "Headless commerce, PIM, checkout optimizations, and scalable storefronts backed by robust APIs.",
      },
      {
        title: "Enterprise Portals & Collaboration",
        description:
          "Custom portals, intranets, and collaboration tools that boost productivity and knowledge sharing.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Assessment",
        description:
          "Understand current architecture, user needs, and business objectives.",
      },
      {
        step: 2,
        title: "Architecture & Design",
        description:
          "Design resilient, secure, and cost-effective architectures aligned with cloud strategy.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "Agile development, API-first integration, and automated testing for rapid delivery.",
      },
      {
        step: 4,
        title: "Deploy & Operate",
        description:
          "Production rollout, monitoring, SRE practices, and incident response.",
      },
      {
        step: 5,
        title: "Optimize & Evolve",
        description:
          "Continuous performance tuning, feature iteration, and platform evolution to meet changing needs.",
      },
    ],
    industries: [
      "Retail & E-Commerce",
      "Financial Services",
      "Healthcare",
      "Logistics & Supply Chain",
    ],
    whyChoose: {
      title: "Why Partner with aicloudhub",
      reasons: [
        "End-to-end engineering capability from UX to Cloud",
        "Proven track record in application modernization",
        "Robust QA and automation for reliable releases",
        "Cloud-native expertise across AWS, Azure, and GCP",
        "Flexible engagement and managed services options",
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    finalCTA: {
      title: "Ready to build resilient, user-centric applications?",
      description:
        "Connect with our engineering leaders to discuss architecture, modernization, or a pilot project.",
      buttonText: "Connect with a Architect →",
    },
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    subtitle:
      "Convert your enterprise data into actionable insights for strategic growth.",
    description: [
      "We design analytics frameworks that uncover patterns, trends, and real-time intelligence.",
      "Empower teams with trusted dashboards, governed pipelines, and decision-ready data.",
    ],
    Icon: BarChart3,
    image: "/ServiceSectionImages/Services-DE-Analytics.png",
    heroTitle: "Data & Analytics Services",
    heroDescription:
      "Turning raw data into real business value with modern data engineering, analytics, and intelligent insights.",
    heroImage: "/DataAnalyticsHeroImg.png",
    heroCTA: {
      primary: "Get in Touch",
      secondary: "Explore Services",
    },
    offerings: [
      {
        title: "Modern Data Engineering",
        description:
          "Build reliable, scalable, and automated data pipelines using cloud-native and hybrid platforms. Enable seamless data integration across your enterprise.",
      },
      {
        title: "Data Warehousing & Lakehouse",
        description:
          "Implement high-performance cloud data warehouses and lakehouse architectures to unify structured and unstructured data for analytics.",
      },
      {
        title: "Business Intelligence & Dashboards",
        description:
          "Create rich, interactive dashboards and analytical reports to empower decision-makers with real-time insights.",
      },
      {
        title: "Advanced Analytics & Predictive Modeling",
        description:
          "Use machine learning, statistical modeling, and forecasting to uncover patterns and drive proactive business decisions.",
      },
      {
        title: "Data Governance & Quality",
        description:
          "Establish governance frameworks, data catalogs, lineage, and quality checks to ensure trustworthy and compliant data.",
      },
      {
        title: "Cloud Data Migration",
        description:
          "Seamlessly migrate on-premise data systems to cloud platforms like AWS, Azure, or GCP with zero downtime and high accuracy.",
      },
    ],
    capabilities: [
      {
        title: "Certified Cloud & Data Experts",
        description:
          "A team of experienced Data Engineers, Architects, and BI specialists.",
      },
      {
        title: "Modern Scalable Architectures",
        description:
          "We design solutions that scale as your data and business grows.",
      },
      {
        title: "End-to-End Implementation",
        description:
          "From ingestion to insights—we deliver full lifecycle support.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Assessment",
        description:
          "Understand your data landscape, business goals, and analytics maturity.",
      },
      {
        step: 2,
        title: "Architecture Design",
        description:
          "Design scalable data platforms with governance, security, and performance in mind.",
      },
      {
        step: 3,
        title: "Build & Integrate",
        description:
          "Develop pipelines, warehouses, and dashboards with automated testing and validation.",
      },
      {
        step: 4,
        title: "Deploy & Enable",
        description:
          "Roll out analytics solutions and train teams for self-service insights.",
      },
      {
        step: 5,
        title: "Monitor & Optimize",
        description:
          "Continuous improvement of pipelines, models, and dashboards based on feedback and performance.",
      },
    ],
    industries: [
      "Retail & E-Commerce",
      "Financial Services",
      "Healthcare",
      "Manufacturing & Logistics",
    ],
    whyChoose: {
      title: "Why Choose aicloudhub?",
      reasons: [
        "Certified Cloud & Data Experts with proven track record",
        "Modern Scalable Architectures that grow with your business",
        "End-to-End Implementation from data ingestion to insights",
        "Strong focus on Data Governance and Quality",
        "Experience across AWS, Azure, GCP, and hybrid environments",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    finalCTA: {
      title: "Ready to Become a Data‑Driven Enterprise?",
      description:
        "Let's help you unlock insights, accelerate innovation, and drive measurable business results.",
      buttonText: "Get in Touch →",
    },
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.id === slug);
}

// Helper function to get all service slugs (for static generation)
export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((service) => service.id);
}
