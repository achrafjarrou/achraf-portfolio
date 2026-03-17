'use client';

import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Let's Build Something
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Open to senior AI engineering roles and serious technical collaborations.
        </p>

        {/* Contact Links */}
        <div className="space-y-4 max-w-2xl">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/achraf-jarrou-4394bb342/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full px-8 py-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold">→</span>
              <span className="text-foreground font-medium">LinkedIn</span>
            </div>
            <span className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
              linkedin.com/in/achraf-jarrou-4394bb342
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/achrafjarrou"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full px-8 py-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold">→</span>
              <span className="text-foreground font-medium">GitHub</span>
            </div>
            <span className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
              github.com/achrafjarrou
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:achraf.jarrou2002@gmail.com"
            className="group flex items-center justify-between w-full px-8 py-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold">→</span>
              <span className="text-foreground font-medium">Email</span>
            </div>
            <span className="text-muted-foreground text-sm group-hover:text-accent transition-colors">
              achraf.jarrou2002@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
