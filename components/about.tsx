'use client';

import { CheckCircle2 } from 'lucide-react';

export function About() {
  const specialties = [
    'Agentic Workflows with LangGraph',
    'RAG Systems & Vector Search',
    'Model Context Protocol (MCP)',
    'LLM Fine-Tuning & LoRA',
    'Production Observability',
    'Secure API Design & OAuth2',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              About Achraf Jarrou
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achraf Jarrou - Agentic AI Architect Specializing in Self-Correcting Systems</h2>
          <p className="text-muted-foreground mt-2">Designing production-grade AI systems with built-in validation loops and measurable business impact</p>
          <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-semibold">state-certified Information Systems Engineer</span> with a passion for building production-grade AI systems that deliver measurable business impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in architecting <span className="text-foreground font-semibold">self-correcting agentic systems</span> with built-in validation loops that validate their own outputs. My systems are <span className="text-foreground font-semibold">observable, secure, and cost-efficient</span>—eliminating hallucinations by 35% and reducing operational costs by 40%+ through intelligent optimization.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My hybrid skill set spans from <span className="text-foreground font-semibold">robust backend systems</span> (Java/Spring Boot, FastAPI) to <span className="text-foreground font-semibold">advanced AI orchestration</span> (LangGraph, CrewAI, MCP). I'm committed to Clean Code principles, LLM evaluation, and production-ready CI/CD pipelines.
            </p>

            <div className="pt-4">
              <p className="text-sm font-semibold text-muted-foreground mb-3">THE PITCH</p>
              <p className="text-foreground italic border-l-2 border-accent pl-4">
                "I build AI systems that use your data internally with confidence—measurable results, complete observability, your data never leaves your servers."
              </p>
            </div>
          </div>

          {/* Right Content - Specialties */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Specialties</h3>
            <div className="space-y-3">
              {specialties.map((specialty, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{specialty}</span>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-accent">2025</div>
                  <div className="text-sm text-muted-foreground">Latest Experience</div>
                  <div className="text-xs text-muted-foreground">Wafa Immobilier</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Test Coverage</div>
                  <div className="text-xs text-muted-foreground">85%+ enforced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
