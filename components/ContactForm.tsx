"use client";

import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: replace with a POST to the booking/lead system, e.g.
    // await fetch("/api/leads", { method: "POST", body: JSON.stringify(formData) });
    // For V1 this form has no backend — we just confirm receipt on screen.

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald/30 bg-emerald/5 p-10 text-center">
        <h3 className="font-serif text-2xl text-navy">Thanks — got it.</h3>
        <p className="mt-3 text-navy/70">
          We&apos;ll be in touch shortly to confirm details and get a
          professional booked in.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Name
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
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="jordan@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="postcode" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Property postcode / area
        </label>
        <input
          id="postcode"
          name="postcode"
          type="text"
          required
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
          placeholder="SW1A 1AA"
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="service" className="font-mono text-xs uppercase tracking-wide text-navy/60">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-emerald"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
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
          placeholder="Timing, access, tenancy details, or anything else useful."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-emerald px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-emerald-dark sm:w-auto"
        >
          Request a quote
        </button>
      </div>
    </form>
  );
}
