import React from 'react'

export default function Stats() {
  const stats = [
    { k: '1M+', v: 'Learning hours' },
    { k: '10K+', v: 'Successful careers' },
    { k: '100+', v: 'Hiring partners' },
  ]
  return (
    <section id="stats" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 rounded-xl border bg-white p-8">
          {stats.map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-3xl font-extrabold text-neutral-900">{s.k}</div>
              <div className="text-neutral-600 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
