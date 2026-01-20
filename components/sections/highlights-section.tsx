"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useCallback, useEffect } from "react"

const row1Images = [
  "/images/dsc04396.jpeg",
  "/images/dsc04306.jpeg",
  "/images/dsc04698.jpeg",
  "/images/dsc04614.jpeg",
  "/images/kakaotalk-20260120-172434897-02.jpg",
  "/images/kakaotalk-20260120-172434897.jpg",
]

const row2Images = [
  "/images/dsc04114.jpeg",
  "/images/dsc04285.jpeg",
  "/images/dsc04726.jpeg",
  "/images/dsc03902.jpeg",
  "/images/kakaotalk-20260120-172434897-03.png",
  "/images/kakaotalk-20260120-172434897-04.jpg",
  "/images/kakaotalk-20260120-172434897-01.jpg",
]

const duplicatedRow1 = [...row1Images, ...row1Images, ...row1Images, ...row1Images]
const duplicatedRow2 = [...row2Images, ...row2Images, ...row2Images, ...row2Images]

function useDragScrollWithAutoScroll(direction: 'ltr' | 'rtl' = 'ltr') {
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  // Auto scroll effect
  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const speed = direction === 'ltr' ? 0.5 : -0.5
    
    const animate = () => {
      if (!isDragging && !isPaused && container) {
        container.scrollLeft += speed
        
        // Reset scroll position for infinite loop
        const maxScroll = container.scrollWidth / 2
        if (direction === 'ltr' && container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0
        } else if (direction === 'rtl' && container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll
        }
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDragging, isPaused, direction])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
    containerRef.current.style.cursor = "grabbing"
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab"
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false)
    setIsPaused(false)
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab"
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  return {
    containerRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
    handleMouseMove,
    isDragging,
  }
}

export function HighlightsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const row1Drag = useDragScrollWithAutoScroll('ltr')
  const row2Drag = useDragScrollWithAutoScroll('rtl')

  return (
    <section ref={ref} className="py-32 overflow-hidden">
      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1 }}>
        <p className="font-mono text-[#888888] text-xs tracking-[0.3em] uppercase mb-12 px-8 md:px-16">HIGHLIGHTS</p>

        <div 
          ref={row1Drag.containerRef}
          className="relative w-full mb-4 overflow-x-auto scrollbar-hide cursor-grab select-none"
          onMouseDown={row1Drag.handleMouseDown}
          onMouseUp={row1Drag.handleMouseUp}
          onMouseLeave={row1Drag.handleMouseLeave}
          onMouseEnter={row1Drag.handleMouseEnter}
          onMouseMove={row1Drag.handleMouseMove}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex">
            {duplicatedRow1.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 w-[300px] md:w-[400px] lg:w-[500px] aspect-video relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Highlight ${(index % row1Images.length) + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div 
          ref={row2Drag.containerRef}
          className="relative w-full overflow-x-auto scrollbar-hide cursor-grab select-none"
          onMouseDown={row2Drag.handleMouseDown}
          onMouseUp={row2Drag.handleMouseUp}
          onMouseLeave={row2Drag.handleMouseLeave}
          onMouseEnter={row2Drag.handleMouseEnter}
          onMouseMove={row2Drag.handleMouseMove}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex">
            {duplicatedRow2.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-2 w-[300px] md:w-[400px] lg:w-[500px] aspect-video relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Highlight ${(index % row2Images.length) + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
