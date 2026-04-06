// ============================================================
// PORTFOLIO CONFIGURATION
// Update these values to customize your portfolio content.
// ============================================================

export const PERSONAL = {
  name: 'Adarsh Kumar',
  title: 'Senior Staff Software Engineer',
  email: 'adarshkumar2k@gmail.com',
  phone: '+91 9599401658',
  phoneAlt: '+60 135308971',
  location: 'Kuala Lumpur, Malaysia',
  linkedin: 'https://www.linkedin.com/in/itskumaradarsh/',
  resumeFile: '/resume - Adarsh Kumar.pdf',
  siteUrl: 'https://itskumaradarsh.github.io',
};

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500K+', label: 'Users Served' },
  { value: '$15B+', label: 'Transactions Processed' },
  { value: '5', label: 'Countries' },
];

export const ABOUT = {
  summary: [
    'I build systems that power financial infrastructure at scale. Over the past decade, I\'ve designed and shipped platforms that process billions in transactions, serve hundreds of thousands of users, and operate across multiple countries in Southeast Asia.',
    'From co-founding a venture-backed startup to leading platform modernization at regulated fintech companies, I\'ve consistently taken ownership of complex technical challenges and turned them into reliable, scalable solutions.',
    'I\'m a strong individual contributor who thinks in systems. I care deeply about reliability, developer experience, and building teams that ship with confidence.',
  ],
  highlights: [
    'Led monolith-to-microservices migration for 500K+ users with zero downtime',
    'Built real-time payment routing processing $15B+ annually across 3 countries',
    'Co-founded and scaled a SaaS startup to $1.37M GMV with $480K in funding',
    'Founding engineer of a top-3 regulated crypto exchange in the Philippines',
  ],
};

// ============================================================
// EXPERIENCE
// ============================================================

export interface ExperienceRole {
  title: string;
  period: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  badge?: string;
  roles: ExperienceRole[];
  highlights: string[];
  technologies: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'StashAway',
    location: 'Kuala Lumpur, Malaysia',
    roles: [
      { title: 'Senior Staff Engineer', period: 'Apr 2024 \u2013 Present' },
    ],
    highlights: [
      'Led decomposition of a monolithic platform serving 500K+ users across 5 markets into 12+ microservices with zero downtime migration',
      'Reduced release cycles by 40% and enabled the platform to handle 3x traffic spikes during market volatility',
      'Cut infrastructure costs by 30% (~$180K/year) through automated resource scheduling and Terraform-based governance',
      'Introduced MCP-based automated code review and test generation, boosting team shipping speed by 25%',
      'Defined API design standards across all services \u2014 versioned contracts, OpenAPI specs, consistent error handling',
    ],
    technologies: ['NestJS', 'Kafka', 'Kubernetes', 'Terraform', 'PostgreSQL', 'Datadog', 'AWS'],
  },
  {
    company: 'Xendit',
    location: 'Philippines, Indonesia & Malaysia',
    badge: 'YC S15',
    roles: [
      { title: 'Technical Lead', period: 'Sep 2022 \u2013 Feb 2024' },
      { title: 'Senior Software Engineer', period: 'Feb 2021 \u2013 Aug 2022' },
    ],
    highlights: [
      'Built a real-time payment routing engine with automatic failover across 30+ channels \u2014 processing time from 8s to 2.4s, success rate from 88% to 97%',
      'Designed fault isolation layer achieving 99.99% platform availability at 10K+ QPS during peak hours',
      'Optimized storage for 500M+ transaction records \u2014 S3 costs down 65%, DB costs down 40%, p99 latency under 200ms',
      'Built unified notification service across WhatsApp, SMS, Viber, and email with 99.5% delivery rate for 10M+ monthly messages',
      'Led and mentored a 6-person engineering team, driving 35% increase in delivery velocity',
    ],
    technologies: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'DynamoDB', 'Datadog', 'Grafana', 'AWS'],
  },
  {
    company: 'On Demand Deals',
    location: 'Manila, Philippines',
    roles: [
      { title: 'Co-Founder & CTO', period: 'May 2021 \u2013 Sep 2022' },
    ],
    highlights: [
      'Co-founded a SaaS platform for the F&B industry \u2014 owned all technical decisions, hiring, and product delivery end-to-end',
      'Built the entire platform solo initially, then hired and managed a team of 4 engineers',
      'Raised $480K pre-seed from Iterative (YC for SEA) and Accelerating Asia',
      'Scaled to 50+ shop locations across Manila, hitting $1.37M GMV with 200% month-over-month growth',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'CI/CD'],
  },
  {
    company: 'PDAX',
    location: 'BGC, Philippines',
    roles: [
      { title: 'Senior Software Engineer', period: 'Nov 2019 \u2013 Feb 2021' },
      { title: 'Software Engineer', period: 'Mar 2018 \u2013 Nov 2019' },
    ],
    highlights: [
      'Founding engineer \u2014 built the platform from scratch, grew PDAX into a top-3 regulated crypto exchange in the Philippines',
      'Built the core trade matching engine handling 5K+ concurrent orders with sub-100ms latency',
      'Integrated major Philippine banks and e-wallets for fiat on/off-ramps, reducing settlement from 3 days to real-time',
      'Designed and launched LOCQ \u2014 a first-of-its-kind fuel futures product on the blockchain',
    ],
    technologies: ['Node.js', 'Redis', 'PostgreSQL', 'React', 'WebSocket', 'Solidity'],
  },
  {
    company: 'Primus Software Corporation',
    location: 'Greater Noida, India',
    roles: [
      { title: 'Software Engineer', period: 'Sep 2017 \u2013 Mar 2018' },
    ],
    highlights: [
      'Built enterprise web and mobile applications for clients in healthcare, logistics, and education',
      'Led 3 proof-of-concept projects end-to-end for business development \u2014 all three helped win new client contracts',
      'Owned frontend architecture and API design on a logistics tracking platform with a team of 5',
    ],
    technologies: ['React', 'Angular', 'Node.js', 'PostgreSQL'],
  },
];

// ============================================================
// PROJECTS
// ============================================================

export interface ProjectItem {
  title: string;
  company: string;
  description: string;
  problem: string;
  impact: string[];
  technologies: string[];
  metrics?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Real-time Payment Routing Engine',
    company: 'Xendit',
    description: 'Intelligent payment routing system with automatic failover across 30+ bank and e-wallet integrations in 3 countries.',
    problem: 'Manual routing meant if a bank channel went down, someone had to notice and switch traffic. Processing was slow and unreliable.',
    impact: [
      'Processing time reduced from 8s to 2.4s',
      'Success rate improved from 88% to 97%',
      '99.99% platform availability achieved',
    ],
    technologies: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'Datadog'],
    metrics: '$15B+/year processed',
  },
  {
    title: 'Platform Modernization',
    company: 'StashAway',
    description: 'Decomposed a monolithic system into 12+ microservices with clear API contracts and Kafka-based event messaging.',
    problem: 'A monolith serving 500K+ users across 5 SEA markets where one team\'s changes regularly broke another\'s features.',
    impact: [
      'Zero downtime during entire migration',
      'Release cycles reduced by 40%',
      'Platform handles 3x traffic spikes seamlessly',
    ],
    technologies: ['NestJS', 'Kafka', 'Kubernetes', 'Terraform', 'AWS'],
    metrics: '500K+ users, 5 markets',
  },
  {
    title: 'On Demand Deals',
    company: 'Co-founded',
    description: 'Full-stack SaaS platform for the F&B industry \u2014 restaurants, cloud kitchens, and QSR chains across Manila.',
    problem: 'The Philippine F&B industry lacked a unified digital platform for order management, analytics, and growth.',
    impact: [
      '$480K raised from Iterative & Accelerating Asia',
      '50+ shop locations onboarded in 6 months',
      '$1.37M GMV with 200% month-over-month growth',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    metrics: '$1.37M GMV',
  },
  {
    title: 'Crypto Trade Matching Engine',
    company: 'PDAX',
    description: 'Core trade matching engine for a regulated cryptocurrency exchange, designed for horizontal scaling during market volatility.',
    problem: 'Building a regulated crypto exchange from scratch in the Philippines with no existing infrastructure.',
    impact: [
      'Sub-100ms matching latency at 5K+ concurrent orders',
      'Grew to top-3 regulated exchange in the Philippines',
      '99.9% platform uptime during major market events',
    ],
    technologies: ['Node.js', 'Redis', 'PostgreSQL', 'WebSocket', 'Solidity'],
    metrics: '5K+ concurrent orders',
  },
  {
    title: 'AI-Powered Developer Tooling',
    company: 'StashAway',
    description: 'MCP-based automated code review and test generation pipeline to accelerate engineering output.',
    problem: 'Senior engineers spent 30% of their time on routine PR reviews, creating a bottleneck for the entire team.',
    impact: [
      'Review turnaround cut by 50%',
      'Team shipping speed increased by 25%',
      'Freed senior engineers for architecture work',
    ],
    technologies: ['MCP', 'RAG', 'Vector DBs', 'n8n', 'NestJS'],
    metrics: '25% faster shipping',
  },
];

// ============================================================
// SKILLS
// ============================================================

export interface SkillCategory {
  name: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Golang', 'Java', 'Solidity'],
  },
  {
    name: 'Backend',
    items: ['NestJS', 'Node.js', 'Temporal Workflows', 'n8n', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'AI & LLM',
    items: ['MCP', 'RAG Pipelines', 'Vector DBs', 'Pinecone', 'pgvector', 'Prompt Engineering', 'Agentic Workflows'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'ClickHouse'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Kubernetes', 'Terraform', 'Helm', 'CI/CD', 'Docker'],
  },
  {
    name: 'Messaging & Streaming',
    items: ['Apache Kafka', 'RabbitMQ', 'Amazon SQS'],
  },
  {
    name: 'Observability',
    items: ['Datadog', 'Grafana', 'PagerDuty', 'Sentry', 'Splunk'],
  },
  {
    name: 'Frontend',
    items: ['React', 'React Native', 'Next.js', 'Redux', 'Angular', 'Tailwind CSS'],
  },
  {
    name: 'Data & Analytics',
    items: ['Apache Spark', 'Flink', 'Databricks', 'Redash', 'Looker'],
  },
];

// ============================================================
// ANIMATION VARIANTS (Framer Motion)
// ============================================================

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};
