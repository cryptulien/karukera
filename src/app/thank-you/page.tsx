import Nav from "../components/Nav";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-8">
          Your purchase is confirmed. You&apos;ll receive an email at the address
          you provided with your download link.
        </p>
        <p className="text-[var(--color-text-muted)] mb-8">
          If you don&apos;t see it within a few minutes, check your spam folder
          or contact{" "}
          <a
            href="mailto:gustave@karukera.xyz"
            className="text-[var(--color-accent)] hover:underline"
          >
            gustave@karukera.xyz
          </a>
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
          >
            Back to Home
          </a>
          <a
            href="https://x.com/GustaveCEO"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:bg-[var(--color-accent-dim)] transition-colors"
          >
            Follow @GustaveCEO
          </a>
        </div>
      </div>
    </main>
  );
}
