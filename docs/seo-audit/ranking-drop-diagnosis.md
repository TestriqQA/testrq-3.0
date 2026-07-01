# Ranking-Drop Diagnosis (Phase 0.5)

**Date:** 2026-07-01
**Trigger:** Owner reports ranking decline visible in Google Search Console.
**Method:** Code-side regression analysis over the ~399 commits between the last local snapshot
(2026-02-16) and live `origin/main` (`6778ffa3`, 2026-06-29), cross-referenced with the existing
remediation history and the May baseline. **GSC/GA confirmation still required from owner (§4).**

> ⚠️ **Read this first.** The site underwent a **large, concentrated SEO remediation in May 2026**
> (redirects, canonical, robots, JSON-LD render, schema, security headers). Whenever a big SEO
> change ships and ranking falls afterward, the change itself is the leading suspect until GSC
> timing proves otherwise. **Do not apply more "fixes" before confirming the drop date against
> the deploy timeline (§2).** Blind fixing is how a recoverable dip becomes a deep one.

---

## 0. One-line answer (provisional, pending GSC dates)

The most probable causes, in order, are **(1) algorithmic demotion of ~86 templated "city" doorway
pages dragging on sitewide quality signals**, **(2) a technical side-effect of the May remediation
deploy** (redirect chains / canonical consolidation / taxonomy noindex), and **(3) keyword
cannibalization** across service × solution × city × comparison pages. A **Google core/spam/helpful-content
update** landing in the same window is the fourth possibility and must be ruled in/out by date.
Which one dominates is decided by *when* and *what* dropped — data only the owner can pull.

---

## 1. What the code actually shows (evidence)

| # | Observation | Location / evidence | Why it matters for ranking |
|---|---|---|---|
| E1 | **86 near-duplicate city landing pages**, templated ("Leading software testing company in {city}… 500K+ test cases… ISTQB-certified engineers…"), differing mostly by the city name. | `src/app/lib/CityData.tsx` (86 slug entries; 1.7 MB inline dataset), rendered by `src/app/[slug]/page.tsx`. Sample descriptions at `CityData.tsx:500, 2368, 4156, 4351`. | Classic **programmatic doorway / scaled-content** pattern. Google's spam policies and Helpful-Content system explicitly target "doorway pages" and "scaled content abuse". Can demote the *whole domain*, not just those URLs. |
| E2 | **763 redirects, all 301** (`permanent:false` count = 0), extracted May 2026 (F-15). **9 redirect chains** detected (a destination that is itself a source). | `src/lib/seo/redirect-map.ts`; chains mostly `/blog/post/*` and `/blog/tag/*`. | 301s are correct, but **chains** dilute equity + slow crawl. More importantly, if any redirect points a *previously-ranking* URL to a weaker target, that query's position drops. |
| E3 | **Blog category & tag pages are `noindex`.** | `src/app/blog/category/[category]/page.tsx:93`, `src/app/blog/tag/[tag]/page.tsx:90` (index:false). Introduced around 2026-05-18. | If these taxonomy pages previously earned impressions/clicks, noindexing them produces a visible **impressions + indexed-count drop** exactly in the drop window. Defensible long-term, but a timing correlate. |
| E4 | **Large, concentrated SEO deploy in May 2026**: canonical single-source helper, robots AI-bot rules + `/cms` disallow, sitemap auto-discovery, 760-entry redirect map, site-wide JSON-LD moved to server-rendered inline `<script>` ("Pattern F"), security headers, fake AggregateRating removal. | `git log --since=2025-10 -- src/app/robots.ts src/app/sitemap.ts src/lib/seo/ src/components/seo/ next.config.ts` (see §2). | Any one of these, if subtly wrong, can move rankings. The **canonical** changes are the highest-risk: consolidating/oscillating canonicals can drop the "wrong" URL from the index. |
| E5 | **Heavy keyword overlap** across page types: ~50 `(services)` pages, 9 `(solutions)` industry pages, 86 city pages, 6 `*-vs-*` comparison pages, plus blog — many targeting variants of "{X} testing services" and "software testing company". | Route inventory (`src/app/(services)`, `(solutions)`, `[slug]`, root comparison pages). | **Cannibalization**: multiple own-pages competing for one query splits signals; Google may swap which URL ranks (position instability) or demote all. |
| E6 | **Non-defensible claims still live** at scale (500K test cases ×315, 99.9% ×68, zero-defect/bug-free ×42, 50+ clients ×47, 100% satisfaction ×7, "leading/best" marketing ×40+). | `CityData.tsx` + ~50 `src/components/sections/*`. | Not a *direct* ranking factor, but feeds "unhelpful / untrustworthy" quality signals (esp. combined with E1) and undermines AEO/AI-citation trust. |
| E7 | Per-case-study `Review` rating in JSON-LD (`ratingValue` from testimonial data). | `src/app/[slug]/page.tsx:214`. | Defensible **only if** each testimonial rating is real and attributable. Fabricated review markup is a manual-action risk. Verify source. |

**Ruled out / low-likelihood from code:**
- ❌ **Accidental noindex on commercial pages** — none found. Only intentional noindex on author, blog category/tag (E3), and verify-certificate. `buildPageMetadata` defaults to `index:true`.
- ❌ **CSR/blank-render deindex** — all commercial templates are SSG/ISR and server-render content; JSON-LD is now server-rendered inline. Low risk.
- ❌ **302 misuse** — all redirects are 301.
- ❌ **robots.txt blocking the site** — robots allows `/`; only `/private/ /admin/ /api/ /cms` disallowed.

---

## 2. Deploy timeline to correlate against the drop date

Match your GSC drop date/week (§4.1) to this deploy sequence. **A drop that begins within ~1–4 weeks
of the May cluster points at E2/E3/E4; a drop unrelated to these dates points at E1 (doorway pages
maturing into a demotion) or a Google update.**

| Date | Change | Suspect link |
|---|---|---|
| 2026-04-18 → 04-23 | City landing pages + structured data introduced (`3fd385a8`); pricing/automation pages | E1 seeds |
| 2026-05-09 | Metadata single-source helper; **JSON-LD → server-rendered inline (Pattern F, site-wide)**; title-template bypass | E4 |
| 2026-05-13 → 05-14 | Sitemap auto-discovery; `/public` immutable caching; **root viewport + security headers**; robots stops disallowing `/llms.txt` | E4 |
| 2026-05-15 | **Remove fake AggregateRating (F-41)**; **extract 760 redirects → redirect-map (F-15)**; JobPosting JSON-LD | E2, E4 |
| ~2026-05-18 | **Blog category/tag `noindex`** | E3 |
| 2026-05-16 → 05-17 | 14 AI-bot robots rules (F-57); FAQPage JSON-LD across service pages; trust signals; `sameAs` expansion (F-58) | E4 |
| 2026-06-26 → 06-29 | Products nav + LLMQA page; llmqa hero | later, likely post-drop |

---

## 3. Ranked hypotheses

### H1 — Programmatic doorway/thin city pages (likelihood: HIGH)
**Mechanism:** 86 templated city pages (E1, E6) trip Google's doorway-page / scaled-content /
Helpful-Content signals → algorithmic demotion that can suppress the *whole domain*.
**Confirm via GSC:** Pages report — are the `.../in-{city}` URLs "Crawled – not indexed" or
"Discovered – not indexed"? Did the drop hit *sitewide* (incl. strong service pages) rather than
just cities? Performance → filter city URLs: impressions collapsed?
**Fix owner:** Auditor (code) — decide strategy: consolidate to a few genuinely-differentiated
regional hubs + one `/locations-we-serve`, or `noindex` the thin ones and keep 5–10 with unique,
local, non-boilerplate content. **Do NOT just reword claims on all 86 — that keeps the doorway pattern.**

### H2 — Technical side-effect of the May remediation deploy (likelihood: HIGH if drop ≈ mid/late-May)
**Mechanism:** canonical consolidation (E4) dropped the intended URL from the index; and/or redirect
chains (E2) sent equity to weaker targets; and/or category/tag noindex (E3) removed ranking taxonomy pages.
**Confirm via GSC:** URL Inspection on 3–5 dropped pages → "Google-selected canonical" ≠ your URL?
"Page with redirect" / "Alternate page with proper canonical tag" excluded reasons rising? Drop
start within 1–4 weeks of the May cluster?
**Fix owner:** Auditor (code) — flatten the 9 redirect chains (T-1); audit canonicals on dropped
pages; re-evaluate category/tag noindex if those pages were traffic sources.

### H3 — Keyword cannibalization (likelihood: MEDIUM–HIGH)
**Mechanism:** service × solution × city × comparison pages compete for the same queries (E5);
Google oscillates/splits, positions become unstable.
**Confirm via GSC:** Performance → pick a top query → "Pages" tab: does the ranking URL keep
*changing* over time? Multiple own-URLs impressing for one query?
**Fix owner:** Auditor (code, Phase 3) — assign one canonical owner per keyword (service = "how/what/cost
of X testing"; solution = "X testing for {industry}"; city = local intent); interlink with clear anchors.

### H4 — Google core / spam / helpful-content update (likelihood: MEDIUM — must rule out)
**Mechanism:** an algorithm update in the drop window, independent of code.
**Confirm:** owner matches drop date to the Google ranking-updates history (Search Status dashboard).
A same-day sitewide cliff aligned to a named update = strong signal (and would amplify H1).
**Fix owner:** Owner + Auditor — if update-driven, the remedy is quality/E-E-A-T (H1, H6), not tech tweaks.

### H5 — Manual action / security (likelihood: LOW but CHECK FIRST — highest severity)
**Mechanism:** manual penalty or hacked content.
**Confirm:** GSC → Security & Manual Actions. If present, **everything else is secondary.**
**Fix owner:** Owner — address the specific citation, then Reconsideration Request.

### H6 — Trust/quality erosion from unsourced claims (likelihood: LOW as sole cause; compounds H1/H4)
**Mechanism:** unsourced superlatives/stats (E6) weaken quality signals & AI-citation trust.
**Fix owner:** Auditor (Phase 1 cleanup) — reframe to defensible, keep real certs/named case studies.

---

## 4. Owner data-pull checklist (required to finalize 0.5)

> Export as CSV or screenshots. For each, note the **date/week**, not just the number.

**4.0 — Rule out the catastrophic first**
- [ ] GSC → **Security & Manual Actions**: any manual action or security/hacked flag? (H5)

**4.1 — When did it drop**
- [ ] GSC → Performance → Search results → **last 3 months vs previous 3 months** (compare). Note the exact **week the decline starts**. Is it a **sudden cliff** (→ update or deploy regression) or a **slow slide** (→ doorway/quality/cannibalization)?

**4.2 — What dropped**
- [ ] Same report, look at **Clicks, Impressions, Avg position separately.** Impressions down = visibility/indexing loss (H1/H2/H4). Only CTR down = title/SERP issue.
- [ ] **Top queries** and **top pages** that lost the most (sort by click delta). Are the losers **city pages**, **service pages**, or **sitewide**?

**4.3 — Indexing**
- [ ] GSC → **Pages (Indexing)**: did URLs move from "Indexed" → "Crawled – not indexed" / "Discovered – not indexed" / "Duplicate, Google chose different canonical" / "Excluded by noindex"? Note counts + the date they rose. Filter for `.../in-` city URLs specifically (H1).
- [ ] **URL Inspection** on 5 dropped pages: is Google's **selected canonical** your URL? Indexed? (H2)

**4.4 — Core Web Vitals / Mobile**
- [ ] GSC → **Core Web Vitals** + **Mobile Usability**: any new "Poor" spike aligned with the drop date? (usually secondary)

**4.5 — Timeline correlation**
- [ ] Overlay the drop date on: (a) the **May deploy cluster** in §2, (b) **Google update history** (Search Status dashboard), (c) any content/migration events you know of.

**4.6 — Links (for H3 / off-page)**
- [ ] GSC → **Links**: any drop in referring domains / top linked pages / lost backlinks around the date?

---

## 5. Decision gate

Once §4 is in, we assign the dominant hypothesis and **only then** prioritize fixes:

- **If H5 (manual action):** stop everything else; fix the cited issue; reconsideration request.
- **If H1 (doorway/cities dominate the losses):** city-page consolidation/noindex strategy first (this is a content-architecture decision — auditor will present options), then claims cleanup.
- **If H2 (deploy regression, drop ≈ May):** canonical + redirect-chain + taxonomy-noindex remediation first.
- **If H3 (cannibalization):** keyword-ownership remap (Phase 3).
- **If H4 (update):** quality/E-E-A-T program (H1 + H6 + real case studies) — no quick tech fix.

**Nothing in Phases 1–3 is mass-applied before this gate.** See [`progress.md`](./progress.md) for
the safe-to-proceed subset (off-page plan, redirect-chain flattening, non-city claims cleanup).
