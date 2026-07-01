# SEO Audit & Ranking-Recovery — Progress Tracker

**Branch:** `seo/testriq-audit-fixes` (based on `origin/main` @ `6778ffa3`, 2026-06-29)
**Driver prompt:** ranking-recovery master prompt (owner, 2026-07-01) — see also the prior 14-phase [`master-prompt.md`](./master-prompt.md) that drove the existing remediation program.
**Owner git identity only. No `Co-Authored-By`.**

> **Context:** This site already has a mature, in-flight SEO remediation program (see `git log` — "cycle2 sprint1–7", "phase-2…11", F-IDs like F-15/F-41/F-44/F-57). The May 2026 baseline ([`01-baseline.md`](./01-baseline.md)) drove ~30 SEO commits. Most of its P0/P1 findings are **already fixed** in production. This engagement therefore focuses on the **new** trigger — the **ranking decline** — plus the **remaining gaps** the earlier program did not close (non-defensible claims, doorway city pages, redirect chains).

---

## Phase status

| Phase | Description | Status | Date | Notes |
|---|---|---|---|---|
| 0 | Discovery / baseline (fresh code) | ✅ Done | 2026-07-01 | Extends [`01-baseline.md`](./01-baseline.md); confirmed against live `origin/main`. See [`ranking-drop-diagnosis.md`](./ranking-drop-diagnosis.md) §1. |
| 0.5 | **Ranking-drop diagnosis** | 🟡 Code-side done; **awaiting owner GSC/GA data** | 2026-07-01 | Ranked hypotheses + owner data-pull checklist in [`ranking-drop-diagnosis.md`](./ranking-drop-diagnosis.md). **This is the gate for Phases 1–3.** |
| 1 | Non-defensible claims cleanup | ⬜ Not started | — | Confirmed **NOT done**: 315× "500K", 68× "99.9%", 42× "zero-defect/bug-free", 47× "50+ clients", 7× "100% satisfaction". Backlog rows C-1…C-6. **Blocked on city-page decision (H1).** |
| 2 | Technical SEO audit + fix | 🟡 Partial (much already shipped) | — | Remaining: redirect chains (9), sitemap `lastmod` freshness, `[slug]` collision risk. Backlog T-*. |
| 3 | On-page / content SEO (cannibalization) | ⬜ Not started | — | Depends on H1/H3 (city + cannibalization) decisions. |
| 4 | Off-page / authority (owner action plan) | ⬜ Not started | — | To be delivered as `ranking-action-plan.md`. |
| 5 | Lead-gen / conversion (light-touch) | ⬜ Not started | — | Low priority until 0.5 resolved. |

Legend: ✅ done · 🟡 in progress / partial · ⬜ not started

---

## Immediate next action (OWNER)

The diagnosis cannot be finalized without Search Console data only you can pull. See the
**"Owner data-pull checklist"** in [`ranking-drop-diagnosis.md`](./ranking-drop-diagnosis.md) §4.
Nothing in Phases 1–3 should be mass-applied until the drop's root cause is confirmed — a blind
"SEO fix" on the wrong hypothesis can deepen the decline (esp. the 86 city pages).

## Immediate next action (AUDITOR, safe-to-proceed without GSC)

- Off-page action plan (`ranking-action-plan.md`) — no code risk.
- Redirect-chain flattening (backlog T-1) — safe, unambiguous.
- Claims cleanup on **non-city** section components (backlog C-*) — safe; city pages held pending H1.
