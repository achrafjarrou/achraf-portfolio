'use client';

import { Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroPremium() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-background relative">
      <div className="absolute top-8 right-8 text-xs font-mono text-green-500 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Available · Open to Opportunities
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main content */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight font-sans">
              <span className="text-foreground">Agentic AI</span>
              <br />
              <span className="text-accent relative">
                Engineer
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-accent"></span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg font-medium">
              Building autonomous systems that prove their own reasoning cannot be altered.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="https://themis-compliance.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                View THEMIS — Live Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                href="https://github.com/achrafjarrou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 hover:bg-accent/5 rounded-lg transition-colors text-foreground font-semibold"
              >
                <Github size={16} />
                GitHub
              </Link>
            </div>

            {/* Metrics bar */}
            <div className="flex flex-wrap gap-6 text-xs font-mono text-muted-foreground">
              <div>SHA-256 Sealed</div>
              <div>•</div>
              <div>96 EU AI Act Articles</div>
              <div>•</div>
              <div>6-Node LangGraph</div>
              <div>•</div>
              <div>Live Production</div>
            </div>
          </div>

          {/* Right: Terminal animation */}
          <div className="hidden lg:block">
            <div className="border border-border rounded-lg bg-card/50 backdrop-blur-sm p-6 font-mono text-sm overflow-hidden">
              <div className="text-muted-foreground mb-4">
                <span className="text-green-500"># THEMIS EvidenceChain — SHA-256 sealed</span>
              </div>

              <div className="space-y-2 text-muted-foreground text-xs">
                <div>
                  <span className="text-accent">chain</span> = EvidenceChain(
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">legal_premise</span> = <span className="text-green-400">"EU AI Act Art.13"</span>,{' '}
                  <span className="text-muted-foreground"># conf: 0.95</span>
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">document_fact</span> = <span className="text-green-400">"400K interactions/day"</span>,{' '}
                  <span className="text-muted-foreground"># conf: 0.80</span>
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">inference</span> = <span className="text-green-400">"High-risk processing"</span>,{' '}
                  <span className="text-muted-foreground"># conf: 0.70</span>
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">conclusion</span> = <span className="text-green-400">"DPIA required — GAP"</span>,{' '}
                  <span className="text-muted-foreground"># conf: 0.85</span>
                </div>
                <div>)</div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50 text-green-500">
                <span>assert chain.integrity == True</span>
                <span className="ml-2"># ✓ SHA-256 verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
