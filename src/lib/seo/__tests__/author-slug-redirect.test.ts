// D-20. Fixed slug list = Sanity on 23 Nov 2026 (the committed snapshot may be stale).

import { describe, expect, it } from "vitest";

import { AUTHOR_SLUGS, RENAMED_AUTHOR_SLUGS, authorRedirectTarget } from "../author-slug-redirect";

const SANITY_23_NOV = new Set([
    "Amey-Gaikwad", "Lovelesh-Khatarkar", "Pranav-Patil", "Santosh-Kakade",
    "aakash-yadav", "atul-ahire", "cezzane-khan", "default", "jayesh-mistry",
    "jayesh2", "pooja-katkar", "prathamesh-maske", "ragini-kumari",
    "ragini-kumari-qa", "sandeep-maske", "sanyukta-tambe", "shravan-more",
    "shreyash-pakhare", "sujay-ambelkar", "sushma", "testriq017",
]);

const target = (path: string) => authorRedirectTarget(path, SANITY_23_NOV);

describe("authorRedirectTarget", () => {
    it.each([
        ["/author/Pooja-Katkar", "/author/pooja-katkar"],
        ["/author/Sanyukta-Tambe", "/author/sanyukta-tambe"],
        ["/author/Sujay-Ambelkar", "/author/sujay-ambelkar"],
        ["/author/Pooja-Katkar/", "/author/pooja-katkar"],
        ["/author/POOJA-KATKAR", "/author/pooja-katkar"],
    ])("lowercases %s -> %s", (from, to) => {
        expect(target(from)).toBe(to);
    });

    it("sends the old capitalised Ragini address to the same record, not the other Ragini", () => {
        expect(target("/author/Ragini-Kumari")).toBe("/author/ragini-kumari-qa");
    });

    it("sends the pre-20-Nov nandini-yadav address to the record that took ragini-kumari", () => {
        expect(target("/author/nandini-yadav")).toBe("/author/ragini-kumari");
    });

    it("never redirects a current author slug (no loops)", () => {
        for (const slug of SANITY_23_NOV) {
            expect(target(`/author/${slug}`)).toBeNull();
        }
    });

    it("leaves still-capitalised authors alone until Sanity renames them", () => {
        expect(target("/author/Lovelesh-Khatarkar")).toBeNull();
        const renamed = new Set([...SANITY_23_NOV].map((s) => (s === "Lovelesh-Khatarkar" ? "lovelesh-khatarkar" : s)));
        expect(authorRedirectTarget("/author/Lovelesh-Khatarkar", renamed)).toBe("/author/lovelesh-khatarkar");
    });

    it("does not redirect unknown authors, so they still 404", () => {
        expect(target("/author/no-such-person")).toBeNull();
        expect(target("/author/%E0%A4%A")).toBeNull();
    });

    it("ignores anything that is not a single /author/<slug> segment", () => {
        expect(target("/author")).toBeNull();
        expect(target("/author/Pooja-Katkar/extra")).toBeNull();
        expect(target("/blog/author/Pooja-Katkar")).toBeNull();
    });

    it("does not redirect when a case-insensitive match is ambiguous", () => {
        const both = new Set(["jane-doe", "Jane-Doe"]);
        expect(authorRedirectTarget("/author/JANE-DOE", both)).toBeNull();
    });

    it("a listed rename whose target is missing does not fall back to another record", () => {
        const noQa = new Set([...SANITY_23_NOV].filter((s) => s !== "ragini-kumari-qa"));
        expect(authorRedirectTarget("/author/Ragini-Kumari", noQa)).toBeNull();
    });

    it("every listed rename lands on a slug that is not itself redirected", () => {
        for (const to of Object.values(RENAMED_AUTHOR_SLUGS)) {
            expect(target(`/author/${to}`)).toBeNull();
        }
    });

    it("reads its default slug list from the build snapshot", () => {
        expect(AUTHOR_SLUGS.size).toBeGreaterThan(10);
    });
});
