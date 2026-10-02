import { ProjectItem, ExperienceItem, ServiceItem, AchievementItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'SK Salman Alam Ostagar',
  role: 'Full-Stack Developer',
  tagline: 'Building scalable web experiences and intelligent applications.',
  subheadline: 'Final-year Computer Science & Engineering student (2027) building responsive, data-driven web applications with React.js, Node.js, Python, and MongoDB.',
  location: 'Kolkata, West Bengal, India',
  email: 'salmanalamostagar@gmail.com',
  phone: '+91 93157 96773',
  github: 'https://github.com/salman284',
  linkedin: 'https://www.linkedin.com/in/sk-salman-alam-ostagar-8702a4290',
  educationSummary: 'Supreme Knowledge Foundation Group of Institutions (MAKAUT) — Expected June 2027',
  cgpa: '7.28 / 10.0',
  hackathonHighlight: 'Infosys Global Hackathon 2025 Finalist (Top 33 of 1,942 teams)'
};

export const MARQUEE_ROW_1 = [
  'React.js',
  'Node.js',
  'Python',
  'JavaScript (ES6+)',
  'MongoDB',
  'Express.js',
  'Flask',
  'Tailwind CSS',
  'JWT Auth',
  'Git & GitHub',
  'REST API Design'
];

export const MARQUEE_ROW_2 = [
  'Infosys Global Hackathon Finalist',
  'Full-Stack MERN Architecture',
  'AI Crop Advisory Systems',
  'Data Structures & Algorithms',
  'Build With Gemini Finalist',
  'Vercel & Render Deployment',
  'MySQL & DBMS',
  'Pandas & Matplotlib Analytics',
  'Supreme Knowledge Foundation (MAKAUT)',
  'Responsive UI Engineering'
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'kisan-mitra',
    number: '01',
    title: 'KisanMitra',
    subtitle: 'Intelligent Agricultural Advisory & Marketplace Platform',
    category: 'Full-Stack & Applied AI',
    description:
      'A unified agricultural platform integrating 4 real-time modules: crop disease detection, soil health analysis, market-price tracking, and weather alerts. Engineered to empower rural farmers with intelligent decision-making.',
    technologies: ['React.js', 'Flask', 'Python', 'MongoDB', 'REST APIs', 'Vercel', 'Render'],
    features: [
      '🌦️ Weather information and farming-related alerts',
      '🌱 Soil health information and crop recommendations',
      '🧠 AI-assisted crop disease detection and treatment guidance',
      '🧪 Fertilizer and nutrient planning support',
      '📈 Market price information and commodity trends',
      '🏛️ Government schemes and agricultural program information',
      '🤖 AI agricultural assistant with multilingual support',
      '📲 Support for notification and communication features',
      '📰 Agricultural news and updates'
    ],
    achievement: 'Infosys Global Hackathon 2025 Finalist — Top 33 of 1,942 teams (top 1.6%)',
    githubUrl: 'https://github.com/salman284',
    accentColor: '#10B981',
    previewType: 'agricultural'
  },
  {
    id: 'pizza-master',
    number: '02',
    title: 'PizzaMaster',
    subtitle: 'Full Stack Food Ordering Application',
    category: 'MERN Stack Architecture',
    description:
      'Full-stack MERN food-ordering application engineered end-to-end with dynamic pizza customization, secure JWT authentication, role-based workflows, and real-time order processing.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: [
      '🍕 Interactive pizza configurator with custom toppings & crust selection',
      '🛒 Reactive cart state management with real-time price calculations',
      '⚡ Route-level code splitting & lazy loading for lightning-fast initial load',
      '🔐 Role-based access control for customers and administrative staff',
      '📊 Admin management dashboard with inventory control and revenue analytics',
      '📦 Live order status pipeline from preparation to delivery'
    ],
    githubUrl: 'https://github.com/salman284',
    accentColor: '#F59E0B',
    previewType: 'food'
  },
  {
    id: 'quiz-master',
    number: '03',
    title: 'QuizMaster',
    subtitle: 'Interactive Quiz Application',
    category: 'Frontend & API Integration',
    description:
      'High-performance quiz platform connecting to dynamic third-party trivia APIs with per-question countdown timers, client-side scoring algorithms, and robust offline fallback capabilities.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST API', 'Local Storage'],
    features: [
      '🎯 Multi-category and difficulty configuration spanning 20+ trivia categories',
      '⏱️ Dynamic per-question timers with auto-submission triggers',
      '⚡ Instant client-side scoring logic with instant performance breakdown',
      '🛡️ Offline fallback question bank ensuring zero downtime when disconnected',
      '📱 Mobile-first responsive UI with smooth question transitions'
    ],
    githubUrl: 'https://github.com/salman284',
    accentColor: '#6366F1',
    previewType: 'quiz'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'oasis-infobyte',
    number: '01',
    company: 'Oasis Infobyte',
    role: 'Web Development and Designing Intern',
    period: 'Aug 2025 – Sep 2025',
    location: 'Remote',
    highlights: [
      'Built and shipped PizzaMaster, a full-stack MERN food-ordering app, end to end in a 4-week engagement — data model, REST API, JWT auth, and deployed UI.',
      'Engineered role-based access for 2 user types (customer/admin) and an admin dashboard for inventory control and revenue analytics.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs']
  },
  {
    id: 'edunet-frontend',
    number: '02',
    company: 'Edunet Foundation & AICTE',
    role: 'Front End Web Development Intern',
    period: 'Oct 2025 – Nov 2025',
    location: 'Remote',
    highlights: [
      'Delivered QuizMaster, a REST-API-driven quiz platform, as the capstone of a 6-week mentor-led program.',
      'Integrated a third-party trivia API spanning 20+ categories with client-side scoring, per-question timers, and offline fallback.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Asynchronous JS']
  },
  {
    id: 'aicte-shell-edunet',
    number: '03',
    company: 'AICTE | Shell India | Edunet Foundation',
    role: 'AI & Data Analytics Intern',
    period: 'Aug 2025 – Sep 2025',
    location: 'Remote',
    highlights: [
      'Developed a Python soil-health module mapping N-P-K and pH inputs to crop recommendations using pandas and Matplotlib.',
      'The module was later reused and productionized as KisanMitra’s core soil-advisory feature.'
    ],
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Data Analysis', 'Agritech Modeling']
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Responsive, accessible, and high-performance user interfaces crafted with React.js, modern CSS3, and Tailwind CSS. Focused on fluid micro-interactions and cross-device consistency.',
    technologies: ['React.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Layouts', 'Framer Motion']
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    description:
      'Architecting end-to-end web applications across the MERN stack (MongoDB, Express.js, React.js, Node.js), connecting robust backends with polished frontends.',
    technologies: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'Full-Lifecycle Deployment']
  },
  {
    number: '03',
    title: 'Backend & REST APIs',
    description:
      'Designing clean, maintainable RESTful APIs, implementing robust JWT authentication, role-based access control, and efficient relational and document database modeling.',
    technologies: ['Express.js', 'Flask', 'REST API Architecture', 'JWT Authentication', 'MongoDB & MySQL']
  },
  {
    number: '04',
    title: 'AI & Data Applications',
    description:
      'Building practical Python-driven intelligence modules, integrating analytical libraries (pandas, Matplotlib) and rule-based recommendation engines for real-world domains.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Model Integration', 'Data Transformation']
  },
  {
    number: '05',
    title: 'Modern Web Experiences',
    description:
      'Delivering web applications engineered with route-level code splitting, lazy loading, smooth scroll choreography, and GPU-accelerated motion.',
    technologies: ['Performance Tuning', 'Code Splitting', 'Lazy Loading', 'UX Architecture']
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    number: '01',
    title: 'Finalist — Infosys Global Hackathon 2025',
    organizer: 'Infosys',
    stats: 'Top 33 of 1,942 teams (Top 1.6%)',
    year: '2025',
    description:
      'Selected among the top 33 global teams out of 1,942 competing teams for engineering KisanMitra, an intelligent agricultural platform addressing real challenges in crop health and market accessibility.'
  },
  {
    number: '02',
    title: 'Finalist — Build With Gemini Hackathon 2025',
    organizer: 'University of Delhi',
    stats: 'Hackathon Finalist',
    year: '2025',
    description:
      'Recognized as a finalist at University of Delhi for engineering AI-assisted solutions utilizing Gemini models and cutting-edge web development.'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Supreme Knowledge Foundation Group of Institutions (MAKAUT)',
    degree: 'B.Tech in Computer Science & Engineering',
    period: 'Expected June 2027',
    score: 'CGPA: 7.28 / 10.0 (through Semester 6)',
    details: 'Hooghly, West Bengal. No active backlogs. Focus on Full-Stack Engineering, Data Structures & Algorithms, DBMS, and Operating Systems.'
  },
  {
    institution: 'Panjipukur Smt Tulshi Devi Smriti Vidyapith',
    degree: 'Higher Secondary (WBCHSE) — Pure Science',
    period: '2022',
    score: '89.20%',
    details: 'Physics, Chemistry, Mathematics, Biology. Panjipukur, Hooghly.'
  },
  {
    institution: 'Babnan High School (H.S)',
    degree: 'Secondary Education (WBBSE)',
    period: '2020',
    score: '87.28%',
    details: 'General curriculum with distinction in Science and Mathematics. Hooghly.'
  }
];

export const CORE_SKILLS = {
  languages: ['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'C'],
  frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Design'],
  backend: ['Node.js', 'Express.js', 'Flask', 'REST API Design', 'JWT Authentication'],
  databasesCloud: ['MongoDB', 'MySQL', 'Vercel', 'Render', 'AWS (Foundational)'],
  toolsPractices: ['Git', 'GitHub', 'VS Code', 'AI Coding Tools', 'Problem Solving'],
  csFundamentals: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
};
