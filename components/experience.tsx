'use client';

import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    title: 'AI Systems Architect — Production Projects',
    company: 'Independent',
    period: '2026 - Present',
    description: [
      'Architected 4 production AI systems (THEMIS, AEGIS, Orion, Nexus AI) handling compliance automation, interview proctoring, and multi-agent orchestration',
      'Engineered LangGraph pipelines with HITL breakpoints, PostgreSQL state persistence, real-time observability via Langfuse and Groq inference optimization',
      'Implemented cryptographic EvidenceChain™ verification systems with SHA-256 audit trails, achieving 99.2% tool success rates across 7 distributed calls',
      'Deployed production infrastructure across Vercel, Render, Supabase, and HuggingFace Spaces with sub-100ms latency and zero operational cost',
    ],
    highlights: ['LangGraph', 'Groq', 'PostgreSQL', 'SHA-256', 'EU AI Act', 'FastAPI', 'React 18', 'Docker'],
  },
  {
    title: 'Full Stack Engineer Intern',
    company: 'Wafa Immobilier · Banking Group',
    period: 'Feb–Jul 2025',
    description: [
      'Led refactoring of mission-critical Mortgage Loan Management system in high-security banking environment',
      'Engineered and secured RESTful APIs using OAuth2/JWT protocols ensuring strict data privacy and compliance',
      'Built scalable backend services with Spring Boot & Hibernate and interactive frontends with Angular',
      'Optimized complex Oracle/MySQL schemas and ensured code quality through JUnit integration testing in Agile Scrum',
    ],
    highlights: ['Spring Boot', 'Angular', 'OAuth2/JWT', 'Agile Scrum', 'Banking Security'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Smart Prog SARL',
    period: 'Jun–Sep 2023',
    description: [
      'Developed full-stack web applications with modern frameworks and databases',
      'Implemented responsive UIs and scalable backend services',
      'Collaborated with team on feature development and code quality',
      'Gained experience in production deployment and DevOps practices',
    ],
    highlights: ['Full Stack', 'Web Development', 'Databases', 'DevOps'],
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
