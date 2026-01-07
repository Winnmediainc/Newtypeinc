"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const galleryImages = [
  {
    src: "/images/eb-94-94-ed-8e-9c-eb-8d-94-ec-8a-a4-ed-8f-ac-eb-9f-bc-1.jpg",
    alt: "Defenders Forum Seminar",
  },
  {
    src: "/images/eb-94-94-ed-8e-9c-eb-8d-94-ec-8a-a4-ed-8f-ac-eb-9f-bc-2.jpg",
    alt: "Defenders Forum Group Photo",
  },
  {
    src: "/images/eb-94-94-ed-8e-9c-eb-8d-94-ec-8a-a4-ed-8f-ac-eb-9f-bc-3.jpg",
    alt: "Defenders Forum Presentation",
  },
  {
    src: "/images/eb-94-94-ed-8e-9c-eb-8d-94-ec-8a-a4-ed-8f-ac-eb-9f-bc-4.jpg",
    alt: "Defenders Forum Keynote",
  },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(192,192,192,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(192,192,192,0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 mb-6">
            <div className="w-2 h-2 bg-primary animate-pulse" />
            <span className="text-primary text-sm font-mono tracking-wider">{t("gallery.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{t("gallery.title")}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t("gallery.subtitle")}</p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* HUD Frame */}
          <div className="absolute -inset-4 border border-primary/20 pointer-events-none" />
          <div className="absolute -inset-2 border border-primary/10 pointer-events-none" />

          {/* Corner Accents */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />

          {/* Main Image Container */}
          <div className="relative aspect-video overflow-hidden bg-gray-900">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 border border-primary/50 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 border border-primary/50 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 border border-primary/30 font-mono text-sm text-primary">
              {String(currentIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </div>
          </div>

          {/* Thumbnail Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-1 transition-all ${
                  index === currentIndex ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
