"use client";

import { useState } from "react";

export default function CheckoutButton({
  product,
  label,
  className,
}: {
  product: string;
  label: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={
        className ||
        "inline-block px-8 py-3 bg-[var(--color-accent)] text-black font-bold rounded-lg hover:bg-[var(--color-accent-dim)] transition-colors disabled:opacity-50"
      }
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}
