"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { DecodeText } from "@/components/decode-text"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/JwZA8HAK0k4?autoplay=1&mute=1&loop=1&playlist=JwZA8HAK0k4&controls=0&showinfo=0&modestbranding=1&rel=0"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none aspect-video scale-[1.2]"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Background Video"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/60 via-[#000000]/40 to-[#000000]/80" />
      </div>

      <div className="text-center z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 uppercase">
            <DecodeText text="A NEWTYPE OF" className="steel-text block" delay={300} />
            <DecodeText text="OPERATION IS" className="steel-text block mt-2" delay={600} />
            <DecodeText text="INVEVITABLE." className="steel-text block mt-2" delay={900} />
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          className="font-mono text-[#6B7280] text-xs md:text-sm tracking-[0.3em] uppercase mt-16 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p>CODE: NEWTYPE INDUSTRIES EST. 2025</p>
          <p>COORDINATES: SEOUL / VIRGINIA</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
      </motion.div>
    </section>
  )
}
