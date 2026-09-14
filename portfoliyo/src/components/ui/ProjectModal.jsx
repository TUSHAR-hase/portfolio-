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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="card-base relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden bg-surface shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Project Cover */}
        <div className="relative aspect-[21/9] w-full shrink-0 overflow-hidden border-b border-border bg-surface-raised">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
            aria-label="Close project modal"
          >
            <FiX className="text-base" />
          </button>

          {/* Title on cover */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold bg-black/40 px-2 py-0.5 rounded">
              {project.category}
            </span>
            <h3 id="modal-title" className="mt-1.5 text-xl font-extrabold sm:text-2xl text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-6">
          {/* Problem & Solution */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              The Engineering Problem
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
              Architectural Solution
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
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
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-md border border-border bg-surface-raised p-3 text-xs"
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
              <div className="mt-3 space-y-2">
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
                <span key={t} className="badge-tech">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface-subtle p-4 sm:px-7">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3"
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
                className="btn-primary text-xs py-2 px-3"
              >
                Live Demo
                <FiExternalLink />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="btn-secondary text-xs py-2 px-3"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

