/**
 * Vitest tests for src/lib/email-safe-text.ts — making links in visitor-supplied
 * form text non-clickable in notification emails.
 *
 * Imports are relative on purpose: this repo has no vitest config, so there is
 * no `@/` path-alias resolution for runtime imports.
 *
 * Run via `npm run test` (single pass) or `npm run test:watch`.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
    defangLinks,
    escapeHtml,
    toEmailSafeAttribute,
    toEmailSafeLinkLabel,
    toEmailSafeText,
} from "../email-safe-text";

/**
 * Approximates what Gmail/Outlook look for when they linkify plain text. Used
 * to assert the *absence* of anything link-shaped, rather than only asserting
 * the presence of our markers — a rewrite that produced different-but-still
 * clickable output would pass the second kind of check and fail this one.
 */
const LOOKS_CLICKABLE =
    /(https?:\/\/)|(\bwww\.[a-z])|(\b[a-z0-9-]+\.(?:com|net|org|io|co|dev|in|test)\b)|(\b[\w.+-]+@[a-z0-9-]+\.[a-z]{2,})/i;

describe("defangLinks — schemed URLs", () => {
    it("breaks https so no client recognises the scheme", () => {
        expect(defangLinks("https://evil.test/login")).toBe("hxxps://evil[.]test/login");
    });

    it("breaks http", () => {
        expect(defangLinks("http://evil.com")).toBe("hxxp://evil[.]com");
    });

    it("preserves an all-caps scheme's case", () => {
        expect(defangLinks("HTTPS://EVIL.COM")).toBe("HXXPS://EVIL[.]COM");
    });

    it("neutralises a non-http scheme by breaking its separator", () => {
        expect(defangLinks("ftp://files.example.com/x")).toBe("ftp[://]files[.]example[.]com/x");
        expect(defangLinks("javascript:alert(1)")).toBe("javascript[:]alert(1)");
    });

    it("keeps query strings and fragments readable", () => {
        const out = defangLinks("https://evil.test/pay?id=99&ref=abc#top");
        expect(out).toBe("hxxps://evil[.]test/pay?id=99&ref=abc#top");
        expect(out).not.toMatch(LOOKS_CLICKABLE);
    });
});

describe("defangLinks — links with no scheme", () => {
    it("neutralises a www host", () => {
        expect(defangLinks("www.evil.com/path")).toBe("www[.]evil[.]com/path");
    });

    it("neutralises a bare host with a real TLD", () => {
        expect(defangLinks("evil.com/login")).toBe("evil[.]com/login");
        expect(defangLinks("pay.evil.co.in")).toBe("pay[.]evil[.]co[.]in");
    });

    it("neutralises a host with a port", () => {
        expect(defangLinks("evil.com:8443/x")).toBe("evil[.]com[:]8443/x");
    });

    it("neutralises bare email addresses and mailto:", () => {
        expect(defangLinks("reach me at bad@evil.com")).toBe("reach me at bad@evil[.]com");
        expect(defangLinks("mailto:bad@evil.com")).toBe("mailto[:]bad@evil[.]com");
    });
});

describe("defangLinks — leaves ordinary prose alone", () => {
    // The whole reason the TLD list exists. A naive /\w+\.\w+/ mangles all of these.
    it.each([
        "We use Node.js and React.",
        "See index.html for details.",
        "Version v1.2.3 shipped.",
        "e.g. load testing, etc.",
        "The file is report.pdf and the sheet is data.xlsx",
        "Ratio was 3.5 to 1.",
    ])("%s", (prose) => {
        expect(defangLinks(prose)).toBe(prose);
    });

    it("leaves an empty string alone", () => {
        expect(defangLinks("")).toBe("");
    });

    it("never double-mangles its own output", () => {
        const once = defangLinks("https://evil.com");
        expect(defangLinks(once)).toBe(once);
        expect(once).not.toContain("[[");
    });
});

describe("toEmailSafeText", () => {
    it("stops typed markup from becoming a live anchor", () => {
        const out = toEmailSafeText('<a href="https://evil.test">Open your invoice</a>');
        expect(out).not.toContain("<a");
        expect(out).not.toContain("href=\"");
        expect(out).toContain("&lt;a");
        // ...and the URL inside the typed markup is dead too.
        expect(out).not.toMatch(LOOKS_CLICKABLE);
    });

    it("neutralises an image beacon", () => {
        const out = toEmailSafeText('<img src="https://evil.test/track.gif">');
        expect(out).not.toContain("<img");
        expect(out).not.toMatch(LOOKS_CLICKABLE);
    });

    it("handles a realistic hostile message end to end", () => {
        const message = [
            "Hi, please review the invoice at https://evil.test/pay?id=1",
            "or go to www.evil.com, or mail bad@evil.com.",
            '<a href="http://evil.co/x">Click here</a>',
        ].join("\n");

        const out = toEmailSafeText(message);
        expect(out).not.toMatch(LOOKS_CLICKABLE);
        expect(out).not.toContain("<a");
        // Still legible to whoever reads the enquiry.
        expect(out).toContain("hxxps://evil[.]test/pay?id=1");
        expect(out).toContain("www[.]evil[.]com");
        expect(out).toContain("bad@evil[.]com");
    });

    it("preserves the visitor's line breaks, which the template renders", () => {
        expect(toEmailSafeText("line one\nline two")).toBe("line one\nline two");
    });

    it("escapes the characters that would break out of the surrounding HTML", () => {
        expect(toEmailSafeText(`"><script>x</script>`)).toBe(
            "&quot;&gt;&lt;script&gt;x&lt;/script&gt;",
        );
    });

    it("returns an empty string for a missing or non-string value", () => {
        expect(toEmailSafeText(undefined)).toBe("");
        expect(toEmailSafeText(null)).toBe("");
        expect(toEmailSafeText(42)).toBe("42");
    });
});

describe("toEmailSafeAttribute", () => {
    it("keeps a real address usable in a mailto: link", () => {
        expect(toEmailSafeAttribute("lead@company.com")).toBe("lead@company.com");
    });

    it("closes the attribute-injection hole in the raw interpolation", () => {
        const out = toEmailSafeAttribute('x@y.com" onmouseover="steal()');
        expect(out).not.toContain('"');
        expect(out).toContain("&quot;");
    });

    it("strips CR/LF and angle brackets", () => {
        expect(toEmailSafeAttribute("a@b.com\r\nBcc: evil@evil.com")).toBe(
            "a@b.comBcc: evil@evil.com",
        );
        expect(toEmailSafeAttribute("a@b.com<script>")).toBe("a@b.comscript");
    });

    it("does NOT defang — the reply link has to keep working", () => {
        expect(toEmailSafeAttribute("lead@company.com")).not.toContain("[.]");
    });
});

describe("toEmailSafeLinkLabel", () => {
    it("shows the address as typed, since the anchor around it is the one link", () => {
        expect(toEmailSafeLinkLabel("john@company.com")).toBe("john@company.com");
        expect(toEmailSafeLinkLabel("+91 915 2929 343")).toBe("+91 915 2929 343");
    });

    it("still escapes markup", () => {
        expect(toEmailSafeLinkLabel('<b>x</b>"')).toBe("&lt;b&gt;x&lt;/b&gt;&quot;");
    });

    it("returns an empty string for a missing value", () => {
        expect(toEmailSafeLinkLabel(undefined)).toBe("");
        expect(toEmailSafeLinkLabel(null)).toBe("");
    });
});

describe("escapeHtml", () => {
    it("escapes the five characters that matter", () => {
        expect(escapeHtml(`<>&"'`)).toBe("&lt;&gt;&amp;&quot;&#39;");
    });
});

// ---------------------------------------------------------------------------
// Repo-wide guard
// ---------------------------------------------------------------------------

/**
 * Every visitor-supplied value interpolated into an email body must go through
 * one of the helpers. Scanning the route files means a newly added field, or a
 * new route copied from an existing one, fails here rather than quietly
 * shipping a clickable link to the team's inbox.
 *
 * Subject lines are exempt: they are a mail header, not HTML, so escaping them
 * would surface literal `&amp;` in the subject, and no client linkifies a
 * subject line.
 */
/**
 * Collect every `${...}` interpolation, matching braces rather than using a
 * regex so compound expressions come out whole.
 *
 * An expression that is itself a template literal (it contains a backtick) is
 * descended into rather than reported: those produce HTML, so wrapping them
 * would escape their own markup, and their outer form is a condition like
 * `data.companyName ? ... : ''` that is never rendered. Descending is what
 * stops that exemption from becoming a blind spot — a bare field nested inside
 * such a block is still reported.
 */
const collect = (text: string, base: number, found: { expr: string; abs: number }[]) => {
    let i = 0;
    while (i < text.length) {
        const start = text.indexOf("${", i);
        if (start === -1) return;
        let depth = 0;
        let end = -1;
        for (let j = start + 1; j < text.length; j++) {
            if (text[j] === "{") depth++;
            else if (text[j] === "}") {
                depth--;
                if (depth === 0) {
                    end = j;
                    break;
                }
            }
        }
        if (end === -1) return;
        const expr = text.slice(start + 2, end);
        if (expr.includes("`")) collect(expr, base + start + 2, found);
        else found.push({ expr, abs: base + start });
        i = end + 1;
    }
};

/**
 * Body of the template literal assigned to `name`.
 *
 * Only `${` opens a nesting level, so the CSS braces in these templates'
 * <style> blocks are ignored: a bare `{` never increments, and a `}` at depth
 * zero never decrements.
 */
const templateBody = (src: string, name: string): string | null => {
    const decl = src.indexOf(`const ${name} = \``);
    if (decl === -1) return null;
    const open = src.indexOf("`", decl);
    let i = open + 1;
    let depth = 0;
    while (i < src.length) {
        const c = src[i];
        if (c === "\\") {
            i += 2;
            continue;
        }
        if (c === "$" && src[i + 1] === "{") {
            depth++;
            i += 2;
            continue;
        }
        if (c === "}" && depth > 0) {
            depth--;
            i++;
            continue;
        }
        if (c === "`" && depth === 0) return src.slice(open + 1, i);
        i++;
    }
    return null;
};

/**
 * The job-application routes build their email HTML from bare destructured
 * variables rather than a `data` object, so the check above cannot see them.
 *
 * This one is default-deny: EVERY interpolation inside those templates must go
 * through a helper, with the sole exemption of server-generated timestamps. A
 * new form field rendered into one of these emails therefore fails here unless
 * it is neutralised — including a map variable like `domain`, which an
 * allowlist derived from `formData.get(...)` would have missed.
 */
describe("job-application email templates neutralise every interpolation", () => {
    const CASES = [
        { route: "apply-job", templates: ["adminEmailHTML", "userEmailHTML"] },
        { route: "send-application", templates: ["hrEmailContent", "applicantEmailContent"] },
    ];

    const SERVER_GENERATED = /^new Date\(/;

    it.each(CASES.map((c) => [c.route, c] as const))("%s", (_route, testCase) => {
        const file = join(process.cwd(), "src", "app", "api", testCase.route, "route.ts");
        const src = readFileSync(file, "utf8");

        const unwrapped: string[] = [];
        for (const name of testCase.templates) {
            const body = templateBody(src, name);
            expect(body, `template ${name} not found`).not.toBeNull();

            const found: { expr: string; abs: number }[] = [];
            collect(body as string, 0, found);
            expect(found.length).toBeGreaterThan(0);

            for (const { expr } of found) {
                const trimmed = expr.trim();
                if (/toEmailSafe(Text|Attribute|LinkLabel)/.test(trimmed)) continue;
                if (SERVER_GENERATED.test(trimmed)) continue;
                unwrapped.push(`${name}: ${trimmed.replace(/\s+/g, " ").slice(0, 80)}`);
            }
        }

        expect(unwrapped).toEqual([]);
    });
});

describe("no raw visitor interpolation left in email bodies", () => {
    const API_DIR = join(process.cwd(), "src", "app", "api");

    const routeFiles: string[] = [];
    const walk = (dir: string) => {
        for (const entry of readdirSync(dir)) {
            const full = join(dir, entry);
            if (statSync(full).isDirectory()) walk(full);
            else if (entry === "route.ts") routeFiles.push(full);
        }
    };
    walk(API_DIR);

    const emailRoutes = routeFiles.filter((f) => readFileSync(f, "utf8").includes("${data."));

    it("finds the routes that email visitor data", () => {
        expect(emailRoutes.length).toBeGreaterThanOrEqual(9);
    });

    it.each(emailRoutes.map((f) => [f.split(/[\\/]/).slice(-2)[0], f] as const))(
        "%s wraps every interpolated field",
        (_name, file) => {
            const src = readFileSync(file, "utf8");
            const lines = src.split("\n");

            const found: { expr: string; abs: number }[] = [];
            collect(src, 0, found);

            const offenders = found
                .map(({ expr, abs }) => ({ expr, line: src.slice(0, abs).split("\n").length }))
                .filter(({ expr }) => expr.includes("data."))
                .filter(({ expr }) => !/toEmailSafe(Text|Attribute|LinkLabel)/.test(expr))
                // Subject lines are a mail header, not HTML.
                .filter(({ line }) => !lines[line - 1].includes("subject:"));

            expect(offenders.map((o) => `${o.line}: ${o.expr.trim()}`)).toEqual([]);
        },
    );
});
