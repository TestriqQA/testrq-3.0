import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
    countArchivePosts,
    isArchiveIndexable,
    MIN_POSTS_FOR_INDEXED_ARCHIVE,
    type ArchiveCountPost,
} from "../archive-indexing";

/**
 * SEO report D-2: a tag or category archive is in sitemap.xml exactly when
 * its page is indexable. Both sides count posts the same way and share one
 * threshold.
 */

const post = (categories: string[], tags: string[]): ArchiveCountPost => ({
    categories: categories.map((slug) => ({ name: slug, slug })),
    tagsData: tags.map((slug) => ({ name: slug, slug })),
});

describe("isArchiveIndexable", () => {
    it("needs at least two posts", () => {
        expect(MIN_POSTS_FOR_INDEXED_ARCHIVE).toBe(2);
        expect(isArchiveIndexable(0)).toBe(false);
        expect(isArchiveIndexable(1)).toBe(false);
        expect(isArchiveIndexable(2)).toBe(true);
    });
});

describe("countArchivePosts", () => {
    it("counts posts per category and per tag", () => {
        const { categories, tags } = countArchivePosts([
            post(["qa-testing"], ["selenium", "automation"]),
            post(["qa-testing", "ai-testing"], ["automation"]),
            post(["ai-testing"], []),
        ]);
        expect(categories.get("qa-testing")).toBe(2);
        expect(categories.get("ai-testing")).toBe(2);
        expect(tags.get("automation")).toBe(2);
        expect(tags.get("selenium")).toBe(1);
    });

    it("counts a post once per archive even if it lists the same slug twice", () => {
        const { tags } = countArchivePosts([post([], ["game-launch", "game-launch"])]);
        expect(tags.get("game-launch")).toBe(1);
    });

    it("leaves one-post archives out of the index, the case behind D-2", () => {
        // On production each of the 20 reported archives had one published
        // post; the stored count said 2 because a draft was counted too.
        const { tags, categories } = countArchivePosts([post(["iot-security-testing"], ["secure-boot"])]);
        expect(isArchiveIndexable(tags.get("secure-boot") ?? 0)).toBe(false);
        expect(isArchiveIndexable(categories.get("iot-security-testing") ?? 0)).toBe(false);
    });

    it("ignores missing or empty slugs", () => {
        const { categories, tags } = countArchivePosts([
            { categories: [{ name: "x", slug: "" }], tagsData: undefined as unknown as [] },
        ]);
        expect(categories.size).toBe(0);
        expect(tags.size).toBe(0);
    });
});

describe("one rule for pages and sitemap", () => {
    const src = (...p: string[]) => readFileSync(join(process.cwd(), "src", ...p), "utf8");

    it.each([
        ["tag page", ["app", "blog", "tag", "[tag]", "page.tsx"]],
        ["category page", ["app", "blog", "category", "[category]", "page.tsx"]],
        ["sitemap", ["app", "sitemap.ts"]],
    ])("the %s uses isArchiveIndexable, not its own threshold", (_name, path) => {
        const text = src(...path);
        expect(text).toContain("isArchiveIndexable(");
        expect(text).not.toMatch(/\b(count|postCount|posts\.length)\s*>=\s*2\b/);
    });

    it("the snapshot never counts draft posts", () => {
        const script = src("scripts", "snapshot-sanity-slugs.ts");
        const counts = script.match(/count\(\*\[_type == "post"[^\]]*\]\)/g) ?? [];
        expect(counts.length).toBeGreaterThan(0);
        for (const c of counts) expect(c).toContain('!(_id in path("drafts.**"))');
    });
});
