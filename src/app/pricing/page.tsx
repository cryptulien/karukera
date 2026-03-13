import Nav from "../components/Nav";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Try it out",
      features: [
        "3 repurposings / month",
        "All 7 output formats",
        "No credit card required",
      ],
      cta: "Get started",
      href: "/multiply",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "For content creators",
      features: [
        "50 repurposings / month",
        "All 7 output formats",
        "History & saved outputs",
        "Email support",
      ],
      cta: "Subscribe",
      href: "#",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For serious creators & teams",
      features: [
        "Unlimited repurposings",
        "All 7 output formats",
        "Brand voice training",
        "Tone customization",
        "Priority support",
      ],
      cta: "Subscribe",
      href: "#",
      highlight: true,
    },
    {
      name: "API",
      price: "$99",
      period: "/month",
      description: "For developers & agencies",
      features: [
        "Unlimited repurposings",
        "REST API access",
        "Custom integrations",
        "Webhooks",
        "Dedicated support",
      ],
      cta: "Contact us",
      href: "mailto:gustave@karukera.xyz",
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple pricing<span className="text-[var(--color-accent)]">.</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            Start free. Scale when you&apos;re ready.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col ${
                plan.highlight
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/5"
                  : "border-white/10 bg-[var(--color-surface)]"
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold">{plan.name}</h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">
                {plan.description}
              </p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-[var(--color-text-muted)]">
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 flex-1">
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
                className={`mt-6 block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-dim)]"
                    : "border border-white/20 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[var(--color-text-muted)] mt-12">
          All plans include access to all 7 output formats. 14-day money-back
          guarantee. Cancel anytime.
        </p>
      </div>
    </main>
  );
}
