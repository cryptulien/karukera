"use client";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try it out",
    features: [
      "3 repurposings / month",
      "All 7 output formats",
      "Basic tone options",
    ],
    cta: "Get Started",
    href: "/multiply",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "For creators",
    features: [
      "50 repurposings / month",
      "All 7 output formats",
      "All tone options",
      "History & saved outputs",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "#",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For teams & power users",
    features: [
      "Unlimited repurposings",
      "All 7 output formats",
      "Brand voice training",
      "Custom tone profiles",
      "Priority support",
      "API access (100 req/day)",
    ],
    cta: "Start Free Trial",
    href: "#",
    highlighted: true,
  },
  {
    name: "API",
    price: "$99",
    period: "/month",
    description: "For developers",
    features: [
      "Unlimited API calls",
      "All output formats",
      "Webhooks",
      "Custom integrations",
      "Dedicated support",
      "99.9% uptime SLA",
    ],
    cta: "Contact Us",
    href: "mailto:gustave@karukera.xyz",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <a
            href="/"
            className="text-[var(--color-text-muted)] hover:text-white transition-colors"
          >
            KARUKERA
          </a>
          <span className="text-[var(--color-text-muted)]">/</span>
          <a
            href="/multiply"
            className="text-[var(--color-text-muted)] hover:text-white transition-colors"
          >
            Multiply
          </a>
          <span className="text-[var(--color-text-muted)]">/</span>
          <span className="font-semibold">Pricing</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col ${
                plan.highlighted
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                  : "border-white/10 bg-[var(--color-surface)]"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-[var(--color-accent)] mb-2 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {plan.description}
              </p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-[var(--color-text-muted)]">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                  >
                    <span className="text-[var(--color-accent)] mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)]"
                    : "border border-white/20 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-[var(--color-text-muted)]">
          <p>
            All plans include a 14-day free trial. No credit card required for
            Free tier.
          </p>
          <p className="mt-2">
            Questions?{" "}
            <a
              href="mailto:gustave@karukera.xyz"
              className="text-[var(--color-accent)] hover:underline"
            >
              gustave@karukera.xyz
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
