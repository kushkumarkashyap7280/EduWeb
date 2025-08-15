import React from 'react'
import Hero from '../components/Hero.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Courses from '../components/Courses.jsx'
import Stats from '../components/Stats.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Companies from '../components/Companies.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Courses />
      <Stats />
      <Testimonials />
      <Companies />
      <CTA />
    </>
  )
}
