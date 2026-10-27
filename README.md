# oddloaf.dev

Static site for [oddloaf.dev](https://oddloaf.dev) (Oddloaf).

## Layout

- `site/` — Cloudflare Pages static output (HTML, assets, `functions/` for Pages Functions)
- `functions/` — same middleware source (www→apex and `/spooly/`→`/ownflick/` 301s)

## Deploy

Direct upload (current):

```bash
export WRANGLER_CACHE_DIR=./.wcache
wrangler pages deploy ./site --project-name oddloaf --branch main
```

Requires `CLOUDFLARE_API_TOKEN` with Pages Edit. Domain DNS stays on Cloudflare.

## Notes

- English copy only; no third-party trackers (Cloudflare Web Analytics only).
- Product OwnFlick was formerly Spooly; `/spooly/` 301s to `/ownflick/`.
