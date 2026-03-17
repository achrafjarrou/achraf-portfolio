import { Navigation } from '@/components/navigation';
import { HeroPremium } from '@/components/hero-premium';
import { ThemisShowcase } from '@/components/themis-showcase';
import { TechnicalArsenal } from '@/components/technical-arsenal';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Achraf Jarrou — Agentic AI Engineer · Verifiable Systems · EU AI Act',
  description:
    'Agentic AI Engineer building autonomous systems that prove their own reasoning cannot be altered. LangGraph · RAG · MCP · LLMOps. THEMIS: EU AI Act compliance intelligence. Based in Casablanca, Morocco.',
  keywords: [
    'Achraf Jarrou',
    'Agentic AI',
    'LangGraph',
    'EU AI Act',
    'MCP Protocol',
    'A2A Protocol',
    'LLMOps',
    'AI Agent Orchestration',
    'RAG',
    'Verifiable AI',
    'SHA-256 Audit',
  ],
  openGraph: {
    title: 'Achraf Jarrou — Agentic AI Engineer',
    description:
      'Building autonomous systems that prove their own reasoning cannot be altered. THEMIS: EU AI Act compliance intelligence.',
    url: 'https://achraf-jarrou.com',
    type: 'website',
    images: [
      {
        url: 'https://achraf-jarrou.com/themis-landing.jpg',
        width: 1200,
        height: 800,
        alt: 'THEMIS - Autonomous EU AI Act Compliance Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achraf Jarrou — Agentic AI Engineer',
    description: 'Building autonomous systems that prove their own reasoning cannot be altered.',
    images: ['https://achraf-jarrou.com/themis-landing.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroPremium />
      <ThemisShowcase />
      <TechnicalArsenal />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
