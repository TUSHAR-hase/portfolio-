"use client";

import { useEffect, useRef, useState } from "react";
import { FiMaximize2, FiMinimize2, FiTerminal, FiX } from "react-icons/fi";
import { sound } from "../../utils/sound";

const COMMANDS = [
  "help",
  "whoami",
  "about",
  "skills",
  "projects",
  "dsa",
  "stats",
  "contact",
  "hire",
  "matrix",
  "clear",
  "exit",
];

const WELCOME_BANNER = [
  "===========================================================",
  "  TUSHAR THAKOR :: CSE INTERACTIVE DEV CONSOLE [v2.4.0]",
  "  Institution: IITRAM (B.Tech Computer Science & Engineering)",
  "  Type 'help' to inspect available commands.",
  "===========================================================",
];

export default function Terminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: "system", text: WELCOME_BANNER },
    { type: "info", text: ["Type 'help' to see what you can explore."] },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      sound.playTerminalOpen();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const newEntries = [{ type: "prompt", text: `tushar@iitram:~$ ${rawCmd}` }];

    switch (cmd) {
      case "help":
        newEntries.push({
          type: "output",
          text: [
            "AVAILABLE SYSTEM COMMANDS:",
            "  whoami      - Display identity and academic status",
            "  about       - Overview of engineering focus & background",
            "  skills      - Full tech stack, languages & CS foundations",
            "  projects    - List of 10+ shipped web, mobile, AI & IoT systems",
            "  dsa         - Data Structures & Algorithms problem-solving stats",
            "  stats       - Core metrics & engineering milestones",
            "  contact     - Direct contact info & social channels",
            "  hire        - Internship availability & next steps",
            "  matrix      - Stream green cyber rain animation",
            "  clear       - Wipe the terminal output buffer",
            "  exit        - Close the interactive terminal",
          ],
        });
        break;

      case "whoami":
        newEntries.push({
          type: "output",
          text: [
            "Tushar Thakor",
            "Role: Full-Stack Developer & Computer Science Student",
            "University: IITRAM (Institute of Infrastructure, Technology, Research and Management)",
            "Specialties: React/Next.js, Node.js, C++ DSA, Python AI/ML, Flutter",
            "Location: Ahmedabad, Gujarat, India",
            "Status: Available for SWE & Full-Stack Internships (Summer 2025/2026)",
          ],
        });
        break;

      case "about":
        newEntries.push({
          type: "output",
          text: [
            "ENGINEERING PHILOSOPHY:",
            "  I believe in building software end to end with architectural integrity.",
            "  From designing fluid interfaces to structuring resilient REST APIs and",
            "  tuning database queries, I ship complete, production-ready systems.",
            "  Actively solving algorithmic challenges on LeetCode while shipping real apps.",
          ],
        });
        break;

      case "skills":
        newEntries.push({
          type: "output",
          text: [
            "CORE TECHNICAL COMPETENCIES:",
            "  • Languages: C++, JavaScript (ES6+), TypeScript, Python, Dart, SQL",
            "  • Web & UI: Next.js 16, React 19, Tailwind CSS, Framer Motion, HTML5/CSS3",
            "  • Backend & APIs: Node.js, Express.js, RESTful Architecture, JWT, WebSockets",
            "  • Databases: MongoDB (Mongoose), MySQL, Firebase Firestore",
            "  • AI & Vision: Python, YOLOv8, OpenCV, Scikit-learn",
            "  • Systems & Mobile: Flutter, Arduino, IR Sensors, Embedded C",
            "  • CS Core: Data Structures, Algorithms, OS, DBMS, Computer Networks",
          ],
        });
        break;

      case "projects":
        newEntries.push({
          type: "output",
          text: [
            "FEATURED REPOSITORIES & SYSTEMS:",
            "  1. [Web] Restaurant Management - Next.js, Node.js, MongoDB, Cart & Orders",
            "  2. [AI] Rail Madad Complaint Triage - Full-Stack + Python Scikit-learn NLP",
            "  3. [Mobile] Blue Color App - Flutter & Firebase Community Matchmaker",
            "  4. [Web] Cab Booking System - Next.js, OTP Ride Tracking, Admin Controls",
            "  5. [Systems] Hospital Management - Express, Role-based Dashboards, MongoDB",
            "  6. [AI] Garbage Detection - YOLO Object Localization in Video Feeds",
            "  7. [Mobile] Women Safety SOS - Flutter One-Tap Emergency Alert & Geolocation",
            "  8. [IoT] Autonomous Line Follower - Arduino, IR Array, PID Motor Control",
          ],
        });
        break;

      case "dsa":
        newEntries.push({
          type: "output",
          text: [
            "DATA STRUCTURES & ALGORITHMS PROFILE:",
            "  • Problems Solved: 250+ Algorithmic Challenges (C++ / Python)",
            "  • Focus Areas: Dynamic Programming, Graph Traversal, Trees, HashMaps, Binary Search",
            "  • Academic Coursework: Advanced DSA, Analysis of Algorithms (IITRAM)",
            "  • Mindset: Obsessed with asymptotic time complexity O(N) and space optimization.",
          ],
        });
        break;

      case "stats":
        newEntries.push({
          type: "output",
          text: [
            "KEY PERFORMANCE METRICS:",
            "  • Projects Shipped: 10+ end-to-end applications",
            "  • Tech Stacks Mastered: 15+ modern tools & frameworks",
            "  • Hackathons: 3+ National / Collegiate Competitions",
            "  • Code Quality: Responsive, accessible, fully tested builds",
          ],
        });
        break;

      case "contact":
        newEntries.push({
          type: "output",
          text: [
            "COMMUNICATION CHANNELS:",
            "  Email:    thakorrajta859@gmail.com",
            "  Phone:    +91 9054896753",
            "  GitHub:   https://github.com/TUSHAR-hase",
            "  LinkedIn: https://www.linkedin.com/in/thakor-tushar-a34ab3288",
          ],
        });
        break;

      case "hire":
        newEntries.push({
          type: "output",
          text: [
            "CANDIDACY STATUS: OPEN TO OFFERS",
            "  Target Roles: Software Engineer Intern, Full Stack Developer, Frontend/Backend Engineer",
            "  Notice: Ready to join immediately / Summer 2025/2026",
            "  Resume: Downloadable directly from the navigation bar or resume section.",
            "  Reach out directly via: thakorrajta859@gmail.com",
          ],
        });
        break;

      case "matrix":
        newEntries.push({
          type: "matrix",
          text: [
            "01001001 01001001 01010100 01010010 01000001 01001101",
            "WAKE UP, RECRUITER... THE MATRIX HAS YOU.",
            "FOLLOW THE WHITE RABBIT. HIRE TUSHAR THAKOR.",
            "01110011 01101000 01101001 01110000 00100000 01101001 01110100",
          ],
        });
        sound.playSuccess();
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        return;

      case "sudo":
      case "sudo su":
      case "sudo rm -rf /":
        newEntries.push({
          type: "error",
          text: ["Permission denied: user 'recruiter' is already operating at root clearance level."],
        });
        break;

      default:
        newEntries.push({
          type: "error",
          text: [`Command not found: '${rawCmd}'. Type 'help' for a list of valid commands.`],
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    sound.playKey();

    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < cmdHistory.length) {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.toLowerCase().trim();
      const match = COMMANDS.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Developer Terminal"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`terminal-window flex flex-col transition-all duration-300 ${
          isMaximized
            ? "h-full w-full rounded-none"
            : "h-[80vh] max-h-[640px] w-full max-w-4xl"
        }`}
      >
        {/* Terminal Header */}
        <div className="terminal-header select-none">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <button
                type="button"
                onClick={onClose}
                className="h-3 w-3 rounded-full bg-rose-500 transition hover:opacity-80"
                aria-label="Close terminal"
              />
              <button
                type="button"
                onClick={() => setHistory([])}
                className="h-3 w-3 rounded-full bg-amber-500 transition hover:opacity-80"
                aria-label="Clear terminal"
              />
              <button
                type="button"
                onClick={() => setIsMaximized((prev) => !prev)}
                className="h-3 w-3 rounded-full bg-emerald-500 transition hover:opacity-80"
                aria-label="Maximize terminal"
              />
            </span>
            <span className="ml-3 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
              <FiTerminal className="text-cyan-400" />
              tushar@iitram-cse:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              type="button"
              onClick={() => setIsMaximized((prev) => !prev)}
              className="rounded p-1 hover:bg-white/10 hover:text-white"
              title={isMaximized ? "Restore size" : "Maximize"}
            >
              {isMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded p-1 hover:bg-white/10 hover:text-white"
              title="Close (ESC)"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div
          className="flex-1 overflow-y-auto p-4 text-[13px] leading-relaxed font-mono sm:p-5"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="mb-2">
              {item.type === "prompt" && (
                <div className="font-semibold text-cyan-400">{item.text}</div>
              )}
              {item.type === "system" && (
                <div className="text-indigo-400">
                  {item.text.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
              {item.type === "info" && (
                <div className="text-slate-400">
                  {item.text.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
              {item.type === "output" && (
                <div className="text-slate-200">
                  {item.text.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
              {item.type === "matrix" && (
                <div className="font-bold text-emerald-400 animate-pulse">
                  {item.text.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
              {item.type === "error" && (
                <div className="text-rose-400">
                  {item.text.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Active Command Line Input */}
          <div className="flex items-center gap-2 text-cyan-400">
            <span className="shrink-0 select-none">tushar@iitram:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-100 outline-none caret-cyan-400"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Quick action bar at bottom of terminal */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#090e1a] px-4 py-2.5 text-xs text-slate-400">
          <div className="flex flex-wrap gap-1.5">
            <span className="text-slate-500">Quick:</span>
            {["skills", "projects", "dsa", "hire"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => handleCommand(c)}
                className="rounded bg-white/5 px-2 py-0.5 text-cyan-300 transition hover:bg-cyan-500/20"
              >
                {c}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline text-slate-500">
            Tab: autocomplete · Esc: exit
          </span>
        </div>
      </div>
    </div>
  );
}

