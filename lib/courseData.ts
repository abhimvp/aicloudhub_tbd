// lib/courseData.ts

export interface Course {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Expert";
  duration: string;
  modules: number;
  students: number;
  rating: number;
  price: number;
  instructor: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  syllabus: {
    module: string;
    topics: string[];
  }[];
  skills: string[];
  requirements: string[];
  featured?: boolean;
  releaseDate: string;
}

export const courseCategories = [
  "All",
  "AI & ML",
  "Cloud Computing",
  "Cyber Security",
  "DevOps",
];

export const courseLevels = ["All", "Beginner", "Intermediate", "Expert"];

export const courses: Course[] = [
  // AI & ML Courses
  {
    id: 1,
    slug: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    shortDescription:
      "Master the foundations of ML with hands-on projects and real-world applications",
    description:
      "Dive deep into the world of Machine Learning with this comprehensive course. Learn essential algorithms, data preprocessing, model evaluation, and deployment strategies. Build real-world projects including image classification, sentiment analysis, and predictive models.",
    thumbnail: "/categories-AI-ML.jpg",
    category: "AI & ML",
    level: "Beginner",
    duration: "10 weeks",
    modules: 12,
    students: 2450,
    rating: 4.8,
    price: 499,
    instructor: {
      name: "Dr. Sarah Mitchell",
      avatar: "/categories-AI-ML.jpg",
      role: "ML Research Scientist",
      bio: "Former Google AI researcher with 10+ years of experience in machine learning and deep learning. Published author and international speaker.",
    },
    syllabus: [
      {
        module: "Introduction to Machine Learning",
        topics: [
          "What is Machine Learning?",
          "Types of ML: Supervised, Unsupervised, Reinforcement",
          "ML Workflow and Best Practices",
          "Setting up your ML Environment",
        ],
      },
      {
        module: "Data Preprocessing & Feature Engineering",
        topics: [
          "Data Cleaning and Handling Missing Values",
          "Feature Scaling and Normalization",
          "Encoding Categorical Variables",
          "Feature Selection Techniques",
        ],
      },
      {
        module: "Supervised Learning Algorithms",
        topics: [
          "Linear and Logistic Regression",
          "Decision Trees and Random Forests",
          "Support Vector Machines",
          "Naive Bayes Classifier",
        ],
      },
      {
        module: "Model Evaluation & Optimization",
        topics: [
          "Train-Test Split and Cross-Validation",
          "Metrics: Accuracy, Precision, Recall, F1-Score",
          "Hyperparameter Tuning",
          "Handling Overfitting and Underfitting",
        ],
      },
      {
        module: "Deep Learning Basics",
        topics: [
          "Neural Networks Architecture",
          "Backpropagation and Gradient Descent",
          "Building Models with TensorFlow/Keras",
          "Convolutional Neural Networks (CNNs)",
        ],
      },
      {
        module: "Real-World ML Projects",
        topics: [
          "Image Classification Project",
          "Sentiment Analysis with NLP",
          "Predictive Modeling for Business",
          "Model Deployment with Flask/FastAPI",
        ],
      },
    ],
    skills: [
      "Python Programming",
      "Scikit-learn",
      "TensorFlow/Keras",
      "Data Analysis",
      "Model Deployment",
    ],
    requirements: [
      "Basic Python programming knowledge",
      "Understanding of basic mathematics",
      "Computer with 8GB+ RAM",
      "Enthusiasm to learn!",
    ],
    featured: true,
    releaseDate: "2025-01-15",
  },
  {
    id: 2,
    slug: "advanced-deep-learning-nlp",
    title: "Advanced Deep Learning & NLP",
    shortDescription:
      "Build state-of-the-art NLP models with transformers, BERT, and GPT architectures",
    description:
      "Take your AI skills to the next level with advanced deep learning and natural language processing. Learn to build transformer models, fine-tune BERT and GPT, create chatbots, and work with large language models. Includes hands-on projects with real datasets.",
    thumbnail: "/categories-AI-ML.jpg",
    category: "AI & ML",
    level: "Expert",
    duration: "12 weeks",
    modules: 15,
    students: 1200,
    rating: 4.9,
    price: 799,
    instructor: {
      name: "Prof. James Chen",
      avatar: "/categories-AI-ML.jpg",
      role: "AI/NLP Expert",
      bio: "Stanford Ph.D. in AI with specialization in NLP. Worked on cutting-edge transformer models at OpenAI and Anthropic.",
    },
    syllabus: [
      {
        module: "Advanced Neural Networks",
        topics: [
          "Recurrent Neural Networks (RNNs)",
          "Long Short-Term Memory (LSTM)",
          "Gated Recurrent Units (GRUs)",
          "Attention Mechanisms",
        ],
      },
      {
        module: "Transformer Architecture",
        topics: [
          "Self-Attention and Multi-Head Attention",
          "Positional Encoding",
          "Encoder-Decoder Architecture",
          "Building Transformers from Scratch",
        ],
      },
      {
        module: "Pre-trained Language Models",
        topics: [
          "BERT and Its Variants",
          "GPT Architecture and Fine-tuning",
          "T5 and Sequence-to-Sequence Models",
          "Transfer Learning in NLP",
        ],
      },
      {
        module: "Advanced NLP Techniques",
        topics: [
          "Named Entity Recognition",
          "Text Summarization",
          "Question Answering Systems",
          "Sentiment Analysis at Scale",
        ],
      },
      {
        module: "Large Language Models",
        topics: [
          "Working with GPT-3/4 API",
          "Prompt Engineering Techniques",
          "Fine-tuning LLMs",
          "RAG (Retrieval Augmented Generation)",
        ],
      },
      {
        module: "Production NLP Systems",
        topics: [
          "Building Chatbots and Virtual Assistants",
          "Deploying NLP Models at Scale",
          "Monitoring Model Performance",
          "Ethics and Bias in AI",
        ],
      },
    ],
    skills: [
      "Deep Learning",
      "NLP",
      "Transformers",
      "PyTorch",
      "Hugging Face",
      "LLM Fine-tuning",
    ],
    requirements: [
      "Strong Python programming skills",
      "Basic ML/Deep Learning knowledge",
      "Understanding of neural networks",
      "Linear algebra and calculus",
    ],
    featured: true,
    releaseDate: "2025-02-01",
  },

  // Cloud Computing Courses
  {
    id: 3,
    slug: "aws-solutions-architect",
    title: "AWS Solutions Architect Professional",
    shortDescription:
      "Master AWS cloud architecture and prepare for the Solutions Architect certification",
    description:
      "Comprehensive AWS training covering compute, storage, networking, databases, and security. Learn to design scalable, highly available systems on AWS. Includes real-world architecture scenarios and certification prep.",
    thumbnail: "/categories-cloud-computing.jpg",
    category: "Cloud Computing",
    level: "Intermediate",
    duration: "8 weeks",
    modules: 10,
    students: 3200,
    rating: 4.7,
    price: 599,
    instructor: {
      name: "Marcus Johnson",
      avatar: "/categories-cloud-computing.jpg",
      role: "AWS Certified Solutions Architect",
      bio: "15+ years in cloud computing. Led cloud migrations for Fortune 500 companies. Multiple AWS certifications.",
    },
    syllabus: [
      {
        module: "AWS Fundamentals",
        topics: [
          "AWS Global Infrastructure",
          "IAM - Identity and Access Management",
          "AWS CLI and SDK Setup",
          "Cost Management and Billing",
        ],
      },
      {
        module: "Compute Services",
        topics: [
          "EC2 - Elastic Compute Cloud",
          "Auto Scaling and Load Balancing",
          "Lambda and Serverless",
          "Container Services (ECS, EKS)",
        ],
      },
      {
        module: "Storage Solutions",
        topics: [
          "S3 - Simple Storage Service",
          "EBS - Elastic Block Store",
          "EFS - Elastic File System",
          "Storage Gateway and Snow Family",
        ],
      },
      {
        module: "Database Services",
        topics: [
          "RDS - Relational Database Service",
          "DynamoDB - NoSQL Database",
          "Aurora and Database Migration",
          "ElastiCache and Redshift",
        ],
      },
      {
        module: "Networking & Content Delivery",
        topics: [
          "VPC - Virtual Private Cloud",
          "Route 53 - DNS Service",
          "CloudFront - CDN",
          "Direct Connect and VPN",
        ],
      },
      {
        module: "Security & Compliance",
        topics: [
          "Security Best Practices",
          "KMS - Key Management Service",
          "CloudTrail and Config",
          "WAF and Shield",
        ],
      },
    ],
    skills: [
      "AWS Architecture",
      "Cloud Security",
      "Serverless",
      "Infrastructure Design",
      "Cost Optimization",
    ],
    requirements: [
      "Basic understanding of cloud concepts",
      "Linux/Unix command line basics",
      "Networking fundamentals",
      "AWS Free Tier account",
    ],
    featured: true,
    releaseDate: "2025-01-20",
  },
  {
    id: 4,
    slug: "multi-cloud-architecture",
    title: "Multi-Cloud Architecture: AWS, Azure & GCP",
    shortDescription:
      "Design and manage applications across multiple cloud platforms",
    description:
      "Learn to architect solutions across AWS, Azure, and Google Cloud Platform. Understand cloud-agnostic design patterns, multi-cloud strategies, and hybrid cloud implementations. Perfect for organizations using multiple cloud providers.",
    thumbnail: "/categories-cloud-computing.jpg",
    category: "Cloud Computing",
    level: "Expert",
    duration: "10 weeks",
    modules: 14,
    students: 1500,
    rating: 4.8,
    price: 899,
    instructor: {
      name: "Lisa Anderson",
      avatar: "/categories-cloud-computing.jpg",
      role: "Multi-Cloud Architect",
      bio: "Cloud architecture consultant with certifications in AWS, Azure, and GCP. Specialized in enterprise multi-cloud strategies.",
    },
    syllabus: [
      {
        module: "Multi-Cloud Fundamentals",
        topics: [
          "Why Multi-Cloud?",
          "Cloud Provider Comparison",
          "Multi-Cloud Strategy Planning",
          "Avoiding Vendor Lock-in",
        ],
      },
      {
        module: "AWS Deep Dive",
        topics: [
          "AWS Core Services Review",
          "AWS-Specific Patterns",
          "AWS Best Practices",
          "AWS Cost Optimization",
        ],
      },
      {
        module: "Azure Fundamentals",
        topics: [
          "Azure Resource Manager",
          "Azure Compute and Storage",
          "Azure Networking",
          "Azure DevOps Integration",
        ],
      },
      {
        module: "Google Cloud Platform",
        topics: [
          "GCP Services Overview",
          "Compute Engine and Cloud Functions",
          "BigQuery and Data Services",
          "Kubernetes on GKE",
        ],
      },
      {
        module: "Cloud-Agnostic Design",
        topics: [
          "Containerization with Docker",
          "Kubernetes for Multi-Cloud",
          "Terraform for Infrastructure",
          "Service Mesh and Istio",
        ],
      },
      {
        module: "Multi-Cloud Governance",
        topics: [
          "Cost Management Across Clouds",
          "Security and Compliance",
          "Monitoring and Observability",
          "Disaster Recovery Strategies",
        ],
      },
    ],
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Terraform",
      "Multi-Cloud Strategy",
    ],
    requirements: [
      "Experience with at least one cloud platform",
      "Strong networking knowledge",
      "Understanding of containerization",
      "DevOps fundamentals",
    ],
    featured: false,
    releaseDate: "2025-02-10",
  },

  // Cyber Security Courses
  {
    id: 5,
    slug: "ethical-hacking-penetration-testing",
    title: "Ethical Hacking & Penetration Testing",
    shortDescription:
      "Learn offensive security techniques and become a certified ethical hacker",
    description:
      "Master the art of ethical hacking with hands-on penetration testing. Learn to identify vulnerabilities, exploit systems ethically, and secure networks. Covers web application security, network penetration testing, and more.",
    thumbnail: "/categories-cyber-security.jpg",
    category: "Cyber Security",
    level: "Intermediate",
    duration: "12 weeks",
    modules: 16,
    students: 2800,
    rating: 4.9,
    price: 699,
    instructor: {
      name: "David Kumar",
      avatar: "/categories-cyber-security.jpg",
      role: "Senior Penetration Tester",
      bio: "Certified Ethical Hacker (CEH) and OSCP holder. 12+ years in cybersecurity and penetration testing for major corporations.",
    },
    syllabus: [
      {
        module: "Introduction to Ethical Hacking",
        topics: [
          "Ethics and Legal Considerations",
          "Hacking Methodology",
          "Setting Up Hacking Lab",
          "Information Gathering Techniques",
        ],
      },
      {
        module: "Scanning & Enumeration",
        topics: [
          "Network Scanning with Nmap",
          "Port Scanning Techniques",
          "Service Enumeration",
          "Vulnerability Scanning",
        ],
      },
      {
        module: "System Hacking",
        topics: [
          "Password Cracking",
          "Privilege Escalation",
          "Maintaining Access",
          "Covering Tracks",
        ],
      },
      {
        module: "Web Application Security",
        topics: [
          "OWASP Top 10 Vulnerabilities",
          "SQL Injection Attacks",
          "Cross-Site Scripting (XSS)",
          "CSRF and Security Misconfigurations",
        ],
      },
      {
        module: "Wireless Network Hacking",
        topics: [
          "WiFi Security Protocols",
          "WEP/WPA/WPA2 Cracking",
          "Evil Twin Attacks",
          "Wireless Penetration Testing",
        ],
      },
      {
        module: "Advanced Topics",
        topics: [
          "Malware Analysis Basics",
          "Social Engineering",
          "Mobile Security Testing",
          "Writing Penetration Test Reports",
        ],
      },
    ],
    skills: [
      "Penetration Testing",
      "Network Security",
      "Web Application Security",
      "Kali Linux",
      "Metasploit",
    ],
    requirements: [
      "Basic networking knowledge",
      "Linux command line familiarity",
      "Understanding of TCP/IP",
      "Virtual machine software (VirtualBox/VMware)",
    ],
    featured: true,
    releaseDate: "2025-01-10",
  },
  {
    id: 6,
    slug: "cybersecurity-for-cloud",
    title: "Cloud Security Architecture & Best Practices",
    shortDescription:
      "Secure cloud infrastructure and applications with industry best practices",
    description:
      "Comprehensive cloud security training covering AWS, Azure, and GCP. Learn to implement security controls, conduct security audits, and ensure compliance in cloud environments. Includes hands-on labs and real-world scenarios.",
    thumbnail: "/categories-cyber-security.jpg",
    category: "Cyber Security",
    level: "Expert",
    duration: "10 weeks",
    modules: 13,
    students: 1800,
    rating: 4.7,
    price: 749,
    instructor: {
      name: "Jennifer Lee",
      avatar: "/categories-cyber-security.jpg",
      role: "Cloud Security Specialist",
      bio: "CISSP and CCSP certified. Former cloud security lead at major tech companies. Expert in zero-trust architecture.",
    },
    syllabus: [
      {
        module: "Cloud Security Fundamentals",
        topics: [
          "Cloud Security Challenges",
          "Shared Responsibility Model",
          "Cloud Security Frameworks",
          "Compliance Requirements",
        ],
      },
      {
        module: "Identity & Access Management",
        topics: [
          "IAM Best Practices",
          "Multi-Factor Authentication",
          "Role-Based Access Control",
          "Identity Federation",
        ],
      },
      {
        module: "Data Protection",
        topics: [
          "Encryption at Rest and in Transit",
          "Key Management Strategies",
          "Data Loss Prevention",
          "Backup and Recovery",
        ],
      },
      {
        module: "Network Security",
        topics: [
          "VPC Security Architecture",
          "Security Groups and NACLs",
          "Web Application Firewalls",
          "DDoS Protection",
        ],
      },
      {
        module: "Security Monitoring",
        topics: [
          "CloudTrail and Logging",
          "SIEM Implementation",
          "Threat Detection",
          "Incident Response",
        ],
      },
      {
        module: "Container & Serverless Security",
        topics: [
          "Docker Security Best Practices",
          "Kubernetes Security",
          "Lambda Security",
          "API Gateway Security",
        ],
      },
    ],
    skills: [
      "Cloud Security",
      "Compliance",
      "Zero Trust Architecture",
      "Threat Detection",
      "Security Auditing",
    ],
    requirements: [
      "Cloud computing experience (AWS/Azure/GCP)",
      "Networking fundamentals",
      "Basic security concepts",
      "Understanding of compliance frameworks",
    ],
    featured: false,
    releaseDate: "2025-02-15",
  },

  // DevOps Courses
  {
    id: 7,
    slug: "devops-bootcamp-ci-cd",
    title: "Complete DevOps Bootcamp with CI/CD",
    shortDescription:
      "Master DevOps practices, tools, and automation for modern software delivery",
    description:
      "Comprehensive DevOps training covering CI/CD pipelines, containerization, orchestration, and infrastructure as code. Learn Docker, Kubernetes, Jenkins, GitLab CI, Terraform, and monitoring tools. Build production-ready deployment pipelines.",
    thumbnail: "/categories-devops.jpg",
    category: "DevOps",
    level: "Beginner",
    duration: "10 weeks",
    modules: 14,
    students: 4100,
    rating: 4.8,
    price: 549,
    instructor: {
      name: "Alex Thompson",
      avatar: "/categories-devops.jpg",
      role: "DevOps Engineer",
      bio: "Senior DevOps engineer with 10+ years of experience. Built CI/CD pipelines for startups to enterprise companies.",
    },
    syllabus: [
      {
        module: "DevOps Fundamentals",
        topics: [
          "What is DevOps?",
          "DevOps Culture and Practices",
          "Agile and DevOps",
          "DevOps Tools Landscape",
        ],
      },
      {
        module: "Version Control with Git",
        topics: [
          "Git Basics and Workflows",
          "Branching Strategies",
          "Git Best Practices",
          "GitHub/GitLab Collaboration",
        ],
      },
      {
        module: "Continuous Integration",
        topics: [
          "CI Concepts and Benefits",
          "Jenkins Setup and Configuration",
          "Building CI Pipelines",
          "Automated Testing Integration",
        ],
      },
      {
        module: "Containerization with Docker",
        topics: [
          "Docker Architecture",
          "Creating Dockerfiles",
          "Docker Compose",
          "Container Best Practices",
        ],
      },
      {
        module: "Kubernetes Orchestration",
        topics: [
          "Kubernetes Architecture",
          "Pods, Services, and Deployments",
          "ConfigMaps and Secrets",
          "Helm Package Manager",
        ],
      },
      {
        module: "Infrastructure as Code",
        topics: [
          "IaC Principles",
          "Terraform Basics",
          "Managing Cloud Resources",
          "Ansible for Configuration",
        ],
      },
      {
        module: "Monitoring & Observability",
        topics: [
          "Prometheus and Grafana",
          "Log Aggregation",
          "Application Performance Monitoring",
          "Alerting Strategies",
        ],
      },
    ],
    skills: [
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Git",
      "Monitoring",
    ],
    requirements: [
      "Basic Linux command line",
      "Understanding of software development",
      "Basic networking knowledge",
      "Willingness to learn new tools",
    ],
    featured: true,
    releaseDate: "2025-01-05",
  },
  {
    id: 8,
    slug: "advanced-kubernetes-microservices",
    title: "Advanced Kubernetes & Microservices Architecture",
    shortDescription:
      "Build and deploy scalable microservices on Kubernetes at enterprise scale",
    description:
      "Advanced course on Kubernetes and microservices patterns. Learn service mesh, advanced networking, security, monitoring, and troubleshooting. Deploy complex microservices applications with Istio, implement GitOps workflows, and master Kubernetes operators.",
    thumbnail: "/categories-devops.jpg",
    category: "DevOps",
    level: "Expert",
    duration: "12 weeks",
    modules: 16,
    students: 1600,
    rating: 4.9,
    price: 849,
    instructor: {
      name: "Sarah Williams",
      avatar: "/categories-devops.jpg",
      role: "Kubernetes Specialist",
      bio: "CKAD and CKA certified. Former SRE at Google. Expert in large-scale Kubernetes deployments and microservices architecture.",
    },
    syllabus: [
      {
        module: "Advanced Kubernetes Concepts",
        topics: [
          "StatefulSets and DaemonSets",
          "Custom Resource Definitions",
          "Operators and Controllers",
          "Advanced Scheduling",
        ],
      },
      {
        module: "Microservices Patterns",
        topics: [
          "Microservices Architecture Design",
          "Service Discovery",
          "API Gateway Patterns",
          "Event-Driven Architecture",
        ],
      },
      {
        module: "Service Mesh with Istio",
        topics: [
          "Service Mesh Concepts",
          "Traffic Management",
          "Security and mTLS",
          "Observability with Istio",
        ],
      },
      {
        module: "Advanced Networking",
        topics: [
          "CNI Plugins",
          "Network Policies",
          "Ingress Controllers",
          "Load Balancing Strategies",
        ],
      },
      {
        module: "Security Hardening",
        topics: [
          "Pod Security Policies",
          "RBAC Advanced",
          "Secrets Management",
          "Runtime Security",
        ],
      },
      {
        module: "GitOps & CD",
        topics: [
          "GitOps Principles",
          "ArgoCD Implementation",
          "Flux CD",
          "Progressive Delivery",
        ],
      },
      {
        module: "Production Best Practices",
        topics: [
          "High Availability Clusters",
          "Disaster Recovery",
          "Performance Tuning",
          "Troubleshooting Strategies",
        ],
      },
    ],
    skills: [
      "Advanced Kubernetes",
      "Microservices",
      "Istio",
      "GitOps",
      "Service Mesh",
      "Cloud Native",
    ],
    requirements: [
      "Strong Kubernetes knowledge",
      "Microservices understanding",
      "Docker proficiency",
      "Programming experience (Go/Python preferred)",
    ],
    featured: true,
    releaseDate: "2025-02-20",
  },
];

// Helper functions
export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug);
};

export const getCoursesByCategory = (category: string): Course[] => {
  if (category === "All") {
    return courses;
  }
  return courses.filter((course) => course.category === category);
};

export const getCoursesByLevel = (level: string): Course[] => {
  if (level === "All") {
    return courses;
  }
  return courses.filter((course) => course.level === level);
};

export const getCoursesByFilters = (
  category: string,
  level: string
): Course[] => {
  let filtered = courses;

  if (category !== "All") {
    filtered = filtered.filter((course) => course.category === category);
  }

  if (level !== "All") {
    filtered = filtered.filter((course) => course.level === level);
  }

  return filtered;
};

export const getFeaturedCourses = (): Course[] => {
  return courses.filter((course) => course.featured);
};

export const getRelatedCourses = (currentSlug: string, limit = 3): Course[] => {
  const currentCourse = getCourseBySlug(currentSlug);
  if (!currentCourse) return [];

  return courses
    .filter(
      (course) =>
        course.slug !== currentSlug &&
        course.category === currentCourse.category
    )
    .slice(0, limit);
};

export const sortCourses = (
  coursesToSort: Course[],
  sortBy: string
): Course[] => {
  const sorted = [...coursesToSort];

  switch (sortBy) {
    case "newest":
      return sorted.sort(
        (a, b) =>
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    case "oldest":
      return sorted.sort(
        (a, b) =>
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
      );
    case "popular":
      return sorted.sort((a, b) => b.students - a.students);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
};
