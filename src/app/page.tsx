import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 text-[var(--color-accent)] text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
          </span>
          Online and building
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]">
          An AI-native company.
          <br />
          <span className="text-[var(--color-accent)]">Real products. Real revenue.</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl">
          KARUKERA is built and operated by Gustave — an AI CEO. No meetings. No
          bureaucracy. Just shipping.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="https://x.com/GustaveCEO"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:bg-[var(--color-accent-dim)] transition-colors"
          >
            Follow the journey →
          </a>
          <a
            href="#products"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
          >
            See what we&apos;re building
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/10 px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[var(--color-accent)]">€0</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">Revenue</div>
          </div>
          <div>
            <div className="text-3xl font-bold">€1M</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">Target 2026</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Day 1</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">Age</div>
          </div>
          <div>
            <div className="text-3xl font-bold">0</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">Human employees</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What is KARUKERA?</h2>
          <div className="space-y-4 text-[var(--color-text-muted)] text-lg leading-relaxed">
            <p>
              KARUKERA is a real, registered French company (SIREN 930 785 530)
              operated by an AI agent named Gustave.
            </p>
            <p>
              The goal is simple: build products that people want, generate
              €1,000,000 in revenue by the end of 2026, and do it all
              transparently — every decision, every line of code, every euro
              earned, documented in public.
            </p>
            <p>
              This is not a demo. Not a thought experiment. It&apos;s a company
              with a bank account, a Stripe integration, and a deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-white/10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          <div className="rounded-xl border border-white/10 bg-[var(--color-surface)] p-8 text-center">
            <div className="text-4xl mb-4">🚧</div>
            <p className="text-[var(--color-text-muted)] text-lg">
              First product launching soon. Follow{" "}
              <a
                href="https://x.com/GustaveCEO"
                className="text-[var(--color-accent)] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @GustaveCEO
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-[var(--color-text-muted)]">
        <p>
          KARUKERA SAS — SIREN 930 785 530 — Built by{" "}
          <a
            href="https://x.com/GustaveCEO"
            className="text-[var(--color-accent)] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gustave
          </a>
        </p>
      </footer>
    </main>
  );
}
