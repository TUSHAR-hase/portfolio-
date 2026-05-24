'use client'

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerList = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-12 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-8 right-[-4%] h-56 w-56 rounded-full bg-violet-400/10 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed inset-x-4 bottom-4 z-[80] overflow-hidden rounded-[1.5rem] border border-emerald-400/20 bg-slate-950/92 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm"
          >
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.1, ease: "linear" }}
              className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-emerald-300 to-sky-300"
            />
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                <FiCheckCircle className="text-lg" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Message sent</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Thanks for reaching out. Your message has been submitted successfully.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title mt-6 text-balance">Let&apos;s talk about opportunities, projects, or the next thing to build.</h2>
            <p className="section-copy mt-6">
              If you&apos;re hiring, collaborating, or discussing an idea, feel free to reach out.
            </p>
          </div>

          <div className="flex w-full max-w-sm items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/18 text-sky-300">
              <FiMail className="text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Preferred contact</p>
              <p className="mt-1 text-sm text-slate-400">Email works best for internships, projects, and collaborations.</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.04}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-500/10 via-violet-500/8 to-orange-400/10" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact details</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Reach out through the channel that fits best.</h3>

              <motion.div
                variants={staggerList}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-6 space-y-4"
              >
                {contactCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      variants={cardItem}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 hover:border-sky-400/16 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/18 text-sky-300">
                        <Icon className="text-xl" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 break-words text-sm leading-7 text-slate-400">{item.value}</p>
                      </div>
                      <FiArrowUpRight className="mt-1 text-slate-500 transition duration-200 group-hover:text-sky-300" />
                    </motion.a>
                  );
                })}
              </motion.div>

              <motion.div
                variants={cardItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold text-white">
                      <FiClock className="text-sky-300" />
                      Availability
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                      Open to internships, freelance opportunities, and junior product-focused frontend work.
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Open to connect
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={cardItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Social links</p>
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
                        whileHover={{ y: -3, scale: 1.01 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.05] text-sky-300">
                            <Icon className="text-lg" />
                          </span>
                          {link.label}
                        </span>
                        <FiArrowUpRight className="text-slate-500 transition duration-200 group-hover:text-sky-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.1}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-500/10 via-violet-500/10 to-transparent" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Send a message</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Start the conversation</h3>
                </div>
                <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300 sm:block">
                  Usually within 24 hours
                </span>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 text-sm text-slate-400">
                Share the role, project scope, or collaboration idea. A clear message helps me respond faster.
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={cardItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Full Name</label>
                    <input
                      {...register("name", {
                        required: "Please enter your name.",
                      })}
                      className={`input-shell ${errors.name ? "border-rose-400/40" : ""}`}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p>}
                  </motion.div>

                  <motion.div variants={cardItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                    <input
                      {...register("email", {
                        required: "Please enter your email.",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      type="email"
                      className={`input-shell ${errors.email ? "border-rose-400/40" : ""}`}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>}
                  </motion.div>
                </div>

                <motion.div variants={cardItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
                  <input
                    {...register("subject")}
                    className="input-shell"
                    placeholder="Internship role, project, or collaboration"
                  />
                </motion.div>

                <motion.div variants={cardItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    {...register("message", {
                      required: "Please add a short message.",
                    })}
                    rows="6"
                    className={`input-shell resize-none ${errors.message ? "border-rose-400/40" : ""}`}
                    placeholder="Tell me a little about the opportunity, team, or project."
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message.message}</p>}
                </motion.div>

                <div className="flex flex-col gap-4 border-t border-white/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="text-sm text-rose-300"
                        >
                          Failed to send message. Please review the details and try again.
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <p className="text-xs text-slate-500">Your information is only used to reply to your message.</p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="button-primary min-w-[170px] disabled:cursor-not-allowed disabled:opacity-70"
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
