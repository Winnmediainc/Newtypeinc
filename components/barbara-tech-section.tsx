"use client"

import { Card } from "@/components/ui/card"
import { Brain, Zap, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function BarbaraTechSection() {
  const { t } = useLanguage()

  const features = [
    { icon: Brain, title: t("barbara.feature1.title"), description: t("barbara.feature1.desc") },
    { icon: Zap, title: t("barbara.feature2.title"), description: t("barbara.feature2.desc") },
    { icon: Shield, title: t("barbara.feature3.title"), description: t("barbara.feature3.desc") },
  ]

  return (
    <section id="technology" className="relative py-24 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-primary/50 bg-primary/10">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">{t("barbara.badge")}</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {t("barbara.title")}
          </h2>
          <div className="font-rajdhani font-bold text-5xl md:text-6xl text-primary mb-6">{t("barbara.name")}</div>
          <p className="font-geist text-xl text-gray-300 max-w-3xl mx-auto text-balance whitespace-pre-line">
            {t("barbara.subtitle")}
          </p>
        </div>

        {/* Hero Image - Full Width */}
        <div className="mb-12 relative">
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg border-4 border-primary shadow-[0_0_60px_rgba(200,200,210,0.3)]">
            <img
              src="/images/make-20the-20king-20king-20again-20-ef-bd-9c-20sullivan-20fhd-201-58-20screenshot.png"
              alt="BARBARA AI Fire Support System - Tactical Command Interface"
              className="w-full h-full object-cover"
            />
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-white" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-white" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-white" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-white" />
          </div>
          {/* System Label */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black border-2 border-primary px-6 py-2">
            <span className="font-rajdhani font-bold text-xl text-primary tracking-wider">{t("barbara.label")}</span>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-12">
          <div className="hud-border p-4 bg-black/80 text-center">
            <div className="font-mono text-primary font-bold text-3xl">99.8%</div>
            <div className="font-geist text-gray-400 uppercase text-xs mt-1">{t("barbara.stat1")}</div>
          </div>
          <div className="hud-border p-4 bg-black/80 text-center">
            <div className="font-mono text-primary font-bold text-3xl">&lt;2s</div>
            <div className="font-geist text-gray-400 uppercase text-xs mt-1">{t("barbara.stat2")}</div>
          </div>
          <div className="hud-border p-4 bg-black/80 text-center">
            <div className="font-mono text-primary font-bold text-3xl">24/7</div>
            <div className="font-geist text-gray-400 uppercase text-xs mt-1">{t("barbara.stat3")}</div>
          </div>
          <div className="hud-border p-4 bg-black/80 text-center">
            <div className="font-mono text-primary font-bold text-3xl">97.3%</div>
            <div className="font-geist text-gray-400 uppercase text-xs mt-1">{t("barbara.stat4")}</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hud-border bg-card/50 backdrop-blur-sm p-6 hover:bg-card/70 transition-all group"
            >
              <div className="mb-4 relative">
                <div className="w-16 h-16 border-2 border-primary/50 group-hover:border-primary flex items-center justify-center transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary" />
              </div>
              <div className="font-mono text-primary text-xs mb-2">[FEATURE-0{index + 1}]</div>
              <h3 className="font-rajdhani font-bold text-xl text-white mb-3">{feature.title}</h3>
              <p className="font-geist text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
