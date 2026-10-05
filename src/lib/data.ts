export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  number: number;
  symbol: string;
  name: string;
  category: "Languages" | "Frontend" | "AI & Data" | "Email & Automation" | "Tools";
  description: string;
  projects: string[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  kicker: string;
  role: string;
  description: string;
  features: string[];
  tech: string[];
  link?: string;
  github?: string;
  uiType: "dashboard" | "email-builder" | "sme-store" | "timeline";
}

export interface CertificationItem {
  id: string;
  index: string;
  title: string;
  issuer: string;
  year: string;
  badge?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: "work" | "education" | "fellowship";
  tags?: string[];
}

export interface AchievementItem {
  number: string;
  suffix?: string;
  label: string;
  caption: string;
  detail: string;
  logo: string;
  index: string;
}

export const PROFILE = {
  name: "Daniued Reman Julien",
  preferredName: "Reyman Julien Daniued",
  handle: "@rjdaniued",
  ghostWord: "DANIUED",
  headline: "Software Engineer | Email Development & Automation | AI Graduate Applicant",
  subheading: "Building accessible web applications, agentic workflows, and digital platforms for community empowerment.",
  location: "Batticaloa, Sri Lanka",
  email: "kdaniued@gmail.com",
  phone: "+94 77 101 5137",
  phoneUrl: "tel:+94771015137",
  website: "https://halneo.com",
  linkedin: "https://linkedin.com/in/reyman-julien-daniued-121a5a166",
  behance: "https://behance.net/daniuedkevin",
  github: "https://github.com/rjdaniued",
  resumePath: "/resume.pdf",
  summaryVerbatim:
    "Software engineer and community-focused technologist with 6+ years of experience across front-end development, IT support, digital solutions, and technology education. Builds practical platforms for small businesses, farmers, youth, and community organizations. Seeking graduate study in Artificial Intelligence or Data Science to create responsible, scalable solutions for Sri Lankan communities.",
  quote:
    "I believe every technical challenge is an opportunity to empower people — from designing automated email loops to building digital tools that help grassroots entrepreneurs thrive.",
  idDetails: {
    idNumber: "CEE-2026-DRJ",
    dept: "Software Engineering & Social Enterprise",
    validTill: "2026 / Permanent",
    signature: "Daniued R. Julien",
  },
};

export const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES = [
  "All",
  "Languages",
  "Frontend",
  "AI & Data",
  "Email & Automation",
  "Tools",
] as const;

export const SKILLS: SkillItem[] = [
  { number: 1, symbol: "H", name: "HTML5", category: "Languages", description: "Semantic markup, email HTML standards, accessibility (WCAG), responsive structures.", projects: ["Maytech Email Loop", "SAOBTS", "Swivel Templates"] },
  { number: 2, symbol: "Cs", name: "CSS3", category: "Languages", description: "Modern CSS, Grid, Flexbox, custom animations, cross-client email rendering.", projects: ["Maytech Email Loop", "SAOBTS", "Easliv Verde"] },
  { number: 3, symbol: "Js", name: "JavaScript", category: "Languages", description: "ES6+, DOM manipulation, asynchronous programming, custom interactive components.", projects: ["SAOBTS", "Maytech Workflows", "Swivel Web Layouts"] },
  { number: 4, symbol: "Py", name: "Python", category: "Languages", description: "Data analysis, machine learning algorithms, video & image processing pipelines.", projects: ["AI-Driven SME Research", "Hero Asset Pipeline"] },
  { number: 5, symbol: "Ts", name: "TypeScript", category: "Languages", description: "Strict static typing, interface contracts, scalable Next.js component architectures.", projects: ["Portfolio Website", "Halneo Platform"] },
  { number: 6, symbol: "Sq", name: "SQL & MySQL", category: "Languages", description: "Relational database design, role-based reporting queries, cloud MySQL hosting.", projects: ["SAOBTS", "Halneo Backend"] },
  { number: 7, symbol: "Re", name: "React.js", category: "Frontend", description: "Component-driven UI, hooks lifecycle, state management, reusable patterns.", projects: ["Halneo Platform", "Portfolio Web App"] },
  { number: 8, symbol: "Nx", name: "Next.js 15", category: "Frontend", description: "App Router, SSR, static asset optimization, modern server components.", projects: ["Personal Portfolio", "Halneo Platform"] },
  { number: 9, symbol: "Tw", name: "Tailwind CSS", category: "Frontend", description: "Utility-first design system, design tokens, responsive breakpoints, fluid typography.", projects: ["Personal Portfolio", "Easliv Verde"] },
  { number: 10, symbol: "Hb", name: "Handlebars", category: "Frontend", description: "Templating engine for modular asset exports, reusable email partials, and JSON compilation.", projects: ["Agentic Email Build-Loop", "Swivel Tech"] },
  { number: 11, symbol: "Pd", name: "Pandas", category: "AI & Data", description: "Data manipulation, exploratory data analysis, tabular dataset cleaning.", projects: ["SME Impact Research", "Data Analytics Lab"] },
  { number: 12, symbol: "Np", name: "NumPy", category: "AI & Data", description: "Vectorized numerical operations, sample-accurate audio crossfades, matrix computations.", projects: ["Hero Audio Engine", "SME Data Models"] },
  { number: 13, symbol: "Mp", name: "Matplotlib", category: "AI & Data", description: "Visualizing survey data, SME growth metrics, statistical distributions.", projects: ["BSc Research", "SME Metrics"] },
  { number: 14, symbol: "Sk", name: "Scikit-Learn", category: "AI & Data", description: "Machine learning classification, regression models, feature preprocessing.", projects: ["Applied AI Research", "Graduate Study Focus"] },
  { number: 15, symbol: "Jp", name: "Jupyter", category: "AI & Data", description: "Interactive notebook development, research documentation, model experimentation.", projects: ["AI-Driven SME Research", "Data Analysis"] },
  { number: 16, symbol: "Ai", name: "Generative AI", category: "AI & Data", description: "Prompt engineering, LLM agent workflows, automated template generation.", projects: ["Agentic Email Build-Loop", "AI SME Project"] },
  { number: 17, symbol: "Em", name: "Email HTML", category: "Email & Automation", description: "Bulletproof email development, multi-client rendering hacks, dark mode support.", projects: ["Maytech", "Swivel Tech", "AKQA Projects"] },
  { number: 18, symbol: "Ac", name: "Adobe Campaign", category: "Email & Automation", description: "Enterprise marketing automation, dynamic personalization, campaign deployment.", projects: ["Swivel Tech Agency Accounts", "AKQA"] },
  { number: 19, symbol: "Mc", name: "Mailchimp", category: "Email & Automation", description: "Campaign management, audience segmentation, responsive template authoring.", projects: ["SME Digital Empowerment", "Swivel Tech"] },
  { number: 20, symbol: "Ea", name: "Email on Acid", category: "Email & Automation", description: "Cross-client rendering QA, spam filter testing, accessibility verification.", projects: ["Maytech QA", "Swivel Tech"] },
  { number: 21, symbol: "Fg", name: "Figma", category: "Tools", description: "UI/UX design systems, component slicing, design-to-code verification.", projects: ["Agentic Email Loop", "SAOBTS", "Halneo"] },
  { number: 22, symbol: "Ps", name: "Photoshop", category: "Tools", description: "Digital asset preparation, image slicing, marketing creative optimization.", projects: ["Creative Assets", "Email Production"] },
  { number: 23, symbol: "Ai", name: "Illustrator", category: "Tools", description: "Vector graphics, branding systems, icon design, typography.", projects: ["Easliv Verde", "Brand Identity"] },
  { number: 24, symbol: "Gt", name: "Git & GitHub", category: "Tools", description: "Version control, branching strategies, collaborative code reviews, CI/CD.", projects: ["All Production Work", "SAOBTS"] },
  { number: 25, symbol: "Jr", name: "Jira & Confluence", category: "Tools", description: "Agile sprint tracking, sprint planning, documentation, client deliverable review.", projects: ["Maytech Technologies", "Swivel Tech"] },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "saobts",
    index: "01",
    title: "Smart Operation & Beneficiary Tracking System",
    kicker: "BSc Final Project · Dept of Agriculture",
    role: "Lead Software Engineer",
    description:
      "Designed and developed an academic web-based working model to replace fragmented paper and spreadsheet records used by agricultural officers in Batticaloa with centralized, role-based reporting and beneficiary tracking.",
    features: [
      "Agile development using PHP, cloud-hosted MySQL, HTML5, CSS3, and JavaScript/jQuery.",
      "Integrated WhatsApp harvest notifications and Google Maps asset visualization.",
      "Offline data capture with synchronization for field officers in low-connectivity areas.",
      "Differentiated dashboards for district administrators, agriculture instructors, and farmers.",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Google Maps API", "WhatsApp API", "Figma", "Git"],
    link: "https://saobts.com",
    uiType: "dashboard",
  },
  {
    id: "agentic-email",
    index: "02",
    title: "Agentic Email Build-Loop Workflow",
    kicker: "Production Engineering · Maytech EDM Squad",
    role: "Front-End Engineer",
    description:
      "Engineered a guided Figma-to-Handlebars workflow that verifies desktop and mobile designs, maps campaign URLs, exports separate image and call-to-action slices, assembles reusable partials and JSON, and compiles responsive email HTML with Gulp.",
    features: [
      "Guided Figma-to-Handlebars pipeline with automated URL and asset slicing.",
      "Reusable partials and JSON configuration compiled into production-ready HTML.",
      "Human quality-assurance checkpoints preserving design fidelity and client compatibility.",
      "Tested rendering across major clients (Outlook, Gmail, Apple Mail) via Email on Acid.",
    ],
    tech: ["Handlebars", "HTML/CSS", "Gulp", "Figma", "Email on Acid", "JavaScript"],
    uiType: "email-builder",
  },
  {
    id: "halneo",
    index: "03",
    title: "Halneo Digital Enablement Platform",
    kicker: "Founder & Product Builder",
    role: "Founder / Engineer",
    description:
      "Building a dedicated platform that helps Sri Lankan small businesses establish an online presence, organize products, manage customer enquiries, and strengthen day-to-day digital operations without technical complexity.",
    features: [
      "Zero-code product catalog and digital business identity for local SMEs.",
      "Lead and enquiry organization with simple customer follow-up tracking.",
      "Informed by direct field feedback from the Community Engagement Project.",
      "Engineered for fast loading and low bandwidth requirements.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Analytics", "Figma"],
    link: "https://halneo.com",
    uiType: "sme-store",
  },
  {
    id: "sme-empowerment",
    index: "04",
    title: "Digital Empowerment for SMEs & Entrepreneurs",
    kicker: "Selected Community Engagement Project · 2026",
    role: "Project Lead",
    description:
      "Partnered with the MJF Centre East to deliver a six-month, no-fee practical program for grassroots entrepreneurs in tailoring, herbal products, palmyrah crafts, jewellery, and food production.",
    features: [
      "Modules covering digital identity, product presentation, and online visibility.",
      "Practical tools for daily workflow organization and independent sustainability.",
      "Launched September 2026 with ongoing coaching sessions in Eastern Sri Lanka.",
      "Collecting participant growth metrics to refine community digital adoption.",
    ],
    tech: ["Digital Transformation", "Marketing Automation", "SME Operations", "Mentorship"],
    uiType: "timeline",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "othm-marketing",
    index: "01",
    title: "International Diploma in Digital Marketing, Level 3",
    issuer: "OTHM Qualifications / ICBT Campus",
    year: "September 2024",
    badge: "Level 3",
  },
  {
    id: "uiux-developer",
    index: "02",
    title: "Certified UI/UX Developer",
    issuer: "NuMind Education / Computer Society of Sri Lanka",
    year: "August 2022",
    badge: "CSSL Certified",
  },
  {
    id: "nvq-4",
    index: "03",
    title: "National Vocational Qualification (NVQ) Level 4 — ICT Technician",
    issuer: "Miani Technical Institute / TVEC Sri Lanka",
    year: "July 2019",
    badge: "NVQ 4",
  },
  {
    id: "nvq-3",
    index: "04",
    title: "National Vocational Qualification (NVQ) Level 3 — Computer Applications Assistant",
    issuer: "Computer Resource Centre, Batticaloa / TVEC",
    year: "April 2019",
    badge: "NVQ 3",
  },
  {
    id: "cambridge-igcse",
    index: "05",
    title: "Cambridge International General Certificate of Secondary Education (IGCSE)",
    issuer: "British Council Sri Lanka",
    year: "June 2017",
    badge: "Cambridge",
  },
  {
    id: "duolingo-120",
    index: "06",
    title: "Duolingo English Test — Score 120 (Proficient)",
    issuer: "Duolingo English Test",
    year: "November 2025",
    badge: "Score: 120",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2025 – Present",
    title: "Front-End Engineer",
    organization: "Maytech Technologies, Colombo Studio",
    location: "Colombo, Sri Lanka",
    description:
      "Develop responsive, accessible interfaces from design specifications using HTML, CSS, JavaScript, and reusable UI patterns. Contribute to agentic email build-loop engineering under Team Lead Nusair Ahamed.",
    type: "work",
    tags: ["HTML/CSS", "JavaScript", "Handlebars", "UI Patterns", "Email QA"],
  },
  {
    year: "March – June 2026",
    title: "Community Engagement Exchange (CEE) Fellow",
    organization: "U.S. Department of State / IREX",
    location: "Urban Harvest, Houston, Texas, USA",
    description:
      "Selected for prestigious U.S. State Department fellowship. Completed leadership and community-engagement practicum examining community-based systems, sustainable agriculture, and SME support.",
    type: "fellowship",
    tags: ["U.S. State Dept", "Leadership", "SME Development", "Houston, TX"],
  },
  {
    year: "2024 – 2025",
    title: "BSc (Hons) Software Engineering — First Class",
    organization: "Cardiff Metropolitan University, UK (via ICBT Campus)",
    location: "Sri Lanka / UK",
    description:
      "Graduated with First Class Honours. Completed final year dissertation on Smart Operation & Beneficiary Tracking System for the Department of Agriculture.",
    type: "education",
    tags: ["First Class", "Cardiff Met", "Software Engineering", "Distinction"],
  },
  {
    year: "2025",
    title: "YSALI Fellow: Entrepreneurship",
    organization: "University of Nebraska Omaha / CARS",
    location: "Dhaka, Bangladesh",
    description:
      "Completed virtual training and represented Sri Lanka at the in-person South Asia Regional Workshop in Dhaka, Bangladesh. Credential issued December 2025.",
    type: "fellowship",
    tags: ["YSALI", "Regional Delegate", "Entrepreneurship", "Dhaka"],
  },
  {
    year: "2022 – 2025",
    title: "Software Engineer Intern (Full-Time)",
    organization: "Swivel Tech / Swivel Group",
    location: "Colombo, Sri Lanka",
    description:
      "Built responsive email templates and web layouts from Figma designs while completing BSc program part-time. Handled cross-client compatibility, Adobe Campaign, Mailchimp, and agency deliverables.",
    type: "work",
    tags: ["Adobe Campaign", "Taxi for Email", "Figma", "HTML/CSS", "Swivel"],
  },
  {
    year: "2022 – 2024",
    title: "Higher Diploma in Software Engineering & Computing — Distinction",
    organization: "Cardiff Metropolitan University / ICBT Campus",
    location: "Sri Lanka",
    description:
      "Comprehensive two-year program covering database management, systems architecture, networking, and programming fundamentals with Distinction.",
    type: "education",
    tags: ["Distinction", "ICBT", "Software Engineering"],
  },
  {
    year: "2020 – 2022",
    title: "ICT Instructor",
    organization: "Department of Rural Development",
    location: "Batticaloa, Sri Lanka",
    description:
      "Taught information and communication technology fundamentals, basic programming, robotics, electronics, and IoT through practical hands-on exercises.",
    type: "work",
    tags: ["Robotics", "IoT", "ICT Education", "Electronics"],
  },
  {
    year: "2019",
    title: "National Vocational Qualification (NVQ Level 4 & 3)",
    organization: "TVEC Sri Lanka / Miani Technical Institute",
    location: "Batticaloa, Sri Lanka",
    description:
      "NVQ Level 4 ICT Technician & NVQ Level 3 Computer Applications Assistant certifications.",
    type: "education",
    tags: ["NVQ Level 4", "TVEC", "Computer Applications"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    index: "01/06",
    number: "6+",
    label: "Years of Experience",
    caption: "Front-End & Digital Solutions",
    detail: "Six years spanning software development, email automation, UI/UX, and community ICT training.",
    logo: "Maytech",
  },
  {
    index: "02/06",
    number: "1st",
    suffix: "Class",
    label: "BSc (Hons) Software Eng.",
    caption: "Cardiff Metropolitan University",
    detail: "Awarded First Class Honours along with Distinction in Higher Diploma at ICBT Campus.",
    logo: "CardiffMet",
  },
  {
    index: "03/06",
    number: "2026",
    label: "U.S. Dept of State Fellow",
    caption: "Community Engagement Exchange",
    detail: "Represented Sri Lanka in Houston, Texas with Urban Harvest, focusing on sustainable community systems.",
    logo: "CEE",
  },
  {
    index: "04/06",
    number: "120",
    label: "Duolingo English Score",
    caption: "High English Proficiency",
    detail: "Scored 120 on the official Duolingo English Test for international graduate school applications.",
    logo: "Duolingo",
  },
  {
    index: "05/06",
    number: "20+",
    label: "SMEs Empowered",
    caption: "MJF Centre East Partnership",
    detail: "Grassroots entrepreneurs actively receiving digital identity and operations mentoring.",
    logo: "MJF",
  },
  {
    index: "06/06",
    number: "100%",
    label: "Render Reliability",
    caption: "Multi-Client Email QA",
    detail: "Figma-to-Handlebars pipeline ensuring pixel-perfect display across Outlook, Apple Mail, and Gmail.",
    logo: "Swivel",
  },
];
