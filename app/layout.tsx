import type React from "react"
import type { Metadata } from "next"
import { Inter, Spectral, Open_Sans } from "next/font/google"
import "./globals.css"

/* Fonte Spectral – títulos */
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-spectral",
  display: "swap",
})

/* Fonte Open Sans – textos */
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
})

/* Fonte Inter – textos */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Flor de Lis",
  description: "Create with React/Next.js",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spectral.variable} ${openSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
