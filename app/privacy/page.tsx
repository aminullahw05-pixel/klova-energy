import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Klova Energy",
};

// TODO: This page is placeholder copy only and has not been reviewed by a
// solicitor or checked against UK GDPR / Data Protection Act 2018
// requirements. Replace with a proper Privacy Policy before public launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="Placeholder — not yet reviewed">
      <p>
        This Privacy Policy is placeholder text for the Klova Energy V1
        website and does not yet reflect a full UK GDPR-compliant policy.
      </p>

      <p>
        When you submit the contact form on this site, we collect the
        information you provide (name, phone number, email address,
        property postcode/area, service requested, and any additional
        details) in order to respond to your enquiry and, where relevant,
        pass it to a matched compliance professional to arrange your
        booking.
      </p>

      <p>
        At this stage, the website does not send submitted form data to any
        backend system — no personal data is stored. Once lead capture is
        connected to our booking system, this policy will be updated to
        describe how data is stored, for how long, and how you can request
        access to or deletion of your data.
      </p>

      <p>
        A full policy covering data retention, third parties, cookies, and
        your rights under UK data protection law will be published here
        ahead of launch.
      </p>
    </LegalPage>
  );
}
