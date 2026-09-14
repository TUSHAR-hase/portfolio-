"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCpu,
  FiExternalLink,
  FiFilter,
  FiGithub,
  FiLayers,
  FiServer,
  FiSmartphone,
  FiX,
} from "react-icons/fi";

import blueone from "../../assets/images/blue1.jpg";
import bluecolorapp from "../../assets/images/blue2.jpg";
import cabbooking from "../../assets/images/cab.png";
import hospital from "../../assets/images/hospital.jpg";
import railmadad from "../../assets/images/railmadad.jpeg";
import resturent from "../../assets/images/resturent.png";
import { sound } from "../../utils/sound";

const CATEGORIES = [
  { id: "all", label: "All Systems" },
  { id: "web", label: "Full-Stack Web", icon: FiLayers },
  { id: "ai", label: "AI & ML", icon: FiCpu },
  { id: "app", label: "Mobile Apps", icon: FiSmartphone },
  { id: "systems", label: "Systems & IoT", icon: FiServer },
];

const projectsData = [
  {
    id: 1,
    title: "Restaurant Management ERP & Ordering Platform",
    category: "web",
    image: resturent,
    description:
      "Enterprise operations platform orchestrating live table ordering, menu inventory, automated billing, and role-based staff administration.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS", "MongoDB", "Node.js", "Express"],
    spotlight: "Role-Based Auth & Real-Time Orders",
    metric: "Sub-180ms API Response Time",
    details: {
      architecture: [
        { layer: "Frontend Client", tech: "Next.js 16 App Router + Tailwind CSS" },
        { layer: "API Gateway", tech: "Express.js REST Endpoints + JWT Middleware" },
        { layer: "Persistence Layer", tech: "MongoDB Atlas with Compound Indexes" },
        { layer: "Order Pipeline", tech: "Real-time state synchronization & cart logic" },
      ],
      focus:
        "Engineered the administrative analytics console and diner ordering flow with optimistic UI updates and protected role journeys.",
      features: [
        "Executive dashboard for live sales, inventory tracking, and menu management",
        "Diner cart checkout flow with automatic tax and discount calculations",
        "JSON Web Token (JWT) authenticated routes for admin vs. customer workflows",
        "Live order status transition pipeline (Received -> In Kitchen -> Dispatched -> Completed)",
        "Customer ratings, reviews, and transaction history",
      ],
      engineeringChallenge:
        "Prevented race conditions during simultaneous table orders by implementing atomic MongoDB update operations.",
      duration: "12 Days Sprint",
      role: "Full-Stack Software Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase/resto.git",
        live: "https://github.com/TUSHAR-hase/resto.git",
      },
    },
  },
  {
    id: 2,
    title: "Rail Madad AI Complaint Triage & Grievance Portal",
    category: "ai",
    image: railmadad,
    description:
      "Railway complaint triage platform integrating dual-channel intake (Web portal + IVR voice call transcription) with machine learning complaint categorization.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Next.js", "Python", "Scikit-learn"],
    spotlight: "NLP Classification + IVR Intake",
    metric: "94.2% Auto-Categorization Accuracy",
    details: {
      architecture: [
        { layer: "Intake Channel", tech: "Web App UI & IVR Call Audio Stream" },
        { layer: "Speech Processing", tech: "Speech-to-Text Pipeline (Audio -> Normalized Text)" },
        { layer: "ML Classifier", tech: "Python Scikit-learn TF-IDF + Classifier Model" },
        { layer: "Admin Triage Desk", tech: "Role-based dispatching & departmental routing" },
      ],
      focus:
        "Built the full-stack architecture and integrated an NLP classification engine that automatically categorizes passenger grievances into Sanitation, Security, Catering, or Mechanical departments.",
      features: [
        "Multi-modal complaint submission via responsive web interface and voice IVR",
        "Automated speech-to-text transcription with text normalization",
        "Machine learning categorization routing grievances to responsible railway divisions",
        "End-to-end status tracking with unique grievance tracking identifiers (PNR sync)",
        "Role-based administrative control with escalated SLA timers",
      ],
      engineeringChallenge:
        "Handling noisy background train audio by preprocessing speech audio and training the classifier on real complaint vocabulary.",
      duration: "18 Days",
      role: "Lead Full-Stack & ML Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase/Rail_Madad_backend",
        live: "https://rail-madad-demo.vercel.app",
      },
    },
  },
  {
    id: 3,
    title: "Cab Booking System & Trip Operations Portal",
    category: "web",
    image: cabbooking,
    description:
      "Scalable travel reservation system with real-time ride scheduling, geolocation tracking, OTP trip handshakes, and driver fleet controls.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js", "Express"],
    spotlight: "Secure OTP Trip Verification",
    metric: "Zero Fraudulent Handshakes",
    details: {
      architecture: [
        { layer: "Client Interface", tech: "Next.js Responsive Booking UI" },
        { layer: "Fleet Dispatcher", tech: "Node.js Ride Allocation Service" },
        { layer: "Security", tech: "Cryptographic OTP generation & verification" },
        { layer: "Database", tech: "MongoDB Geospatial indexing for driver proximity" },
      ],
      focus:
        "Built the full booking lifecycle from search and fare estimation to OTP-verified ride completion, driver earnings, and admin fleet tracking.",
      features: [
        "Passenger search, vehicle class selection, and instant fare calculation",
        "Driver allocation engine with status availability toggle",
        "Two-factor OTP handshake required before driver starts trip meter",
        "Live trip progress tracking and arrival notifications",
        "Admin control room for driver verification and dispute management",
      ],
      engineeringChallenge:
        "Architected OTP verification state machine to prevent trip tampering and unauthorized rider handshakes.",
      duration: "12 Days",
      role: "Full-Stack Software Engineer",
      links: {
        github: "https://github.com/naikJagrav/bookinHub.git",
        live: "https://cab-booking-one-jade.vercel.app/",
      },
    },
  },
  {
    id: 4,
    title: "Blue Color App: Skill Marketplace",
    category: "app",
    image: bluecolorapp,
    description:
      "Mobile-first community marketplace connecting skilled labor, artisans, and technicians with local job requests and verified contracts.",
    tech: ["Flutter", "Dart", "Firebase Firestore", "Cloud Messaging"],
    spotlight: "Real-Time Skill Matching",
    metric: "Instant Cloud Messaging Sync",
    details: {
      architecture: [
        { layer: "Mobile Client", tech: "Flutter cross-platform (iOS & Android)" },
        { layer: "Data Layer", tech: "Google Cloud Firestore Real-Time DB" },
        { layer: "Notification Engine", tech: "Firebase Cloud Messaging (FCM)" },
        { layer: "Security", tech: "Firebase Auth with Phone OTP verification" },
      ],
      focus:
        "Engineered the complete Flutter mobile client featuring profile skill badges, localized job discovery, and instant worker notifications.",
      features: [
        "Dynamic skill profile builder with portfolio image uploads",
        "Real-time localized contract and gig discovery feed",
        "Instant push notification pipeline for newly posted opportunities",
        "In-app direct messaging and contact coordination",
        "Reputation and verified badge review mechanism",
      ],
      engineeringChallenge:
        "Implemented offline data caching in Flutter to allow workers in low-connectivity areas to browse saved jobs seamlessly.",
      duration: "8 Days",
      role: "Mobile App Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase/blue-color-app.git",
      },
    },
  },
  {
    id: 5,
    title: "Garbage Detection & Cleanliness Model (YOLOv8)",
    category: "ai",
    image: "/project-covers/garbage-detection-yolo.svg",
    description:
      "Deep learning computer vision system detecting and localizing street waste, plastic debris, and overflowing dumpsters in real-time camera streams.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "NumPy"],
    spotlight: "Real-Time Frame Localization",
    metric: "42 FPS Real-Time Inference",
    details: {
      architecture: [
        { layer: "Model Backbone", tech: "YOLOv8 Convolutional Feature Extractor" },
        { layer: "Inference Engine", tech: "OpenCV Video Stream Processing Loop" },
        { layer: "Output Layer", tech: "Bounding Box Coordinates + Confidence Scores" },
        { layer: "Alert Trigger", tech: "Automated cleanliness violation logger" },
      ],
      focus:
        "Trained, fine-tuned, and benchmarked a YOLOv8 object detection model on annotated waste datasets for municipal cleanliness automation.",
      features: [
        "Real-time object localization on high-definition video streams and static imagery",
        "Multi-class debris classification (Plastic, Paper, Organic, Overflowing bins)",
        "Optimized inference pipeline achieving 40+ FPS on edge hardware",
        "Bounding box coordinate export for automated municipal reporting",
      ],
      engineeringChallenge:
        "Optimized model weights and input resolution to achieve fast inference speeds without sacrificing precision in occluded debris scenes.",
      duration: "Research Prototype",
      role: "Computer Vision Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase",
      },
    },
  },
  {
    id: 6,
    title: "Hospital EHR & Clinical Workflow System",
    category: "systems",
    image: hospital,
    description:
      "Healthcare management system streamlining outpatient registration, clinical records, doctor consultations, and department scheduling.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML5", "CSS3"],
    spotlight: "Role-Segregated Medical EHR",
    metric: "Zero-Downtime Record Retrieval",
    details: {
      architecture: [
        { layer: "Presentation", tech: "Modular Clinical Dashboard UI" },
        { layer: "Backend API", tech: "Node.js REST Services + Role Middleware" },
        { layer: "Data Layer", tech: "MongoDB Document Schema for EHR History" },
      ],
      focus:
        "Architected role-segregated data access for doctors, receptionists, and patients, ensuring confidential medical histories are strictly access-controlled.",
      features: [
        "Doctor consultation portal with prescription drafting and diagnosis notes",
        "Patient intake registration and automated medical record indexing",
        "Time-slot appointment scheduling avoiding doctor overbooking",
        "Departmental routing across Laboratory, Pharmacy, and General Medicine",
      ],
      engineeringChallenge:
        "Designed schema normalization to allow fast retrieval of historical patient prescriptions over multi-year visits.",
      duration: "15 Days",
      role: "Backend & Systems Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/hospital-management.git",
        live: "https://hospital-management-puce.vercel.app",
      },
    },
  },
  {
    id: 7,
    title: "Women Safety Guardian SOS",
    category: "app",
    image: "/project-covers/women-safety-app.svg",
    description:
      "Emergency personal security mobile application featuring one-touch SOS triggering, background GPS location broadcast, and instant emergency alerts.",
    tech: ["Flutter", "Dart", "Firebase", "Geolocation APIs", "SMS Gateway"],
    spotlight: "Sub-Second Emergency Dispatch",
    metric: "&lt;1.2s Alert Latency",
    details: {
      architecture: [
        { layer: "Trigger Engine", tech: "Hardware Volume Button / One-Tap Widget" },
        { layer: "Location Stream", tech: "Continuous High-Accuracy GPS Coordinates" },
        { layer: "Dispatch Network", tech: "Firebase Real-time broadcast + Emergency SMS" },
      ],
      focus:
        "Engineered an emergency-first UX that functions during acute distress: one single gesture sends live location coordinates to all trusted contacts.",
      features: [
        "Instant one-tap SOS trigger with emergency audible alarm option",
        "Continuous live GPS coordinate streaming sent via cloud and SMS fallback",
        "Trusted contacts circle with priority calling integration",
        "Battery-efficient background tracking protocol",
      ],
      engineeringChallenge:
        "Ensured emergency SOS packet transmits reliably even under spotty 2G mobile data by queuing SMS fallback commands.",
      duration: "Hackathon Prototype",
      role: "Mobile App Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase",
      },
    },
  },
  {
    id: 8,
    title: "Autonomous Line Follower Robotics System",
    category: "systems",
    image: "/project-covers/line-follower-robot.svg",
    description:
      "Embedded robotics system utilizing an infrared reflectance sensor array, differential drive motor controllers, and closed-loop feedback algorithms.",
    tech: ["Arduino", "Embedded C++", "IR Sensor Array", "L298N Motor Driver"],
    spotlight: "Closed-Loop Embedded Control",
    metric: "100% Real-Time Edge Processing",
    details: {
      architecture: [
        { layer: "Hardware Sensing", tech: "5-Channel High-Sensitivity IR Reflectance Array" },
        { layer: "Microcontroller", tech: "ATmega328P executing high-frequency control loop" },
        { layer: "Actuation", tech: "Dual H-Bridge Motor Driver with PWM Speed Regulation" },
      ],
      focus:
        "Programmed the embedded firmware in C++ that reads sensor analog thresholds and dynamically adjusts PWM motor speeds for smooth curve tracking.",
      features: [
        "Infrared array surface reflectance detection calibrated for track contrast",
        "Smooth proportional steering adjustments reducing track overshoots",
        "Hardware circuit routing with noise-filtering decoupling capacitors",
        "Independent wheel velocity regulation for sharp 90-degree cornering",
      ],
      engineeringChallenge:
        "Eliminated mechanical sensor jitter and oscillation by tuning the feedback loop constants and threshold damping.",
      duration: "Hardware Build",
      role: "Embedded Systems Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase",
      },
    },
  },
  {
    id: 9,
    title: "Farmer Direct-to-Buyer Agricultural Marketplace",
    category: "web",
    image: "/project-covers/farmer-marketplace.svg",
    description:
      "Agricultural commerce portal eliminating intermediary broker margins by connecting rural farmers directly with wholesale buyers and distributors.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    spotlight: "Transparent Fair-Price Listings",
    metric: "Direct Fair Trade Exchange",
    details: {
      architecture: [
        { layer: "Farmer Portal", tech: "Simplified mobile-responsive crop listing UI" },
        { layer: "Buyer Marketplace", tech: "Filtered bulk order catalog with price history" },
        { layer: "Order Coordination", tech: "Inquiry and shipment logistics messaging" },
      ],
      focus:
        "Designed accessible, clean UI flows for farmers to list seasonal harvests with crop photos, minimum acceptable bids, and harvest dispatch dates.",
      features: [
        "Simplified crop listing flow designed for rural and first-time digital users",
        "Buyer harvest search by crop category, harvest date, and regional radius",
        "Direct inquiry negotiation system preserving price transparency",
        "Farmer and merchant verified authentication",
      ],
      engineeringChallenge:
        "Engineered a lightweight image compression pipeline on upload so farmers in low-bandwidth rural networks can upload crop photos rapidly.",
      duration: "10 Days",
      role: "Full-Stack Software Engineer",
      links: {
        github: "https://github.com/TUSHAR-hase",
      },
    },
  },
  {
    id: 10,
    title: "AI Interactive Creative Storytelling Engine",
    category: "ai",
    image: blueone,
    description:
      "Generative AI concept exploring automated children's visual storytelling, combining prompt-guided storyboard generation with kid-safe content filters.",
    tech: ["Python", "Generative AI", "React", "Automation"],
    spotlight: "Multimodal Generative Flow",
    metric: "Child-Safe Content Guardrails",
    details: {
      architecture: [
        { layer: "Story Input", tech: "Creative prompt intake and story pacing engine" },
        { layer: "AI Pipeline", tech: "Generative text & scene character consistency logic" },
        { layer: "Interactive UI", tech: "Turn-by-turn interactive reader" },
      ],
      focus:
        "Prototyped an experimental creative workflow that transforms a brief child's idea into an illustrated scene-by-scene digital storybook.",
      features: [
        "Prompt-driven narrative generation with consistent character identities",
        "Automated scene sequencing with age-appropriate vocabulary filters",
        "Visual storytelling layout optimized for touch and tablet devices",
      ],
      engineeringChallenge:
        "Enforced strict deterministic safety guardrails to ensure zero inappropriate content generation in children's story generation.",
      duration: "Experimental",
      role: "AI Prototype Developer",
      links: {
        github: "https://github.com/TUSHAR-hase",
      },
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalTab, setActiveModalTab] = useState("overview");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedProject]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleCategorySelect = (id) => {
    sound.playClick();
    setActiveCategory(id);
  };

  const handleOpenProject = (project) => {
    sound.playClick();
    setSelectedProject(project);
    setActiveModalTab("overview");
  };

  return (
    <section id="portfolio" className="section-shell relative">
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-kicker">Engineered Systems</span>
            <h2 className="section-title mt-5">
              Production Applications, AI Models &amp; Hardware Prototypes.
            </h2>
            <p className="section-copy-md mt-5">
              Every project reflects intentional architecture: modular backend routes, optimized data queries, rigorous edge-case handling, and clean responsive interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="glass-panel shrink-0 px-4 py-2 font-mono text-xs font-bold text-accent-bright">
              {filteredProjects.length} Systems Displayed
            </span>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition ${
                  isSelected
                    ? "bg-accent text-white shadow-md"
                    : "border border-border/80 bg-surface text-muted hover:border-accent hover:text-strong"
                }`}
              >
                {Icon && <Icon className="text-sm" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
              onMouseMove={handleCardMouseMove}
              onClick={() => handleOpenProject(project)}
              className="spotlight-card group flex cursor-pointer flex-col overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/80 bg-surface-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="chip-accent absolute bottom-3 left-3 text-[11px] shadow-sm backdrop-blur-md">
                  {project.spotlight}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="tag text-[10px] text-accent-bright font-mono uppercase">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-emerald-400">
                    {project.metric}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-strong transition-colors group-hover:text-accent-bright sm:text-lg">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-xs leading-relaxed text-secondary line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag text-[10px] bg-surface-2/80">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tag text-[10px] text-muted">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between pt-1 text-xs font-semibold text-accent-bright">
                  <span>Inspect System Architecture</span>
                  <FiArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* System Deep-Dive & Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border border-white/20 bg-surface shadow-2xl dark:bg-[#090e1a]"
            >
              {/* Modal Top Header Banner */}
              <div className="relative aspect-[21/9] w-full shrink-0 overflow-hidden border-b border-border/80 bg-surface-2 sm:aspect-[24/9]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/60 text-lg text-white backdrop-blur-md transition hover:bg-white/20"
                  aria-label="Close modal"
                >
                  <FiX />
                </button>

                <div className="absolute bottom-4 left-5 right-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip-accent text-[11px]">
                      {selectedProject.details.role}
                    </span>
                    <span className="tag text-[10px] text-white/90 bg-black/40">
                      {selectedProject.details.duration}
                    </span>
                    <span className="chip-success text-[10px]">
                      {selectedProject.metric}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Tab Switcher */}
              <div className="flex items-center gap-2 border-b border-border/80 bg-surface-2/60 px-6 py-2.5">
                {[
                  { id: "overview", label: "System Overview" },
                  { id: "arch", label: "Architecture Flow" },
                  { id: "challenges", label: "Engineering Hurdles" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setActiveModalTab(t.id);
                    }}
                    className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                      activeModalTab === t.id
                        ? "bg-accent text-white"
                        : "text-muted hover:text-strong hover:bg-surface"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Modal Body Content */}
              <div className="overflow-y-auto p-6 sm:p-7">
                {activeModalTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
                        Architectural Objective
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {selectedProject.details.focus}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
                        Key Capabilities &amp; System Features
                      </h4>
                      <div className="mt-3 space-y-2">
                        {selectedProject.details.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-xs leading-relaxed text-secondary">
                            <FiCheckCircle className="mt-0.5 text-sm shrink-0 text-emerald-400" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
                        Technology Stack
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="tag text-xs font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeModalTab === "arch" && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
                      Multi-Tier Architecture Diagram
                    </h4>
                    <p className="text-xs text-muted">
                      Flow of data, authentication contracts, and persistence pipelines:
                    </p>

                    <div className="space-y-3 pt-2">
                      {selectedProject.details.architecture ? (
                        selectedProject.details.architecture.map((item, i) => (
                          <div
                            key={item.layer}
                            className="flex flex-col gap-1 rounded-xl border border-border/80 bg-surface-2/80 p-3.5 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <span className="font-mono text-xs font-bold text-cyan-400">
                              [Tier {i + 1}] {item.layer}
                            </span>
                            <span className="rounded bg-accent-soft px-2.5 py-1 font-mono text-xs font-semibold text-accent-bright">
                              {item.tech}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="rounded-xl border border-border/80 bg-surface-2 p-4 text-xs text-muted">
                          Standard Model-View-Controller architecture with REST client.
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeModalTab === "challenges" && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent-bright">
                      Solved Engineering Bottlenecks
                    </h4>
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                      <p className="font-mono text-xs font-bold text-amber-400">
                        Critical Hurdle Overcome:
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-secondary">
                        {selectedProject.details.engineeringChallenge ||
                          "Optimized client-to-database payloads and handled network disconnection fallbacks gracefully."}
                      </p>
                    </div>
                  </div>
                )}

                {/* External Action Links */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/80 pt-5">
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.details.links.github && (
                      <a
                        href={selectedProject.details.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="button-secondary text-xs"
                      >
                        <FiGithub className="text-sm" />
                        Source Code
                      </a>
                    )}
                    {selectedProject.details.links.live && (
                      <a
                        href={selectedProject.details.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playSuccess()}
                        className="button-primary text-xs"
                      >
                        Live Demo
                        <FiExternalLink className="text-sm" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="button-secondary text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}