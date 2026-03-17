'use client';

import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ThemisShowcase() {
  const evidenceChain = [
    { label: 'LEGAL_PREMISE', text: 'EU AI Act Art.13 requires transparency', confidence: 95 },
    { label: 'DOCUMENT_FACT', text: 'System handles 400K interactions/day', confidence: 80 },
    { label: 'INFERENCE', text: 'Scale indicates high-risk processing', confidence: 70 },
    { label: 'CONCLUSION', text: 'DPIA required — not found in docs — GAP', confidence: 85 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-sm text-xs font-bold bg-accent/10 text-accent border border-accent/20">
              FLAGSHIP · LIVE IN PRODUCTION
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            THEMIS — EU AI Act Compliance Intelligence
          </h2>
          <p className="text-lg text-muted-foreground mb-2 font-medium">
            The system that proves its own reasoning cannot be altered.
          </p>
        </div>

        {/* Grid: Architecture + EvidenceChain */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left: Architecture SVG representation */}
          <div className="border border-border rounded-lg bg-card/30 p-8">
            <div className="font-mono text-xs space-y-4 text-muted-foreground">
              <div className="text-center mb-6">
                <div className="inline-block px-3 py-2 border border-accent/50 rounded-sm text-accent font-semibold">
                  PDF Upload
                </div>
              </div>

              <div className="flex justify-around items-center gap-2">
                <div className="px-3 py-2 border border-border rounded-sm text-center min-w-max">classify</div>
                <div className="text-accent">→</div>
                <div className="px-3 py-2 border border-border rounded-sm text-center min-w-max">detect contradictions</div>
                <div className="text-accent">→</div>
                <div className="px-3 py-2 border border-accent/50 rounded-sm text-center min-w-max text-accent">
                  map obligations
                </div>
              </div>

              <div className="flex justify-end mb-4">
                <div className="text-accent text-right">↓ RAG</div>
              </div>

              <div className="flex justify-between items-center gap-4">
                <div className="px-3 py-2 border border-border rounded-sm text-center min-w-max">HITL pause</div>
                <div className="text-accent">←←←←</div>
                <div className="px-3 py-2 border border-border rounded-sm text-center min-w-max flex-1">analyze gaps</div>
              </div>

              <div className="text-center mb-6">
                <div className="text-accent">↓</div>
              </div>

              <div className="text-center mb-6">
                <div className="inline-block px-3 py-2 border border-border rounded-sm">report generation</div>
              </div>

              <div className="text-center">
                <div className="inline-block px-3 py-2 border border-accent/50 rounded-sm text-accent">
                  SHA-256 re-verification → integrity: <span className="text-green-500">true</span> ✓
                </div>
              </div>
            </div>
          </div>

          {/* Right: EvidenceChain */}
          <div className="border border-border rounded-lg bg-card/30 p-8">
            <div className="space-y-4">
              {evidenceChain.map((item, idx) => (
                <div key={idx} className="pb-4 last:pb-0 last:border-0 border-b border-border/50">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xs font-bold text-accent px-2 py-1 bg-accent/10 rounded-sm whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground flex-1">{item.text}</span>
                    <span className="text-xs text-muted-foreground font-mono">{item.confidence}%</span>
                  </div>
                  <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${item.confidence}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-border/50 text-xs font-mono text-green-500">
                SHA-256: a3f8c2d1e9b74f6a...
                <br />
                <span className="text-foreground">integrity verified ✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-border rounded-lg overflow-hidden bg-card/20">
            <Image
              src="/themis-landing.jpg"
              alt="THEMIS Landing Page"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground">upload.tsx</p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden bg-card/20">
            <Image
              src="/themis-analysis.jpg"
              alt="THEMIS Analysis Pipeline"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground">analysis.tsx</p>
            </div>
          </div>
          <div className="border border-border rounded-lg overflow-hidden bg-card/20">
            <Image
              src="/themis-architecture.jpg"
              alt="THEMIS Architecture"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground">architecture.tsx</p>
            </div>
          </div>
        </div>

        {/* Tech Stack & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stack */}
          <div>
            <h3 className="text-sm font-bold uppercase text-accent tracking-wide mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'LangGraph',
                'Groq',
                'HyDE + RRF',
                'CrossEncoder',
                'Qdrant',
                'FastAPI',
                'React 18',
                'SHA-256',
                'EU AI Act',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-sm bg-card border border-border text-xs font-mono text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 justify-end">
            <Link
              href="https://themis-compliance.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Try Live Demo
              <ExternalLink size={16} />
            </Link>
            <Link
              href="https://github.com/achrafjarrou/themis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border hover:border-accent/50 hover:bg-accent/5 rounded-lg transition-colors font-semibold"
            >
              <Github size={16} />
              View GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
