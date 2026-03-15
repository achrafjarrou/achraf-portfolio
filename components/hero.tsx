'use client';

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-block">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                Agentic AI Architect
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Building <span className="text-accent">Self-Correcting Systems</span>
              <br />
              <span className="text-foreground">That Validate Themselves</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              I design agentic systems with built-in validation loops that continuously correct themselves — connecting enterprise data sources, ML models, and LLM agents into observable, production-ready pipelines. Specializing in RAG, Multi-Agent Orchestration, MCP, and LLMOps.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">35%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Hallucination Reduction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">42%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Cost Savings</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">234ms</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Avg Latency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">5</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Systems (Orion)</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:gap-3"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="mailto:achraf.jarrou2002@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-card/80 transition-colors"
              >
                Let's Talk
                <Mail size={20} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/achrafjarrou"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border/50 bg-card/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/achraf-jarrou-4394bb342/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border/50 bg-card/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:achraf.jarrou2002@gmail.com"
                className="p-3 rounded-lg border border-border/50 bg-card/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/achraf-profile.jpg"
                alt="Achraf Jarrou - Agentic AI Architect"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl border border-border/50 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
