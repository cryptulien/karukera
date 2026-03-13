"use client";

import { useState } from "react";
import { ALL_FORMATS, getFormatLabel, type OutputFormat } from "@/lib/repurpose";

export default function MultiplyPage() {
  const [content, setContent] = useState("");
  const [selectedFormats, setSelectedFormats] = useState<OutputFormat[]>([
    "twitter_thread",
    "linkedin_post",
    "email_newsletter",
  ]);
  const [results, setResults] = useState<
    { format: OutputFormat; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const toggleFormat = (format: OutputFormat) => {
    setSelectedFormats((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format]
    );
  };

  const handleRepurpose = async () => {
    if (!content.trim() || selectedFormats.length === 0) return;
    setLoading(true);
    setResults([]);

    try {
      const res = await fetch("/api/repurpose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, formats: selectedFormats }),
      });
      const data = await res.json();
      if (data.results) {
        setResults(data.results);
      }
    } catch (err) {
      console.error("Repurpose failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-[var(--color-text-muted)] hover:text-white transition-colors">
              KARUKERA
            </a>
            <span className="text-[var(--color-text-muted)]">/</span>
            <h1 className="text-xl font-bold">
              Multiply
              <span className="text-[var(--color-accent)]">.</span>
            </h1>
          </div>
          <span className="text-sm text-[var(--color-text-muted)]">
            One piece → ten formats
          </span>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Input Section */}
        <section className="mb-8">
          <label className="block text-sm text-[var(--color-text-muted)] mb-2">
            Paste your content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste a blog post, article, notes, or any content you want to repurpose..."
            className="w-full h-48 bg-[var(--color-surface)] border border-white/10 rounded-lg p-4 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)]/50 resize-none"
          />
          <div className="text-xs text-[var(--color-text-muted)] mt-1">
            {content.length} characters
          </div>
        </section>

        {/* Format Selection */}
        <section className="mb-8">
          <label className="block text-sm text-[var(--color-text-muted)] mb-3">
            Output formats
          </label>
          <div className="flex flex-wrap gap-2">
            {ALL_FORMATS.map((format) => (
              <button
                key={format}
                onClick={() => toggleFormat(format)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedFormats.includes(format)
                    ? "bg-[var(--color-accent)] text-black font-semibold"
                    : "border border-white/20 text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/50"
                }`}
              >
                {getFormatLabel(format)}
              </button>
            ))}
          </div>
        </section>

        {/* Action */}
        <section className="mb-12">
          <button
            onClick={handleRepurpose}
            disabled={loading || !content.trim() || selectedFormats.length === 0}
            className="px-8 py-3 bg-[var(--color-accent)] text-black font-bold rounded-lg hover:bg-[var(--color-accent-dim)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {loading ? "Multiplying..." : `Multiply → ${selectedFormats.length} formats`}
          </button>
        </section>

        {/* Results */}
        {results.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Results</h2>
            <div className="space-y-6">
              {results.map((result, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-[var(--color-surface)] overflow-hidden"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {getFormatLabel(result.format)}
                    </span>
                    <button
                      onClick={() => copyToClipboard(result.content, i)}
                      className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors"
                    >
                      {copiedIndex === i ? "✓ Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="p-4 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                    {result.content}
                  </pre>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
