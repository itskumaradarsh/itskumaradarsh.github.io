// ============================================================
// PORTFOLIO CONFIGURATION
// Update these values to customize your portfolio content.
// ============================================================

export const PERSONAL = {
  name: 'Adarsh Kumar',
  title: 'Senior Staff Software Engineer',
  availability: 'Relocating to the UK · Open to sponsorship',
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
    'I build the systems that move money — payment rails, ledger systems, and high-throughput core infrastructure. Over the past decade I\'ve engineered and scaled distributed platforms processing billions in transactions for 500K+ users across five highly regulated Southeast Asian markets.',
    'My core expertise spans payment infrastructure and core banking (multi-bank routing with automated failover, real-time reconciliation, idempotency, and PCI-DSS-aligned systems), distributed systems and reliability (Kafka-driven event architectures sustaining 99.99% availability at 10K+ QPS), and regulated fintech and compliance (AML monitoring, transaction screening, and KYC pipelines built to central-bank standards).',
    'I operate as a hands-on technical leader — defining the architecture, design contracts, and reliability patterns teams build upon while staying active on critical-path code. I\'m now relocating to the UK (open to relocation and sponsorship) and open to Senior, Staff, and Principal Engineer roles in Payments, Fintech, and high-scale platform teams.',
  ],
  highlights: [
    'Led monolith-to-microservices migration for 500K+ users across 5 SEA markets with zero downtime',
    'Built real-time payment routing processing $15B+ annually across 30+ channels in 3 countries',
    'Co-founded and scaled a SaaS startup to $1.37M GMV with $480K in pre-seed funding',
    'Founding engineer of a top-3 BSP-regulated crypto exchange in the Philippines',
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
      'Decomposed a monolith serving 500K+ users across 5 SEA markets into 12+ microservices with Kafka event messaging \u2014 a zero-downtime migration that cut release cycles 40% and enabled 3x traffic spike handling during market volatility',
      'Own end-to-end deposit, cash-in, and withdrawal flows for 500K+ users across 5 SEA markets, with AML transaction monitoring, screening, and regulatory reporting aligned to each market\u2019s central bank framework',
      'Consolidated KYC/auth from an 8-screen to a 4-screen flow with OAuth2 + MFA and parallelized background checks \u2014 signup time down 35%, conversions 10% over target',
      'Introduced MCP-based automated code review and test generation, clearing the senior-engineer PR review bottleneck \u2014 review turnaround down 50%, team shipping speed up 25%',
      'Defined and enforced API standards across 12+ services \u2014 versioned contracts, OpenAPI specs, consistent error handling, and pagination',
      'Built DR playbooks (DB failover, cross-region backup, graceful degradation) and established on-call rotations and incident reviews to drive down MTTR',
      'Cut AWS staging costs 30% (~$180K/year) via automated resource scheduling, right-sizing with Datadog utilization metrics, and Terraform cost tagging',
      'Mentored 8 engineers through architecture reviews, pair programming, and monthly tech talks while collaborating across product, compliance, and data teams in 5 markets',
    ],
    technologies: ['Node.js', 'React Native', 'Go', 'Temporal', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Kubernetes', 'Datadog', 'Sentry'],
  },
  {
    company: 'Xendit',
    location: 'Philippines, Indonesia & Malaysia',
    badge: 'YC S15',
    roles: [
      { title: 'Technical Lead', period: 'Sep 2022 \u2013 Feb 2024' },
      { title: 'Senior Software Engineer', period: 'Feb 2021 \u2013 Aug 2021' },
    ],
    highlights: [
      'Built a real-time payment routing engine with channel health scoring and automatic failover across 30+ bank and e-wallet integrations in 3 countries on $15B+/year volume \u2014 processing time 8s \u2192 2.4s, success rate 88% \u2192 97%',
      'Built a fault isolation layer with channel circuit breakers and graceful degradation during 10K+ QPS peaks \u2014 failed transactions down 250%, platform availability 99.99%',
      'Optimized 500M+ transaction records with S3 lifecycle tiering, DB indexes, and analytics read replicas \u2014 S3 costs down 65%, DB costs down 40%, p99 latency under 200ms',
      'Built a unified transactional notification service across WhatsApp, SMS, Viber, and email with an automatic fallback chain \u2014 99.5% delivery across 10M+ monthly notifications',
      'Implemented payout retry and reconciliation using the outbox pattern and idempotency keys (PCI-DSS aligned) \u2014 zero lost or double-processed transactions even during partner bank outages',
      'Built real-time Datadog and Grafana dashboards for payment success rates, partner health, and circuit-breaker states \u2014 accelerating incident detection across all channels',
      'Core member of the Architecture Review Group \u2014 standardized cross-team engineering patterns and cut review turnaround 80% via templates and an async review process',
      'Led a 12-person engineering team and technical hiring; introduced TDD, code review standards, and sprint retros \u2014 delivery velocity up 35% over two quarters',
    ],
    technologies: ['Node.js', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'AWS', 'Datadog', 'Sentry', 'Splunk', 'Databricks', 'Redash'],
  },
  {
    company: 'On Demand Deals',
    location: 'Pasig, Metro Manila, Philippines',
    roles: [
      { title: 'Co-Founder & CTO', period: 'Aug 2021 \u2013 Sep 2022' },
    ],
    highlights: [
      'Co-founded a SaaS platform for F&B businesses and drove it from zero to product-market fit \u2014 owned end-to-end technical architecture, product direction, hiring, and delivery',
      'Built the entire platform solo initially (frontend, backend, infra, and deployment pipelines), then hired and managed a team of 4; transitioned from founder-led coding to scalable team execution without slowing delivery',
      'Closed $480K pre-seed from Iterative (YC for Southeast Asia) and Accelerating Asia; led the financial model, technical due diligence, and the investor narrative',
      'Scaled to 50+ shop locations across Manila in 6 months \u2014 $1.37M GMV with 200% month-over-month growth and minimal operational overhead',
      'Managed payment provider, POS integrator, and delivery partner integrations for order flow and settlement \u2014 reliable transaction processing and smooth merchant onboarding across third-party systems',
    ],
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Terraform', 'Kafka'],
  },
  {
    company: 'PDAX',
    location: 'BGC, Philippines',
    roles: [
      { title: 'Senior Software Engineer', period: 'Nov 2019 \u2013 Feb 2021' },
      { title: 'Software Engineer', period: 'Mar 2018 \u2013 Oct 2019' },
    ],
    highlights: [
      'Founding engineer \u2014 joined pre-launch and co-architected the core system from zero to scale, helping grow PDAX into a top-3 BSP-regulated crypto exchange in the Philippines',
      'Built the core trade matching engine handling 5K+ concurrent orders at sub-100ms matching latency, designed for horizontal scaling during market volatility',
      'Integrated major Philippine banks (BDO, BPI, UnionBank) and e-wallets (GCash, PayMaya) for fiat deposits/withdrawals \u2014 settlement from 3 days to near real-time',
      'Designed and launched LOCQ \u2014 a first-of-its-kind blockchain-based fuel futures product enabling prepaid gas at locked on-chain prices, drawing a wave of non-crypto-native users',
      'Built internal wallet and ledger infrastructure with double-entry accounting across crypto and fiat \u2014 full auditability for BSP compliance and KYC/AML monitoring',
      'Built internal risk monitoring for suspicious activity, large withdrawals, and KYC workflows \u2014 enabling real-time automated detection and enforcement of compliance rules',
      'Optimized the trade engine and API layer with connection pooling, Redis query caching, and graceful degradation \u2014 99.9%+ uptime during major market events',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'TimescaleDB', 'Redis', 'React Native', 'Solidity', 'AWS', 'Web3', 'ERC20'],
  },
  {
    company: 'Primus Software Corporation',
    location: 'Greater Noida, India',
    roles: [
      { title: 'Full Stack Developer', period: 'Sep 2017 \u2013 Jul 2018' },
    ],
    highlights: [
      'Built enterprise web and mobile applications for clients in healthcare, logistics, and education',
      'Led 3 pre-sales proof-of-concept projects end-to-end \u2014 scoped the approach, built demos in 2\u20133 weeks, and all three helped win new client contracts',
      'Owned frontend architecture and API design for a logistics tracking platform with a 5-person team; built reusable component libraries and set coding standards',
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
    description: 'Real-time routing engine with channel health scoring and automatic failover across 30+ bank and e-wallet integrations in 3 countries, on $15B+/year of payment volume.',
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
      '$480K pre-seed raised from Iterative (YC for SEA) & Accelerating Asia',
      '50+ shop locations onboarded in 6 months',
      '$1.37M GMV with 200% month-over-month growth',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    metrics: '$1.37M GMV',
  },
  {
    title: 'Crypto Trade Matching Engine',
    company: 'PDAX',
    description: 'Core trade matching engine for a BSP-regulated cryptocurrency exchange, designed for horizontal scaling during market volatility.',
    problem: 'Building a regulated crypto exchange from scratch in the Philippines with no existing infrastructure.',
    impact: [
      'Sub-100ms matching latency at 5K+ concurrent orders',
      'Grew to a top-3 BSP-regulated exchange in the Philippines',
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
    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Solidity'],
  },
  {
    name: 'Backend & Frontend',
    items: ['Node.js', 'NestJS', 'Temporal Workflows', 'REST', 'gRPC', 'n8n', 'React', 'React Native', 'Redux'],
  },
  {
    name: 'AI & LLM',
    items: ['MCP', 'RAG Pipelines', 'Vector DBs', 'Pinecone', 'pgvector', 'LLM Context Management', 'Agentic Workflows'],
  },
  {
    name: 'Data & Storage',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'Pinecone', 'TimescaleDB'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['AWS', 'Kubernetes', 'Terraform', 'Helm', 'Docker', 'CI/CD'],
  },
  {
    name: 'Messaging & Streaming',
    items: ['Apache Kafka', 'RabbitMQ', 'AWS SQS', 'Flink'],
  },
  {
    name: 'Observability',
    items: ['Datadog', 'Grafana', 'PagerDuty', 'OpsGenie', 'Sentry', 'Splunk'],
  },
  {
    name: 'Data & Analytics',
    items: ['Databricks', 'Redash', 'Looker', 'Metabase'],
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
