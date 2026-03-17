'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {currentYear} Achraf Jarrou</p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
