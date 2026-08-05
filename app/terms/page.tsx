import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Klova Energy",
};

// TODO: This page is placeholder copy only and has not been reviewed by a
// solicitor. Replace with proper Terms of Service before public launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="Placeholder — not yet reviewed">
      <p>
        These Terms of Service are placeholder text for the Klova Energy V1
        website and do not constitute a final or legally reviewed agreement.
      </p>

      <p>
        Klova Energy acts as an introducer, connecting homeowners, landlords
        and letting agents with independent, vetted professionals who carry
        out property compliance certificates (including EPC, Gas Safety,
        EICR and floorplan services). Klova Energy does not itself perform
        the certification work.
      </p>

      <p>
        By submitting a request through this website, you agree to be
        contacted by Klova Energy regarding your enquiry and, where
        applicable, by a matched professional to arrange and complete the
        requested service.
      </p>

      <p>
        Full terms covering liability, cancellations, payment, and the
        relationship between Klova Energy and the professionals in its
        network will be published here ahead of launch.
      </p>
    </LegalPage>
  );
}
