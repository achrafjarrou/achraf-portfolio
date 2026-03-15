import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Achraf Jarrou | Agentic AI Architect | Self-Correcting AI Systems',
  description:
    'Achraf Jarrou - Agentic AI Architect specializing in self-correcting systems, RAG, LLMOps, and production-grade AI. Building AI that validates itself. Available for international CDI positions.',
  keywords: [
    'Achraf Jarrou',
    'AI Engineer Morocco',
    'Agentic AI Architect',
    'RAG Systems',
    'LLMOps',
    'LangGraph',
    'AI Agent Architecture',
    'Self-Correcting AI',
    'Multi-Agent Systems',
    'Machine Learning Engineer',
    'Production AI Systems',
    'AI Full Stack',
    'Data Sovereignty',
    'Hallucination Reduction',
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
    siteName: 'Achraf Jarrou - Agentic AI Architect',
    title: 'Achraf Jarrou | Agentic AI Architect',
    description: 'Building self-correcting AI systems with validation loops that eliminate hallucinations and drive measurable business impact.',
    images: [
      {
        url: 'https://achraf-jarrou.com/achraf-profile.jpg',
        width: 400,
        height: 500,
        alt: 'Achraf Jarrou - Agentic AI Architect',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achraf Jarrou | Agentic AI Architect',
    description: 'Building self-correcting AI systems with validation loops',
    images: ['https://achraf-jarrou.com/achraf-profile.jpg'],
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
              jobTitle: 'Agentic AI Architect',
              description:
                'Agentic AI Architect specializing in self-correcting systems, RAG, LLMOps, and production-grade AI systems.',
              image: 'https://achraf-jarrou.com/achraf-profile.jpg',
              email: 'achraf.jarrou2002@gmail.com',
              telephone: '+212697838050',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MA',
                addressLocality: 'Rabat',
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
