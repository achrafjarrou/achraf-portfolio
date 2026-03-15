import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Achraf Jarrou | Agentic AI Architect | Self-Correcting AI Systems',
  description:
    'Achraf Jarrou - Agentic AI Architect building self-correcting systems with validation loops. Expert in RAG, LLMOps, and production-grade AI. Reducing hallucinations by 35%, costs by 42%. Available for international CDI.',
  keywords: [
    'Achraf Jarrou',
    'Agentic AI Architect',
    'Self-Correcting Systems',
    'RAG Architecture',
    'LLMOps',
    'AI Agent Systems',
    'Production AI',
  ],
  openGraph: {
    title: 'Achraf Jarrou | Agentic AI Architect',
    description:
      'Building self-correcting AI systems with validation loops that validate themselves. Expert in production-grade AI architecture.',
    url: 'https://achraf-jarrou.com',
    type: 'website',
    images: [
      {
        url: 'https://achraf-jarrou.com/achraf-profile.jpg',
        width: 400,
        height: 500,
        alt: 'Achraf Jarrou - Agentic AI Architect',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
