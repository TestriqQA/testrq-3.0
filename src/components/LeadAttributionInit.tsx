"use client";

/**
 * DEV-02 — records the session's first touch (landing page + external
 * referrer) on the first page load, so lead form submissions can report where
 * the visitor actually came from.
 *
 * Why this has to run here rather than at submit time: `document.referrer` is
 * only the external source while the visitor is still on their landing page.
 * After one internal navigation it becomes our own previous page, so a form
 * that reads it on submit reports "testriq.com sent me to testriq.com" and the
 * SEO attribution is lost. Mounting in the root layout means this runs on the
 * first page of every session, whichever page that is.
 *
 * `initLeadAttribution()` is a no-op once the session already has a value, so
 * a remount (or React 18 StrictMode's double effect in dev) cannot overwrite
 * the real first touch with a later page.
 *
 * Renders null and is mounted as a sibling leaf of the page tree, like
 * ContactLinkTracking and ConsentBanner — no markup, no CLS, and it cannot
 * disturb hydration of the tree beside it.
 */

import { useEffect } from "react";
import { initLeadAttribution } from "@/lib/lead-attribution";

export default function LeadAttributionInit() {
    useEffect(() => {
        initLeadAttribution();
    }, []);

    return null;
}
