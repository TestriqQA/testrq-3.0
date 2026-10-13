// F-21.1 — Converted to Server Component. Audited for zero interactive APIs.
import type { Metadata } from 'next'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// This route had no metadata export at all, so it inherited the root layout's
// — meaning the Sanity Studio served the homepage's title ("Pure-Play Software
// Testing Company & QA Outsourcing | Testriq", confirmed live 13 Oct 2026)
// and carried no robots directive, leaving the CMS admin UI indexable. A
// studio login screen ranking for brand terms is worth nothing and competes
// with the real homepage for the same title text.
//
// noindex/nofollow matches the directive already used on /verify-certificate.
// This governs crawlers only; it is not an access control, and the Studio's
// own authentication remains what actually protects the content.
export const metadata: Metadata = {
    title: { absolute: 'Content Studio | Testriq' },
    description: 'Sanity Studio for Testriq content editors.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false, noimageindex: true },
    },
}

export default function StudioPage() {
    return <NextStudio config={config} />
}
