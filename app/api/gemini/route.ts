import { streamText, Message } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

// Optional: remove if you're not deploying to edge
export const runtime = "edge";

const generatedId = () => Math.random().toString(36).slice(2, 15);

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generatedId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generatedId(),
    role: message.role,
    content: message.content,
  })),
];

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const stream = await streamText({
      model: google("gemini-1.5-flash-latest"), // ✅ correct model
      messages: buildGoogleGenAIPrompt(messages),
      temperature: 0.7,
    });

    return stream.toDataStreamResponse();
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response("Gemini API error. Check model name or quota.", {
      status: 500,
    });
  }
}
