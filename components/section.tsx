"use client"

import Link from "next/link"

interface SectionProps {
  number: string
  title: string
  description: string
  image: string
  imagePosition: "left" | "right"
  link: string
}

export default function Section({ number, title, description, image, imagePosition, link }: SectionProps) {
  const isImageRight = imagePosition === "right"

  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isImageRight ? "" : "md:grid-cols-2"}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${!isImageRight ? "md:order-2" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="text-7xl md:text-8xl font-bold text-slate-700 opacity-50">{number}</span>
              <div className="text-xs uppercase tracking-widest text-teal-400">
                {number === "01" && "Get Started"}
                {number === "02" && "Hiking Essentials"}
                {number === "03" && "Where You Go Is The Key"}
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">{title}</h2>

            <p className="text-gray-300 leading-relaxed text-lg">{description}</p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition text-sm uppercase tracking-widest"
            >
              {link}
              <span>→</span>
            </Link>
          </div>

          {/* Image */}
          <div className={`relative h-96 md:h-full ${!isImageRight ? "md:order-1" : ""}`}>
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
