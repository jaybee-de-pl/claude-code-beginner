# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

No build tools or server required. Open `index.html` directly in a browser:

```bash
open index.html        # Mac
# Windows: double-click index.html in File Explorer
```

For local development with live reload, use any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Architecture

This is a zero-dependency single-page app. All logic runs in the browser with no build step.

**Data flow:** `lessons.js` sets `window.LESSONS` and `window.LESSON_INDEX` → `app.js` reads those globals on `DOMContentLoaded` → all HTML is rendered into `#content` and `#module-list` via string concatenation in `app.js`.

**Script load order matters:** `lessons.js` must load before `app.js` (enforced in `index.html`).

**State** is a single `progress` object (held in the IIFE closure in `app.js`) with shape:
```json
{ "version": 1, "completedLessons": ["0-0", "1-2"], "currentLesson": "1-3" }
```
It is persisted to `localStorage` under key `ccbeginner_progress` on every mutation.

**Routing** is hash-based (`window.location.hash = lessonId`). Lesson IDs use the format `"moduleId-lessonIndex"` (e.g. `"2-1"`). `window.LESSON_INDEX` is a flat ordered array of all lesson IDs, used for prev/next navigation.

## Adding or editing content

All lesson content lives exclusively in `lessons.js`. The structure is:

```
window.LESSONS[]           ← array of modules
  .lessons[]               ← array of lessons per module
    .steps[]               ← array of steps per lesson
      .type                ← "info" | "command" | "tip" | "warning" | "checklist"
```

- To add a lesson: append to the correct module's `lessons` array. `LESSON_INDEX` is auto-built at the bottom of `lessons.js` via `flatMap`.
- To add a module: append to `window.LESSONS` and assign a `moduleColor` hex.
- `content` strings support raw HTML inline tags (`<strong>`, `<em>`, `<code>`). Newlines (`\n`) are converted to `<br>` by `safeContent()` in `app.js`.
- `command` steps require `command` (string) and optionally `commandExplanation`. The command is rendered in a dark code block with a copy button.
- `checklist` steps require a `checklist` array of strings.

## Rendering pipeline

`renderLesson(lessonId)` in `app.js`:
1. Looks up lesson via `findLesson()` (O(n) scan of `window.LESSONS`)
2. Builds full HTML string including header, steps, and footer
3. Sets `#content.innerHTML` — this destroys and recreates all DOM nodes
4. Re-attaches all event listeners (copy buttons, prev/next, mark-complete)

The sidebar is rendered once at startup via `renderSidebar()` and updated incrementally (active/completed classes) without full re-renders.

## CSS conventions

All design tokens are CSS custom properties on `:root` in `style.css`. Module accent colors come from `moduleColor` hex values defined inline in `lessons.js` (not CSS variables). The layout uses CSS Grid: `280px sidebar | 1fr content` on desktop; sidebar becomes an off-canvas drawer via `transform: translateX(-100%)` on mobile (≤768px).

## Deployment

Vercel auto-detects this as a static site — no `vercel.json` needed. Connect the GitHub repo and click Deploy. Every push to the default branch triggers an automatic redeploy.
