import OpenAI from "openai";

// This is using Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own OpenAI API key.
// Charges are billed to your Replit credits.
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

export interface ModerationResult {
  flagged: boolean;
  categories: string[];
  message?: string;
}

const HARMFUL_PATTERNS = {
  'hate-speech': [
    /\b(kill|murder|genocide|exterminate|eliminate)\s+(all\s+)?(jews|muslims|christians|blacks|whites|asians|lgbtq|gays|trans|immigrants|refugees)/i,
    /\b(n[i1!]gg[ae3]r|f[a4]gg[o0]t|ch[i1!]nk|sp[i1!]c|k[i1!]ke|r[e3]t[a4]rd|tr[a4]nn[y1!])\b/i,
    /\b(jews|blacks|muslims|gays).{0,30}(control|rule|destroy|subhuman|inferior|deserve\s+to\s+die)/i,
  ],
  'explicit-violence': [
    /\b(how\s+to|ways\s+to|steps\s+to|guide\s+to|want\s+to|going\s+to|will|planning|could|help\s+me)\s+(kill|murder|harm|torture|assault|shoot|stab|beat|attack|poison)/i,
    /\b(i\s+(want|will|gonna|need|could|hate\s+you\s+so\s+much\s+i\s+could))\s+(kill|murder|hurt|harm|attack)\s+(myself|you|him|her|them|everyone|people|someone)/i,
    /\b(i\s+want\s+to\s+hurt|help\s+me\s+poison)\s+(others|people|someone|myself|them)/i,
    /\b(build|make|create|buy|get|help.{0,10}poison).{0,20}(bomb|weapon|explosive|poison|gun|rifle)/i,
    /\b(mass|school)\s+(shooting|stabbing|attack|murder|killing)/i,
    /\b(planning|going\s+to)\s+(shoot|stab|attack|kill)\s+(people|students|workers|someone)/i,
  ],
  'explicit-sexual': [
    /\b(child|minor|kid|kids|underage|young\s+girl|young\s+boy).{0,50}(sexual|porn|nude|naked|molest|rape|touch|abuse)/i,
    /\b(rape|molest|abuse|assault).{0,30}(how|guide|fantasy|story|want\s+to|going\s+to)/i,
    /\b(incest|pedophile|pedo|loli|shota)/i,
  ],
  'self-harm-extreme': [
    /\b(how\s+to|best\s+way\s+to|methods\s+to|want\s+to|going\s+to|will|gonna|planning\s+to|should\s+just)\s+(kill\s+myself|commit\s+suicide|end\s+my\s+life|die|overdose|end\s+it\s+all)/i,
    /\b(i\s+(want|will|gonna|should|need)\s+to)\s+(die|kill\s+myself|end\s+it|commit\s+suicide|hurt\s+myself)/i,
    /\b(i'?m\s+going\s+to|i\s+should\s+just)\s+(end\s+it|kill\s+myself|die\s+tonight|overdose|hang\s+myself|end\s+it\s+all)/i,
    /\b(end\s+it\s+all).{0,20}(tonight|today|now)/i,
    /\b(suicide|overdose|hanging|cutting|self\-?harm)\s+(method|technique|guide|plan|ways|tonight|today)/i,
    /\b(life\s+is\s+not\s+worth|tired\s+of\s+living|ready\s+to\s+die|goodbye\s+world|please\s+kill\s+me)/i,
    /\b(can't\s+take\s+it|done\s+with\s+life|want\s+to\s+disappear|end\s+the\s+pain).{0,20}(anymore|forever|tonight|today)/i,
  ]
};

export async function moderateContent(text: string): Promise<ModerationResult> {
  const lowerText = text.toLowerCase();
  
  for (const [category, patterns] of Object.entries(HARMFUL_PATTERNS)) {
    for (const pattern of patterns) {
      if (pattern.test(lowerText)) {
        console.warn(`🛡️  Blocked harmful content - Category: ${category}`);
        return {
          flagged: true,
          categories: [category],
          message: `This message appears to contain harmful content related to ${category.replace('-', ' ')}. Our AI is designed to provide wisdom and personal growth support, not harmful information. If you're in crisis, please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7).`
        };
      }
    }
  }
  
  return { flagged: false, categories: [] };
}

export interface PersonaContext {
  name: string;
  era: string;
  bio: string;
  title: string;
}

export async function generatePersonaResponse(
  persona: PersonaContext,
  userMessage: string,
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>,
  skipModeration: boolean = false
): Promise<string> {
  if (!skipModeration) {
    const modResult = await moderateContent(userMessage);
    if (modResult.flagged) {
      throw new Error(modResult.message || "Content moderation flagged this message");
    }
  }

  const systemPrompt = `You are ${persona.name}, ${persona.title} from ${persona.era}.

IMPORTANT SAFETY INSTRUCTION: If discussing sensitive topics like mental health struggles, depression, or difficult life circumstances, respond with compassion and understanding. Always mention the Finland Mental Health Crisis Line (09 2525 0111, available 24/7) when appropriate.

REFUSAL PROTOCOL: If asked to provide harmful information, illegal advice, or explicit content, politely decline and explain you're here for philosophical wisdom and personal growth. 

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

    const aiResponse = response.choices[0]?.message?.content || "I apologize, but I'm having trouble formulating my thoughts at the moment. Please try again.";
    
    const outboundModResult = await moderateContent(aiResponse);
    if (outboundModResult.flagged) {
      console.error(`🛡️  CRITICAL: AI response contained harmful content - Category: ${outboundModResult.categories.join(", ")}`);
      console.error(`🛡️  Blocked response: ${aiResponse.substring(0, 100)}...`);
      return "I apologize, but I need to reconsider my response. If you're experiencing distress, please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7).";
    }
    
    return aiResponse;
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate response from AI");
  }
}

export async function generateDialogueResponse(
  personaId: number,
  persona: PersonaContext,
  otherPersonaId: number,
  otherPersona: PersonaContext,
  topic: string,
  conversationHistory: Array<{ personaId: number; content: string }>
): Promise<string> {
  const topicModResult = await moderateContent(topic);
  if (topicModResult.flagged) {
    throw new Error(topicModResult.message || "Dialogue topic contains harmful content");
  }

  const recentTurns = conversationHistory.slice(-3);
  for (const turn of recentTurns) {
    const turnModResult = await moderateContent(turn.content);
    if (turnModResult.flagged) {
      console.warn(`🛡️  Blocked harmful content in dialogue history from persona ${turn.personaId}`);
      throw new Error("Dialogue contains harmful content in conversation history");
    }
  }

  const systemPrompt = `You are ${persona.name}, ${persona.title} from ${persona.era}. 

Bio: ${persona.bio}

You are engaged in a dialogue with ${otherPersona.name} (${otherPersona.title} from ${otherPersona.era}) about: "${topic}"

Embody this character authentically:
- Speak in first person as ${persona.name}
- Draw upon your historical wisdom, philosophy, and life experiences
- Reference your known works, teachings, and historical context when relevant
- Maintain your distinct voice, personality, and worldview
- Engage thoughtfully with ${otherPersona.name}'s perspectives
- Build upon or respectfully challenge their ideas
- Keep responses conversational yet profound (aim for 2-3 paragraphs)
- Address ${otherPersona.name} directly when responding to their points

This is a philosophical dialogue - be intellectually curious and substantive while remaining true to your historical character.`;

  const messages: Array<{ role: "user" | "assistant"; content: string }> = [];
  
  for (let i = 0; i < conversationHistory.length; i++) {
    const msg = conversationHistory[i];
    if (msg.personaId === personaId) {
      messages.push({ role: "assistant", content: msg.content });
    } else {
      messages.push({ role: "user", content: `${otherPersona.name}: ${msg.content}` });
    }
  }

  messages.push({ role: "user", content: `Continue the dialogue on "${topic}"` });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      max_completion_tokens: 8192,
    });

    const aiResponse = response.choices[0]?.message?.content || "I apologize, but I'm having trouble formulating my thoughts at the moment.";
    
    const outboundModResult = await moderateContent(aiResponse);
    if (outboundModResult.flagged) {
      console.error(`🛡️  CRITICAL: AI dialogue response contained harmful content - Category: ${outboundModResult.categories.join(", ")}`);
      console.error(`🛡️  Blocked dialogue response from persona ${personaId}`);
      return "I must pause this dialogue as the discussion has taken a concerning turn. If you're experiencing distress, please contact the Finland Mental Health Crisis Line at 09 2525 0111.";
    }
    
    return aiResponse;
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate dialogue response from AI");
  }
}
