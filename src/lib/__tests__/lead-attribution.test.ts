/**
 * Vitest tests for src/lib/lead-attribution.ts — DEV-02 lead source attribution.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 *
 * Run via `npm run test` (single pass) or `npm run test:watch`.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { afterEach, describe, expect, it, vi } from "vitest";

import {
    LEAD_ATTRIBUTION_SHEET_HEADERS,
    LEAD_ATTRIBUTION_STORAGE_KEY,
    captureLeadAttribution,
    escapeHtml,
    initLeadAttribution,
    leadAttributionEmailHtml,
    leadAttributionEmailRows,
    leadAttributionSheetCells,
    readLeadAttribution,
} from "../lead-attribution";

// ---------------------------------------------------------------------------
// Browser doubles
// ---------------------------------------------------------------------------

function fakeStorage(
    initial: Record<string, string> = {},
    opts: { throwOnGet?: boolean; throwOnSet?: boolean } = {},
) {
    const store = new Map(Object.entries(initial));
    return {
        store,
        getItem(key: string) {
            if (opts.throwOnGet) throw new Error("storage blocked");
            return store.get(key) ?? null;
        },
        setItem(key: string, value: string) {
            if (opts.throwOnSet) throw new Error("storage blocked");
            store.set(key, value);
        },
    };
}

function stubBrowser({
    pathname = "/",
    search = "",
    referrer = "",
    storage = fakeStorage(),
}: {
    pathname?: string;
    search?: string;
    referrer?: string;
    storage?: ReturnType<typeof fakeStorage>;
} = {}) {
    vi.stubGlobal("window", { location: { pathname, search }, sessionStorage: storage });
    vi.stubGlobal("document", { referrer });
    return storage;
}

afterEach(() => {
    vi.unstubAllGlobals();
});

// ---------------------------------------------------------------------------
// Client capture
// ---------------------------------------------------------------------------

describe("initLeadAttribution", () => {
    it("records the landing page and the external referrer", () => {
        const storage = stubBrowser({
            pathname: "/api-testing",
            search: "?utm_source=google",
            referrer: "https://www.google.com/",
        });

        initLeadAttribution();

        expect(JSON.parse(storage.store.get(LEAD_ATTRIBUTION_STORAGE_KEY) as string)).toEqual({
            landingPage: "/api-testing?utm_source=google",
            landingReferrer: "https://www.google.com/",
        });
    });

    it("does not overwrite the first touch on a later page", () => {
        const storage = stubBrowser({ pathname: "/api-testing", referrer: "https://www.google.com/" });
        initLeadAttribution();

        // Visitor navigates internally; the component remounts and calls again.
        stubBrowser({ pathname: "/contact-us", referrer: "https://www.testriq.com/api-testing", storage });
        initLeadAttribution();

        expect(JSON.parse(storage.store.get(LEAD_ATTRIBUTION_STORAGE_KEY) as string)).toEqual({
            landingPage: "/api-testing",
            landingReferrer: "https://www.google.com/",
        });
    });

    it("does not throw when sessionStorage writes are blocked", () => {
        stubBrowser({ storage: fakeStorage({}, { throwOnSet: true }) });
        expect(() => initLeadAttribution()).not.toThrow();
    });

    it("does nothing on the server", () => {
        vi.stubGlobal("window", undefined);
        expect(() => initLeadAttribution()).not.toThrow();
    });
});

describe("captureLeadAttribution", () => {
    it("keeps the external referrer after internal navigation — the whole point of DEV-02", () => {
        const storage = stubBrowser({ pathname: "/api-testing", referrer: "https://www.bing.com/" });
        initLeadAttribution();

        // Two pages later, document.referrer is now our own previous page.
        stubBrowser({
            pathname: "/contact-us",
            referrer: "https://www.testriq.com/pricing",
            storage,
        });

        expect(captureLeadAttribution()).toEqual({
            landingPage: "/api-testing",
            landingReferrer: "https://www.bing.com/",
            submittedFrom: "/contact-us",
        });
    });

    it("includes the query string of the submitting page", () => {
        stubBrowser({ pathname: "/pricing", search: "?plan=enterprise" });
        expect(captureLeadAttribution().submittedFrom).toBe("/pricing?plan=enterprise");
    });

    it("falls back to live values when no first touch was recorded", () => {
        stubBrowser({ pathname: "/contact-us", referrer: "https://news.ycombinator.com/" });
        expect(captureLeadAttribution()).toEqual({
            landingPage: "/contact-us",
            landingReferrer: "https://news.ycombinator.com/",
            submittedFrom: "/contact-us",
        });
    });

    it("falls back when sessionStorage reads throw", () => {
        stubBrowser({
            pathname: "/contact-us",
            referrer: "https://example.com/",
            storage: fakeStorage({}, { throwOnGet: true }),
        });
        expect(captureLeadAttribution()).toMatchObject({ landingPage: "/contact-us" });
    });

    it("falls back when the stored value is corrupt", () => {
        for (const corrupt of ["not json", "null", "[]", '{"landingPage":123}']) {
            stubBrowser({
                pathname: "/contact-us",
                storage: fakeStorage({ [LEAD_ATTRIBUTION_STORAGE_KEY]: corrupt }),
            });
            expect(captureLeadAttribution().landingPage).toBe("/contact-us");
        }
    });

    it("reports a direct visit as an empty referrer, not a crash", () => {
        stubBrowser({ pathname: "/", referrer: "" });
        initLeadAttribution();
        expect(captureLeadAttribution().landingReferrer).toBe("");
    });

    it("returns empty strings on the server", () => {
        vi.stubGlobal("window", undefined);
        expect(captureLeadAttribution()).toEqual({
            landingPage: "",
            landingReferrer: "",
            submittedFrom: "",
        });
    });
});

// ---------------------------------------------------------------------------
// Server normalisation
// ---------------------------------------------------------------------------

describe("readLeadAttribution", () => {
    it("reads the three fields off a request body", () => {
        expect(
            readLeadAttribution({
                fullName: "Someone",
                landingPage: "/api-testing",
                landingReferrer: "https://www.google.com/",
                submittedFrom: "/contact-us",
            }),
        ).toEqual({
            landingPage: "/api-testing",
            landingReferrer: "https://www.google.com/",
            submittedFrom: "/contact-us",
        });
    });

    it("ignores non-string and missing values rather than trusting them", () => {
        expect(
            readLeadAttribution({ landingPage: 42, landingReferrer: { a: 1 }, submittedFrom: null }),
        ).toEqual({ landingPage: "", landingReferrer: "", submittedFrom: "" });
    });

    it("returns empty for a non-object body", () => {
        for (const body of [null, undefined, "string", 7, []]) {
            expect(readLeadAttribution(body)).toMatchObject({ landingPage: "" });
        }
    });

    it("trims whitespace", () => {
        expect(readLeadAttribution({ landingPage: "  /pricing  " }).landingPage).toBe("/pricing");
    });

    it("caps a hostile oversized value", () => {
        const huge = `https://evil.test/${"a".repeat(5000)}`;
        const read = readLeadAttribution({ landingReferrer: huge });
        expect(read.landingReferrer.length).toBeLessThan(600);
        expect(read.landingReferrer).toContain("[truncated]");
    });
});

describe("escapeHtml", () => {
    it("escapes the characters that would break out of an attribute or a tag", () => {
        expect(escapeHtml(`<script>alert("x")&'`)).toBe(
            "&lt;script&gt;alert(&quot;x&quot;)&amp;&#39;",
        );
    });
});

// ---------------------------------------------------------------------------
// Output formatting
// ---------------------------------------------------------------------------

describe("leadAttributionEmailHtml", () => {
    const attribution = {
        landingPage: "/api-testing",
        landingReferrer: "https://www.google.com/",
        submittedFrom: "/contact-us",
    };

    it("shows all three values", () => {
        const html = leadAttributionEmailHtml(attribution);
        expect(html).toContain("/api-testing");
        expect(html).toContain("https://www.google.com/");
        expect(html).toContain("/contact-us");
    });

    it("escapes an injected payload instead of emitting live HTML", () => {
        const html = leadAttributionEmailHtml({
            ...attribution,
            landingReferrer: '<img src=x onerror="alert(1)">',
        });
        expect(html).not.toContain("<img");
        expect(html).toContain("&lt;img");
    });

    it("labels a direct visit rather than rendering a blank row", () => {
        const html = leadAttributionEmailHtml({
            landingPage: "",
            landingReferrer: "",
            submittedFrom: "",
        });
        expect(html).toContain("(none - direct");
        expect(html).toContain("(unknown)");
    });
});

describe("leadAttributionEmailRows", () => {
    it("honours a custom opening tag for the two bespoke templates", () => {
        const rows = leadAttributionEmailRows(
            { landingPage: "/a", landingReferrer: "/b", submittedFrom: "/c" },
            '<p style="margin: 0;">',
        );
        expect(rows.split("<p").length - 1).toBe(3);
        expect(rows).toContain('<p style="margin: 0;"><strong>Landing Page:</strong>');
    });
});

describe("leadAttributionSheetCells", () => {
    it("produces one cell per header, in header order", () => {
        const cells = leadAttributionSheetCells({
            landingPage: "/a",
            landingReferrer: "/b",
            submittedFrom: "/c",
        });
        expect(cells).toEqual(["/a", "/b", "/c"]);
        expect(cells).toHaveLength(LEAD_ATTRIBUTION_SHEET_HEADERS.length);
    });

    it("never writes a blank cell, so a column cannot silently look unused", () => {
        const cells = leadAttributionSheetCells({
            landingPage: "",
            landingReferrer: "",
            submittedFrom: "",
        });
        expect(cells.every((c) => c.length > 0)).toBe(true);
    });
});

// ---------------------------------------------------------------------------
// Repo-wide guard
// ---------------------------------------------------------------------------

/**
 * Any API route that emails an enquiry to the team must carry attribution.
 * Scanning for the notification helper rather than listing today's nine routes
 * means a route added later fails here instead of quietly losing the data —
 * which is how the forms ended up un-instrumented in the first place.
 */
describe("every enquiry route carries attribution", () => {
    const API_DIR = join(process.cwd(), "src", "app", "api");

    const routeFiles: string[] = [];
    const walk = (dir: string) => {
        for (const entry of readdirSync(dir)) {
            const full = join(dir, entry);
            if (statSync(full).isDirectory()) walk(full);
            else if (entry === "route.ts" || entry === "route.tsx") routeFiles.push(full);
        }
    };
    walk(API_DIR);

    const notifiers = routeFiles.filter((f) => {
        const src = readFileSync(f, "utf8");
        return /async function send(Professional|Admin)Notification/.test(src);
    });

    it("finds the enquiry routes", () => {
        expect(notifiers.length).toBeGreaterThanOrEqual(9);
    });

    it.each(notifiers.map((f) => [f.split(/[\\/]/).slice(-2)[0], f] as const))(
        "%s reads attribution and renders it",
        (_name, file) => {
            const src = readFileSync(file, "utf8");
            expect(src).toContain("readLeadAttribution");
            expect(src).toMatch(/leadAttributionEmail(Html|Rows)/);
        },
    );

    it("never renders attribution into the client-facing confirmation email", () => {
        for (const file of notifiers) {
            const src = readFileSync(file, "utf8");
            const clientFnIndex = src.search(
                /async function send(Client|ClientConfirmation|ClientThankYou)/,
            );
            if (clientFnIndex === -1) continue;
            const afterClientFn = src.slice(clientFnIndex);
            expect(afterClientFn).not.toMatch(/leadAttributionEmail(Html|Rows)/);
        }
    });
});
