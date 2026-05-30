// Content for the Plakat broadsheet portfolio — sourced verbatim from the
// design handoff (README.md + portfolio-plakat.html). Static / presentational.

export const contact = {
  name: 'Raja Hammad Naseer',
  email: 'hammadnaseer2230@gmail.com',
  phone: '+49 152 5206 7067',
  phoneHref: 'tel:+4915252067067',
  linkedin: 'https://www.linkedin.com/in/6hammad9',
  github: 'https://github.com/6hammad9',
  website: 'https://www.rajahammadnaseer.com',
  cv: '/cv/Hammad_CV.pdf',
}

export const nav = [
  { id: 'ueber', de: 'Über', en: 'About' },
  { id: 'koennen', de: 'Können', en: 'Skills' },
  { id: 'projekte', de: 'Projekte', en: 'Work' },
  { id: 'werdegang', de: 'Werdegang', en: 'Career' },
  { id: 'kontakt', de: 'Kontakt', en: '' },
] as const

export const tickerItems = [
  'ROS2',
  'Gazebo Sim',
  'Computer Vision',
  'YOLOv8',
  'Perception',
  'Autonomy',
  'RAG Pipelines',
  'LangChain',
  'ONNX',
  'React',
  'Node.js',
  'Docker',
]

export const stats = [
  { value: 2, suffix: '+', label: 'years full-time\nindustry experience' },
  { value: 6, label: 'production systems\nshipped & live' },
  { value: 3, label: 'web apps with\nzero downtime' },
  { text: 'C1 · B1', label: 'English · German\nUrdu native' },
] as const

export const capabilities = [
  {
    no: 'A / Robotik',
    title: 'Robotics & Autonomy',
    body: 'ROS2-based autonomous-vehicle architectures, real-time perception and multi-object tracking — designed and validated in Gazebo simulation.',
    tags: ['ROS2', 'Gazebo Sim', 'OpenCV', 'YOLOv8'],
  },
  {
    no: 'B / KI',
    title: 'AI / ML Engineering',
    body: 'Computer-vision inference, RAG pipelines and LLM agents — from model integration to deployable services.',
    tags: ['PyTorch', 'ONNX', 'RAG', 'LangChain'],
  },
  {
    no: 'C / Integration',
    title: 'Full-Stack Integration',
    body: 'React + Node + Docker, end to end — so the models and pipelines actually ship as real products under production load.',
    tags: ['React/Next', 'Node.js', 'REST', 'Docker'],
  },
]

export type ProjectLink = { label: string; href: string }

export type Project = {
  no: string
  type: string
  title: string
  desc: string
  stack: string[]
  liveLabel?: string // status chip with green LED
  chips?: string[] // plain status chips (e.g. Private · NDA, Grade 1.2)
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    no: '01',
    type: 'AI · Retrieval / Backend',
    title: 'Air-Gapped Semantic Search Engine',
    desc: 'Three microservices — an ONNX embedding service (~3× faster on CPU), HNSW vector search returning the top-30 in ~10 ms, and a cross-encoder reranker for top-10 precision. Fully local, no external APIs.',
    stack: ['Python', 'FastAPI', 'sentence-transformers', 'ONNX Runtime', 'Redis Stack (HNSW)', 'Docker'],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/6hammad9' }],
  },
  {
    no: '02',
    type: 'Fullstack · Computer Vision',
    title: 'EMACS — Multi-Camera Access Control',
    desc: 'A React.js dashboard + Node.js/Express REST API + MongoDB, deployed via Docker across multiple live camera installations. The backend integrates a YOLOv8/ONNX inference service for real-time face recognition and whitelist state management.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'YOLOv8', 'ONNX'],
    liveLabel: 'Live · multi-site',
    chips: ['Private · NDA'],
  },
  {
    no: '03',
    type: 'Fullstack · Computer Vision',
    title: 'WorkAI — Industrial AI Monitoring',
    desc: 'A full-stack monitoring platform: a React.js real-time dashboard, Node.js REST APIs and MongoDB event logging, all containerised with Docker. Pose-estimation and face-recognition pipelines are exposed as backend services.',
    stack: ['React', 'Node.js', 'MongoDB', 'Docker', 'YOLOv8', 'ONNX'],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/6hammad9' }],
  },
  {
    no: '04',
    type: 'Fullstack · Web',
    title: 'Campus Marketplace — TU Ilmenau',
    desc: 'A full-stack student marketplace built from scratch: user profiles, listings, search, filtering, an admin panel and a responsive UI — validated through user interviews with TU Ilmenau students.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLabel: 'Live',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/6hammad9' },
      { label: 'Live ↗', href: 'https://unimarket-xi.vercel.app' },
    ],
  },
  {
    no: '05',
    type: 'Fullstack · AI',
    title: 'CoverCare — AI Cover-Letter Generator',
    desc: 'Upload multiple CVs and paste a job link or description — CoverCare analyses your experience against the role and generates a tailored cover letter, then exports it as a polished PDF. Dual AI engine: Gemini 2.5 or local Llama 3.2 via Ollama.',
    stack: ['React', 'Python', 'Flask', 'Gemini 2.5', 'Llama 3.2', 'Ollama'],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/6hammad9' }],
  },
  {
    no: '06',
    type: 'AI · Agents',
    title: 'AI Debate Agent',
    desc: 'An LLM agent with dynamic tool use: live web-search grounding, chain-of-thought reasoning, and structured argument / counter-argument output with citation tracking.',
    stack: ['Python', 'LangChain', 'Gemini API', 'Web Search API'],
    links: [{ label: 'GitHub ↗', href: 'https://github.com/6hammad9' }],
  },
]

export const experience = [
  {
    when: '2024 — 2025 · Pakistan',
    role: 'Full-Stack Developer',
    org: 'Jataq Technologies',
    points: [
      "Delivered <b>3 production web applications with zero reported downtime</b> — architecting full-stack Node.js/React.js systems and owning Docker-based CI/CD pipelines from first commit through release.",
      "Eliminated manual customer-support bottlenecks by building a <b>RAG pipeline</b>, engineering the prompt chain, and integrating it via REST API into the existing web infrastructure.",
      "Shaped the company's AI tooling strategy by benchmarking competing <b>LLM frameworks</b> and presenting findings — adopted directly into the production stack.",
    ],
  },
  {
    when: '2023 — 2024 · Pakistan',
    role: 'Artificial Intelligence Engineer',
    org: 'VisionTech360',
    points: [
      "Shipped <b>EMACS</b> — a full-stack access-control platform — to production across multiple live camera installations: React.js dashboard, Node.js/Express REST API, MongoDB event store, all containerised with Docker.",
      "Designed a <b>concurrent multi-stream backend</b> handling simultaneous video feeds with real-time whitelist state management and timestamped event logging — exposed cleanly to the frontend over REST.",
      "Owned the deployment lifecycle from proof-of-concept to production; integrated <b>YOLOv8/ONNX inference</b> as a backend service with a repeatable Docker release workflow.",
    ],
  },
]

export const education = [
  {
    when: 'Okt 2025 — heute · Deutschland',
    degree: 'M.Sc. Computer & Systems Engineering',
    org: 'Technische Universität Ilmenau',
  },
  {
    when: '2019 — 2023 · Pakistan',
    degree: 'B.Sc. Computer Science',
    org: 'SZABIST',
  },
]

// M.Sc. research projects — shown under Education, beside the degree.
export type Research = { grade: string; red?: boolean; title: string; body: string }

export const research: Research[] = [
  {
    grade: 'Note 1,3 · Research Seminar',
    title: 'TEC Cooling Control',
    body: 'Modelled a TEC system (PT2 + dead time), identified parameters via open-loop step test, and tuned a PID controller with anti-windup on Arduino. Rise time 34 min, steady-state error <0.3 °C.',
  },
  {
    grade: 'Laufend · SS2026 Group Study',
    red: true,
    title: 'Modular ROS2 Autonomy',
    body: 'Designing a modular autonomous-driving architecture with defined subsystem interfaces for perception, control and safety — coordinating multi-agent interaction in Gazebo Sim.',
  },
  {
    grade: 'Note 1,3 · Research Skills',
    title: 'UAV Multi-Object Tracking',
    body: 'Built a real-time tracking pipeline and benchmarked ByteTrack vs. Norfair on MOTA, ID-switch rate and FPS across simulated UAV flight maneuvers.',
  },
]

export const skillRows = [
  {
    cat: 'ML & Computer Vision',
    de: 'Perception',
    items: ['YOLOv8', 'ONNX Runtime', 'PyTorch', 'OpenCV', 'Model Training', 'ByteTrack', 'Roboflow'],
  },
  {
    cat: 'Robotik & Simulation',
    de: 'Autonomy',
    items: ['ROS2', 'Gazebo Sim', 'Real-time Perception', 'Multi-Object Tracking'],
  },
  {
    cat: 'AI Integration',
    de: 'LLM / Agents',
    items: ['LangChain', 'OpenAI API', 'Gemini API', 'RAG Pipelines', 'Agentic Workflows', 'Prompt Eng.', 'MCP'],
  },
  {
    cat: 'Backend & Daten',
    de: 'Server / Data',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST API Design', 'WebSockets', 'MongoDB', 'PostgreSQL'],
  },
  {
    cat: 'Frontend',
    de: 'Client',
    items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
  },
  {
    cat: 'DevOps',
    de: 'Tooling',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Git', 'Linux'],
  },
]
