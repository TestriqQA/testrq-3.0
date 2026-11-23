/**
 * Vitest tests for src/components/seo/StructuredData.tsx
 *
 * Strategy: render the component to a static HTML string via
 * react-dom/server's renderToStaticMarkup (no DOM, no jsdom, no
 * hydration). The component is a pure Server Component — its output
 * is fully determined by its props — so static-markup rendering is
 * sufficient to verify the contract.
 *
 * Each test maps to one row of the edge-case behavior matrix in the
 * component's JSDoc.
 *
 * Run via `npm run test` (single pass) or `npm run test:watch`.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

import { renderToStaticMarkup } from "react-dom/server";

import * as Schemas from "../StructuredData";
import StructuredData, {
    caseStudiesSchema,
    createBreadcrumbSchema,
    createCanonicalBreadcrumb,
    pricingBundleOffer,
    ourTeamPageSchema,
    pricingServiceSchema,
} from "../StructuredData";
import { pricingPackages } from "../../../data/pricingPackages";
import { SERVICE_AREA_SERVED, TARGET_MARKET_COUNTRIES } from "../../../lib/seo/target-markets";
import { cleanProfileUrl, teamLeaders, teamMemberSlug } from "../../../data/teamLeaders";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Render a JSX element to its server-side HTML string. */
function render(el: React.ReactElement): string {
    return renderToStaticMarkup(el);
}

/** Count `<script type="application/ld+json">` occurrences in HTML. */
function countLdJson(html: string): number {
    const matches = html.match(/<script type="application\/ld\+json">/g);
    return matches ? matches.length : 0;
}

/** Extract the JSON content of the Nth `<script type="application/ld+json">` block. */
function extractJson(html: string, n = 0): string {
    const matches = [
        ...html.matchAll(
            /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
        ),
    ];
    return matches[n] ? matches[n][1] : "";
}

const sampleService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Foo Service",
} as const;

const sampleFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [],
} as const;

const sampleBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [],
} as const;

// ---------------------------------------------------------------------------
// 1 — Single object input
// ---------------------------------------------------------------------------

describe("<StructuredData> — single object input", () => {
    it("renders 1 <script> element with correct type attribute", () => {
        const html = render(<StructuredData data={sampleService} />);
        expect(countLdJson(html)).toBe(1);
        expect(html).toContain('type="application/ld+json"');
    });

    it("renders the object content as JSON-stringified body", () => {
        const html = render(<StructuredData data={sampleService} />);
        const body = extractJson(html);
        const parsed = JSON.parse(body);
        expect(parsed).toEqual(sampleService);
    });
});

// ---------------------------------------------------------------------------
// 2 — Array input renders multiple scripts in order
// ---------------------------------------------------------------------------

describe("<StructuredData> — array input", () => {
    it("renders 3 <script> elements for an array of 3 schemas", () => {
        const html = render(
            <StructuredData data={[sampleService, sampleFAQ, sampleBreadcrumb]} />,
        );
        expect(countLdJson(html)).toBe(3);
    });

    it("renders schemas in the order provided", () => {
        const html = render(
            <StructuredData data={[sampleService, sampleFAQ, sampleBreadcrumb]} />,
        );
        const types = [0, 1, 2].map((i) => JSON.parse(extractJson(html, i))["@type"]);
        expect(types).toEqual(["Service", "FAQPage", "BreadcrumbList"]);
    });
});

// ---------------------------------------------------------------------------
// 3, 4, 5 — Empty / null / undefined inputs render nothing
// ---------------------------------------------------------------------------

describe("<StructuredData> — empty / null / undefined", () => {
    it("renders nothing for an empty array", () => {
        const html = render(<StructuredData data={[]} />);
        expect(countLdJson(html)).toBe(0);
        expect(html).toBe("");
    });

    it("renders nothing for null input", () => {
        const html = render(<StructuredData data={null} />);
        expect(countLdJson(html)).toBe(0);
        expect(html).toBe("");
    });

    it("renders nothing for undefined input", () => {
        const html = render(<StructuredData data={undefined} />);
        expect(countLdJson(html)).toBe(0);
        expect(html).toBe("");
    });
});

// ---------------------------------------------------------------------------
// 6, 7 — Defensive filtering of invalid array entries
// ---------------------------------------------------------------------------

describe("<StructuredData> — defensive filtering", () => {
    it("filters null entries from an array (renders 2 of [s1, null, s2])", () => {
        const html = render(
            <StructuredData
                data={[sampleService, null as unknown as Record<string, unknown>, sampleFAQ]}
            />,
        );
        expect(countLdJson(html)).toBe(2);
        const types = [0, 1].map((i) => JSON.parse(extractJson(html, i))["@type"]);
        expect(types).toEqual(["Service", "FAQPage"]);
    });

    it("filters non-object entries ([s1, 'string', 42] renders 1)", () => {
        const html = render(
            <StructuredData
                data={[
                    sampleService,
                    "string" as unknown as Record<string, unknown>,
                    42 as unknown as Record<string, unknown>,
                ]}
            />,
        );
        expect(countLdJson(html)).toBe(1);
        expect(JSON.parse(extractJson(html, 0))["@type"]).toBe("Service");
    });
});

// ---------------------------------------------------------------------------
// 8, 9 — XSS hardening: < character must always be escaped
// ---------------------------------------------------------------------------

describe("<StructuredData> — XSS hardening", () => {
    it('escapes "</script>" in schema string values to "\\u003c/script>"', () => {
        const malicious = {
            "@context": "https://schema.org",
            "@type": "Service",
            description: "Inject </script><script>alert(1)</script>",
        };
        const html = render(<StructuredData data={malicious} />);
        // Body should NOT contain the literal closing tag.
        const body = extractJson(html);
        expect(body).not.toContain("</script>");
        expect(body).toContain("\\u003c/script>");
    });

    it('escapes any "<" character to "\\u003c"', () => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            description: "Less-than: 1 < 2 and <foo>",
        };
        const html = render(<StructuredData data={schema} />);
        const body = extractJson(html);
        // The body should not contain a raw `<` outside its own structure.
        // (We use renderToStaticMarkup which produces the script element
        // intact; the JSON content within is the only place we check.)
        expect(body).not.toMatch(/<(?!\\u003c)/); // No raw < that isn't escaped
        expect(body).toContain("\\u003c");
    });
});

// ---------------------------------------------------------------------------
// 10 — Compact JSON output
// ---------------------------------------------------------------------------

describe("<StructuredData> — compact output", () => {
    it("does not include unnecessary whitespace (no newlines in stringified JSON)", () => {
        const html = render(<StructuredData data={sampleService} />);
        const body = extractJson(html);
        expect(body).not.toContain("\n");
        // Sanity: still parses to the original object
        expect(JSON.parse(body)).toEqual(sampleService);
    });

    it("does not pretty-print with 2-space indents", () => {
        const html = render(<StructuredData data={sampleService} />);
        const body = extractJson(html);
        expect(body).not.toMatch(/^\s{2,}"/m);
    });
});

// ---------------------------------------------------------------------------
// Refinement 2 — try/catch around stringify
// ---------------------------------------------------------------------------

describe("<StructuredData> — non-stringifiable schemas (Refinement 2)", () => {
    beforeEach(() => {
        // vi.stubEnv rather than a direct assignment: next-env.d.ts types
        // process.env.NODE_ENV as a read-only literal union, so writing to it
        // is a TS2540 error. vi.unstubAllEnvs() restores the pre-stub value.
        vi.stubEnv("NODE_ENV", "development");
    });

    afterEach(() => {
        vi.unstubAllEnvs();
        vi.restoreAllMocks();
    });

    it("skips a circular-reference schema and does not crash", () => {
        type Circ = { "@type": string; self?: Circ };
        const circular: Circ = { "@type": "Circular" };
        circular.self = circular;
        const consoleErr = vi.spyOn(console, "error").mockImplementation(() => {});

        const html = render(
            <StructuredData
                data={[sampleService, circular as unknown as Record<string, unknown>]}
            />,
        );

        expect(countLdJson(html)).toBe(1); // only sampleService renders
        expect(JSON.parse(extractJson(html, 0))["@type"]).toBe("Service");
        expect(consoleErr).toHaveBeenCalledTimes(1);
        const errorMsg = String(consoleErr.mock.calls[0][0]);
        expect(errorMsg).toContain("[StructuredData]");
        expect(errorMsg).toContain("@type=Circular");
    });

    it("skips a BigInt-containing schema and does not crash", () => {
        const withBigInt = {
            "@context": "https://schema.org",
            "@type": "BigSchema",
            value: BigInt(9007199254740993),
        };
        const consoleErr = vi.spyOn(console, "error").mockImplementation(() => {});

        const html = render(
            <StructuredData
                data={[withBigInt as unknown as Record<string, unknown>, sampleService]}
            />,
        );

        expect(countLdJson(html)).toBe(1); // only sampleService renders
        expect(JSON.parse(extractJson(html, 0))["@type"]).toBe("Service");
        expect(consoleErr).toHaveBeenCalledTimes(1);
    });

    it("does NOT log to console.error in production mode", () => {
        vi.stubEnv("NODE_ENV", "production");
        type Circ = { "@type": string; self?: Circ };
        const circular: Circ = { "@type": "Circular" };
        circular.self = circular;
        const consoleErr = vi.spyOn(console, "error").mockImplementation(() => {});

        render(
            <StructuredData
                data={circular as unknown as Record<string, unknown>}
            />,
        );

        expect(consoleErr).not.toHaveBeenCalled();
    });
});

// ---------------------------------------------------------------------------
// 10 — createCanonicalBreadcrumb helper
// ---------------------------------------------------------------------------

describe("createCanonicalBreadcrumb", () => {
    it("produces exactly 2 items: Home + the page", () => {
        const bc = createCanonicalBreadcrumb("/foo", "Foo Page") as ReturnType<
            typeof createBreadcrumbSchema
        >;
        expect(bc.itemListElement).toHaveLength(2);
    });

    it("first item is Home pointing at root", () => {
        const bc = createCanonicalBreadcrumb("/foo", "Foo Page") as ReturnType<
            typeof createBreadcrumbSchema
        >;
        const [home] = bc.itemListElement;
        expect(home.name).toBe("Home");
        expect(home.item).toBe("https://www.testriq.com/");
        expect(home.position).toBe(1);
    });

    it("second item uses the pageName and pathname-derived URL", () => {
        const bc = createCanonicalBreadcrumb(
            "/regression-testing",
            "Regression Testing",
        ) as ReturnType<typeof createBreadcrumbSchema>;
        const [, page] = bc.itemListElement;
        expect(page.name).toBe("Regression Testing");
        expect(page.item).toBe("https://www.testriq.com/regression-testing");
        expect(page.position).toBe(2);
    });

    it("normalizes pathnames without a leading slash", () => {
        const bc = createCanonicalBreadcrumb(
            "regression-testing",
            "Regression Testing",
        ) as ReturnType<typeof createBreadcrumbSchema>;
        const [, page] = bc.itemListElement;
        expect(page.item).toBe("https://www.testriq.com/regression-testing");
    });

    it("strips trailing slashes to match canonical posture", () => {
        const bc = createCanonicalBreadcrumb(
            "/regression-testing/",
            "Regression Testing",
        ) as ReturnType<typeof createBreadcrumbSchema>;
        const [, page] = bc.itemListElement;
        expect(page.item).toBe("https://www.testriq.com/regression-testing");
    });

    it("produces a valid BreadcrumbList @type", () => {
        const bc = createCanonicalBreadcrumb("/foo", "Foo");
        expect(bc["@context"]).toBe("https://schema.org");
        expect(bc["@type"]).toBe("BreadcrumbList");
    });
});

// ---------------------------------------------------------------------------
// 11 - caseStudiesSchema @graph reference integrity
//
// Regression guard for the Rich Results Test failure on /case-studies:
// "2 items detected: Some are invalid - Missing field itemListElement" on a
// BreadcrumbList with @id ".../case-studies/#breadcrumb". F-44.2 removed that
// BreadcrumbList node from the @graph (the page-side <script> owns it) but
// left the CollectionPage's "breadcrumb": { "@id": ... } pointer behind.
// Google resolved the dangling pointer into an empty BreadcrumbList stub.
//
// An "@id" cannot reach across separate <script> blocks, so any bare
// reference inside this @graph must be defined inside the same @graph.
// ---------------------------------------------------------------------------

describe("caseStudiesSchema - @graph reference integrity", () => {
    type Node = Record<string, unknown>;

    /** Split every node in the graph into defined @ids and bare @id references. */
    function collectIds(graph: unknown): {
        defined: Set<string>;
        refs: string[];
    } {
        const defined = new Set<string>();
        const refs: string[] = [];

        const walk = (node: unknown): void => {
            if (Array.isArray(node)) {
                node.forEach(walk);
                return;
            }
            if (!node || typeof node !== "object") return;

            const obj = node as Node;
            const keys = Object.keys(obj);
            const id = obj["@id"];
            if (typeof id === "string") {
                // `{ "@id": x }` on its own is a pointer; anything richer defines a node.
                if (keys.length === 1) refs.push(id);
                else defined.add(id);
            }
            keys.forEach((k) => walk(obj[k]));
        };

        walk(graph);
        return { defined, refs };
    }

    const graph = (caseStudiesSchema as { "@graph": Node[] })["@graph"];

    it("resolves every bare @id reference within the same @graph", () => {
        const { defined, refs } = collectIds(graph);
        const dangling = refs.filter((r) => !defined.has(r));
        expect(dangling).toEqual([]);
    });

    it("carries no breadcrumb pointer on the CollectionPage", () => {
        const page = graph.find((n) => n["@type"] === "CollectionPage");
        expect(page).toBeDefined();
        expect(page).not.toHaveProperty("breadcrumb");
    });

    it("declares no BreadcrumbList of its own (page-side script owns it)", () => {
        const crumbs = graph.filter((n) => n["@type"] === "BreadcrumbList");
        expect(crumbs).toHaveLength(0);
    });
});

// ---------------------------------------------------------------------------
// SEO report D-14 / D-15 / D-16 (Nov 2026): no "free" offers on service pages
// ---------------------------------------------------------------------------
//
// Service schemas used to carry an Offer with price "0" (and on some pages a
// priceValidUntil of 2026-12-31 and a url of /contact). That told Google and
// AI assistants the services were free. The offers were removed; /pricing now
// states each bundle's real "starting from" price, read from the same data
// the pricing cards render.

describe("service offers (SEO report D-14)", () => {
    /**
     * Files allowed to declare a zero price. The Test Case Estimator is a
     * genuinely free tool, its page says so, and Google requires a price on a
     * SoftwareApplication offer.
     */
    const ZERO_PRICE_ALLOWED = [join("src", "app", "test-case-estimator", "layout.tsx")];

    const sourceFiles = (dir: string): string[] =>
        readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
            const full = join(dir, entry.name);
            if (entry.isDirectory()) return entry.name === "__tests__" ? [] : sourceFiles(full);
            return /\.(ts|tsx)$/.test(entry.name) ? [full] : [];
        });

    it("declares no zero or 'Free' price anywhere in src", () => {
        const offenders = sourceFiles(join(process.cwd(), "src"))
            .filter((file) => !ZERO_PRICE_ALLOWED.some((allowed) => file.endsWith(allowed)))
            .filter((file) => /["']?price["']?\s*:\s*["']?(0|Free)["']?\s*[,}\r\n]/.test(readFileSync(file, "utf8")))
            .map((file) => relative(process.cwd(), file));
        expect(offenders).toEqual([]);
    });

    it("leaves no exported schema with a hardcoded 2026-12-31 offer expiry (D-15)", () => {
        const stale = Object.entries(Schemas)
            .filter(([, value]) => typeof value === "object" && value !== null)
            .filter(([, value]) => JSON.stringify(value).includes('"priceValidUntil":"2026-12-31"'))
            .map(([name]) => name);
        expect(stale).toEqual([]);
    });

    // D-16's own check is "No schema URL points at /contact": /contact is a 308
    // to /contact-us, so any URL naming it points search engines at a redirect.
    // Matches /contact, /contact/, /contact#… and /contact?… but not /contact-us.
    const CONTACT_REDIRECT = /testriq\.com\/contact(?![\w-])/;

    it("leaves no URL in any exported schema pointing at the /contact redirect (D-16)", () => {
        /** Every string value at any depth. */
        const strings = (node: unknown): string[] => {
            if (typeof node === "string") return [node];
            if (Array.isArray(node)) return node.flatMap(strings);
            if (typeof node === "object" && node !== null) return Object.values(node).flatMap(strings);
            return [];
        };
        const stale = Object.entries(Schemas)
            .filter(([, value]) => strings(value).some((s) => CONTACT_REDIRECT.test(s)))
            .map(([name]) => name);
        expect(stale).toEqual([]);
    });

    it("has no source file naming the /contact redirect as an absolute URL (D-16)", () => {
        // Catches schemas built inline in pages and templates, which the export
        // walk above cannot see.
        const offenders = sourceFiles(join(process.cwd(), "src"))
            .filter((file) => CONTACT_REDIRECT.test(readFileSync(file, "utf8")))
            .map((file) => relative(process.cwd(), file));
        expect(offenders).toEqual([]);
    });
});

describe("pricingBundleOffer (/pricing starting prices)", () => {
    type Spec = { minPrice: number; priceCurrency: string; unitText: string };

    it.each(pricingPackages.map((p) => [p.id, p] as const))(
        "%s: minPrice equals the number on the pricing card",
        (id, pkg) => {
            const offer = pricingBundleOffer(id) as { priceSpecification?: Spec; price?: unknown };
            // Same extraction Pricing5Cards uses to render the big number.
            const shown = Number(pkg.price.match(/\d+/)?.[0]);
            expect(offer.priceSpecification?.minPrice).toBe(shown);
            expect(offer.priceSpecification?.priceCurrency).toBe("USD");
            expect(pkg.price).toContain(offer.priceSpecification!.unitText);
            // A floor, never a fixed price.
            expect(offer).not.toHaveProperty("price");
        },
    );

    it("emits no price at all for an unknown package rather than guessing", () => {
        const offer = pricingBundleOffer("does-not-exist");
        expect(offer).not.toHaveProperty("priceSpecification");
        expect(offer).not.toHaveProperty("priceCurrency");
    });

    it("gives every bundle in pricingServiceSchema a starting price", () => {
        const graph = (pricingServiceSchema as { "@graph": Array<Record<string, unknown>> })["@graph"];
        const bundles = graph.filter((n) => n["@type"] === "Service");
        expect(bundles).toHaveLength(pricingPackages.length);
        for (const bundle of bundles) {
            const offer = bundle.offers as { priceSpecification?: Spec };
            expect(offer.priceSpecification?.minPrice).toBeGreaterThan(0);
        }
    });
});

// ---------------------------------------------------------------------------
// SEO report D-17 (Nov 2026): services name their target countries
// ---------------------------------------------------------------------------
//
// Service areaServed used to be the bare string "Worldwide" (or "WorldWide",
// "Global"), which names no country. Generic services now use the shared
// SERVICE_AREA_SERVED: each target market as a Country entity, then
// "Worldwide". Countries are added, "Worldwide" is never dropped, because
// Testriq delivers remotely to clients anywhere.

describe("service areaServed (SEO report D-17)", () => {
    const BARE_GLOBAL = /^(worldwide|global|world)$/i;

    /** Every node with @type Service, at any depth of every exported schema. */
    const serviceNodes = (node: unknown, found: Array<Record<string, unknown>> = []) => {
        if (Array.isArray(node)) node.forEach((n) => serviceNodes(n, found));
        else if (typeof node === "object" && node !== null) {
            const obj = node as Record<string, unknown>;
            if (obj["@type"] === "Service") found.push(obj);
            Object.values(obj).forEach((v) => serviceNodes(v, found));
        }
        return found;
    };

    it("lists each target market as a Country, then Worldwide", () => {
        expect(SERVICE_AREA_SERVED).toEqual([
            ...TARGET_MARKET_COUNTRIES.map((name) => ({ "@type": "Country", name })),
            "Worldwide",
        ]);
        expect(new Set(TARGET_MARKET_COUNTRIES).size).toBe(TARGET_MARKET_COUNTRIES.length);
        expect(TARGET_MARKET_COUNTRIES.length).toBeGreaterThan(0);
    });

    it("leaves no exported Service with a bare Worldwide/Global areaServed", () => {
        const bare = Object.entries(Schemas)
            .filter(([, value]) =>
                serviceNodes(value).some(
                    (s) => typeof s.areaServed === "string" && BARE_GLOBAL.test(s.areaServed),
                ),
            )
            .map(([name]) => name);
        expect(bare).toEqual([]);
    });

    it("never pairs Worldwide with zero countries", () => {
        const worldwideOnly = Object.entries(Schemas)
            .filter(([, value]) =>
                serviceNodes(value).some(
                    (s) =>
                        Array.isArray(s.areaServed) &&
                        s.areaServed.some((a) => typeof a === "string" && BARE_GLOBAL.test(a)) &&
                        !s.areaServed.some((a) => (a as { "@type"?: string })?.["@type"] === "Country"),
                ),
            )
            .map(([name]) => name);
        expect(worldwideOnly).toEqual([]);
    });

    it("has no page or template outside StructuredData declaring a bare Worldwide areaServed", () => {
        // StructuredData.tsx is covered by the export walk above; its remaining
        // "Worldwide" values sit on ContactPoint nodes, which say where a phone
        // line answers, not where a service is delivered.
        const SCHEMA_MODULES = [join("components", "seo", "StructuredData.tsx")];
        const files = (dir: string): string[] =>
            readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
                const full = join(dir, entry.name);
                if (entry.isDirectory()) return entry.name === "__tests__" ? [] : files(full);
                return /\.(ts|tsx)$/.test(entry.name) ? [full] : [];
            });
        const offenders = files(join(process.cwd(), "src"))
            .filter((file) => !SCHEMA_MODULES.some((m) => file.endsWith(m)))
            .filter((file) =>
                /["']?areaServed["']?\s*:\s*["'](worldwide|global|world)["']/i.test(readFileSync(file, "utf8")),
            )
            .map((file) => relative(process.cwd(), file));
        expect(offenders).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// SEO report E-2 (Nov 2026): /our-team Person entries link to LinkedIn
// ---------------------------------------------------------------------------

describe("ourTeamPageSchema people (SEO report E-2)", () => {
    type Person = { "@type": string; name: string; jobTitle: string; url: string; sameAs?: string[] };
    const people = (ourTeamPageSchema as unknown as { hasPart: { itemListElement: Person[] } }).hasPart
        .itemListElement;

    it("keeps the same five people as before the data was shared", () => {
        expect(people.map((p) => p.name)).toEqual([
            "Sandeep Maske",
            "Santosh Kakade",
            "Goutam Mishra",
            "Rohan Maske",
            "Aatish Jadhav",
        ]);
    });

    it("gives every Person a real LinkedIn profile in sameAs", () => {
        for (const p of people) {
            expect(p["@type"]).toBe("Person");
            expect(p.sameAs, p.name).toHaveLength(1);
            expect(p.sameAs![0], p.name).toMatch(/^https:\/\/www\.linkedin\.com\/in\/[^/?#]+\/?$/);
        }
    });

    it("uses the title and LinkedIn link shown on the person's card", () => {
        for (const p of people) {
            const card = teamLeaders.find((l) => l.name === p.name)!;
            expect(p.jobTitle).toBe(card.position);
            expect(p.sameAs).toEqual([cleanProfileUrl(card.linkedin)]);
        }
    });

    it("gives each Person a distinct url fragment", () => {
        const urls = people.map((p) => p.url);
        expect(new Set(urls).size).toBe(urls.length);
        expect(urls).toContain("https://www.testriq.com/our-team#sandeep-maske");
    });
});

describe("team data helpers", () => {
    it("slugs a name for the url fragment", () => {
        expect(teamMemberSlug("Sandeep Maske")).toBe("sandeep-maske");
        expect(teamMemberSlug("  Rohan  Maske ")).toBe("rohan-maske");
    });

    it("strips tracking parameters from a profile URL", () => {
        expect(
            cleanProfileUrl("https://www.linkedin.com/in/neelamchavan9892/?original_referer=https%3A%2F%2Ftestriq.com%2F"),
        ).toBe("https://www.linkedin.com/in/neelamchavan9892/");
        expect(cleanProfileUrl("https://www.linkedin.com/in/sandeepmaske")).toBe(
            "https://www.linkedin.com/in/sandeepmaske",
        );
    });
});
