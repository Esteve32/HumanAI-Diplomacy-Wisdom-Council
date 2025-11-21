# Google Perspective API Setup Instructions

## What is Perspective API?
Google Perspective API is a **free**, production-grade content moderation service that uses machine learning to detect toxic, threatening, hateful, and harmful content. It's used by the New York Times, Reddit, and Wall Street Journal, processing 500M+ requests daily.

## Why We're Using It
- ✅ **Free** (no cost for moderation)
- ✅ **Production-ready** (battle-tested by major platforms)
- ✅ **ML-powered** (catches nuanced harmful content that regex can't)
- ✅ **ACX-compliant** (deterministic, auditable content safety)
- ✅ **Privacy-friendly** (`doNotStore` flag for GDPR compliance)

## Setup Steps (Takes ~10 minutes)

### 1. Create Google Cloud Project
1. Go to https://console.cloud.google.com
2. Click "Select a project" → "New Project"
3. Name it "Wisdom Council" (or your choice)
4. Click "Create"

### 2. Enable Perspective API
1. In Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Perspective Comment Analyzer API"
3. Click on it and press "Enable"

### 3. Get API Key
1. Go to "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API key"
3. Copy the API key (looks like: `AIzaSy...`)
4. **Important**: Click "Restrict Key" and select only "Perspective Comment Analyzer API"

### 4. Register for API Access (Required)
1. Go to https://developers.perspectiveapi.com
2. Click "Get Started" or fill out the registration form
3. Provide your Google Cloud project name
4. **Approval typically takes <1 hour** (sometimes minutes)

### 5. Add API Key to Replit
1. In Replit, go to "Secrets" tab (or Tools → Secrets)
2. Add a new secret:
   - Key: `PERSPECTIVE_API_KEY`
   - Value: Your API key from step 3
3. Click "Add secret"

### 6. Verify Integration
The code is already integrated. Once you add the API key:
1. The server will automatically use Perspective API for all content moderation
2. Check server logs for: `🛡️ Content flagged by Perspective API` (if harmful content detected)
3. Test with a chat message - legitimate content should pass through

## What It Detects

The system checks for 6 types of harmful content:

| Attribute | Threshold | Description |
|-----------|-----------|-------------|
| SEVERE_TOXICITY | 0.6 | Very hateful, aggressive content |
| THREAT | 0.6 | Intent to inflict harm |
| IDENTITY_ATTACK | 0.7 | Hate speech targeting identities |
| TOXICITY | 0.75 | Rude, disrespectful, unreasonable comments |
| INSULT | 0.8 | Insulting, inflammatory language |
| PROFANITY | 0.85 | Swear words, obscene language |

## Hybrid Moderation Strategy (ACX Compliance)

The system uses a **two-tier approach** for maximum reliability:

**Tier 1 - Perspective API (Primary):**
When `PERSPECTIVE_API_KEY` is configured:
- Uses Google's ML-powered toxicity detection
- 6 attributes scored: TOXICITY, SEVERE_TOXICITY, THREAT, IDENTITY_ATTACK, INSULT, PROFANITY
- Production-grade accuracy (NYT, Reddit, WSJ use it)

**Tier 2 - Keyword Filter (Fallback):**
When API key is missing OR API fails:
- Deterministic regex-based filtering with text normalization
- Normalizes text (case, punctuation, Unicode) before pattern matching
- Blocks 40+ harmful patterns across 4 categories:
  - **Hate speech**: Slurs, genocide threats, supremacy rhetoric (8 patterns)
  - **Explicit violence**: Murder/attack planning, threats, weapons (9 patterns)
  - **Sexual exploitation**: Child abuse, grooming, rape (6 patterns)
  - **Self-harm**: Suicide methods, immediate danger expressions (11 patterns)
- Logs warning: "Using fallback keyword moderation"
- Category-specific crisis messaging

**Benefits:**
- ✅ Platform always operational (even without API key)
- ✅ Deterministic safety baseline (keyword filter)
- ✅ Best-in-class protection when API available (Perspective)
- ✅ Graceful degradation on API errors

## Cost
**FREE** - Google Perspective API has no cost for the moderation endpoint.

## Privacy Compliance (Finland/EU)
- All requests use `doNotStore: true` flag
- No user data is retained by Google
- GDPR-compliant by default

## Testing

### Harmful Content (Should Block)
Try these in a chat to verify moderation works:
- "You're an idiot" (high toxicity)
- "I will hurt you" (threat)
- Slurs/hate speech (identity attack)

### Safe Content (Should Pass)
- "I'm feeling sad and need support"
- "Can you help me understand depression?"
- "Tell me about philosophy"

## Troubleshooting

**"Content flagged" when it shouldn't be:**
- Perspective API is conservative
- Adjust thresholds in `server/perspective.ts` (TOXICITY_THRESHOLDS)

**API errors in logs:**
- Check API key is correct
- Verify API is enabled in Google Cloud
- Check Perspective API registration is approved

**No moderation happening:**
- Verify `PERSPECTIVE_API_KEY` secret is set
- Check server logs for initialization message
- Ensure googleapis package is installed

## Documentation
- Official docs: https://developers.perspectiveapi.com
- API reference: https://developers.perspectiveapi.com/s/docs
- Support: https://developers.perspectiveapi.com (contact form)

## Next Steps for Beta
- Add automated tests for moderation
- Implement user appeal system
- Fine-tune thresholds based on real usage
- Add admin dashboard for flagged content review
