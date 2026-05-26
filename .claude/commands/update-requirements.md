Propose additions or updates to the `/docs/requirements/` folder based on a feature description or user prompt.

## Steps

1. **Read the index**: Read `/docs/REQUIREMENTS.md` to understand all existing feature areas and their file mappings.

2. **Read all existing requirement files** listed in the index table.

3. **Analyze the user's prompt** — extract the user-observable behavior and design intent being described. Strip out implementation details (class names, durations, spacing values, etc.).

4. **Classify each piece of behavior** against the existing requirements:
   - **Fits** — directly matches an existing requirement (no action needed, note it)
   - **Extends** — builds on an existing requirement (add a sub-bullet under that item)
   - **Conflicts** — contradicts an existing requirement (flag it, do not write anything — ask user to resolve)
   - **New** — belongs to an existing feature file but is a new requirement (add to that file)
   - **New file** — covers a feature area not yet tracked (propose creating a new file)

5. **Show a proposed diff** for every file that would change:
   - Format as a clear before/after or a bulleted list of additions, grouped by file
   - For new files, show the full proposed content
   - Do NOT write any files yet

6. **Ask the user to confirm** before writing anything:
   > "Should I apply these changes?"

7. **On confirmation**, write the changes:
   - Update existing requirement files
   - Create new requirement files if needed
   - Update `/docs/REQUIREMENTS.md` index if a new feature file was added (add a row to the Feature Areas table with status `In progress`)

## Rules

- Only capture user-observable behavior and design intent — not implementation details, spacing values, class names, or animation durations
- ✅ "Entire column highlights when dragging over it"
- ✅ "Trash zone is only visible while dragging"
- ❌ "Column highlight uses bg-blue-50"
- ❌ "Trash zone fades in with opacity over 200ms"
- New files go in `/docs/requirements/` and use kebab-case filenames
- New files must include: `# Title`, `## User Story`, `## Requirements` with grouped sub-sections
- Each requirement line uses `- [ ]` (unchecked) since it's newly proposed
- Never mark items `[x]` — that's done after implementation
- Do not touch any source code files
- If the prompt is ambiguous, ask a clarifying question before proposing anything

## Invocation

The user's prompt (after `/update-requirements`) is the feature description to analyze.

If no prompt is given, ask: "What feature or behavior would you like to add to the requirements?"
