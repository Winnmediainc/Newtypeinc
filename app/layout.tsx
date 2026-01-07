import type React from "react"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { HUDLayer } from "@/components/hud-layer"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <title>NEWTYPE INDUSTRIES</title>
        <meta name="description" content="A New Type of Operation is Inevitable." />
      </head>
      <body className="bg-[#000000] text-white font-mono">
        <LanguageProvider>
          <HUDLayer />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
