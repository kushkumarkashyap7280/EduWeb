import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-orange-500 rounded" aria-hidden />
            <span className="font-semibold">EduWeb</span>
          </div>
          <p className="mt-3 text-neutral-600">Outcome-focused learning platform.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:col-span-2">
          <nav className="space-y-2">
            <div className="font-semibold">Company</div>
            <a className="hover:text-orange-600" href="#">About</a>
            <a className="hover:text-orange-600" href="#">Careers</a>
            <a className="hover:text-orange-600" href="#">Contact</a>
          </nav>
          <nav className="space-y-2">
            <div className="font-semibold">Resources</div>
            <a className="hover:text-orange-600" href="#">Blog</a>
            <a className="hover:text-orange-600" href="#">Help Center</a>
            <a className="hover:text-orange-600" href="#">Privacy</a>
          </nav>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 mt-8">© {new Date().getFullYear()} EduWeb. All rights reserved.</div>
    </footer>
  )
}
