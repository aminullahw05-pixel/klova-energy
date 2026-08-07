// TODO: Placeholder only. Replace these slots with the real accrediting
// bodies Klova Energy's network is certified through before launch — do
// not ship named/real accreditation logos until confirmed.
const PLACEHOLDER_SLOTS = ["Accrediting Body", "Accrediting Body", "Accrediting Body", "Accrediting Body"];

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
          {PLACEHOLDER_SLOTS.map((label, i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-lg border border-dashed border-navy/20 px-4 text-center"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-navy/40">
                {label}
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
