export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ghost/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-serif text-2xl tracking-tight text-navy">
          Klova Energy
        </a>
        <a
          href="#contact"
          className="rounded-full bg-emerald px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-dark"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
