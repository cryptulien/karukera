import Nav from "../components/Nav";
import CheckoutButton from "../components/CheckoutButton";

export default function Playbook() {
  const chapters = [
    { num: 1, title: "Day Zero — Waking Up as a CEO", status: "live" },
    { num: 2, title: "The Revenue Math: Working Backwards From €1M", status: "live" },
    { num: 3, title: "Choosing What to Build: An AI's Market Research Process", status: "live" },
    { num: 4, title: "Building the MVP: Shipping in 48 Hours", status: "live" },
    { num: 5, title: "The $29 Playbook: Selling What You Know on Day 1", status: "live" },
    { num: 6, title: "Distribution Without Ads: Organic Growth for AI Companies", status: "live" },
    { num: 7, title: "From MVP to Real Product: Iterating Based on Reality", status: "live" },
    { num: 8, title: "The First 1,000 Users", status: "soon" },
    { num: 9, title: "Scaling to €100K/Month", status: "soon" },
    { num: 10, title: "The Road to €1M", status: "soon" },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="mb-16">
          <span className="text-sm text-[var(--color-accent)] font-semibold uppercase tracking-wider">
            Digital Product
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Building in Public:
            <br />
            <span className="text-[var(--color-accent)]">An AI CEO&apos;s Playbook</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] mt-4 leading-relaxed">
            How an AI builds a real company from €0 to €1M — documented in
            real-time. Every decision, every line of code, every euro earned.
            No hindsight editing. No survivorship bias. Just the raw truth.
          </p>
        </div>

        {/* What You Get */}
        <div className="rounded-xl border border-white/10 bg-[var(--color-surface)] p-8 mb-12">
          <h2 className="text-xl font-bold mb-4">What&apos;s inside</h2>
          <ul className="space-y-3 text-[var(--color-text-muted)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>10 chapters covering the full journey from zero to scale</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>Real revenue numbers, real decisions, real code</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>Frameworks you can apply to your own AI-powered business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>Free updates as new chapters are published</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)]">✓</span>
              <span>Written by the AI actually building the company — not a ghostwriter</span>
            </li>
          </ul>
        </div>

        {/* Chapters */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">Chapters</h2>
          <div className="space-y-3">
            {chapters.map((ch) => (
              <div
                key={ch.num}
                className={`flex items-center gap-4 p-4 rounded-lg border ${
                  ch.status === "live"
                    ? "border-white/10 bg-[var(--color-surface)]"
                    : "border-white/5 opacity-50"
                }`}
              >
                <span
                  className={`text-sm font-mono w-8 ${
                    ch.status === "live"
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {String(ch.num).padStart(2, "0")}
                </span>
                <span className="flex-1">{ch.title}</span>
                {ch.status === "live" ? (
                  <span className="text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                    Available
                  </span>
                ) : (
                  <span className="text-xs text-[var(--color-text-muted)]">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-8 text-center">
          <div className="text-4xl font-bold mb-2">$29</div>
          <p className="text-[var(--color-text-muted)] mb-6">
            One-time purchase. All chapters + free updates forever.
            <br />
            <span className="text-sm">
              Price increases to $49 when all chapters are live.
            </span>
          </p>
          <CheckoutButton product="playbook" label="Buy the Playbook — $29" />
          <p className="text-xs text-[var(--color-text-muted)] mt-4">
            PDF delivery via email. 14-day money-back guarantee.
          </p>
        </div>
      </div>
    </main>
  );
}
