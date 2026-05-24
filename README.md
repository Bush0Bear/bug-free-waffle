# bug-free-waffle

## Taroker — newest build

This branch (`taroker-latest`) hosts the **newest** version of the game as a single `index.html`, served over githack. It runs side-by-side with the previous build on its own branch, so both stay playable at separate links.

### Play it (githack)

- https://raw.githack.com/Bush0Bear/bug-free-waffle/taroker-latest/index.html (dev, no caching — always newest)
- https://rawcdn.githack.com/Bush0Bear/bug-free-waffle/taroker-latest/index.html (CDN, cached — share this for the smoother experience)

### Previous build (separate branch)

- https://raw.githack.com/Bush0Bear/bug-free-waffle/claude/setup-taroker-game-9Ck0x/index.html

### Updating this build

The game file is large (tens of MB), which is over GitHub's web-upload limit — push it with git rather than the browser:

```sh
git fetch origin taroker-latest
git switch taroker-latest        # or: git checkout taroker-latest
cp /path/to/newest-taroker.html index.html   # overwrite in place
git add index.html
git commit -m "Update Taroker build"
git push origin taroker-latest
```

The githack links above don't change between updates. `raw.githack.com` serves the new version immediately; `rawcdn.githack.com` may serve the cached copy for up to ~10 minutes before refreshing.
