"use client"

import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
  onComplete?: () => void
}

export function TypewriterText({ text, className = "", delay = 0, speed = 50, onComplete }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDecoding, setIsDecoding] = useState(true)
  const [started, setStarted] = useState(false)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!started) return

    let currentIndex = 0
    let decodeIterations = 0
    const maxDecodeIterations = 3

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        // Decode effect: show random chars before revealing actual char
        if (decodeIterations < maxDecodeIterations && currentIndex < text.length) {
          const randomChar = chars[Math.floor(Math.random() * chars.length)]
          setDisplayText(
            text.substring(0, currentIndex) +
              randomChar +
              text
                .substring(currentIndex + 2)
                .split("")
                .map(() => chars[Math.floor(Math.random() * chars.length)])
                .join("")
                .substring(0, 3),
          )
          decodeIterations++
        } else {
          setDisplayText(text.substring(0, currentIndex + 1))
          currentIndex++
          decodeIterations = 0
        }
      } else {
        setIsDecoding(false)
        clearInterval(interval)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [started, text, speed, onComplete])

  return (
    <span className={`${className} ${isDecoding ? "opacity-90" : "opacity-100"}`}>
      {displayText}
      {isDecoding && started && <span className="animate-pulse">_</span>}
    </span>
  )
}
