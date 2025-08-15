import React from 'react'
import { motion } from 'framer-motion'

export default function WhyUs() {
  const MotionDiv = motion.div
  const iconUrls = [
    'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/layers.svg',
    'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/user-check.svg',
    'https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/message-circle.svg',
  ]
  const items = [
    { title: 'Structured Learning', desc: 'Cohort-based, practice-heavy curriculum designed for outcomes.' },
    { title: 'Top Mentors', desc: 'Guided by experienced engineers from top tech companies.' },
    { title: '1-on-1 Doubt Support', desc: 'Fast and personal doubt resolution to keep you moving.' },
  ]
  return (
    <section id="why-us" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Why EduWeb</h2>
        <p className="mt-2 text-neutral-600">What makes us different</p>
        <MotionDiv
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {items.map((it, idx) => (
            <MotionDiv
              key={it.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.35 }}
              className="p-6 rounded-xl border bg-white hover:shadow-lg"
            >
              <div className="h-14 w-14 rounded-lg bg-orange-100 text-orange-600 grid place-content-center overflow-hidden">
                <img src={iconUrls[idx]} alt="icon" className="h-8 w-8" loading="lazy" decoding="async" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{it.desc}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
