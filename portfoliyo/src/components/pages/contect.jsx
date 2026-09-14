"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiCopy,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import { sound } from "../../utils/sound";

const EMAIL = "thakorrajta859@gmail.com";
const PHONE = "+91 9054896753";

const contactChannels = [
  {
    title: "Email Dispatch",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FiMail,
    action: "copy",
    hint: "Click to copy email",
  },
  {
    title: "Direct Phone / WhatsApp",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s+/g, "")}`,
    icon: FiPhone,
    action: "call",
    hint: "Click to call / WhatsApp",
  },
  {
    title: "Engineering Campus",
    value: "Ahmedabad, Gujarat, India",
    href: "#contact",
    icon: FiMapPin,
    action: "info",
    hint: "IITRAM · Open to relocation & remote",
  },
];

const socialProfiles = [
  {
    label: "GitHub",
    href: "https://github.com/TUSHAR-hase",
    icon: FiGithub,
    handle: "@TUSHAR-hase",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thakor-tushar-a34ab3288",
    icon: FiLinkedin,
    handle: "Tushar Thakor",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tushar_vaghela1507",
    icon: FiInstagram,
    handle: "@tushar_vaghela1507",
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [status, setStatus] = useState("idle");
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    sound.playClick();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      sound.playSuccess();
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const onSubmit = (data) => {
    setStatus("sending");
    sound.playClick();

    const subject = encodeURIComponent(
      `[SWE Inquiry] ${data.subject || "Software Engineering Opportunity"} — from ${data.name}`
    );
    const body = encodeURIComponent(
      `Hi Tushar,\n\n${data.message}\n\nCandidate / Team Details:\nName: ${data.name}\nEmail: ${data.email}\nInquiry Type: ${data.inquiryType || "General"}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setStatus("success");
    sound.playSuccess();
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section id="contact" className="section-shell relative">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Column: Direct Connect & Verified Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-kicker">Initialize Handshake</span>
            <h2 className="section-title mt-5">
              Let&apos;s Build Systems Together.
            </h2>
            <p className="section-copy-md mt-5">
              Interested in discussing software engineering internships, collaborative builds, or architecture ideas? Reach out directly via email, phone, or the dev dispatch form.
            </p>

            {/* Contact Channels with One-Click Copy */}
            <div className="mt-8 space-y-3.5">
              {contactChannels.map((c) => {
                const Icon = c.icon;
                const isCopied = copiedKey === c.title;

                return (
                  <div
                    key={c.title}
                    onMouseMove={handleCardMouseMove}
                    className="spotlight-card flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-bright">
                        <Icon className="text-xl" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted">
                          {c.title}
                        </p>
                        <p className="mt-0.5 truncate text-xs font-bold text-strong sm:text-sm">
                          {c.value}
                        </p>
                        <p className="text-[11px] text-muted">{c.hint}</p>
                      </div>
                    </div>

                    {c.action === "copy" && (
                      <button
                        type="button"
                        onClick={() => handleCopy(c.value, c.title)}
                        className="ml-2 flex h-8 items-center gap-1.5 rounded-lg border border-border/80 bg-surface px-2.5 text-xs font-semibold text-accent-bright transition hover:bg-surface-2"
                        title="Copy to clipboard"
                      >
                        {isCopied ? (
                          <>
                            <FiCheck className="text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <FiCopy />
                            <span className="hidden sm:inline">Copy</span>
                          </>
                        )}
                      </button>
                    )}

                    {c.action === "call" && (
                      <a
                        href={c.href}
                        onClick={() => sound.playClick()}
                        className="ml-2 flex h-8 items-center gap-1 rounded-lg border border-border/80 bg-surface px-2.5 text-xs font-semibold text-accent-bright transition hover:bg-surface-2"
                      >
                        <FiPhone />
                        <span className="hidden sm:inline">Call</span>
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Network Cards */}
            <div className="mt-8">
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted">
                Public Profiles &amp; Code Repositories:
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {socialProfiles.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="button-secondary flex items-center gap-2 py-2 px-3 text-xs"
                    >
                      <Icon className="text-base text-accent-bright" />
                      <span>{s.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            onMouseMove={handleCardMouseMove}
            className="spotlight-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div>
                <h3 className="text-lg font-bold text-strong sm:text-xl">
                  Message Dispatch Console
                </h3>
                <p className="text-xs text-muted font-mono">
                  Direct dispatch to thakorrajta859@gmail.com
                </p>
              </div>
              <span className="chip-accent text-xs">Priority Queue</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold text-strong">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required." })}
                    className={`input-shell ${errors.name ? "input-invalid" : ""}`}
                    placeholder="e.g. Alex Miller"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold text-strong">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address.",
                      },
                    })}
                    className={`input-shell ${errors.email ? "input-invalid" : ""}`}
                    placeholder="alex@company.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="mb-1.5 block text-xs font-bold text-strong">
                  Opportunity Type
                </label>
                <select
                  id="inquiryType"
                  {...register("inquiryType")}
                  className="input-shell bg-surface"
                >
                  <option value="SWE Internship">Software Engineering Internship</option>
                  <option value="Full-Stack Role">Full-Stack Developer Opportunity</option>
                  <option value="Project Collaboration">Collaborative Project / Hackathon</option>
                  <option value="General Engineering">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-bold text-strong">
                  Subject Line
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  className="input-shell"
                  placeholder="e.g. Summer 2025 SWE Internship at Tech Corp"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-strong">
                  Message Details <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", { required: "Please enter your message." })}
                  className={`input-shell ${errors.message ? "input-invalid" : ""}`}
                  placeholder="Tell me about your team, tech stack, or engineering project..."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-border/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] font-mono text-muted">
                  Pre-fills your email client with message parameters.
                </p>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="button-primary min-w-[160px]"
                >
                  {status === "sending" ? (
                    <span>Opening Mail Client...</span>
                  ) : (
                    <>
                      <FiSend className="text-sm" />
                      Dispatch Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Notification Alert */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed inset-x-4 bottom-5 z-[90] mx-auto max-w-md overflow-hidden rounded-2xl border border-emerald-500/30 bg-surface p-4 shadow-2xl sm:right-6 sm:inset-x-auto dark:bg-[#0b1120]"
            role="status"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <FiCheckCircle className="text-xl" />
              </span>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Email Dispatch Prepared
                </p>
                <p className="mt-1 text-xs leading-relaxed text-secondary">
                  Your native email client is opening with your message pre-loaded. Thank you for reaching out!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}