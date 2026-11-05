"use client";

import Link from "next/link";
import React from "react";

import { trackEvent } from "@/lib/gtag";

/**
 * A Link that reports its click to GA4 and does nothing else.
 *
 * Why this exists rather than an onClick on the section
 * ----------------------------------------------------
 * The sections that hold these CTAs are Server Components, several of them
 * deliberately so — ManualTestingHeroSection and ManualTestingGlobalReach both
 * carry an "F-21.1 — Converted to Server Component. Audited for zero
 * interactive APIs" note. Adding an onClick anywhere inside one would force
 * `"use client"` onto the whole section and ship its entire subtree to the
 * browser, undoing that work to gain one analytics call.
 *
 * Isolating the handler here keeps the client boundary at a single anchor.
 * The section stays server-rendered, so the CTA's text and href are still in
 * the initial HTML for crawlers either way.
 *
 * It extends the existing `trackEvent` helper from src/lib/gtag.tsx — the
 * site's one GA4 implementation — rather than introducing a second. There is
 * no gtag call here, no script tag, and no measurement ID: if GA4 is absent or
 * blocked, `trackEvent` returns early and the link behaves like any other.
 *
 * No PII is sent. The parameters are the event name, a page path and a label
 * naming the CTA's position — never anything a visitor typed.
 */
export interface TrackedCtaLinkProps {
    href: string;
    /** GA4 event name, sent exactly as given — GA4 is case-sensitive. */
    eventName: string;
    /**
     * Where on the page this CTA sits (`hero`, `after_services`, `final`).
     * Lets one event name be reported per placement instead of needing an
     * event per button.
     */
    placement: string;
    /** Page path, so the event is reportable without relying on page_view. */
    pagePath: string;
    className?: string;
    children: React.ReactNode;
}

export default function TrackedCtaLink({
    href,
    eventName,
    placement,
    pagePath,
    className,
    children,
}: TrackedCtaLinkProps) {
    return (
        <Link
            href={href}
            className={className}
            onClick={() =>
                trackEvent(eventName, {
                    cta_placement: placement,
                    page_path: pagePath,
                    link_url: href,
                })
            }
        >
            {children}
        </Link>
    );
}
