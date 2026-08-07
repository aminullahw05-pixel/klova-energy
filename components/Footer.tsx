import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-ghost">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-navy/60 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <Image
            src="/logo-wordmark-dark.png"
            alt="Klova Energy"
            width={442}
            height={89}
            className="h-5 w-auto"
          />
          <p className="mt-2">
            {year} Klova Energy. All rights reserved.{" "}
            <a href="mailto:hello@klovaenergy.co.uk" className="underline decoration-navy/20 underline-offset-2 hover:text-navy">
              hello@klovaenergy.co.uk
            </a>
          </p>
        </div>

        <div className="flex gap-6">
          <a href="/trade" className="hover:text-navy">
            Trade Accounts
          </a>
          <a href="/terms" className="hover:text-navy">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:text-navy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
