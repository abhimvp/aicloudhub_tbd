// lib/constants.ts
export const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Trainings", href: "/services/corporate-training" },
  { name: "About Us", href: "/about-us" },
  { name: "Resources", href: "/blogs" },
];

// Main Business Verticals
export const BusinessVerticals = [
  {
    title: "IT Services",
    tagline: "Innovative Technology Solutions for Modern Business",
    description: "Transform your business with cutting-edge cloud, AI, and digital solutions",
    image: "/categories-AI-ML.jpg",
    href: "/services/it-services",
    subServices: [
      {
        title: "AI & ML",
        description: "Build intelligent systems that learn, adapt, and innovate.",
        image: "/categories-AI-ML.jpg",
      },
      {
        title: "Cloud Computing",
        description: "Design and deploy scalable solutions across AWS, Azure, and GCP.",
        image: "/categories-cloud-computing.jpg",
      },
      {
        title: "Cyber Security",
        description: "Protect digital ecosystems with advanced security expertise.",
        image: "/categories-cyber-security.jpg",
      },
      {
        title: "DevOps Engineering",
        description: "Automate, integrate, and accelerate software delivery.",
        image: "/categories-devops.jpg",
      },
    ],
  },
  {
    title: "Corporate Training",
    tagline: "Empower Your Workforce with Future-Ready Skills",
    description: "Upskill your teams with industry-leading training programs",
    image: "/categories-cloud-computing.jpg",
    href: "/services/corporate-training",
    subServices: [
      {
        title: "AI & ML Training",
        description: "Master artificial intelligence and machine learning technologies.",
        image: "/categories-AI-ML.jpg",
      },
      {
        title: "Cloud Training",
        description: "Learn cloud platforms and modern infrastructure management.",
        image: "/categories-cloud-computing.jpg",
      },
      {
        title: "Security Training",
        description: "Develop expertise in cybersecurity and threat protection.",
        image: "/categories-cyber-security.jpg",
      },
      {
        title: "DevOps Training",
        description: "Build skills in automation and continuous delivery.",
        image: "/categories-devops.jpg",
      },
    ],
  },
  {
    title: "Staffing",
    tagline: "Connect with Top-Tier Tech Talent",
    description: "Find the perfect talent to accelerate your digital transformation",
    image: "/categories-devops.jpg",
    href: "/services/staffing",
    subServices: [
      {
        title: "Staff Augmentation",
        description: "Extend your team with skilled technology professionals on-demand.",
        image: "/categories-AI-ML.jpg",
      },
      {
        title: "Permanent Placement",
        description: "Find and hire full-time talent for your long-term growth.",
        image: "/categories-cloud-computing.jpg",
      },
      {
        title: "Contract Staffing",
        description: "Flexible staffing solutions for project-based needs.",
        image: "/categories-cyber-security.jpg",
      },
      {
        title: "Executive Search",
        description: "Connect with senior leadership and C-level technology talent.",
        image: "/categories-devops.jpg",
      },
    ],
  },
];

// Legacy - kept for backwards compatibility (can be removed later)
export const TopCategories = [
  {
    title: "AI & ML",
    description: "Build intelligent systems that learn, adapt, and innovate.",
    image: "/categories-AI-ML.jpg",
  },
  {
    title: "Cloud Computing",
    description:
      " Design and deploy scalable solutions across AWS, Azure, and GCP.",
    image: "/categories-cloud-computing.jpg",
  },
  {
    title: "Cyber Security",
    description: "Protect digital ecosystems with advanced security expertise.",
    image: "/categories-cyber-security.jpg",
  },
  {
    title: "DevOps Engineering",
    description: "Automate, integrate, and accelerate software delivery.",
    image: "/categories-devops.jpg",
  },
];

export const stickyCardData = [
  {
    index: "01",
    title: "Innovative Solutions",
    description:
      "Cutting-edge AI and cloud technologies tailored to your business needs.",
    image: "/categories-AI-ML.jpg",
  },
  {
    index: "02",
    title: "Expert Team",
    description:
      "A team of seasoned professionals with deep expertise in AI and cloud technologies.",
    image: "/categories-cloud-computing.jpg",
  },
  {
    index: "03",
    title: "Customer-Centric Approach",
    description:
      "We prioritize your needs and tailor our solutions to ensure maximum satisfaction.",
    image: "/categories-cyber-security.jpg",
  },
  {
    index: "04",
    title: "End-to-End Services",
    description:
      "From consultation to deployment and support, we cover the entire project lifecycle.",
    image: "/categories-devops.jpg",
  },
];

export const mockBlogPosts = [
  {
    id: 1,
    title: "How to scale serverless",
    excerpt: "Tips for scaling AWS Lambda",
    cover: "/categories-AI-ML.jpg",
    date: "2025-10-01",
    slug: "scale-serverless",
  },
  {
    id: 2,
    title: "Terraform best practices",
    excerpt: "State management & modules",
    cover: "/categories-devops.jpg",
    date: "2025-09-20",
    slug: "terraform-best",
  },
  {
    id: 3,
    title: "Intro to LangGraph",
    excerpt: "Graph-based LLM orchestration",
    cover: "/categories-cloud-computing.jpg",
    date: "2025-09-05",
    slug: "langgraph-intro",
  },
  {
    id: 4,
    title: "Observability with Splunk",
    excerpt: "Getting useful metrics quick",
    cover: "/categories-cyber-security.jpg",
    date: "2025-08-21",
    slug: "splunk-observability",
  },
];

export const clientLogos = [
  // Top Row - Global Giants (instantly recognizable logos)
  { name: "Microsoft", logo: "/client logos/Microsoft_logo.png", scale: 1.0 },
  { name: "Amazon", logo: "/client logos/Amazon_logo.svg.png", scale: 1.0 },
  { name: "Salesforce", logo: "/client logos/Salesforce.com_logo.svg.webp", scale: 1.3 },
  { name: "Volvo", logo: "/client logos/volvo-logo.png", scale: 1.7 },
  
  // Second Row - Strong Mid-Tier & Industry Leaders
  {
    name: "Abbott Laboratories",
    logo: "/client logos/Abbott_Laboratories_logo.svg.png",
    scale: 1.0,
  },
  { name: "LTIMindtree", logo: "/client logos/Mindtree_logo.webp", scale: 1.0 },
  { name: "Altimetrik", logo: "/client logos/Altimetrik_logo.png", scale: 1.0 },
  { name: "Apexon", logo: "/client logos/Apexon_logo.avif", scale: 1.7 },
  { name: "Ariel Partners", logo: "/client logos/Ariel_partners_logo.png", scale: 1.0 },
  
  // Third Row - Specialized / Niche / Staffing Partners
  { name: "Critical River", logo: "/client logos/CriticalRiver_logo.png", scale: 1.0 },
  {
    name: "Quadrant Technologies",
    logo: "/client logos/Quadrant Technologies_Logo.png",
    scale: 1.0,
  },
  { name: "ALKU", logo: "/client logos/ALKU_Logo.png", scale: 1.0 },
  {
    name: "Rivi Consulting Group",
    logo: "/client logos/Rivi_consulting_Group_logo.png",
    scale: 1.4,
  },
  { name: "Symbio", logo: "/client logos/Symbio_logo.png", scale: 1.0 },
  { name: "TechOrbit Inc", logo: "/client logos/Techorbit inc_logo.jpeg", scale: 1.7 },
  { name: "BigLynx", logo: "/client logos/Biglynx_logo.png", scale: 2.0 },
  {
    name: "Global IT Solutions",
    logo: "/client logos/global_it_solutions_logo.jpeg",
    scale: 1.5,
  },
  { name: "OQPoint", logo: "/client logos/oqpoint_logo.jpeg", scale: 1.5 },
  { name: "CSL Behring", logo: "/client logos/csl-behring-logo.png", scale: 1.5 },
];

export const servicesData = [
  [
    {
      title: "AI & Machine Learning",
      description:
        "We help enterprises unlock the power of AI by building secure, scalable, and business-ready solutions.",
      points: [
        "Custom ML models & MLOps pipelines",
        "NLP & chatbots",
        "Recommendation engines & forecasting",
        "Responsible AI frameworks",
      ],
      outcome: "A production-ready AI system with monitoring & measurable ROI.",
      icon: "/icons/ai.png", // Replace with your preferred small illustration
    },
    {
      title: "Cloud Strategy & Migration",
      description:
        "Our cloud experts design tailored strategies that reduce costs, minimize risks, and accelerate innovation.",
      points: [
        "Cloud assessment, migration & modernization",
        "IaC & automation (Terraform, ARM)",
        "Security & compliance integration",
        "Disaster recovery & cost optimization",
      ],
      outcome: "A secure, high-performing cloud environment.",
      icon: "/icons/cloud.png",
    },
  ],
  [
    {
      title: "DevOps & Automation",
      description:
        "We enable faster, reliable software delivery by embedding automation across pipelines.",
      points: [
        "CI/CD & GitOps frameworks",
        "Automated testing & dashboards",
        "Infrastructure as Code",
        "Platform engineering",
      ],
      outcome: "Streamlined releases & improved developer productivity.",
      icon: "/icons/devops.png",
    },
    {
      title: "Data Engineering & Analytics",
      description:
        "We help you harness your data effectively with solutions covering ingestion, governance & analytics.",
      points: [
        "Data lakehouse & warehouse design",
        "Scalable ETL/ELT pipelines",
        "Feature engineering for ML",
        "BI dashboards",
      ],
      outcome: "Reliable data pipelines for smarter decisions.",
      icon: "/icons/data.png",
    },
  ],
  [
    {
      title: "Managed Infrastructure (24/7)",
      description:
        "We take care of your IT backbone with proactive monitoring, patching, and incident response.",
      points: [
        "24×7 monitoring & incident management",
        "Automated patching & remediation",
        "Backup & disaster recovery",
        "SLA-driven reporting",
      ],
      outcome: "A resilient IT infrastructure with clear SLAs.",
      icon: "/icons/infrastructure.png",
    },
    {
      title: "Cybersecurity & Compliance",
      description:
        "We strengthen defenses with end-to-end cybersecurity and compliance readiness.",
      points: [
        "Security posture assessment",
        "Threat detection & penetration testing",
        "SOC2 / ISO27001 readiness",
        "Secure SDLC practices",
      ],
      outcome: "A security-first IT environment.",
      icon: "/icons/security.png",
    },
  ],
  [
    {
      title: "Talent & Staffing Solutions",
      description:
        "We provide on-demand access to skilled professionals across cloud, data, AI, and security.",
      points: [
        "Permanent & contract staffing",
        "Verified professionals",
        "Managed project teams",
        "Flexible engagement models",
      ],
      outcome: "The right talent at the right time.",
      icon: "/icons/talent.png",
    },
    {
      title: "Corporate Training (AI/ML)",
      description:
        "We deliver role-based corporate training programs that ensure your workforce is future-ready.",
      points: [
        "Executive workshops & bootcamps",
        "Hands-on labs with case studies",
        "Data science & MLOps tracks",
        "Certification programs",
      ],
      outcome: "A skilled workforce ready for AI-led transformation.",
      icon: "/icons/training.png",
    },
  ],
];
