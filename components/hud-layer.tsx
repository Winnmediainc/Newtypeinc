"use client"

import { useEffect, useState } from "react"

export function HUDLayer() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [coordinates, setCoordinates] = useState({ lat: "37.5665", lng: "126.9780" })

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Simulate coordinate changes based on scroll
      const latOffset = (progress / 100) * 0.05
      const lngOffset = (progress / 100) * 0.03
      setCoordinates({
        lat: (37.5665 + latOffset).toFixed(4),
        lng: (126.978 + lngOffset).toFixed(4),
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {/* Corner brackets */}
      <div className="hud-corner hud-corner-tl" />
      <div className="hud-corner hud-corner-tr" />
      <div className="hud-corner hud-corner-bl" />
      <div className="hud-corner hud-corner-br" />

      {/* Crosshair cursor */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
          width: 20,
          height: 20,
        }}
      >
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/50" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/50" />
      </div>

      {/* Coordinates display - bottom right */}
      <div className="fixed bottom-6 right-6 z-[9997] font-mono text-[10px] text-[#6B7280] tracking-wider pointer-events-none">
        <div>LAT {coordinates.lat}°N</div>
        <div>LNG {coordinates.lng}°E</div>
      </div>

      {/* Scroll progress bar - right side */}
      <div className="fixed right-0 top-0 w-[2px] h-screen z-[9997] pointer-events-none">
        <div className="w-full bg-white/80 transition-all duration-150" style={{ height: `${scrollProgress}%` }} />
      </div>

      {/* System status - top right */}
      <div className="fixed top-6 right-6 z-[9997] font-mono text-[10px] text-[#6B7280] tracking-wider pointer-events-none">
        <div>SYS_ACTIVE</div>
      </div>
    </>
  )
}
