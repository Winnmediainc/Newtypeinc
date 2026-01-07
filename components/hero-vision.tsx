"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function HeroVision() {
  const [time, setTime] = useState("")
  const [coordinates, setCoordinates] = useState({ lat: "37.5665", lng: "126.9780" })
  const { t } = useLanguage()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC")
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="vision" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <iframe
          src="https://www.youtube.com/embed/9pgfPgC8BSc?autoplay=1&mute=1&loop=1&playlist=9pgfPgC8BSc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] object-cover scale-110"
          style={{ pointerEvents: "none" }}
          allow="autoplay; encrypted-media"
          title="Defense AI Background"
        />
      </div>

      <div className="absolute inset-0 z-20 digital-grid opacity-10" />

      {/* HUD Elements - Top Left */}
      <div className="absolute top-4 left-4 z-40 hidden md:block">
        <div className="relative">
          <div className="w-32 h-32 border-l-2 border-t-2 border-primary/70" />
          <div className="absolute top-2 left-2 w-24 h-24 border-l border-t border-primary/40" />
          <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/80 space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span>SYS: ONLINE</span>
            </div>
            <div className="text-primary/60">LAT: {coordinates.lat}°N</div>
            <div className="text-primary/60">LNG: {coordinates.lng}°E</div>
          </div>
        </div>
      </div>

      {/* HUD Elements - Top Right */}
      <div className="absolute top-4 right-4 z-40 hidden md:block">
        <div className="relative">
          <div className="w-32 h-32 border-r-2 border-t-2 border-primary/70" />
          <div className="absolute top-2 right-2 w-24 h-24 border-r border-t border-primary/40" />
          <div className="absolute top-4 right-4 font-mono text-[10px] text-primary/80 text-right space-y-1">
            <div className="flex items-center justify-end gap-1">
              <span>LINK: ACTIVE</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="text-primary/60">{time}</div>
            <div className="text-primary/60">FREQ: 2.4GHz</div>
          </div>
        </div>
      </div>

      {/* HUD Elements - Bottom Left */}
      <div className="absolute bottom-20 left-4 z-40 hidden md:block">
        <div className="relative">
          <div className="w-32 h-32 border-l-2 border-b-2 border-primary/70" />
          <div className="absolute bottom-2 left-2 w-24 h-24 border-l border-b border-primary/40" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/80 space-y-1">
            <div className="text-primary/60">TGT: STANDBY</div>
            <div className="text-primary/60">RNG: -- KM</div>
            <div className="flex items-center gap-1">
              <span>CAL: VERIFIED</span>
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* HUD Elements - Bottom Right */}
      <div className="absolute bottom-20 right-4 z-40 hidden md:block">
        <div className="relative">
          <div className="w-32 h-32 border-r-2 border-b-2 border-primary/70" />
          <div className="absolute bottom-2 right-2 w-24 h-24 border-r border-b border-primary/40" />
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/80 text-right space-y-1">
            <div className="text-primary/60">UNIT: BARBARA</div>
            <div className="text-primary/60">MODE: AUTO</div>
            <div className="flex items-center justify-end gap-1">
              <span>PWR: 100%</span>
              <div className="w-8 h-1.5 bg-primary/30 rounded-full overflow-hidden">
                <div className="w-full h-full bg-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Center Bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 hidden lg:flex items-center gap-4">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
        <div className="flex items-center gap-3 px-4 py-2 border border-primary/30 bg-black/40 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs text-primary tracking-widest">TACTICAL OVERVIEW</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Side Indicators - Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-start gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-1 h-4 ${i === 3 ? "bg-primary" : "bg-primary/30"}`} />
            <div className={`w-6 h-[1px] ${i === 3 ? "bg-primary" : "bg-primary/30"}`} />
          </div>
        ))}
      </div>

      {/* Side Indicators - Right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-6 h-[1px] ${i === 3 ? "bg-primary" : "bg-primary/30"}`} />
            <div className={`w-1 h-4 ${i === 3 ? "bg-primary" : "bg-primary/30"}`} />
          </div>
        ))}
      </div>

      {/* Center Reticle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-none opacity-20">
        <div className="relative w-[600px] h-[600px]">
          <div className="absolute inset-0 border border-primary/20 rounded-full" />
          <div className="absolute inset-12 border border-primary/15 rounded-full" />
          <div className="absolute inset-24 border border-primary/10 rounded-full" />
          <div className="absolute top-1/2 left-0 w-16 h-[1px] bg-primary/30" />
          <div className="absolute top-1/2 right-0 w-16 h-[1px] bg-primary/30" />
          <div className="absolute left-1/2 top-0 w-[1px] h-16 bg-primary/30" />
          <div className="absolute left-1/2 bottom-0 w-[1px] h-16 bg-primary/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Mission Ready Indicator */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/50 bg-black/50 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-primary">{t("hero.systemActive")}</span>
        </div>

        <h1 className="font-rajdhani font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none decode-text drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          <span className="text-white">NEWTYPE</span>
          <br />
          <span className="text-primary drop-shadow-[0_0_20px_rgba(192,192,192,0.5)]">INDUSTRIES</span>
        </h1>

        <div className="bg-black/50 backdrop-blur-sm px-6 py-4 rounded-lg mb-12 inline-block border border-primary/30">
          <p className="font-geist text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-pre-line">
            {t("hero.tagline")}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#technology"
            className="scan-line group relative px-8 py-4 bg-primary hover:bg-primary/90 text-black font-rajdhani font-bold text-lg uppercase tracking-wider transition-all duration-300 border-2 border-primary hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]"
          >
            {t("hero.exploreTech")}
          </a>
          <a
            href="#forum"
            className="scan-line group relative px-8 py-4 bg-black/50 backdrop-blur-sm hover:bg-white/20 text-white font-rajdhani font-bold text-lg uppercase tracking-wider transition-all duration-300 border-2 border-white/70 hover:border-primary"
          >
            {t("hero.joinForum")}
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <div className="relative h-16">
          <div className="absolute bottom-8 left-0 right-0 h-[1px] overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_3s_ease-in-out_infinite]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-between px-4 md:px-8">
            <div className="font-mono text-[10px] text-primary/60 hidden sm:block">
              SEC: ENCRYPTED | PROTOCOL: NEWTYPE-7
            </div>
            <div className="font-mono text-[10px] text-primary/60 hidden sm:block">VER: 2.0.1 | BUILD: 2024.11.25</div>
          </div>
        </div>
      </div>
    </section>
  )
}
