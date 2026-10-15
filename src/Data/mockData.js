export const SERVICES = [
  { id: 'guidance', title: 'Career Guidance', desc: '1-on-1 mentorship sessions starting at ₹49.', icon: 'Compass', color: 'from-violet-600 to-indigo-600' },
  { id: 'workshops', title: 'Workshops', desc: 'Hands-on intensive masterclasses from ₹19.', icon: 'Wrench', color: 'from-emerald-600 to-teal-600' },
  { id: 'courses', title: 'Online Courses', desc: 'Comprehensive full-stack & AI learning paths.', icon: 'BookOpen', color: 'from-purple-600 to-indigo-700' },
  { id: 'internships', title: 'Paid Internships', desc: 'Real client projects & verified work experience.', icon: 'Briefcase', color: 'from-teal-600 to-emerald-700' },
  { id: 'btech-projects', title: 'B.Tech Projects', desc: 'Final-year IEEE & real-time projects with full source code.', icon: 'Cpu', color: 'from-indigo-600 to-violet-800' },
  { id: 'mtech-projects', title: 'M.Tech Projects', desc: 'Research-grade, advanced algorithmic project solutions.', icon: 'GraduationCap', color: 'from-purple-700 to-indigo-900' },
  { id: 'dashboard', title: 'Student Dashboard', desc: 'Track enrolled classes, recordings, and progress.', icon: 'LayoutDashboard', color: 'from-emerald-500 to-teal-700' },
  { id: 'contact', title: 'Contact & Support', desc: '24/7 dedicated mentor & academic support.', icon: 'PhoneCall', color: 'from-slate-700 to-slate-900' }
];

export const WORKSHOPS = [
  { id: 'w1', title: 'Python Basics', duration: '2 Hours Live', fee: 19, tag: 'Beginner Friendly' },
  { id: 'w2', title: 'Python for AI', duration: '2 Hours Live', fee: 19, tag: 'Trending' },
  { id: 'w3', title: 'Data Analytics with Pandas', duration: '2 Hours Live', fee: 19, tag: 'High Demand' },
  { id: 'w4', title: 'Generative AI & LLMs', duration: '2 Hours Live', fee: 19, tag: 'Hot' },
  { id: 'w5', title: 'Java Core Essentials', duration: '2 Hours Live', fee: 19, tag: 'Foundations' },
  { id: 'w6', title: 'Full Stack MERN Architecture', duration: '2 Hours Live', fee: 19, tag: 'Web Dev' },
  { id: 'w7', title: 'QA Automation Testing', duration: '2 Hours Live', fee: 19, tag: 'Testing' },
  { id: 'w8', title: 'Career & Interview Preparation', duration: '2 Hours Live', fee: 19, tag: 'Placements' },
  { id: 'w9', title: 'ATS Resume Building Masterclass', duration: '2 Hours Live', fee: 19, tag: 'Career Boost' },
  { id: 'w10', title: 'Job Preparation & Mock Q&A', duration: '2 Hours Live', fee: 19, tag: 'Interview Prep' }
];

export const COURSES = [
  {
    id: 'c1',
    title: 'Python Programming',
    category: 'Programming',
    price: 399,
    mode: 'Online Live',
    recordings: true,
    certificate: true,
    features: ['Live Interactive Classes', 'Practical Coding Exercises', 'Assignments & Quizzes', 'Real-Time Examples', 'Mentor Support']
  },
  {
    id: 'c2',
    title: 'Python with AI Masterclass',
    category: 'AI & Data Science',
    price: 499,
    mode: 'Online Live',
    recordings: true,
    certificate: true,
    features: ['Python Deep Dive', 'AI Fundamentals', 'Generative AI Integration', 'Prompt Engineering', 'AI Coding Tools', 'Industry Projects']
  }
];

export const COURSE_MODULES = [
  'Module 1: Python Basics & Syntax',
  'Module 2: Variables, Data Types & Operators',
  'Module 3: Conditionals & Loops',
  'Module 4: Functions & Scopes',
  'Module 5: Object Oriented Programming (OOP)',
  'Module 6: File Handling & IO Operations',
  'Module 7: Exception Handling & Debugging',
  'Module 8: Essential Libraries (NumPy, Pandas)',
  'Module 9: AI Fundamentals & Machine Learning Intro',
  'Module 10: Generative AI & Large Language Models',
  'Module 11: Prompt Engineering Techniques',
  'Module 12: Modern AI Development Tools',
  'Module 13: Capstone Real-Time Project & Deployment'
];

export const INTERNSHIPS = [
  { id: 'i1', title: 'Python Internship', stipend: 'Paid Track', price: 999 },
  { id: 'i2', title: 'Python + AI Internship', stipend: 'Paid Track', price: 1499 },
  { id: 'i3', title: 'Data Analytics Internship', stipend: 'Paid Track', price: 1499 },
  { id: 'i4', title: 'Full Stack Web Dev Internship', stipend: 'Paid Track', price: 1999 },
  { id: 'i5', title: 'QA Automation Internship', stipend: 'Paid Track', price: 1499 }
];

export const PROJECT_CATEGORIES = ['Python', 'Java', 'AI/ML', 'Data Analytics', 'Full Stack', 'IoT', 'Cloud', 'Cyber Security', 'Research/IEEE'];

export const PROJECTS_LIST = [
  { id: 'p1', title: 'AI-Based Smart Healthcare Diagnostic Assistant', category: 'AI/ML', degree: 'Both' },
  { id: 'p2', title: 'Blockchain Secured Decentralized Voting Platform', category: 'Cyber Security', degree: 'B.Tech' },
  { id: 'p3', title: 'Distributed IoT Sensor Grid for Urban Air Quality', category: 'IoT', degree: 'Both' },
  { id: 'p4', title: 'Deep Learning Real-Time Object Recognition System', category: 'Python', degree: 'M.Tech' },
  { id: 'p5', title: 'E-Commerce Platform with Microservices & Cloud Native Stack', category: 'Full Stack', degree: 'B.Tech' },
  { id: 'p6', title: 'Financial Predictive Analytics Engine using PySpark', category: 'Data Analytics', degree: 'M.Tech' }
];