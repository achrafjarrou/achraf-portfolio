import { Zap, Lock, TrendingUp } from 'lucide-react';

export function WhatIBuild() {
  const capabilities = [
    {
      icon: Zap,
      title: 'Self-Correcting Agents',
      description:
        'LangGraph state machines with built-in validation loops. Systems that detect their own errors and correct them before surfacing to users.',
    },
    {
      icon: Lock,
      title: 'Cryptographic Audit Trails',
      description:
        'SHA-256 EvidenceChain™ per AI decision. Every output is traceable, tamper-proof, and court-admissible. Built for regulated industries.',
    },
    {
      icon: TrendingUp,
      title: 'Production LLMOps',
      description:
        'Langfuse tracing, RAGAS evaluation, HITL workflows. Not demo code — observable systems running in production with measurable SLAs.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              Core Competency
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What I Build</h2>
          <div className="w-12 h-1 bg-accent rounded-full mt-4 mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-8 hover:border-accent/60 shadow-sm hover:shadow-md hover:shadow-accent/5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
