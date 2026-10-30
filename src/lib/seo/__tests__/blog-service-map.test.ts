/**
 * PART 6 guard — the blog-post-to-service-page map.
 *
 * This module had no test coverage while carrying the whole "route authority
 * back from the blog to the service pages" job, so these lock down the two
 * things the cannibalisation audit actually caught:
 *
 *   1. A post whose HEADLINE names a topic but whose Sanity tags do not. The
 *      tag-keyword step used to search only `tags`, so such a post fell
 *      through to DEFAULT_SERVICES and linked to nothing for the very term it
 *      competes with. Two UAT posts were in exactly that state.
 *   2. Anchor text drifting away from the target page's phrase. The map's
 *      contract is that `title` mirrors the destination H1 so the anchor
 *      reinforces the term that page ranks for; a PART 5 H1 rewrite silently
 *      broke that on four entries.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 */

import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { SERVICES, getRelatedServices } from "../blog-service-map";

const REPO_ROOT = join(__dirname, "..", "..", "..", "..");

/** Slug -> the page.tsx that must back it, under either route group. */
function pageFileFor(slug: string): string | null {
  for (const group of ["(services)", "(solutions)"]) {
    const f = join(REPO_ROOT, "src", "app", group, ...slug.split("/"), "page.tsx");
    if (existsSync(f)) return f;
  }
  return null;
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

describe("SERVICES table", () => {
  it("is not empty", () => {
    expect(Object.keys(SERVICES).length).toBeGreaterThan(20);
  });

  it("keys its entries by their own slug", () => {
    for (const [key, link] of Object.entries(SERVICES)) {
      expect(link.slug).toBe(key);
    }
  });

  it("points every slug at a page that exists", () => {
    const missing = Object.keys(SERVICES).filter((slug) => pageFileFor(slug) === null);
    expect(missing).toEqual([]);
  });

  it("gives every entry anchor text containing that page's target phrase", () => {
    // The phrase is the slug read as words; for a sub-page it is the last
    // segment, since that is what the child page targets.
    const drifted = Object.values(SERVICES)
      .filter((link) => {
        const leaf = link.slug.split("/").pop() as string;
        return !norm(link.title).includes(norm(leaf.replace(/-/g, " ")));
      })
      .map((link) => `${link.slug}: "${link.title}"`);
    expect(drifted).toEqual([]);
  });

  it("gives every entry a non-empty description", () => {
    for (const link of Object.values(SERVICES)) {
      expect(link.description.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("getRelatedServices", () => {
  it("resolves a topic named only in the title", () => {
    // The regression: no categories, no useful tags, topic only in the
    // headline. Before the fix this returned DEFAULT_SERVICES.
    const picked = getRelatedServices(
      [],
      [],
      3,
      "User Acceptance Testing (UAT): The ROI Guide for Leaders",
    );
    expect(picked.map((s) => s.slug)).toContain("user-acceptance-testing");
  });

  it("still resolves a topic named only in the tags", () => {
    const picked = getRelatedServices([], ["penetration testing"], 3, "A Headline With No Topic");
    expect(picked.map((s) => s.slug)).toContain("security-testing");
  });

  it("lets the category match take precedence over the title", () => {
    // manual-testing maps to three services; a title naming an unrelated
    // topic must not displace them, because the category is the stronger
    // signal and is applied first.
    const picked = getRelatedServices(
      ["manual-testing"],
      [],
      3,
      "Everything About Performance Load And Stress Testing",
    );
    expect(picked.map((s) => s.slug)).toEqual([
      "manual-testing-services",
      "exploratory-testing",
      "user-acceptance-testing",
    ]);
  });

  it("falls back to defaults when nothing matches", () => {
    const picked = getRelatedServices([], [], 3, "Quarterly Company Update");
    expect(picked.map((s) => s.slug)).toEqual([
      "qa-outsourcing-services",
      "automation-testing-services",
      "manual-testing-services",
    ]);
  });

  it("never exceeds the limit and never repeats a service", () => {
    for (const limit of [1, 2, 3, 5]) {
      const picked = getRelatedServices(
        ["manual-testing", "automation-testing"],
        ["security", "performance", "api"],
        limit,
        "Mobile And Web Regression Testing Guide",
      );
      expect(picked.length).toBeLessThanOrEqual(limit);
      expect(new Set(picked.map((s) => s.slug)).size).toBe(picked.length);
    }
  });

  it("always returns resolvable entries, never bare slugs", () => {
    const picked = getRelatedServices(["manual-testing"], [], 3, "");
    for (const link of picked) {
      expect(link).toBeDefined();
      expect(typeof link.slug).toBe("string");
      expect(pageFileFor(link.slug)).not.toBeNull();
    }
  });

  it("pads to the limit so the row never renders half-empty", () => {
    // A single narrow match plus padding should still fill three cards.
    const picked = getRelatedServices([], ["accessibility"], 3, "");
    expect(picked.length).toBe(3);
    expect(picked.map((s) => s.slug)).toContain("accessibility-testing-services");
  });
});

describe("headline phrase beats a broad category", () => {
  // These are the real inputs from the two posts the cannibalisation audit
  // caught. `quality-assurance` and `software-quality-assurance` each map to
  // three services, so before the headline step they filled every slot and the
  // post linked to nothing for the term it actually competes on.
  const BROAD = ["quality-assurance"];

  it("links the service whose exact phrase is in the headline", () => {
    const picked = getRelatedServices(
      BROAD,
      ["user-acceptance-testing-uat", "uat-process"],
      3,
      "User Acceptance Testing (UAT): The ROI Guide for Leaders",
    );
    expect(picked.map((s) => s.slug)).toContain("user-acceptance-testing");
  });

  it("does the same for the second UAT post's headline", () => {
    const picked = getRelatedServices(
      ["software-quality-assurance"],
      ["uat-process"],
      3,
      "Ultimate Guide to User Acceptance Testing (UAT) | 2026",
    );
    expect(picked.map((s) => s.slug)).toContain("user-acceptance-testing");
  });

  it("still leaves room for the category's picks", () => {
    // One slot to the headline, the rest to the category — not a takeover.
    const picked = getRelatedServices(BROAD, [], 3, "Smart Device Testing Services: Complete QA Guide 2026");
    const slugs = picked.map((s) => s.slug);
    expect(slugs).toContain("smart-device-testing-services");
    expect(slugs.length).toBe(3);
    // At least one category pick survives alongside the headline match.
    expect(slugs.some((s) => ["qa-outsourcing-services", "manual-testing-services", "automation-testing-services"].includes(s))).toBe(true);
  });

  it("ignores a phrase of only two words, which is too generic to claim a slot", () => {
    // "security testing" appears in 15 post titles, nearly all of them plainly
    // informational. Letting a two-word phrase win would hand a slot away from
    // the category on every one of them.
    const picked = getRelatedServices(BROAD, [], 3, "Using Burp Suite for Security Testing: Beginner to Pro Guide");
    expect(picked.map((s) => s.slug)).toEqual([
      "qa-outsourcing-services",
      "manual-testing-services",
      "automation-testing-services",
    ]);
  });

  it("does nothing when the headline is empty", () => {
    const picked = getRelatedServices(BROAD, [], 3, "");
    expect(picked.map((s) => s.slug)).toEqual([
      "qa-outsourcing-services",
      "manual-testing-services",
      "automation-testing-services",
    ]);
  });
});
