import type React from "react"
// <CHANGE> Updated metadata for freelance portfolio
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Achraf Jarrou - Full Stack Developer | Freelance on Upwork",
  description:
    "Full Stack Java/Spring Boot & Angular developer. Enterprise-grade applications, secure APIs, and modern architectures. Available for freelance projects on Upwork and Marketplace.",
  keywords: "Full Stack Developer, Java Developer, Spring Boot, Angular, Freelance, Upwork",
  authors: [{ name: "Achraf Jarrou" }],
  openGraph: {
    title: "Achraf Jarrou - Full Stack Developer",
    description: "Building enterprise-grade applications with Java, Spring Boot, and Angular",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
