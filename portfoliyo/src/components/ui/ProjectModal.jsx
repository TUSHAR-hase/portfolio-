"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FiCheckCircle, FiExternalLink, FiGithub, FiLayers, FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="card-base relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Project Cover */}
        <div className="relative aspect-[21/9] sm:aspect-[21/9] min-h-[140px] w-full shrink-0 overflow-hidden border-b border-border bg-surface-raised">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          {/* Close Button - 44px touch target */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close project modal"
          >
            <FiX className="text-lg" />
          </button>

          {/* Title on cover */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 text-white">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-accent font-semibold bg-black/50 px-2 py-0.5 rounded">
              {project.category}
            </span>
            <h3 id="modal-title" className="mt-1 text-lg sm:text-2xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-7 space-y-5 sm:space-y-6">
          {/* Problem & Solution */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              The Engineering Problem
            </h4>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              Architectural Solution
            </h4>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary">
              {project.solution}
            </p>
          </div>

          {/* Multi-Tier Architecture */}
          {project.architecture && (
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                <FiLayers /> System Layers &amp; Architecture
              </h4>
              <div className="mt-3 space-y-2">
                {project.architecture.map((arch, i) => (
                  <div
                    key={arch.layer}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-md border border-border bg-surface-raised p-2.5 sm:p-3 text-xs"
                  >
                    <span className="font-mono font-bold text-text-primary">
                      [{i + 1}] {arch.layer}
                    </span>
                    <span className="font-mono text-accent">
                      {arch.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                Key System Capabilities
              </h4>
              <div className="mt-2.5 sm:mt-3 space-y-2">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs text-text-secondary">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              Technologies Utilized
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="badge-tech text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-border bg-surface-subtle p-3 sm:px-7">
          <div className="flex flex-wrap items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs min-h-[42px] py-2 px-3"
              >
                <FiGithub />
                Repository
              </a>
            )}

            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs min-h-[42px] py-2 px-3"
              >
                Live Demo
                <FiExternalLink />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-xs min-h-[42px] py-2 px-3 ml-auto sm:ml-0"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
