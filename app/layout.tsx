import type React from "react"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from "next"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NEWTYPE INDUSTRIES",
  description: "A New Type of Operation is Inevitable.",
  openGraph: {
    title: "NEWTYPE INDUSTRIES",
    description: "A New Type of Operation is Inevitable.",
    images: [
      {
        url: "/images/newtype-logo.png",
        width: 1200,
        height: 630,
        alt: "NEWTYPE INDUSTRIES",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEWTYPE INDUSTRIES",
    description: "A New Type of Operation is Inevitable.",
    images: ["/images/newtype-logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="bg-[#000000] text-white font-mono">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
