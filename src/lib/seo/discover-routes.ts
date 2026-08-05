import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Discover all Next.js route directories inside a given App Router group.
 *
 * Scans `<projectRoot>/<groupPath>` recursively for subdirectories that contain
 * a `page.tsx` (the testriq-3.0 codebase convention) and returns their slug
 * paths sorted alphabetically — the names map directly to URL slugs because
 * route groups (`(services)`, `(solutions)`) are stripped from the public URL.
 *
 * Nested routes are returned as slash-joined paths, e.g.
 * `performance-testing-services/latency-testing`. The scan was previously one
 * level deep, which silently excluded that page from the XML sitemap, the HTML
 * sitemap, and both llms.txt files — despite "what is a latency test" being the
 * site's highest-impression query.
 *
 * Filters out:
 *   - Dynamic route segments (`[slug]`, `[...catchAll]`) — those need their
 *     own data-driven entries
 *   - Private folders (starting with `_`) — Next.js convention for non-route
 *     directories
 *   - Nested route groups (starting with `(`) — not URL segments
 *   - Files (only directories count)
 *   - Directories without a `page.tsx` — though their children are still
 *     scanned, since Next.js allows layout-only intermediate segments
 *
 * Returns `[]` and logs an error if the group directory cannot be read.
 * This keeps callers (sitemap, website-map) working in the rare case the
 * FS scan fails (CI sandbox, etc.).
 *
 * Server-only — uses node:fs. Do NOT import from a client component.
 *
 * F-31: extracted from src/app/sitemap.ts so /website-map (HTML sitemap)
 * can share the same auto-discovery and stop drifting from a hardcoded
 * 13-entry manualLinks array.
 */
export function discoverRoutes(groupPath: string): string[] {
    const groupDir = join(process.cwd(), groupPath);
    const routes: string[] = [];

    const walk = (dir: string, prefix: string) => {
        let entries;
        try {
            entries = readdirSync(dir, { withFileTypes: true });
        } catch (err) {
            console.error(`[discoverRoutes] Failed to scan ${dir}:`, err);
            return;
        }

        for (const entry of entries) {
            if (!entry.isDirectory()) continue;
            // Dynamic segments, private folders and nested route groups are
            // not routes in their own right.
            if (/^[[_(]/.test(entry.name)) continue;

            const slug = prefix ? `${prefix}/${entry.name}` : entry.name;
            const abs = join(dir, entry.name);

            try {
                statSync(join(abs, "page.tsx"));
                routes.push(slug);
            } catch {
                // No page.tsx here, but a child segment may still be a route
                // (Next.js allows layout-only intermediate segments), so keep
                // descending rather than pruning the branch.
            }

            walk(abs, slug);
        }
    };

    walk(groupDir, "");
    return routes.sort();
}

/**
 * Common SEO/QA acronyms that should render uppercase in titles instead of
 * proper-cased ("QA" not "Qa", "IoT" not "Iot"). Used by `slugToTitle`.
 */
const TITLE_ACRONYMS = new Set([
    "qa",
    "ai",
    "api",
    "ml",
    "iso",
    "iec",
    "etl",
    "sap",
    "ux",
    "ui",
    "uat",
    "wcag",
    "pci",
    "sso",
    "tdm",
    "cms",
]);

// Acronyms that have a brand-canonical mixed-case form (not all-caps).
const TITLE_PASCAL_OVERRIDES: Record<string, string> = {
    saas: "SaaS",
    iot: "IoT",
    cicd: "CI/CD",
};

/**
 * Convert a kebab-case route slug into a human-readable title for the HTML
 * sitemap (`/website-map`). Title-cases each word, except acronyms in
 * `TITLE_ACRONYMS` (uppercased) and entries in `TITLE_PASCAL_OVERRIDES`
 * (custom Pascal/SaaS-style casing). Numeric tokens pass through unchanged.
 *
 * Nested slugs are titled from their last segment only, so
 * `performance-testing-services/latency-testing` reads as "Latency Testing"
 * rather than repeating its parent.
 *
 * Examples:
 *   "manual-testing-services"           → "Manual Testing Services"
 *   "iot-device-testing-services"       → "IoT Device Testing Services"
 *   "qa-documentation-services"         → "QA Documentation Services"
 *   "saas-testing-services"             → "SaaS Testing Services"
 *   "performance-testing-services/latency-testing"
 *                                       → "Latency Testing"
 *   "iso-iec-42001-compliance-testing-services"
 *                                       → "ISO IEC 42001 Compliance Testing Services"
 */
export function slugToTitle(slug: string): string {
    const segments = slug.split("/");
    return segments[segments.length - 1]
        .split("-")
        .map((word) => {
            const lower = word.toLowerCase();
            if (TITLE_PASCAL_OVERRIDES[lower]) return TITLE_PASCAL_OVERRIDES[lower];
            if (TITLE_ACRONYMS.has(lower)) return lower.toUpperCase();
            // Numeric tokens (e.g. "42001") pass through unchanged
            if (/^\d/.test(word)) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}
