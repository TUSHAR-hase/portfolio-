import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-24 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute w-[800px] h-[800px] bg-radial-gradient(from-60% at 50% 50%, rgba(192,132,252,0.2) 0%, rgba(192,132,252,0) 60%)"
        />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 -left-32 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 -right-32 rotate-180" />
      </div>

      <div className="container mx-auto px-4 z-10 max-w-7xl">
        {/* About Me Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl opacity-30" />
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate UI Designer and Web Developer with a mission to create beautiful, functional digital experiences.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* My Story Section */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative space-y-8"
          >
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-300">
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                  My Journey
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mt-4 rounded-full" />
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Turning ideas into real-world systems that serve society through innovative technology solutions and user-centric design.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-6">
              <div className="flex-shrink-0 relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">5+</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Years Experience</h3>
                <p className="text-gray-400">Building digital products and solutions</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6"
          >
            {[
              {
                icon: '👨💻',
                title: 'Full-Stack Development',
                content: 'MERN stack specialist building scalable applications with strong foundations in both frontend and backend architecture.'
              },
              {
                icon: '📱',
                title: 'Mobile Development',
                content: 'Flutter expert creating practical mobile solutions including POS systems and AI-powered applications.'
              },
              {
                icon: '🚀',
                title: 'Tech Innovation',
                content: 'Passionate about AI integration, cloud solutions, and cutting-edge system development.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-pink-400/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.content}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-pink-400/10 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%'
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;