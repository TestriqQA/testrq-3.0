import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
// F-15: 760 redirect rules extracted to src/lib/seo/redirect-map.ts so this
// config stays reviewable. Aliased to `redirectMap` to avoid any shadowing
// of the `async redirects()` method below.
import { redirects as redirectMap } from "./src/lib/seo/redirect-map";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {

  trailingSlash: false,        // ✅ Prevent /about-us/ and /about-us from being separate URLs
  reactStrictMode: true, // ✅ Helps catch performance issues in dev
  poweredByHeader: false, // Suppress X-Powered-By: Next.js framework fingerprint on all responses
  experimental: {
    cssChunking: true,     // Split + reorder CSS per route
    optimizeCss: true,     // Inline critical CSS (Critters)
    // inlineCss disabled: it embedded the full route stylesheet into the HTML
    // *three* times (once in <style>, twice more serialized into the RSC flight
    // payload), which accounted for 76% of a 1.18 MB homepage document and
    // dominated mobile LCP. Serving CSS as a normal external file also lets it
    // be cached across the ~101 routes instead of re-sent per navigation.
    // inlineCss: true
  },


  images: {
    // Enable Next.js/Vercel image optimization
    unoptimized: false, // images WILL be optimized (this is the default, explicitly set for clarity)
    // Keep remotePatterns if still using <Image> with external sources (safe to keep)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "cms.testriq.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return redirectMap;
  },

  async headers() {
    return [
      {
        // Block search engines from indexing the Sanity Studio admin shell.
        // Combined with robots.ts Disallow, this provides defense-in-depth:
        // crawlers that fetch /cms anyway will see noindex on the response.
        source: "/cms/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        // Site-wide baseline security headers. CSP is intentionally NOT set
        // here yet — it needs an inline-script/style inventory (GA, Apollo,
        // reCAPTCHA) before a non-breaking policy can be written. Tracked as
        // the deferred half of F-14 in docs/seo-audit/fix-backlog.md.
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Long-lived immutable caching for static assets in /public.
        // Next.js auto-caches /_next/static/* immutably, but /public/*
        // files default to max-age=0 — so OG images, logos and favicons
        // get re-validated by the browser on every visit. These assets
        // are content-addressed by filename and effectively never change.
        source: "/:all*(svg|jpg|jpeg|png|webp|gif|ico|woff|woff2|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // F-48: Edge cache for /blog index. The page accesses searchParams
      // (for ?page= pagination), which forces Next.js into Dynamic Rendering
      // and silently ignores its `export const revalidate = 60`. This header
      // restores edge caching at the Vercel CDN: 60s fresh, then up to a
      // day of stale-while-revalidate so cold-cache-miss requests don't
      // block on a fresh Sanity fetch. /blog/search is intentionally NOT
      // matched here — its query is user-input-driven and shouldn't be
      // shared between users.
      {
        source: "/blog",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=86400",
          },
        ],
      },
      // F-48: Same edge-cache strategy for blog category + tag pages.
      // Both routes also access searchParams (for ?page= pagination) and
      // share the same data-shape concerns as /blog itself.
      {
        source: "/blog/category/:category",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/blog/tag/:tag",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
