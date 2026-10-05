// F-55 — Replaces the previous /public/llms.txt (a hand-maintained 644-entry
// sitemap-dump, 245KB, last touched 2025-11) with an auto-generated concise
// curated index. Per the llms.txt convention, this file is the SHORT
// front-door — pillar pages + the most-trafficked services — and points AI
// engines at /llms-full.txt (F-56) for the long tail.
//
// What was wrong with the old file:
//   - Tag pages: 100+ thin /blog/tag/* listings, which AI bots have no
//     reason to ingest individually (F-66 already redirects the bad ones)
//   - City doorways: all 88 city pages, the bulk of which Phase 10 GSC
//     showed underperform (→ F-50 / F-70 content remediation territory)
//   - Stale URLs: links to /manual-testing (308 redirect since PR-2A),
//     /software-testing-guide (non-route)
//   - Hand-maintained: drifted as new posts / services landed
//
// What this route emits instead: ~25 entries the AI engines should actually
// know about, refreshed at edge revalidate interval, automatically picks
// up new services + case studies + recent posts from the filesystem and
// Sanity respectively.
//
// Companion file: app/llms-full.txt/route.ts (F-56) — expansive list.
//
// CLAIMS (2026-10-05): the intro blurb used to read "100% ISTQB-certified
// engineering team, 15+ years of QA engagements".
//   - "15+ years" was a static number nobody would ever bump, and it was
//     already understated: organizationSchema, aboutPageSchema and
//     pricingServiceSchema all publish foundingDate "2010", which is 16 years.
//     "since 2010" is checkable, agrees with the schema already submitted to
//     Google, and cannot go stale. This closes backlog C-6 for these two files.
//   - "100%" was dropped from the ISTQB claim: it is an absolute of the same
//     family as the "99.9%" / "100% satisfaction" claims in backlog C-2 / C-5,
//     and it is not evidenced anywhere in this repo. "ISTQB-certified
//     engineers" says the true part without the unprovable quantifier.
// Both claims still appear elsewhere on the site — "15+ years" in ~35 files and
// "100% ISTQB" throughout CityData.tsx — and are NOT fixed by this change.

import { sanityGetPosts, sanityGetAllCaseStudies, type CaseStudy, type Post } from "@/lib/sanity-data-adapter";
import { discoverRoutes, slugToTitle } from "@/lib/seo/discover-routes";
import { getAllCities } from "@/app/lib/CityData";
import { MARKET_PAGES, formatMarketPageLine } from "@/lib/seo/market-pages";

export const revalidate = 3600; // 1h, matches /llms-full.txt + XML sitemap

const BASE = "https://www.testriq.com";

// Hand-curated list of the highest-signal Testriq services to surface in
// the concise index. Other ~35 services are still discoverable via
// /llms-full.txt — this list intentionally favours buyer-intent + Phase 12
// competitor-overlap topics over the long tail.
const TOP_SERVICE_SLUGS = [
    "manual-testing-services",
    "automation-testing-services",
    "performance-testing-services",
    "security-testing",
    "web-application-testing-services",
    "mobile-application-testing",
    "api-testing",
    "ai-application-testing",
    "iot-device-testing-services",
    "accessibility-testing-services",
];

// Trim a string for plain-text rendering (collapse whitespace + cap length
// with a clean ellipsis).
function trim(text: string | undefined, max = 180): string {
    if (!text) return "";
    const cleaned = text.replace(/\s+/g, " ").trim();
    return cleaned.length <= max ? cleaned : cleaned.slice(0, max - 1).trimEnd() + "…";
}

function formatCaseStudy(cs: CaseStudy): string {
    const desc = trim(cs.description, 180) || `Case study showing measurable QA outcomes for ${cs.client} (${cs.industry}).`;
    return `- [${cs.title}](${BASE}/${cs.slug}): ${desc}`;
}

function formatPost(post: Post): string {
    const desc = trim(post.excerpt || post.seo?.description, 180);
    return `- [${post.title}](${BASE}/blog/post/${post.slug})${desc ? `: ${desc}` : ""}`;
}

export async function GET() {
    // Pull live data for the curated case-study + recent-post slices. The
    // expansive companion (/llms-full.txt) lists the full sets — this file
    // surfaces only the highest-signal sample.
    let caseStudies: CaseStudy[] = [];
    let recentPosts: Post[] = [];
    try {
        caseStudies = (await sanityGetAllCaseStudies()).slice(0, 5);
    } catch {
        // proceed without case studies
    }
    try {
        recentPosts = (await sanityGetPosts(8));
    } catch {
        // proceed without posts
    }

    // discoverRoutes runs against the local filesystem — never fails in
    // production (the dirs always exist). Validate `TOP_SERVICE_SLUGS`
    // against the discovered list so a future rename of a service slug
    // doesn't silently drop the entry from this file.
    const allServiceSlugs = new Set(discoverRoutes("src/app/(services)"));
    const topServices = TOP_SERVICE_SLUGS.filter((slug) => allServiceSlugs.has(slug));
    const solutions = discoverRoutes("src/app/(solutions)");

    const lines: string[] = [
        "# Testriq QA Lab — Software Testing Services",
        "",
        "> Testriq is an independent software testing + QA company (Mumbai HQ, global delivery). ISO 9001 + ISO 27001 certified, ISTQB-certified engineers, testing software since 2010 across web, mobile, API, AI, IoT, security, and enterprise software. This file is the concise index — see /llms-full.txt for the complete list of pages, solutions, case studies, and recent blog content.",
        "",
        "## Top Pages",
        "",
        `- [Testriq QA Lab — Home](${BASE}/): Independent QA testing services across the full stack.`,
        `- [About Testriq](${BASE}/about-us): ISO-certified, ISTQB-credentialed QA team.`,
        `- [Case Studies](${BASE}/case-studies): Real client engagements with measurable QA outcomes.`,
        `- [Pricing](${BASE}/pricing): Fixed-scope QA bundles for web, mobile, API, and security testing.`,
        `- [Contact Us](${BASE}/contact-us): Get a custom QA engagement quote.`,
        `- [Careers](${BASE}/careers): Open roles in QA automation, performance, and security testing.`,
        "",
        "## Core Testing Services",
        "",
        ...topServices.map((slug) => `- [${slugToTitle(slug)}](${BASE}/${slug})`),
        "",
        `## Industry Solutions (${solutions.length})`,
        "",
        ...solutions.map((slug) => `- [${slugToTitle(slug)}](${BASE}/${slug})`),
        "",
        ...(caseStudies.length
            ? [
                  "## Featured Case Studies",
                  "",
                  ...caseStudies.map(formatCaseStudy),
                  "",
              ]
            : []),
        ...(recentPosts.length
            ? [
                  "## Recent Articles",
                  "",
                  ...recentPosts.map(formatPost),
                  "",
              ]
            : []),
        `## Market Landing Pages (${MARKET_PAGES.length})`,
        "",
        ...MARKET_PAGES.map((p) => formatMarketPageLine(p, BASE)),
        "",
        "## Free Tools",
        "",
        `- [QA ROI Calculator](${BASE}/roi-calculator): Estimate the cost of not testing.`,
        "",
        "## Reference",
        "",
        `- [llms-full.txt](${BASE}/llms-full.txt): Expansive list — every service, every solution, every case study, all ${getAllCities().length} city pages, top 50 recent posts.`,
        `- [sitemap.xml](${BASE}/sitemap.xml): Full XML sitemap (everything indexable).`,
        "",
    ];

    return new Response(lines.join("\n"), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
    });
}
