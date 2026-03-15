# Claude Code Beginner Guide

An interactive learning web app that guides complete beginners through:

1. **Using Claude Code** — the AI coding assistant
2. **GitHub basics** — version control for your projects
3. **Deploying to the web** — publishing your site live with Vercel

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | App shell (sidebar + content layout) |
| `style.css` | All styles and design |
| `app.js` | Navigation, progress tracking, rendering |
| `lessons.js` | All lesson content (4 modules, 14 lessons) |

## Running locally

No build tools needed. Just open `index.html` in your browser:

- **Mac:** `open index.html`
- **Windows:** double-click `index.html` in File Explorer

## Deploying to Vercel (zero config)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and log in
3. Click **Add New Project** → **Import** your repo
4. Leave all settings as default
5. Click **Deploy**

Vercel auto-detects static HTML — no configuration needed.

## Features

- 14 step-by-step lessons across 4 modules
- Progress tracking saved in your browser (localStorage)
- Copy-to-clipboard for all terminal commands
- Keyboard navigation (← → arrows, M to mark complete)
- Mobile responsive with hamburger sidebar
- Confetti celebration when all lessons are complete
- Hash-based routing (direct links to any lesson)
