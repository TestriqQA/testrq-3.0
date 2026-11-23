/**
 * When a blog tag or category archive is indexable, and how many posts each
 * one has. One rule shared by the archive pages (their robots tag) and
 * sitemap.xml (which archives it lists), so the two cannot disagree.
 *
 * SEO report 20 Nov 2026, D-2 (P2): 19 tag archives and one category were in
 * the sitemap while their pages said noindex. The pages counted the posts they
 * actually list; the sitemap trusted a stored `count` from the Sanity
 * snapshot, and that count also counted drafts (a published post with an open
 * draft counted twice), so 20 one-post archives reported 2. The snapshot query
 * is fixed too, but the sitemap now counts from the published posts it
 * already loads, the same way the pages do, so a stored count can never put a
 * noindexed archive back in the sitemap.
 *
 * Relative imports only: this repo has no vitest config, so "@/" would not
 * resolve in the test.
 */
import type { Post } from "../sanity-data-adapter";

/**
 * An archive listing one post is a thinner duplicate of that post, and one
 * listing none has nothing on it; both are noindex. Changed here, it changes
 * for the tag pages, the category pages and the sitemap together.
 */
export const MIN_POSTS_FOR_INDEXED_ARCHIVE = 2;

export function isArchiveIndexable(postCount: number): boolean {
    return postCount >= MIN_POSTS_FOR_INDEXED_ARCHIVE;
}

export type ArchiveCountPost = Pick<Post, "categories" | "tagsData">;

export interface ArchivePostCounts {
    /** Category slug -> number of posts in it. */
    categories: Map<string, number>;
    /** Tag slug -> number of posts with it. */
    tags: Map<string, number>;
}

/**
 * Posts per category and per tag, counted from a list of published posts. A
 * post lists a category or tag at most once per archive, matching the pages'
 * `$slug in categories[]->slug.current` / `tags[]` queries.
 */
export function countArchivePosts(posts: readonly ArchiveCountPost[]): ArchivePostCounts {
    const categories = new Map<string, number>();
    const tags = new Map<string, number>();
    const bump = (map: Map<string, number>, slugs: Iterable<string>) => {
        for (const slug of new Set(slugs)) map.set(slug, (map.get(slug) ?? 0) + 1);
    };
    for (const post of posts) {
        bump(categories, (post.categories ?? []).map((c) => c?.slug).filter((s): s is string => !!s));
        bump(tags, (post.tagsData ?? []).map((t) => t?.slug).filter((s): s is string => !!s));
    }
    return { categories, tags };
}
