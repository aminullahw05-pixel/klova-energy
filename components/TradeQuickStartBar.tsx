"use client";

import type { FormEvent } from "react";
import { COMPANY_TYPES, PORTFOLIO_SIZES } from "@/lib/constants";

export default function TradeQuickStartBar() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const companyType = (form.elements.namedItem("quickCompanyType") as HTMLSelectElement)?.value;
    const portfolio = (form.elements.namedItem("quickPortfolio") as HTMLSelectElement)?.value;

    // Carry the quick-start selection into the real form below rather than
    // submitting anywhere — there's no backend yet, so this just saves a
    // re-select once the visitor reaches the full trade account form.
    const companyTypeField = document.getElementById("companyType") as HTMLSelectElement | null;
    const portfolioField = document.getElementById("portfolio") as HTMLSelectElement | null;
    if (companyTypeField && companyType) companyTypeField.value = companyType;
    if (portfolioField && portfolio) portfolioField.value = portfolio;

    document.getElementById("trade-form")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-2xl bg-white p-2.5 shadow-xl shadow-navy-dark/30 sm:flex-row sm:items-center"
    >
      <select
        name="quickCompanyType"
        defaultValue=""
        aria-label="Company type"
        className="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-navy outline-none"
      >
        <option value="" disabled>
          We are a...
        </option>
        {COMPANY_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <div className="hidden h-8 w-px shrink-0 bg-navy/10 sm:block" />

      <select
        name="quickPortfolio"
        defaultValue=""
        aria-label="Portfolio size"
        className="min-w-0 flex-1 rounded-xl border-0 bg-transparent px-4 py-3 text-navy outline-none"
      >
        <option value="" disabled>
          Portfolio size
        </option>
        {PORTFOLIO_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="shrink-0 rounded-xl bg-coral px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-coral-dark"
      >
        Get started
      </button>
    </form>
  );
}
