import { describe, expect, it } from "vitest";

import { authorSitemapEntries, type AuthorSitemapPost } from "../author-sitemap";

/**
 * SEO report E-1: author pages go in sitemap.xml, but only the ones that are
 * indexable. /author/[slug] is noindex when the author has no posts, so an
 * author must appear here if and only if at least one post names them.
 */

const post = (authorSlug: string | undefined, modifiedISO: string, dateISO = modifiedISO): AuthorSitemapPost => ({
    authorSlug,
    modifiedISO,
    dateISO,
});

describe("authorSitemapEntries", () => {
    it("lists each author who has posts, once", () => {
        const entries = authorSitemapEntries([
            post("pooja-katkar", "2026-11-09T10:00:00Z"),
            post("aakash-yadav", "2026-10-30T10:00:00Z"),
            post("pooja-katkar", "2026-06-01T10:00:00Z"),
        ]);
        expect(entries.map((e) => e.slug).sort()).toEqual(["aakash-yadav", "pooja-katkar"]);
        expect(entries.find((e) => e.slug === "pooja-katkar")?.postCount).toBe(2);
    });

    it("cannot list an author with no posts, since the list comes from posts", () => {
        expect(authorSitemapEntries([])).toEqual([]);
    });

    it("skips posts with no author slug", () => {
        const entries = authorSitemapEntries([
            post(undefined, "2026-11-09T10:00:00Z"),
            post("  ", "2026-11-09T10:00:00Z"),
        ]);
        expect(entries).toEqual([]);
    });

    it("uses the newest post date as lastmod, whatever the order", () => {
        const entries = authorSitemapEntries([
            post("sujay-ambelkar", "2026-04-20T00:00:00Z"),
            post("sujay-ambelkar", "2026-11-19T08:30:00Z"),
            post("sujay-ambelkar", "2026-07-01T00:00:00Z"),
        ]);
        expect(entries[0].lastModified?.toISOString()).toBe("2026-11-19T08:30:00.000Z");
    });

    it("falls back to the publish date when a post has no modified date", () => {
        const entries = authorSitemapEntries([post("atul-ahire", "", "2026-05-16T00:00:00Z")]);
        expect(entries[0].lastModified?.toISOString()).toBe("2026-05-16T00:00:00.000Z");
    });

    it("ignores unparseable dates instead of emitting an Invalid Date", () => {
        const entries = authorSitemapEntries([
            post("cezzane-khan", "not-a-date", "also-not"),
            post("cezzane-khan", "2026-11-06T00:00:00Z"),
        ]);
        expect(entries[0].lastModified?.toISOString()).toBe("2026-11-06T00:00:00.000Z");

        const [onlyBad] = authorSitemapEntries([post("jayesh-mistry", "nope", "nope")]);
        expect(onlyBad.lastModified).toBeUndefined();
        expect(onlyBad.postCount).toBe(1);
    });

    it("keeps slugs exactly as stored, case included (they are the canonical)", () => {
        const entries = authorSitemapEntries([post("Pooja-Katkar", "2026-11-09T00:00:00Z")]);
        expect(entries[0].slug).toBe("Pooja-Katkar");
    });
});
