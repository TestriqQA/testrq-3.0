// Renders visitor-supplied form text into notification emails so that no link
// in it is clickable, and so that typed markup cannot become live HTML.
//
// There are two separate ways a URL in a form field ends up clickable in an
// inbox, and only doing one of them leaves the other wide open:
//
//   1. We render it as markup. The route templates interpolate form fields
//      straight into an HTML string, so a visitor who types
//      `<a href="https://evil.test">Invoice</a>` gets a real anchor in the
//      team's inbox. escapeHtml() closes this.
//
//   2. The mail client links it for us. Gmail, Outlook and Apple Mail scan the
//      rendered text and turn anything URL-shaped into a link on their own,
//      even when the HTML we send contains nothing but plain text. Escaping
//      does not touch this at all — the only defence is to make the text stop
//      looking like a URL. defangLinks() does that.
//
// Why defanging rather than sending the URL verbatim: a byte-exact URL that is
// also guaranteed unclickable is not achievable, because (2) happens inside the
// recipient's mail client, which we do not control. So URL-shaped text is
// rewritten into the convention security teams already use for exactly this
// purpose — `hxxps://evil[.]com/path` — which stays fully readable and
// copy-pasteable, is obviously deliberate to whoever reads it, and is not
// recognised as a link by any client.
//
// Kept free of `@/` imports so the Vitest suite can load it directly (this repo
// has no vitest config, so there is no `@/` alias for runtime imports).

/**
 * Last labels we treat as real TLDs when neutralising a bare host like
 * `evil.com/login` that carries no scheme and no `www.`.
 *
 * A list rather than "any dotted token" on purpose: the naive version mangles
 * ordinary prose. `Node.js`, `index.html`, `v1.2.3` and `e.g.` all contain a
 * dot followed by letters, and none of them is a link. Anything whose last
 * label is not in this list is left exactly as the visitor typed it.
 */
const BARE_HOST_TLDS = [
    // generic
    "com", "net", "org", "io", "co", "dev", "app", "ai", "me", "info", "biz",
    "xyz", "online", "site", "store", "shop", "tech", "cloud", "link", "click",
    "top", "live", "life", "world", "space", "website", "digital", "agency",
    "solutions", "services", "systems", "email", "page", "pro", "edu", "gov",
    // country
    "in", "uk", "us", "de", "fr", "es", "it", "nl", "ru", "cn", "jp", "au",
    "ca", "br", "mx", "sg", "ae", "sa", "za", "ch", "se", "no", "dk", "fi",
    "pl", "pt", "gr", "tr", "id", "my", "ph", "th", "vn", "kr", "hk", "tw",
    "nz", "ie", "be", "at", "cz", "ro", "hu", "bg", "ua", "il", "ng", "ke",
    "eg", "pk", "bd", "lk", "np",
];

// Schemes that carry no "//" but still produce a clickable or active target.
// `data` is deliberately absent: it would mangle prose like "data:500" for no
// gain, since a data: URI in a text node is inert.
const BARE_SCHEMES = "mailto|tel|sms|callto|skype|whatsapp|facetime|javascript|vbscript|file";

// One combined pattern, so each run of characters is consumed and neutralised
// exactly once. Sequential passes would re-process their own output and
// double-mangle it.
const LINK_PATTERN = new RegExp(
    [
        // scheme://rest — http, https, ftp, and anything else shaped like a scheme
        String.raw`[a-z][a-z0-9+.\-]{1,31}:\/\/[^\s<>"']+`,
        // mailto:, tel:, …
        String.raw`(?:${BARE_SCHEMES}):[^\s<>"']+`,
        // www.host/...
        String.raw`www\.[^\s<>"']+`,
        // bare email address
        String.raw`[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}`,
        // bare host with a recognised TLD, optional port and path
        String.raw`(?:[A-Za-z0-9](?:[A-Za-z0-9\-]*[A-Za-z0-9])?\.)+(?:${BARE_HOST_TLDS.join(
            "|",
        )})(?![A-Za-z0-9])(?::\d{2,5})?(?:\/[^\s<>"']*)?`,
    ].join("|"),
    "gi",
);

const SCHEME_PREFIX = /^([a-z][a-z0-9+.\-]*)(:\/\/|:)/i;

const matchCase = (sample: string, replacement: string) =>
    sample === sample.toUpperCase() ? replacement.toUpperCase() : replacement;

/**
 * Rewrite one URL-shaped token so no mail client recognises it, while keeping
 * every character a human needs in order to read it.
 */
function neutralise(token: string): string {
    let out = token;

    const scheme = out.match(SCHEME_PREFIX);
    if (scheme) {
        const [whole, name, separator] = scheme;
        const lower = name.toLowerCase();
        const rest = out.slice(whole.length);

        if (lower === "http" || lower === "https") {
            // The well-known defang: hxxp / hxxps. Keeps the URL's shape
            // obvious to a reader while being a scheme nothing will follow.
            out = matchCase(name, lower === "https" ? "hxxps" : "hxxp") + separator + rest;
        } else if (lower === "hxxp" || lower === "hxxps") {
            // Already neutralised — leave it exactly as it is so running this
            // twice cannot produce `hxxps[://]evil[[.]]com`.
        } else {
            // Any other scheme keeps its name but loses the separator that
            // makes it actionable.
            out = `${name}${separator === "://" ? "[://]" : "[:]"}${rest}`;
        }
    }

    // Dots are what every linkifier keys on, including for bare hosts and
    // email addresses that never had a scheme.
    //
    // The lookaround skips a dot that is ALREADY bracketed, which makes this
    // idempotent. Detecting "looks defanged already" at the token level would
    // have been the obvious alternative and is a bypass: a visitor submitting
    // `https://evil.com/[.]` would match that check and be passed through
    // untouched. Per-dot handling still neutralises every bare dot.
    return out.replace(/(?<!\[)\.(?!\])/g, "[.]");
}

/** Neutralise every URL, bare host and email address in a string. */
export function defangLinks(value: string): string {
    return value.replace(LINK_PATTERN, (token) => neutralise(token));
}

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * For visitor text rendered as an HTML **text node** — the message body, names,
 * free-text answers. Defangs first so the pattern matcher sees real characters,
 * then escapes, which leaves the `[.]` markers intact.
 *
 * Newlines are preserved: the templates that show the message wrap it in
 * `white-space: pre-wrap`, so the visitor's line breaks still render.
 */
export function toEmailSafeText(value: unknown): string {
    if (value === null || value === undefined) return "";
    const text = typeof value === "string" ? value : String(value);
    return escapeHtml(defangLinks(text));
}

/**
 * For visitor text rendered inside an HTML **attribute** that is meant to stay
 * a working link — the `mailto:`/`tel:` reply links the team uses to answer an
 * enquiry. Escaped but NOT defanged, since defanging would break the very link
 * it is there to provide.
 *
 * Escaping the quotes is what stops a crafted value from closing the attribute
 * and injecting its own, which the raw interpolation allowed.
 */
/**
 * For visitor text used as the visible LABEL of one of those deliberate links
 * — the address shown inside the `mailto:` anchor.
 *
 * Escaped but not defanged, which looks inconsistent until you notice that a
 * mail client does not re-linkify text already inside an `<a>`. There is
 * therefore no second link to prevent here, and defanging the label would only
 * show `john@company[.]com` on top of an anchor that opens the real address.
 * The one clickable target stays the intended one.
 */
export function toEmailSafeLinkLabel(value: unknown): string {
    if (value === null || value === undefined) return "";
    return escapeHtml(typeof value === "string" ? value : String(value));
}

export function toEmailSafeAttribute(value: unknown): string {
    if (value === null || value === undefined) return "";
    const text = typeof value === "string" ? value : String(value);
    // Strip CR/LF and angle brackets outright: neither belongs in an href and
    // both are what attribute/header-splitting payloads rely on.
    return escapeHtml(text.replace(/[\r\n<>]/g, "").trim());
}
