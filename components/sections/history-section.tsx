"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

const timeline = [
  {
    date: "2025.03",
    event: "Development of Voice Recognition A.I.-Based Tactical Fire Command / Target Processing Solution 'Barbara'",
  },
  {
    date: "2025.04",
    event:
      "U.S. Army Artillery School (Oklahoma / Ft.Sill) Fires Symposium 2025 On-Site Demonstration (for Futures Command)",
  },
  {
    date: "2025.05",
    event: "LANPAC 2025 (Pyeongtaek / CP.Humphreys) On-Site Demonstration (for JUSMAG-K, DEVCOM)",
  },
  
  { date: "2025.06", event: "Corporate Establishment" },
  { date: "2025.09", event: "SEED Investment Secured (3 Companies)" },
  { date: "2025.10", event: "Venture Enterprise Certification" },
  { date: "2025.11", event: "US Subsidiary Established (Virginia)" },
]

export function HistorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          className="font-mono text-[#6B7280] text-2xl md:text-3xl tracking-[0.3em] uppercase mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          MISSION LOG
        </motion.p>

        <div className="relative">
          <motion.div
            className="absolute left-[110px] top-[8px] bottom-0 w-[2px] bg-gradient-to-b from-[#00FFFF] via-[#00FFFF]/50 to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            style={{
              transformOrigin: "top",
              boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
            }}
          />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.date}-${index}`}
                className="flex items-start relative cursor-crosshair"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: [0.33, 1, 0.68, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/10 via-[#00FFFF]/5 to-transparent blur-xl" />
                  </motion.div>
                )}

                <span
                  className={`font-mono text-sm w-24 pt-[8px] transition-colors duration-300 ${hoveredIndex === index ? "text-[#00FFFF]" : "text-[#6B7280]"}`}
                >
                  {item.date}
                </span>

                <div className="w-3 h-3 rounded-full mx-8 relative flex-shrink-0 mt-[8px]">
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${hoveredIndex === index ? "bg-[#00FFFF] shadow-[0_0_20px_rgba(0,255,255,1),0_0_40px_rgba(0,255,255,0.5)]" : "bg-white/30 border border-white/20"}`}
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 rounded-full bg-[#00FFFF]/50 animate-ping" />
                  )}
                </div>

                <div className="flex-1">
                  <span
                    className={`text-lg md:text-xl font-light uppercase tracking-wider transition-colors duration-300 leading-relaxed ${hoveredIndex === index ? "text-white" : "text-white/80"}`}
                  >
                    {item.event}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
