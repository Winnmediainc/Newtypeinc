import { HeroSection } from "@/components/sections/hero-section"
import { CEOSection } from "@/components/sections/ceo-section"
import { MissionSection } from "@/components/sections/mission-section"
import { HistorySection } from "@/components/sections/history-section"
import { BarbaraSection } from "@/components/sections/barbara-section"
import { HighlightsSection } from "@/components/sections/highlights-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <HeroSection />
      <CEOSection />
      <MissionSection />
      <BarbaraSection />
      <HistorySection />
      <HighlightsSection />
      <ContactSection />
    </main>
  )
}
