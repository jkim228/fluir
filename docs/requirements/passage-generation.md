# Passage Generation

## User Story

As a learner, I want to read short passages that include vocabulary I'm trying to learn so I can absorb words through context instead of memorization.

---

## Requirements

### Word Selection
- [x] App can generate a passage from a single word selected from the word bank
  - Implemented via `usePassage(targetWord)` hook — seed word is `saudade`
- [x] App can generate a passage incorporating multiple saved words
  - Mock passages support multi-word targets; `getPassagesForWord` returns all matching passages

### Passage Content
- [x] Passages are written in European Portuguese
- [x] Passages sound natural to native speakers in Portugal
- [x] Passages draw from everyday contexts (see preferred contexts below)
- [x] Passages are 2–4 sentences long
- [x] Passages target beginner to intermediate comprehension (A2–B1)

### Preferred Contexts

Passages should feel grounded in real Portuguese daily life. Preferred settings include:

- [x] Cafés
- [x] Beach
- [x] Weather
- [x] Errands
- [x] Texting / messaging
- [ ] Family
- [x] Friendships
- [x] Travel
- [x] Daily life in Portugal
