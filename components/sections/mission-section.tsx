"use client"
import { ScrollOpacity } from "@/components/scroll-opacity"
import { DecodeText } from "@/components/decode-text"

export function MissionSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 py-32 relative overflow-hidden bg-black">
      <ScrollOpacity startOpacity={0.3} endOpacity={1} className="max-w-7xl w-full relative z-10">
        <p className="font-mono text-[#6B7280] text-3xl md:text-4xl tracking-[0.3em] uppercase mb-16 text-center">
          PRODUCT DEVELOPMENT PHILOSOPHY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Combatant-Centered */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-12 h-12 border border-[#00FFFF] flex items-center justify-center mb-6">
              <span className="text-[#00FFFF] font-mono text-xl">01</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase text-white">
              <DecodeText text="COMBATANT-CENTERED" delay={0} />
            </h3>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We develop tangible solutions that save the lives of actual combatants and maximize combat efficiency.
              We reject easy, conceptual, and clichéd solutions that anyone can talk about.
            </p>
          </div>

          {/* Leading Doctrine Development */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-12 h-12 border border-[#00FFFF] flex items-center justify-center mb-6">
              <span className="text-[#00FFFF] font-mono text-xl">02</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase text-white">
              <DecodeText text="LEADING DOCTRINE DEVELOPMENT" delay={200} />
            </h3>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We are not satisfied with developing according to established doctrines and rules.
              We develop products that lead the evolution of the doctrines our customers currently hold.
            </p>
          </div>

          {/* Continuous Iteration */}
          <div className="border border-[#00FFFF]/30 bg-[#00FFFF]/5 p-8 hover:bg-[#00FFFF]/10 transition-all duration-300">
            <div className="w-12 h-12 border border-[#00FFFF] flex items-center justify-center mb-6">
              <span className="text-[#00FFFF] font-mono text-xl">03</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase text-white">
              <DecodeText text="CONTINUOUS ITERATION" delay={400} />
            </h3>
            <p className="text-base text-[#6B7280] leading-relaxed">
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
