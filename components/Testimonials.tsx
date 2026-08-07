// TODO: Placeholder only. Replace with real customer testimonials (or
// link out to a live Google/Trustpilot profile) before launch — these
// quotes are not from real customers.
const PLACEHOLDER_REVIEWS = [
  {
    quote:
      "Placeholder testimonial text — replace with a real customer quote before launch.",
    name: "[Customer name]",
    context: "[Property type / location]",
  },
  {
    quote:
      "Placeholder testimonial text — replace with a real customer quote before launch.",
    name: "[Customer name]",
    context: "[Property type / location]",
  },
  {
    quote:
      "Placeholder testimonial text — replace with a real customer quote before launch.",
    name: "[Customer name]",
    context: "[Property type / location]",
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
              <p className="flex-1 font-serif text-xl italic leading-relaxed text-navy/70">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-wide text-navy/50">
                {review.name} — {review.context}
              </p>
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
