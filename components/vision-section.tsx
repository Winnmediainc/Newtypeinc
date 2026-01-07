"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function VisionSection() {
  const { t } = useLanguage()

  const visions = [
    { title: t("vision.card1.title"), description: t("vision.card1.desc") },
    { title: t("vision.card2.title"), description: t("vision.card2.desc") },
    { title: t("vision.card3.title"), description: t("vision.card3.desc") },
    { title: t("vision.card4.title"), description: t("vision.card4.desc") },
  ]

  return (
    <section className="relative py-24 bg-black digital-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-rajdhani font-bold text-3xl md:text-4xl text-center text-white mb-12 text-balance whitespace-pre-line">
          {t("vision.title")}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((vision, index) => (
            <Card key={index} className="hud-border bg-card/30 backdrop-blur-sm p-6 hover:bg-card/50 transition-colors">
              <div className="font-mono text-primary text-sm mb-3">[0{index + 1}]</div>
              <h4 className="font-rajdhani font-bold text-xl text-white mb-2 text-balance">{vision.title}</h4>
              <p className="font-geist text-gray-400 text-sm">{vision.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
