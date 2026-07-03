# Service Pages — On-Page SEO Audit (all 51)

**Date:** 2026-07-03 · **Scope:** every page under `src/app/(services)/` on live `origin/main`.
**Method:** scripted extraction of title/description/schema/method + per-page H1 resolution across imported sections.

> **Headline:** The site's service pages fall into two clearly different groups. The **32 pages built
> with the `buildPageMetadata` helper are healthy** (well-sized descriptions, canonical+OG+schema+FAQ,
> brand in title). The **19 pages using hand-written ("manual") metadata are the problem set** —
> overlong descriptions, missing brand in the title, and **6 with no structured data at all.**
> Fixing the audit = mostly bringing the 19 manual pages up to the standard the other 32 already meet.

---

## 1. Summary (what's good / what's not)

**✅ Good across (nearly) all pages:**
- **H1:** all **51/51 pages have exactly one `<h1>`** — heading top-level is clean.
- **Canonical + OG:** every page emits a canonical + Open Graph (helper or manual). None missing.
- **Schema:** 45/51 have JSON-LD structured data; 44/51 have FAQ schema.
- **Descriptions on the 32 helper pages:** all sit in the ideal 143–160 char band.

**⚠️ Issues found:**
| Issue | Count | Which |
|---|---|---|
| **Title > 60 chars** (Google truncates in SERP) | **26** | mostly helper pages with long "keyword \| keyword \| Testriq" titles |
| **Title missing brand ("Testriq")** | **17** | all the manual-metadata pages |
| **Meta description > 160 chars** (truncated) | **18** | all manual-metadata pages (up to 269 chars) |
| **No structured data at all** | **6** | postman-api-testing-services, jmeter-performance-testing-services, playwright-testing-services, appium-mobile-testing-services, cypress-testing-services, selenium-testing-services |
| **No FAQ schema** | **1** | saas-testing-services |
| **Hand-written metadata (off the shared helper)** | **19** | inconsistent; source of most issues above |

---

## 2. The 6 highest-priority pages (no schema + off-pattern)

These 6 **tool pages** were added without the shared pattern — no `StructuredData`, no FAQ schema,
em-dash titles with no brand, descriptions 172–221 chars. They are the weakest service pages on the site:

- **postman-api-testing-services** — title 66 chars, desc 195 chars, no schema. Title: "Postman API Testing Services — Collections, Newman CI, Contract QA"
- **jmeter-performance-testing-services** — title 58 chars, desc 221 chars, no schema. Title: "JMeter Performance Testing Services — Load + Stress + Soak"
- **playwright-testing-services** — title 58 chars, desc 197 chars, no schema. Title: "Playwright Testing Services — Cross-Browser E2E Automation"
- **appium-mobile-testing-services** — title 57 chars, desc 195 chars, no schema. Title: "Appium Mobile Testing Services — iOS + Android Automation"
- **cypress-testing-services** — title 57 chars, desc 172 chars, no schema. Title: "Cypress Testing Services — Modern E2E + Component Testing"
- **selenium-testing-services** — title 57 chars, desc 194 chars, no schema. Title: "Selenium Testing Services — Selenium WebDriver Automation"

**Fix:** migrate to `buildPageMetadata` (fixes brand + description structure) and add `Service` +
`FAQPage` JSON-LD like the other 45 pages.

---

## 3. Prioritized fix plan

| Prio | Fix | Pages | Effort |
|---|---|---|---|
| **P1** | Trim titles to ≤60 chars, keep primary keyword front-loaded + "\| Testriq" | 26 | 1 line each |
| **P1** | Trim descriptions to ≤160 chars | 18 | 1 line each |
| **P1** | Add "Testriq" brand to titles missing it | 17 | folded into title trim |
| **P1** | Add `Service` + `FAQPage` schema to the 6 no-schema pages | 6 | moderate |
| **P2** | Migrate 19 manual pages → `buildPageMetadata` helper (consistency, drift-proof) | 19 | moderate |
| **P2** | Add FAQ schema to saas-testing-services | 1 | small |

> Note: content depth, keyword-in-body coverage, and internal-link density were **not** machine-graded
> here (they need per-page human/LLM review). The scripted layer covers titles, meta, schema, H1,
> canonical — the highest-leverage on-page factors. Deeper content review can follow per page.

---

## 4. Full per-page table (sorted by title length, longest first)

| Page (slug) | Title len | Desc len | Method | Schema | FAQ | Issues |
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

## 5. Recommended order of execution
1. **P1 title trims** (26 pages) — biggest SERP/CTR win, lowest risk.
2. **P1 description trims** (18 pages).
3. **Schema for the 6 tool pages** — closes the structured-data gap.
4. **P2 helper migration** for the 19 manual pages — makes future drift impossible.
