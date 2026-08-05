# Klova Energy — Marketing Site (V1)

A single-page marketing site for Klova Energy, a UK property-compliance
service. This is a **credibility-building V1**, not the full platform.

## Scope

This site is intentionally minimal:

- Static/lightly-interactive Next.js site, deployable to Vercel as-is.
- One page with Hero, Services, How It Works, Why Klova, and a Contact
  form, plus separate Terms of Service and Privacy Policy pages.
- The contact form has **no backend**. On submit it shows a confirmation
  message only — see the `TODO` in [`components/ContactForm.tsx`](components/ContactForm.tsx)
  for where to wire up a real POST to the booking system.

### Explicitly out of scope for V1

- Booking automation / scheduling
- Payments
- Backend integration, database, or CRM sync
- Account creation / login
- The Terms of Service and Privacy Policy pages contain **placeholder
  legal text only** (clearly marked with `TODO` comments) and must be
  reviewed by a solicitor before public launch.

## Stack

- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- Fonts via `next/font/google`: Instrument Serif (headings), DM Sans
  (body), DM Mono (labels/numbers)

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Composes the one-page site from components
  globals.css        Tailwind + base styles
  terms/page.tsx      Placeholder Terms of Service
  privacy/page.tsx    Placeholder Privacy Policy
components/
  Header.tsx          Sticky nav with logo + CTA
  Hero.tsx            Headline, subline, primary CTA
  Services.tsx         Service cards (EPC, Gas Safety, EICR, Floorplan, Bundle)
  HowItWorks.tsx       4-step process
  WhyKlova.tsx         3 trust points
  Contact.tsx          Section wrapper for the lead form
  ContactForm.tsx       The form itself (client component, stubbed submit)
  Footer.tsx           Company info + legal links
  LegalPage.tsx        Shared layout for Terms/Privacy pages
```

Sections are componentised on purpose so each can be edited or reordered
independently as the site evolves.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

This is a standard Next.js App Router project — push to a Git repo and
import it into [Vercel](https://vercel.com/) with default settings. No
environment variables are required for V1.
