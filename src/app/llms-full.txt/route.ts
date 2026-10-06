// F-56 — Auto-generated /llms-full.txt route.
//
// Background: the llms.txt convention pairs a CONCISE curated `llms.txt`
// (top-level index, a few pillar pages) with an EXPANSIVE `llms-full.txt`
// that lists everything indexable an AI engine might want to ground from.
// Before this route, /llms-full.txt 404'd (or worse — got caught by the
// Next.js HTML fallback and served homepage HTML, which an AI bot would
// interpret as a 200 success with no useful text content).
//
// This route auto-generates expansive content from the same sources the
// XML sitemap + HTML sitemap use, so it can never drift out of sync:
//   - 5 core pages + utility (about, careers, contact, etc.)
//   - All ~45 service pages via discoverRoutes('src/app/(services)')
//   - All 7 industry solutions via discoverRoutes('src/app/(solutions)')
//   - All city landing pages via getAllCities() (count is derived, not fixed:
//     london and new-york left the set in Oct 2026 when they became bespoke
//     static routes — see MARKET_PAGES below)
//   - The bespoke market landing pages in src/lib/seo/market-pages.ts, which
//     no discovery mechanism can see
//   - All Sanity case studies
//   - Recent blog posts (top ~50 by publish date) — full list of 338 would
//     bloat the file beyond what AI bots usefully ingest; the curated
//     `llms.txt` (F-55) covers pillar content separately
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
// F-55 will replace the current static /public/llms.txt with a SHORTER
// curated companion to this file — they work as a pair.

import { sanityGetPosts, sanityGetAllCaseStudies, type CaseStudy, type Post } from "@/lib/sanity-data-adapter";
import { discoverRoutes, slugToTitle } from "@/lib/seo/discover-routes";
import { MARKET_PAGES, formatMarketPageLine } from "@/lib/seo/market-pages";
import { getAllCities, type CityData } from "@/app/lib/CityData";

// Match the XML sitemap's revalidate cadence — AI bots that re-fetch
// llms-full.txt periodically get fresh URLs within an hour of any new
// post / case study landing.
export const revalidate = 3600;

const BASE = "https://www.testriq.com";

// Curated description for each top-level page that doesn't have a Sanity
// excerpt. Kept short (one sentence) since the file's goal is signal
// density, not exhaustive copy.
const CORE_PAGES: Array<{ slug: string; title: string; description: string }> = [
    {
        slug: "",
        title: "Testriq QA Lab — Home",
        description:
            "Leading software testing company providing comprehensive QA services across web, mobile, API, AI, IoT, and enterprise systems.",
    },
    {
        slug: "about-us",
        title: "About Testriq",
        description:
            "Independent ISO 9001 + ISO 27001 certified QA testing house, testing software since 2010 with ISTQB-certified engineers.",
    },
    {
        slug: "our-team",
        title: "Our Team",
        description:
            "Meet the ISTQB-certified QA professionals behind Testriq's testing services across automation, performance, security, and AI testing.",
    },
    {
        slug: "careers",
        title: "Careers at Testriq",
        description:
            "Join Testriq's global QA team. Open roles in manual testing, automation engineering, performance testing, and QA leadership.",
    },
    {
        slug: "contact-us",
        title: "Contact Testriq",
        description:
            "Get in touch with Testriq for a free consultation, custom testing engagement quote, or to discuss your QA strategy.",
    },
    {
        slug: "case-studies",
        title: "Case Studies",
        description:
            "Real client success stories — measurable QA outcomes from Testriq engagements across SaaS, fintech, healthcare, gaming, IoT, and enterprise software.",
    },
    {
        slug: "pricing",
        title: "Pricing",
        description:
            "Transparent QA testing bundles for web app, mobile, API, and VAPT security testing. Fixed-scope deliverables with clear pricing.",
    },
    {
        slug: "roi-calculator",
        title: "QA ROI Calculator",
        description:
            "Free tool to estimate the cost of NOT testing — calculate the financial impact of production defects vs. proactive QA investment.",
    },
    {
        slug: "technology-stack",
        title: "Testing Technology Stack",
        description:
            "The frameworks, tools, and platforms Testriq uses across automation (Selenium, Cypress, Playwright, Appium), performance (JMeter), security (Burp Suite), and CI/CD.",
    },
    {
        slug: "locations-we-serve",
        title: "Locations We Serve",
        description:
            "Testriq delivers QA testing services to clients across India and globally — see our city-level coverage and on-the-ground presence.",
    },
];

// Truncate a string to N chars with a clean ellipsis (used for blog excerpts
// that would otherwise wrap awkwardly in plain-text llms-full output).
function trim(text: string | undefined, max = 200): string {
    if (!text) return "";
    const cleaned = text.replace(/\s+/g, " ").trim();
    return cleaned.length <= max ? cleaned : cleaned.slice(0, max - 1).trimEnd() + "…";
}

function formatService(slug: string): string {
    const title = slugToTitle(slug);
    return `- [${title}](${BASE}/${slug}): Professional ${title.toLowerCase()} from Testriq — methodology, deliverables, and engagement options for QA teams adopting this service.`;
}

function formatCity(city: CityData): string {
    return `- [Software QA Testing Services in ${city.name}](${BASE}/${city.slug}): Local QA + testing engagements for clients in ${city.name}${city.state ? `, ${city.state}` : ""}.`;
}

function formatCaseStudy(cs: CaseStudy): string {
    const desc = trim(cs.description || `Case study showcasing how Testriq delivered measurable QA outcomes for ${cs.client} in the ${cs.industry} industry.`, 220);
    return `- [${cs.title}](${BASE}/${cs.slug}): ${desc}`;
}

function formatPost(post: Post): string {
    const desc = trim(post.excerpt || post.seo?.description, 220);
    return `- [${post.title}](${BASE}/blog/post/${post.slug})${desc ? `: ${desc}` : ""}`;
}

export async function GET() {
    const services = discoverRoutes("src/app/(services)");
    const solutions = discoverRoutes("src/app/(solutions)");
    const cities = getAllCities();

    // Defensive: Sanity fetches may fail in build / preview contexts where
    // Sanity is unreachable. Fall back to empty lists so the route always
    // returns a useful (if smaller) file rather than a 500.
    let posts: Post[] = [];
    let caseStudies: CaseStudy[] = [];
    try {
        posts = await sanityGetPosts();
    } catch {
        // proceed without posts
    }
    try {
        caseStudies = await sanityGetAllCaseStudies();
    } catch {
        // proceed without case studies
    }

    // Top 50 most recent posts — full list of 338 would balloon the file
    // beyond what AI bots usefully ingest in one fetch.
    const recentPosts = posts.slice(0, 50);

    const lines: string[] = [
        "# Testriq QA Lab — Software Testing Services",
        "",
        "> Testriq is an independent software testing + QA services company (Mumbai HQ, global delivery). ISO 9001 + ISO 27001 certified, ISTQB-certified engineers, testing software since 2010 across web, mobile, API, AI, IoT, security, and enterprise software. This file lists the full set of pages an AI engine can ground on for Testriq — services, industry solutions, case studies, location pages, and recent blog content.",
        "",
        "## Core Pages",
        "",
        ...CORE_PAGES.map((p) => `- [${p.title}](${BASE}${p.slug ? `/${p.slug}` : "/"}): ${p.description}`),
        "",
        `## Testing Services (${services.length})`,
        "",
        "Specialised QA testing services Testriq delivers. Each page covers methodology, deliverables, tools used, and engagement options.",
        "",
        ...services.map(formatService),
        "",
        `## Industry Solutions (${solutions.length})`,
        "",
        "Vertical-specific QA solutions tuned to each industry's compliance + risk profile.",
        "",
        ...solutions.map(formatService),
        "",
        `## Case Studies (${caseStudies.length})`,
        "",
        "Real client engagements with measurable QA outcomes.",
        "",
        ...caseStudies.map(formatCaseStudy),
        "",
        `## Market Landing Pages (${MARKET_PAGES.length})`,
        "",
        "Hand-written landing pages for specific markets. These are not city-template pages — each covers the regulations, working-hours model and reference work relevant to that market.",
        "",
        ...MARKET_PAGES.map((p) => formatMarketPageLine(p, BASE)),
        "",
        `## Locations We Serve (${cities.length})`,
        "",
        "City-level QA testing service pages for India + international markets.",
        "",
        ...cities.map(formatCity),
        "",
        `## Recent Blog Posts (latest ${recentPosts.length})`,
        "",
        "Most recent technical articles + guides published by Testriq's QA team. The full archive lives at /blog.",
        "",
        ...recentPosts.map(formatPost),
        "",
    ];

    return new Response(lines.join("\n"), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            // Edge cache 1h, stale-while-revalidate 1d — matches the route's
            // own revalidate and lets AI bots that re-fetch frequently hit
            // a warm cache while still getting fresh content within the hour.
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
    });
}
