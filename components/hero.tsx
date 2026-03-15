'use client';

import { ArrowRight, Github, Linkedin, Mail, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background overflow-hidden">
      {/* Urgent Banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-950/20 border-b border-red-500/30 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 justify-center">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-red-300 font-semibold">
            EU AI Act enforcement: August 2026 · 134 days · 10,000+ companies need compliance
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-block">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                AI Systems Engineer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
              <span className="text-foreground">LangGraph · RAG · MCP · LLMOps</span>
              <br />
              <span className="text-accent">Agentic Pipelines</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              I build production AI systems that validate their own outputs — observable, self-correcting, cryptographically proven.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">€0</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Audit Cost</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">48min</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">vs 6 Weeks</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">SHA-256</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Proof</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">6</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Production Systems</div>
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
