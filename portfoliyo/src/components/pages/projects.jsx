"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiCpu, FiGithub, FiLayers, FiSmartphone, FiX } from "react-icons/fi";

import blueone from "../../assets/images/blue1.jpg";
import bluecolorapp from "../../assets/images/blue2.jpg";
import cabbooking from "../../assets/images/cab.png";
import hospital from "../../assets/images/hospital.jpg";
import railmadad from "../../assets/images/railmadad.jpeg";
import resturent from "../../assets/images/resturent.png";

const categoryMeta = {
    web: {
        icon: FiLayers,
        label: "Web app",
    },
    app: {
        icon: FiSmartphone,
        label: "Mobile app",
    },
    ai: {
        icon: FiCpu,
        label: "AI / ML",
    },
    systems: {
        icon: FiLayers,
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
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    useEffect(() => {
        if (!selectedProject) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedProject]);

    return (
        <section
            id="portfolio"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            {/* ─── Background (consistent with other sections) ─── */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/40 via-white to-white" />
            <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-100/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-blue-50/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-12 lg:px-6">
                {/* ─── Header ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                            Projects
                        </span>
                        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Selected portfolio work with clear problem solving and clean execution.
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            A concise view of web, app, AI/ML, and system projects. Each card shows the project purpose, stack, and
                            role in a recruiter-friendly format.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {["Web apps", "Mobile", "AI / ML", "Systems"].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-indigo-200/60 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700 backdrop-blur-sm"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* ─── Project Grid ─── */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {visibleProjects.map((project, index) => {
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
                                whileHover={{ y: -3 }}
                                onClick={() => setSelectedProject(project)}
                                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 text-left shadow-sm backdrop-blur-sm transition hover:border-indigo-200/80 hover:shadow-indigo-100/40"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200/60 bg-slate-50">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />
                                    <div className="absolute left-3 top-3">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/60 bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 backdrop-blur-sm">
                                            <CategoryIcon className="text-sm" />
                                            {category.label}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-indigo-600">
                                                {project.title}
                                            </h3>
                                            <p className="mt-1 text-sm font-medium text-indigo-600">
                                                {project.spotlight}
                                            </p>
                                        </div>
                                    </div>

                                    <p
                                        className="mt-3 text-sm leading-6 text-slate-500"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-slate-200/60 bg-white/80 px-2.5 py-0.5 text-xs font-medium text-slate-600 backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:gap-3">
                                        View details
                                        <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* ─── Show More Button ─── */}
                {projects.length > visibleProjects.length && (
                    <div className="mt-8 flex justify-center">
                        <motion.button
                            type="button"
                            onClick={() => setShowAll(true)}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700"
                        >
                            Show more projects
                        </motion.button>
                    </div>
                )}
            </div>

            {/* ─── Modal ─── */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-white/90 p-4 py-6 backdrop-blur-sm sm:items-center"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 24, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 18, scale: 0.98 }}
                            transition={{ duration: 0.28 }}
                            onClick={(event) => event.stopPropagation()}
                            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 p-6 pt-16 shadow-2xl backdrop-blur-md sm:max-h-[90vh] sm:overflow-y-auto sm:p-8 sm:pt-10"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white/80 text-slate-600 shadow-sm backdrop-blur-sm transition hover:bg-indigo-50/60 hover:text-indigo-700"
                                aria-label="Close project details"
                            >
                                <FiX className="text-xl" />
                            </button>

                            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                                <div className="relative aspect-[16/12] overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                                        Project overview
                                    </p>
                                    <h3 className="mt-3 text-3xl font-semibold text-slate-900">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="mt-5 text-sm leading-7 text-slate-600">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-slate-200/60 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                Duration
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-slate-800">
                                                {selectedProject.details.duration}
                                            </p>
                                        </div>
                                        <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                                Role
                                            </p>
                                            <p className="mt-2 text-sm font-semibold text-slate-800">
                                                {selectedProject.details.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                            Key features
                                        </p>
                                        <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                                            {selectedProject.details.features.map((feature) => (
                                                <li key={feature} className="flex gap-3">
                                                    <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
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
                                                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:border-indigo-200 hover:bg-indigo-50/60 hover:text-indigo-700"
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
                                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-indigo-700 hover:shadow-indigo-300/60"
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