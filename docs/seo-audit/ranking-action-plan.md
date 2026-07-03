# Ranking-Recovery Action Plan (Owner-Executed / Off-Page)

**For:** Testriq owner
**Date:** 2026-07-01
**Scope:** The off-page, GSC, and business-side actions that **code cannot do**. On-page/technical
fixes are tracked separately in [`fix-backlog.md`](./fix-backlog.md). Diagnosis context in
[`ranking-drop-diagnosis.md`](./ranking-drop-diagnosis.md).

> **Core principle:** Google and AI answer-engines rank on **third-party signals** (reviews,
> citations, mentions, links, entity consistency) — not on what your own pages claim about
> themselves. On-page work makes you *eligible*; off-page work makes you *win*. After a decline,
> off-page trust rebuilding is often the real lever.

Priorities: **P0** = do this week · **P1** = this month · **P2** = this quarter.

---

## P0 — Diagnose & stop the bleeding (this week)

### P0-1 — Pull the Search Console data (unblocks the whole diagnosis)
- **Why:** We cannot assign the drop's root cause without it; every downstream fix priority depends on it.
- **How:** Complete the [§4 checklist](./ranking-drop-diagnosis.md) — Manual Actions first, then the
  3-mo-vs-3-mo Performance compare, the losing pages/queries, and the Indexing report. Export CSVs or
  screenshot and hand back.

### P0-2 — Rule out a manual action / hack
- **Why:** If present, it overrides every other cause; nothing else will recover rank until it's cleared.
- **How:** GSC → **Security & Manual actions**. If flagged: read the exact citation, fix that specific
  issue (e.g., remove doorway pages, remove spammy content), then file a **Reconsideration Request**.

### P0-3 — Correlate the drop date with the May 2026 deploy & Google updates
- **Why:** Tells us instantly whether this is a self-inflicted deploy regression, a doorway-page
  demotion, or a Google update.
- **How:** Overlay your drop week (from P0-1) on the [deploy timeline](./ranking-drop-diagnosis.md#2--deploy-timeline-to-correlate-against-the-drop-date)
  and Google's **Search Status / ranking-updates history**. Note which named update (if any) coincides.

---

## P1 — Rebuild entity trust & authority (this month)

### P1-1 — Google Business Profile (Mira Road, Mumbai)
- **Why:** Anchors your local entity, feeds the Knowledge Panel, and is a primary source AI engines
  read for NAP + reviews. Missing/unverified GBP is a large trust gap for a company with a physical HQ.
- **How:** Claim & verify the profile. Category: *Software company* / *Software testing service*.
  Add the exact NAP (below), hours, real photos (office, team, certificates), services list, and a
  description. Then **request reviews** from real clients (P1-3).

### P1-2 — Complete & enrich existing directory listings
- **Why:** You already appear on **Clutch, GoodFirms, DesignRush** (linked in the footer). Incomplete
  profiles waste the authority; complete, review-rich profiles are what AI engines quote.
- **How, per platform:** fill every field, add portfolio items (your real case studies), tech-stack
  tags, verified reviews, and consistent NAP. **Add** these high-value profiles that are missing:
  **LinkedIn company page** (post regularly), **Crunchbase**, **Sortlist**, **G2**, **AmbitionBox**
  (India talent-brand signal), **TechBehemoths**. Ensure each links back to `https://www.testriq.com`.

### P1-3 — Review generation (Google + Clutch + GoodFirms)
- **Why:** Reviews are the single most-quoted third-party signal for AI answers ("which QA company is
  best…") and a strong local-ranking factor. You have named, referenceable clients — convert them.
- **How:** Ask the clients behind your published case studies (Canva, Milton, Brandify, Ragnar,
  Digiboxx, Kanishka) for a short review on **Google** and **Clutch/GoodFirms**. Aim for 10+ Google
  and 5+ Clutch verified reviews this quarter. Never fabricate — real, attributable reviews only.

### P1-4 — NAP consistency everywhere
- **Why:** Inconsistent Name/Address/Phone fractures your entity across the web and weakens the
  Knowledge Panel. AI engines cross-check NAP across sources.
- **Canonical NAP (use verbatim, everywhere):**
  > **Testriq QA Lab LLP**
  > Office #2, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road,
  > Mira Bhayandar, Mumbai, Maharashtra 401107
  > **Phone:** (+91) 915-2929-343  ·  **Email:** contact@testriq.com
- **How:** Audit GBP, footer, contact page, and every directory listing against this exact string.

### P1-5 — Re-submit sitemap & request re-indexing after fixes land
- **Why:** Speeds Google's re-evaluation once the on-page/technical fixes deploy.
- **How:** GSC → Sitemaps → confirm `sitemap.xml` reads clean. Use **URL Inspection → Request
  indexing** on the top pages that lost rank once their fixes are live.

---

## P2 — Content authority & links (this quarter)

### P2-1 — Turn real case studies into linkable, citable assets
- **Why:** First-party results with **named clients and real numbers** are the most defensible,
  most-cited content type. This is your biggest untapped authority lever.
- **How:** Ensure each case study states the client, the problem, the approach, and a **verifiable**
  outcome. Pitch 1–2 as guest articles / joint posts with the client where possible.

### P2-2 — Leverage the comparison & template pages you already have
- **Why:** You already ship `playwright-vs-cypress`, `selenium-vs-cypress`, `manual-vs-automation-testing`,
  `test-case-template`, `test-plan-template`, `roi-calculator`, `test-case-estimator` — these are
  natural **linkable assets** and AI-citation magnets. Promote them, don't just host them.
- **How:** Outreach to QA newsletters/communities; answer relevant Reddit/Quora/Stack-adjacent
  threads (genuinely, non-spammy) linking the template/calculator where it truly helps.

### P2-3 — Listicle inclusion ("best/top software testing company")
- **Why:** These listicles are exactly what AI engines summarize for vendor-selection queries.
- **How:** Outreach to the publishers of "top QA outsourcing companies India / best software testing
  companies" listicles with your Clutch/GoodFirms proof and case studies. Get added.

### P2-4 — Backlink & digital-PR plan
- **Why:** Referring domains remain a core ranking input; a decline can reflect lost or stagnant links.
- **How:** Guest posts on QA/dev blogs (DZone, InfoQ, dev.to, Hackernoon, Medium); tool-ecosystem
  partnerships (Selenium/Playwright/Postman/BrowserStack communities); HARO/Featured expert quotes;
  ISTQB/ISO community presence. Track referring-domain growth monthly.

### P2-5 — Ongoing monitoring (recovery tracking)
- **Why:** Recovery must be measured against the drop baseline from P0-1.
- **How:** Weekly GSC check on the specific queries/pages that dropped; watch Indexing report for
  the city URLs; confirm GBP reviews trend up. Re-read the diagnosis §5 gate as data arrives.

---

## Owner inputs the code side is waiting on
1. **GSC data** (P0-1) — unblocks the diagnosis gate and Phases 1–3.
2. **Founding year of Testriq QA Lab LLP** — to correct/keep the "15+ years" company-level claim (backlog C-6).
3. **City-page strategy call** — after GSC confirms whether the 86 `/…-in-{city}` pages are the drop
   driver (H1). Options will be presented: consolidate to a few differentiated regional hubs, or
   noindex the thin ones and keep 5–10 with genuinely local content. (backlog O-2)
4. **Are the case-study testimonial ratings real/attributable?** — to keep or remove `Review` JSON-LD (backlog T-4).
