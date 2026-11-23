import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { redirects } from "../redirect-map";

const D3_LONG =
    "/blog/post/top-5-reasons-to-choose-our-ai-testing-services-the-best-api-testing-company-and-qa-experts";
const D3_SHORT = "/blog/post/top-5-reasons-to-choose-our-ai-testing-services";

const ruleFor = (source: string) => redirects.filter((r) => r.source === source);

describe("SEO report D-3: AI testing blog post retired into the service page", () => {
    it("permanently redirects the post's real (long) slug to /ai-application-testing", () => {
        const rules = ruleFor(D3_LONG);
        expect(rules).toHaveLength(1);
        expect(rules[0].destination).toBe("/ai-application-testing");
        expect(rules[0].permanent).toBe(true);
    });

    it("keeps the original short-slug rule", () => {
        expect(ruleFor(D3_SHORT).map((r) => r.destination)).toEqual(["/ai-application-testing"]);
    });

    it("lands on a real page, in one hop", () => {
        expect(existsSync(join(process.cwd(), "src", "app", "(services)", "ai-application-testing", "page.tsx"))).toBe(true);
        expect(ruleFor("/ai-application-testing")).toHaveLength(0);
    });
});

describe("SEO report D-4: ai-bias-audit merged into the bias and fairness audit guide", () => {
    const OLD = "/blog/post/ai-bias-audit";
    const NEW = "/blog/post/ai-bias-fairness-audit-guide";

    it("permanently redirects the old post to the guide, in one hop", () => {
        const rules = ruleFor(OLD);
        expect(rules).toHaveLength(1);
        expect(rules[0].destination).toBe(NEW);
        expect(rules[0].permanent).toBe(true);
        expect(ruleFor(NEW)).toHaveLength(0);
    });

    it("the New York page links straight to the guide, not through the redirect", () => {
        const src = readFileSync(
            join(process.cwd(), "src", "components", "sections", "NewYorkUSRequirementsSection.tsx"),
            "utf8",
        );
        expect(src).not.toContain(`"${OLD}"`);
        expect(src).toContain(`"${NEW}"`);
    });
});

describe("redirect map invariants", () => {
    it("has no duplicate sources", () => {
        const seen = new Map<string, number>();
        for (const r of redirects) {
            if (r.has || r.missing) continue; // conditional rules may share a source
            seen.set(r.source, (seen.get(r.source) ?? 0) + 1);
        }
        expect([...seen].filter(([, n]) => n > 1).map(([s]) => s)).toEqual([]);
    });

    it("has no two-hop chains (a destination that is itself a redirect source)", () => {
        const sources = new Set(redirects.filter((r) => !r.has && !r.missing).map((r) => r.source));
        const chains = redirects
            .filter((r) => sources.has(r.destination))
            .map((r) => `${r.source} -> ${r.destination}`);
        expect(chains).toEqual([]);
    });
});
