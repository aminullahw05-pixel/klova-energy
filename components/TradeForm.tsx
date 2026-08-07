"use client";

import { useState, type FormEvent } from "react";
import { COMPANY_TYPES, PORTFOLIO_SIZES } from "@/lib/constants";

export default function TradeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: replace with a POST to the trade-accounts/CRM system, e.g.
    // await fetch("/api/trade-leads", { method: "POST", body: JSON.stringify(formData) });
    // For V1 this form has no backend — we just confirm receipt on screen.

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald/30 bg-emerald/5 p-10 text-center">
        <h3 className="font-serif text-2xl text-navy">Thanks — got it.</h3>
        <p className="mt-3 text-navy/70">
          We&apos;ll be in touch shortly to talk through setting up your
          trade account.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Company name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="Acme Lettings"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="companyType" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Company type
        </label>
        <select
          id="companyType"
          name="companyType"
          required
          defaultValue=""
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
        >
          <option value="" disabled>
            Select a type
          </option>
          {COMPANY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Contact name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="Jordan Smith"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="07123 456789"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="jordan@acmelettings.co.uk"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="portfolio" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Portfolio size
        </label>
        <select
          id="portfolio"
          name="portfolio"
          required
          defaultValue=""
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
        >
          <option value="" disabled>
            Select a range
          </option>
          {PORTFOLIO_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="Which certificates you need most, current compliance process, timelines, or anything else useful."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-emerald px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-dark sm:w-auto"
        >
          Request a trade account
        </button>
      </div>
    </form>
  );
}
