/**
 * The countries Testriq actively sells into, and the `areaServed` value every
 * generic service schema uses. Edit the list here; nothing else repeats it.
 *
 * SEO report 20 Nov 2026, D-17 (P1): about 70 Service schemas declared
 * `areaServed` as the bare string "Worldwide" (also spelled "WorldWide" and
 * "Global"). A string is valid Schema.org, but it is not an entity, so search
 * engines and AI assistants could not tie any service to a target country.
 *
 * Countries are ADDED, "Worldwide" is KEPT. Testriq delivers remotely from one
 * office to clients anywhere, so replacing "Worldwide" with a country list
 * would claim something narrower than the truth. Listing the priority markets
 * alongside it adds the country signal without taking anything away. Decided
 * 20 Nov 2026; this supersedes the earlier note in schemas/services.ts that
 * said to leave "Worldwide" alone.
 *
 * The country list is the one in the SEO report (IN, US, GB, AE, AU, CA).
 * The report marks it as "agree final country list with marketing": if
 * marketing changes it, change TARGET_MARKET_COUNTRIES and every service page
 * follows.
 *
 * Not using this, on purpose:
 * - /security-testing lists the four markets its own body copy names.
 * - /pricing, /qa-outsourcing-services and /locations-we-serve carry their
 *   own deliberate lists.
 * - City and market pages (London, New York, CityData) name their city.
 * - ContactPoint.areaServed describes where a phone line answers, not where a
 *   service is delivered, so those "Worldwide" values are left as they are.
 */
export const TARGET_MARKET_COUNTRIES = [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Australia",
    "Canada",
] as const;

export const WORLDWIDE = "Worldwide";

/** `areaServed` for a generic service: each target country, then "Worldwide". */
export const SERVICE_AREA_SERVED: ReadonlyArray<{ "@type": "Country"; name: string } | string> = [
    ...TARGET_MARKET_COUNTRIES.map((name) => ({ "@type": "Country" as const, name })),
    WORLDWIDE,
];
