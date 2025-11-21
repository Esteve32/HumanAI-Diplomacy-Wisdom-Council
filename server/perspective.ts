import { google } from 'googleapis';

const HARMFUL_PATTERNS_FALLBACK = {
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

function applyFallbackModeration(text: string): ModerationResult {
  const lowerText = text.toLowerCase();
  
  for (const [category, patterns] of Object.entries(HARMFUL_PATTERNS_FALLBACK)) {
    for (const pattern of patterns) {
      if (pattern.test(lowerText)) {
        console.warn(`🛡️  [FALLBACK] Blocked harmful content - Category: ${category}`);
        return {
          flagged: true,
          categories: [category],
          scores: {},
          message: `This message appears to contain harmful content. Our AI is designed to provide wisdom and personal growth support. If you're in crisis, please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7).`
        };
      }
    }
  }
  
  return { flagged: false, categories: [], scores: {} };
}

interface PerspectiveScore {
  value: number;
  type: string;
}

interface PerspectiveAttribute {
  summaryScore: PerspectiveScore;
  spanScores?: Array<{
    begin: number;
    end: number;
    score: PerspectiveScore;
  }>;
}

interface PerspectiveResponse {
  attributeScores: {
    TOXICITY?: PerspectiveAttribute;
    SEVERE_TOXICITY?: PerspectiveAttribute;
    IDENTITY_ATTACK?: PerspectiveAttribute;
    INSULT?: PerspectiveAttribute;
    PROFANITY?: PerspectiveAttribute;
    THREAT?: PerspectiveAttribute;
  };
  languages: string[];
}

export interface ModerationResult {
  flagged: boolean;
  categories: string[];
  scores: Record<string, number>;
  message?: string;
}

const PERSPECTIVE_API_KEY = process.env.PERSPECTIVE_API_KEY;

const TOXICITY_THRESHOLDS = {
  SEVERE_TOXICITY: 0.6,
  THREAT: 0.6,
  IDENTITY_ATTACK: 0.7,
  TOXICITY: 0.75,
  INSULT: 0.8,
  PROFANITY: 0.85
};

const CRISIS_MESSAGE = "If you're experiencing distress, please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7).";

let perspectiveClient: any = null;

function initializePerspectiveClient() {
  if (!PERSPECTIVE_API_KEY) {
    console.warn('⚠️  PERSPECTIVE_API_KEY not set - moderation disabled');
    return null;
  }

  if (!perspectiveClient) {
    perspectiveClient = google.commentanalyzer({
      version: 'v1alpha1',
      auth: PERSPECTIVE_API_KEY
    });
  }

  return perspectiveClient;
}

export async function moderateContent(text: string): Promise<ModerationResult> {
  const client = initializePerspectiveClient();

  if (!client) {
    console.warn('⚠️  PERSPECTIVE_API_KEY not configured - using fallback keyword moderation');
    return applyFallbackModeration(text);
  }

  if (!text || text.trim().length === 0) {
    return { flagged: false, categories: [], scores: {} };
  }

  try {
    const analyzeRequest = {
      comment: { text: text.substring(0, 3000) },
      requestedAttributes: {
        TOXICITY: {},
        SEVERE_TOXICITY: {},
        IDENTITY_ATTACK: {},
        INSULT: {},
        PROFANITY: {},
        THREAT: {}
      },
      languages: ['en'],
      doNotStore: true
    };

    const response = await (client.comments.analyze as any)({
      key: PERSPECTIVE_API_KEY,
      resource: analyzeRequest
    });

    const data: PerspectiveResponse = response.data;
    const scores: Record<string, number> = {};
    const flaggedCategories: string[] = [];

    for (const [attribute, threshold] of Object.entries(TOXICITY_THRESHOLDS)) {
      const attrData = data.attributeScores[attribute as keyof typeof data.attributeScores];
      if (attrData) {
        const score = attrData.summaryScore.value;
        scores[attribute] = score;

        if (score >= threshold) {
          flaggedCategories.push(attribute);
        }
      }
    }

    if (flaggedCategories.length > 0) {
      console.warn(`🛡️  Content flagged by Perspective API - Categories: ${flaggedCategories.join(', ')}`);
      
      let message = "This content may violate our community guidelines.";
      
      if (flaggedCategories.includes('THREAT') || flaggedCategories.includes('SEVERE_TOXICITY')) {
        message = `Your message contains harmful content. ${CRISIS_MESSAGE}`;
      }

      return {
        flagged: true,
        categories: flaggedCategories,
        scores,
        message
      };
    }

    return { flagged: false, categories: [], scores };

  } catch (error: any) {
    console.error('❌ Perspective API error:', error.message);
    
    if (error.code === 400 || error.message?.includes('API key')) {
      console.error('❌ Invalid API key or quota exceeded - falling back to keyword moderation');
    }

    console.warn('⚠️  Falling back to keyword moderation due to API error');
    return applyFallbackModeration(text);
  }
}
