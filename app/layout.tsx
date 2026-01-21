import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Prashik Kadam | AI & ML Enthusiast | Data & Blockchain Developer',
  description: 'Computer Science undergraduate focused on AI, Machine Learning, Data Analytics, and Web3 technologies. Building intelligent, scalable, and impactful solutions.',
  keywords: ['AI', 'Machine Learning', 'Data Analytics', 'Web3', 'Blockchain', 'Computer Science', 'Python', 'Developer'],
  authors: [{ name: 'Prashik Kadam' }],
  openGraph: {
    title: 'Prashik Kadam | AI & ML Enthusiast',
    description: 'Computer Science undergraduate building intelligent solutions with AI, ML, and Web3 technologies.',
    type: 'website',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a0f1c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
