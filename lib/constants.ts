// lib/constants.ts
export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

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
  {
    name: "Abbott Laboratories",
    logo: "/client logos/Abbott_Laboratories_logo.svg.png",
  },
  { name: "ALKU", logo: "/client logos/ALKU_Logo.png" },
  { name: "Altimetrik", logo: "/client logos/Altimetrik_logo.png" },
  { name: "Amazon", logo: "/client logos/Amazon_logo.svg.png" },
  { name: "Apexon", logo: "/client logos/Apexon_logo.avif" },
  { name: "Ariel Partners", logo: "/client logos/Ariel_partners_logo.png" },
  { name: "BigLynx", logo: "/client logos/Biglynx_logo.png" },
  { name: "Critical River", logo: "/client logos/CriticalRiver_logo.png" },
  { name: "CSL Behring", logo: "/client logos/csl-behring-logo.png" },
  {
    name: "Global IT Solutions",
    logo: "/client logos/global_it_solutions_logo.jpeg",
  },
  { name: "Microsoft", logo: "/client logos/microsoft-logo.webp" },
  { name: "Microsoft", logo: "/client logos/Microsoft_logo.png" },
  { name: "Mindtree", logo: "/client logos/Mindtree_logo.webp" },
  { name: "OQPoint", logo: "/client logos/oqpoint_logo.jpeg" },
  {
    name: "Quadrant Technologies",
    logo: "/client logos/Quadrant Technologies_Logo.png",
  },
  {
    name: "Rivi Consulting Group",
    logo: "/client logos/Rivi_consulting_Group_logo.png",
  },
  { name: "Salesforce", logo: "/client logos/Salesforce.com_logo.svg.webp" },
  { name: "Symbio", logo: "/client logos/Symbio_logo.png" },
  { name: "TechOrbit Inc", logo: "/client logos/Techorbit inc_logo.jpeg" },
  { name: "Volvo", logo: "/client logos/volvo-logo.png" },
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
