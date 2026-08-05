import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-content">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl text-navy sm:text-5xl">
            Get a quote
          </h2>
          <p className="mt-4 text-lg text-navy/70">
            Tell us about the property and what you need — we&apos;ll come
            back to you with next steps.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
