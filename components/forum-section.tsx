"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ForumSection() {
  const { t } = useLanguage()

  const agendas = [t("forum.agenda1"), t("forum.agenda2"), t("forum.agenda3"), t("forum.agenda4")]

  return (
    <section id="forum" className="relative py-24 bg-black digital-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-primary/50 bg-primary/10">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">{t("forum.badge")}</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {t("forum.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Event Overview */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Key Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-rajdhani font-bold text-3xl text-white mb-4 text-balance">{t("forum.subtitle")}</h3>
              <p className="font-geist text-gray-300 leading-relaxed text-lg text-pretty whitespace-pre-line">
                {t("forum.description")}
              </p>
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 hud-border p-4 bg-card/50 backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-rajdhani font-bold text-white text-lg">{t("forum.date")}</div>
                  <div className="font-mono text-primary text-sm">{t("forum.time")}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 hud-border p-4 bg-card/50 backdrop-blur-sm">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-rajdhani font-bold text-white text-lg">{t("forum.venue")}</div>
                  <div className="font-geist text-gray-400 text-sm">{t("forum.location")}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 hud-border p-4 bg-card/50 backdrop-blur-sm">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-rajdhani font-bold text-white text-lg">{t("forum.host")}</div>
                  <div className="font-geist text-gray-400 text-sm">{t("forum.hostName")}</div>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto scan-line bg-primary hover:bg-primary/90 text-black font-rajdhani font-bold text-lg uppercase tracking-wider py-6 px-12 border-2 border-primary hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]"
            >
              <a href="https://www.defendersforum.co.kr/" target="_blank" rel="noopener noreferrer">
                {t("forum.apply")}
              </a>
            </Button>
          </div>

          {/* Right: Key Agenda */}
          <div className="relative hud-corner">
            <div className="h-full bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/30 p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="font-rajdhani font-bold text-2xl text-white">{t("forum.agenda")}</h3>
              </div>

              <div className="space-y-6">
                {agendas.map((agenda, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 border-2 border-primary/50 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="font-mono text-primary font-bold">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="font-geist text-gray-200 text-lg leading-relaxed pt-2 whitespace-pre-line">
                      {agenda}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
