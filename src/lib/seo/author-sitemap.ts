import type { Post } from "../sanity-data-adapter";

/**
 * Which /author/[slug] pages belong in sitemap.xml, and their lastmod.
 *
 * SEO report 20 Nov 2026, E-1 (P1): no author page was in the sitemap, so the
 * strongest expertise signal on the site was discoverable only by following
 * bylines.
 *
 * Who is included
 * ---------------
 * Only authors with at least one post. /author/[slug] sets
 * `robots: { index: authorPostCount > 0 }`, and a noindex URL in a sitemap is
 * a contradiction Search Console reports as an error (the same rule as
 * sitemap-exclusions.ts). Deriving the list from the posts themselves makes
 * the two agree by construction: a post's `authorSlug` is `author->slug`,
 * the same link the author page's postsByAuthorQuery follows. As of
 * 20 Nov 2026 that is 13 of the 21 author documents; the other 8 have no
 * posts.
 *
 * lastmod
 * -------
 * The newest `modifiedISO` among the author's posts. An author page is mostly
 * its article grid, so it changes when the author publishes or updates a
 * post; the author document itself is rarely edited (several were last
 * touched in February while their authors published in November). A bio-only
 * edit does not move this date, which is an accepted trade-off.
 *
 * Slugs are used exactly as stored, matching the page's canonical, so this
 * follows automatically if author slugs are ever renamed (see D-20).
 */
export type AuthorSitemapPost = Pick<Post, "authorSlug" | "modifiedISO" | "dateISO">;

export interface AuthorSitemapEntry {
    slug: string;
    /** Undefined when none of the author's posts carries a parseable date. */
    lastModified: Date | undefined;
    postCount: number;
}

export function authorSitemapEntries(posts: readonly AuthorSitemapPost[]): AuthorSitemapEntry[] {
    const bySlug = new Map<string, AuthorSitemapEntry>();
    for (const post of posts) {
        const slug = post.authorSlug?.trim();
        if (!slug) continue;
        const entry = bySlug.get(slug) ?? { slug, lastModified: undefined, postCount: 0 };
        entry.postCount += 1;
        const modified = new Date(post.modifiedISO || post.dateISO);
        // An unparseable date is skipped rather than kept: an Invalid Date
        // would throw when Next serialises the sitemap.
        if (!Number.isNaN(modified.getTime()) && (!entry.lastModified || modified > entry.lastModified)) {
            entry.lastModified = modified;
        }
        bySlug.set(slug, entry);
    }
    return [...bySlug.values()];
}
