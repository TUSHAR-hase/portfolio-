'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaPlay, FaUtensils, FaMobileAlt } from 'react-icons/fa';
import Image from 'next/image';
import hospital from '../../assets/images/hospital.jpg';
import bluecolorapp from '../../assets/images/blue2.jpg';
import resturent from '../../assets/images/resturent.png';
import cabbooking from '../../assets/images/cab.png';
import railmadad from '../../assets/images/railmadad.jpeg'
// Map project types to nice icons/colors
const typeMeta = {
  web: { icon: <FaUtensils className="text-pink-400" />, color: "bg-pink-600/20 text-pink-400" },
  app: { icon: <FaMobileAlt className="text-violet-400" />, color: "bg-violet-600/20 text-violet-400" }
}

const projects = [
  {
    id: 1,
    title: "Restaurant Management System",
    type: "web",
    description: "A web application to manage restaurant operations, including menu management, order tracking, and user authentication, inspired by Zomato.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    image: resturent,
    details: {
      features: [
        "Admin Dashboard for Managing Menu & Orders",
        "Add to Cart Functionality",
        "User Authentication (Login/Signup)",
        "Menu Management by Admin",
        "Live Order Tracking",
        "Customer Reviews and Ratings"
      ],
      duration: "12 Days",
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/resto.git",
        live: "https://github.com/TUSHAR-hase/resto.git"
      }
    }
  },
  {
    id: 2,
    title: "Hospital Management",
    type: "web",
    description: "A web-based system to efficiently manage hospital workflows including doctors, patients, and appointments.",
    image: hospital,
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    details: {
      features: [
        "Doctor Dashboard with Patient Details",
        "Patient Registration and Management",
        "Appointment Booking and Scheduling",
        "Medical Record Maintenance"
      ],
      duration: "15 Days",
      role: "Backend Developer & Frontend Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/hospital-management.git",
        live: "https://hospital-management-puce.vercel.app"
      }
    }
  },
  {
    id: 3,
    title: "Blue Color App",
    type: "app",
    description: "A mobile app designed to connect skill-based individuals with society, empowering them to participate in community-driven projects and initiatives.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: bluecolorapp,
    details: {
      features: [
        "Connects skill-based individuals with community projects",
        "Find local opportunities to contribute based on skills",
        "Create and join events for skill-based volunteering",
        "User profiles with skills, achievements, and interests",
        "Real-time notifications about available projects and events"
      ],
      duration: "8 Days",
      role: "Mobile App Developer",
      links: {
        github: "https://github.com/TUSHAR-hase/blue-color-app.git",
        live: "https://your-live-demo-link.com"
      }
    }
  },
  {
    id: 4,
    title: "Cab Booking System",
    type: "web",
    description: "A full-stack web application for long-distance cab booking. Users can book cabs, riders can manage vehicles and accept/reject rides. OTP verification ensures secure ride completion.",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
    image: cabbooking,
    details: {
      features: [
        "User Authentication (Login/Signup)",
        "Cab Booking for Long-Distance Travel",
        "Live Ride Status Tracking",
        "Rider Can Accept or Reject Bookings",
        "OTP-Based Ride Completion",
        "Riders Can Manage Vehicles",
        "Admin Panel for Monitoring"
      ],
      duration: "12 Days",
      role: "Full Stack Developer",
      links: {
        github: "https://github.com/naikJagrav/bookinHub.git",
        live: "https://cab-booking-one-jade.vercel.app/"
      }
    }
  },
  {
  id: 5,
  title: "Rail Madad Complaint Management System",
  type: "web + ivr + ml",
  description: "A railway complaint management system inspired by Rail Madad that allows users to register complaints via web and IVR calls. The system uses a trained machine learning model to automatically identify and categorize complaints for faster resolution.",
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
    "Next.js",
    "Python",
    "Scikit-learn",
    "Twilio IVR",
    "JWT Authentication"
  ],
  image: railmadad,
  details: {
    features: [
      "IVR Call-Based Complaint Registration",
      "Speech-to-Text Processing for IVR Calls",
      "Machine Learning Model for Complaint Classification",
      "Automatic Complaint Category Identification",
      "Web-Based Complaint Submission",
      "Complaint Status Tracking (Pending / In Progress / Resolved)",
      "Admin Dashboard for Complaint Management",
      "Role-Based Access (User / Admin)",
      "Automated Complaint ID Generation",
      "Call Logs and Complaint History Management"
    ],
    duration: "18 Days",
    role: "Full Stack Developer",
    links: {
      github: "https://github.com/TUSHAR-hase/Rail_Madad_backend",
      live: "https://rail-madad-demo.vercel.app"
    }
  }
}

];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Responsive filtered projects
  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.type === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-20 px-6 selection:bg-pink-100 selection:text-pink-700"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ scale: 0.7, opacity: 0.11 }}
          animate={{ scale: 1, opacity: 0.13 }}
          transition={{ duration: 17, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute w-full h-full bg-gradient-radial from-violet-700/20 via-transparent to-transparent"
        />
        <div className="absolute w-[24rem] h-[22rem] bg-gradient-to-r from-violet-800/35 to-pink-500/50 blur-3xl -top-44 left-1/4 animate-pulse" />
        <div className="absolute w-[26rem] h-[20rem] bg-gradient-to-r from-pink-400/35 to-purple-900/25 blur-3xl -bottom-32 right-1/3 rotate-180" />
      </div>

      {/* Header with Bracket Accents */}
      <div className="text-center mb-14 w-full relative">
        <div className="flex justify-center items-center mb-2">
          <div className="h-1 w-9 bg-gradient-to-r from-pink-400 to-purple-700 rounded-full mr-2 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent shadow-lg">
            My Projects
          </h1>
          <div className="h-1 w-9 bg-gradient-to-r from-purple-700 to-pink-400 rounded-full ml-2 animate-pulse" />
        </div>
        <p className="text-lg md:text-xl text-white/80 mx-auto max-w-2xl font-medium">
          A curated showcase of real-world work: web apps, dashboards and mobile solutions built for modern businesses and people.
        </p>
      </div>

      {/* Filters - Animated Chips */}
      <motion.div className="flex flex-wrap justify-center gap-4 mb-12" initial="hidden" animate="visible" variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}>
        {['all', 'web', 'app'].map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center gap-2 px-7 py-3 rounded-full font-bold uppercase tracking-wide transition bg-white/10 text-white/80 shadow 
                hover:shadow-xl hover:bg-gradient-to-r from-pink-600 to-purple-700
                ${activeFilter === filter ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-110' : ''}
              `}
            whileHover={{ scale: 1.09 }}
          >
            {filter !== 'all' && typeMeta[filter]?.icon}
            {filter}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects grid with creative UI */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        {filtered.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            whileHover={{ y: -10, scale: 1.04, boxShadow: '0 10px 30px 5px #a21caf23' }}
            transition={{ duration: .34, type: "spring" }}
            className="group relative rounded-3xl bg-gradient-to-br from-white/5 via-fuchsia-800/15 to-violet-700/5 border border-white/10 hover:border-pink-400/40 shadow-lg hover:shadow-2xl p-6 transition-all cursor-pointer overflow-hidden"
            onClick={() => setSelectedProject(project)}
            style={{ minHeight: '370px' }}
          >
            {/* Featured badge */}
            {idx === 0 && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-white rounded-full text-xs font-bold shadow-lg animate-bounce z-10">
                Featured
              </div>
            )}

            {/* Card image with animated overlay */}
            <div className="h-48 w-full bg-gray-900/30 rounded-xl mb-5 overflow-hidden transition-all relative">
              <Image src={project.image} alt={project.title} className="object-cover object-center w-full h-full rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-transparent group-hover:opacity-60 transition-opacity rounded-xl" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 text-xs rounded-full ${typeMeta[project.type]?.color} font-semibold uppercase flex items-center gap-1`}>
                  {typeMeta[project.type]?.icon} {project.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3 mt-2">
                {project.tech.slice(0, 3).map(tech => (
                  <span key={tech} className="rounded-lg bg-white/10 py-1 px-2 font-semibold text-sm flex items-center gap-1">
                    {/* Add icons if you want, else text */}
                    <span className="text-pink-200">{tech}</span>
                  </span>
                ))}
              </div>
              <p className="text-white/85 line-clamp-3 min-h-[54px]">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              layoutId={`projCard-${selectedProject.id}`}
              className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900/80 rounded-2xl p-7 md:p-10 w-full md:max-w-3xl border border-white/20 relative flex flex-col animate-pop"
              onClick={e => e.stopPropagation()}
              style={{ maxHeight: "92vh", overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-0 right-0 self-end z-20 bg-violet-800/60 rounded-full p-2 text-white/70 hover:text-white mb-3 transition-all backdrop-blur shadow"
                style={{ marginTop: '-8px', marginBottom: '8px' }}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 w-full md:w-[260px] flex items-center justify-center">
                  <Image src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-xl shadow-xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-base text-white/85 mb-5">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="inline-flex bg-gradient-to-r from-purple-500/40 to-pink-500/40 text-pink-100 px-3 rounded-full py-1 text-xs uppercase font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold text-pink-400 mb-2">Key Features</h4>
                    <ul className="text-white/80 list-disc list-inside mb-4">
                      {selectedProject.details.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="flex flex-col md:flex-row md:gap-8 text-white/80 md:items-center">
                      <div>
                        <span className="font-semibold">Duration: </span>{selectedProject.details.duration}
                      </div>
                      <div>
                        <span className="font-semibold">Role: </span>{selectedProject.details.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8 mb-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg px-5 py-2 text-white font-semibold flex items-center gap-2 hover:shadow-xl transition-all text-sm"
                      href={selectedProject.details.links.github}
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/25 rounded-lg px-5 py-2 text-white hover:bg-white/10 font-semibold flex items-center gap-2 transition-all text-sm"
                      href={selectedProject.details.links.live}
                    >
                      <FaPlay /> See Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};



export default Portfolio;
