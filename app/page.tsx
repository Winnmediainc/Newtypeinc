import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { CEOSection } from "@/components/sections/ceo-section"
import { MissionSection } from "@/components/sections/mission-section"
import { HistorySection } from "@/components/sections/history-section"
import { BarbaraSection } from "@/components/sections/barbara-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000000]">
        <HeroSection />
        <div id="ceo">
          <CEOSection />
        </div>
        <div id="philosophy">
          <MissionSection />
        </div>
        <div id="barbara">
          <BarbaraSection />
        </div>
        <div id="history">
          <HistorySection />
        </div>
        <HighlightsSection />
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  )
}
