"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function BarbaraSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [hudData, setHudData] = useState({
    altitude: 2450,
    speed: 145,
    heading: 275,
    lat: "37.5665",
    lng: "126.9780",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setHudData((prev) => ({
        altitude: prev.altitude + Math.floor(Math.random() * 20 - 10),
        speed: Math.max(100, Math.min(200, prev.speed + Math.floor(Math.random() * 10 - 5))),
        heading: (prev.heading + Math.floor(Math.random() * 3 - 1) + 360) % 360,
        lat: (37.5665 + Math.random() * 0.001).toFixed(4),
        lng: (126.978 + Math.random() * 0.001).toFixed(4),
      }))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: `url('/images/gemini-generated-image-1owtax1owtax1owt.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-[#000000]/75" />

      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left - Altitude & Speed */}
        <div className="absolute top-8 left-8 font-mono text-[10px] text-[#00FFFF] space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[#6B7280]">ALT:</span>
            <span>{hudData.altitude}m</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#6B7280]">SPD:</span>
            <span>{hudData.speed}km/h</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#6B7280]">HDG:</span>
            <span>{hudData.heading}°</span>
          </div>
        </div>

        {/* Top Right - Coordinates */}
        <div className="absolute top-8 right-8 font-mono text-[10px] text-[#00FFFF] text-right space-y-1">
          <div>LAT: {hudData.lat}°N</div>
          <div>LNG: {hudData.lng}°E</div>
          <div className="text-[#6B7280]">DATUM: WGS84</div>
        </div>

        {/* Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 relative">
            <div className="absolute top-1/2 left-0 w-10 h-[1px] bg-[#00FFFF]/50" />
            <div className="absolute top-1/2 right-0 w-10 h-[1px] bg-[#00FFFF]/50" />
            <div className="absolute left-1/2 top-0 w-[1px] h-10 bg-[#00FFFF]/50" />
            <div className="absolute left-1/2 bottom-0 w-[1px] h-10 bg-[#00FFFF]/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-[#00FFFF]/50 rounded-full" />
          </div>
        </div>

        {/* Bottom Left - System Status */}
        <div className="absolute bottom-8 left-8 font-mono text-[10px] space-y-1">
          <div className="text-[#00FFFF]">SYSTEM: BARBARA v2.1</div>
          <div className="text-[#6B7280]">MODE: SURVEILLANCE</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#00FFFF] rounded-full animate-pulse" />
            <span className="text-[#00FFFF]">LINK ACTIVE</span>
          </div>
        </div>

        {/* Bottom Right - Recording */}
        <div className="absolute bottom-8 right-8 font-mono text-[10px] text-right">
          <div className="flex items-center justify-end gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500">REC</span>
          </div>
          <div className="text-[#6B7280]">00:14:32:07</div>
        </div>

        {/* Corner Frame */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l border-t border-[#00FFFF]/30" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r border-t border-[#00FFFF]/30" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-[#00FFFF]/30" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-[#00FFFF]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <p className="font-mono text-[#00FFFF] text-xs tracking-[0.3em] uppercase mb-4">CLASSIFIED</p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-12 uppercase tracking-tight">
            PROJECT:
            <br />
            BARBARA
          </h2>

          <div className="space-y-6 font-mono text-sm md:text-base">
            <div className="flex gap-4">
              <span className="text-[#6B7280] w-24">STATUS:</span>
              <p className="text-[#00FFFF]">ACTIVE DEVELOPMENT</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
