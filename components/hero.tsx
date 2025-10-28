"use client"
import { ChevronDown, Facebook, Instagram, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2018-nZrKeEcH3eFXrnNkY9DqCgr12jHQ7z.png)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center">
        <div className="grid grid-cols-12 gap-4 w-full items-center">
          <div className="col-span-1 hidden lg:flex flex-col items-center justify-center gap-6 h-full">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition">
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-xs text-gray-400 tracking-widest rotate-90 whitespace-nowrap origin-center mt-8">
              Follow us
            </div>
          </div>

          <div className="col-span-12 lg:col-span-10 space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-teal-400"></div>
              <div className="text-sm tracking-widest text-teal-400 uppercase">A Hiking Guide</div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white text-balance">
              Be Prepared For The Mountains And Beyond!
            </h1>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>scroll down</span>
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="col-span-1 hidden lg:flex flex-col items-center justify-center gap-8 h-full">
            <div className="text-sm text-gray-400 tracking-widest">Start</div>
            <div className="flex flex-col gap-6 text-gray-400 text-sm tracking-widest">
              <div className="hover:text-teal-400 transition cursor-pointer">01</div>
              <div className="hover:text-teal-400 transition cursor-pointer">02</div>
              <div className="hover:text-teal-400 transition cursor-pointer">03</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
