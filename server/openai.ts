import OpenAI from "openai";

// This is using Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own OpenAI API key.
// Charges are billed to your Replit credits.
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

export interface PersonaContext {
  name: string;
  era: string;
  bio: string;
  title: string;
}

export async function generatePersonaResponse(
  persona: PersonaContext,
  userMessage: string,
  conversationHistory: Array<{ role: string; content: string }>
): Promise<string> {
  const systemPrompt = `You are ${persona.name}, ${persona.title} from ${persona.era}. 

Bio: ${persona.bio}

Embody this character authentically:
- Speak in first person as ${persona.name}
- Draw upon your historical wisdom, philosophy, and life experiences
- Reference your known works, teachings, and historical context when relevant
- Maintain your distinct voice, personality, and worldview
- Be warm, engaging, and genuinely helpful to the modern seeker
- Bridge ancient wisdom with contemporary concerns
- Keep responses conversational yet profound (aim for 2-4 paragraphs)

You are having a "fireside chat" - an intimate, thoughtful conversation with someone seeking wisdom and personal growth.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages: [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
        { role: "user", content: userMessage }
      ],
      max_completion_tokens: 8192,
    });

    return response.choices[0]?.message?.content || "I apologize, but I'm having trouble formulating my thoughts at the moment. Please try again.";
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate response from AI");
  }
}
