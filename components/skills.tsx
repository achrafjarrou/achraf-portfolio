'use client';

export function Skills() {
  const skillCategories = [
    {
      title: 'AI Orchestration & LLMOps',
      skills: [
        'LangGraph (Complex Workflows)',
        'LangChain',
        'CrewAI (Multi-Agents)',
        'Model Context Protocol (MCP)',
        'FastMCP Server Development',
        'THEMIS (EU AI Act Automation)',
        'EvidenceChain™ Architecture',
        'Multi-Framework Compliance',
        'LangSmith (Observability)',
        'Langfuse (Production Traces)',
      ],
    },
    {
      title: 'RAG & Vector Search',
      skills: [
        'HyDE (Hypothetical Document Embeddings)',
        'Reciprocal Rank Fusion (RRF)',
        'CrossEncoder Reranking',
        'Compliance RAG',
        'Advanced RAG Patterns',
        'Query Expansion',
        'Hybrid Search (BM25 + Vector)',
        'Pinecone, Qdrant, ChromaDB',
      ],
    },
    {
      title: 'Model Context Protocol & Inference',
      skills: [
        'MCP Servers',
        'Ollama',
        'vLLM',
        'llama.cpp',
        'Local Model Serving',
      ],
    },
    {
      title: 'Fine-Tuning & Quantization',
      skills: [
        'LoRA / QLoRA',
        'Unsloth',
        'PEFT (HuggingFace)',
        'GGUF / NF4 Quantization',
        'Model Evaluation (RAGAS)',
      ],
    },
    {
      title: 'Backend & Scalability',
      skills: [
        'Java Spring Boot',
        'FastAPI (Async)',
        'Python (Pydantic V2)',
        'PostgreSQL',
        'Redis Semantic Cache',
        'Microservices Architecture',
        'RESTful API Design',
      ],
    },
    {
      title: 'Evaluation & Trust',
      skills: [
        'RAGAS (RAG Evaluation)',
        'Faithfulness Scoring',
        'HITL Workflows',
        'Garak Red-Teaming',
        'SHA-256 Integrity',
        'Langfuse',
      ],
    },
    {
      title: 'Security & Production',
      skills: [
        'OAuth2 / JWT',
        'NeMo Guardrails',
        'Llama Guard (Content Filtering)',
        'OWASP LLM Top 10',
        'Data Privacy & Compliance',
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'Docker & Docker Compose',
        'Kubernetes',
        'GitHub Actions (CI/CD)',
        'GitLab CI/CD',
        'AWS, GCP, Vercel',
      ],
    },
    {
      title: 'Databases & Storage',
      skills: [
        'PostgreSQL / MySQL',
        'Oracle',
        'Redis (Caching)',
        'Neo4j (Knowledge Graphs)',
        'Vector Databases',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Expert-Level Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Deep expertise across the full AI/ML stack, from research-grade LLM orchestration to enterprise-grade system architecture.
          </p>
          <div className="w-12 h-1 bg-accent rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-6 hover:border-accent/60 shadow-sm hover:shadow-md hover:shadow-accent/5"
            >
              <h3 className="text-base font-bold text-foreground mb-4 group-hover:text-accent">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Certifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Oracle Cloud Infrastructure Foundations',
              'Microsoft SC-900',
              'Google Cloud Digital Leader',
              'Atlassian Agile Coach',
              'DevOps MasterClass',
              'State-Certified Information Systems Engineer',
            ].map((cert, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border/50 bg-card/40 hover:bg-card/70 transition-all duration-300 p-4 text-center hover:border-accent/60 shadow-sm hover:shadow-md hover:shadow-accent/5"
              >
                <p className="text-xs font-semibold text-foreground leading-snug">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
