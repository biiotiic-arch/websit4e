# League of Bullies — Next.js + Tailwind (Netlify-Ready)

This build replicates your original design details:
- 128px sticky header, logo 80px, faded socials that brighten on hover/scroll
- Story-style home slider with arrows + swipe
- First-visit preloader overlay (SKIP + “ACCEPTING DEPOSITS →” to /upcoming) with fallback if video missing
- Puppies page with 3-image grid and tap-to-enlarge lightbox
- Studs page (Jax) with CashApp/Zelle buttons and QR placeholders
- Upcoming page for Asia × Exodus deposits

## Dev
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Build & Export (for Netlify)
```bash
npm run build && npm run export
```
Publishes to `out/` (Netlify uses this via `netlify.toml`).
