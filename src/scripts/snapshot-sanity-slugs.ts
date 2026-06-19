/**
 * Sanity build + content snapshot refresher.
 *
 * Two output files:
 *
 *  1. `src/lib/sanity-build-snapshot.json` (existing, slug-only) — small,
 *     reviewable diff. Used by `generateStaticParams` so Vercel builds skip
 *     Sanity for slug enumeration.
 *
 *  2. `src/lib/sanity-content-snapshot.json` (new, full content) — large,
 *     auto-generated. Caches FULL documents (posts with bodies, case studies,
 *     authors, categories, tags, jobs) plus denormalized indexes
 *     (postsByCategory / postsByTag / postsByAuthor). Runtime adapters read
 *     from this so production NEVER hits the Sanity API for published content.
 *
 * This eliminates BOTH build-time AND runtime Sanity quota burn. Combined with
 * the existing 402 resilience wrappers, the site survives a fully-locked
 * Sanity project until the next snapshot refresh.
 *
 * Usage:
 *   # Make sure SANITY_API_TOKEN (or NEXT_PUBLIC_SANITY_PROJECT_ID etc) is in .env.local
 *   npm run sanity:snapshot
 *
 *   # Then review + commit the two files:
 *   git add src/lib/sanity-build-snapshot.json src/lib/sanity-content-snapshot.json
 *   git commit -m "chore: refresh Sanity snapshot"
 *
 * Recommended cadence: refresh whenever a batch of new posts/case studies lands
 * in Sanity Studio. Or wire a daily GitHub Action that runs this + auto-PRs.
 *
 * Notes:
 *  - Uses `useCdn: false` so we get fresh published data, not stale CDN cache.
 *  - 10 fetches total (slug lists + full lists + per-type queries). Still cheap
 *    versus the thousands of per-request fetches the runtime would make without
 *    a snapshot.
 *  - If Sanity is in 402 quota state, partial snapshot is better than nothing —
 *    script writes whatever it could fetch and exits non-zero so CI catches it.
 */

import { createClient } from 'next-sanity';
import * as dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import * as queries from '../lib/sanity-queries';

// Load .env.local first (Next.js convention), fall back to .env
dotenv.config({ path: '.env.local' });
dotenv.config();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7hxinmig';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // bypass CDN — we want fresh data, and this query is rare anyway
    token: process.env.SANITY_API_TOKEN, // optional; reads work without token for public datasets
});

async function fetchSlugList(docType: string): Promise<string[]> {
    const query = `*[_type == "${docType}" && defined(slug.current)][].slug.current`;
    try {
        const result = await client.fetch<string[]>(query);
        return result || [];
    } catch (err) {
        console.error(`Failed to fetch ${docType} slugs:`, (err as Error).message);
        return [];
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchOrEmpty<T = any>(label: string, query: string, params?: Record<string, unknown>): Promise<T[]> {
    try {
        const result = await client.fetch<T[]>(query, params || {});
        return Array.isArray(result) ? result : [];
    } catch (err) {
        console.error(`Failed to fetch ${label}:`, (err as Error).message);
        return [];
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function indexBySlug<T extends { slug?: { current?: string } | string }>(docs: T[]): Record<string, T> {
    const out: Record<string, T> = {};
    for (const doc of docs) {
        const slug = typeof doc.slug === 'string'
            ? doc.slug
            : doc.slug?.current;
        if (slug) out[slug] = doc;
    }
    return out;
}

// Build denormalized index: docs keyed by some join slug -> ordered post slugs
function buildPostsIndex(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    posts: any[],
    extractSlugs: (post: Record<string, unknown>) => string[],
): Record<string, string[]> {
    const index: Record<string, string[]> = {};
    // posts already arrive ordered by publishedAt desc from the GROQ queries
    for (const post of posts) {
        const postSlug = post.slug?.current;
        if (!postSlug) continue;
        for (const joinSlug of extractSlugs(post)) {
            if (!joinSlug) continue;
            if (!index[joinSlug]) index[joinSlug] = [];
            index[joinSlug].push(postSlug);
        }
    }
    return index;
}

async function main() {
    console.log(`Connecting to Sanity (projectId=${projectId}, dataset=${dataset})...`);

    // Phase 1 — slug lists (existing behavior, kept identical)
    const [postSlugs, caseStudySlugs, authorSlugs, categorySlugs, tagSlugs] = await Promise.all([
        fetchSlugList('post'),
        fetchSlugList('caseStudy'),
        fetchSlugList('author'),
        fetchSlugList('category'),
        fetchSlugList('tag'),
    ]);

    // Phase 2 — full content for runtime cache
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [postList, caseStudyList, categoryList, tagList, jobList] = await Promise.all([
        // postsQuery doesn't return body — we need the full body for /blog/post/[slug].
        // Inline a richer query that mirrors postBySlugQuery shape across all posts.
        fetchOrEmpty(
            'posts (full)',
            `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
                _id,
                title,
                slug,
                mainImage,
                excerpt,
                body,
                publishedAt,
                _updatedAt,
                "author": author->{name, slug, image, bio, linkedin, credentials, sameAs},
                "categories": categories[]->{title, slug, colorTheme, icon, description},
                "tags": tags[]->{title, slug},
                seo
            }`,
        ),
        fetchOrEmpty('case studies (full)', queries.allCaseStudiesQuery),
        fetchOrEmpty('categories (full)', queries.categoriesQuery),
        fetchOrEmpty('tags (full)', queries.tagsQuery),
        fetchOrEmpty('jobs (full)', queries.allJobPostingsQuery),
    ]);

    // Phase 3 — per-author posts (one fetch is fine since we already have the list).
    // We re-derive locally from postList instead of a separate Sanity fetch to save quota.
    // postsByAuthor key = author slug; value = post slugs in publishedAt desc.

    // posts list already ordered publishedAt desc — derive indexes in JS to save Sanity quota.
    const postsByCategory = buildPostsIndex(
        postList,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (post: any) => (post.categories || []).map((c: any) => c?.slug?.current).filter(Boolean) as string[],
    );
    const postsByTag = buildPostsIndex(
        postList,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (post: any) => (post.tags || []).map((t: any) => t?.slug?.current).filter(Boolean) as string[],
    );
    const postsByAuthor = buildPostsIndex(
        postList,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (post: any) => [post.author?.slug?.current].filter(Boolean) as string[],
    );

    // Phase 4 — author full docs. The author projection inside postsQuery has
    // name/slug/image/bio/linkedin/credentials/sameAs but uses dereferences. We
    // can derive the canonical author map from postList[].author since that
    // already includes the full author projection. Fall back to a dedicated
    // query for authors who have no posts yet.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const authorMap: Record<string, any> = {};
    for (const post of postList) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const a: any = (post as any).author;
        const slug = a?.slug?.current;
        if (slug && !authorMap[slug]) {
            authorMap[slug] = a;
        }
    }
    // Top up any author slugs we know exist but didn't surface via posts
    const missingAuthorSlugs = authorSlugs.filter((s) => !authorMap[s]);
    if (missingAuthorSlugs.length > 0) {
        const filler = await fetchOrEmpty(
            'authors (postless)',
            `*[_type == "author" && slug.current in $slugs] {
                _id, name, slug, image, bio, linkedin, credentials, sameAs
            }`,
            { slugs: missingAuthorSlugs },
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for (const a of filler as any[]) {
            const slug = a?.slug?.current;
            if (slug) authorMap[slug] = a;
        }
    }

    // Index full doc maps by slug
    const posts = indexBySlug(postList);
    const caseStudies = indexBySlug(caseStudyList);
    const categories = indexBySlug(categoryList);
    const tags = indexBySlug(tagList);
    const jobs = indexBySlug(jobList);

    // SAFETY: refuse to write either snapshot when EVERY fetch failed. This
    // prevents a transient 402 quota state from wiping committed snapshot
    // data. If at least one category produced rows, we write what we got.
    const allEmpty = postSlugs.length === 0
        && caseStudySlugs.length === 0
        && authorSlugs.length === 0
        && categorySlugs.length === 0
        && tagSlugs.length === 0
        && Object.keys(posts).length === 0
        && Object.keys(caseStudies).length === 0
        && Object.keys(categories).length === 0
        && Object.keys(tags).length === 0
        && Object.keys(jobs).length === 0;

    if (allEmpty) {
        console.error('❌ Every Sanity fetch returned empty. Refusing to overwrite committed snapshot files.');
        console.error('   Most likely cause: API Requests quota at 100%. Wait for quota reset or temporarily upgrade.');
        process.exit(1);
    }

    // Write slug snapshot (existing file, backwards-compatible structure)
    const slugSnapshot = {
        generatedAt: new Date().toISOString(),
        note: 'Auto-generated by src/scripts/snapshot-sanity-slugs.ts. Commit this file. Refresh by running `npm run sanity:snapshot`.',
        postSlugs,
        caseStudySlugs,
        authorSlugs,
        categorySlugs,
        tagSlugs,
    };
    const slugPath = resolve(process.cwd(), 'src/lib/sanity-build-snapshot.json');
    writeFileSync(slugPath, JSON.stringify(slugSnapshot, null, 2) + '\n');

    // Write content snapshot (new file)
    const contentSnapshot = {
        generatedAt: new Date().toISOString(),
        note: 'Auto-generated by src/scripts/snapshot-sanity-slugs.ts. Commit this file. Refresh by running `npm run sanity:snapshot`. Large diffs are expected and normal.',
        posts,
        caseStudies,
        authors: authorMap,
        categories,
        tags,
        jobs,
        indexes: {
            postsByCategory,
            postsByTag,
            postsByAuthor,
        },
    };
    const contentPath = resolve(process.cwd(), 'src/lib/sanity-content-snapshot.json');
    writeFileSync(contentPath, JSON.stringify(contentSnapshot, null, 2) + '\n');

    console.log(`✅ Slug snapshot:    ${slugPath}`);
    console.log(`✅ Content snapshot: ${contentPath}`);
    console.log(`Counts:`);
    console.log(`  posts:        ${postSlugs.length} slugs / ${Object.keys(posts).length} docs`);
    console.log(`  case studies: ${caseStudySlugs.length} slugs / ${Object.keys(caseStudies).length} docs`);
    console.log(`  authors:      ${authorSlugs.length} slugs / ${Object.keys(authorMap).length} docs`);
    console.log(`  categories:   ${categorySlugs.length} slugs / ${Object.keys(categories).length} docs`);
    console.log(`  tags:         ${tagSlugs.length} slugs / ${Object.keys(tags).length} docs`);
    console.log(`  jobs:         ${Object.keys(jobs).length} docs`);
    console.log(`  indexes:`);
    console.log(`    postsByCategory: ${Object.keys(postsByCategory).length} categories`);
    console.log(`    postsByTag:      ${Object.keys(postsByTag).length} tags`);
    console.log(`    postsByAuthor:   ${Object.keys(postsByAuthor).length} authors`);

    if (postSlugs.length === 0 && caseStudySlugs.length === 0) {
        console.warn('⚠️  All slug lists empty. Sanity may be in 402 quota state OR token missing. Try again after quota resets.');
        process.exit(1);
    }
    if (Object.keys(posts).length === 0 && postSlugs.length > 0) {
        console.warn('⚠️  Slug lists fetched but full content empty. Likely partial quota lock. Snapshot files written but content-snapshot will be incomplete.');
        process.exit(1);
    }
}

main().catch(err => {
    console.error('Snapshot generation failed:', err);
    process.exit(1);
});
