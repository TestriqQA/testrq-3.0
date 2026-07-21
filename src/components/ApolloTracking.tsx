"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useConsent } from "@/lib/consent/useConsent";

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
 *
 * Apollo also now requires explicit cookie consent (ConsentBanner). Together the two
 * gates mean it loads only when: a high-intent route AND the user has accepted. That
 * clears the Best Practices failures on every page, because the default (pre-consent)
 * state a first-time visitor — and Lighthouse — sees never loads Apollo at all.
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
    const consent = useConsent();

    useEffect(() => {
        if (consent !== "accepted" || !pathname) return;

        const isHighIntent = APOLLO_ROUTES.some(
            (route) => pathname === route || pathname.startsWith(`${route}/`)
        );
        if (!isHighIntent) return;

        // Survives client-side navigation between two high-intent routes.
        if (document.querySelector("script[data-apollo-tracker]")) return;

        // Injected imperatively rather than via next/script. A <Script
        // strategy="lazyOnload"> that only enters the tree AFTER window.load — which is
        // exactly what happens here, since consent flips post-hydration — does not
        // reliably inject. Creating the element directly (the same pattern as
        // RecaptchaLoader) is deterministic. substring(2,10) is always 8 chars, so the
        // cache-buster is never empty.
        const nocache = Math.random().toString(36).substring(2, 10);
        const script = document.createElement("script");
        script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`;
        script.async = true;
        script.defer = true;
        script.setAttribute("data-apollo-tracker", "");
        script.onload = () => {
            const w = window as unknown as {
                trackingFunctions?: { onLoad?: (opts: { appId: string }) => void };
            };
            w.trackingFunctions?.onLoad?.({ appId: APOLLO_APP_ID });
        };
        document.head.appendChild(script);
    }, [consent, pathname]);

    return null;
}
