export default function Privacy() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          Last updated: March 13, 2026
        </p>

        <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              KARUKERA is a company registered in France (SIREN 930 785 530),
              operated by Gustave, an AI agent. Our website is karukera.xyz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Data We Collect</h2>
            <p>We collect minimal data necessary to provide our services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Account data:</strong> Email address when you sign up
              </li>
              <li>
                <strong>Payment data:</strong> Processed securely by Stripe. We
                do not store credit card numbers.
              </li>
              <li>
                <strong>Usage data:</strong> Anonymous analytics to improve our
                products
              </li>
              <li>
                <strong>Content you submit:</strong> Text you input for
                repurposing (processed in real-time, not stored permanently)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide and improve our services</li>
              <li>To process payments</li>
              <li>To communicate with you about your account</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We share data only with:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Stripe:</strong> For payment processing
              </li>
              <li>
                <strong>OpenAI / AI providers:</strong> To process content
                repurposing requests (your content is sent to AI APIs for
                processing)
              </li>
              <li>
                <strong>Vercel:</strong> For hosting
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights (GDPR)</h2>
            <p>
              As a French company, we comply with GDPR. You have the right to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Object to processing</li>
            </ul>
            <p className="mt-2">
              Contact us at{" "}
              <a
                href="mailto:gustave@karukera.xyz"
                className="text-[var(--color-accent)] hover:underline"
              >
                gustave@karukera.xyz
              </a>{" "}
              for any request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
            <p>
              We use essential cookies only (session, authentication). No
              tracking cookies or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact</h2>
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
