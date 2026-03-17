'use client';

export function TechnicalArsenal() {
  const categories = [
    {
      title: 'Agentic Orchestration',
      skills: [
        'LangGraph 0.2+',
        'A2A Protocol',
        'FastMCP',
        'LangChain',
        'CrewAI',
        'HITL Design',
      ],
    },
    {
      title: 'RAG & Retrieval',
      skills: [
        'HyDE + RRF + Cross-Encoder',
        'Qdrant',
        'Pinecone',
        'ChromaDB',
        'Hybrid Search',
        'Parent-Document Retrieval',
      ],
    },
    {
      title: 'LLM & Optimization',
      skills: [
        'DSPy',
        'LoRA / QLoRA',
        'Unsloth',
        'PEFT',
        'Groq API',
        'RAGAS',
      ],
    },
    {
      title: 'Governance & Security',
      skills: [
        'SHA-256 Audit Chains',
        'EU AI Act',
        'Garak Red-Teaming',
        'NeMo Guardrails',
        'Llama Guard',
        'OWASP LLM Top 10',
      ],
    },
    {
      title: 'Backend & Infrastructure',
      skills: [
        'FastAPI',
        'Java Spring Boot',
        'PostgreSQL',
        'Redis',
        'Neo4j',
        'Temporal.io',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      title: 'Observability',
      skills: [
        'LangSmith',
        'Langfuse',
        'OpenTelemetry',
        'RAGAS Evaluation',
        'LLM Monitoring',
        'Audit Trails',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Production-proven across every layer of the AI stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="border border-border rounded-lg bg-card/30 p-6 hover:border-accent/50 transition-colors">
              <h3 className="text-sm font-bold uppercase text-accent tracking-wide mb-6">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-xs font-mono text-muted-foreground">
                    <span className="text-foreground">·</span> {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
