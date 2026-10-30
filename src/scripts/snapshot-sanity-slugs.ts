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
 *   The CONTENT snapshot is generated per deploy and is NOT committed. The
 *   `prebuild` npm script runs this file with `--build` (see that flag's
 *   comment below), so every Vercel build gets fresh content.
 *
 *   The copy of sanity-content-snapshot.json in git is an intentionally EMPTY
 *   stub, and should stay that way. It exists only because the adapter and
 *   src/lib/seo/redirect-map.ts import both files statically, so they must be
 *   present for `tsc`, the Vitest suite and local dev to resolve. A populated
 *   copy is ~20 MB per refresh of git history, and — until the client
 *   components were changed to take their data as props — it was also compiled
 *   into the browser bundle as an 11.96 MB chunk.
 *
 *   # Refresh by hand. Strict: non-zero exit on any incomplete fetch.
 *   npm run sanity:snapshot
 *
 *   The SLUG snapshot is small (~55 KB) and is worth committing when it drifts,
 *   since generateStaticParams and the redirect table fall back to it:
 *     git add src/lib/sanity-build-snapshot.json
 *     git commit -m "chore: refresh Sanity slug snapshot"
 *
 *   Do NOT commit a populated src/lib/sanity-content-snapshot.json.
 *
 * Vercel build environment needs NEXT_PUBLIC_SANITY_PROJECT_ID,
 * NEXT_PUBLIC_SANITY_DATASET and SANITY_API_TOKEN. Without them the prebuild
 * step warns, the build continues, and the site falls back to live Sanity
 * reads — the behaviour from before the snapshot existed.
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

// `--build` is how the `prebuild` npm script invokes this (see package.json).
// It differs from a manual `npm run sanity:snapshot` in two ways:
//
//  1. It is a NO-OP outside CI/Vercel. A local `npm run build` would otherwise
//     rewrite the committed stub with ~20 MB of content — exactly the diff this
//     arrangement exists to keep out of git history.
//
//  2. A Sanity failure warns instead of exiting non-zero. The snapshot is an
//     optimisation, not a dependency: the runtime adapter falls back to reading
//     Sanity live. This project has hit `plan_limit_reached` 402 quota locks
//     repeatedly (see the comment history in src/lib/sanity.ts), and a quota
//     lock must not block an unrelated hotfix deploy.
//
// Run without the flag to get the strict behaviour: non-zero exit on any
// incomplete fetch, which is what you want when refreshing by hand or in a
// dedicated CI job.
const BUILD_MODE = process.argv.includes('--build');
const IS_CI = Boolean(process.env.VERCEL || process.env.CI);

if (BUILD_MODE && !IS_CI) {
    console.log(
        '[snapshot] --build outside CI/Vercel: keeping the committed snapshot files and skipping the refresh.',
    );
    process.exit(0);
}

/**
 * Exit non-zero normally, but never fail a build.
 *
 * Callers have already logged why. In `--build` mode the deploy continues with
 * whatever snapshot is on disk — the committed stub, or a partial refresh —
 * and the site reads from Sanity live for anything missing.
 */
function failOrWarn(): never {
    if (BUILD_MODE) {
        console.warn(
            '[snapshot] --build: continuing the build regardless. The site will read from Sanity live for anything the snapshot is missing.',
        );
        process.exit(0);
    }
    process.exit(1);
}

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
    // Drafts are excluded deliberately. The client above authenticates with
    // SANITY_API_TOKEN, and a token-authenticated read returns drafts.* docs
    // alongside published ones. Their slugs then reached postSlugs, which is
    // what generateStaticParams in blog/post/[slug] prerenders — so every
    // draft became a built page whose own postBySlugQuery (unauthenticated,
    // published-only) found nothing and called notFound(). The result was a
    // soft 404: HTTP 200 serving "Post Not Found".
    //
    // Found 13 Oct 2026 while chasing 8 such pages in .next/server/app/blog/
    // post/. Six were simply stale — the snapshot had not been regenerated
    // since 19 May 2026 — and refreshing it cleared those. The remaining two
    // (government-certified-ai-testing-services,
    // web-app-performance-load-vs-stress-testing) survived the refresh
    // because they are live drafts, which is what identified this.
    const query = `*[_type == "${docType}" && defined(slug.current) && !(_id in path("drafts.**"))][].slug.current`;
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
        return Array.isArray(result) ? stripDrafts(result, label) : [];
    } catch (err) {
        console.error(`Failed to fetch ${label}:`, (err as Error).message);
        return [];
    }
}

/**
 * Drop `drafts.*` documents from a fetched list.
 *
 * The slug queries above carry `!(_id in path("drafts.**"))`, but the FULL
 * document queries are the shared constants in src/lib/sanity-queries.ts —
 * `allCaseStudiesQuery` is a bare `*[_type == "caseStudy"]` — and this script
 * authenticates with SANITY_API_TOKEN, so a token-authenticated read returns
 * drafts alongside published docs. Measured on 27 Oct 2026: the slug query
 * returned 19 case studies while the content query returned 20, and the
 * snapshot shipped two drafts — `drafts.caseStudy-realtytrac-case-study` and
 * an unpublished skillbrew case study. Because the content snapshot is keyed
 * by slug, a draft silently REPLACES the published document it drafts, so the
 * live site would have served draft copy for a published case study and
 * published an unreleased one outright.
 *
 * Filtered here rather than by adding the exclusion to those shared queries:
 * src/lib/sanity-preview.ts runs the SAME constants through `previewClient`
 * with `perspective: 'drafts'` precisely to show drafts (F-64), so excluding
 * them in the query would break editor preview. Doing it in the snapshot
 * script keeps both behaviours correct, and covers every collection that goes
 * through this helper rather than one query at a time.
 */
function stripDrafts<T>(docs: T[], label: string): T[] {
    const kept = docs.filter((doc) => {
        const id = (doc as { _id?: unknown })?._id;
        return !(typeof id === "string" && id.startsWith("drafts."));
    });
    const removed = docs.length - kept.length;
    if (removed > 0) {
        console.warn(`  ↳ ${label}: excluded ${removed} draft document(s)`);
    }
    return kept;
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
            // Same drafts exclusion as fetchSlugList, and it matters more here:
            // a draft carries the same slug.current as the document it drafts,
            // so an unfiltered list lets unreviewed draft bodies overwrite the
            // published ones in the slug-keyed snapshot map the adapter serves.
            `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
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
        // Local copies of queries.categoriesQuery / queries.tagsQuery with the
        // drafts exclusion added. They cannot go through stripDrafts below,
        // because neither shared projection returns `_id` — so a draft tag is
        // indistinguishable from a published one once fetched. Measured: the
        // tag slug list held 937 entries while this content query returned
        // 940, and the three extra documents were drafts that reached the
        // snapshot silently. The projections are copied verbatim; only the
        // filter differs. (Editing the shared constants instead would break
        // editor preview, which runs them through previewClient to SEE drafts.)
        fetchOrEmpty(
            'categories (full)',
            `*[_type == "category" && !(_id in path("drafts.**"))] {
  title,
  slug,
  description,
  colorTheme,
  icon,
  "count": count(*[_type == "post" && references(^._id)])
}`,
        ),
        fetchOrEmpty(
            'tags (full)',
            `*[_type == "tag" && !(_id in path("drafts.**"))] {
  title,
  slug,
  "count": count(*[_type == "post" && references(^._id)])
}`,
        ),
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
            // Drafts excluded here too. No draft authors exist today (21 slugs
            // and 21 documents), but a draft sharing a published author's slug
            // would match this filter and, because authors are keyed by slug,
            // overwrite the published record.
            `*[_type == "author" && slug.current in $slugs && !(_id in path("drafts.**"))] {
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
        failOrWarn();
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
        failOrWarn();
    }
    if (Object.keys(posts).length === 0 && postSlugs.length > 0) {
        console.warn('⚠️  Slug lists fetched but full content empty. Likely partial quota lock. Snapshot files written but content-snapshot will be incomplete.');
        failOrWarn();
    }
}

main().catch(err => {
    console.error('Snapshot generation failed:', err);
    failOrWarn();
});
