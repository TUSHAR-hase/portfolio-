'use client'

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiClock, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

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
  const { register, handleSubmit, reset } = useForm();
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
    <section id="contact" className="section-shell py-24 sm:py-28">
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 right-6 z-[80] max-w-sm rounded-[1.5rem] border border-emerald-400/20 bg-slate-950/92 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Message sent</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Thanks for reaching out. Your message has been submitted successfully.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="section-kicker">Contact</span>
            <h2 className="section-title mt-6 text-balance">Let&apos;s talk about opportunities, projects, or the next thing to build.</h2>
            <p className="section-copy mt-6">
              If you&apos;re hiring, collaborating, or just want to discuss an idea, feel free to reach out. The
              existing backend submission flow stays exactly the same, and the UI is now designed to feel clearer and
              more professional.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact details</p>

            <div className="mt-6 space-y-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 hover:bg-white/[0.05]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/18 to-violet-400/18 text-sky-300">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-400">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <FiClock className="text-sky-300" />
                Availability
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Open to placements, internships, freelance opportunities, and product-focused frontend work.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Social links</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
                    >
                      <Icon className="text-sky-300" />
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass-panel rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Send a message</p>
                <h3 className="mt-3 text-3xl font-semibold text-white">Start the conversation</h3>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300 sm:block">
                Fast response preferred
              </span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Full Name</label>
                  <input
                    {...register("name")}
                    className="input-shell"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="email"
                    className="input-shell"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Subject</label>
                <input
                  {...register("subject")}
                  className="input-shell"
                  placeholder="Project, role, or message subject"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  {...register("message")}
                  rows="6"
                  className="input-shell resize-none"
                  placeholder="Tell me a little about the opportunity or project."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <AnimatePresence>
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="text-sm text-rose-300"
                    >
                      Failed to send message. Please enter valid details and try again.
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
