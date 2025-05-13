// components/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';


const Contact = () => {
const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState('idle');

  const onSubmit = async (data) => {
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Network response not ok');
      setStatus('success');
      reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-purple-900/20 to-dark-primary">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
              <input
                {...register('name', { required: true })}
                placeholder="Your Name"
                className="w-full p-4 rounded-lg bg-dark-primary/30 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </motion.div>

            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="hello@example.com"
                className="w-full p-4 rounded-lg bg-dark-primary/30 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </motion.div>

            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}>
              <textarea
                {...register('message', { required: true })}
                rows={5}
                placeholder="Your Message..."
                className="w-full p-4 rounded-lg bg-dark-primary/30 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-xl transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </motion.div>

            {/* Feedback messages */}
            {status === 'success' && (
              <p className="text-center text-green-400 mt-4">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 mt-4">
                Oops! Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
