import React from 'react'

export default function Testimonials() {
  const items = [
    { name: 'Student A', role: 'SWE @ Company', quote: 'Amazing support and structured learning.' },
    { name: 'Student B', role: 'Data Scientist', quote: 'Got my dream job faster!' },
  ]
  return (
    <section id="testimonials" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">What learners say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((t) => (
            <figure key={t.name} className="p-6 rounded-lg border bg-white">
              <blockquote className="text-neutral-800">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-600">{t.name} • {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
