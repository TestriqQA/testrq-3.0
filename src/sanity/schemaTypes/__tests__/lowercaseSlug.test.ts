// D-20

import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { lowercaseSlugCheck } from "../lowercaseSlug";

const slug = (current: string) => ({ _type: "slug" as const, current });

describe("lowercaseSlugCheck", () => {
    it("accepts lowercase slugs", () => {
        expect(lowercaseSlugCheck(slug("pooja-katkar"))).toBe(true);
        expect(lowercaseSlugCheck(slug("5g-testing-2026"))).toBe(true);
    });

    it("rejects capitals and suggests the lowercase form", () => {
        const result = lowercaseSlugCheck(slug("Lovelesh-Khatarkar"));
        expect(result).not.toBe(true);
        expect(result).toContain('"lovelesh-khatarkar"');
    });

    it("leaves an empty slug to the required rule", () => {
        expect(lowercaseSlugCheck(undefined)).toBe(true);
        expect(lowercaseSlugCheck(slug(""))).toBe(true);
    });
});

describe("slug fields", () => {
    const dir = join(process.cwd(), "src", "sanity", "schemaTypes");

    it.each(["author", "post", "tag", "category", "caseStudy", "jobPosting"])(
        "%s uses the lowercase slug rule",
        (type) => {
            const src = readFileSync(join(dir, `${type}.ts`), "utf8");
            const slugField = src.slice(src.indexOf("type: 'slug'"));
            expect(slugField.slice(0, 300)).toContain("validation: requiredLowercaseSlug");
        },
    );
});
