"use client"
import { ScrollOpacity } from "@/components/scroll-opacity"
import { DecodeText } from "@/components/decode-text"

export function MissionSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: `url('/images/jo-background.jpg')`,
            opacity: 0.6,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/60 to-[#000000]/70" />
      </div>

      <ScrollOpacity startOpacity={0.3} endOpacity={1} className="max-w-6xl relative z-10">
        <p className="font-mono text-[#6B7280] text-3xl md:text-4xl tracking-[0.3em] uppercase mb-12 text-center">
          PRODUCT DEVELOPMENT PHILOSOPHY
        </p>

        <div className="space-y-16">
          {/* 1) Combatant-Centered */}
          <div className="border-l-2 border-[#00FFFF] pl-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
              <DecodeText text="1) COMBATANT-CENTERED" delay={0} />
            </h3>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              We develop tangible solutions that save the lives of actual combatants and maximize combat efficiency.
              <br />
              We reject easy, conceptual, and clichéd solutions that anyone can talk about.
            </p>
          </div>

          {/* 2) Leading Doctrine Development */}
          <div className="border-l-2 border-[#00FFFF] pl-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
              <DecodeText text="2) LEADING DOCTRINE DEVELOPMENT" delay={200} />
            </h3>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              We are not satisfied with developing according to established doctrines and rules.
              <br />
              We develop products that lead the evolution of the doctrines our customers currently hold.
            </p>
          </div>

          {/* 3) Continuous Iteration */}
          <div className="border-l-2 border-[#00FFFF] pl-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
              <DecodeText text="3) CONTINUOUS ITERATION" delay={400} />
            </h3>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              The battlefield is constantly changing. Adopting Newtype's solutions is like having Newtype's excellent
              development personnel as your combatants.
              <br />
              Newtype continuously evolves its products and helps customers avoid becoming 'Terrible Customers'.
            </p>
          </div>
        </div>
      </ScrollOpacity>
    </section>
  )
}
