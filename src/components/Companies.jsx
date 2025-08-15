import React from 'react'
import amazon from '../assets/amazon-1-1747824006.webp'
import accenture from '../assets/accenture-1-1747832722.webp'
import phonepe from '../assets/phone-pe-1747823639.webp'
import spinny from '../assets/spinny-1747824317.webp'
import warwickshire from '../assets/warwickshire-1747828957.webp'
import firstquant from '../assets/firstquant-1747828862.webp'
import langbase from '../assets/langbase-1747828933.webp'
import jsonify from '../assets/jsonify-2-1747832709.webp'
import { motion } from 'framer-motion'

export default function Companies() {
  const MotionDiv = motion.div
  const logos = [amazon, accenture, phonepe, spinny, warwickshire, firstquant, langbase, jsonify]
  return (
    <section id="companies" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Our learners work at</h2>
        <MotionDiv
          className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {logos.map((src, i) => (
            <MotionDiv
              key={i}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="h-24 sm:h-28 md:h-32 rounded border bg-white grid place-items-center p-4"
            >
              <img src={src} alt="Company logo" className="w-auto object-contain max-h-16 sm:max-h-20 md:max-h-24" loading="lazy" decoding="async" />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
