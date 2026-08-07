"use client";

import type { FormEvent } from "react";
import { SERVICES } from "@/lib/constants";

export default function QuickStartBar() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const service = (form.elements.namedItem("quickService") as HTMLSelectElement)?.value;
    const postcode = (form.elements.namedItem("quickPostcode") as HTMLInputElement)?.value;

    // Carry the quick-start selection into the real form below rather than
    // submitting anywhere — there's no backend yet, so this just saves a
    // re-type once the visitor reaches the full contact form.
    const serviceField = document.getElementById("service") as HTMLSelectElement | null;
    const postcodeField = document.getElementById("postcode") as HTMLInputElement | null;
    if (serviceField && service) serviceField.value = service;
    if (postcodeField && postcode) postcodeField.value = postcode;

    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-2xl bg-white p-2.5 shadow-xl shadow-navy-dark/30 sm:flex-row sm:items-center"
    >
      <select
        name="quickService"
        defaultValue=""
        aria-label="I need help with"
        className="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-navy outline-none"
      >
        <option value="" disabled>
          I need help with...
        </option>
        {SERVICES.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>

      <div className="hidden h-8 w-px shrink-0 bg-navy/10 sm:block" />

      <input
        name="quickPostcode"
        type="text"
        placeholder="Enter postcode"
        aria-label="Postcode"
        className="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-navy outline-none placeholder:text-navy/40"
      />

      <button
        type="submit"
        className="shrink-0 rounded-xl bg-coral px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-coral-dark"
      >
        Get a quote
      </button>
    </form>
  );
}
