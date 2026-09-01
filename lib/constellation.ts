// Content for the Constellation node-map portfolio — ported verbatim from the
// design handoff (README.md + Constellation.dc.html). Static / presentational.
//
// Asset paths are rewritten from the prototype's `public/…` to Next.js's
// public-root `/…`. Everything else is the prototype's copy unchanged.

export type Link = { label: string; href: string }

export type Entry = {
  title: string
  tag: string
  /** One-line summary shown in the thread panel. */
  line: string
  /** Full prose shown in the detail sheet. */
  body: string
  stack: string[]
  links: Link[]
}

export type Thread = {
  id: string
  label: string
  /** Node position as a percentage of the viewport. */
  x: number
  y: number
  blurb: string
  items: Entry[]
}

export type NodeBase = { id: string; label: string; x: number; y: number }

export type Shot = { src: string; cap: string }

export type Edge = [string, string]

export const THREADS: Thread[] = [
  {
    id: "systems", label: "Systems", x: 28, y: 22,
    blurb: "Things that have to keep running when nobody is watching them. Services, inference, pipelines, the parts with a latency budget.",
    items: [
      { title: "Air-Gapped Semantic Search Engine", tag: "Python · ONNX", line: "Three microservices, fully local, no external APIs.",
        body: "An ONNX embedding service running ~3× faster on CPU, HNSW vector search returning the top-30 in about 10 ms, and a cross-encoder reranker for top-10 precision. Nothing leaves the machine.",
        stack: ["Python", "FastAPI", "sentence-transformers", "ONNX Runtime", "Redis Stack (HNSW)", "Docker"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9" }] },
      { title: "Chronos for Energy Forecasting", tag: "Fraunhofer IOSB", line: "Extending a foundation model to load, generation and price data.",
        body: "At Fraunhofer IOSB I profile Amazon's Chronos model for accuracy, robustness and runtime against public energy-market datasets, then design architecture extensions that adapt foundation-model methods to how energy markets actually behave.",
        stack: ["PyTorch", "Time series", "Foundation models", "Python"], links: [] },
      { title: "Docker CI/CD, three apps deep", tag: "Jataq Technologies", line: "First commit to release, run by one person: me.",
        body: "Three production web apps on a Node/React stack, with the Docker CI/CD pipelines built and maintained solo. Also a RAG pipeline wired into the live site over REST, because support was drowning in the same four questions.",
        stack: ["Docker", "GitHub Actions", "Node.js", "REST"], links: [] },
    ],
  },
  {
    id: "interfaces", label: "Computer Vision", x: 74, y: 20,
    blurb: "Cameras pointed at real rooms, and the models that have to make sense of them while someone is standing there waiting.",
    items: [
      { title: "EMACS — Multi-Camera Access Control", tag: "Live · multi-site", line: "React dashboard over a real-time face-recognition backend.",
        body: "A React dashboard, a Node/Express REST API and MongoDB, deployed via Docker across multiple live camera installations. Underneath sits a concurrent backend handling several video feeds at once, tracking whitelist state in real time and timestamping every event. Proof of concept to production.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Docker", "YOLOv8", "ONNX"], links: [] },
      { title: "WorkAI — Industrial AI Monitoring", tag: "Full-stack", line: "Pose estimation and face recognition, as backend services.",
        body: "A real-time React monitoring dashboard with Node REST APIs and MongoDB event logging, all containerised. The pose-estimation and face-recognition pipelines are exposed as services rather than bolted into the app.",
        stack: ["React", "Node.js", "MongoDB", "Docker", "YOLOv8", "ONNX"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9" }] },
    ],
  },
  {
    id: "hardware", label: "Hardware", x: 20, y: 70,
    blurb: "Mostly the QCar. Where the code stops being an abstraction and something in the room actually moves — or gets warm, or refuses to.",
    items: [
      { title: "QCar Autonomous Overtaking", tag: "QCar 2 × ROSbot 2", line: "A 1/10-scale car that passes a moving obstacle on a real track.",
        body: "A self-driving 1/10-scale vehicle on a physical indoor track. Cartographer pure-localization against a saved map, a CasADi/IPOPT model-predictive controller tracking a recorded trajectory at 12.5 Hz on the Jetson, and RPLidar-based detection driving a behaviour state machine that swings out, passes a moving ROSbot 2 and returns to the reference line. Tracking error 1–4 cm over continuous laps.",
        stack: ["ROS 2 Humble", "CasADi", "IPOPT", "Cartographer SLAM", "RPLidar A2M12", "Nav2", "Python", "C++"], links: [] },
      { title: "TEC Cooling Control", tag: "Note 1,3", line: "PID with anti-windup on an Arduino. 34 min rise time.",
        body: "Modelled a thermoelectric cooling system as PT2 plus dead time, identified the parameters with an open-loop step test, then tuned a PID controller with anti-windup on Arduino. Steady-state error under 0.3 °C.",
        stack: ["Control theory", "Arduino", "PID", "System identification"], links: [] },
      { title: "Modular ROS2 Autonomy", tag: "In progress", line: "Subsystem interfaces for perception, control and safety.",
        body: "A modular autonomous-driving architecture with explicitly defined interfaces between perception, control and safety, coordinating multi-agent interaction in Gazebo Sim. Group study, SS2026, still very much open on the workbench.",
        stack: ["ROS2", "Gazebo Sim", "Architecture", "Safety"], links: [] },
      { title: "UAV Multi-Object Tracking", tag: "Note 1,3", line: "ByteTrack vs. Norfair, benchmarked properly.",
        body: "A real-time tracking pipeline benchmarked on MOTA, ID-switch rate and FPS across simulated UAV flight manoeuvres — the interesting result being how differently the two trackers fail rather than which one wins.",
        stack: ["ByteTrack", "Norfair", "OpenCV", "Python"], links: [] },
    ],
  },
  {
    id: "experiments", label: "LLMs", x: 82, y: 62,
    blurb: "Language models made to do something specific — fine-tuned, quantised, grounded in real documents. Plus one foundation model that forecasts electricity rather than words.",
    items: [
      { title: "MediChat AI — Fine-Tuned Medical Chatbot", tag: "TinyLlama · QLoRA", line: "A 1.1B model fine-tuned on a 4 GB GPU, grounded by RAG.",
        body: "A medical chatbot that runs entirely on your own machine. TinyLlama 1.1B fine-tuned with QLoRA: the base model loads in 4-bit NF4 at around 900 MB instead of 4.4 GB, and LoRA trains 12.6 M parameters — 1.13% of the model — so the whole run fits in a 4 GB RTX 3050. The training set is WebMD SQuAD v2 regrouped by article into 7,664 examples across 3,832 conditions, each one teaching the same four-section answer: possible causes, home management, red flags, and a reminder to see an actual doctor. The adapter is merged back into the base, converted to GGUF q8_0 at 1.17 GB and registered with Ollama. At query time a ChromaDB index of 19,725 WebMD Q&As, embedded with all-MiniLM-L6-v2, returns the top three matches into the prompt — so the answers are grounded in real content rather than whatever a 1B model happens to remember. FastAPI behind a single-file frontend, with a keyword safety filter in front of both.",
        stack: ["TinyLlama 1.1B", "QLoRA / PEFT", "bitsandbytes", "GGUF", "Ollama", "ChromaDB", "LangChain", "FastAPI"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/medichat-tinyllama-q8" }] },
      { title: "AI Debate Agent", tag: "LangChain", line: "An LLM that argues with itself, with citations.",
        body: "An agent with dynamic tool use: live web-search grounding, chain-of-thought reasoning, and structured argument / counter-argument output with citation tracking. It is better at debating than I am, which was not the goal.",
        stack: ["Python", "LangChain", "Gemini API", "Web Search API"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9" }] },
      { title: "CoverCare", tag: "Gemini / Llama", line: "Upload CVs, paste a job link, get a letter that fits.",
        body: "Analyses your experience against the role and generates a tailored cover letter, exported as a clean PDF. Dual engine: Gemini 2.5 in the cloud, or Llama 3.2 locally via Ollama if you would rather nobody read your CV.",
        stack: ["React", "Python", "Flask", "Gemini 2.5", "Llama 3.2", "Ollama"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9" }] },
    ],
  },
  {
    id: "web", label: "Web", x: 41, y: 80,
    blurb: "The oldest thread. Still the fastest way to put a thing in front of a person.",
    items: [
      { title: "Campus Marketplace — TU Ilmenau", tag: "Live", line: "Built from scratch, validated on real students.",
        body: "Profiles, listings, search, filtering, an admin panel and a responsive UI — then user interviews with TU Ilmenau students to find out which half of it was wrong.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9" }, { label: "Live ↗", href: "https://unimarket-xi.vercel.app" }] },
      { title: "This site, version four", tag: "Next.js", line: "Rewritten more often than is defensible.",
        body: "Every rebuild starts because I saw a portfolio that looked like every other portfolio and panicked. This is the version where I stopped pretending my work fits in one column.",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9/portfolioNext" }] },
    ],
  },
  {
    id: "art", label: "Art", x: 14, y: 44,
    blurb: "The thread with the least code in it and the most influence over everything else. Currently under-documented, which is my fault.",
    items: [
      { title: "Structure before decoration", tag: "Note to self", line: "Why this site looks like a plan drawing.",
        body: "Architecture is the one I keep coming back to: load paths, thresholds, how a building tells you where to walk without a sign. This layout is a floor plan of a brain, and the grid behind it is not decorative — it is the same grid every element sits on.",
        stack: ["Spatial design", "Drafting", "Typography"], links: [] },
    ],
  },
  {
    id: "data", label: "Data Analysis", x: 87, y: 38,
    blurb: "Measurements first, opinions after. Forecasting, benchmarking, and publishing the error alongside the answer.",
    items: [
      { title: "CertiRoute — heat-aware shift timing", tag: "Live · Streamlit", line: "Tells an outdoor crew what hour to start today.",
        body: "A dispatcher marks the crew base and work sites on a map. CertiRoute reads today's street-level heat from FortyGuard, predicts the remaining hours with a trained model of how that area's heat moves through a day, and compares every start time the shift could use — returning one decision, begin at this hour, with the visit order worked out and a calibrated interval attached. Measured across Phoenix, Houston and Miami: reordering stops inside a fixed window changed the recommended sequence in zero of three cases, because site-to-site spread is 0.32–2.32 °C while the swing across a day is 5.2–9.3 °C. When a crew works dominates what order they work in by roughly an order of magnitude. It still computes the heat-aware order, and still reports it. No login, no install — reviewing a finished day runs entirely on measurements committed to the repository, so it costs nothing on a cold deployment.",
        stack: ["Python", "Streamlit", "FortyGuard API", "Forecasting", "Calibrated intervals"],
        links: [{ label: "Live ↗", href: "https://certiroute.streamlit.app/" }, { label: "GitHub ↗", href: "https://github.com/6hammad9" }] },
      { title: "Pakistan Budget Allocation, 2000–2018", tag: "R · Public finance", line: "Two decades of provincial budget splits, in R.",
        body: "Federal budget allocation across Balochistan, Sindh, Khyber Pakhtunkhwa and Punjab, cleaned one province at a time and then merged into a single dataset. R for the whole pipeline — reshaping, comparison across provinces, and the plots that make nineteen years of allocation legible on one axis.",
        stack: ["R", "Data cleaning", "Visualisation", "Public finance data"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9/Budget-Allocation-2000-2018-" }] },
      { title: "Bike-Share Rider Analysis", tag: "R · Google case study", line: "The Google Data Analytics capstone, done in R.",
        body: "Case study 1 from the Google Data Analytics certificate: a bike-share trip dataset taken from raw rider records through cleaning, aggregation and a set of plots. Done in R rather than the spreadsheet route the course suggests, which made the reshaping and the charts one piece of work instead of two.",
        stack: ["R", "Data cleaning", "Aggregation", "Visualisation"],
        links: [{ label: "GitHub ↗", href: "https://github.com/6hammad9/Google-analytics-CaseStudy1" }] },
    ],
  },
  {
    id: "research", label: "Research", x: 50, y: 11,
    blurb: "Three publications out of TU Ilmenau's Institut für Automatisierungs- und Systemtechnik. Written up properly, full text where allowed, 40 reads and counting.",
    items: [
      { title: "Modeling and Temperature Control of a Peltier-Based Cooling Chamber", tag: "Research · May 2026", line: "The full engineering cycle, hardware included.",
        body: "Physical modelling, parameter estimation, experimental system identification, stability analysis, controller design and closed-loop hardware validation — start to finish on one system. The rig: a Laird DA-045-24-02 TEC assembly bolted to an aluminium cold plate inside a 43-litre insulated box. Rise time 34 min, steady-state error under 0.3 °C, PID with anti-windup on Arduino.",
        stack: ["Control theory", "System identification", "PID", "Arduino", "Peltier / TEC"],
        links: [{ label: "Full text ↗", href: "https://www.researchgate.net/publication/405075772_Modeling_and_Temperature_Control_of_a_Peltier-Based_Cooling_Chamber" }] },
      { title: "Benchmarking Real-Time MOT in Aerial Surveillance", tag: "CCSE2026", line: "ByteTrack vs. Norfair, on drone footage.",
        body: "A comparative analysis of two real-time multi-object trackers across simulated UAV flight manoeuvres, measured on MOTA, ID-switch rate and FPS. Presented at CCSE2026; the benchmark data is published alongside it, so the numbers can be checked rather than believed.",
        stack: ["ByteTrack", "Norfair", "MOTA", "Aerial surveillance", "Python"],
        links: [
          { label: "Presentation ↗", href: "https://www.researchgate.net/publication/403661752_CCSE2026_Benchmarking_Real-Time_MOT_in_Aerial_Surveillance_A_Comparative_Analysis_of_ByteTrack_and_Norfair" },
          { label: "Dataset ↗", href: "https://www.researchgate.net/publication/403661670_Benchmarking_Real_Time_Multi_Object_Tracking_MOT_in_Aerial_Surveillance_A_Comparative_Analysis_of_ByteTrack_and_Norfairpdf" },
        ] },
    ],
  },
  {
    id: "models", label: "Models", x: 70, y: 82,
    blurb: "Seven weights published on Hugging Face — the ones behind the platforms, exported and pinned so a deployment can pull a known-good artefact instead of whatever trained last.",
    items: [
      { title: "qcar2-ml-steering-weights", tag: "Image segmentation · Jul 19", line: "Steering weights for the QCar 2 autonomous platform.",
        body: "An RF-DETR segmentation ONNX export, used by rfdetr_onnx_lane_node to detect the lane mask and publish a steering target. RF-DETR segmentation medium, float32 NCHW input at [1, 3, 432, 432], classes for background, lane and traffic light, running on ONNX Runtime under CPU or CUDA. Built for the QCar2 ROS 2 simulation and autonomy stack — lane keeping, LiDAR obstacle avoidance, lane switching. Trained and exported for this project's track and camera viewpoint: it is not a production autonomous-driving model and should not be used as a real vehicle safety system.",
        stack: ["RF-DETR", "ONNX Runtime", "ROS 2", "QCar 2", "Segmentation"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/qcar2-ml-steering-weights" }] },
      { title: "arcface-glintr100-onnx", tag: "Feature extraction · Jul 19", line: "Face embeddings, exported for CPU inference.",
        body: "InsightFace's ArcFace glintr100 — ResNet-100 trained on Glint360K — as a 512-dimensional face-embedding model, 260.7 MB of ONNX. Takes a 112×112 RGB crop in CHW and returns an L2-comparable embedding; identities are compared by cosine similarity. One catch the card is explicit about: this export normalises by dividing by 255, which differs from canonical ArcFace preprocessing and has to match however your enrolled gallery was built. Released for non-commercial research only — the rights remain InsightFace's.",
        stack: ["ArcFace", "ResNet-100", "Glint360K", "ONNX Runtime", "Embeddings"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/arcface-glintr100-onnx" }] },
      { title: "yolov5m-person-detector-onnx", tag: "Object detection · Jul 19", line: "Person detection, the first stage of everything.",
        body: "An ONNX export of YOLOv5m, used as the person detector in the PULAO event access-control vision pipeline: person boxes feed a ByteTrack tracker, which feeds ArcFace face recognition. Float32 [N, 3, H, W] input with dynamic spatial dimensions, typically letterboxed to 320×320, returning a [1, num_boxes, 85] detection tensor over the COCO classes. AGPL-3.0, inherited from Ultralytics YOLOv5, so using it means either open-source compliance or a commercial licence.",
        stack: ["YOLOv5m", "ONNX Runtime", "ByteTrack", "Object detection"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/yolov5m-person-detector-onnx" }] },
      { title: "f2-face-detector-onnx", tag: "Object detection · Jul 19", line: "The detector that feeds the recogniser.",
        body: "A lightweight 2.4 MB face detector in ONNX, used to localise faces in the PULAO vision pipeline so that only worthwhile crops ever reach ArcFace. 320×320 letterboxed RGB in, boxes in xywh with confidence scores out. The provenance is the honest part of the card: the exact architecture, training data and licence could not be determined from the file, so it stays private until that is established rather than redistributed on an assumption.",
        stack: ["Face detection", "ONNX Runtime"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/f2-face-detector-onnx" }] },
      { title: "PPE", tag: "Detection · Jul 19", line: "Is the right equipment actually being worn.",
        body: "An AI-powered workplace safety system combining PPE compliance detection, ArcFace-based face recognition, worker tracking and GDPR-compliant anonymisation for real-time industrial surveillance. Built for smart factories: YOLOv8 detects the three things that actually matter on a floor — helmet, safety vest, face mask — and the anonymisation is part of the pipeline rather than a setting bolted on afterwards.",
        stack: ["YOLOv8", "ArcFace", "Worker tracking", "GDPR anonymisation"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/PPE" }] },
      { title: "Face-Recognition-ArcFace", tag: "Recognition · May 21", line: "The recognition weights themselves.",
        body: "The ArcFace recognition weights behind the multi-site access-control platform, published so the whole pipeline — detect, embed, match — can be reproduced from artefacts rather than descriptions.",
        stack: ["ArcFace", "Face recognition"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/Face-Recognition-ArcFace" }] },
      { title: "medichat-tinyllama-q8", tag: "1B · quantised · Apr 26", line: "A small LLM, quantised to run somewhere real.",
        body: "TinyLlama tuned for medical chat and quantised to Q8 — an exercise in getting useful language behaviour out of a 1B model on hardware with no datacentre attached. The most downloaded thing I have published, which says something about where the demand is.",
        stack: ["TinyLlama", "Quantisation", "LLM fine-tuning"],
        links: [{ label: "Model card ↗", href: "https://huggingface.co/HammadNaseer/medichat-tinyllama-q8" }] },
    ],
  },
];

/** Screenshots keyed by entry title. */
export const SHOTS: Record<string, Shot[]> = {
  "EMACS — Multi-Camera Access Control": [
    { src: "/projects/emacs.png", cap: "Live camera view with whitelist state" },
    { src: "/projects/emacs-2.png", cap: "Two live feeds, whitelist verdict per face" },
  ],
  "WorkAI — Industrial AI Monitoring": [
    { src: "/projects/workai-1.png", cap: "PPE violations flagged, faces anonymised" },
    { src: "/projects/workai-2.png", cap: "Real-time monitoring dashboard" },
    { src: "/projects/workai-3.png", cap: "Pose-estimation event log" },
    { src: "/projects/workai-4.png", cap: "Personnel enrolment with face capture" },
  ],
  "UAV Multi-Object Tracking": [
    { src: "/projects/uav-mot-benchmark.png", cap: "ByteTrack and Norfair on the same frames, latency per tracker" },
    { src: "/projects/uav-sim.png", cap: "Simulated UAV flight the benchmark was flown in" },
  ],
  "Benchmarking Real-Time MOT in Aerial Surveillance": [
    { src: "/projects/uav-mot-benchmark.png", cap: "ByteTrack and Norfair on the same frames, latency per tracker" },
  ],
  "QCar Autonomous Overtaking": [
    { src: "/projects/qcar-overtake-1.png", cap: "Passing the ROSbot 2 on the main straight" },
    { src: "/projects/qcar-overtake-2.png", cap: "QCar 2 through the bend, RPLidar A2M12 up top" },
  ],
  "Campus Marketplace — TU Ilmenau": [
    { src: "/projects/campus-marketplace.png", cap: "Landing page and how it works" },
    { src: "/projects/campus-marketplace-2.png", cap: "Listings and search" },
  ],
  CoverCare: [{ src: "/projects/covercare-1.png", cap: "CV analysis against a job description" }],
  "AI Debate Agent": [
    { src: "/projects/debate-agent.png", cap: "Argument / counter-argument output" },
    { src: "/projects/debate-agent-2.png", cap: "Tool use and citation tracking" },
  ],
  "TEC Cooling Control": [
    { src: "/projects/cooling-1.png", cap: "Open-loop step response" },
    { src: "/projects/cooling-3.png", cap: "PID with anti-windup, settled" },
  ],
};

export const EDGES: Edge[] = [
  ["core", "systems"], ["core", "interfaces"], ["core", "hardware"],
  ["core", "experiments"], ["core", "web"], ["core", "art"], ["core", "data"],
  ["systems", "hardware"], ["interfaces", "web"], ["experiments", "systems"],
  ["art", "hardware"], ["art", "interfaces"], ["experiments", "web"],
  ["data", "systems"], ["data", "hardware"], ["data", "experiments"],
  ["core", "research"], ["core", "models"],
  ["research", "hardware"], ["research", "data"], ["research", "systems"],
  ["models", "interfaces"], ["models", "experiments"], ["models", "web"], ["models", "hardware"],
];

export const CORE: NodeBase = { id: "core", label: "Hammad", x: 50, y: 47 };

/* ===================================================================
   "The boring version" — the plain CV behind the header toggle, for a
   recruiter with twenty seconds who should not have to play with a
   node graph. No phone number here: removed at the client's request.
   =================================================================== */

export const CV_LEDE =
  "M.Sc. Computer & Systems Engineering at TU Ilmenau. Two years building computer-vision and full-stack systems that run in production. Currently extending time-series foundation models at Fraunhofer IOSB."

export const CV_CONTACT: Link[] = [
  { label: "hammadnaseer2230@gmail.com", href: "mailto:hammadnaseer2230@gmail.com" },
  { label: "GitHub ↗", href: "https://github.com/6hammad9" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/6hammad9" },
  { label: "Hugging Face ↗", href: "https://huggingface.co/HammadNaseer" },
  { label: "ResearchGate ↗", href: "https://www.researchgate.net/profile/Raja-Hammad-Naseer" },
]

export type CvRow = { meta: string; role: string; note?: string }

export const CV_EXPERIENCE: CvRow[] = [
  {
    meta: "2026 — now · Ilmenau",
    role: "Machine Learning Intern — Fraunhofer IOSB",
    note: "Extending Amazon's Chronos foundation model for energy time-series forecasting — load, generation, prices, weather — and profiling it for accuracy and runtime against public market datasets.",
  },
  {
    meta: "2024 — 2025 · Pakistan",
    role: "RAG Developer — Jataq Technologies",
    note: "Built the RAG pipeline that killed the repetitive support questions and benchmarked the LLM frameworks behind the team's AI stack — alongside three production web apps on Node/React and the Docker CI/CD I ran myself.",
  },
  {
    meta: "2023 — 2024 · Pakistan",
    role: "AI Engineer — VisionTech360",
    note: "Built EMACS end to end: a multi-camera access-control platform live across several sites, with YOLOv8/ONNX inference running as its own service behind a repeatable Docker release.",
  },
]

export const CV_EDUCATION: CvRow[] = [
  {
    meta: "Oct 2025 — now · Germany",
    role: "M.Sc. Computer & Systems Engineering — TU Ilmenau",
  },
  {
    meta: "2019 — 2023 · Pakistan",
    role: "B.Sc. Computer Science — SZABIST",
  },
]

export const CV_CERTIFICATIONS: CvRow[] = [
  {
    meta: "Data analytics",
    role: "Google Data Analytics Professional Certificate",
  },
  {
    meta: "Backend",
    role: "Node.js: The Complete Guide — MVC, REST APIs, GraphQL",
  },
]

export const CV_WORKSHOPS: CvRow[] = [
  {
    meta: "2025 · Fraunhofer IOSB-AST",
    role: "Dataspaces",
    note: "Hands-on session on secure, sovereign data infrastructure — data consumption and contract negotiation flows.",
  },
]

export type CvPublication = { meta: string; title: string; href: string }

export const CV_PUBLICATIONS: CvPublication[] = [
  {
    meta: "May 2026 · Research",
    title: "Modeling and Temperature Control of a Peltier-Based Cooling Chamber ↗",
    href: "https://www.researchgate.net/publication/405075772_Modeling_and_Temperature_Control_of_a_Peltier-Based_Cooling_Chamber",
  },
  {
    meta: "Feb 2026 · CCSE2026",
    title: "Benchmarking Real-Time MOT in Aerial Surveillance: ByteTrack vs. Norfair ↗",
    href: "https://www.researchgate.net/publication/403661752_CCSE2026_Benchmarking_Real-Time_MOT_in_Aerial_Surveillance_A_Comparative_Analysis_of_ByteTrack_and_Norfair",
  },
  {
    meta: "Hugging Face · 7 models",
    title: "QCar2 steering · ArcFace ONNX · YOLOv5m person · PPE · MediChat TinyLlama Q8 ↗",
    href: "https://huggingface.co/HammadNaseer",
  },
]

export const CV_SKILLS: { label: string; list: string }[] = [
  { label: "Perception", list: "YOLOv8 · ONNX Runtime · PyTorch · OpenCV · ByteTrack · Roboflow" },
  { label: "Autonomy", list: "ROS2 · Gazebo Sim · Real-time perception · Multi-object tracking" },
  { label: "LLM / Agents", list: "LangChain · OpenAI & Gemini APIs · RAG · Agentic workflows · MCP" },
  { label: "Server / Data", list: "Node.js · Express · FastAPI · REST · WebSockets · MongoDB · PostgreSQL" },
  { label: "Client", list: "React · Next.js · TypeScript · Redux · Tailwind" },
  { label: "Tooling", list: "Docker · CI/CD · GitHub Actions · Git · Linux" },
]

export const CV_LANGUAGES = "English C1 full professional · German B1 · Urdu native"

/* ===================================================================
   About panel — the centre of the map.
   =================================================================== */

export const ABOUT_LINKS: Link[] = [
  { label: "Email ↗", href: "mailto:hammadnaseer2230@gmail.com" },
  { label: "GitHub ↗", href: "https://github.com/6hammad9" },
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/6hammad9" },
  { label: "Hugging Face ↗", href: "https://huggingface.co/HammadNaseer" },
  { label: "ResearchGate ↗", href: "https://www.researchgate.net/profile/Raja-Hammad-Naseer" },
]

export const ABOUT_BODY: string[] = [
  "M.Sc. Computer & Systems Engineering at TU Ilmenau, currently extending time-series foundation models at Fraunhofer IOSB. Before that: two years shipping computer-vision platforms that run live on real sites, not in a notebook.",
  "I work the whole line — perception model, the service around it, the API, the dashboard someone stands in front of, the container it ships in. Each thread on this map is one of those competences, not a phase I went through.",
]

export const ABOUT_NOW = {
  title: "Machine Learning Intern — Fraunhofer IOSB",
  sub: "Institutsteil Angewandte Systemtechnik (IOSB-AST) · Cross-Sectoral Energy Systems · Am Vogelherd 90, 98693 Ilmenau",
  topic: "Analysis and Extension of the LTM Implementation",
  body: "I analyse and evaluate Amazon's Chronos — a large time-series model — on energy-economic series: load, generation, electricity prices, weather. Functional scope, accuracy, robustness and runtime get measured first; then I design and implement architecture extensions, adapting foundation-model methods to how energy markets actually behave, and train and evaluate against public datasets.",
}

export const ABOUT_STATS: { figure: string; label: string }[] = [
  { figure: "2+", label: "years full-time industry" },
  { figure: "6", label: "production systems live" },
  { figure: "3", label: "web apps, zero downtime" },
  { figure: "C1 · B1", label: "English · German, Urdu native" },
]
