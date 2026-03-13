import { NextResponse } from "next/server";
import {
  getSystemPrompt,
  type OutputFormat,
  type RepurposeResult,
} from "@/lib/repurpose";

export async function POST(request: Request) {
  try {
    const { content, formats, tone } = await request.json();

    if (!content || !formats || formats.length === 0) {
      return NextResponse.json(
        { error: "Content and at least one format required" },
        { status: 400 }
      );
    }

    // Check for API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Process each format in parallel
    const promises = formats.map(async (format: OutputFormat) => {
      const systemPrompt = getSystemPrompt(format);
      const toneInstruction = tone
        ? `\n\nAdditional tone instruction: Write in a ${tone} tone.`
        : "";

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [
              { role: "system", content: systemPrompt + toneInstruction },
              {
                role: "user",
                content: `Here is the content to repurpose:\n\n${content}`,
              },
            ],
            temperature: 0.7,
            max_tokens: 2000,
          }),
        }
      );

      const data = await response.json();
      const generatedContent =
        data.choices?.[0]?.message?.content || "Generation failed";

      return {
        format,
        content: generatedContent,
        charCount: generatedContent.length,
      } as RepurposeResult;
    });

    const results = await Promise.all(promises);

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Repurpose API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
