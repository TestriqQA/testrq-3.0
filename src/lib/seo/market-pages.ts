/**
 * Bespoke market landing pages — hand-written geo pages that are NOT city
 * entries in CityData.tsx and NOT inside the (services)/(solutions) route
 * groups.
 *
 * Why this file exists: these pages are invisible to every automatic discovery
 * mechanism the site has. `discoverRoutes()` only scans the two route groups,
 * and `getAllCities()` only returns CityData entries — so without an explicit
 * list each page has to be remembered by hand in four separate places
 * (sitemap.ts, website-map, llms.txt, llms-full.txt). That is the same
 * hardcoded-array drift F-31 removed from the sitemap, so it is solved the same
 * way: declare once, consume everywhere.
 *
 * Adding a market page: add it here and it appears in all four surfaces. It
 * still needs its own route directory and, if it should rank, its own entry in
 * BREADCRUMB_LABELS.
 */

export interface MarketPage {
    /** Public slug, no leading slash. */
    slug: string;
    /** Title used by the XML sitemap and /website-map. */
    title: string;
    /** Link text in llms.txt / llms-full.txt. */
    llmsTitle: string;
    /** One-line description for the llms files. */
    description: string;
}

export const MARKET_PAGES: MarketPage[] = [
    {
        slug: "software-qa-testing-services-in-london",
        title: "Software Testing and QA Services for London Teams",
        llmsTitle: "Software QA Testing Services in London",
        description:
            "Software testing for UK teams built around UK GDPR, Open Banking, NHS-connected software and WCAG accessibility requirements, delivered remotely from Mumbai with a working-hours overlap with the UK.",
    },
    {
        slug: "software-qa-testing-services-in-new-york",
        title: "Software Testing and QA Services for New York Teams",
        llmsTitle: "Software QA Testing Services in New York",
        description:
            "Overnight QA cycles for New York teams: builds tested in Mumbai's working day and results in the client's tracker by morning, with US-market experience on real-estate listing platforms.",
    },
];

/** `- [Title](https://host/slug): description` line for the llms.txt files. */
export function formatMarketPageLine(page: MarketPage, base: string): string {
    return `- [${page.llmsTitle}](${base}/${page.slug}): ${page.description}`;
}
