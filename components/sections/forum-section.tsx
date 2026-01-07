"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ForumSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="min-h-[70vh] flex flex-col justify-center items-center px-8 py-32 text-center">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <Image
              src="/images/logo-3.png"
              alt="Defenders Forum Logo"
              width={120}
              height={120}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-[#00FFFF]/10 blur-xl rounded-full -z-10" />
          </div>
        </div>

        <p className="font-mono text-[#888888] text-xs tracking-[0.3em] uppercase mb-12">DEFENDERS FORUM</p>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed mb-16">
          "Beyond formal discussion...
          <br />
          <span className="text-[#888888]">capabilities and commitment connected.</span>"
        </h2>

        <motion.a
          href="https://www.defendersforum.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="ghost-button inline-block"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          APPLY
        </motion.a>
      </motion.div>
    </section>
  )
}
