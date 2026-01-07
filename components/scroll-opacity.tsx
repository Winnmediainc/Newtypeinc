"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"

interface ScrollOpacityProps {
  children: ReactNode
  className?: string
  startOpacity?: number
  endOpacity?: number
}

export function ScrollOpacity({ children, className = "", startOpacity = 0.3, endOpacity = 1 }: ScrollOpacityProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [opacity, setOpacity] = useState(startOpacity)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2

      // Calculate distance from viewport center
      const distance = Math.abs(elementCenter - viewportCenter)
      const maxDistance = windowHeight / 2

      // Calculate opacity based on distance
      const progress = 1 - Math.min(distance / maxDistance, 1)
      const newOpacity = startOpacity + (endOpacity - startOpacity) * progress

      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [startOpacity, endOpacity])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity,
        transition: "opacity 0.15s cubic-bezier(0.33, 1, 0.68, 1)",
      }}
    >
      {children}
    </div>
  )
}
