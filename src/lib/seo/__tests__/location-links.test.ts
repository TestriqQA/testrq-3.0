/**
 * PART 4 / JOB A1 guard — every city URL advertised on /locations-we-serve must
 * be a real, directly-reachable page.
 *
 * Why this exists: the city links on that page sat behind a collapsed accordion
 * (two nested conditional mounts), so nothing they pointed at was ever in the
 * server-rendered HTML. Three of the 87 entries were wrong and nobody could
 * tell — `bengaluru` (the page is `bangalore`, so the link took a 308 hop),
 * `madinat-zayed` (no page; its redirect pointed back at /locations-we-serve,
 * making the link a loop) and `dibba-al-fujairah` (no page, no redirect, a hard
 * 404). Making those links crawlable would have published all three.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 */

import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { locationData } from "../../../app/lib/LocationData";
import { getAllCities } from "../../../app/lib/CityData";
import { redirects } from "../redirect-map";

/** Every URL the locations page links, flattened and de-duplicated. */
const locationUrls = Array.from(
    new Set(
        Object.values(locationData)
            .flatMap((states) => Object.values(states))
            .flatMap((cities) => Object.values(cities))
            .flat(),
    ),
).sort();

const citySlugs = new Set(getAllCities().map((city) => city.slug));
const redirectSources = new Set(redirects.map((r) => r.source));

/** A slug is reachable if /[slug] serves it, or it has its own route folder. */
const hasPage = (slug: string) =>
    citySlugs.has(slug) || existsSync(join(process.cwd(), "src", "app", slug, "page.tsx"));

describe("locationData city links", () => {
    it("advertises a non-trivial number of cities", () => {
        expect(locationUrls.length).toBeGreaterThan(50);
    });

    it("uses absolute root-relative paths", () => {
        const bad = locationUrls.filter((url) => !url.startsWith("/"));
        expect(bad).toEqual([]);
    });

    it("points only at pages that exist", () => {
        const missing = locationUrls.filter((url) => !hasPage(url.replace(/^\//, "")));
        expect(missing).toEqual([]);
    });

    it("never links a URL that only exists as a redirect", () => {
        // An internal link to a 3xx wastes the hop and is the same mistake the
        // XML sitemap already had fixed (it was advertising a redirecting tag
        // URL). Link the destination directly instead.
        const viaRedirect = locationUrls.filter((url) => redirectSources.has(url));
        expect(viaRedirect).toEqual([]);
    });

    it("has no duplicate URLs across cities", () => {
        const all = Object.values(locationData)
            .flatMap((states) => Object.values(states))
            .flatMap((cities) => Object.values(cities))
            .flat();
        expect(all.length).toBe(new Set(all).size);
    });
});
