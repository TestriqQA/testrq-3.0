# Fix Backlog — Ranking Recovery

One row per discrete issue. Status: ⬜ todo · 🟡 in progress · ✅ done · ⛔ blocked (needs decision).
Priority: P0 (traffic-blocking) · P1 (ranking impact) · P2 (compounding) · P3 (strategic).

> Only issues **not already resolved** by the existing remediation program are listed. Verified
> against live `origin/main` @ `6778ffa3` on 2026-07-01.

---

## Content claims (Phase 1) — non-defensible marketing

| ID | Area | File(s) | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| C-1 | Claims | `src/app/lib/CityData.tsx` + `src/components/sections/*` (315 hits) | "500K+ test cases executed/delivered" stated as fact, unsourced, on ~86 city pages + sections | Reframe to capability ("large-scale test execution across projects") OR cite a real, named figure if one exists | P1 | ⛔ blocked by H1 city decision |
| C-2 | Claims | ~50 `src/components/sections/*` (68 hits) | "99.9% uptime/success" — some are Testriq guarantees (non-defensible), some describe *client SLA targets* (defensible) | Per-context: keep where it describes what Testriq *tests for*; remove where it's a Testriq guarantee | P1 | ⬜ |
| C-3 | Claims | sections (42 hits) | "zero-defect / bug-free / crash-free" absolute guarantees | Reframe to "defect reduction", "fewer production incidents" | P1 | ⬜ |
| C-4 | Claims | sections + CityData (47 hits) | "50+ / trusted by N companies" unsourced counts | Qualitative ("trusted by teams across BFSI, health, e-commerce…") unless a real number exists | P2 | ⬜ |
| C-5 | Claims | sections (7 hits) | "100% client satisfaction" | Remove/replace with real testimonial evidence | P1 | ⬜ |
| C-6 | Claims | company-level copy (subset of 133 "years" hits) | "15+ years of experience" at **company** level — verify vs Testriq's real founding date; individual-bio uses are fine if real | Owner to confirm founding year; auditor fixes company-level claims to match | P1 | ⬜ needs owner input |
| C-7 | Superlatives | `CityData.tsx` + sections (~40 marketing "leading"/"best") | Puffery in titles/descriptions ("Leading software testing company in {city}") | Neutral descriptive, keep keyword ("Software testing company in {city}") | P2 | ⛔ blocked by H1 |

## Technical SEO (Phase 2) — remaining

| ID | Area | File(s) | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| T-1 | Redirects | `src/lib/seo/redirect-map.ts` | 9 redirect **chains** (destination is also a source) — mostly `/blog/post/*`, `/blog/tag/*` | Flatten each chain to a single hop (source → final destination) | P2 | ⬜ safe-to-proceed |
| T-2 | Sitemap | `src/app/sitemap.ts:104,138,152,162` | `lastModified: currentDate` for all non-blog URLs → artificial freshness, discounted | Use real content mtime (file/Sanity/manifest) | P2 | ⬜ |
| T-3 | Routing | `src/app/[slug]/page.tsx` | Polymorphic catch-all mixes cities + case studies in one namespace → slug-collision risk | Namespace or guard against collision; document precedence | P2 | ⬜ |
| T-4 | Schema | `src/app/[slug]/page.tsx:214` | Per-case-study `Review.ratingValue` — verify each rating is real/attributable | Confirm data source; remove if not verifiable | P1 | ⬜ needs owner input |
| T-5 | Canonicals | dropped pages (TBD from GSC) | Verify Google-selected canonical == self on pages that lost rank (H2) | Audit per URL once GSC list is in | P1 | ⛔ blocked on GSC |

## On-page / cannibalization (Phase 3)

| ID | Area | Scope | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| O-1 | Cannibalization | services × solutions × cities × comparisons | Overlapping keyword targets (H3) | One keyword-owner per page; intent-based title/meta remap; interlink | P1 | ⛔ blocked on GSC |
| O-2 | City architecture | `CityData.tsx` / `[slug]` | 86 doorway pages (H1) | Consolidate to differentiated regional hubs OR noindex thin ones + keep 5–10 unique | P0/P1 | ⛔ blocked on H1 decision |

## Off-page (Phase 4) — owner action plan

| ID | Area | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|
| A-1 | Authority | Deliverable pending | Produce `ranking-action-plan.md` (GBP, directories, reviews, listicles, backlinks, GSC monitoring) | P1 | ⬜ safe-to-proceed |

---

### Notes
- IDs are stable; add new rows, don't renumber.
- "⛔ blocked" rows must wait for the §5 decision gate in [`ranking-drop-diagnosis.md`](./ranking-drop-diagnosis.md).
