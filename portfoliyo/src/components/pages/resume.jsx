import { motion } from 'framer-motion';


const Resume = () => {
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="resume"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 overflow-hidden py-20 px-6"
    >
      {/* Background Pulses */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 -left-32 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 -right-32 rotate-180" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-2xl w-full text-center z-10"
      >
        {/* Photo & Name */}
        

        <h1 className="text-4xl font-bold text-white mb-4">My Resume</h1>
        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
          I'm a creative mind passionate about technology and design. Download my resume to explore my world!
        </p>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-pink-400 mb-3">Focus Areas</h3>
            <p className="text-white/80">Innovation & Problem-Solving</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-purple-400 mb-3">Skills</h3>
            <div className="space-y-1">
              <p className="text-white/80">React, Node.js etc..</p>
              <p className="text-white/80">Full Stack Development & App Development</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-violet-400 mb-3">Achievements</h3>
            <p className="text-white/80">3+ projects delivered</p>
          </div>
        </div>

        {/* Download Button */}
        <a
          href="../assets/resum.pdf"
          download
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
        >
          Get My Resume
        </a>

        {/* File Details */}
        <div className="text-sm text-white/60 space-y-1">
          <p>Last updated: Dec 2024 | PDF format | 148 KB</p>
          <p>© Thakor Tushar</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;