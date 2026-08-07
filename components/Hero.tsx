import Image from "next/image";
import QuickStartBar from "./QuickStartBar";

// Photo: row of London terraced houses, Sky Erickson via Unsplash (Unsplash License).
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Row of traditional London terraced houses under a blue sky"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/75 to-navy-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-content flex-col items-start px-6 py-24 sm:px-10 sm:py-32">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-light">
          UK-wide · Property compliance
        </span>
        <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
          Property compliance certificates, sorted.
        </h1>
        <div className="mt-5 h-1.5 w-20 rounded-full bg-coral" />
        <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
          EPCs, Gas Safety, EICR and floorplans — booked with a vetted local
          professional, fast. Tell us what you need and we&apos;ll take it from
          there.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <QuickStartBar />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2 text-sm font-medium text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Launching 2026 — join our early network
          </span>
          <a
            href="#services"
            className="text-sm font-medium text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
          >
            See what we cover
          </a>
        </div>
      </div>
    </section>
  );
}
