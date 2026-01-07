"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function LeadershipSection() {
  const { t, language } = useLanguage()

  return (
    <section id="leadership" className="relative py-24 bg-gradient-to-b from-card to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-primary/50 bg-primary/10">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">{t("leadership.badge")}</span>
          </div>
          <h2 className="font-rajdhani font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            {t("leadership.title")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* CEO Section */}
        <Card className="hud-corner bg-card/50 backdrop-blur-sm border-2 border-primary/30 overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
            {/* Left: CEO Photo */}
            <div className="md:col-span-2">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent border-2 border-primary/50 relative overflow-hidden">
                <img
                  src="/images/ec-a1-b0-ec-84-b1-ec-9b-90.jpg"
                  alt={t("leadership.ceoNameKo")}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Digital Grid Overlay */}
                <div className="absolute inset-0 digital-grid opacity-20" />
              </div>
              <div className="mt-6 text-center">
                <div className="font-rajdhani font-bold text-2xl text-white mb-1">{t("leadership.ceoNameKo")}</div>
                <div className="font-geist text-primary mb-2">{t("leadership.ceoName")}</div>
                <div className="font-mono text-xs uppercase tracking-wider text-gray-400">
                  {t("leadership.ceoTitleKo")} / {t("leadership.ceoTitle")}
                </div>
              </div>
            </div>

            {/* Right: Message */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <div className="mb-6">
                <div className="w-12 h-1 bg-primary mb-4" />
                <h3 className="font-rajdhani font-bold text-2xl text-white mb-4 text-balance">
                  {t("leadership.mission")}
                </h3>
              </div>

              <blockquote className="space-y-6 font-geist text-gray-300 leading-relaxed">
                <p className="text-lg">"{t("leadership.quote1")}"</p>
                <p className="text-pretty">
                  {t("leadership.message1")}
                  <br className="hidden md:block" />
                  {t("leadership.message2")}
                  <br className="hidden md:block" />
                  {t("leadership.message3")}
                </p>
                <p className="text-pretty">
                  {t("leadership.message4")}
                  <br className="hidden md:block" />
                  {t("leadership.message5")}
                  <br className="hidden md:block" />
                  {t("leadership.message6")}
                </p>
              </blockquote>

              <div className="mt-8 pt-6 border-t border-primary/30">
                <div className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  {t("leadership.signature")}
                </div>
                <div className="font-rajdhani text-primary text-xl mt-2">
                  {t("leadership.ceoNameKo")} / {t("leadership.ceoName")}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
