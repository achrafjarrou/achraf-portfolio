import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Achraf Jarrou — Agentic AI Engineer · Verifiable Systems · EU AI Act',
  description:
    'Agentic AI Engineer building autonomous systems that prove their own reasoning cannot be altered. LangGraph · RAG · MCP · LLMOps. THEMIS: EU AI Act compliance intelligence in production. Based in Casablanca, Morocco.',
  keywords: [
    'Achraf Jarrou',
    'Agentic AI Engineer',
    'LangGraph',
    'EU AI Act Compliance',
    'MCP Protocol',
    'A2A Protocol',
    'LLMOps',
    'RAG Architecture',
    'Verifiable AI Systems',
    'SHA-256 Audit Chains',
    'AI Agent Orchestration',
    'Production AI',
    'Casablanca',
    'Morocco',
  ],
  authors: [{ name: 'Achraf Jarrou', url: 'https://achraf-jarrou.com' }],
  creator: 'Achraf Jarrou',
  publisher: 'Achraf Jarrou',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#0F172A',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://achraf-jarrou.com',
    siteName: 'Achraf Jarrou — Agentic AI Engineer',
    title: 'Achraf Jarrou — Agentic AI Engineer',
    description: 'Autonomous systems that prove their own reasoning cannot be altered. THEMIS: EU AI Act compliance intelligence.',
    images: [
      {
        url: 'https://achraf-jarrou.com/themis-landing.jpg',
        width: 1200,
        height: 800,
        alt: 'THEMIS - EU AI Act Compliance Intelligence',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achraf Jarrou — Agentic AI Engineer',
    description: 'Building autonomous systems that prove their own reasoning cannot be altered.',
    images: ['https://achraf-jarrou.com/themis-landing.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://achraf-jarrou.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="" />
        <link rel="canonical" href="https://achraf-jarrou.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Achraf Jarrou',
              url: 'https://achraf-jarrou.com',
              sameAs: [
                'https://github.com/achrafjarrou',
                'https://www.linkedin.com/in/achraf-jarrou-4394bb342/',
              ],
              jobTitle: 'Agentic AI Engineer',
              description:
                'Building autonomous systems that prove their own reasoning cannot be altered. Specializing in LangGraph, MCP, A2A Protocol, EU AI Act compliance, and verifiable AI systems.',
              image: 'https://achraf-jarrou.com/themis-landing.jpg',
              email: 'achraf.jarrou2002@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MA',
                addressLocality: 'Casablanca',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
