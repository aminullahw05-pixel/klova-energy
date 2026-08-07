// TODO: Placeholder only. Replace with real customer testimonials (or
// link out to a live Google/Trustpilot profile) before launch — these
// quotes are not from real customers.
const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "Placeholder testimonial text — replace with a real customer quote before launch.",
    name: "[Customer name]",
    context: "[Property type / location]",
    accent: "bg-coral",
  },
  {
    quote:
      "Placeholder testimonial text — replace with a real customer quote before launch.",
    name: "[Customer name]",
    context: "[Property type / location]",
    accent: "bg-emerald",
  },
  {
    quote:
      "Placeholder testimonial text — replace with a real customer quote before launch.",
    name: "[Customer name]",
    context: "[Property type / location]",
    accent: "bg-navy-light",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-navy sm:text-5xl">
            What our customers say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white p-7"
            >
              <span className="font-serif text-5xl leading-none text-navy/15">
                &ldquo;
              </span>
              <p className="mt-2 flex-1 font-serif text-xl italic leading-relaxed text-navy/70">
                {review.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className={`h-8 w-8 shrink-0 rounded-full ${review.accent}`} />
                <p className="font-mono text-xs uppercase tracking-wide text-navy/50">
                  {review.name} — {review.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-navy/40">
          Placeholder testimonials shown for layout purposes — to be
          replaced with real customer reviews before launch.
        </p>
      </div>
    </section>
  );
}
