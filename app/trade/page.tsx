import type { Metadata } from "next";
import Header from "@/components/Header";
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
  },
  {
    title: "Built for volume",
    description:
      "Whether it's five properties or five hundred, every request is handled the same way: qualified fast and booked with a vetted professional.",
  },
  {
    title: "UK-wide coverage",
    description:
      "One partner for compliance wherever your properties are, from city flats to rural lettings.",
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

      <main>
        <section className="section-padding">
          <div className="mx-auto flex max-w-content flex-col items-start">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-dark">
              For agents & housing providers
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] text-navy sm:text-6xl">
              Compliance certificates for your whole portfolio, handled in
              one place.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-navy/70 sm:text-xl">
              A single point of contact for EPCs, Gas Safety, EICR and
              floorplans across every property you manage — booked with
              vetted local professionals, UK-wide.
            </p>
            <div className="mt-10">
              <a
                href="#trade-form"
                className="rounded-full bg-emerald px-7 py-3.5 text-base font-medium text-white shadow-sm transition-colors hover:bg-emerald-dark"
              >
                Request a trade account
              </a>
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
                  <h3 className="font-serif text-2xl text-emerald-light">
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
