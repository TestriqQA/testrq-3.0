"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const APOLLO_APP_ID = "696f2f6d07a88a0011e0ddfc";

/**
 * Routes where Apollo visitor tracking runs.
 *
 * Apollo is a lead-intelligence pixel, so it is scoped to high-intent pages: the
 * lead-capture routes plus the commercial pages a buyer reaches on the way to them.
 * It is deliberately absent from the homepage, the blog and informational/tool pages.
 *
 * Why scope it at all: the tracker sets a Cloudflare __cf_bm third-party cookie, and
 * its companion endpoint aplo-evnt.com/api/v1/intent_pixel/track_request returns
 * HTTP 400 on every page load. Those were the only remaining Best Practices failures
 * in PageSpeed Insights. Scoping keeps tracking where a lead actually converts while
 * clearing the audit on the pages being graded.
 *
 * TRADE-OFF, stated plainly: this reduces Apollo's visitor coverage. Companies that
 * browse only the homepage or blog and never reach a commercial page will no longer
 * be identified. Widen this list if that visibility matters more than the audit.
 */
const APOLLO_ROUTES = [
    "/contact-us",
    "/pricing",
    "/careers",
    "/banking-finance-industry-testing-services",
    "/e-commerce-testing-services",
    "/e-learning-testing-services",
    "/gaming-app-testing-services",
    "/healthcare-testing-services",
    "/iot-appliances-and-apps-testing-services",
    "/telecommunications-testing-services",
    "/qa-outsourcing-services",
    "/managed-testing-services",
    "/staff-augmentation",
    "/hire-qa-engineer",
    "/dedicated-qa-team",
    "/qa-engineer-on-demand",
];

export default function ApolloTracking() {
    const pathname = usePathname();
    const [nocache, setNocache] = useState("");

    const isHighIntent =
        !!pathname &&
        APOLLO_ROUTES.some(
            (route) => pathname === route || pathname.startsWith(`${route}/`)
        );

    useEffect(() => {
        if (!isHighIntent) return;
        setNocache(Math.random().toString(36).substring(7));
    }, [isHighIntent]);

    if (!isHighIntent || !nocache) return null;

    return (
        <Script
            src={`https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`}
            strategy="lazyOnload"
            onLoad={() => {
                // @ts-expect-error - trackingFunctions is injected by the Apollo tracker at runtime
                if (window.trackingFunctions && window.trackingFunctions.onLoad) {
                    // @ts-expect-error - same runtime-injected global
                    window.trackingFunctions.onLoad({ appId: APOLLO_APP_ID });
                }
            }}
        />
    );
}
