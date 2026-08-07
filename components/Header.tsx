import Image from "next/image";

export default function Header({
  logoHref = "#top",
  ctaHref = "#contact",
  ctaLabel = "Get a quote",
  ctaLabelShort,
  secondaryLink,
}: {
  logoHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaLabelShort?: string;
  secondaryLink?: { href: string; label: string };
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ghost/90 backdrop-blur">
      <div className="mx-auto max-w-content px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between">
          <a href={logoHref} className="flex items-center gap-2.5">
            <Image
              src="/logo-mark-dark.png"
              alt=""
              width={215}
              height={209}
              className="h-9 w-auto"
              priority
            />
            <Image
              src="/logo-wordmark-dark.png"
              alt="Klova Energy"
              width={442}
              height={89}
              className="h-6 w-auto"
              priority
            />
          </a>
          <div className="flex items-center gap-5">
            {secondaryLink && (
              <a
                href={secondaryLink.href}
                className="hidden text-sm font-medium text-navy/70 hover:text-navy sm:block"
              >
                {secondaryLink.label}
              </a>
            )}
            <a
              href={ctaHref}
              className="shrink-0 whitespace-nowrap rounded-full bg-emerald px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-dark sm:px-5"
            >
              <span className="sm:hidden">{ctaLabelShort ?? ctaLabel}</span>
              <span className="hidden sm:inline">{ctaLabel}</span>
            </a>
          </div>
        </div>

        {secondaryLink && (
          <a
            href={secondaryLink.href}
            className="mt-2 block text-sm font-medium text-navy/70 hover:text-navy sm:hidden"
          >
            {secondaryLink.label}
          </a>
        )}
      </div>
    </header>
  );
}
