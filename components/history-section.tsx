"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function HistorySection() {
  const { t } = useLanguage()

  const milestones = [
    {
      year: t("history.event1.date"),
      title: t("history.event1.title"),
      description: t("history.event1.desc"),
      status: "completed",
    },
    {
      year: t("history.event2.date"),
      title: t("history.event2.title"),
      description: t("history.event2.desc"),
      status: "completed",
    },
    {
      year: t("history.event3.date"),
      title: t("history.event3.title"),
      description: t("history.event3.desc"),
      status: "completed",
    },
    {
      year: t("history.event4.date"),
      title: t("history.event4.title"),
      description: t("history.event4.desc"),
      status: "completed",
    },
  ]

  return (
    <section id="history" className="relative py-24 bg-black digital-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-primary/50 bg-primary/10">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">{t("history.badge")}</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight text-balance">
            {t("history.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-black" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="hud-border bg-card/50 backdrop-blur-sm p-6 hover:bg-card/70 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="font-mono text-primary font-bold text-lg">{milestone.year}</div>
                    </div>
                    <h3 className="font-rajdhani font-bold text-xl text-white mb-2">{milestone.title}</h3>
                    <p className="font-geist text-gray-400 text-sm">{milestone.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
