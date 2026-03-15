'use client';

import { Mail, Linkedin, Github, MapPin, Phone, ArrowRight, Zap, Target, Users } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              Ready for Impact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Let's Build Something Remarkable
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm looking for roles where I can architect and lead production-grade AI systems that drive measurable business value. Let's connect and explore how we can work together.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-6 mx-auto"></div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:achraf.jarrou2002@gmail.com"
            className="group rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-6 hover:border-accent/60 shadow-sm hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">achraf.jarrou2002@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/achraf-jarrou-4394bb342/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-6 hover:border-accent/60 shadow-sm hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">View professional profile</p>
          </a>

          <a
            href="https://github.com/achrafjarrou"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-6 hover:border-accent/60 shadow-sm hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                <Github className="w-6 h-6 text-accent" />
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground">See my code & projects</p>
          </a>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-lg border border-border/50 bg-card/40 p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Current Location</h3>
            </div>
            <p className="text-muted-foreground">Rabat / Casablanca, Morocco</p>
            <p className="text-sm text-muted-foreground mt-2">Timezone: GMT/WET</p>
          </div>

          <div className="rounded-lg border border-border/50 bg-card/40 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-foreground">Direct Phone</h3>
            </div>
            <p className="text-muted-foreground">+212 697 838 050</p>
            <p className="text-sm text-muted-foreground mt-2">Available for calls & interviews</p>
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="space-y-6">
          <div className="rounded-lg border border-accent/20 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">The Right Fit Matters</h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm not just looking for any opportunity—I'm seeking positions where I can have meaningful impact building systems that scale. I thrive in environments that value technical excellence, architectural thinking, and pushing the boundaries of what's possible with AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* International Positions */}
              <div className="rounded-lg bg-card/50 border border-border/30 p-6 hover:border-accent/40 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-accent" />
                  <h4 className="font-semibold text-foreground">International CDI</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Actively pursuing positions in:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• UK - London, Manchester</li>
                  <li>• Canada - Toronto, Vancouver</li>
                  <li>• Germany - Berlin, Munich</li>
                  <li>• Netherlands - Amsterdam, Rotterdam</li>
                </ul>
              </div>

              {/* Local & Regional */}
              <div className="rounded-lg bg-card/50 border border-border/30 p-6 hover:border-accent/40 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-accent" />
                  <h4 className="font-semibold text-foreground">ALMAC Market</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Morocco & North Africa:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• OCP Group & Energy Sector</li>
                  <li>• Telecom & FinTech</li>
                  <li>• Tech Startups & Scale-ups</li>
                  <li>• Consulting & Services</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-card/50 border border-border/30 p-6">
              <h4 className="font-semibold text-foreground mb-4">I'm Especially Interested In:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong>Senior AI Engineer</strong> roles with system design focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span className="text-muted-foreground"><strong>Tech Lead</strong> positions building AI infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span className="text-muted-foreground">Building <strong>LLMOps platforms</strong> and enterprise solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span className="text-muted-foreground">Companies with <strong>serious AI ambitions</strong></span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <p className="text-muted-foreground mb-6">
              Ready to discuss how I can contribute to your team?
            </p>
            <a
              href="mailto:achraf.jarrou2002@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:gap-3"
            >
              Start the Conversation
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
