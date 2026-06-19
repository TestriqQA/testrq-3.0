// 2026-05-19 follow-up hotfix — switched from `next-sanity` createClient to
// `@sanity/client` directly because `next-sanity@12` appears to apply
// production-mode defaults that override explicit `useCdn: false`. After our
// first hotfix (PR #124/#125) flipped useCdn:false, /api/debug-seo on prod
// still returned `API CDN Requests quota limit reached` (the CDN-specific
// error string), proving the deployed code was still hitting apicdn.sanity.io
// despite the explicit setting. Direct @sanity/client respects useCdn without
// next-sanity's defaults layer.
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    // 2026-06-19 — flipped back to useCdn:true. The PR #124-#127 useCdn:false
    // strategy worked tactically when apicdn.sanity.io (100K/mo) was 402-locked
    // last month, but routed traffic through api.sanity.io which has a 10×
    // smaller quota (10K/mo). The smaller quota then exhausted under normal
    // crawl + traffic ~30 days later, locking /api/debug-seo with
    // "plan_limit_reached - API Requests quota limit reached". The CDN-quota
    // cycle has since reset, so we route back to the higher-headroom endpoint.
    // 60s CDN staleness is acceptable for a marketing blog. Long-term, Plan C
    // (full content snapshot in PR #128) removes this Sanity dependency
    // entirely — once that snapshot is populated, neither quota matters.
    useCdn: true,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
    return builder.image(source);
}
