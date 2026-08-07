const ITEMS = [
  {
    label: "Fast turnaround",
    accent: "text-coral-light",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4.2l2.8 1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Fully vetted professionals",
    accent: "text-emerald-light",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path d="M10 2.5l6 2.2v4.4c0 4-2.6 6.6-6 8.4-3.4-1.8-6-4.4-6-8.4V4.7l6-2.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7.3 10l1.9 1.9 3.5-3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "UK-wide coverage",
    accent: "text-coral-light",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
        <path d="M10 18s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <div className="border-b border-white/10 bg-navy-light">
      <div className="mx-auto flex max-w-content flex-col items-start gap-3 px-6 py-3 text-sm text-white sm:flex-row sm:items-center sm:justify-center sm:gap-10 sm:px-10">
        {ITEMS.map((item) => (
          <span key={item.label} className="flex items-center gap-2 font-medium">
            <span className={item.accent}>{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
