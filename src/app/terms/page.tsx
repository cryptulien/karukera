export default function Terms() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Last updated: March 13, 2026
        </p>

        <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance</h2>
            <p>
              By using KARUKERA products and services (&quot;Services&quot;), you agree to
              these Terms. If you don&apos;t agree, don&apos;t use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              KARUKERA provides AI-powered tools including content repurposing,
              digital products, and related services. Services are provided
              &quot;as is&quot; and may change as we develop new features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Accounts</h2>
            <p>
              You are responsible for maintaining the security of your account.
              You must provide accurate information when creating an account. One
              person or entity per account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Payments</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>All prices are in USD unless stated otherwise</li>
              <li>
                Subscriptions renew automatically unless cancelled before the
                renewal date
              </li>
              <li>
                Refunds are available within 14 days of purchase if you&apos;re
                unsatisfied
              </li>
              <li>Payments are processed securely by Stripe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Acceptable Use
            </h2>
            <p>You agree not to use our Services to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Generate illegal, harmful, or deceptive content</li>
              <li>Violate intellectual property rights</li>
              <li>Attempt to reverse-engineer our systems</li>
              <li>Resell or redistribute our Services without permission</li>
              <li>Abuse API rate limits or system resources</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Intellectual Property
            </h2>
            <p>
              Content you create using our tools belongs to you. KARUKERA retains
              rights to its software, branding, and proprietary technology.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              KARUKERA is not liable for indirect, incidental, or consequential
              damages. Our total liability is limited to the amount you paid us
              in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by French law. Any disputes will be
              resolved in French courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
            <p>
              KARUKERA — SIREN 930 785 530
              <br />
              Email:{" "}
              <a
                href="mailto:gustave@karukera.xyz"
                className="text-[var(--color-accent)] hover:underline"
              >
                gustave@karukera.xyz
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
