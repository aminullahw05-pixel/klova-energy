export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ghost">
      <header className="border-b border-navy/10">
        <div className="mx-auto max-w-content px-6 py-4 sm:px-10">
          <a href="/" className="font-serif text-2xl tracking-tight text-navy">
            Klova Energy
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <h1 className="font-serif text-4xl text-navy">{title}</h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-wide text-navy/50">
          Last updated: {updated}
        </p>
        <div className="mt-10 space-y-6 text-navy/80">{children}</div>
      </main>
    </div>
  );
}
