"use client"

import { ScrollOpacity } from "@/components/scroll-opacity"
import { DecodeText } from "@/components/decode-text"

export function StrengthsSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-16 md:py-32 relative overflow-hidden bg-black">
      <ScrollOpacity startOpacity={0.3} endOpacity={1} className="max-w-7xl w-full relative z-10">
        <p className="font-mono text-[#6B7280] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8 md:mb-16 text-center">
          THE STRENGTHS OF NEWTYPE
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Boldness */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-4 sm:p-6 md:p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#00FFFF] flex items-center justify-center mb-4 md:mb-6">
              <span className="text-[#00FFFF] font-mono text-base md:text-xl">01</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase text-white">
              <DecodeText text="BOLDNESS" delay={0} />
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#6B7280] leading-relaxed">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00FFFF] mt-1">-</span>
                <span>Proactively and decisively identifying combat requirements to drive immediate product development.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00FFFF] mt-1">-</span>
                <span>We do not wait for long, complex, and conventional R&D cycles.</span>
              </li>
            </ul>
          </div>

          {/* Export-Centric */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-4 sm:p-6 md:p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#00FFFF] flex items-center justify-center mb-4 md:mb-6">
              <span className="text-[#00FFFF] font-mono text-base md:text-xl">01</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase text-white">
              <DecodeText text="EXPORT-CENTRIC" delay={200} />
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#6B7280] leading-relaxed">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00FFFF] mt-1">-</span>
                <span>Engineered for the global market, creating AI-driven weapon system software that meets urgent battlefield demands.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00FFFF] mt-1">-</span>
                <span><strong className="text-white">U.S. Army Field Test:</strong> Selected as the first domestic weapon system software.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#00FFFF] mt-1">-</span>
                <span><strong className="text-white">Combat Proven:</strong> Currently undergoing real-world validation in Ukraine.</span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollOpacity>
    </section>
  )
}
