// D-20: 308 old capitalised author slugs to their lowercase ones. Done in the
// proxy because next.config redirects match case-insensitively and would loop.

import buildSnapshot from "../sanity-build-snapshot.json";

export const AUTHOR_SLUGS: ReadonlySet<string> = new Set<string>(
    (buildSnapshot as { authorSlugs?: string[] }).authorSlugs ?? [],
);

// Renames that changed more than case. Ragini has two Sanity records; update if merged.
export const RENAMED_AUTHOR_SLUGS: Readonly<Record<string, string>> = {
    "Ragini-Kumari": "ragini-kumari-qa",
    "nandini-yadav": "ragini-kumari",
};

const SINGLE_SEGMENT = /^\/author\/([^/]+)\/?$/;

export function authorRedirectTarget(
    pathname: string,
    authorSlugs: ReadonlySet<string> = AUTHOR_SLUGS,
): string | null {
    const match = SINGLE_SEGMENT.exec(pathname);
    if (!match) return null;

    let slug: string;
    try {
        slug = decodeURIComponent(match[1]);
    } catch {
        return null;
    }
    if (authorSlugs.has(slug)) return null;

    if (Object.hasOwn(RENAMED_AUTHOR_SLUGS, slug)) {
        const renamed = RENAMED_AUTHOR_SLUGS[slug];
        return authorSlugs.has(renamed) ? `/author/${renamed}` : null;
    }

    const lower = slug.toLowerCase();
    const candidates = [...authorSlugs].filter((s) => s.toLowerCase() === lower);
    return candidates.length === 1 ? `/author/${candidates[0]}` : null;
}
