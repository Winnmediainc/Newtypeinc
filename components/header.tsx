"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/20">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/eb-89-b4-ed-83-80-ec-9e-85.png"
            alt="NEWTYPE INDUSTRIES"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("ceo")}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            CEO MESSAGE
          </button>
          <button
            onClick={() => scrollToSection("philosophy")}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            PHILOSOPHY
          </button>
          <button
            onClick={() => scrollToSection("barbara")}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            PROJECT BARBARA
          </button>
          <button
            onClick={() => scrollToSection("history")}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            MISSION LOG
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-cyan-400 hover:text-cyan-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-cyan-500/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("ceo")}
              className="text-left text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2"
            >
              CEO MESSAGE
            </button>
            <button
              onClick={() => scrollToSection("philosophy")}
              className="text-left text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2"
            >
              PHILOSOPHY
            </button>
            <button
              onClick={() => scrollToSection("barbara")}
              className="text-left text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2"
            >
              PROJECT BARBARA
            </button>
            <button
              onClick={() => scrollToSection("history")}
              className="text-left text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2"
            >
              MISSION LOG
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-2"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
