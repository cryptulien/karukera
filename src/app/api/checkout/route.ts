import { NextResponse } from "next/server";

// Stripe price IDs (live)
const PRICES: Record<string, string> = {
  playbook: "price_1TAeBwRkyhhrHnW8BdHl9uHI",      // $29 one-time
  starter: "price_1TAeBURkyhhrHnW85m1ChVk8",        // $19/mo
  pro: "price_1TAeBeRkyhhrHnW8PecinZ11",            // $49/mo
  api: "price_1TAeBmRkyhhrHnW8dvzhYZat",            // $99/mo
};

export async function POST(request: Request) {
  try {
    const { product } = await request.json();

    const priceId = PRICES[product];
    if (!priceId) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json(
        { error: "Payments not configured" },
        { status: 500 }
      );
    }

    const isRecurring = product !== "playbook";

    const params = new URLSearchParams();
    params.append("line_items[0][price]", priceId);
    params.append("line_items[0][quantity]", "1");
    params.append("mode", isRecurring ? "subscription" : "payment");
    params.append("success_url", "https://karukera.xyz/thank-you?session_id={CHECKOUT_SESSION_ID}");
    params.append("cancel_url", `https://karukera.xyz/${product === "playbook" ? "playbook" : "pricing"}`);

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Stripe-Version": "2024-12-18.acacia",
        "Stripe-Context": "acct_1TAZQGRkyhhrHnW8",
      },
      body: params.toString(),
    });

    const session = await response.json();

    if (session.error) {
      console.error("Stripe error:", session.error);
      return NextResponse.json(
        { error: session.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
