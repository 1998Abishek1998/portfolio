# Portfolio Analysis & Upgrade Plan

Audit date: 2026-11-27. Based on reading every source file and running a production build (`vite build`).

---

## 1. Current State Snapshot

| Area | Finding |
|---|---|
| Stack | React 18 + Vite 4, Three.js (R3F/drei), Framer Motion, Tailwind + Sass, Material Tailwind, EmailJS, reCAPTCHA |
| JS bundle | **1.86 MB minified / 507 KB gzip, single chunk** (Vite warns >500 KB) |
| Images | `beach-resort.png` **1.68 MB**, `mountains.png` 700 KB, `winklemedia.png` 394 KB, Earth GLTF ~2.9 MB |
| Structure | Single page, all sections render at once, 3 WebGL canvases (stars always on, Earth in contact, BallCanvas unused) |
| SEO | Only `<title>`. No description, Open Graph, favicon is `/src/...` path, no sitemap/robots |
| Tests / CI / lint config | None. `npm run lint` script exists but no ESLint config file |
| Content | Typos, self-deprecating project copy, "Present" role since Jan 2023, footer © 2024 |

**Verdict:** Visually ambitious (3D, parallax), but a hiring reviewer opening it on a laptop or phone will feel a slow first load, then see beginner-era projects described apologetically. The tech is fine; the **performance, polish and storytelling** are what hold it back.

---

## 2. Bugs & Quick Fixes (do first, ~1–2 hours)

1. **Undefined Tailwind colors** – `text-secondary`, `text-white-100` (`Experience.jsx`, `Navbar.jsx`, `constants/styles.js`) and `bg-black-300` (`Contact.jsx`) are not in `tailwind.config.js`, so they silently do nothing. Add them to `theme.extend.colors` or replace.
2. **Contact form labels** use `text-black-500` (#1D2235) on a near-black background – likely invisible. Make them light.
3. **Navbar logo class typo** – `w-10 h-910object-contain` in `Navbar.jsx` → `w-10 h-10 object-contain`. Stray `}` in nav `className` template string too.
4. **External links via `react-router` `<Link>`** (`Projects.jsx`, `Footer.jsx`). Use plain `<a href target="_blank" rel="noopener noreferrer">`. `<button>` inside `<a>` is invalid HTML – style the `<a>` as the button.
5. **`setTimeout(..., [3000])`** in `Contact.jsx` – delay passed as an array. Use `3000`.
6. **Scroll listener per project card** (`Projects.jsx`) calls `setTransform` on every scroll event × 5 cards. Replace with one `window.matchMedia('(min-width: 1024px)')` check (or a CSS media query) – no scroll listener needed.
7. **Missing `alt` text** – hero profile image (`alt=""`), project images (`alt=""`). Use real descriptions.
8. **Favicon** `href="/src/assets/logo.svg"` breaks in production build. Move to `public/` and reference `/logo.svg`.
9. **Footer year** hardcoded `2024` → `new Date().getFullYear()`.
10. **Message textarea** not `required`, but captcha gate requires `message.length > 5`. Add `required` + `minLength`.
11. **`maath`** imported in `StarCanvas.jsx` but not in `package.json` (works only as a transitive dep). Add it explicitly or drop it.

---

## 3. Delete Dead Code & Dependencies

| Remove | Why |
|---|---|
| `src/components/canvas/BallCanvas.jsx` | Never imported |
| `src/components/Loader.jsx` + export | Never used (CanvasLoader is used) |
| `@react-spring/three` | Not imported anywhere |
| `@material-tailwind/react` | Heavy lib used only for one Popover + unused Tooltip/Button imports. Replace with native `<details>`/`popover` attribute or a 20-line Framer Motion popover |
| `react-router-dom` | Only used for `<Link>` to external URLs and `BrowserRouter`. Not needed for a single-page site unless you add routes (see §6) |
| Unused icons: `car, estate, pricewise, snapgram, summiz, threads, arrow, contact, twitter` | Template leftovers |
| `public/scroll.png`, `public/sun.png`, `public/vite.svg` | Unreferenced |
| `.env` from git | Currently contains no secrets, but tracked `.env` is a red flag to reviewers. `git rm --cached .env`, add `.env` to `.gitignore`, commit a `.env.example` with `VITE_APP_EMAILJS_*` and `VITE_APP_RECAPTCHA_KEY` keys |
| `src/constants/styles.js` `heroHeadText/heroSubText` | Unused |

Expected result: noticeably smaller bundle, fewer deps for reviewers to question.

---

## 4. Performance (biggest "wow" lever – reviewers notice speed first)

Target: **Lighthouse ≥ 90 Performance on mobile, ≥ 95 Accessibility/Best Practices/SEO.** Put the score badge in the README.

1. **Compress images** – convert all PNG to WebP/AVIF, resize to display size.
   - `beach-resort.png` 1.68 MB → ~80 KB WebP. `mountains.png` 700 KB → ~60 KB.
   - Use `<img loading="lazy" decoding="async" width height>` on everything below the fold.
   - Option: `vite-plugin-image-optimizer` to automate at build time.
2. **Compress the Earth model** – run `npx gltf-transform optimize public/planet/scene.gltf public/planet/earth.glb --texture-compress webp` (Draco/Meshopt + WebP textures). 2.9 MB → typically <500 KB.
3. **Code-split Three.js** – the 1.86 MB chunk is mostly three/drei. Lazy-load canvases:
   ```jsx
   const EarthCanvas = lazy(() => import('../components/canvas/EarthCanvas'));
   ```
   and only mount when the contact section enters view (`IntersectionObserver` / Framer `useInView`). Same for `StarsCanvas` (or mount it after first paint).
4. **Stars canvas runs every frame forever** – set `dpr={[1, 1.5]}`, pause when tab hidden / `prefers-reduced-motion`, consider fewer points on mobile.
5. **Remove `gl={{ preserveDrawingBuffer: true }}`** – costs performance, only needed for screenshots.
6. **Fonts** – Google Fonts `@import` in CSS loads all 9 weights × 2 families and blocks render. Load only weights you use (e.g. 400/600/700) via `<link rel="preconnect">` + `<link rel="stylesheet">` in `index.html`, or self-host with `@fontsource`.
7. **Upgrade Vite 4 → 5/6** and React 18 → 19 for faster builds and smaller output.
8. **Respect `prefers-reduced-motion`** – disable parallax, sliding text and auto-rotate. Accessibility reviewers check this.

---

## 5. Content & Storytelling (what actually gets you hired)

Recruiters skim for ~30 seconds. The current copy works against you.

1. **Hero** – "A JavaScript enthusiast…" is generic. Replace with a specific value line:
   > "Full-stack engineer building logistics & payment systems at scale. 4+ years shipping React, Node/Nest and AWS in production."
   Add two CTAs: **View Work** and **Download Résumé (PDF)**. Add availability badge ("Open to roles – Remote / Kathmandu").
2. **Update experience** – Upaya "Jan 2023 – Present" is ~4 years old in Nov 2026. Confirm and update. Rewrite bullets as **impact with numbers**:
   - Weak: "Implemented wallet payment methods with Esewa and Khalti."
   - Strong: "Integrated eSewa & Khalti wallets, processing N transactions/month with zero reconciliation errors."
   - Same for driver-matching engine, billing crons, DB schema rewrite (e.g. "cut API p95 from X ms to Y ms").
   - Drop "Gained interest in kafka…" – interest isn't experience; put it in a "Currently exploring" line.
3. **Projects – replace or reframe.** Current list (beach resort as "first app I created", covid site "designs are pretty much empty", final-year project "got credits without deploying") tells reviewers these are beginner projects. Fix:
   - Lead with your **strongest real work**: write 2–3 **case studies** of Upaya systems (anonymized): problem → architecture diagram → your decisions → measurable result. This is the #1 thing that surprises hiring teams.
   - Build **1–2 new flagship projects** that match your actual level (see §7).
   - Every project card: one-line outcome, tech chips, live demo + code buttons, and never apologetic language. Remove projects with no live demo or fix the demo.
   - The MERN Social App uses a Pexels stock image – replace with a real screenshot.
4. **Skills section** – 20 popovers each repeating "I started my X journey from 2020… from the period of lockdown". Group into Frontend / Backend / Cloud & DevOps / Data, show proficiency via what you shipped, not years. Truncating names to "Node...." (`printName`) hurts readability – just let names wrap.
5. **Fix typos**: intrested, javasscript, Framweork, statred, sstarted, entruiged, dieases.sh, InternShip, And Design → Ant Design, "Company I have worked in so far" → "Where I've worked".
6. **Add**: résumé PDF, email link visible without the form, GitHub contribution graph or recent commits, testimonials/recommendations from LinkedIn.

---

## 6. SEO, Sharing & Discoverability

1. `index.html` – add `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image` 1200×630), Twitter card, canonical URL, theme-color.
2. **Custom domain** (e.g. `abishektimsina.dev`) – looks far more professional than `*.vercel.app`.
3. `public/robots.txt` + `sitemap.xml`.
4. JSON-LD `Person` schema (name, jobTitle, sameAs GitHub/LinkedIn).
5. Prerender the page (Vite SSG / `vite-plugin-prerender`) or migrate to **Next.js / Astro** so content is in the HTML for crawlers and link previews. Astro with React islands for the 3D parts would give near-perfect Lighthouse scores.
6. Add privacy-friendly analytics (Vercel Analytics / Plausible) to see which projects get clicks.

---

## 7. "Surprise the Hiring Team" Features

Pick 2–3. Each should demonstrate a skill you claim, not just decoration.

1. **Interactive system-architecture case study** – an animated diagram of the logistics platform you built (client app → API gateway → Nest services → MySQL → cron/billing → payment wallets). Click a node to see your decisions. Proves backend depth, which most frontend-heavy portfolios lack.
2. **Live "engineering stats" panel** – pull GitHub API (repos, languages, recent commits) at build time; show real numbers.
3. **Command palette (⌘K)** – jump to sections, copy email, open résumé, toggle theme. Developers love it; small code.
4. **"Ask about me" AI assistant** – small chat widget answering questions about your experience from your résumé (serverless function + LLM API, rate-limited). Shows you can ship AI features end-to-end. Keep API key server-side.
5. **Terminal mode easter egg** – type `help`, `projects`, `contact` in a faux terminal.
6. **Performance as a feature** – footer badge "Lighthouse 100 · 0 KB layout shift · loads in <1s", linked to a public PageSpeed report.
7. **Dark/light theme** with system preference.
8. **Blog / Notes section** (MDX) – 3 short write-ups like "How I designed a driver-matching engine" or "Migrating our billing to cron jobs safely". Written thinking is a strong hiring signal.
9. **Flagship new project** matching your level: e.g. a realtime logistics tracker (Nest + WebSockets + Postgres + map), deployed with Docker on AWS, with tests and CI badge. Replaces the beach-resort era projects.

---

## 8. Engineering Quality (reviewers will open the repo)

1. **TypeScript** – your skills section says you use TS exclusively since 2022, but this repo is JS. Migrate (`.jsx` → `.tsx`); otherwise it contradicts your own claim.
2. **ESLint + Prettier config** committed; `npm run lint` currently has no config.
3. **Accessibility** – mobile menu toggle is an `<img onClick>`; make it a `<button aria-label="Open menu" aria-expanded>`. Popover triggers should be buttons. Check color contrast. Run axe.
4. **Minimal tests** – Vitest + Testing Library for the contact form (validation, success/error states). One Playwright smoke test that the page loads and nav links scroll.
5. **CI** – GitHub Action: install → lint → typecheck → test → build → Lighthouse CI. Add badges to README.
6. **README rewrite** – live link, screenshot/GIF, Lighthouse scores, stack, architecture notes, how to run, env vars. Reviewers often read the README before the site.
7. **Folder consistency** – `pages/` holds sections (not routes), `Experience` is under `components/` while `About` is under `pages/`. Move all sections into `src/sections/`. Mixing Tailwind + Sass + inline styles + `styles.js` – standardize on Tailwind.
8. **Data out of components** – `constants/index.js` is fine; consider `content/*.json` or MDX so content edits don't touch code.
9. **Contact form** – EmailJS + reCAPTCHA v2 checkbox is OK; consider invisible reCAPTCHA v3 / Cloudflare Turnstile for less friction, and show inline validation errors.
10. Commit messages are mostly "updates" – use conventional commits (`feat:`, `fix:`, `perf:`). Reviewers do look at history.

---

## 9. Suggested Roadmap

| Phase | Time | Work |
|---|---|---|
| 1. Fix | 1 day | §2 bugs, §3 deletions, typos, update experience dates |
| 2. Speed | 1–2 days | §4 images, GLTF compression, lazy canvases, fonts → measure Lighthouse |
| 3. Story | 2–3 days | §5 hero rewrite, impact bullets, résumé PDF, 2 case studies, replace weak projects |
| 4. Polish | 2 days | §6 SEO/OG/domain, §8 a11y, README, CI |
| 5. Wow | 1 week+ | §7 pick 2–3 features (architecture diagram + ⌘K + flagship project recommended) |
| 6. Modernize (optional) | 2–3 days | TypeScript migration; consider Astro/Next for SSG |

**Highest ROI order if short on time:** compress images & lazy-load 3D → rewrite hero + experience with numbers → replace weak projects with case studies → OG tags + custom domain.
