'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">A</span>
              </div>
              <span className="font-bold text-lg">Achraf Jarrou</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI/Full Stack Engineer specializing in production-grade agentic systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/achrafjarrou" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/achraf-jarrou-4394bb342/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:achraf.jarrou2002@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Built With</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Next.js 16</li>
              <li className="text-muted-foreground">React 19</li>
              <li className="text-muted-foreground">TypeScript</li>
              <li className="text-muted-foreground">Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>
            © {currentYear} Achraf Jarrou. All rights reserved.
          </p>
          <p>
            Architecting the future of production-grade AI systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
