"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Melissa kept every trade on schedule across our 3-floor retail fit-out. She flagged cost variances before they became problems — exactly what we needed.",
    name: "Carlos Restrepo",
    role: "Director of Operations, RetailCo",
    image: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=200&auto=format&fit=crop&q=60",
  },
  {
    quote: "Her bilingual communication made a real difference with our subcontractors. Reporting was always clear, timely, and stakeholder-ready.",
    name: "Ana Martínez",
    role: "Senior PM, Constructora Andina",
    image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=200&auto=format&fit=crop&q=60",
  },
  {
    quote: "She handled procurement, site coordination, and client updates simultaneously without dropping a single ball. Rare composure under pressure.",
    name: "James Fowler",
    role: "Project Director, HospitalityBuilds",
    image: "https://plus.unsplash.com/premium_photo-1689977830819-d00b3a9b7363?w=200&auto=format&fit=crop&q=60",
  },
]

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-8">
      {/* Quote */}
      <div className="relative min-h-[100px] mb-12">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-on-surface transition-all duration-500 ease-out ${
              active === i
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 blur-sm pointer-events-none"
            }`}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
        ))}
      </div>

      {/* Author Row */}
      <div className="flex items-center gap-6">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-surface transition-all duration-300 ease-out ${
                active === i ? "z-10 scale-110" : "grayscale hover:grayscale-0 hover:scale-105"
              }`}
            >
              <Image src={t.image} alt={t.name} fill sizes="40px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-structural-line/30" />

        {/* Active Author Info */}
        <div className="relative flex-1 min-h-[44px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-300 ease-out ${
                active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
              }`}
            >
              <span className="text-sm font-medium text-on-surface font-label-bold">{t.name}</span>
              <span className="text-xs text-on-surface-variant">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
