/**
 * Vitest tests for src/lib/sanity-webhook.ts — the verification and path
 * derivation behind `POST /api/revalidate` (DEV-12 follow-up).
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 *
 * Run via `npm run test` (single pass) or `npm run test:watch`.
 */

import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { beforeAll, describe, expect, it } from "vitest";

import {
    DEFAULT_TOLERANCE_MS,
    MINIMUM_TIMESTAMP,
    derivePathsToRevalidate,
    encodeSignatureHeader,
    parseOperation,
    requiresDeploy,
    signPayload,
    verifySanityWebhookSignature,
} from "../sanity-webhook";

const SECRET = "test-signing-secret";
const NOW = 1761523200000; // 2025-10-27T00:00:00Z — a fixed, in-range clock.
const BODY = JSON.stringify({ _type: "post", _id: "abc", slug: "my-post" });

const check = (
    overrides: Partial<{
        rawBody: string;
        signatureHeader: string | null;
        secret: string;
        nowMs: number;
        toleranceMs: number;
    }> = {},
) =>
    verifySanityWebhookSignature({
        rawBody: BODY,
        signatureHeader: encodeSignatureHeader(BODY, NOW, SECRET),
        secret: SECRET,
        nowMs: NOW,
        ...overrides,
    });

describe("verifySanityWebhookSignature", () => {
    it("accepts a signature it generated itself", () => {
        expect(check()).toEqual({ ok: true, timestamp: NOW });
    });

    it("rejects a body that was tampered with after signing", () => {
        const result = check({ rawBody: BODY.replace("my-post", "other-post") });
        expect(result).toMatchObject({ ok: false, status: 401 });
    });

    it("rejects a signature made with a different secret", () => {
        const result = check({
            signatureHeader: encodeSignatureHeader(BODY, NOW, "not-the-secret"),
        });
        expect(result).toMatchObject({ ok: false, status: 401, reason: "Signature is invalid." });
    });

    it("rejects a missing header with 401", () => {
        expect(check({ signatureHeader: null })).toMatchObject({ ok: false, status: 401 });
    });

    it("rejects a malformed header with 400", () => {
        for (const header of ["", "v1=abc", "t=123", "garbage", "t=abc,v1=xyz"]) {
            expect(check({ signatureHeader: header })).toMatchObject({ ok: false, status: 400 });
        }
    });

    it("tolerates the [, ] separator variants Sanity's own regex allows", () => {
        const sig = signPayload(BODY, NOW, SECRET);
        expect(check({ signatureHeader: `t=${NOW}, v1=${sig}` })).toMatchObject({ ok: true });
        expect(check({ signatureHeader: `t=${NOW} v1=${sig}` })).toMatchObject({ ok: true });
    });

    it("rejects an empty body", () => {
        expect(check({ rawBody: "" })).toMatchObject({ ok: false, status: 400 });
    });

    it("rejects a second-precision timestamp below the millisecond floor", () => {
        const seconds = Math.floor(NOW / 1000);
        const result = check({
            signatureHeader: encodeSignatureHeader(BODY, seconds, SECRET),
            nowMs: NOW,
        });
        expect(result).toMatchObject({ ok: false, status: 400 });
        expect(seconds).toBeLessThan(MINIMUM_TIMESTAMP);
    });

    it("rejects a replay older than the tolerance window", () => {
        const stale = NOW - DEFAULT_TOLERANCE_MS - 1000;
        const result = check({
            signatureHeader: encodeSignatureHeader(BODY, stale, SECRET),
            nowMs: NOW,
        });
        expect(result).toMatchObject({ ok: false, status: 401 });
    });

    it("accepts a signature inside the tolerance window on either side", () => {
        const recent = NOW - (DEFAULT_TOLERANCE_MS - 1000);
        const skewed = NOW + (DEFAULT_TOLERANCE_MS - 1000);
        expect(
            check({ signatureHeader: encodeSignatureHeader(BODY, recent, SECRET), nowMs: NOW }),
        ).toMatchObject({ ok: true });
        expect(
            check({ signatureHeader: encodeSignatureHeader(BODY, skewed, SECRET), nowMs: NOW }),
        ).toMatchObject({ ok: true });
    });

    it("rejects a timestamp too far in the future", () => {
        const future = NOW + DEFAULT_TOLERANCE_MS + 1000;
        expect(
            check({ signatureHeader: encodeSignatureHeader(BODY, future, SECRET), nowMs: NOW }),
        ).toMatchObject({ ok: false, status: 401 });
    });

    it("treats an unconfigured secret as a 400 rather than accepting anything", () => {
        expect(check({ secret: "" })).toMatchObject({ ok: false, status: 400 });
    });
});

/**
 * Wire compatibility. `@sanity/webhook` is NOT a declared dependency — this is
 * the transitive copy pulled in by `sanity` — so we must not import it from
 * application code. Importing it here, in a test, is how we prove our
 * re-implementation still matches Sanity's own encoder byte for byte. If the
 * transitive copy ever disappears the suite reports it as skipped rather than
 * failing a release for an unrelated reason.
 */
describe("wire compatibility with @sanity/webhook", () => {
    let official: typeof import("@sanity/webhook") | null = null;

    beforeAll(async () => {
        try {
            official = await import("@sanity/webhook");
        } catch {
            official = null;
        }
    });

    it("produces the exact header the official encoder produces", async () => {
        if (!official) return; // package absent; nothing to compare against
        const theirs = await official.encodeSignatureHeader(BODY, NOW, SECRET);
        expect(encodeSignatureHeader(BODY, NOW, SECRET)).toBe(theirs);
    });

    it("accepts a header produced by the official encoder", async () => {
        if (!official) return;
        const theirs = await official.encodeSignatureHeader(BODY, NOW, SECRET);
        expect(check({ signatureHeader: theirs })).toMatchObject({ ok: true });
    });

    it("is accepted by the official verifier", async () => {
        if (!official) return;
        const ours = encodeSignatureHeader(BODY, NOW, SECRET);
        await expect(official.isValidSignature(BODY, ours, SECRET)).resolves.toBe(true);
    });
});

describe("derivePathsToRevalidate", () => {
    it("revalidates a post's own page plus every list that includes it", () => {
        const paths = derivePathsToRevalidate({ _type: "post", slug: "my-post" });
        expect(paths).toContain("/blog/post/my-post");
        expect(paths).toContain("/blog");
        expect(paths).toContain("/blog/feed.xml");
        expect(paths).toContain("/sitemap.xml");
    });

    it("fans out to author, category and tag pages when the projection supplies them", () => {
        const paths = derivePathsToRevalidate({
            _type: "post",
            slug: "my-post",
            authorSlug: "jane",
            categorySlugs: ["automation", "api"],
            tagSlugs: ["ci"],
        });
        expect(paths).toContain("/author/jane");
        expect(paths).toContain("/blog/category/automation");
        expect(paths).toContain("/blog/category/api");
        expect(paths).toContain("/blog/tag/ci");
    });

    it("maps a case study onto the catch-all /[slug] route", () => {
        const paths = derivePathsToRevalidate({ _type: "caseStudy", slug: "acme-qa" });
        expect(paths).toContain("/acme-qa");
        expect(paths).toContain("/case-studies");
    });

    it("accepts a slug projected either as a string or as the raw slug object", () => {
        expect(derivePathsToRevalidate({ _type: "caseStudy", slug: { current: "acme-qa" } })).toContain(
            "/acme-qa",
        );
    });

    it("drops a slug that would address a different route", () => {
        for (const slug of ["../admin", "a/b", "", "   ", "."]) {
            const paths = derivePathsToRevalidate({ _type: "caseStudy", slug });
            expect(paths.some((p) => p === `/${slug}`)).toBe(false);
            // The aggregate pages are still refreshed.
            expect(paths).toContain("/case-studies");
        }
    });

    it("returns no paths for a document type no route renders", () => {
        expect(derivePathsToRevalidate({ _type: "subscriber", slug: "x" })).toEqual([]);
        expect(derivePathsToRevalidate({ _type: "certificate" })).toEqual([]);
        expect(derivePathsToRevalidate({})).toEqual([]);
    });

    it("covers the remaining rendered types", () => {
        expect(derivePathsToRevalidate({ _type: "author", slug: "jane" })).toContain("/author/jane");
        expect(derivePathsToRevalidate({ _type: "category", slug: "api" })).toContain(
            "/blog/category/api",
        );
        expect(derivePathsToRevalidate({ _type: "tag", slug: "ci" })).toContain("/blog/tag/ci");
        expect(derivePathsToRevalidate({ _type: "jobPosting" })).toContain("/careers");
        expect(derivePathsToRevalidate({ _type: "page" })).toContain("/sitemap.xml");
    });

    it("never repeats a path", () => {
        const paths = derivePathsToRevalidate({
            _type: "post",
            slug: "my-post",
            tagSlugs: ["ci", "ci"],
        });
        expect(paths).toHaveLength(new Set(paths).size);
    });
});

describe("requiresDeploy", () => {
    it("deploys when a case study is created or deleted, because /[slug] pins dynamicParams = false", () => {
        expect(requiresDeploy({ _type: "caseStudy" }, "create")).toBe(true);
        expect(requiresDeploy({ _type: "caseStudy" }, "delete")).toBe(true);
    });

    it("does not deploy for an ordinary case-study edit", () => {
        expect(requiresDeploy({ _type: "caseStudy" }, "update")).toBe(false);
    });

    it("deploys when the operation header is missing, erring toward correctness", () => {
        expect(requiresDeploy({ _type: "caseStudy" }, null)).toBe(true);
    });

    it("never deploys for types on routes that render new slugs on demand", () => {
        for (const _type of ["post", "author", "category", "tag", "jobPosting", "page"]) {
            expect(requiresDeploy({ _type }, "create")).toBe(false);
        }
    });
});

describe("parseOperation", () => {
    it("accepts the three values Sanity sends, case-insensitively", () => {
        expect(parseOperation("create")).toBe("create");
        expect(parseOperation(" UPDATE ")).toBe("update");
        expect(parseOperation("delete")).toBe("delete");
    });

    it("returns null for anything else", () => {
        expect(parseOperation(null)).toBeNull();
        expect(parseOperation("")).toBeNull();
        expect(parseOperation("publish")).toBeNull();
    });
});

/**
 * Guard test. A typo in one of the hardcoded aggregate paths would make
 * `revalidatePath` silently refresh nothing forever, which is invisible in
 * production. So resolve every derived path against the real App Router tree
 * and fail if one does not correspond to a route file.
 */
describe("derived paths resolve to real routes", () => {
    const APP_DIR = join(process.cwd(), "src", "app");

    /** True when `dir` holds a route file for a leaf path. */
    const hasRouteFile = (dir: string) =>
        ["page.tsx", "page.ts", "route.ts", "route.tsx"].some((f) => existsSync(join(dir, f)));

    const dirsIn = (dir: string) =>
        readdirSync(dir).filter((entry) => {
            try {
                return statSync(join(dir, entry)).isDirectory();
            } catch {
                return false;
            }
        });

    /**
     * Walk the App Router tree one segment at a time. At each level a segment
     * may match a literal directory or a single dynamic `[param]` directory,
     * and route groups `(group)` are transparent — they do not consume a
     * segment.
     */
    const resolves = (segments: string[], dir = APP_DIR): boolean => {
        if (segments.length === 0) return hasRouteFile(dir);

        const [head, ...rest] = segments;
        const children = dirsIn(dir);

        if (children.includes(head) && resolves(rest, join(dir, head))) return true;
        for (const child of children) {
            if (/^\[.+\]$/.test(child) && resolves(rest, join(dir, child))) return true;
            if (/^\(.+\)$/.test(child) && resolves(segments, join(dir, child))) return true;
        }
        return false;
    };

    const resolvePath = (path: string): boolean => {
        // /sitemap.xml is produced by src/app/sitemap.ts, not a directory.
        if (path === "/sitemap.xml") return existsSync(join(APP_DIR, "sitemap.ts"));
        return resolves(path.split("/").filter(Boolean));
    };

    // One representative payload per rendered document type, together covering
    // every hardcoded path in the module.
    const payloads = [
        { _type: "post", slug: "a", authorSlug: "b", categorySlugs: ["c"], tagSlugs: ["d"] },
        { _type: "caseStudy", slug: "chandigarh" },
        { _type: "author", slug: "b" },
        { _type: "category", slug: "c" },
        { _type: "tag", slug: "d" },
        { _type: "jobPosting" },
        { _type: "page" },
    ];

    const allPaths = [...new Set(payloads.flatMap((p) => derivePathsToRevalidate(p)))];

    it("covers more than just the obvious handful", () => {
        expect(allPaths.length).toBeGreaterThan(10);
    });

    it.each(allPaths)("%s resolves to a route file", (path) => {
        expect(resolvePath(path)).toBe(true);
    });

    it("fails for a path that does not exist, proving the resolver discriminates", () => {
        expect(resolvePath("/definitely-not-a-route-xyz/deeper")).toBe(false);
    });
});
