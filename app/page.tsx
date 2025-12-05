"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, Calendar, Code, Zap, Shield, TrendingUp, Award, Clock, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "Real Estate Credit Management System",
      company: "Wafa Immobilier",
      period: "Feb - Jul 2025",
      description:
        "Enterprise banking application for mortgage credit management. Built secure REST APIs with OAuth2/JWT authentication and comprehensive transaction tracking.",
      technologies: ["Spring Boot", "Angular", "Oracle DB", "JWT/OAuth2", "GitLab CI/CD", "Wildfly"],
      impact: "Handles 1000+ daily transactions with zero downtime",
      metrics: ["99.9% Uptime", "1000+ Daily Users", "Zero Security Breaches"],
      role: "Full Stack Engineer",
    },
    {
      title: "Legal Cabinet Management Suite",
      company: "SmartProg SARL",
      period: "Jul - Aug 2024",
      description:
        "Complete SaaS platform for legal firms to manage cases, clients, and documents. Implemented secure JWT authentication and intuitive case management workflows.",
      technologies: ["Spring Boot", "Angular", "JWT Auth", "MySQL", "RESTful APIs"],
      impact: "Successfully onboarded 15+ legal firms",
      metrics: ["15+ Clients", "50% Time Reduction", "100% Data Security"],
      role: "Full Stack Developer",
    },
    {
      title: "Commercial Management Platform",
      company: "SmartProg SARL",
      period: "Jul - Aug 2023",
      description:
        "Complete business operations platform featuring inventory management, sales tracking, and client relationship management with real-time analytics.",
      technologies: ["Spring Boot", "Angular", "MySQL", "REST APIs", "Data Analytics"],
      impact: "Streamlined operations for SMEs, reducing manual work by 70%",
      metrics: ["70% Efficiency Gain", "Real-time Analytics", "Multi-tenant Architecture"],
      role: "Full Stack Developer",
    },
  ]

  const skills = {
    "Backend Development": [
      "Java/J2EE & Spring Boot",
      "Hibernate ORM & JPA",
      "RESTful APIs Design",
      "Microservices Architecture",
      "OAuth2 & JWT Security",
      "Spring Security",
      "Maven & Gradle",
    ],
    "Frontend Development": [
      "Angular 12+",
      "Angular Native/Ionic",
      "TypeScript & JavaScript",
      "RxJS & State Management",
      "Responsive Design",
      "Material Design & PrimeNG",
      "Flutter (Mobile)",
    ],
    "Database & ORM": [
      "Oracle Database",
      "MySQL & PostgreSQL",
      "SQL Optimization",
      "Database Design",
      "Hibernate & MyBatis",
      "Redis Cache",
    ],
    "DevOps & Cloud": [
      "Docker & Containerization",
      "GitLab CI/CD Pipelines",
      "Wildfly & Tomcat",
      "NGINX Configuration",
      "Oracle Cloud Infrastructure",
      "Linux Server Administration",
    ],
    "Development Tools": [
      "Git & GitLab/GitHub",
      "IntelliJ IDEA & VS Code",
      "Postman & Swagger",
      "SonarQube",
      "JUnit & Mockito Testing",
      "Jira & Trello",
    ],
    "Methodologies & Soft Skills": [
      "Agile/Scrum",
      "Clean Architecture & SOLID",
      "Technical Documentation",
      "Code Review & Mentoring",
      "Client Communication",
      "Project Management",
    ],
  }

  const whyHireMe = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Agile development with bi-weekly sprints. You see progress regularly.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "OAuth2, JWT, and industry-standard security practices built-in.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "SOLID principles, comprehensive testing, and clear documentation.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business needs.",
    },
  ]

  const testimonials = [
    {
      text: "Exceptional developer with strong technical skills and excellent communication.",
      author: "Wafa Immobilier",
      role: "Banking Project Lead",
    },
    {
      text: "Delivered a complete SaaS platform on time with zero compromises on quality.",
      author: "SmartProg SARL",
      role: "CTO",
    },
  ]

  const languages = [
    { name: "French", level: "Professional Working Proficiency" },
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Arabic", level: "Native Speaker" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-lg' : 'bg-background/80 backdrop-blur-lg border-b border-border/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-2xl font-bold gradient-text">AJ.</div>

          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition">Projects</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition">Skills</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border/50 p-4 space-y-4">
            {["about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block text-muted-foreground hover:text-foreground transition capitalize"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4">
                🚀 Available for Freelance Projects
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Build <span className="gradient-text">Enterprise Solutions</span> That Scale
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Full Stack Developer with proven track record in Spring Boot & Angular. I deliver secure, scalable applications for banking, legal tech, and commercial platforms.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                    Hire Me Now <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <a href="#projects">
                  <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent">
                    View Portfolio
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 border-t border-border/50">
                <div>
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative order-first md:order-last">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl animate-pulse"></div>
                <div className="relative rounded-2xl border-2 border-primary/20 shadow-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src="/photo.png"
                    alt="Achraf Jarrou - Full Stack Developer"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Work With Me?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I combine technical excellence with business understanding to deliver results that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyHireMe.map((item, idx) => (
              <div key={idx} className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-semibold">State Engineer in Information Systems</span> from École des Sciences de l'Information, Rabat. With hands-on experience at Wafa Immobilier and SmartProg SARL, I've delivered enterprise-grade applications used by thousands of users daily.
            </p>
            <p>
              My expertise spans <span className="text-foreground font-semibold">full-stack development with Java/Spring Boot and Angular</span>, implementing OAuth2/JWT authentication, designing scalable microservices, and ensuring zero-downtime deployments. I've worked on banking systems, legal tech platforms, and commercial management solutions.
            </p>
            <p>
              I follow <span className="text-foreground font-semibold">Agile/Scrum methodologies</span> with clear communication, regular updates, and detailed documentation. Based in Casablanca, I'm available for remote freelance projects worldwide with flexible timezone availability.
            </p>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Certifications & Education
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                <span><strong>State Engineer</strong> in Information Systems Engineering (2020-2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                <span><strong>Oracle Cloud Infrastructure</strong> Foundations Certified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                <span><strong>Preparatory Classes</strong> for Engineering Schools (MPSI/MP)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Real-world applications solving complex business challenges</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-primary font-semibold">{project.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Calendar size={14} />
                        {project.period}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                  {project.metrics.map((metric, midx) => (
                    <div key={midx} className="flex items-center gap-2">
                      <Zap className="text-accent" size={16} />
                      <span className="text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tidx) => (
                    <span key={tidx} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">Comprehensive skill set for end-to-end development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <div key={idx} className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all">
                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                  <Code size={20} />
                  {category}
                </h3>
                <ul className="space-y-2">
                  {skillList.map((skill, sidx) => (
                    <li key={sidx} className="text-muted-foreground flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border/50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-primary">Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="p-4 bg-muted/30 rounded-lg">
                  <p className="font-semibold mb-1">{lang.name}</p>
                  <p className="text-muted-foreground text-sm">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-border/50 rounded-lg p-8 relative">
                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-4">"</div>
                <p className="text-muted-foreground mb-6 mt-8 italic leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to start your project? I'm available for freelance work on Upwork, Fiverr, and direct contracts. Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-4">Quick Response Guaranteed</h3>
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:achrafjarrou2002@gmail.com" className="text-muted-foreground hover:text-primary transition">
                      achrafjarrou2002@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">📱</span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+212 (0)6 97 83 80 50</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">📍</span>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Casablanca, Morocco</p>
                    <p className="text-sm text-muted-foreground">(Remote work worldwide)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://www.linkedin.com/in/achraf-jarrou-4394bb342/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start border-primary/50 hover:bg-primary/10">
                      <Linkedin className="mr-2" size={20} />
                      LinkedIn Profile
                    </Button>
                  </a>
                  <a href="https://github.com/achrafjarrou" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start border-primary/50 hover:bg-primary/10">
                      <Github className="mr-2" size={20} />
                      GitHub Portfolio
                    </Button>
                  </a>
                  <a href="mailto:achrafjarrou2002@gmail.com">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                      <Mail className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-4 py-2 bg-card rounded-full text-sm font-medium">✓ 24h Response Time</div>
                <div className="px-4 py-2 bg-card rounded-full text-sm font-medium">✓ Free Consultation</div>
                <div className="px-4 py-2 bg-card rounded-full text-sm font-medium">✓ Flexible Contracts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2025 Achraf Jarrou. Full Stack Developer specializing in Spring Boot & Angular.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/achraf-jarrou-4394bb342/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/achrafjarrou" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                <Github size={20} />
              </a>
              <a href="mailto:achrafjarrou2002@gmail.com" className="text-muted-foreground hover:text-primary transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}