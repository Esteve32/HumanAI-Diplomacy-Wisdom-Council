# Portrait Harmonization Guide

## Overview

All 51 wise figure portraits have been harmonized with a consistent vintage/sepia visual treatment to create a cohesive "Wisdom from the Past" aesthetic while preserving each individual's unique character.

## Processing Applied

The following ImageMagick operations are applied to each portrait:

1. **Saturation Reduction** (-modulate 100,40,100): Reduces color intensity to 40% for a more muted, historical appearance
2. **Warm Tone Overlay** (-fill '#C89858' -colorize 15%): Adds 15% sepia/warm tone overlay
3. **Vignette Effect** (-vignette 0x50): Subtle darkening at edges for depth and focus

## Batch Processing Command

To apply this treatment to all portraits in the original directory:

```bash
for file in attached_assets/generated_images_original/*.png; do
  filename=$(basename "$file")
  convert "$file" \
    -modulate 100,40,100 \
    -fill '#C89858' -colorize 15% \
    -vignette 0x50 \
    "attached_assets/generated_images/$filename"
done
```

## Directory Structure

- **Source**: `attached_assets/generated_images_original/` - Original unprocessed portraits
- **Output**: `attached_assets/generated_images/` - Harmonized portraits used by the application
- **Hero Image**: Also copied to output directory for consistency

## Regeneration

If new portraits are added or the visual treatment needs adjustment:

1. Place original portraits in `attached_assets/generated_images_original/`
2. Modify the ImageMagick parameters in the command above as needed
3. Run the batch processing command
4. Verify visual consistency across all portraits

## Technical Notes

- Processing preserves PNG format and transparency
- Each portrait maintains its unique characteristics while sharing a cohesive visual language
- Treatment is subtle enough to preserve individual character details
- Background vignette adds professional polish without overwhelming the subject

## Credits

Generated: November 20, 2025
Tool: ImageMagick 7.x
