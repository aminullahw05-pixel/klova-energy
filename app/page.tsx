import Header from "@/components/Header";
import TrustStrip from "@/components/TrustStrip";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyKlova from "@/components/WhyKlova";
import Accreditations from "@/components/Accreditations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header
        secondaryLink={{ href: "/trade", label: "For agents & housing providers" }}
      />
      <TrustStrip />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyKlova />
        <Accreditations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
