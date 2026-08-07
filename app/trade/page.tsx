import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import TrustStrip from "@/components/TrustStrip";
import TradeQuickStartBar from "@/components/TradeQuickStartBar";
import TradeForm from "@/components/TradeForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trade Accounts | Klova Energy",
  description:
    "Compliance certificates for estate agents, letting agents and housing management companies — EPC, Gas Safety, EICR and floorplans handled across your whole portfolio.",
};

const BENEFITS = [
  {
    title: "One point of contact",
    description:
      "A single relationship covers every certificate across your portfolio, instead of juggling separate local providers property by property.",
    badge: "bg-coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="6" cy="12" r="2.4" fill="white" />
        <circle cx="18" cy="5.5" r="2.2" fill="white" fillOpacity="0.85" />
        <circle cx="18" cy="12" r="2.2" fill="white" fillOpacity="0.85" />
        <circle cx="18" cy="18.5" r="2.2" fill="white" fillOpacity="0.85" />
        <path d="M8.2 12h7.6M7.4 10.3l8.8-4M7.4 13.7l8.8 4.3" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Built for volume",
    description:
      "Whether it's five properties or five hundred, every request is handled the same way: qualified fast and booked with a vetted professional.",
    badge: "bg-emerald",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 3 3 8l9 5 9-5-9-5Z" fill="white" />
        <path d="M3 12l9 5 9-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16l9 5 9-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "UK-wide coverage",
    description:
      "One partner for compliance wherever your properties are, from city flats to rural lettings.",
    badge: "bg-coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.4" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function TradePage() {
  return (
    <>
      <Header
        logoHref="/"
        ctaHref="#trade-form"
        ctaLabel="Request a trade account"
        ctaLabelShort="Get started"
        secondaryLink={{ href: "/", label: "For homeowners & landlords" }}
      />
      <TrustStrip />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/trade-hero-bg.jpg"
              alt="Modern managed apartment block with balconies"
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
              For agents & housing providers
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl">
              Compliance certificates for your whole portfolio, handled in
              one place.
            </h1>
            <div className="mt-5 h-1.5 w-20 rounded-full bg-coral" />
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              A single point of contact for EPCs, Gas Safety, EICR and
              floorplans across every property you manage — booked with
              vetted local professionals, UK-wide.
            </p>

            <div className="mt-10 w-full max-w-2xl">
              <TradeQuickStartBar />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Launching 2026 — be among our founding trade partners
            </div>
          </div>
        </section>

        <section className="section-padding bg-navy text-white">
          <div className="mx-auto max-w-content">
            <h2 className="font-serif text-4xl sm:text-5xl">
              Built for portfolios, not one-off jobs
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="border-t border-white/15 pt-6">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${benefit.badge}`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-emerald-light">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trade-form" className="section-padding bg-white">
          <div className="mx-auto max-w-content">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-navy sm:text-5xl">
                Set up a trade account
              </h2>
              <p className="mt-4 text-lg text-navy/70">
                Tell us about your portfolio and how you currently handle
                compliance — we&apos;ll get back to you to set things up.
              </p>
            </div>

            <div className="mt-12 max-w-3xl">
              <TradeForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
