"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const partners = [
  {
    name: "WAR LAB",
    id: "warlab",
    logo: "/images/warlab-logo.png",
    isWhite: true,
  },
  {
    name: "BLUEPOINT",
    id: "bluepoint",
    logo: "/images/bluepoint-logo.png",
    isWhite: false,
  },
  {
    name: "BOOZ ALLEN",
    id: "boozallen",
    logo: "/images/boozallen.png",
    isWhite: false,
  },
]

const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      >
        <p className="font-mono text-[#6B7280] text-xs tracking-[0.3em] uppercase mb-16 text-center px-8">
          /// ALLIED NETWORKS ///
        </p>

        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee-rtl">
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="group flex-shrink-0 mx-12 md:mx-20 relative">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#00FFFF]/20 scale-150" />
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className={`h-12 md:h-16 w-auto object-contain relative z-10 transition-all duration-500 
                    ${partner.isWhite ? "opacity-50 group-hover:opacity-100" : "grayscale invert brightness-200 opacity-50 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
