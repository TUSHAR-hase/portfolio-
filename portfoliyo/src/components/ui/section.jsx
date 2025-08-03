'use client'
import { motion } from 'framer-motion'

export default function Section({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`py-20 px-6 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </motion.section>
  )
}