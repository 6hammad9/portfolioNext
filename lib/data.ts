export const personalInfo = {
  name: 'Raja Hammad Naseer',
  title: 'Fullstack Engineer & AI Developer',
  tagline: 'Building production AI systems and web applications — from LLM pipelines to real-time CV platforms.',
  email: 'hammadnaseer2230@gmail.com',
  phone: '+49 15252067067',
  location: 'Ilmenau, Germany',
  github: 'https://github.com/6hammad9',
  linkedin: 'https://www.linkedin.com/in/6hammad9',
  portfolio: 'https://portfolio-nine-bice-34.vercel.app/',
}

export const cvs = [
  {
    label: 'Fullstack',
    locale: 'EN',
    href: '/cv/raja-hammad-naseer-fullstack.pdf',
    primary: true,
  },
  {
    label: 'Fullstack',
    locale: 'DE',
    href: '/cv/raja-hammad-naseer-fullstack-de.pdf',
    primary: false,
  },
  {
    label: 'AI / ML',
    locale: 'EN',
    href: '/cv/raja-hammad-naseer-ai.pdf',
    primary: false,
  },
] as const

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST API Design', 'MVC Architecture', 'WebSockets', 'FastAPI'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Tooling',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Git', 'Linux'],
  },
  {
    category: 'AI Integration',
    items: ['LangChain', 'OpenAI API', 'Gemini API', 'RAG Pipelines', 'Agentic Workflows', 'Prompt Engineering', 'MCP'],
  },
  {
    category: 'ML & Computer Vision',
    items: ['YOLOv8', 'ONNX Runtime', 'PyTorch', 'OpenCV', 'Model Training', 'ByteTrack', 'Roboflow'],
  },
]

export const experience = [
  {
    title: 'Full-Stack Developer',
    company: 'Jataq Technologies',
    location: 'Pakistan',
    period: '2024 – 2025',
    description: 'Startup delivering web applications and AI-powered tools for clients.',
    achievements: [
      'Delivered 3 production web applications with zero reported downtime by architecting full-stack Node.js/React.js systems and owning Docker-based CI/CD pipelines from first commit through release.',
      'Eliminated manual customer support bottlenecks by building a RAG pipeline, engineering the prompt chain, and integrating the solution via REST API into the existing web infrastructure.',
      'Shaped the company AI tooling strategy by systematically benchmarking competing LLM frameworks and presenting findings — adopted directly into the production stack.',
    ],
  },
  {
    title: 'Artificial Intelligence Engineer',
    company: 'VisionTech360',
    location: 'Pakistan',
    period: '2023 – 2024',
    description: 'IT consultancy providing AI, web, and network security services.',
    achievements: [
      'Shipped EMACS — a full-stack access-control platform — to production across multiple live camera installations: React.js dashboard, Node.js/Express REST API, MongoDB event store, all containerised with Docker.',
      'Designed concurrent multi-stream backend handling simultaneous video feeds with real-time whitelist state management and timestamped event logging — exposed cleanly to the frontend over REST.',
      'Owned the deployment lifecycle from proof-of-concept to production, including Docker containerisation and a repeatable release workflow; integrated YOLOv8/ONNX inference as a backend service.',
    ],
  },
]

export type Project = {
  title: string
  category: 'Fullstack' | 'AI' | 'Research'
  description: string
  bullets?: string[]
  tech: string[]
  github: string
  live: string
  image?: string
  imageHover?: string
}

export const projects: Project[] = [
  {
    title: 'Campus Marketplace — TU Ilmenau',
    category: 'Fullstack',
    description:
      'Full-stack student marketplace built from scratch: user profiles, listings, search, filtering, admin panel, and responsive UI. Validated through user interviews with TU Ilmenau students.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/6hammad9',
    live: 'https://unimarket-xi.vercel.app',
    image: '/projects/campus-marketplace.png',
    imageHover: '/projects/campus-marketplace-2.png',
  },
  {
    title: 'EMACS — Multi-Camera Access Control',
    category: 'Fullstack',
    description:
      'React.js dashboard + Node.js/Express REST API + MongoDB, deployed via Docker across multiple live camera installations. Backend integrates a YOLOv8/ONNX inference service for real-time face recognition and whitelist state management.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'YOLOv8', 'ONNX'],
    github: '',
    live: '',
    image: '/projects/emacs.png',
    imageHover: '/projects/emacs-2.png',
  },
  {
    title: 'WorkAI — Industrial AI Monitoring',
    category: 'Fullstack',
    description:
      'Full-stack monitoring platform: React.js real-time dashboard, Node.js REST APIs, MongoDB event logging, all containerised with Docker. Pose-estimation and face-recognition pipelines exposed as backend services.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'YOLOv8', 'ONNX'],
    github: 'https://github.com/6hammad9',
    live: '',
    image: '/projects/workai-1.png',
    imageHover: '/projects/workai-3.png',
  },
  {
    title: 'AI Debate Agent',
    category: 'AI',
    description:
      'LLM agent with dynamic tool use: live web search grounding, chain-of-thought reasoning, and structured argument/counterargument output with citation tracking.',
    tech: ['Python', 'LangChain', 'Gemini API', 'Web Search API'],
    github: 'https://github.com/6hammad9',
    live: '',
    image: '/projects/debate-agent.png',
    imageHover: '/projects/debate-agent-2.png',
  },
  {
    title: 'CoverCare — AI Cover Letter Generator',
    category: 'Fullstack',
    description:
      'Upload multiple CVs and paste a job link or description — CoverCare analyses your experience against the role and generates a tailored cover letter, then exports it as a polished PDF.',
    bullets: [
      'Multi-CV upload with PDF text extraction',
      'Dual AI engine: Gemini 2.5 API or local Llama 3.2 via Ollama',
      'Job description ingested via URL scrape or direct paste',
      'One-click export to professionally formatted PDF',
    ],
    tech: ['React.js', 'Python', 'Flask', 'Gemini 2.5', 'Llama 3.2', 'Ollama', 'PDF Generation'],
    github: 'https://github.com/6hammad9',
    live: '',
    image: '/projects/covercare-1.png',
  },
  {
    title: 'TEC Thermal Control — System Identification',
    category: 'Research',
    description:
      'TU Ilmenau control-engineering research seminar. Ran an open-loop step test on a thermoelectric cooler, logged 7000+ sensor samples at 1 Hz, cleaned acquisition artefacts, and fit a second-order (PT2) dynamic model directly from the measured signal.',
    bullets: [
      'Custom Arduino + DS18B20 acquisition pipeline at 1 Hz, 7000+ samples',
      'PT2 model fit with scipy.optimize.curve_fit — R² = 0.9943, RMSE = 0.12 °C',
      'Extracted dead time, process gain, and time constants from measured data',
      'Same measure / clean / fit / validate loop used in signal-based NDT analysis',
    ],
    tech: ['Python', 'NumPy', 'SciPy', 'Pandas', 'Arduino', 'DS18B20'],
    github: 'https://github.com/6hammad9',
    live: '',
    image: '/projects/cooling-1.png',
    imageHover: '/projects/cooling-3.png',
  },
]

export const education = [
  {
    degree: 'M.Sc. Computer & Systems Engineering',
    school: 'Technische Universität Ilmenau',
    location: 'Germany',
    period: '2025 – Present',
    note: 'Expected 2027',
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'SZABIST',
    location: 'Pakistan',
    period: '2019 – 2023',
    note: 'AI, Web Technologies, Databases',
  },
]