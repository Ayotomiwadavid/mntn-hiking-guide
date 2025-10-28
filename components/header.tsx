"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider">
          MNTN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm hover:text-teal-400 transition">
            Equipment
          </Link>
          <Link href="#" className="text-sm hover:text-teal-400 transition">
            About us
          </Link>
          <Link href="#" className="text-sm hover:text-teal-400 transition">
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm hover:text-teal-400 transition hidden md:block">
            Account
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-slate-800 rounded">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-6 py-4 space-y-3">
          <Link href="#" className="block text-sm hover:text-teal-400 transition">
            Equipment
          </Link>
          <Link href="#" className="block text-sm hover:text-teal-400 transition">
            About us
          </Link>
          <Link href="#" className="block text-sm hover:text-teal-400 transition">
            Blog
          </Link>
          <Link href="#" className="block text-sm hover:text-teal-400 transition">
            Account
          </Link>
        </div>
      )}
    </header>
  )
}
