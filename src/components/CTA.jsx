import React from 'react'

export default function CTA() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white p-10 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Start your learning journey today</h3>
            <p className="text-white/90 mt-2">Join EduWeb and upskill with the best mentors.</p>
          </div>
          <button className="px-5 py-3 bg-white text-orange-600 rounded font-semibold hover:bg-white/90">Get Started</button>
        </div>
      </div>
    </section>
  )
}
