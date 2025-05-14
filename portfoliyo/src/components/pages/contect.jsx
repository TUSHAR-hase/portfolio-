import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { BASE_URL } from '../../../config';

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState('idle');

 const onSubmit = async (data) => {
  setStatus('sending');
  try {
    // const res = await fetch(`${BASE_URL}/api/messages/sendmail`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // });

    // if (!res.ok) throw new Error('Failed to send message');

    setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 3000);
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};


  return (
    <section 
      id="contact" 
      className="relative py-28 bg-gradient-to-br from-gray-900 via-purple-900 w-full to-violet-800 overflow-hidden"
    >
       <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-gradient-to-br from-gray-900 to-purple-900 p-8 rounded-2xl text-center max-w-md border border-white/10"
            >
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-green-400 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-white/80 mb-6">
                Thank you for reaching out. I'll respond to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/30 to-pink-500/30 blur-3xl -top-32 left-1/3 animate-pulse" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 blur-3xl -bottom-32 right-1/3 rotate-180" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl shadow-purple-900/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              >
                Contact Information
              </motion.h2>

              <div className="space-y-6">
                <motion.div 
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-pink-300 mb-1">Phone</h3>
                    <p className="text-white/80">+91 9054896753</p>
                  </div>
                </motion.div>
                 <motion.div 
      initial={{ x: 50 }}
      whileInView={{ x: 0 }}
      className="flex items-start gap-4"
    >
      <div className="p-2 bg-purple-500/20 rounded-lg">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-pink-300 mb-1">Email</h3>
        <a 
          href="mailto:hernansutala@gmail.com" 
          className="text-white/80 hover:text-purple-300 transition-colors"
        >
          thakorrajta859@gmail.com
        </a>
      </div>
    </motion.div>
    <motion.div 
      initial={{ x: -50 }}
      whileInView={{ x: 0 }}
      className="flex items-start gap-4"
    >
      <div className="p-2 bg-purple-500/20 rounded-lg">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-pink-300 mb-1">Location</h3>
        <p className="text-white/80">Ahmedabad, Gujarat</p>
        <p className="text-white/60 text-sm mt-1">India</p>
      </div>
    </motion.div>

                {/* Repeat similar blocks for Email and Location */}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="pt-8 border-t border-white/10"
                >
                  <h3 className="text-lg font-semibold text-purple-400 mb-4">Availability</h3>
                  <p className="text-white/80 mb-2">I'm currently available for freelance work and full-time positions</p>
                  <p className="text-white/60 text-sm">Working hours: Mon - Fri, 9:00 AM - 5:00 PM EST</p>
                </motion.div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
              >
                Send Me A Message
              </motion.h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
                    <label className="block text-white/80 mb-2">Full Name</label>
                    <input
                      {...register('name')}
                      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400/50 transition-all"
                    />
                  </motion.div>
                  
                  {/* Repeat for Email */}
  <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
    <label className="block text-white/80 mb-2">Email</label>
    <input
      {...register('email', {
        required: true,
        pattern: /^\S+@\S+$/i,
      })}
      className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400/50 transition-all"
      type="email"
      placeholder="you@example.com"
    />
  </motion.div>
                </div>

                <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
                  <label className="block text-white/80 mb-2">Subject</label>
                  <input
                    {...register('subject')}
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </motion.div>

                <motion.div initial={{ y: 30 }} whileInView={{ y: 0 }}>
                  <label className="block text-white/80 mb-2">Your Message</label>
                  <textarea
                    {...register('message')}
                    rows="5"
                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-400/50 transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-medium text-white hover:shadow-purple-500/20 transition-all"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;