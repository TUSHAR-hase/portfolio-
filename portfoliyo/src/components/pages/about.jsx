"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCpu, FiTarget, FiZap } from "react-icons/fi";

const stats = [
    { value: "10+", label: "Projects delivered" },
    { value: "3+", label: "Hackathons" },
    { value: "4", label: "Core domains" },
];

const highlights = [
    {
        title: "Product-first mindset",
        copy: "I care about usability, structure, and solving the right problem.",
        icon: FiTarget,
    },
    {
        title: "Cross-domain execution",
        copy: "My projects span web, backend, AI/ML, mobile, and systems work.",
        icon: FiCpu,
    },
    {
        title: "Reliable collaboration",
        copy: "Hackathons and team builds taught me ownership, clarity, and speed.",
        icon: FiBriefcase,
    },
];

const journey = [
    {
        year: "IITRAM",
        title: "Computer Science foundation",
        copy: "Built a strong base in programming, web fundamentals, and software problem solving.",
    },
    {
        year: "Projects",
        title: "Built across domains",
        copy: "Worked on full-stack apps, mobile concepts, AI/ML ideas, and practical system-led projects.",
    },
    {
        year: "Now",
        title: "Refining for opportunities",
        copy: "Improving frontend execution, DSA, and delivery quality for internship opportunities.",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            {/* ─── Background (same as Hero) ─── */}
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
                    className="max-w-3xl"
                >
                    <span className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                        About
                    </span>
                    <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        A developer focused on useful products, clean execution, and steady growth.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        I enjoy turning ideas into reliable digital experiences. My work combines frontend polish, full-stack
                        implementation, and curiosity for AI/ML and IoT.
                    </p>
                </motion.div>

                {/* ─── Main Grid: Who I am + Journey ─── */}
                <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                    {/* ── Left: Who I am + Stats ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-6">
                            <div className="max-w-2xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                                    Who I am
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                                    Turning technical skills into practical, internship-focused projects.
                                </h3>
                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    I&apos;m a Computer Science student at IITRAM with a strong interest in frontend-led product
                                    development. I also work across backend flows, mobile concepts, and AI/ML or IoT-driven ideas when a
                                    problem needs broader thinking.
                                </p>
                            </div>

                            {/* Current focus card */}
                            <div className="rounded-xl border border-slate-200/60 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:max-w-sm">
                                <p className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                                    <FiZap className="text-indigo-500" />
                                    Current focus
                                </p>
                                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                                    <li>Responsive interfaces that feel clear on every screen</li>
                                    <li>Cleaner full-stack projects with stronger structure</li>
                                    <li>Sharper DSA and hands-on AI/ML or IoT exploration</li>
                                </ul>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-slate-200/60 bg-white/80 p-4 text-center shadow-sm backdrop-blur-sm"
                                >
                                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Journey ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                            Journey
                        </p>
                        <div className="mt-6 space-y-4">
                            {journey.map((item) => (
                                <div
                                    key={item.year}
                                    className="relative rounded-xl border border-slate-200/60 bg-white/80 p-5 pl-8 shadow-sm"
                                >
                                    <span className="absolute left-4 top-6 h-2.5 w-2.5 rounded-full bg-indigo-600" />
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                        <span className="rounded-full border border-indigo-200/60 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700">
                                            {item.year}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ─── Highlights Grid ─── */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                                className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:border-indigo-200/80 hover:shadow-indigo-100/40"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50/80 text-indigo-700">
                                    <Icon className="text-xl" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-500">{item.copy}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;