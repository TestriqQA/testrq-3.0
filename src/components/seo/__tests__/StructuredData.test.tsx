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
import { renderToStaticMarkup } from "react-dom/server";

import StructuredData, {
    caseStudiesSchema,
    createBreadcrumbSchema,
    createCanonicalBreadcrumb,
} from "../StructuredData";

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
    const ORIGINAL_NODE_ENV = process.env.NODE_ENV;

    beforeEach(() => {
        process.env.NODE_ENV = "development";
    });

    afterEach(() => {
        process.env.NODE_ENV = ORIGINAL_NODE_ENV;
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
        process.env.NODE_ENV = "production";
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
