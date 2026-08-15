"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
    FiArrowUpRight,
    FiCheckCircle,
    FiClock,
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";

import { BASE_URL } from "../../../config";

const contactCards = [
    {
        title: "Email",
        value: "thakorrajta859@gmail.com",
        href: "mailto:thakorrajta859@gmail.com",
        icon: FiMail,
    },
    {
        title: "Phone",
        value: "+91 9054896753",
        href: "tel:+919054896753",
        icon: FiPhone,
    },
    {
        title: "Location",
        value: "Ahmedabad, Gujarat, India",
        href: "#contact",
        icon: FiMapPin,
    },
];

const socialLinks = [
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: FiLinkedin,
    },
    {
        label: "GitHub",
        href: "https://github.com/TUSHAR-hase",
        icon: FiGithub,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/tushar_vaghela1507?igsh=amI3dGtzNXZlMTdh",
        icon: FiInstagram,
    },
];

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [status, setStatus] = useState("idle");

    const onSubmit = async (data) => {
        setStatus("sending");

        try {
            const res = await fetch(`${BASE_URL}/api/messages/sendmail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 3200);
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            {/* ─── Background (consistent with all sections) ─── */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50/40 via-white to-white" />
            <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-indigo-100/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[35rem] w-[35rem] rounded-full bg-blue-50/30 blur-3xl" />

            {/* ─── Success Toast ─── */}
            <AnimatePresence>
                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        className="fixed inset-x-4 bottom-4 z-[80] overflow-hidden rounded-2xl border border-indigo-200/60 bg-white/90 p-4 shadow-2xl backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm"
                    >
                        <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: 3.1, ease: "linear" }}
                            className="absolute inset-x-0 top-0 h-1 origin-left bg-indigo-500"
                        />
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200/60 bg-indigo-50/80 text-indigo-600">
                                <FiCheckCircle className="text-lg" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-700">
                                    Message sent
                                </p>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                    Thanks for reaching out. Your message has been submitted successfully.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            Contact
                        </span>
                        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Let&apos;s talk about opportunities, projects, or the next thing to build.
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            If you&apos;re hiring, collaborating, or discussing an idea, feel free to reach out.
                        </p>
                    </div>

                    <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-indigo-200/60 bg-indigo-50/80 p-4 shadow-sm backdrop-blur-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-indigo-600 shadow-sm">
                            <FiMail className="text-xl" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800">Preferred contact</p>
                            <p className="mt-1 text-sm text-slate-500">Email works best for internships, projects, and collaborations.</p>
                        </div>
                    </div>
                </motion.div>

                {/* ─── Grid: Contact Details + Form ─── */}
                <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                    {/* ── Left: Contact Details ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                    >
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-50/60 to-transparent" />

                        <div className="relative">
                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                                Contact details
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                                Reach out through the channel that fits best.
                            </h3>

                            <div className="mt-6 space-y-4">
                                {contactCards.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.a
                                            key={item.title}
                                            href={item.href}
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="group flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm transition hover:border-indigo-200/80 hover:bg-indigo-50/60"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50/80 text-indigo-600">
                                                <Icon className="text-xl" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                                                <p className="mt-1 break-words text-sm leading-7 text-slate-500">{item.value}</p>
                                            </div>
                                            <FiArrowUpRight className="mt-1 text-slate-400 transition duration-200 group-hover:text-indigo-600" />
                                        </motion.a>
                                    );
                                })}
                            </div>

                            <div className="mt-6 rounded-xl border border-slate-200/60 bg-white/80 p-4 shadow-sm">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                                            <FiClock className="text-indigo-500" />
                                            Availability
                                        </p>
                                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                                            Open to internships, freelance opportunities, and junior product-focused frontend work.
                                        </p>
                                    </div>
                                    <span className="rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-700">
                                        Open to connect
                                    </span>
                                </div>
                            </div>

                            {/* ── Social Links ── */}
                            <div className="mt-6">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                                        Social links
                                    </p>
                                    <p className="text-xs text-slate-500">Professional profiles and updates</p>
                                </div>
                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {socialLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <motion.a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.97 }}
                                                className="group flex items-center justify-between rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200/80 hover:bg-indigo-50/60 hover:text-indigo-700"
                                            >
                                                <span className="flex items-center gap-3">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50/80 text-indigo-600">
                                                        <Icon className="text-lg" />
                                                    </span>
                                                    {link.label}
                                                </span>
                                                <FiArrowUpRight className="text-slate-400 transition duration-200 group-hover:text-indigo-600" />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8"
                    >
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-indigo-50/60 to-transparent" />

                        <div className="relative">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                                        Send a message
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                                        Start the conversation
                                    </h3>
                                </div>
                                <span className="hidden rounded-full border border-indigo-200/60 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700 backdrop-blur-sm sm:block">
                                    Usually within 24 hours
                                </span>
                            </div>

                            <div className="mt-5 rounded-xl border border-slate-200/60 bg-white/80 p-4 text-sm text-slate-500 shadow-sm">
                                Share the role, project scope, or collaboration idea. A clear message helps me respond faster.
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            Full Name <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            {...register("name", {
                                                required: "Please enter your name.",
                                            })}
                                            className={`w-full rounded-xl border ${errors.name ? "border-rose-400" : "border-slate-200/60"} bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur-sm transition placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100`}
                                            placeholder="Your name"
                                            aria-invalid={Boolean(errors.name)}
                                        />
                                        {errors.name && (
                                            <p className="mt-2 text-sm text-rose-600">{errors.name.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            Email <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Please enter your email.",
                                                pattern: {
                                                    value: /^\S+@\S+$/i,
                                                    message: "Please enter a valid email address.",
                                                },
                                            })}
                                            type="email"
                                            className={`w-full rounded-xl border ${errors.email ? "border-rose-400" : "border-slate-200/60"} bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur-sm transition placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100`}
                                            placeholder="you@example.com"
                                            aria-invalid={Boolean(errors.email)}
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-rose-600">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                                    <input
                                        {...register("subject")}
                                        className="w-full rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur-sm transition placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                                        placeholder="Internship role, project, or collaboration"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">
                                        Message <span className="text-rose-500">*</span>
                                    </label>
                                    <textarea
                                        {...register("message", {
                                            required: "Please add a short message.",
                                        })}
                                        rows="6"
                                        className={`w-full rounded-xl border ${errors.message ? "border-rose-400" : "border-slate-200/60"} bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur-sm transition placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100`}
                                        placeholder="Tell me a little about the opportunity, team, or project."
                                        aria-invalid={Boolean(errors.message)}
                                    />
                                    {errors.message && (
                                        <p className="mt-2 text-sm text-rose-600">{errors.message.message}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-4 border-t border-slate-200/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="space-y-1">
                                        <AnimatePresence>
                                            {status === "error" && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    className="text-sm text-rose-600"
                                                >
                                                    Failed to send message. Please review the details and try again.
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                        <p className="text-xs text-slate-500">
                                            Your information is only used to reply to your message.
                                        </p>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={status === "sending"}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/50 transition hover:bg-indigo-700 hover:shadow-indigo-300/60 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {status === "sending" ? (
                                            <>
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FiArrowUpRight className="text-lg" />
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;