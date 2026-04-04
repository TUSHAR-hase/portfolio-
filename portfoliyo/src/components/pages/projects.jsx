'use client'

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiCpu, FiGithub, FiLayers, FiSmartphone, FiX } from "react-icons/fi";

import blueone from "../../assets/images/blue1.jpg";
import bluecolorapp from "../../assets/images/blue2.jpg";
import cabbooking from "../../assets/images/cab.png";
import hospital from "../../assets/images/hospital.jpg";
import railmadad from "../../assets/images/railmadad.jpeg";
import resturent from "../../assets/images/resturent.png";

const filterMeta = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "app", label: "App" },
  { id: "ai", label: "AI / ML" },
  { id: "systems", label: "IoT / Systems" },
];

const categoryMeta = {
  web: {
    icon: FiLayers,
    style: "bg-sky-400/10 text-sky-300 border-sky-400/20",
    label: "Web app",
  },
  app: {
    icon: FiSmartphone,
    style: "bg-violet-400/10 text-violet-300 border-violet-400/20",
    label: "Mobile app",
  },
  ai: {
    icon: FiCpu,
    style: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    label: "AI / ML",
  },
  systems: {
    icon: FiLayers,
    style: "bg-orange-400/10 text-orange-300 border-orange-400/20",
    label: "IoT / System",
  },
};

const projects = [
  {
    id: 1,
    title: "Restaurant Management System",
    category: "web",
    image: resturent,
    description:
      "A restaurant operations platform covering ordering, menu management, customer experience flows, and admin-side controls in one structured product.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    spotlight: "Dashboard UX + ordering flows",
    details: {
      features: [
        "Admin dashboard for menu and order management",
        "Cart flow with customer-friendly ordering",
        "Authentication for protected user journeys",
        "Live order tracking",
        "Ratings and review support",
      ],
      duration: "12 days",
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/resto.git",
        live: "https://github.com/TUSHAR-hase/resto.git",
      },
    },
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "systems",
    image: hospital,
    description:
      "A workflow-driven healthcare system for handling patients, doctors, appointments, and records with better operational clarity.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    spotlight: "Business system architecture",
    details: {
      features: [
        "Doctor dashboard and patient records",
        "Patient registration and management",
        "Appointment scheduling",
        "Medical record maintenance",
      ],
      duration: "15 days",
      role: "Frontend & Backend Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/hospital-management.git",
        live: "https://hospital-management-puce.vercel.app",
      },
    },
  },
  {
    id: 3,
    title: "Blue Color App",
    category: "app",
    image: bluecolorapp,
    description:
      "A mobile-first community app that connects skill-based individuals with opportunities, events, volunteering, and collaboration spaces.",
    tech: ["Flutter", "Dart", "Firebase"],
    spotlight: "Mobile-first community product",
    details: {
      features: [
        "Community-based project discovery",
        "Skill-based participation matching",
        "Events and volunteering support",
        "Profile and achievement system",
        "Real-time notifications",
      ],
      duration: "8 days",
      role: "Mobile App Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/blue-color-app.git",
      },
    },
  },
  {
    id: 4,
    title: "Cab Booking System",
    category: "web",
    image: cabbooking,
    description:
      "A booking platform focused on long-distance travel with user flows, rider controls, OTP verification, ride tracking, and admin visibility.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    spotlight: "Booking UX + operations management",
    details: {
      features: [
        "Login and signup flows",
        "Ride booking for long-distance travel",
        "Live ride status tracking",
        "Rider-side booking control",
        "OTP-based trip completion",
        "Vehicle management and admin monitoring",
      ],
      duration: "12 days",
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/naikJagrav/bookinHub.git",
        live: "https://cab-booking-one-jade.vercel.app/",
      },
    },
  },
  {
    id: 5,
    title: "Rail Madad Complaint Management",
    category: "ai",
    image: railmadad,
    description:
      "A railway complaint platform combining web workflows, IVR call intake, and machine learning-assisted complaint categorization.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Next.js", "Python", "Scikit-learn"],
    spotlight: "Full-stack + ML-assisted triage",
    details: {
      features: [
        "Complaint registration through web and IVR",
        "Speech-to-text processing for calls",
        "Machine learning classification",
        "Complaint status tracking",
        "Admin dashboard and role-based access",
        "Complaint history and call logs",
      ],
      duration: "18 days",
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/Rail_Madad_backend",
        live: "https://rail-madad-demo.vercel.app",
      },
    },
  },
  {
    id: 6,
    title: "AI Kids Animation",
    category: "ai",
    image: blueone,
    description:
      "An AI-assisted concept focused on turning creative ideas into kid-friendly animation experiences and interactive storytelling workflows.",
    tech: ["Python", "Machine Learning", "Automation", "Creative AI", "React"],
    spotlight: "Creative AI workflow",
    details: {
      features: [
        "Idea-driven animation exploration",
        "Experimentation with AI-assisted content workflows",
        "Child-friendly storytelling oriented concept design",
        "Focus on usability, engagement, and creative output",
        "Prototype-first approach for validating the product idea",
      ],
      duration: "Prototype",
      role: "AI/ML Project Builder",
      links: {},
    },
  },
  {
    id: 7,
    title: "Women Safety App",
    category: "app",
    image: "/project-covers/women-safety-app.svg",
    description:
      "A women safety mobile concept focused on fast SOS support, live location sharing, and trusted-contact communication during emergencies.",
    tech: ["Flutter", "Firebase", "Location Sharing", "Emergency Alerts", "Authentication"],
    spotlight: "Emergency-first mobile experience",
    details: {
      features: [
        "One-tap SOS support flow",
        "Trusted contact alerting",
        "Live location sharing during emergencies",
        "Fast-access interface for high-stress situations",
        "Safety-first product thinking with practical usability",
      ],
      duration: "Prototype",
      role: "Mobile App Developer",
      links: {},
    },
  },
  {
    id: 8,
    title: "Farmer Marketplace",
    category: "web",
    image: "/project-covers/farmer-marketplace.svg",
    description:
      "A marketplace platform designed to connect farmers directly with buyers through transparent product listings, pricing visibility, and simpler order coordination.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    spotlight: "Direct farmer-to-buyer commerce",
    details: {
      features: [
        "Farmer-side product listing and management",
        "Buyer browsing with category and price visibility",
        "Order inquiry and purchase coordination flow",
        "Authentication for farmers and buyers",
        "Marketplace structure focused on reducing middleman friction",
      ],
      duration: "10 days",
      role: "Full Stack Developer",
      links: {},
    },
  },
  {
    id: 9,
    title: "Line Follower Robot",
    category: "systems",
    image: "/project-covers/line-follower-robot.svg",
    description:
      "A robotics project centered on sensor-guided path tracking, motor control, and embedded decision making for reliable autonomous movement.",
    tech: ["Arduino", "IR Sensors", "Embedded C", "Motor Driver", "Robotics"],
    spotlight: "Sensor-based autonomous control",
    details: {
      features: [
        "IR sensor-based line detection",
        "Motor control with movement correction logic",
        "Autonomous path-following behavior",
        "Hardware-software tuning for stability",
        "Prototype testing focused on response accuracy",
      ],
      duration: "Prototype",
      role: "Embedded Systems Builder",
      links: {},
    },
  },
  {
    id: 10,
    title: "Garbage Detection YOLO Model",
    category: "ai",
    image: "/project-covers/garbage-detection-yolo.svg",
    description:
      "A computer vision project using a YOLO-based model to detect garbage in images or video frames for smarter cleanliness monitoring workflows.",
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "Deep Learning"],
    spotlight: "Real-time object detection",
    details: {
      features: [
        "Garbage detection on images and frames",
        "YOLO-based object localization experiments",
        "Bounding-box output for visual analysis",
        "Real-world cleanliness monitoring use case",
        "Model evaluation and performance tuning",
      ],
      duration: "Prototype",
      role: "Computer Vision Developer",
      links: {},
    },
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section-shell py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-kicker">Projects</span>
            <h2 className="section-title mt-6 text-balance">Selected work that reflects frontend polish, full-stack execution, and wider technical curiosity.</h2>
            <p className="section-copy mt-6">
              The goal here is not just variety. It&apos;s to show that I can work across web apps, mobile concepts,
              AI/ML-oriented ideas, and system-focused problem solving while keeping the experience professional.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {filterMeta.map((filter) => (
              <motion.button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                whileTap={{ scale: 0.96 }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  activeFilter === filter.id
                    ? "border-sky-400/30 bg-sky-400/12 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const category = categoryMeta[project.category];
            const CategoryIcon = category.icon;

            return (
              <motion.button
                key={project.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass-panel group flex h-full flex-col overflow-hidden rounded-[2rem] text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${category.style}`}>
                      <CategoryIcon />
                      {category.label}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm font-medium text-sky-300">{project.spotlight}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                    View details
                    <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
              className="glass-panel relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] p-5 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="sticky left-full top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white"
                aria-label="Close project details"
              >
                <FiX className="text-xl" />
              </button>

              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="relative aspect-[16/12] overflow-hidden rounded-[1.75rem] border border-white/8">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Project overview</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{selectedProject.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-slate-300">{selectedProject.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Duration</p>
                      <p className="mt-2 text-sm font-semibold text-white">{selectedProject.details.duration}</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Role</p>
                      <p className="mt-2 text-sm font-semibold text-white">{selectedProject.details.role}</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Key features</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {selectedProject.details.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.details.links.github && (
                      <motion.a
                        href={selectedProject.details.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="button-secondary"
                      >
                        <FiGithub />
                        GitHub
                      </motion.a>
                    )}
                    {selectedProject.details.links.live && (
                      <motion.a
                        href={selectedProject.details.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="button-primary"
                      >
                        Live Demo
                        <FiArrowUpRight />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
