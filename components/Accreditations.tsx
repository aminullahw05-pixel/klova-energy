// TODO: Placeholder only. Replace these slots with the real accrediting
// bodies Klova Energy's network is certified through before launch — do
// not ship named/real accreditation logos until confirmed.
const PLACEHOLDER_SLOTS = [
  { label: "Accrediting Body", accent: "text-coral" },
  { label: "Accrediting Body", accent: "text-emerald" },
  { label: "Accrediting Body", accent: "text-navy-light" },
  { label: "Accrediting Body", accent: "text-coral" },
];

export default function Accreditations() {
  return (
    <section id="accreditations" className="section-padding bg-white">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-navy sm:text-5xl">
            Accreditations
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            The professionals in our network are qualified and accredited
            through recognised UK certification bodies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PLACEHOLDER_SLOTS.map((slot, i) => (
            <div
              key={i}
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-navy/20 px-4 text-center"
            >
              <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${slot.accent}`}>
                <path
                  d="M12 2.5l7 3v5.2c0 4.6-3 7.8-7 9.3-4-1.5-7-4.7-7-9.3V5.5l7-3Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-mono text-xs uppercase tracking-wide text-navy/40">
                {slot.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-navy/40">
          Placeholder logos — to be replaced with our confirmed accrediting
          bodies before launch.
        </p>
      </div>
    </section>
  );
}
