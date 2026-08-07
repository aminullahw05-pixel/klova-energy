const services = [
  {
    name: "EPC",
    fullName: "Energy Performance Certificate",
    description:
      "Required for selling, letting or renting a property. Valid for 10 years.",
    price: "from £65",
    badge: "bg-emerald",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="14" width="4" height="7" rx="1" fill="white" />
        <rect x="10" y="9.5" width="4" height="11.5" rx="1" fill="white" fillOpacity="0.85" />
        <rect x="17" y="5" width="4" height="16" rx="1" fill="white" fillOpacity="0.65" />
      </svg>
    ),
  },
  {
    name: "Gas Safety",
    fullName: "Gas Safety Certificate (CP12)",
    description:
      "Annual legal requirement for landlords with gas appliances in the property.",
    price: "from £75",
    badge: "bg-coral",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 2.5c1 3-2.5 4-2.5 7.5a2.5 2.5 0 0 0 5 0c1 1 1.5 2.3 1.5 3.5a4.5 4.5 0 1 1-9 0c0-4.8 3.5-6 5-11Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "EICR",
    fullName: "Electrical Installation Condition Report",
    description:
      "Required every 5 years for rental properties to confirm the electrics are safe.",
    price: "from £120",
    badge: "bg-navy-light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Floorplans",
    fullName: "Professional Floorplans",
    description:
      "Accurate, to-scale floorplans for listings, marketing and lettings.",
    price: "from £60",
    badge: "bg-emerald-dark",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="white" strokeWidth="1.6" />
        <path d="M12 4v16M3 12h9" stroke="white" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "Landlord Bundle",
    fullName: "EPC + Gas Safety + EICR + Floorplan",
    description:
      "All four, booked together with one professional visit where possible.",
    price: "from £280",
    badge: "bg-coral-light",
    highlight: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 3 3 8l9 5 9-5-9-5Z" fill="white" />
        <path d="M3 12l9 5 9-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16l9 5 9-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-navy sm:text-5xl">
            What we cover
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Every certificate a homeowner, landlord or letting agent needs to
            stay compliant — all arranged through one simple request.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                service.highlight
                  ? "border-navy bg-navy text-white"
                  : "border-navy/10 bg-ghost text-navy"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${service.badge}`}
              >
                {service.icon}
              </div>
              <h3 className="mt-5 font-serif text-2xl">{service.name}</h3>
              <p
                className={`mt-1 font-mono text-xs uppercase tracking-wide ${
                  service.highlight ? "text-white/60" : "text-navy/50"
                }`}
              >
                {service.fullName}
              </p>
              <p
                className={`mt-4 flex-1 text-sm leading-relaxed ${
                  service.highlight ? "text-white/80" : "text-navy/70"
                }`}
              >
                {service.description}
              </p>
              <p className="mt-6 font-mono text-lg text-emerald">
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-navy/40">
          Pricing shown is indicative and subject to property size and
          location. Final quotes confirmed before booking.
        </p>
      </div>
    </section>
  );
}
