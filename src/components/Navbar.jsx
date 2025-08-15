import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="EduWeb logo"
              className="h-10 w-10 rounded object-cover"
              loading="eager"
              decoding="async"
            />
            <span className="font-semibold text-lg">EduWeb</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="hover:text-orange-600" to="/why-us">Why Us</Link>
          <Link className="hover:text-orange-600" to="/courses">Courses</Link>
          <Link className="hover:text-orange-600" to="/outcomes">Outcomes</Link>
          <Link className="hover:text-orange-600" to="/reviews">Reviews</Link>
          <Link className="hover:text-orange-600" to="/companies">Companies</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium border rounded hover:bg-gray-50">Log in</button>
          <button className="px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded hover:bg-orange-700">Enroll</button>
        </div>
      </div>
    </header>
  )
}
