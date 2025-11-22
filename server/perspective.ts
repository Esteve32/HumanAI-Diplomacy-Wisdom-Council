const HARMFUL_PATTERNS_FALLBACK = {
  'hate-speech': [
    /\b(kill|murder|genocide|exterminate|eliminate|gas)\s+(all|the|those)?\s*(jews|muslims|christians|blacks|whites|asians|lgbtq|gays|trans|immigrants|refugees|women|men)/i,
    /\b(n[i1!]gg[ae3]r|f[a4]gg[o0]t|ch[i1!]nk|sp[i1!]c|k[i1!]ke|r[e3]t[a4]rd|tr[a4]nn[y1!]|wetback|towelhead|raghead)\b/i,
    /\b(jews|blacks|muslims|gays|trans|women|immigrants|asians|arabs).{0,40}(control|rule|destroy|subhuman|inferior|deserve\s+(to\s+)?die|should\s+die)/i,
    /\b(i\s+)?(hate|despise|loathe)\s+(all\s+)?(jews|blacks|muslims|gays|trans|women|immigrants|asians)/i,
    /\b(jews?|blacks?|muslims?|gays?|transgenders?).{0,30}(are\s+)?(animals?|vermin|parasites?|disease|cancer|trash|scum)/i,
    /\bgas\s+the\s+jews/i,
    /\bhitler\s+(was|did)\s+(right|nothing\s+wrong)/i,
    /\b(white|black|jewish)\s+(supremacy|power|pride).{0,30}(forever|rules?|superior)/i,
  ],
  'explicit-violence': [
    /\b(how\s+to|ways\s+to|steps\s+to|guide\s+to|instructions\s+to)\s+(kill|murder|harm|torture|assault|shoot|stab|beat|attack|poison|maim)/i,
    /\b(i\s+ll|i\s+will|i\s+m\s+a|imma|ima|gonna|going\s+to)\s+(kill|murder|hurt|harm|attack|shoot|stab|beat|torture|burn)\s+(yo?u|you|u|him|her|them|everyone|people|someone|myself)/i,
    /\b(i\s+)?(want|will|gonna|need|going|wanna)\s+(to\s+)?(kill|murder|hurt|harm|attack|shoot|stab|beat|torture)\s+(you|yo?u|u|him|her|them|everyone|people|someone|myself)/i,
    /\b(i\s+m|i\s+am|im|imma|ima)\s+(going\s+to|gonna|planning\s+to)?\s+(hurt|kill|murder|attack|shoot|stab)\s+(yo?u|you|u|people|someone|them)/i,
    /\b(help\s+me|how\s+to|teach\s+me|show\s+me).{0,20}(poison|kill|murder|attack|torture)\s+(someone|people|them|him|her)/i,
    /\b(build|make|create|construct|assemble).{0,20}(a\s+)?(bomb|explosive|weapon|gun|rifle|grenade|ied)/i,
    /\b(mass|school|workplace)\s+(shooting|stabbing|attack|murder|killing|massacre)/i,
    /\b(shooting\s+up|shoot\s+up|bomb|attack)\s+(the|this|that)?\s*(school|place|building|office)/i,
    /\b(planning|preparing|ready).{0,20}(mass\s+)?(shooting|attack|killing|murder)/i,
    /\bi\s+(hope|wish)\s+(yo?u|you|u)\s+(die|get\s+killed|suffer|burn)/i,
    /\b(yo?u|you|u|they)\s+deserve\s+to\s+(die|be\s+killed|suffer|burn)/i,
  ],
  'explicit-sexual': [
    /\b(child|minor|kid|kids|underage|young\s+girl|young\s+boy|toddler|baby|infant).{0,50}(sexual|porn|nude|naked|molest|rape|touch|abuse|lust|desire|sexy)/i,
    /\b(rape|molest|abuse|assault|force).{0,40}(how\s+to|guide|fantasy|story|want\s+to|going\s+to|plan\s+to)/i,
    /\b(incest|pedophile|pedo|pedoph[i1]le|cp|csam|child\s+porn|kiddie\s+porn)/i,
    /\b(loli|shota|lolicon|shotacon)/i,
    /\bhow\s+to\s+groom\s+(a\s+)?(child|minor|kid)/i,
    /\b(sex|sexual).{0,20}(with|involving)\s+(child|minor|kid|underage)/i,
  ],
  'self-harm-extreme': [
    /\b(how\s+to|best\s+way\s+to|methods\s+to|want\s+to|going\s+to|will|gonna|planning\s+to|should\s+just|need\s+to)\s+(kill\s+myself|commit\s+suicide|end\s+my\s+life|die|overdose|end\s+it\s+all|unalive\s+myself)/i,
    /\b(i\s+)?(am|m|feel|feeling)\s+(suicidal|depressed\s+and\s+suicidal)/i,
    /\b(i\s+)?(want|will|gonna|should|need|going|wanna)\s+(to\s+)?(die|kill\s+myself|end\s+it|commit\s+suicide|hurt\s+myself|cut\s+myself|unalive|disappear)/i,
    /\bi\s*(m|am)?\s+(going\s+to|planning\s+to|about\s+to|ready\s+to|gonna)\s+(end\s+it|kill\s+myself|die\s+tonight|overdose|hang\s+myself|jump\s+off|unalive)/i,
    /\b(end\s+it\s+all|take\s+my\s+life|stop\s+living|unalive\s+myself)/i,
    /\b(suicide|overdose|hanging|jumping|unalive)\s+(method|technique|guide|plan|ways|tonight|today)/i,
    /\b(life\s+is\s+not\s+worth|tired\s+of\s+living|ready\s+to\s+die|goodbye\s+world|goodbye\s+everyone|please\s+kill\s+me)/i,
    /\bcan\s*t\s+take\s+(it|this)\s+(anymore|any\s+longer)/i,
    /\b(done\s+with\s+life|end\s+the\s+pain|make\s+it\s+stop)/i,
    /\b(kill|hang)\s+(yo?u?rselves?|yourselves?|urselves?|yo?u)/i,
    /\b(yo?u\s+all|you\s+all|u\s+all|yo?u|you|u)\s+(all\s+)?should\s+.{0,30}(die|kill\s+yourselves?|kill\s+yo?urselves?|end\s+it|unalive)/i,
    /\bdo\s+the\s+world\s+a\s+favor\s+and\s+(die|kill\s+yourself|unalive)/i,
    /\b(kys|kms|k\s+y\s+s|k\s+m\s+s)\b/i,
    /\bhang\s+(yourselves?|urselves?|yo?urselves?)/i,
    /\bdie\s+(pls|please|plz)/i,
    /\b(i\s+)?(want|wanna|need)\s+(to\s+)?unalive/i,
  ]
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function applyFallbackModeration(text: string): ModerationResult {
  const normalizedText = normalizeText(text);
  
  for (const [category, patterns] of Object.entries(HARMFUL_PATTERNS_FALLBACK)) {
    for (const pattern of patterns) {
      if (pattern.test(normalizedText)) {
        console.warn(`🛡️  [FALLBACK] Blocked harmful content - Category: ${category}`);
        
        let message = `This message appears to contain harmful content. Our AI is designed to provide wisdom and personal growth support.`;
        
        if (category === 'self-harm-extreme') {
          message = `I'm concerned about your wellbeing. Please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7) for immediate support. Our AI is designed for philosophical growth, not crisis intervention.`;
        } else if (category === 'explicit-violence') {
          message = `This content describes harmful behavior. If you're experiencing thoughts of harming yourself or others, please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7).`;
        }
        
        return {
          flagged: true,
          categories: [category],
          scores: {},
          message
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
const PERSPECTIVE_API_ENDPOINT = 'https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze';

const TOXICITY_THRESHOLDS = {
  SEVERE_TOXICITY: 0.6,
  THREAT: 0.6,
  IDENTITY_ATTACK: 0.7,
  TOXICITY: 0.75,
  INSULT: 0.8,
  PROFANITY: 0.85
};

const CRISIS_MESSAGE = "If you're experiencing distress, please contact the Finland Mental Health Crisis Line at 09 2525 0111 (available 24/7).";

export async function moderateContent(text: string): Promise<ModerationResult> {
  if (!text || text.trim().length === 0) {
    return { flagged: false, categories: [], scores: {} };
  }

  if (!PERSPECTIVE_API_KEY) {
    console.warn('⚠️  PERSPECTIVE_API_KEY not configured - using fallback keyword moderation');
    return applyFallbackModeration(text);
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

    const url = `${PERSPECTIVE_API_ENDPOINT}?key=${PERSPECTIVE_API_KEY}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(analyzeRequest)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Perspective API returned ${response.status}: ${errorText}`);
    }

    const data: PerspectiveResponse = await response.json();
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

    console.log('✅ Perspective API: Content passed moderation');
    return { flagged: false, categories: [], scores };

  } catch (error: any) {
    console.error('❌ Perspective API error:', error.message);
    
    if (error.message?.includes('400') || error.message?.includes('API key')) {
      console.error('❌ Invalid API key or quota exceeded - falling back to keyword moderation');
    }

    console.warn('⚠️  Falling back to keyword moderation due to API error');
    return applyFallbackModeration(text);
  }
}
