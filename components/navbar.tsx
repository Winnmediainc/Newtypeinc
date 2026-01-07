"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitch } from "@/components/language-switch"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="/images/eb-89-b4-ed-83-80-ec-9e-85-ec-9d-b8-eb-8d-94-ec-8a-a4-ed-8a-b8-eb-a6-ac.png"
              alt="Newtype Industries"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              <a
                href="#vision"
                className="font-geist text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                {t("nav.vision")}
              </a>
              <a
                href="#forum"
                className="font-geist text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                {t("nav.forum")}
              </a>
              <a
                href="#technology"
                className="font-geist text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                {t("nav.technology")}
              </a>
              <a
                href="#history"
                className="font-geist text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                {t("nav.history")}
              </a>
              <a
                href="#leadership"
                className="font-geist text-sm uppercase tracking-wide text-white hover:text-primary transition-colors duration-200"
              >
                {t("nav.leadership")}
              </a>
            </div>
            <LanguageSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-primary/20">
              <a
                href="#vision"
                className="block px-3 py-2 font-geist text-sm uppercase text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.vision")}
              </a>
              <a
                href="#forum"
                className="block px-3 py-2 font-geist text-sm uppercase text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.forum")}
              </a>
              <a
                href="#technology"
                className="block px-3 py-2 font-geist text-sm uppercase text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.technology")}
              </a>
              <a
                href="#history"
                className="block px-3 py-2 font-geist text-sm uppercase text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.history")}
              </a>
              <a
                href="#leadership"
                className="block px-3 py-2 font-geist text-sm uppercase text-white hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.leadership")}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
