// This file exists for one job: the legacy `/blog/<slug>` ->
// `/blog/post/<slug>` redirects that used to be 365 individual rules in
// next.config's redirect table.
//
// That table reached 1,167 custom routes and tripped Next's
// `max-custom-routes-reached` warning (soft limit 1,000), with every request
// matched sequentially against all of them. Here it is one Set lookup, scoped
// by the matcher below so it never runs outside /blog. The table is now 800.
//
// Named `proxy.ts`, not `middleware.ts`: Next 16.2 deprecates the middleware
// file convention in favour of proxy, and warns about it on every build
// ("The 'middleware' file convention is deprecated. Please use 'proxy'
// instead."). Fixing one warning by introducing another would be a poor trade.
// The contract is the same — export a function as `default` or named `proxy`,
// and `config.matcher` still applies.
//
// The decision logic lives in src/lib/seo/blog-slug-redirect.ts so it can be
// unit-tested without constructing a NextRequest. See that file for why this is
// a slug list rather than a blanket `/blog/:slug` rule.

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { blogPostRedirectTarget } from "@/lib/seo/blog-slug-redirect";

export function proxy(request: NextRequest) {
    const target = blogPostRedirectTarget(request.nextUrl.pathname);
    if (!target) return NextResponse.next();

    // clone() preserves the query string and hash, which the redirect table
    // did automatically.
    const url = request.nextUrl.clone();
    url.pathname = target;

    // 308, matching the `permanent: true` these rules carried. NextResponse
    // .redirect defaults to 307, which would tell crawlers the move is
    // temporary and leave the old URLs indexed.
    return NextResponse.redirect(url, 308);
}

export const config = {
    // One segment under /blog only. Two-segment paths (/blog/post/x,
    // /blog/tag/x) never reach this, and neither does anything outside /blog,
    // so the other ~1,200 routes pay nothing for it.
    matcher: "/blog/:slug",
};
