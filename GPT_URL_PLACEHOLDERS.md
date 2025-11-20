# ChatGPT Custom GPT URL Reference

All 51 wise figures are now configured with placeholder ChatGPT URLs. Once you build each custom GPT, use this reference to update the URLs in `client/src/components/VotingSection.tsx`.

## Current Placeholder

All figures currently use: `https://chatgpt.com/g/g-1vf04chMP-jesus-acim`

## How to Update

1. Build your custom GPT in ChatGPT
2. Copy the GPT's shareable URL (format: `https://chatgpt.com/g/g-XXXXXX-name`)
3. Find the figure in `client/src/components/VotingSection.tsx`
4. Replace the `chatUrl` value with your new GPT URL

## Quick Reference - All 51 Figures

| # | ID | Name | Current Status |
|---|---|---|---|
| 1 | simone-de-beauvoir | Simone de Beauvoir | ✅ Placeholder Ready |
| 2 | virginia-woolf | Virginia Woolf | ✅ Placeholder Ready |
| 3 | mary-wollstonecraft | Mary Wollstonecraft | ✅ Placeholder Ready |
| 4 | bell-hooks | Bell Hooks | ✅ Placeholder Ready |
| 5 | socrates | Socrates | ✅ Placeholder Ready |
| 6 | harriet-tubman | Harriet Tubman | ✅ Placeholder Ready |
| 7 | marie-curie | Marie Curie | ✅ Placeholder Ready |
| 8 | marcus-aurelius | Marcus Aurelius | ✅ Placeholder Ready |
| 9 | joan-of-arc | Joan of Arc | ✅ Placeholder Ready |
| 10 | martin-luther-king | Martin Luther King Jr. | ✅ Placeholder Ready |
| 11 | susan-b-anthony | Susan B. Anthony | ✅ Placeholder Ready |
| 12 | lao-tzu | Lao Tzu | ✅ Placeholder Ready |
| 13 | eleanor-roosevelt | Eleanor Roosevelt | ✅ Placeholder Ready |
| 14 | rumi | Rumi | ✅ Placeholder Ready |
| 15 | rosa-parks | Rosa Parks | ✅ Placeholder Ready |
| 16 | frida-kahlo | Frida Kahlo | ✅ Placeholder Ready |
| 17 | mahatma-gandhi | Mahatma Gandhi | ✅ Placeholder Ready |
| 18 | maya-angelou | Maya Angelou | ✅ Placeholder Ready |
| 19 | confucius | Confucius | ✅ Placeholder Ready |
| 20 | sojourner-truth | Sojourner Truth | ✅ Placeholder Ready |
| 21 | leonardo-da-vinci | Leonardo da Vinci | ✅ Placeholder Ready |
| 22 | audre-lorde | Audre Lorde | ✅ Placeholder Ready |
| 23 | nelson-mandela | Nelson Mandela | ✅ Placeholder Ready |
| 24 | buddha | Buddha | ✅ Placeholder Ready |
| 25 | jane-austen | Jane Austen | ✅ Placeholder Ready |
| 26 | albert-einstein | Albert Einstein | ✅ Placeholder Ready |
| 27 | hypatia | Hypatia of Alexandria | ✅ Placeholder Ready |
| 28 | aristotle | Aristotle | ✅ Placeholder Ready |
| 29 | teresa-of-avila | Teresa of Ávila | ✅ Placeholder Ready |
| 30 | malcolm-x | Malcolm X | ✅ Placeholder Ready |
| 31 | carl-jung | Carl Jung | ✅ Placeholder Ready |
| 32 | ada-lovelace | Ada Lovelace | ✅ Placeholder Ready |
| 33 | frederick-douglass | Frederick Douglass | ✅ Placeholder Ready |
| 34 | maria-montessori | Maria Montessori | ✅ Placeholder Ready |
| 35 | cleopatra | Cleopatra VII | ✅ Placeholder Ready |
| 36 | plato | Plato | ✅ Placeholder Ready |
| 37 | mother-teresa | Mother Teresa | ✅ Placeholder Ready |
| 38 | hannah-arendt | Hannah Arendt | ✅ Placeholder Ready |
| 39 | nikola-tesla | Nikola Tesla | ✅ Placeholder Ready |
| 40 | sappho | Sappho | ✅ Placeholder Ready |
| 41 | vincent-van-gogh | Vincent van Gogh | ✅ Placeholder Ready |
| 42 | emily-dickinson | Emily Dickinson | ✅ Placeholder Ready |
| 43 | zora-neale-hurston | Zora Neale Hurston | ✅ Placeholder Ready |
| 44 | avicenna | Avicenna (Ibn Sina) | ✅ Placeholder Ready |
| 45 | dorothy-day | Dorothy Day | ✅ Placeholder Ready |
| 46 | jesus-christ | Jesus Christ | ✅ LIVE (ACIM GPT) |
| 47 | sun-tzu | Sun Tzu | ✅ Placeholder Ready |
| 48 | pythagoras | Pythagoras | ✅ Placeholder Ready |
| 49 | moses | Moses | ✅ Placeholder Ready |
| 50 | krishna | Krishna | ✅ Placeholder Ready |
| 51 | hermes-trismegistus | Hermes Trismegistus | ✅ Placeholder Ready |

## Batch Replacement Tips

### Option 1: Find and Replace in Editor
1. Open `client/src/components/VotingSection.tsx`
2. Search for the figure's name (e.g., "Socrates")
3. Replace its chatUrl with your new GPT URL

### Option 2: Command Line (for batch updates)
```bash
# Example: Update Socrates GPT URL
sed -i '/id: "socrates"/,/chatUrl/ s|https://chatgpt.com/g/g-1vf04chMP-jesus-acim|https://chatgpt.com/g/g-YOUR-NEW-GPT-ID|' client/src/components/VotingSection.tsx
```

## Notes

- Jesus Christ already has the live ACIM GPT URL: `https://chatgpt.com/g/g-1vf04chMP-jesus-acim`
- All other 50 figures use this as a placeholder for testing
- When you replace a URL, the "Chat with [Name]" button on each figure's card will link to the correct GPT
- The placeholder URL currently works and links to the Jesus ACIM GPT for testing purposes

## Testing

After updating URLs, verify:
1. Click "Chat with [Figure Name]" on their card
2. Confirm it opens the correct custom GPT
3. Test the conversation flow in ChatGPT

---

Last Updated: November 20, 2025
