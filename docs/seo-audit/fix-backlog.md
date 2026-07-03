# Fix Backlog — Ranking Recovery

One row per discrete issue. Status: ⬜ todo · 🟡 in progress · ✅ done · ⛔ blocked (needs decision).
Priority: P0 (traffic-blocking) · P1 (ranking impact) · P2 (compounding) · P3 (strategic).

> Only issues **not already resolved** by the existing remediation program are listed. Verified
> against live `origin/main` @ `6778ffa3` on 2026-07-01.

---

## Content claims (Phase 1) — non-defensible marketing

| ID | Area | File(s) | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| C-1 | Claims | `src/app/lib/CityData.tsx` + `src/components/sections/*` (315 hits) | "500K+ test cases executed/delivered" stated as fact, unsourced, on ~86 city pages + sections | Reframe to capability ("large-scale test execution") OR cite a real figure. **Non-city prose/meta done** (AboutFAQ, about-us meta). **Displayed stat cards held** (see Held list). City instances blocked by H1. | P1 | 🟡 prose/meta done; stat-cards + city held |
| C-2 | Claims | ~50 `src/components/sections/*` (68 hits) | "99.9% uptime/success" — some are Testriq guarantees (non-defensible), some describe *client SLA targets* (defensible) | Per-context: keep where it describes what Testriq *tests for*; remove where it's a Testriq guarantee | P1 | ⬜ |
| C-3 | Claims | sections (42 hits) | "zero-defect / bug-free / crash-free" absolute guarantees | Reframe to "reliable", "defect reduction". **Prose/meta done** (sap meta, gaming meta+prose ×3, e-commerce, case-studies meta). Metric-card labels ("Bug-Free Launch Rate") held. | P1 | 🟡 prose/meta done; metric labels held |
| C-4 | Claims | sections + CityData (47 hits) | "50+/150+ companies" unsourced counts (number even varies 50↔150 across pages) | Reframed 14 non-city instances to qualitative ("trusted by teams/companies across industries"), incl. AI page SERP meta. City instances held (H1). | P2 | 🟡 non-city done; city held |
| C-5 | Claims | sections (7 hits) | "100% client satisfaction" / "100% Satisfaction Guaranteed" | Reframe to "strong client satisfaction". **Prose/badge done** (AboutMission, CaseStudiesOverview prose, CaseStudyTestimonial, CaseStudiesReadyToStart badge, Telecom). Metric card `"100% Satisfaction"` held. | P1 | 🟡 prose done; metric card held |
| C-6 | Claims | company-level copy (subset of 133 "years" hits) | "15+ years of experience" at **company** level — verify vs Testriq's real founding date; individual-bio uses are fine if real | Owner to confirm founding year; auditor fixes company-level claims to match | P1 | ⬜ needs owner input |
| C-7 | Superlatives | `CityData.tsx` + sections (~40 marketing "leading"/"best") | Puffery in titles/descriptions ("Leading software testing company in {city}") | Neutral descriptive, keep keyword ("Software testing company in {city}") | P2 | ⛔ blocked by H1 |

### Held: displayed stat/metric cards (need a real number OR a design decision)
These render as big-number cards (`{ number: "500K+", label: … }`, `metric: "100% Satisfaction"`,
`99.9%` + "Bug-Free Launch Rate"). Rewording them to qualitative text breaks the visual grid, and
I won't fabricate a replacement number. **Owner: provide a real, defensible figure per card, or
approve replacing these with non-numeric trust signals (e.g., "ISTQB-certified", "SOC2", "50+ testing
services").** Locations (non-city): `HomeHeroSection:74`, `AboutHeroSection:68,111`, `AboutStorySection:141`,
`CaseStudyCallToActionSection:91`, `ApiCaseStudies:120`, `ManagedTestingHeroSection:78`,
`ManagedTestingStrategy:31`, `UATHeroSection:62`, `UATWhyChooseSection:21,73`,
`CaseStudiesOverviewSection:65` (100% Satisfaction), `GamingTestingServicesSection:405-408` (99.9% Bug-Free),
`GamingChallengesSection:173`, `GamingTestingProcessSection:367`, `GamingCaseStudiesSection:28,114`.
> Note: `$500K`-style figures in the ROI calculators (Banking/Ecommerce/Gaming/Healthcare/IoT/SaaS ROI
> sections) are **cost estimates, not Testriq claims** — intentionally left as-is.

## Technical SEO (Phase 2) — remaining

| ID | Area | File(s) | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| T-1 | Redirects | `src/lib/seo/redirect-map.ts` | 10 redirect **chains** (destination is also a source) — mostly `/blog/post/*`, `/blog/tag/*` | Flattened each chain to a single hop (source → terminal destination); intermediates left intact | P2 | ✅ done 2026-07-01 |
| T-2 | Sitemap | `src/app/sitemap.ts:104,138,152,162` | `lastModified: currentDate` for all non-blog URLs → artificial freshness, discounted | Use real content mtime (file/Sanity/manifest) | P2 | ⬜ |
| T-3 | Routing | `src/app/[slug]/page.tsx` | Polymorphic catch-all mixes cities + case studies in one namespace → slug-collision risk | Namespace or guard against collision; document precedence | P2 | ⬜ |
| T-4 | Schema | `src/app/[slug]/page.tsx:214` | Per-case-study `Review.ratingValue` — verify each rating is real/attributable | Confirm data source; remove if not verifiable | P1 | ⬜ needs owner input |
| T-5 | Canonicals | dropped pages (TBD from GSC) | Verify Google-selected canonical == self on pages that lost rank (H2) | Audit per URL once GSC list is in | P1 | ⛔ blocked on GSC |
| T-6 | Crawl / 404 | GSC "Not found (404)" (490 as of 2026-06-30, down from 626) | Analyzed full export. Breakdown: **368 dead blog *tag* pages** (noindexed/deleted — 404 is correct, Google already dropping them), 32 `_next` assets (normal), 6 junk (`/debug` etc. — correct 404), ~20 real page URLs. **Many real ones already redirected** (added May 15; Google last crawled Apr → will clear on recrawl). Added **8 new** redirects for uncovered legacy/typo URLs → live pages. Redirect map confirmed live (`next.config.ts:57`). | P1 | ✅ done 2026-07-03 |
| T-6a | Crawl / 404 | `RoboticFAQs.tsx`, `BlogQAKnowledgeHub.tsx` | 2 broken internal links (`/database-testing-services`, `/learning-paths`) → 404 | Repointed to `/etl-testing-services` and `/blog`. (Code-side scan found only these 2 — rest of 551 are external/legacy URLs.) | P1 | ✅ done 2026-07-01 |
| T-7 | Thin content | GSC "Crawled – not indexed" = **2,178 (rising)** | Large volume of thin/duplicate pages Google won't index (cities + blog tag/category + programmatic) | Reduce/consolidate/noindex thin pages; improve the keepers. Ties to O-2. | P0 | ⛔ needs city/taxonomy decision |
| T-8 | Blog tags | `blog/tag/[tag]` slug generation | Many 404 tag URLs have malformed slugs: slashes (`ci/cd`, `ai/ml-validation`), `&`, `,`, trailing `.`/`(...)`. Slash-containing tags break the single-segment route. Root cause of a big share of the 368 tag 404s. | Sanitize tag slugs (strip/encode `/ & , .` etc.); consider consolidating the ~360 thin tag pages (they're noindexed anyway). | P2 | ⬜ (recommend: reduce tag sprawl) |

## On-page / cannibalization (Phase 3)

| ID | Area | Scope | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| O-1 | Cannibalization | services × solutions × cities × comparisons | Overlapping keyword targets (H3) | One keyword-owner per page; intent-based title/meta remap; interlink | P1 | ⛔ blocked on GSC |
| O-2 | City architecture | `CityData.tsx` / `[slug]` | 86 doorway pages (H1) | Consolidate to differentiated regional hubs OR noindex thin ones + keep 5–10 unique | P0/P1 | ⛔ blocked on H1 decision |

## Service pages on-page (Phase 3) — see [`service-pages-audit.md`](./service-pages-audit.md)

| ID | Area | Scope | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|---|
| S-1 | Titles | 26 service pages | Title > 60 chars → truncated in SERP | Trimmed all 26 to ≤60 (48–60), keyword front-loaded + brand kept; added "\| Testriq" to postman + saas. title>60 now 0. | P1 | ✅ done 2026-07-03 |
| S-2 | Meta desc | 18 service pages (all manual-metadata) | Description > 160 chars (up to 269) → truncated | Trimmed all 18 to ≤160 (145–160), keywords kept; dropped "500+ trading platforms" claim. desc>160 now 0. | P1 | ✅ done 2026-07-03 |
| S-3 | Schema | 6 tool pages (postman, jmeter, playwright, appium, cypress, selenium) | **No structured data at all** (no Service/FAQ JSON-LD) | Add Service + FAQPage schema like the other 45 | P1 | ⬜ |
| S-4 | Consistency | 19 manual-metadata pages | Off the shared `buildPageMetadata` helper → drift, no brand in title | Migrate to helper | P2 | ⬜ |
| S-5 | Schema | saas-testing-services | No FAQ schema | Add FAQPage | P2 | ⬜ |

> H1 (51/51 exactly one ✓), canonical + OG (all present ✓) verified clean — no action needed.

## Off-page (Phase 4) — owner action plan

| ID | Area | Issue | Fix | Prio | Status |
|---|---|---|---|---|---|
| A-1 | Authority | Deliverable pending | Produced [`ranking-action-plan.md`](./ranking-action-plan.md) (P0/P1/P2: GSC, GBP, directories, reviews, listicles, backlinks, monitoring) | P1 | ✅ done 2026-07-01 |

---

### Notes
- IDs are stable; add new rows, don't renumber.
- "⛔ blocked" rows must wait for the §5 decision gate in [`ranking-drop-diagnosis.md`](./ranking-drop-diagnosis.md).
