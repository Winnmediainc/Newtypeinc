"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const row1Images = ["/images/dsc04396.jpeg", "/images/dsc04306.jpeg", "/images/dsc04698.jpeg", "/images/dsc04614.jpeg"]

const row2Images = ["/images/dsc04114.jpeg", "/images/dsc04285.jpeg", "/images/dsc04726.jpeg", "/images/dsc03902.jpeg"]

const duplicatedRow1 = [...row1Images, ...row1Images, ...row1Images]
const duplicatedRow2 = [...row2Images, ...row2Images, ...row2Images]

export function HighlightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 overflow-hidden">
      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
        <p className="font-mono text-[#888888] text-xs tracking-[0.3em] uppercase mb-12 px-8 md:px-16">HIGHLIGHTS</p>

        <div className="relative w-full mb-4">
          <div className="flex animate-marquee-ltr">
            {duplicatedRow1.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 w-[300px] md:w-[400px] lg:w-[500px] aspect-video relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Highlight ${(index % row1Images.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="flex animate-marquee-rtl">
            {duplicatedRow2.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 w-[300px] md:w-[400px] lg:w-[500px] aspect-video relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Highlight ${(index % row2Images.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
