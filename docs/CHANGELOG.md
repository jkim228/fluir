# Changelog

## 2026-05-25 — Passage Generation (initial implementation)

Bootstrapped the full React app and implemented the passage reading view matching `passage_v1.png`.

**Added:**
- Vite + React project scaffold with Tailwind CSS and design tokens from the HTML design system
- `src/lib/passages.js` — 8 mock passages across 7 target words covering everyday Portuguese contexts
- `src/lib/utils.js` — `cn()` helper (clsx + tailwind-merge)
- `src/hooks/usePassage.js` — selects and cycles passages for a given target word
- `src/components/passage/PassageText.jsx` — tokenizes passage text into tappable word spans
- `src/components/passage/WordHighlight.jsx` — individual word token with target-word highlighting
- `src/components/passage/PassageView.jsx` — passage card + action row (Reveal / Mark as Learned / Recycle)
- `src/components/layout/Header.jsx` — Fluir wordmark
- `src/components/layout/BottomNav.jsx` — floating pill nav (Read · Words · Settings)
- `src/views/ReadingView.jsx` — composes passage view with hooks
- `src/App.jsx` — top-level view/state routing
- 4 passing tests for `PassageText` covering word rendering, target styling, and tap callbacks
