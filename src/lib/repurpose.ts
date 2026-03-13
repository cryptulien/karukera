// Multiply — AI Content Repurposing Engine
// Core repurposing logic

export type OutputFormat =
  | "twitter_thread"
  | "linkedin_post"
  | "email_newsletter"
  | "instagram_caption"
  | "youtube_script"
  | "blog_summary"
  | "reddit_post";

export interface RepurposeRequest {
  content: string;
  formats: OutputFormat[];
  tone?: "professional" | "casual" | "bold" | "educational";
  brandVoice?: string;
}

export interface RepurposeResult {
  format: OutputFormat;
  content: string;
  charCount: number;
}

const FORMAT_PROMPTS: Record<OutputFormat, string> = {
  twitter_thread: `Convert this into a compelling Twitter/X thread (5-10 tweets). 
Rules:
- First tweet must hook — no "Thread:" prefix
- Each tweet under 280 chars
- Use line breaks between tweets (mark with [1/X], [2/X] etc.)
- End with a CTA or strong closing thought
- Be conversational, not corporate`,

  linkedin_post: `Convert this into a LinkedIn post.
Rules:
- Open with a bold first line (the hook people see before "...see more")
- Use short paragraphs (1-2 sentences each)
- Include relevant insights or data points
- End with a question or CTA to drive engagement
- Professional but not stiff. Human tone.
- 1000-1500 characters ideal`,

  email_newsletter: `Convert this into an email newsletter section.
Rules:
- Subject line suggestion at the top
- Brief, scannable format
- Bold key takeaways
- Conversational tone like writing to a smart friend
- Include a CTA at the end
- 300-500 words`,

  instagram_caption: `Convert this into an Instagram caption.
Rules:
- Hook in the first line (before the fold)
- Use emojis sparingly but effectively
- Include line breaks for readability
- End with a CTA (save this, share this, comment below)
- Suggest 5-10 relevant hashtags at the end
- 150-300 words`,

  youtube_script: `Convert this into a YouTube video script outline.
Rules:
- Hook (first 10 seconds script)
- Main content broken into clear sections
- Suggested B-roll or visual notes in [brackets]
- Key talking points as bullet points
- Outro with CTA (subscribe, comment, etc.)
- 3-5 minute video length target`,

  blog_summary: `Convert this into a concise blog post summary.
Rules:
- Title suggestion
- 2-3 sentence TL;DR at the top
- 3-5 key takeaways as bullet points
- Brief conclusion
- SEO-friendly: include a suggested meta description (under 160 chars)
- 200-400 words`,

  reddit_post: `Convert this into a Reddit post.
Rules:
- Title that would get upvoted (curiosity gap or value promise)
- Casual, authentic tone — no marketing speak
- Share value first, don't sell
- Include a TL;DR at the bottom
- Format for readability (short paragraphs, bullet points)
- 300-600 words`,
};

export function getSystemPrompt(format: OutputFormat): string {
  return `You are a world-class content strategist. Your job is to repurpose content into different formats while maintaining the core message and value.

${FORMAT_PROMPTS[format]}

Important:
- Preserve the key insights and data from the original
- Adapt the tone and structure for the target platform
- Never add false information or claims not in the original
- Make it feel native to the platform, not copy-pasted`;
}

export function getFormatLabel(format: OutputFormat): string {
  const labels: Record<OutputFormat, string> = {
    twitter_thread: "𝕏 Thread",
    linkedin_post: "LinkedIn Post",
    email_newsletter: "Email Newsletter",
    instagram_caption: "Instagram Caption",
    youtube_script: "YouTube Script",
    blog_summary: "Blog Summary",
    reddit_post: "Reddit Post",
  };
  return labels[format];
}

export const ALL_FORMATS: OutputFormat[] = [
  "twitter_thread",
  "linkedin_post",
  "email_newsletter",
  "instagram_caption",
  "youtube_script",
  "blog_summary",
  "reddit_post",
];
