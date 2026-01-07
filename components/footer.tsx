"use client"

import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 digital-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Mail size={20} className="text-[#00FFFF]" />
            <a
              href="mailto:joe.cho@newtypeinds.com"
              className="font-mono text-lg text-gray-400 hover:text-[#00FFFF] transition-colors"
            >
              joe.cho@newtypeinds.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
