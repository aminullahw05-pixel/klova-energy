const services = [
  {
    name: "EPC",
    fullName: "Energy Performance Certificate",
    description:
      "Required for selling, letting or renting a property. Valid for 10 years.",
    price: "from £65",
  },
  {
    name: "Gas Safety",
    fullName: "Gas Safety Certificate (CP12)",
    description:
      "Annual legal requirement for landlords with gas appliances in the property.",
    price: "from £75",
  },
  {
    name: "EICR",
    fullName: "Electrical Installation Condition Report",
    description:
      "Required every 5 years for rental properties to confirm the electrics are safe.",
    price: "from £120",
  },
  {
    name: "Floorplans",
    fullName: "Professional Floorplans",
    description:
      "Accurate, to-scale floorplans for listings, marketing and lettings.",
    price: "from £60",
  },
  {
    name: "Landlord Bundle",
    fullName: "EPC + Gas Safety + EICR + Floorplan",
    description:
      "All four, booked together with one professional visit where possible.",
    price: "from £280",
    highlight: true,
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
              <h3 className="font-serif text-2xl">{service.name}</h3>
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
