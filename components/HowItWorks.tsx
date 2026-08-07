const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Fill in the form with your property and the certificate you're after.",
    badge: "bg-coral",
  },
  {
    number: "02",
    title: "We confirm & book",
    description:
      "We match you with a certified local professional and confirm a time.",
    badge: "bg-emerald",
  },
  {
    number: "03",
    title: "They visit & complete it",
    description:
      "The professional carries out the assessment on site at your property.",
    badge: "bg-coral",
  },
  {
    number: "04",
    title: "You get it delivered",
    description:
      "Your certificate is lodged where required and sent to you, ready to use.",
    badge: "bg-emerald",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-navy sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            From request to certificate in hand, without the chasing.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full font-mono text-lg text-white ${step.badge}`}
              >
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-xl text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
