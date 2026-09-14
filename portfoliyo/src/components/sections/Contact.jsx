"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiAlertCircle,
  FiCheck,
  FiCheckCircle,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const EMAIL = "thakorrajta859@gmail.com";
const PHONE = "+91 9054896753";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "SWE Internship",
      subject: "",
      message: "",
    },
  });

  const [formStatus, setFormStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const onSubmit = async (data) => {
    setFormStatus("sending");

    try {
      // Use configured Vercel API endpoint from environment variables
      const apiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;

      if (!apiUrl) {
        console.warn(
          "NEXT_PUBLIC_CONTACT_API_URL is not defined in environment variables. Please provide your Vercel API URL."
        );
      }

      // If no URL is configured, attempt relative endpoint or handle error gracefully
      const endpoint = apiUrl || "/api/messages/sendmail";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          inquiryType: data.inquiryType,
          subject: data.subject?.trim() || `[Portfolio] Inquiry regarding ${data.inquiryType}`,
          message: data.message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }

      // Check if API returned JSON with an explicit failure flag
      const result = await res.json().catch(() => null);
      if (result && result.success === false) {
        throw new Error(result.message || "API indicated failure");
      }

      setFormStatus("success");
      reset();
      setTimeout(() => setFormStatus("idle"), 6000);
    } catch (err) {
      console.error("Contact form submission error:", err);
      // Show professional user-facing error message and do NOT reset form
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="site-shell section-padding">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Column: Direct Communication Channels */}
          <div>
            <span className="kicker">Get in Touch</span>
            <h2 className="section-heading mt-4">
              Let&apos;s connect and discuss opportunities.
            </h2>
            <p className="section-lead mt-4">
              I am open to Software Engineering and Full-Stack development internships, technical project collaborations, and professional engineering discussions.
            </p>

            <div className="mt-8 space-y-3.5">
              {/* Email Card */}
              <div className="card-base flex items-center justify-between p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                    <FiMail className="text-base" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="truncate text-xs font-semibold text-text-primary hover:text-accent sm:text-sm block"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary py-1 px-2.5 text-xs shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="card-base flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                    <FiPhone className="text-base" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={`tel:${PHONE.replace(/\s+/g, "")}`}
                      className="text-xs font-semibold text-text-primary hover:text-accent sm:text-sm"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${PHONE.replace(/\s+/g, "")}`}
                  className="btn-secondary py-1 px-2.5 text-xs"
                >
                  Call
                </a>
              </div>

              {/* Location Card */}
              <div className="card-base flex items-center gap-3 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-raised text-accent">
                  <FiMapPin className="text-base" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    Location &amp; Work Eligibility
                  </p>
                  <p className="text-xs font-semibold text-text-primary sm:text-sm">
                    Ahmedabad, Gujarat, India · Open to Remote &amp; Relocation
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-border pt-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                Profiles &amp; Repositories:
              </h4>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/TUSHAR-hase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-1.5 px-3"
                >
                  <FiGithub />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/thakor-tushar-a34ab3288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-1.5 px-3"
                >
                  <FiLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="card-base p-6 sm:p-8">
            <div className="border-b border-border pb-4">
              <h3 className="text-lg font-bold text-text-primary">
                Send a Message
              </h3>
              <p className="text-xs text-text-muted">
                Fill in the details below to contact me directly regarding internships, projects, or inquiries.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
              {/* Name & Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-text-primary">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    {...register("name", {
                      required: "Please enter your name.",
                      minLength: { value: 2, message: "Name must be at least 2 characters." },
                    })}
                    className={`form-input ${errors.name ? "form-input-error" : ""}`}
                    placeholder="e.g. Sarah Jenkins"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-text-primary">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Please enter your email.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                    className={`form-input ${errors.email ? "form-input-error" : ""}`}
                    placeholder="sarah@company.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="mb-1.5 block text-xs font-semibold text-text-primary">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  {...register("inquiryType")}
                  className="form-input bg-surface"
                >
                  <option value="SWE Internship">Software Engineering Internship</option>
                  <option value="Full-Stack Role">Full-Stack Development Role</option>
                  <option value="Technical Project">Technical Collaboration / Project</option>
                  <option value="General Inquiry">General Inquiries</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-text-primary">
                  Subject
                </label>
                <input
                  id="subject"
                  {...register("subject")}
                  className="form-input"
                  placeholder="e.g. Summer 2025 Internship Opportunity"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-text-primary">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", {
                    required: "Please provide your message.",
                    minLength: { value: 10, message: "Message should be at least 10 characters." },
                  })}
                  className={`form-input ${errors.message ? "form-input-error" : ""}`}
                  placeholder="Share details about the role, team, or project requirements..."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>
                )}
              </div>

              {/* Status Alert Messages */}
              {formStatus === "success" && (
                <div className="flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-600 dark:text-emerald-400">
                  <FiCheckCircle className="text-base shrink-0" />
                  <span>Message sent successfully.</span>
                </div>
              )}

              {formStatus === "error" && (
                <div className="flex items-center gap-2 rounded-md border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-600 dark:text-rose-400">
                  <FiAlertCircle className="text-base shrink-0" />
                  <span>Unable to send your message. Please try again.</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="btn-primary w-full sm:w-auto min-w-[160px]"
                >
                  {formStatus === "sending" ? (
                    <span>Sending Message...</span>
                  ) : formStatus === "success" ? (
                    <>
                      <FiCheckCircle />
                      Message Sent
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
