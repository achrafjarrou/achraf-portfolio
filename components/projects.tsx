'use client';

import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: -1,
    title: 'AEGIS — Authentic Interview Intelligence',
    flagship: true,
    isNew: true,
    subtitle: 'Live Proctoring · ML-Calibrated Scoring · Multi-Layer Anti-Cheating',
    description:
      'Production SaaS platform combining GPT-4o streaming, 8-vector anti-cheating system, and ML-calibrated scoring pipeline. Monitors behavioral patterns, detects AI-generated responses, and maintains 100% integrity scoring. Features real-time WebSocket sessions, HITL review workflows, and comprehensive analytics dashboard.',
    fullDescription:
      'AEGIS is an enterprise interview proctoring platform built on production-grade architecture. The system streams GPT-4o responses in real-time, simultaneously monitors 8 integrity vectors (tab switching, copy-paste patterns, DevTools detection, AI text detection), and applies calibrated ML adjustments to eliminate GPT scoring bias. Zero-knowledge deployment across Netlify (frontend), Render (backend), and Supabase (database) with 0€/month cost.',
    images: [
      { src: '/aegis-dashboard.jpg', alt: 'AEGIS Dashboard - Oracle interview session monitoring' },
      { src: '/aegis-tech.jpg', alt: 'AEGIS Technology Stack - GPT-4o, React 18, FastAPI, SQLAlchemy' },
      { src: '/aegis-analytics.jpg', alt: 'AEGIS Analytics - Hall of Records with integrity scoring' },
    ],
    technologies: [
      'GPT-4o Streaming',
      'React 18 SPA',
      'FastAPI',
      'WebSockets',
      'SQLAlchemy',
      'PostgreSQL',
      'scikit-learn ML',
      'JWT Auth',
      'Netlify',
      'Render',
      'Supabase',
    ],
    highlights: [
      '100% integrity monitoring',
      '8-vector anti-cheat detection',
      'ML-calibrated scoring (eliminates GPT bias)',
      'Real-time streaming',
      'HITL escalation workflows',
      'Enterprise analytics dashboard',
      '0€/month production deployment',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 0,
    title: 'Orion — AI Operations Layer',
    isNew: true,
    subtitle: 'MCP Orchestration · Multi-Agent · HITL',
    description:
      'Production-grade agentic pipeline that reacts to business events by coordinating across 5 systems via MCP servers. Full HITL breakpoints, PostgreSQL state persistence, and real-time observability. Wall time: 1.7s across 7 tool calls.',
    images: [
      { src: '/orion-mcp.jpg', alt: 'Orion MCP Pipeline - Contract Intelligence with multi-agent orchestration and real-time metrics' },
    ],
    technologies: [
      'LangGraph',
      'FastMCP',
      'PostgreSQL',
      'Qdrant',
      'FastAPI',
      'Langfuse',
      'RAGAS',
      'Docker',
      'Ollama',
    ],
    highlights: [
      '1.7s end-to-end',
      '99.2% tool success',
      'RAGAS 0.93',
      '85% test coverage',
    ],
    github: 'https://github.com/achrafjarrou/orion',
    live: '#',
  },
  {
    id: 1,
    title: 'Nexus AI — Enterprise Intelligence Verification',
    isNew: true,
    subtitle: 'Self-Correcting RAG · HITL · Multi-Source',
    description:
      'Evidence-based AI system that validates claims in business documents against SEC EDGAR, Companies House, GDELT, and web sources. Self-correcting LangGraph workflows with automated conflict resolution loops and full PostgreSQL audit trail.',
    images: [
      { src: '/nexus-pipeline.jpg', alt: 'Nexus AI Verification Pipeline - Real-time claim verification against SEC EDGAR and multi-source data' },
    ],
    technologies: [
      'LangGraph',
      'FastAPI',
      'PostgreSQL',
      'Pydantic v2',
      'LangSmith',
      'Redis',
      'Docker',
      'Kubernetes',
    ],
    highlights: [
      'Multi-source verification',
      'Self-correcting loops',
      'HITL escalation',
      'Full audit trail',
    ],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'KAIROS — Autonomous AI Governance Runtime',
    flagship: true,
    isNew: true,
    subtitle: 'Self-Proving · Self-Correcting · EU AI Act Native',
    description:
      'Enterprise multi-agent pipeline for documentary intelligence across Finance, Legal, and Healthcare with automated ROI measurement, self-red-teaming, and EU AI Act compliance reporting. Combines ColPali visual embeddings, DSPy automated prompt optimization, and Temporal.io durable workflows.',
    fullDescription:
      'KAIROS is a production-grade autonomous AI governance system that processes complex documents (PDFs, forms, reports) while maintaining full EU AI Act compliance. The system combines ColPali visual embeddings for PDF understanding, DSPy automated prompt optimization achieving 15% accuracy gains, and Temporal.io durable workflows for crash-resistant operations. Built-in Garak red-teaming runs 400+ attack probes automatically, while NeMo Guardrails filters outputs in real-time. Generates complete EU AI Act compliance dossiers automatically.',
    technologies: [
      'ColPali',
      'DSPy',
      'Temporal.io',
      'LangGraph',
      'Garak',
      'RAGAS',
      'NeMo Guardrails',
      'Qdrant',
      'PostgreSQL',
      'Neo4j',
      'FastAPI',
      'FastMCP',
      'OpenTelemetry',
      'Kubernetes',
    ],
    highlights: [
      'ColPali visual PDF embeddings',
      'DSPy +15% accuracy gains',
      'Garak 400+ automated probes',
      'Temporal.io durable workflows',
      'EU AI Act automated compliance',
      'Self-red-teaming',
      'Multi-modal (text + images + tables)',
    ],
    github: '#',
    live: '#',
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              Client Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Production Systems in Market</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Enterprise-grade systems built for clients in Finance, Legal, Healthcare, and SaaS. From interview proctoring platforms to autonomous governance systems, each project demonstrates full-stack architecture, production operations, and measurable business impact. All systems are live or in active development.
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
        </div>

        {/* Flagship Project - Full Width */}
        {projects.filter(p => p.flagship).map((project) => (
          <div key={project.id} className="mb-16">
            <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-card/60 via-card/40 to-background hover:border-accent/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-accent/10">
              {/* Header */}
              <div className="p-8 pb-6 border-b border-border/30">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                    FLAGSHIP
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    PRODUCTION
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{project.subtitle}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Image Gallery */}
              {project.images && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 pt-6 border-b border-border/30">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className="rounded-lg border border-border/50 w-full h-48 object-cover hover:border-accent/50 transition-all"
                    />
                  ))}
                </div>
              )}

              {/* Highlights & Tech Stack */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">Key Achievements</h4>
                  <div className="space-y-3">
                    {project.highlights?.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                        <p className="text-sm text-muted-foreground">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-accent mb-4 uppercase tracking-wider">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-card border border-border/50 text-xs font-medium text-foreground hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="flex items-center justify-between p-8 bg-card/50 border-t border-border/30">
                <div className="flex gap-3">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-accent/10 transition-all text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all text-sm font-semibold"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">Enterprise-grade production system</p>
              </div>
            </div>
          </div>
        ))}

        {/* Standard Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => !p.flagship).map((project) => (
            <div
              key={project.id}
              className="group relative rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-8 hover:border-accent/60 shadow-sm hover:shadow-lg hover:shadow-accent/5"
            >
              {/* NEW Badge */}
              {project.isNew && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    NEW
                  </span>
                </div>
              )}

              {/* Subtitle */}
              {project.subtitle && (
                <p className="text-xs font-semibold text-accent mb-2">
                  {project.subtitle}
                </p>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Image Gallery */}
              {project.images && (
                <div className="mb-6 rounded-lg overflow-hidden border border-border/30">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent border-accent/20"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
