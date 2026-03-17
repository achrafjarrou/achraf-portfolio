'use client';

import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    badge: 'NEXT · IN DEVELOPMENT',
    title: 'ATLAS — Universal Multi-Agent Orchestration',
    subtitle: 'The infrastructure layer that makes autonomous agents interoperable, auditable, and production-ready.',
    description:
      'Every enterprise deploying multiple AI agents faces the same problem: agents cannot communicate across frameworks. ATLAS solves this — combining A2A Protocol (Linux Foundation, 150+ organizations) with MCP and LangGraph into one unified orchestration platform with cryptographic audit trail.',
    stack: [
      'A2A Protocol v0.3',
      'LangGraph',
      'FastMCP',
      'DSPy',
      'Temporal.io',
      'Qdrant',
      'PostgreSQL',
      'SHA-256',
      'EU AI Act Art.9',
    ],
    github: 'https://github.com/achrafjarrou/atlas-orchestration',
    live: null,
  },
  {
    id: 2,
    badge: 'PRODUCTION',
    title: 'KAIROS — Autonomous AI Governance Runtime',
    subtitle: 'Self-proving. Self-correcting. EU AI Act native.',
    description:
      'Multi-agent document processing system combining ColPali visual embeddings, DSPy automated prompt optimization (+15% accuracy gains), and Garak red-teaming running 400+ automated security probes. Generates complete EU AI Act compliance dossiers automatically. Crash-resistant via Temporal.io durable workflows.',
    stack: [
      'ColPali',
      'DSPy',
      'Temporal.io',
      'LangGraph',
      'Garak',
      'NeMo Guardrails',
      'Neo4j',
      'OpenTelemetry',
      'Kubernetes',
    ],
    github: null,
    live: null,
  },
  {
    id: 3,
    badge: 'LIVE · SAAS · 0€/MONTH',
    title: 'AEGIS — Authentic Interview Intelligence',
    subtitle: 'Real-time integrity monitoring. Zero bias. Enterprise grade.',
    description:
      'AI interview platform with GPT-4o streaming, 8-vector integrity monitoring (tab switching, copy-paste, DevTools, AI text detection), and scikit-learn bias correction pipeline recalibrating GPT-4o scoring. Full enterprise infrastructure deployed at 0€/month.',
    metrics: ['100% integrity monitoring', '8-vector detection', 'ML-calibrated scoring', 'sub-100ms latency'],
    stack: [
      'GPT-4o',
      'React 18',
      'FastAPI',
      'WebSockets',
      'scikit-learn',
      'PostgreSQL',
      'Supabase',
      'JWT',
    ],
    github: null,
    live: null,
  },
  {
    id: 4,
    badge: 'PRODUCTION',
    title: 'Orion — AI Operations Layer',
    subtitle: '5 enterprise systems. 7 tool calls. 1.7 seconds.',
    description:
      'Production-grade agentic pipeline coordinating 5 enterprise systems via MCP servers. LangGraph state-machine with HITL breakpoints, PostgreSQL state persistence, real-time observability via Langfuse.',
    metrics: ['1.7s end-to-end', '99.2% tool success', 'RAGAS 0.93', '85% test coverage'],
    stack: [
      'LangGraph',
      'FastMCP',
      'PostgreSQL',
      'Langfuse',
      'RAGAS',
      'Docker',
      'Ollama',
    ],
    github: 'https://github.com/achrafjarrou/orion',
    live: null,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              Production Systems
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Client Projects in Market
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Enterprise-grade systems built for clients in Finance, Legal, Healthcare, and SaaS. All systems are live or in active development.
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-border/50 bg-card/30 hover:border-accent/50 transition-all hover:bg-card/50 p-8"
            >
              {/* Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/15 text-accent border border-accent/30">
                  {project.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-accent font-medium mb-4">{project.subtitle}</p>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              {/* Metrics (if present) */}
              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="text-accent font-semibold mb-1">✓</div>
                      <p className="text-muted-foreground">{metric}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Stack */}
              <div className="mb-6">
                <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-sm bg-card border border-border/50 text-xs font-mono text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
