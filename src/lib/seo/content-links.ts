// DEV-04 and internal linking — normalising link hrefs that come from CMS
// body content.
//
// Two defects, both found by auditing all 4,388 link marks in live Sanity
// content (Oct 2026). Neither is visible in the repo, because the links live
// in Portable Text `markDefs`, not in any file here.
//
//  1. Seven links across five posts carry a malformed scheme with a single
//     slash: `https:/www.testriq.com/...`. Browsers repair that silently per
//     the URL spec, so it looks harmless — but the renderer decides internal
//     vs external with a string prefix compare, which those seven fail. They
//     were therefore rendered `target="_blank" rel="noopener noreferrer"`:
//     four links to our own service pages and /contact-us, treated as
//     somebody else's site.
//
//  2. 4,273 of the 4,388 links (97%) are self-links written as absolute URLs,
//     and not one is root-relative. `next/link` treats an absolute
//     same-origin URL as an external destination, so every internal link in
//     the blog did a full document load with no prefetch. Rewriting them to
//     root-relative restores client-side navigation.
//
// Fixed at render time rather than by editing documents in Sanity, which is
// the pattern this renderer already set for its empty-anchor guard: "Guarding
// here instead of patching 10 documents also covers the next one an editor
// creates." It also means no write to the production dataset.
//
// No `@/` imports: this repo ships no vitest config, so there is no path-alias
// resolution for runtime imports in tests.

/**
 * Our own origin, in either the correct or the single-slash form.
 *
 * The lookahead matters: without it, `https://www.testriq.com.evil.test/x`
 * matches the prefix and would be rewritten to `/x`, turning somebody else's
 * domain into an apparently internal link.
 */
const SELF_ORIGIN = /^https?:\/{1,2}(?:www\.)?testriq\.com(?=[/?#]|$)/i;

/** `https:/host` — a scheme followed by exactly one slash. */
const MALFORMED_SCHEME = /^(https?):\/(?!\/)/i;

/** Schemes that are actionable but should not open a browser tab. */
const NON_BROWSER_SCHEME = /^(mailto|tel|sms):/i;

/** The renderer's existing fallback for a link mark with no href. */
export const EMPTY_HREF = "#";

/**
 * Repair a malformed href without changing where it points. Safe anywhere,
 * including the RSS feed, which needs to keep absolute URLs.
 */
export function repairHref(raw: unknown): string {
    if (typeof raw !== "string") return EMPTY_HREF;
    const trimmed = raw.trim();
    if (!trimmed) return EMPTY_HREF;
    return trimmed.replace(MALFORMED_SCHEME, "$1://");
}

/**
 * Repair, then rewrite a link to our own site as root-relative so `next/link`
 * can treat it as an internal navigation. Anything pointing elsewhere is
 * returned repaired but otherwise untouched.
 */
export function toInternalHref(raw: unknown): string {
    const href = repairHref(raw);
    if (!SELF_ORIGIN.test(href)) return href;

    const rest = href.replace(SELF_ORIGIN, "");
    // A bare origin (`https://www.testriq.com`) becomes the homepage, and a
    // remainder that starts with `?` or `#` has to keep a path in front of it.
    if (!rest) return "/";
    return rest.startsWith("/") ? rest : `/${rest}`;
}

/**
 * Whether a link should be opened in a new tab and carry `rel="noopener
 * noreferrer"`. Expects an href that has already been through
 * {@link toInternalHref}.
 *
 * `mailto:` and `tel:` are deliberately not external: handing them
 * `target="_blank"` leaves the reader on a blank tab once their mail client
 * takes over.
 */
export function isExternalHref(href: string): boolean {
    if (!href || href === EMPTY_HREF) return false;
    if (href.startsWith("/") || href.startsWith("#")) return false;
    if (NON_BROWSER_SCHEME.test(href)) return false;
    return true;
}
