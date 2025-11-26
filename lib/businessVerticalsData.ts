import { GraduationCap, LucideIcon } from "lucide-react";

export interface TrainingCategory {
  title: string;
  description: string;
  topics: string[];
  whyItMatters: string;
  iconName: string; // Icon name as string for serialization
}

export interface DeliveryModel {
  title: string;
  description?: string;
}

export interface BusinessVerticalDetail {
  id: string;
  title: string;
  tagline: string;
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
  categories: TrainingCategory[];
  whyChoose: {
    title: string;
    reasons: string[];
  };
  deliveryModels: DeliveryModel[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  finalCTA: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const BUSINESS_VERTICALS_DATA: BusinessVerticalDetail[] = [
  {
    id: "corporate-training",
    title: "Corporate Training",
    tagline: "Empower Your Workforce with Future-Ready Skills",
    description: [
      "Modern enterprises need a workforce that can adopt new technologies fast, adapt to changing market dynamics, and deliver innovation at scale.",
      "At aiCloudHub, we deliver corporate technology training programs designed for today's digital-first organizations. Our training programs are highly practical, industry-aligned, hands-on, and created by experts with real-world implementation experience across all major technology domains.",
      "We help teams upgrade their skills so businesses can accelerate transformation with confidence.",
    ],
    Icon: GraduationCap,
    image: "/ServiceSectionImages/Services-Corporate-Training.png",
    heroTitle: "Corporate Training by aiCloudHub",
    heroDescription:
      "Empowering Teams. Transforming Capabilities. Accelerating Digital Success. Build future-ready teams with hands-on, industry-aligned training programs created by practitioners with real-world experience.",
    heroImage: "/ServiceSectionImages/ServicePage_Training.webp",
    heroCTA: {
      primary: "Request a Training Proposal",
      secondary: "Explore Training Categories",
    },
    categories: [
      {
        title: "AI, Generative AI & Data Science Training",
        description:
          "Build future-ready teams capable of leveraging data and artificial intelligence to drive business value.",
        topics: [
          "Generative AI & LLMs: ChatGPT (Beginner to Advanced), Prompt Engineering, Agentic AI, GenAI",
          "Machine Learning: Machine Learning Fundamentals, Graphical Models, Reinforcement Learning, MLOps",
          "Data Engineering & Analytics: Data Science Masters (Python/R), Advanced Python for Data Analytics, Predictive Modeling, Data Engineering",
          "Specialized AI: AI in Supply Chain Management",
        ],
        whyItMatters:
          "AI is your greatest differentiator. We ensure your teams can build, deploy, and manage intelligent solutions at scale.",
        iconName: "BrainCircuit",
      },
      {
        title: "Cloud & Infrastructure Training",
        description:
          "Upskill teams to build, migrate, and operate robust, cloud-native solutions across major hyperscalers.",
        topics: [
          "Microsoft Azure: AZ-900 (Fundamentals), AZ-104 (Admin), AZ-305 (Architect Expert), Azure Security (AZ-500), Azure Data Engineer (DP-203), Azure IoT Developer",
          "Amazon Web Services (AWS): Cloud Practitioner, Solutions Architect, AWS Developer, AWS SysOps Administrator, AWS Security, AWS Advanced Networking",
          "Google Cloud (GCP): GCP Fundamentals, GCP Core Infrastructure, Professional Cloud Architect, Data Engineering on Google Cloud Platform",
          "Cloud Infrastructure: Mirantis Kubernetes Engine (MKE), OpenStack Administration, Docker, Kubernetes Administrator",
        ],
        whyItMatters:
          "Skilled cloud teams are essential for cost optimization, enhanced security, global scale, and business agility.",
        iconName: "CloudCog",
      },
      {
        title: "DevOps, Automation & Modern Engineering",
        description:
          "Equip your workforce with modern engineering practices that accelerate development cycles and improve collaboration.",
        topics: [
          "DevOps Engineer & DevSecOps Implementation",
          "CI/CD Tools (Jenkins, GitHub Actions, Azure DevOps)",
          "Containerization & Orchestration (Kubernetes, Docker)",
          "Infrastructure-as-Code (Ansible, Git, Version Control)",
          "Full Stack Development (ReactJS, Angular, Java, .Net Core)",
        ],
        whyItMatters:
          "Adopting a DevOps culture is proven to improve productivity, software quality, and release velocity by automating the entire SDLC.",
        iconName: "GitBranch",
      },
      {
        title: "Cyber Security & Governance",
        description:
          "Train security personnel and IT teams to proactively manage risks, detect threats, and ensure regulatory compliance.",
        topics: [
          "Certification Prep: CISSP, CompTIA Security, Certified Ethical Hacker (CEH), Certified SOC Analyst (CSA), Certified Network Defender (CND)",
          "Cyber Defense: Ethical Hacking Core Skills, Computer Hacking Forensics Investigator (CHFI), Certified Incident Handler (ECIH)",
          "Risk Management: Risk Management Approach and Practices, IOT with Security",
          "Platform Security: Azure Security Engineer (AZ-500), AWS Security",
        ],
        whyItMatters:
          "Security is non-negotiable. Specialized training minimizes breach risk, protects digital assets, and maintains customer trust.",
        iconName: "Shield",
      },
      {
        title: "Agile, Project Management & Professional Skills",
        description:
          "Strengthening leadership capabilities and essential soft skills for technology-driven enterprises and successful project delivery.",
        topics: [
          "Agile & Scrum: Certified Scrum Master (CSM), Certified Scrum Product Owner (CSPO), SAFe, PMI Agile, Professional Scrum Master (PSM-I), Prince 2",
          "Project Management: Project Management Professional (PMP), PMI-RMP, Microsoft Project",
          "Leadership & Communication: Leadership for Managers, Situational Leadership, Time Management & Goal Setting, Emotional Intelligence, Change Management",
          "Business Skills: Design Thinking, Problem Solving & Decision Making, Customer Service Delight, Business Communication Skills",
        ],
        whyItMatters:
          "Successful teams rely on leadership that is aligned, empowered, and equipped with the necessary management and interpersonal skills to deliver complex tech initiatives.",
        iconName: "BookOpen",
      },
    ],
    whyChoose: {
      title: "Why Corporate Training with aiCloudHub?",
      reasons: [
        "Real-world curriculum created by practitioners, not theorists",
        "Hands-on labs, live projects, and simulations",
        "Customized programs tailored for your business needs",
        "Remote, onsite, and hybrid training models",
        "Post-training assessments & certification support for all major vendors",
        "Enterprise-grade learning material & continuous support",
      ],
    },
    deliveryModels: [
      {
        title: "On-Premise Corporate Workshops",
      },
      {
        title: "Virtual Instructor-Led Training (VILT)",
      },
      {
        title: "Hybrid Training Programs",
      },
      {
        title: "Custom Enterprise Upskilling Bootcamps",
      },
      {
        title: "Leadership & Executive Coaching Sessions",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Needs Assessment",
        description:
          "Understand your team's current skill levels, business objectives, and training requirements.",
      },
      {
        step: 2,
        title: "Curriculum Design & Customization",
        description:
          "Create tailored training programs aligned with your industry, technology stack, and learning goals.",
      },
      {
        step: 3,
        title: "Training Delivery",
        description:
          "Execute training through your preferred delivery model with hands-on labs and real-world scenarios.",
      },
      {
        step: 4,
        title: "Assessment & Certification",
        description:
          "Conduct post-training assessments and support certification preparation for major vendor credentials.",
      },
      {
        step: 5,
        title: "Continuous Support & Optimization",
        description:
          "Provide ongoing support, learning resources, and program optimization based on feedback and outcomes.",
      },
    ],
    finalCTA: {
      title:
        "Empower your team. Accelerate transformation. Build tomorrow's capabilities today.",
      description:
        "Contact us to customize a training program for your organization.",
      buttonText: "Request a Training Proposal →",
    },
  },
];

// Helper function to get business vertical by slug
export function getBusinessVerticalBySlug(
  slug: string
): BusinessVerticalDetail | undefined {
  return BUSINESS_VERTICALS_DATA.find((vertical) => vertical.id === slug);
}

// Helper function to get all business vertical slugs
export function getAllBusinessVerticalSlugs(): string[] {
  return BUSINESS_VERTICALS_DATA.map((vertical) => vertical.id);
}
