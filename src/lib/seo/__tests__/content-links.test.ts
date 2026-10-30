/**
 * Vitest tests for src/lib/seo/content-links.ts.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 *
 * Run via `npm run test` (single pass) or `npm run test:watch`.
 */

import { describe, expect, it } from "vitest";

import { EMPTY_HREF, isExternalHref, repairHref, toInternalHref } from "../content-links";

describe("repairHref", () => {
    it("repairs a scheme written with a single slash", () => {
        expect(repairHref("https:/www.testriq.com/")).toBe("https://www.testriq.com/");
        expect(repairHref("http:/example.com/x")).toBe("http://example.com/x");
    });

    it("leaves a correct URL alone", () => {
        expect(repairHref("https://www.testriq.com/x")).toBe("https://www.testriq.com/x");
        expect(repairHref("/blog")).toBe("/blog");
        expect(repairHref("mailto:a@b.com")).toBe("mailto:a@b.com");
    });

    it("does not turn a correct scheme into three slashes", () => {
        expect(repairHref("https://x.com")).not.toContain("///");
    });

    it("trims, and falls back for a missing href", () => {
        expect(repairHref("  /blog  ")).toBe("/blog");
        expect(repairHref("")).toBe(EMPTY_HREF);
        expect(repairHref("   ")).toBe(EMPTY_HREF);
        expect(repairHref(undefined)).toBe(EMPTY_HREF);
        expect(repairHref(null)).toBe(EMPTY_HREF);
        expect(repairHref(42)).toBe(EMPTY_HREF);
    });
});

describe("toInternalHref", () => {
    it("rewrites an absolute self-link as root-relative", () => {
        expect(toInternalHref("https://www.testriq.com/e-commerce-testing-services")).toBe(
            "/e-commerce-testing-services",
        );
    });

    it("handles the site without www", () => {
        expect(toInternalHref("https://testriq.com/manual-testing-services")).toBe(
            "/manual-testing-services",
        );
    });

    it("maps a bare origin to the homepage", () => {
        expect(toInternalHref("https://www.testriq.com")).toBe("/");
        expect(toInternalHref("https://www.testriq.com/")).toBe("/");
    });

    it("keeps a query or fragment attached to a path", () => {
        expect(toInternalHref("https://www.testriq.com?utm_source=x")).toBe("/?utm_source=x");
        expect(toInternalHref("https://www.testriq.com#top")).toBe("/#top");
        expect(toInternalHref("https://www.testriq.com/blog?page=2")).toBe("/blog?page=2");
    });

    it("does NOT treat a lookalike domain as our own", () => {
        // Without the host-boundary lookahead these would be rewritten to a
        // relative path, presenting somebody else's site as internal.
        expect(toInternalHref("https://www.testriq.com.evil.test/login")).toBe(
            "https://www.testriq.com.evil.test/login",
        );
        expect(toInternalHref("https://testriq.com.attacker.io/x")).toBe(
            "https://testriq.com.attacker.io/x",
        );
    });

    it("leaves a subdomain alone", () => {
        expect(toInternalHref("https://blog.testriq.com/x")).toBe("https://blog.testriq.com/x");
    });

    it("leaves genuinely external links alone", () => {
        expect(toInternalHref("https://www.google.com/search?q=qa")).toBe(
            "https://www.google.com/search?q=qa",
        );
        expect(toInternalHref("mailto:contact@testriq.com")).toBe("mailto:contact@testriq.com");
        expect(toInternalHref("tel:+919152929343")).toBe("tel:+919152929343");
    });

    it("leaves an already-relative link alone", () => {
        expect(toInternalHref("/blog/post/x")).toBe("/blog/post/x");
        expect(toInternalHref("#section")).toBe("#section");
    });
});

describe("isExternalHref", () => {
    it("is false for internal, anchor and empty targets", () => {
        expect(isExternalHref("/blog")).toBe(false);
        expect(isExternalHref("#top")).toBe(false);
        expect(isExternalHref(EMPTY_HREF)).toBe(false);
        expect(isExternalHref("")).toBe(false);
    });

    it("is false for mailto: and tel:, which should not open a tab", () => {
        expect(isExternalHref("mailto:contact@testriq.com")).toBe(false);
        expect(isExternalHref("tel:+919152929343")).toBe(false);
    });

    it("is true for another site", () => {
        expect(isExternalHref("https://www.google.com")).toBe(true);
        expect(isExternalHref("https://blog.testriq.com/x")).toBe(true);
    });
});

/**
 * The seven hrefs the live-content audit actually found. Each was being
 * rendered `target="_blank" rel="noopener noreferrer"` because the single-slash
 * scheme failed the renderer's prefix compare — so internal links to our own
 * service pages and /contact-us opened as though they were another site.
 */
describe("the malformed links found in live content", () => {
    const FOUND = [
        "https:/www.testriq.com/",
        "https:/www.testriq.com/e-commerce-testing-services",
        "https:/www.testriq.com/manual-testing-services",
        "https:/www.testriq.com/performance-testing-services",
        "https:/www.testriq.com/contact-us",
    ];

    it.each(FOUND)("%s resolves to an internal path", (href) => {
        const normalised = toInternalHref(href);
        expect(normalised.startsWith("/")).toBe(true);
        expect(normalised).not.toContain("testriq.com");
    });

    it.each(FOUND)("%s is no longer treated as external", (href) => {
        expect(isExternalHref(toInternalHref(href))).toBe(false);
    });
});
