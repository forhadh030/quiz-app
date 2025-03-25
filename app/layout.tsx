import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trivia Quiz App",
  description: "Test your knowledge with questions from the Open Trivia Database",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f8fafc]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}



import './globals.css'