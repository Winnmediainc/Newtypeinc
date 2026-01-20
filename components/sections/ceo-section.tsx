"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { DecodeText } from "@/components/decode-text"

export function CEOSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: `url('/images/dsc04306.jpeg')`,
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/50 to-transparent"
          style={{
            background: "linear-gradient(to right, #000000 0%, #000000cc 30%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 lg:px-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          <p className="font-mono text-[#6B7280] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8">CEO MESSAGE</p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8 uppercase">
            <DecodeText text="THE BATTLEFIELD" delay={0} />
            <br />
            <DecodeText text="DOESN'T WAIT." delay={200} />
            <br />
            <DecodeText text="NEITHER DO WE." delay={400} />
          </h2>

          <p className="text-[#6B7280] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            In the age of AI warfare, hesitation is defeat. We build systems that are mission-ready tonight, not
            someday. This is not innovation for innovation's sake. This is survival.
          </p>

          <p className="font-mono text-white/60 text-sm mt-12 tracking-wider uppercase">Joe Cho / Founder & CEO</p>
        </motion.div>
      </div>
    </section>
  )
}
