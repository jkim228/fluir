# pt-pt — Claude Rules

## 1. Project Context
A lightweight language learning app focused on acquiring European Portuguese vocabulary through reading in context. Users maintain a personal vocabulary bank. For each word, the app generates short passages in European Portuguese that naturally include that word. Users reinforce learning by reading, tapping unfamiliar words, and choosing whether they know the word or want to review it again later.


Before starting any task:
- Read `/docs/REQUIREMENTS.md` to find the relevant requirements doc, then read only that doc
- Read `/docs/DESIGN.md` for design tokens, spacing, and typography
- When writing or updating requirements, only capture user-observable behavior and design intent — not implementation details, spacing values, class names, or animation durations. Those live in code, not requirements. 
- ✅ "Entire column highlights when dragging over it — no card-level drop indicator"
- ✅ "Trash zone is only visible while dragging"
- ❌ "Column highlight uses bg-blue-50"
- ❌ "Trash zone fades in with opacity over 200ms"
- ❌ "Gap between cards is gap-3"
- Review requirements (before any implementation)

After completing any task:
- Update the relevant `/docs/requirements/` file — mark items `[x]` and add implementation notes
- Update `/docs/CHANGELOG.md` with a summary of what was implemented
- If you deviated from a requirement, add a row to the relevant requirements doc with a "+" instead of a "-" at the beginning of the row 

---

## 2. Tech Stack
[TBD] 

---
## 3. File Structure

```
/src
  /components
    /word       → WordCard, WordList, AddWordInput
    /passage    → PassageView, PassageText, WordHighlight
    /review     → ReviewCard, ReviewQueue
    /layout     → Header, Nav
    /ui         → reusable primitives (Button, Input, etc.)
  /hooks        → useWordBank, usePassage, useReview, etc.
  /lib          → helpers, constants, types
  /views        → VocabBankView, ReadingView, ReviewView
/docs
  REQUIREMENTS.md         ← index only
  DESIGN.md
  CHANGELOG.md
  /requirements           ← one file per feature area
  /design                 ← screenshots, exported assets
```

- `App.jsx` contains only: word state, word operations, view state, and view rendering
- Never add components, UI, or logic to `App.jsx`
- New component → `/src/components/{category}/ComponentName.jsx`
- New view → `/src/views/ViewName.jsx`
- New hook → `/src/hooks/useHookName.js`
- Before creating any file, check if a suitable one already exists. Ask before creating a new file.


## 4. Code Style

### General
- Use named exports, not default exports (except for page-level components)
- Use TypeScript-style JSDoc comments for any complex function
- Prefer early returns over nested conditionals
- No commented-out code — delete it or add a TODO with a reason

### Components
- One component per file
- File name matches component name (PascalCase): `WordCard.jsx`
- Keep components under 150 lines — split if longer
- Props should be destructured at the top of the function
- No prop drilling more than 2 levels deep — lift state or use context
- Prefer early returns over nested conditionals
- No commented-out code — delete it or add a `// TODO:` with a reason
- No `console.log` in committed code
- JSDoc comments on any complex function

### Naming
- Components: PascalCase → `WordCard`, `PassageView`
- Hooks: camelCase with `use` prefix → `useWordBank`, `useReview`
- Event handlers: `handle` prefix → `handleWordTap`, `handleWordAdd`
- Boolean props/state: `is` or `has` prefix → `isKnown`, `hasError`
- Constants: SCREAMING_SNAKE_CASE → `MAX_WORDS`, `DEFAULT_VIEW`

### Tailwind
- Never use arbitrary values unless absolutely necessary (prefer design tokens)
- Group Tailwind classes: layout → spacing → typography → color → animation
- Use `cn()` utility for conditional class merging (install clsx + tailwind-merge if not present)
- Never use `!important`

---

## 5. Scope Rules 
- Only modify files directly related to the current task
- Never refactor unrelated code while implementing a feature
- Never change existing component APIs without flagging it first
- If a change requires touching more than 3 files, stop and ask for confirmation
- Do not install new dependencies without flagging them first

---


## 6. Requirements Review (before any implementation)
- When given a new requirement or feature request:
1. Read REQUIREMENTS.md index to find all related feature areas
2. Read each related requirements file and evaluate whether the requirements fit, extends, or conflicts with the existing requirements
3. Then:
   - **Fits** — no conflicts, proceed with implementation
   - **Extends** — add a sub-bullet to the existing `[x]` item it builds on, noting the new behavior, then proceed
   - **Conflicts** — explain the conflict and the specific file + item it comes from, and ask how to resolve before writing any code 

---

## 7. Testing
- Every new feature needs at least one test before the task is considered done
- Tests go in __tests__ folder adjacent to source
- Test behavior, not implementation — no testing internal state or private functions
- Each test should map to a requirement in REQUIREMENTS.md
- Use `userEvent` over `fireEvent` for simulating user interactions
- Mock nothing unless absolutely necessary

---

## 8. Output Rules
- Always output the full content of every file — never truncate
- Never use placeholders like `// ... existing code` or `// ... rest of component`
- If a file is too long to output in one response, split across multiple responses and say so
