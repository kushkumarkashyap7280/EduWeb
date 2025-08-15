import React from 'react'
import dsImg from '../assets/python-1727278094.webp'
import webImg from '../assets/space-gray-from-figma-1733395549.webp'
import dsmlImg from '../assets/power-bi-1727278093.webp'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Courses() {
  const MotionDiv = motion.div
  const MotionArticle = motion.article
  const courses = [
    { name: 'Data Structures & Algorithms', level: 'Beginner to Advanced', img: dsImg },
    { name: 'Full Stack Web Development', level: 'Beginner to Advanced', img: webImg },
    { name: 'Data Science & ML', level: 'Beginner to Advanced', img: dsmlImg },
  ]
  return (
    <section id="courses" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Popular Courses</h2>
        <MotionDiv
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {courses.map((c) => (
            <MotionArticle
              key={c.name}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className="rounded-xl border bg-white p-6 hover:shadow-lg"
            >
              <div className="aspect-video rounded overflow-hidden bg-neutral-100">
                <img src={c.img} alt={`${c.name} thumbnail`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
              <h3 className="mt-4 font-semibold">{c.name}</h3>
              <p className="text-sm text-neutral-600">{c.level}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-orange-600 font-medium group">
                Learn more <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </MotionArticle>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
