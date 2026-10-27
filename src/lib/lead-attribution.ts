// DEV-02 — lead form source attribution.
//
// Every lead form sends three extra fields so an enquiry can be traced back to
// what produced it. Without them "this lead came from SEO" is unprovable:
// the forms post only what the visitor typed.
//
//   landingPage      the first page of the visitor's session
//   landingReferrer  document.referrer as it was ON THAT FIRST PAGE
//   submittedFrom    the page the form was actually submitted from
//
// The subtle one is landingReferrer. Reading `document.referrer` at submit
// time looks equivalent and is almost always wrong: by then the visitor has
// usually navigated internally, so the referrer is our own previous page and
// the external source — the thing worth knowing — is gone. So first touch is
// recorded once per session on the first page load (see
// src/components/LeadAttributionInit.tsx) and read back at submit time.
//
// Kept free of `@/` imports, `next/*` imports and module-level `window` access
// so that:
//   - the Vitest suite can load it directly (this repo has no vitest config,
//     so there is no `@/` alias resolution for runtime imports), and
//   - the same module is safe to import from both the client hook and the
//     server-side API routes.

export interface LeadAttribution {
    landingPage: string;
    landingReferrer: string;
    submittedFrom: string;
}

export const LEAD_ATTRIBUTION_STORAGE_KEY = "testriq:lead-attribution:v1";

/** The part of the attribution that is fixed for the whole session. */
type FirstTouch = Pick<LeadAttribution, "landingPage" | "landingReferrer">;

// Long enough for any real URL, short enough that a hostile client cannot
// bloat a notification email or a spreadsheet cell. Google Sheets truncates a
// cell at 50k characters; an unbounded field would also be echoed into HTML.
const MAX_VALUE_LENGTH = 500;

const EMPTY: LeadAttribution = { landingPage: "", landingReferrer: "", submittedFrom: "" };

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

function currentPath(): string {
    if (typeof window === "undefined") return "";
    return `${window.location.pathname}${window.location.search}`;
}

/**
 * sessionStorage throws rather than returning null in a few real cases —
 * Safari private browsing, blocked site data, embedded webviews — so every
 * access is guarded. A visitor whose storage is unavailable still gets a
 * submission, just with less accurate first-touch values.
 */
function readFirstTouch(): FirstTouch | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = window.sessionStorage.getItem(LEAD_ATTRIBUTION_STORAGE_KEY);
        if (!raw) return null;
        const parsed: unknown = JSON.parse(raw);
        if (typeof parsed !== "object" || parsed === null) return null;
        const candidate = parsed as Partial<FirstTouch>;
        if (typeof candidate.landingPage !== "string") return null;
        return {
            landingPage: candidate.landingPage,
            landingReferrer:
                typeof candidate.landingReferrer === "string" ? candidate.landingReferrer : "",
        };
    } catch {
        return null;
    }
}

/**
 * Record the session's first touch, once. Safe to call repeatedly: the second
 * and later calls are no-ops, which is what makes it correct to run from a
 * component that may remount.
 */
export function initLeadAttribution(): void {
    if (typeof window === "undefined") return;
    if (readFirstTouch()) return;

    const firstTouch: FirstTouch = {
        landingPage: currentPath(),
        landingReferrer: typeof document === "undefined" ? "" : document.referrer || "",
    };

    try {
        window.sessionStorage.setItem(LEAD_ATTRIBUTION_STORAGE_KEY, JSON.stringify(firstTouch));
    } catch {
        // Storage unavailable. captureLeadAttribution() falls back to live values.
    }
}

/**
 * The fields to attach to a form submission. Called from
 * `useRecaptchaForm`, so every form using that hook is covered without a
 * per-form change.
 */
export function captureLeadAttribution(): LeadAttribution {
    if (typeof window === "undefined") return EMPTY;

    // Falling back to live values when first touch was never recorded (storage
    // blocked, or the init component did not mount). Less accurate after
    // internal navigation, but better than sending nothing.
    const firstTouch: FirstTouch =
        readFirstTouch() ?? {
            landingPage: currentPath(),
            landingReferrer: typeof document === "undefined" ? "" : document.referrer || "",
        };

    return { ...firstTouch, submittedFrom: currentPath() };
}

// ---------------------------------------------------------------------------
// Server
// ---------------------------------------------------------------------------

function sanitiseValue(value: unknown): string {
    if (typeof value !== "string") return "";
    const trimmed = value.trim();
    if (!trimmed) return "";
    return trimmed.length > MAX_VALUE_LENGTH
        ? `${trimmed.slice(0, MAX_VALUE_LENGTH)}… [truncated]`
        : trimmed;
}

/**
 * Pull the three fields off an incoming request body. Everything here is
 * client-supplied and therefore untrusted — `document.referrer` in particular
 * is set from a page an attacker can host — so values are type-checked,
 * trimmed and length-capped before they reach an email or a spreadsheet.
 */
export function readLeadAttribution(body: unknown): LeadAttribution {
    if (typeof body !== "object" || body === null) return EMPTY;
    const fields = body as Record<string, unknown>;
    return {
        landingPage: sanitiseValue(fields.landingPage),
        landingReferrer: sanitiseValue(fields.landingReferrer),
        submittedFrom: sanitiseValue(fields.submittedFrom),
    };
}

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/** Column labels for the Google Sheets lead log, in row order. */
export const LEAD_ATTRIBUTION_SHEET_HEADERS = [
    "Landing Page",
    "Referrer",
    "Submitted From",
] as const;

/** The same three values as sheet cells, in the same order as the headers. */
export function leadAttributionSheetCells(attribution: LeadAttribution): string[] {
    return [
        attribution.landingPage || "(unknown)",
        attribution.landingReferrer || "(none - direct or referrer stripped)",
        attribution.submittedFrom || "(unknown)",
    ];
}

/**
 * The attribution block for the internal notification email. Deliberately not
 * added to the client confirmation: the visitor has no use for their own
 * referrer, and echoing it back to them would be odd.
 *
 * Values are HTML-escaped here. Note that the surrounding templates in the
 * route files interpolate the visitor's own fields (name, message) unescaped —
 * a pre-existing issue in those files that this block does not add to.
 */
export function leadAttributionEmailHtml(attribution: LeadAttribution): string {
    return `
          <div style="background-color: #eef2ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3730a3; margin-top: 0;">Lead Source:</h3>
            ${leadAttributionEmailRows(attribution, '<p style="margin: 0 0 6px 0;">', "\n            ")}
          </div>`;
}

/**
 * Just the three labelled rows, for the two notification templates that do not
 * share the common card markup: /api/iotContact sends plain `<p>` HTML, and
 * /api/pricingContact uses its own card style.
 */
export function leadAttributionEmailRows(
    attribution: LeadAttribution,
    openTag = "<p>",
    separator = "\n",
): string {
    const rows: [string, string][] = [
        ["Landing Page", attribution.landingPage || "(unknown)"],
        ["Referrer", attribution.landingReferrer || "(none - direct, bookmark, or referrer stripped)"],
        ["Submitted From", attribution.submittedFrom || "(unknown)"],
    ];

    return rows
        .map(([label, value]) => `${openTag}<strong>${label}:</strong> ${escapeHtml(value)}</p>`)
        .join(separator);
}
