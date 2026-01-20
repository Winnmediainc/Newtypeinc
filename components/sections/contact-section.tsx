"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const [copied, setCopied] = useState(false)
  const email = "Daehwa.yoon@newtypeinds.co.kr"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex flex-col justify-center items-center px-8 py-32 text-center relative"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.02)_50%)] bg-[length:100%_4px]" />
      </div>

      <motion.div
        className="max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      >
        <p className="font-mono text-[#6B7280] text-2xl md:text-3xl tracking-[0.3em] uppercase mb-12">
          TRANSMISSION CHANNEL
        </p>

        <div className="border border-[#00FFFF]/30 p-8 mb-8 text-center max-w-xl mx-auto relative">
          <div className="font-mono text-xs text-[#6B7280] mb-4 uppercase">Contact Email</div>
          <button
            onClick={handleCopyEmail}
            className="font-mono text-lg md:text-xl text-[#00FFFF] hover:text-white transition-colors cursor-pointer group"
          >
            {email}
            <span className="ml-3 text-xs text-[#6B7280] group-hover:text-[#00FFFF] transition-colors">
              {copied ? "[ COPIED ]" : "[ CLICK TO COPY ]"}
            </span>
          </button>
        </div>

        <div className="mt-16 font-mono text-[#6B7280] text-xs space-y-1">
          <p className="text-white/60">NEWTYPE INDUSTRIES</p>
          <p>SEOUL / VIRGINIA</p>
          <p className="text-[#00FFFF]/60">© 2025</p>
        </div>
      </motion.div>
    </section>
  )
}
