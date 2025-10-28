"use client"
import { ChevronDown } from "lucide-react"

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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-sm tracking-widest text-teal-400 uppercase">A Hiking Guide</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Be Prepared For The Mountains And Beyond!
            </h1>
            <p className="text-sm text-gray-300">scroll down</p>
          </div>

          {/* Right side decorative element */}
          <div className="hidden md:flex items-center justify-end">
            <div className="text-right space-y-4">
              <div className="text-sm text-gray-400">Start</div>
              <ChevronDown className="ml-auto animate-bounce" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 md:left-auto md:right-6 flex flex-col items-center gap-2 text-gray-400">
        <div className="text-xs uppercase tracking-widest">scroll</div>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  )
}
