# Tap-to-Translate

## User Story

As a learner, I want to tap any word in a passage to quickly understand its meaning without leaving the reading experience.

---

## Requirements

### Tapping
- [x] Every word in a generated passage is tappable
  - Implemented via `WordHighlight` — every token rendered as a `role="button"` span
- [x] Tapping a word shows a popover anchored near the tapped word
  - `TranslationPopover` renders fixed-positioned above the tapped element, managed in `PassageView`
- [x] Tapped word shows a highlighted state (dark green text, light green background)
  - `isSelected` prop on `WordHighlight` applies `text-moss-dim bg-moss-pale`

### Popover Content
- [x] Popover displays the tapped word in Portuguese
  - `TranslationPopover` renders word in large Playfair Display, moss-dim
- [x] Popover displays the English translation of the tapped word
  - Looked up via `getTranslation()` from `src/lib/translations.js`
- [x] Popover displays an example sentence in Portuguese using the tapped word
  - Rendered beneath a divider in italic Playfair Display

### Dismissal
- [x] User can dismiss the popover by tapping outside of it
  - `pointerdown` listener in `TranslationPopover` calls `onDismiss` when target is outside popover and anchor
- [x] User can dismiss the popover by tapping the same word again
  - `handleWordTap` in `PassageView` clears selection when the same word is tapped twice
