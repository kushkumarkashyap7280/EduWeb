import React from 'react'
import WhyUs from '../components/WhyUs.jsx'
import { motion } from 'framer-motion'

export default function WhyUsPage() {
  const MotionDiv = motion.div
  return (
    <div className="py-8">
      <MotionDiv
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold">Why Us</h1>
      </MotionDiv>
      <WhyUs />
    </div>
  )
}
