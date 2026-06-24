import orderyum from "../assets/orderyum.mp4";
import b2b from "../assets/b2b.mp4"
import image1 from "../assets/image2.png"
export const SHUBHANSHI = {
  name: "Shubhanshi Gupta",
  firstName: "Shubhanshi",
  title: "Software Engineer · Backend · Full-stack · AI",
  level: 7,
  className: "Backend Mage / Full-stack Adventurer",
  tagline:
    "Software Engineering undergrad (2026) crafting backend systems, full-stack apps, and AI-driven automation. Caffeine-fueled, quest-driven.",
  email: "shubhanshi743052@gmail.com",
  phone: "+91 7418712802",
  whatsapp: "917418712802",
  instagram: "wysojiya",
  github: "shubhanshi01",
  linkedin: "shubhanshi-g",
  codolio: "Shubhanshi",
  location: "Thanjavur, TN · India",
  resumePath: "https://drive.google.com/file/d/1U1rgPRCfbD459dPEm39F6JYz4rGXqasG/view?usp=sharing",
};

export const STATS = [
  { label: "HP · Skills", value: "50+", icon: "Heart" },
  { label: "MP · System Design", value: "20+", icon: "Zap" },
  { label: "DSA Solved", value: "400+", icon: "Code2" },
  { label: "Coffee Consumed", value: "∞", icon: "Coffee" },
];

export const SKILLS = [
  {
    category: "Languages",
    icon: "Code2",
    items: [
      { name: "C++", xp: 92 },
      { name: "C#", xp: 94 },
      { name: "JavaScript", xp: 95 },
      { name: "Python", xp: 90 },
      { name: "Java", xp: 68 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    items: [
      { name: "ASP.NET Core", xp: 95 },
      { name: "Node.js / Express", xp: 90 },
      { name: "REST APIs", xp: 92 },
    ],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: [
      { name: "React.js", xp: 90 },
      { name: "React Native", xp: 82 },
      { name: "Tailwind CSS", xp: 88 },
      {name:"Bootstrap" , xp:80}
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      { name: "MongoDB", xp: 86 },
      { name: "SQL", xp: 82 },
    ],
  },
  {
    category: "AI / ML",
    icon: "BrainCircuit",
    items: [
      { name: "Deep Learning", xp: 84 },
      { name: "Graph Neural Networks", xp: 82 },
      { name: "TensorFlow", xp: 80 },
      { name: "NLP / OpenAI API", xp: 86 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "Cloud",
    items: [
      { name: "Oracle Cloud (OCI)", xp: 80 },
      { name: "Git / GitHub / CI-CD", xp: 90 },
      { name: "Postman / Swagger", xp: 88 },
    ],
  },
];

export const BADGES = [
  {
    title: "DSA Grinder",
    sub: "400+ Problems Solved",
    icon: "Trophy",
    color: "#e36a6a",
  },
  {
    title: "Researcher",
    sub: "APT Detection · GNN Paper",
    icon: "BookOpen",
    color: "#e36a6a",
  },
  {
    title: "Mphasis SDE Intern",
    sub: "Production Finance Modules",
    icon: "Briefcase",
    color: "#e36a6a",
  },
  {
    title: "Oracle OCI Certified",
    sub: "Foundations Associate 2025",
    icon: "Award",
    color: "#e36a6a",
  },
  {
    title: "Google AI Essentials",
    sub: "Coursera · Jan 2025",
    icon: "Sparkles",
    color: "#e36a6a",
  },
  {
    title: "IBM Gen AI",
    sub: "Intro to Generative AI",
    icon: "Bot",
    color: "#e36a6a",
  },
  {
    title: "Codeforces Top 50%",
    sub: "Competitive Programmer",
    icon: "Swords",
    color: "#e36a6a",
  },
  {
    title: "Infosys AI Adv.",
    sub: "Beginner → Advanced AI",
    icon: "Cpu",
    color: "#e36a6a",
  },
];

export const PROJECTS = [
  {
    id: "p1",
    title: "AI B2B Outreach Pipeline",
    video: b2b,
    type: "Legendary Quest",
    date: "Jun 2026",
    summary:
      "End-to-end AI outbound sales platform. 1 seed company → 20–100+ lookalike companies + 50+ decision-makers + 100+ personalized cold emails per run.",
    objectives: [
      "Integrate Ocean.io, LinkedIn, Prospeo & Eazyreach APIs",
      "Auto-generate cold emails via Brevo API",
      "Reduced 3–4 hr prospecting → under 2 minutes",
    ],
    rewards: ["MongoDB", "Express", "React", "Node.js", "OpenAI API"],
    accent: "#e36a6a",
  },
  {
    id: "p2",
    title: "Advanced Persistent Threat Detection",
    image: image1,
    type: "Research Quest",
    date: "Oct 2025",
    summary:
      "Peer-reviewed Domain-Adaptive Graph Transformer (DAOGT) for multi-stage APT detection. 98% accuracy, 0.96 F1 on CICIDS2017, –20% false positives.",
    objectives: [
      "Activity-Constrained Feature Selection (ACFS)",
      "Adaptive quantile clipping for minority classes",
      "GNNExplainer for interpretable predictions",
    ],
    rewards: ["Python", "Graph NN", "TensorFlow", "Cybersecurity"],
    accent: "#e36a6a",
  },
  {
    id: "p3",
    title: "OrderYum — Food Delivery App",
    video: orderyum,
    type: "Side Quest",
    date: "Dec 2024",
    summary:
      "Cross-platform food delivery app with secure auth, 10+ API integrations and Firebase backend. 30% lower transaction latency, 8 reusable UI components.",
    objectives: [
      "Secure auth + Firebase backend",
      "10+ API integrations",
      "8 reusable UI components",
    ],
    rewards: ["React Native", "Expo", "Firebase"],
    accent: "#e36a6a",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Development Engineer Intern",
    org: "Mphasis",
    location: "Bangalore",
    dates: "Jan 2026 – Apr 2026",
    bullets: [
      "Engineered 3 production-grade financial analytics modules using ASP.NET Core + React with a 10-member team.",
      "Designed & integrated 5+ RESTful APIs for finance systems → 40% less manual data processing.",
      "Built a GitHub-API CI/CD pipeline to deprecate stale feature flags & reduce technical debt.",
    ],
  },
  {
    role: "Research Intern",
    org: "Bringer",
    location: "Remote",
    dates: "Jun 2024 – Sep 2024",
    bullets: [
      "Built end-to-end deep-learning face recognition (RetinaNet + Siamese) → 99.2% accuracy, 100ms latency.",
      "Architected scalable face-matching pipeline (YOLOv8 + Inception-ResNet) for 10,000+ embeddings.",
      "Streamlined cross-device benchmarking maintaining 95%+ accuracy across heterogeneous hardware.",
    ],
  },
];

export const EDUCATION = {
  school: "SASTRA University",
  degree: "B.Tech · Information & Communication Technology",
  cgpa: "7.67",
  location: "Thanjavur, TN",
  dates: "2022 – 2026",
};
