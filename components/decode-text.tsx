"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface DecodeTextProps {
  text: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function DecodeText({ text, className = "", delay = 0, as: Component = "span" }: DecodeTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayText, setDisplayText] = useState(
    text
      .split("")
      .map(() => " ")
      .join(""),
  )
  const [isComplete, setIsComplete] = useState(false)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      let iteration = 0
      const maxIterations = text.length * 3

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " "
              if (index < iteration / 3) return text[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        iteration++

        if (iteration > maxIterations) {
          setDisplayText(text)
          setIsComplete(true)
          clearInterval(interval)
        }
      }, 30)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isInView, text, delay])

  return (
    <Component ref={ref} className={`font-mono ${className}`}>
      {displayText}
    </Component>
  )
}
