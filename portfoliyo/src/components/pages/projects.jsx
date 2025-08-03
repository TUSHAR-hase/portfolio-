'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import hospital from '../../assets/images/hospital.jpg';
import bluecolorapp from '../../assets/images/blue2.jpg';
import resturent from '../../assets/images/resturent.png';
import cabbooking from '../../assets/images/cab.png';
import Image from 'next/image';
const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

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
          live: "https://github.com/naikJagrav/bookinHub.git"
        }
      }
    }
  ];

  return (
    <section 
      id="portfolio"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-20 px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 left-1/3 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 right-1/3 rotate-180" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
            MY Projects
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore my curated collection of design and development projects, crafted with precision and passion.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'web', 'app'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${
                activeFilter === filter 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-pink-400/30 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gray-800/50 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-pink-500/20 text-pink-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal - Mobile Optimized */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-gray-900 to-purple-900/80 rounded-2xl p-6 md:p-8 max-w-2xl w-full border border-white/10 relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxHeight: '90vh',
                  margin: '20px',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="sticky top-2 right-2 self-end text-white/60 hover:text-white z-10 bg-purple-900/80 rounded-full p-1 md:p-2 mb-4"
                >
                  ✕
                </button>

                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-white/80">{selectedProject.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-pink-400 mb-2">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.details.features.map((feature) => (
                          <li key={feature} className="text-white/80">• {feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full bg-pink-500/20 text-pink-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-violet-400 mb-2">Project Details</h3>
                        <div className="space-y-2">
                          <p className="text-white/80">
                            <span className="font-semibold">Duration:</span> {selectedProject.details.duration}
                          </p>
                          <p className="text-white/80">
                            <span className="font-semibold">Role:</span> {selectedProject.details.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <a
                      href={selectedProject.details.links.github}
                      className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all text-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repository
                    </a>
                    <a
                      href={selectedProject.details.links.live}
                      className="px-6 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all text-center"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;