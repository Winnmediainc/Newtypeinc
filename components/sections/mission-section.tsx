"use client"
import { ScrollOpacity } from "@/components/scroll-opacity"
import { DecodeText } from "@/components/decode-text"

export function MissionSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-16 md:py-32 relative overflow-hidden bg-black">
      <ScrollOpacity startOpacity={0.3} endOpacity={1} className="max-w-7xl w-full relative z-10">
        <p className="font-mono text-[#6B7280] text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase mb-8 md:mb-16 text-center">
          PRODUCT DEVELOPMENT PHILOSOPHY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Combatant-Centered */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-4 sm:p-6 md:p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#00FFFF] flex items-center justify-center mb-4 md:mb-6">
              <span className="text-[#00FFFF] font-mono text-base md:text-xl">01</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase text-white">
              <DecodeText text="COMBATANT-CENTERED" delay={0} />
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              We develop tangible solutions that save the lives of actual combatants and maximize combat efficiency.
              We reject easy, conceptual, and clichéd solutions that anyone can talk about.
            </p>
          </div>

          {/* Leading Doctrine Development */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-4 sm:p-6 md:p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#00FFFF] flex items-center justify-center mb-4 md:mb-6">
              <span className="text-[#00FFFF] font-mono text-base md:text-xl">02</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase text-white">
              <DecodeText text="LEADING DOCTRINE DEVELOPMENT" delay={200} />
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              We are not satisfied with developing according to established doctrines and rules.
              We develop products that lead the evolution of the doctrines our customers currently hold.
            </p>
          </div>

          {/* Continuous Iteration */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-4 sm:p-6 md:p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 border border-[#00FFFF] flex items-center justify-center mb-4 md:mb-6">
              <span className="text-[#00FFFF] font-mono text-base md:text-xl">03</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 uppercase text-white">
              <DecodeText text="CONTINUOUS ITERATION" delay={400} />
            </h3>
            <p className="text-sm md:text-base text-[#6B7280] leading-relaxed">
              The battlefield is constantly changing. Adopting Newtype's solutions is like having Newtype's excellent
              development personnel as your combatants.
              Newtype continuously evolves its products and helps customers avoid becoming 'Terrible Customers'.
            </p>
          </div>
        </div>
      </ScrollOpacity>
    </section>
  )
}
