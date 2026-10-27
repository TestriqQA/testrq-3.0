// DEV-12 follow-up — `POST /api/revalidate` is the Sanity publish webhook.
// It closes the gap left by pinning `dynamicParams = false` on /[slug]:
// before this route existed, a Sanity edit took up to the full `revalidate`
// window to appear (1 hour for case studies) and a newly published case study
// 404ed until somebody triggered a deploy by hand.
//
// What it does, in order:
//   1. Verifies Sanity's HMAC signature over the RAW request body. The body
//      must be read with `.text()` before any JSON parsing — re-serialising
//      parsed JSON changes the bytes and invalidates the signature.
//   2. Revalidates every path the changed document feeds, including the
//      aggregate pages (blog index, /case-studies, sitemap, llms.txt …).
//   3. For a case-study create or delete only, additionally pings a Vercel
//      deploy hook, because /[slug]'s valid params are fixed at build time.
//      See `requiresDeploy` in src/lib/sanity-webhook.ts for why revalidation
//      alone cannot add a param to that route.
//
// Required env vars:
//   - SANITY_REVALIDATE_SECRET  — the secret pasted into the Sanity webhook's
//                                 "Secret" field. Without it this route is a
//                                 public revalidation (and deploy) trigger,
//                                 so a missing value answers 503 and does
//                                 nothing, matching how
//                                 /api/draft-mode/enable handles its secret.
//   - VERCEL_DEPLOY_HOOK_URL    — optional. A Vercel Deploy Hook URL. When it
//                                 is absent the route still revalidates and
//                                 reports `deploy.triggered: false` with a
//                                 reason, so setup problems are visible in
//                                 the webhook's delivery log instead of
//                                 silently degrading to the old behaviour.
//
// Setup runbook (Studio webhook config, projection, env vars, how to test):
//   src/app/api/revalidate/README.md

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import {
    OPERATION_HEADER_NAME,
    SIGNATURE_HEADER_NAME,
    derivePathsToRevalidate,
    parseOperation,
    requiresDeploy,
    verifySanityWebhookSignature,
    type SanityWebhookPayload,
} from "@/lib/sanity-webhook";

export const dynamic = "force-dynamic";

interface DeployResult {
    triggered: boolean;
    reason?: string;
}

/**
 * Ping the Vercel deploy hook. Never throws: a failed deploy trigger is
 * reported in the response body so it shows up in Sanity's delivery log,
 * while the revalidation that already succeeded still counts.
 */
async function triggerDeploy(): Promise<DeployResult> {
    const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
    if (!hookUrl) {
        return { triggered: false, reason: "VERCEL_DEPLOY_HOOK_URL is not set." };
    }

    let parsed: URL;
    try {
        parsed = new URL(hookUrl);
    } catch {
        return { triggered: false, reason: "VERCEL_DEPLOY_HOOK_URL is not a valid URL." };
    }
    // Refuse anything but https so a mangled env var cannot turn this route
    // into an SSRF primitive against an internal address.
    if (parsed.protocol !== "https:") {
        return { triggered: false, reason: "VERCEL_DEPLOY_HOOK_URL must be an https URL." };
    }

    try {
        const response = await fetch(hookUrl, { method: "POST", cache: "no-store" });
        if (!response.ok) {
            return {
                triggered: false,
                reason: `Deploy hook responded ${response.status}.`,
            };
        }
        return { triggered: true };
    } catch (err) {
        console.error("[revalidate] Deploy hook request failed:", err);
        return { triggered: false, reason: "Deploy hook request failed." };
    }
}

export async function POST(request: Request) {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
        // Env var missing → webhook infra not provisioned in this environment.
        // Do nothing rather than offer an unauthenticated deploy trigger.
        return NextResponse.json(
            { ok: false, error: "Revalidation not configured: SANITY_REVALIDATE_SECRET env var missing." },
            { status: 503 },
        );
    }

    // Raw bytes, before any parsing — see the note at the top of this file.
    const rawBody = await request.text();

    const verification = verifySanityWebhookSignature({
        rawBody,
        signatureHeader: request.headers.get(SIGNATURE_HEADER_NAME),
        secret,
    });
    if (!verification.ok) {
        console.warn(`[revalidate] Rejected webhook: ${verification.reason}`);
        return NextResponse.json({ ok: false, error: verification.reason }, { status: verification.status });
    }

    let payload: SanityWebhookPayload;
    try {
        payload = JSON.parse(rawBody) as SanityWebhookPayload;
    } catch {
        return NextResponse.json({ ok: false, error: "Body is not valid JSON." }, { status: 400 });
    }
    if (typeof payload !== "object" || payload === null) {
        return NextResponse.json({ ok: false, error: "Body is not a JSON object." }, { status: 400 });
    }

    const operation = parseOperation(request.headers.get(OPERATION_HEADER_NAME));
    const paths = derivePathsToRevalidate(payload);

    // An authentic request for a document type no route renders is a
    // misconfigured webhook filter, not an error. Answer 200 so Sanity does
    // not retry it forever, and say plainly that nothing was revalidated.
    if (paths.length === 0) {
        console.log(
            `[revalidate] No paths for _type="${payload._type ?? "(missing)"}" (_id=${payload._id ?? "?"}); nothing to do.`,
        );
        return NextResponse.json({
            ok: true,
            type: payload._type ?? null,
            operation,
            revalidated: [],
            deploy: { triggered: false, reason: "No paths matched this document type." },
            note: "Authenticated, but no route renders this document type.",
        });
    }

    for (const path of paths) {
        revalidatePath(path);
    }

    const deploy: DeployResult = requiresDeploy(payload, operation)
        ? await triggerDeploy()
        : { triggered: false, reason: "Not needed: revalidation covers this change." };

    console.log(
        `[revalidate] _type="${payload._type}" operation="${operation ?? "unknown"}" ` +
            `revalidated ${paths.length} path(s): ${paths.join(", ")} | deploy=${deploy.triggered}` +
            `${deploy.reason ? ` (${deploy.reason})` : ""}`,
    );

    return NextResponse.json({
        ok: true,
        type: payload._type ?? null,
        operation,
        revalidated: paths,
        deploy,
    });
}
