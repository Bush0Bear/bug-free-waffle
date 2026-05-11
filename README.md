# 🎰 Life Roulette

A tiny, no-build, single-page app that picks something for you to do when your
brain refuses to. Spin the wheel across six life categories — meal, activity,
mood boost, kindness, mini-adventure, or pure chaos — and either commit, skip,
or re-roll. Everything is logged in a session "logbook" and persisted in
localStorage.

## 🚀 Try it now (no setup)

**Branch preview (live, updates on every push):**
https://raw.githack.com/Bush0Bear/bug-free-waffle/claude/random-life-project-6fdkr/index.html

**Once merged to `main`** it will also be served from GitHub Pages at
`https://bush0bear.github.io/bug-free-waffle/` (enable Pages in repo settings →
Pages → Source: "GitHub Actions" the first time).

## Run it locally

Just open `index.html` in a browser. No build step, no dependencies.

```sh
# any of these work
open index.html
xdg-open index.html
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Features

- 🎯 6 spin categories with hand-curated prompts
- 🎲 Animated wheel with a satisfying landing
- 📓 Today's logbook with accept ✓ / skip ✕ states
- 🔥 Daily streak counter, total spin count, and a random session vibe
- 💾 LocalStorage persistence — close the tab, come back, it's still there
- ⌨️ Keyboard shortcuts: `space`/`enter` to spin, `a` accept, `s` skip, `r` re-roll
- 📤 Export logbook as a `.txt`

## Why

Decision fatigue is real. Some days the hardest part is *picking the thing*.
This makes the picking the fun part.
