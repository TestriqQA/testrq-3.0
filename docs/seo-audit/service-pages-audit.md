# Service Pages — On-Page SEO Audit (all 51)

**Date:** 2026-07-03 · **Scope:** every page under `src/app/(services)/` on live `origin/main`.
**Method:** scripted extraction of title/description/schema/method + per-page H1 resolution across imported sections.

> **Headline:** The site's service pages fall into two clearly different groups. The **32 pages built
> with the `buildPageMetadata` helper are healthy** (well-sized descriptions, canonical+OG+schema+FAQ,
> brand in title). The **19 pages using hand-written ("manual") metadata are the problem set** —
> overlong descriptions and missing brand in the title.
> Fixing the audit = mostly bringing the 19 manual pages up to the standard the other 32 already meet.
>
> **Correction (2026-07-03):** an earlier draft flagged 6 tool pages as "no structured data" — **that
> was a false positive.** The audit script only grepped each `page.tsx`; those 6 render **Service +
> FAQPage + BreadcrumbList** JSON-LD via the shared `ToolLandingPage` component. **All 51 pages have
> structured data.** Titles/descriptions (S-1, S-2) are now fixed.

---

## 1. Summary (what's good / what's not)

**✅ Good across (nearly) all pages:**
- **H1:** all **51/51 pages have exactly one `<h1>`** — heading top-level is clean.
- **Canonical + OG:** every page emits a canonical + Open Graph (helper or manual). None missing.
- **Schema:** **51/51 have JSON-LD structured data** (45 in-page, 6 via the shared `ToolLandingPage`); FAQ schema on every page that has a FAQ section.
- **Descriptions on the 32 helper pages:** all sit in the ideal 143–160 char band.

**⚠️ Issues found:**
| Issue | Count | Which |
|---|---|---|
| **Title > 60 chars** (Google truncates in SERP) → ✅ **FIXED (S-1)** | ~~26~~ **0** | trimmed to ≤60 on 2026-07-03 |
| **Title missing brand ("Testriq")** | **15** | manual-metadata pages (down from 17; brand added to postman + saas) |
| **Meta description > 160 chars** → ✅ **FIXED (S-2)** | ~~18~~ **0** | trimmed to ≤160 on 2026-07-03 |
| ~~No structured data~~ **(false positive — corrected)** | ~~6~~ **0** | 6 tool pages render schema via `ToolLandingPage`; script checked page files only |
| No FAQ schema (verify) | 1? | saas-testing-services has Service schema; confirm whether it needs FAQPage |
| **Hand-written metadata (off the shared helper)** | **19** | inconsistent; still worth migrating to helper (S-4) |

---

## 2. Correction: the 6 "tool" pages are NOT missing schema

The 6 tool pages — `postman`, `jmeter`, `playwright`, `appium`, `cypress`, `selenium` — were flagged
"no schema" by an early automated pass that only grepped each `page.tsx`. In fact **all 6 use the
shared `ToolLandingPage` component** ([src/components/sections/ToolLandingPage.tsx](../../src/components/sections/ToolLandingPage.tsx)),
which renders **BreadcrumbList + Service + FAQPage** JSON-LD from the `serviceTypeForSchema`,
`schemaDescription`, and `faqs` props each page passes. **No schema fix was needed.** Their over-length
titles and descriptions *were* real and have been fixed (S-1, S-2). Lesson logged: schema audits must
resolve shared wrapper components, not just page files.

---

## 3. Prioritized fix plan

| Prio | Fix | Pages | Effort |
|---|---|---|---|
| ✅ done | Trim titles to ≤60 chars, keyword front-loaded + "\| Testriq" (S-1) | 26 | done 2026-07-03 |
| ✅ done | Trim descriptions to ≤160 chars (S-2) | 18 | done 2026-07-03 |
| ✅ done | Add "Testriq" brand to titles missing it | postman, saas | folded into S-1 |
| ~~P1~~ | ~~Add schema to 6 tool pages~~ — **not needed (false positive; schema present via `ToolLandingPage`)** | 0 | — |
| **P2** | Migrate remaining manual pages → `buildPageMetadata` helper (consistency, drift-proof) | ~17 | moderate |
| **P2** | Confirm/​add FAQ schema on saas-testing-services | 1 | small |

> Note: content depth, keyword-in-body coverage, and internal-link density were **not** machine-graded
> here (they need per-page human/LLM review). The scripted layer covers titles, meta, schema, H1,
> canonical — the highest-leverage on-page factors. Deeper content review can follow per page.

---

## 4. Full per-page table (sorted by title length, longest first)

> **Snapshot at audit time (pre-fix).** Title-len and desc-len columns show the *original* values;
> S-1/S-2 have since brought all to ≤60/≤160. The **Schema `N`** on the 6 tool pages is the corrected
> false positive (§2) — they do have schema via `ToolLandingPage`.
|---|---|---|---|---|---|---|
| iso-iec-42001-compliance-testing-services | 93 ⚠ | 269 ⚠ | manual | Y | Y | title>60, desc>160 |
| blockchain-app-testing-services | 74 ⚠ | 157 | helper | Y | Y | title>60 |
| web-application-testing-services | 72 ⚠ | 156 | helper | Y | Y | title>60 |
| managed-testing-services | 69 ⚠ | 218 ⚠ | manual | Y | Y | title>60, desc>160 |
| accessibility-testing-services | 68 ⚠ | 156 | helper | Y | Y | title>60 |
| compatibility-testing-services | 68 ⚠ | 157 | helper | Y | Y | title>60 |
| data-analysis-services | 68 ⚠ | 159 | helper | Y | Y | title>60 |
| application-architecture-inspection-services | 67 ⚠ | 152 | helper | Y | Y | title>60 |
| timezone-testing-services | 67 ⚠ | 158 | helper | Y | Y | title>60 |
| desktop-application-testing-services | 66 ⚠ | 143 | helper | Y | Y | title>60 |
| postman-api-testing-services | 66 ⚠ | 195 ⚠ | manual | **N** | Y | title>60, desc>160, **no schema**, no brand |
| ad-hoc-testing | 65 ⚠ | 153 | helper | Y | Y | title>60 |
| iot-device-testing-services | 65 ⚠ | 153 | helper | Y | Y | title>60 |
| microservices-testing | 65 ⚠ | 157 | helper | Y | Y | title>60 |
| regression-testing | 65 ⚠ | 150 | helper | Y | Y | title>60 |
| test-data-management-services | 65 ⚠ | 159 | helper | Y | Y | title>60 |
| exploratory-testing | 64 ⚠ | 152 | helper | Y | Y | title>60 |
| functional-testing-services | 64 ⚠ | 158 | helper | Y | Y | title>60 |
| migration-testing | 64 ⚠ | 153 | helper | Y | Y | title>60 |
| mobile-application-testing | 64 ⚠ | 160 | helper | Y | Y | title>60 |
| security-testing | 64 ⚠ | 160 | helper | Y | Y | title>60 |
| cyber-security-testing-services | 63 ⚠ | 157 | helper | Y | Y | title>60 |
| usability-testing-services | 63 ⚠ | 158 | helper | Y | Y | title>60 |
| performance-testing-services | 62 ⚠ | 159 | helper | Y | Y | title>60 |
| saas-testing-services | 62 ⚠ | 143 | manual | Y | N | title>60, no FAQ, no brand |
| shift-left-testing | 62 ⚠ | 144 | helper | Y | Y | title>60 |
| ai-application-testing | 60 | 170 ⚠ | manual | Y | Y | desc>160, no brand |
| azure-testing-services | 60 | 199 ⚠ | manual | Y | Y | desc>160, no brand |
| corporate-qa-training | 60 | 171 ⚠ | manual | Y | Y | desc>160, no brand |
| embedded-testing-services | 60 | 148 | helper | Y | Y | ✓ ok |
| user-acceptance-testing | 59 | 155 | helper | Y | Y | ✓ ok |
| automation-testing-services | 58 | 158 | helper | Y | Y | ✓ ok |
| jmeter-performance-testing-services | 58 | 221 ⚠ | manual | **N** | Y | desc>160, **no schema**, no brand |
| playwright-testing-services | 58 | 197 ⚠ | manual | **N** | Y | desc>160, **no schema**, no brand |
| appium-mobile-testing-services | 57 | 195 ⚠ | manual | **N** | Y | desc>160, **no schema**, no brand |
| continuous-testing-services-cicd-pipeline | 57 | 152 | helper | Y | Y | ✓ ok |
| cypress-testing-services | 57 | 172 ⚠ | manual | **N** | Y | desc>160, **no schema**, no brand |
| selenium-testing-services | 57 | 194 ⚠ | manual | **N** | Y | desc>160, **no schema**, no brand |
| api-testing | 56 | 150 | helper | Y | Y | ✓ ok |
| smart-device-testing-services | 56 | 160 | helper | Y | Y | ✓ ok |
| manual-testing-services | 54 | 154 | helper | Y | Y | ✓ ok |
| etl-testing-services | 53 | 157 | helper | Y | Y | ✓ ok |
| robotics-testing-services | 52 | 155 | helper | Y | Y | ✓ ok |
| sap-testing-services | 51 | 165 ⚠ | manual | Y | Y | desc>160, no brand |
| agile-testing-services | 50 | 145 | helper | Y | Y | ✓ ok |
| qa-documentation-services | 43 | 202 ⚠ | manual | Y | Y | desc>160, no brand |
| launchfast-qa | 37 | 211 ⚠ | manual | Y | Y | desc>160, no brand |
| matrimonial-apps-certification | 31 | 198 ⚠ | manual | Y | Y | desc>160, no brand |
| shopping-apps-certification | 26 | 204 ⚠ | manual | Y | Y | desc>160, no brand |
| trading-apps-certification | 25 | 226 ⚠ | manual | Y | Y | desc>160, no brand |
| dating-app-certification | 24 | 193 ⚠ | manual | Y | Y | desc>160, no brand |


---

## 5. Status / remaining
1. ✅ **Title trims** (26 pages) — done (S-1).
2. ✅ **Description trims** (18 pages) — done (S-2).
3. ✅ **Schema for the 6 tool pages** — no action needed (false positive; schema present via `ToolLandingPage`).
4. ⬜ **P2 helper migration** for the remaining manual pages — makes future drift impossible (optional, consistency).
5. ⬜ **Deeper per-page content review** (word depth, keyword-in-body, internal links) — not machine-graded; can follow.
