import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CoursesPage from './pages/Courses.jsx'
import WhyUsPage from './pages/WhyUs.jsx'
import ReviewsPage from './pages/Reviews.jsx'
import CompaniesPage from './pages/Companies.jsx'
import OutcomesPage from './pages/Outcomes.jsx'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const location = useLocation()
  const MotionDiv = motion.div
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Persistent layout */}
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <MotionDiv
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/outcomes" element={<OutcomesPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/companies" element={<CompaniesPage />} />
            </Routes>
          </MotionDiv>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
