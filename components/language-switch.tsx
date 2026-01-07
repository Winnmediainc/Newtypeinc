"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ko" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 border border-primary/50 bg-black/50 hover:bg-primary/20 transition-colors duration-200"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="font-mono text-xs uppercase tracking-wider text-primary">{language === "en" ? "KO" : "EN"}</span>
    </button>
  )
}
