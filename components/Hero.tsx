export default function Hero() {
  return (
    <section id="top" className="section-padding">
      <div className="mx-auto flex max-w-content flex-col items-start">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-dark">
          UK-wide · Property compliance
        </span>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-navy sm:text-6xl md:text-7xl">
          Property compliance certificates, sorted.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-navy/70 sm:text-xl">
          EPCs, Gas Safety, EICR and floorplans — booked with a vetted local
          professional, fast. Tell us what you need and we&apos;ll take it from
          there.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-emerald px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-dark"
          >
            Get a quote
          </a>
          <a
            href="#services"
            className="text-base font-medium text-navy/70 underline decoration-navy/20 underline-offset-4 transition-colors hover:text-navy"
          >
            See what we cover
          </a>
        </div>
      </div>
    </section>
  );
}
