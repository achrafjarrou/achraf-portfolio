'use client';

import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'Founder & Chief Architect',
    company: 'AEGIS – Authentic Interview Intelligence',
    period: '2025 - Present',
    type: 'SaaS Platform',
    isNew: true,
    isFlagship: true,
    description: [
      'Built production SaaS platform combining GPT-4o streaming, 8-vector anti-cheating system, and ML-calibrated scoring pipeline from zero to market-ready in 3 months',
      'Architected real-time WebSocket sessions with PostgreSQL state persistence, FastAPI async backend, and React 18 SPA frontend—processing concurrent interview streams with sub-100ms latency',
      'Engineered ML bias correction pipeline using scikit-learn, eliminating known GPT-4o scoring biases with statistical calibration (μ: 72→65, σ: 15)',
      'Deployed zero-cost production stack: Netlify (frontend 100GB/month), Render (backend 750h/month), Supabase (500MB PostgreSQL)—full enterprise infrastructure with zero overhead',
    ],
    highlights: ['SaaS Founder', 'ML Scoring Pipeline', 'Real-time Streaming', 'Anti-Cheat Detection', 'Zero-Cost DevOps'],
  },
  {
    title: 'AI Systems Architect',
    company: 'Orion – AI Operations Layer',
    period: '2026',
    type: 'Flagship Project',
    isNew: true,
    description: [
      'Architected production-grade agentic pipeline with MCP orchestration coordinating 5 enterprise systems across financial, HR, and data platforms',
      'Engineered LangGraph state-machine with HITL breakpoints, PostgreSQL state persistence, and real-time observability via Langfuse',
      'Achieved 1.7s wall-time performance across 7 distributed tool calls with 99.2% success rate and automated error recovery',
      'Implemented comprehensive evaluation suite using RAGAS (0.93 score) with 85%+ test coverage via pytest and Docker containerization',
    ],
    highlights: ['LangGraph', 'FastMCP', 'PostgreSQL', 'Langfuse', 'RAGAS', 'HITL', 'Docker'],
  },
  {
    title: 'AI Verification Engineer',
    company: 'Nexus AI – Enterprise Intelligence Verification',
    period: '2026',
    type: 'Flagship Project',
    isNew: true,
    description: [
      'Designed self-correcting LangGraph workflows validating business claims against SEC EDGAR, Companies House, GDELT, and web sources',
      'Built multi-source evidence aggregation system with automated conflict resolution and PostgreSQL audit trails for regulatory compliance',
      'Engineered FastAPI backend with Pydantic v2 validation, Redis caching, and Kubernetes deployment pipeline',
      'Integrated human-in-the-loop escalation for low-confidence claims with comprehensive decision logging and metrics tracking',
    ],
    highlights: ['LangGraph', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'Multi-Source Verification', 'Self-Correction'],
  },
  {
    title: 'AI Governance Architect',
    company: 'KAIROS – Autonomous AI Governance Runtime',
    period: '2026',
    type: 'Flagship Project',
    isNew: true,
    description: [
      'Designed enterprise multi-agent pipeline processing complex documents (PDFs, forms, reports) with ColPali visual embeddings for Finance, Legal, and Healthcare sectors',
      'Engineered DSPy automated prompt optimization achieving 15% accuracy gains with built-in Garak red-teaming running 400+ automated security probes',
      'Implemented Temporal.io durable workflows for crash-resistant operations with PostgreSQL and Neo4j for knowledge graph persistence',
      'Built NeMo Guardrails real-time output filtering with OpenTelemetry observability and automated EU AI Act compliance dossier generation',
    ],
    highlights: ['ColPali', 'DSPy', 'Temporal.io', 'Garak', 'EU AI Act Compliance', 'Self-Red-Teaming', 'Multi-Modal RAG'],
  },
  {
    title: 'AI Software Engineer – Production-Ready',
    company: 'Agentic RAG Project',
    period: '2026',
    type: 'Personal Project',
    description: [
      'Engineered state-machine cyclic reasoning graph using LangGraph with self-correction loop eliminating 35% retrieval hallucinations',
      'Integrated LangSmith for granular trace observability and RAGAS for automated Faithfulness/Answer Relevancy scoring',
      'Optimized latency to 234ms and cut inference costs by 42% through Redis Semantic Cache layer',
      'Established robust CI/CD pipeline via GitHub Actions with 85% test coverage (Pytest) and secure Docker containerization',
    ],
    highlights: ['LangGraph', 'LLMOps', 'CI/CD', 'Performance Optimization'],
  },
  {
    title: 'Full-Stack Engineer Intern',
    company: 'Wafa Immobilier (Banking Group)',
    period: 'Feb 2025 – July 2025',
    type: 'Professional Experience',
    description: [
      'Led refactoring of mission-critical Mortgage Loan Management system in high-security banking environment',
      'Engineered and secured RESTful APIs using OAuth2/JWT protocols ensuring strict data privacy and compliance',
      'Built scalable backend services with Spring Boot & Hibernate and interactive frontends with Angular',
      'Optimized complex Oracle/MySQL schemas and ensured code quality through JUnit integration testing in Agile Scrum',
    ],
    highlights: [
      'Spring Boot',
      'Angular',
      'OAuth2/JWT',
      'Agile Scrum',
      'Banking Security',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              Career Path
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Building production-grade AI systems, engineering enterprise backends, and architecting scalable solutions in high-stakes environments.
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-0 top-20 w-0.5 h-32 bg-gradient-to-b from-accent to-accent/30"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-[-11px] top-2 w-5 h-5 rounded-full bg-accent border-4 border-background"></div>

              {/* Content */}
              <div className={`ml-8 pb-4 ${exp.isFlagship ? 'rounded-lg border border-accent/30 bg-card/50 p-6' : ''}`}>
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    {exp.isFlagship && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        FLAGSHIP
                      </span>
                    )}
                    {exp.isNew && !exp.isFlagship && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        NEW
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                    <p className="text-accent font-semibold">{exp.company}</p>
                    <span className="hidden sm:inline text-border">•</span>
                    <p className="text-muted-foreground text-sm">{exp.period}</p>
                    <span className="hidden sm:inline text-border">•</span>
                    <Badge variant="outline" className="w-fit">{exp.type}</Badge>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1.5">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <Badge
                      key={hIdx}
                      variant="secondary"
                      className="text-xs bg-secondary/50"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
