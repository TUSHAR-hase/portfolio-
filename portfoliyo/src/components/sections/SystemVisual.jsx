"use client";

import { useState } from "react";
import {
  FiCheckCircle,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLock,
  FiServer,
} from "react-icons/fi";

const nodes = [
  {
    id: "client",
    title: "Client Layer",
    tech: "Next.js 16 · React 19",
    protocol: "HTTPS / HTTP/2",
    latency: "< 80ms TTFB",
    role: "Server-side rendering, optimistic state updates & responsive presentation",
    icon: FiGlobe,
    status: "active",
  },
  {
    id: "gateway",
    title: "API Gateway",
    tech: "Node.js · Express REST",
    protocol: "TLS 1.3 / JSON",
    latency: "< 120ms P99",
    role: "Centralized endpoint routing, request validation, CORS & rate limiting",
    icon: FiServer,
    status: "active",
  },
  {
    id: "auth",
    title: "Auth & Security",
    tech: "JWT · Middleware",
    protocol: "Cryptographic HMAC",
    latency: "< 15ms overhead",
    role: "Stateless session validation, role-based access control & OTP handshakes",
    icon: FiLock,
    status: "active",
  },
  {
    id: "db",
    title: "Data Persistence",
    tech: "MongoDB · Mongoose",
    protocol: "TCP / Replica Wire",
    latency: "< 25ms query",
    role: "Document persistence, compound indexing, aggregation & ACID safety",
    icon: FiDatabase,
    status: "active",
  },
  {
    id: "inference",
    title: "Applied Inference",
    tech: "Python · YOLOv8 & NLP",
    protocol: "REST Service / Worker",
    latency: "Real-time edge frame",
    role: "Computer vision bounding-box detection & grievance text classification",
    icon: FiCpu,
    status: "standby",
  },
];

export default function SystemVisual() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <div className="card-base overflow-hidden border border-border bg-surface p-5 sm:p-6">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-text-primary">
            System Architecture &amp; Data Pipeline
          </span>
        </div>
        <span className="font-mono text-[11px] text-text-muted">
          Active Topology
        </span>
      </div>

      {/* Interactive Topology Graph */}
      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = activeNode.id === node.id;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(node)}
              className={`flex items-start gap-3 rounded-lg border p-3 text-left transition-all ${
                isSelected
                  ? "border-accent bg-accent-light shadow-sm"
                  : "border-border bg-surface-raised hover:border-border-strong hover:bg-surface-hover"
              }`}
            >
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border text-sm ${
                  isSelected
                    ? "border-accent bg-accent text-on-accent"
                    : "border-border bg-surface text-text-secondary"
                }`}
              >
                <Icon />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-xs font-bold text-text-primary">
                    {node.title}
                  </p>
                  <span className="font-mono text-[10px] text-text-muted">
                    {node.latency}
                  </span>
                </div>
                <p className="truncate font-mono text-[11px] text-accent">
                  {node.tech}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Node Inspector Detail Panel */}
      <div className="mt-5 rounded-lg border border-border bg-surface-raised p-4">
        <div className="flex items-center justify-between gap-2 border-b border-border pb-2.5">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-xs text-emerald-500" />
            <span className="font-mono text-xs font-bold text-text-primary">
              {activeNode.title} Specifications
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-muted uppercase">
            {activeNode.protocol}
          </span>
        </div>

        <p className="mt-2.5 text-xs leading-relaxed text-text-secondary">
          {activeNode.role}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 pt-2 text-[11px] font-mono text-text-muted border-t border-border">
          <span>Technology: <strong className="text-text-primary font-medium">{activeNode.tech}</strong></span>
          <span>·</span>
          <span>Target Latency: <strong className="text-emerald-600 dark:text-emerald-400 font-medium">{activeNode.latency}</strong></span>
        </div>
      </div>
    </div>
  );
}

