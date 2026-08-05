const points = [
  {
    title: "Fast turnaround",
    description: "Most bookings are confirmed with a professional within 24 hours.",
  },
  {
    title: "Fully vetted professionals",
    description: "Every certifier we work with is checked, qualified and insured.",
  },
  {
    title: "UK-wide coverage",
    description: "From city flats to rural lettings, we've got your property covered.",
  },
];

export default function WhyKlova() {
  return (
    <section id="why-klova" className="section-padding bg-navy text-white">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-4xl sm:text-5xl">Why Klova</h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="border-t border-white/15 pt-6">
              <h3 className="font-serif text-2xl text-emerald-light">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
