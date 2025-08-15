import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/professional-programmer-working-late-dark-office-2-1747212900.webp'
import { motion } from 'framer-motion'
import { FiBookOpen, FiInfo } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Get the career you deserve, faster
            </h1>
            <p className="mt-5 text-lg text-neutral-300 max-w-xl">
              Outcome-focused upskilling with MAANG-level mentors and the fastest 1-on-1 doubt resolution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="inline-flex items-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-700 rounded font-medium transition-colors">
                <FiBookOpen className="h-5 w-5" /> Explore Courses
              </Link>
              <Link to="/why-us" className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 rounded font-medium transition-colors">
                <FiInfo className="h-5 w-5" /> Why EduWeb
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <motion.img
              src={heroImg}
              alt="Learner coding at a workstation"
              className="w-full h-[260px] sm:h-[320px] lg:h-[440px] object-cover"
              loading="eager"
              decoding="async"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
