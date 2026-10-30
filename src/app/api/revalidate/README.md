# Sanity publish webhook → `POST /api/revalidate`

Setup runbook for the route added as the DEV-12 follow-up.

- Route: [`src/app/api/revalidate/route.ts`](./route.ts)
- Verification + path derivation: [`src/lib/sanity-webhook.ts`](../../../lib/sanity-webhook.ts)
- Tests: [`src/lib/__tests__/sanity-webhook.test.ts`](../../../lib/__tests__/sanity-webhook.test.ts)

## Why it exists

Two separate problems, one webhook.

**Staleness.** Every Sanity-backed route runs on a timer: case studies and the
sitemap on `revalidate = 3600`, blog routes on `revalidate = 60`. A case-study
edit was therefore invisible for up to an hour. The old comment in
`src/app/[slug]/page.tsx` claimed edits refreshed "instantly via Sanity
webhooks", but no such route existed in this repo.

**New case studies 404ing.** DEV-12 pinned `export const dynamicParams = false`
on `src/app/[slug]/page.tsx` so that unknown URLs return a real 404 instead of
answering 200 with the not-found body. That route's valid params are now a
build artifact, which means a case study published between deploys 404s until
the next build. `revalidatePath` cannot fix this on its own — it refreshes a
path the build already knew about, it does not add one — so a case-study
**create or delete** also pings a Vercel deploy hook.

`/[slug]` is the only route in the app with `dynamicParams = false`;
everything else renders new slugs on demand, so no other document type
triggers a deploy.

## 1. Environment variables

Set both in Vercel (Production + Preview) and, for local testing, in
`.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `SANITY_REVALIDATE_SECRET` | yes | Shared secret for the HMAC signature. Must match the Studio webhook's **Secret** field exactly. While unset, the route answers `503` and does nothing — it never falls back to accepting unsigned requests. |
| `VERCEL_DEPLOY_HOOK_URL` | for case studies | A Vercel **Deploy Hook** URL (Project → Settings → Git → Deploy Hooks). Must be `https`. While unset, revalidation still happens and the response reports `deploy.triggered: false` with a reason. |

Generate a secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

## 2. Create the webhook in Sanity

Studio → **API** → **Webhooks** → **Create webhook** (or
manage.sanity.io → project → API → Webhooks).

| Field | Value |
| --- | --- |
| Name | `Next.js revalidate` |
| URL | `https://www.testriq.com/api/revalidate` |
| Dataset | `production` |
| Trigger on | **Create**, **Update**, **Delete** (all three) |
| Filter | see below |
| Projection | see below |
| HTTP method | `POST` |
| HTTP headers | none needed |
| API version | `v2021-03-25` or later |
| Secret | the `SANITY_REVALIDATE_SECRET` value |
| Enable drafts | **off** — draft edits must not revalidate live pages |

### Filter

Restricts deliveries to the types a public route actually renders. Without it
every `subscriber` row written by the newsletter form would wake the route up
for nothing.

```groq
_type in ["post", "caseStudy", "author", "category", "tag", "jobPosting", "page"]
```

### Projection

```groq
{
  "_type": _type,
  "_id": _id,
  "slug": slug.current,
  "authorSlug": author->slug.current,
  "categorySlugs": categories[]->slug.current,
  "tagSlugs": tags[]->slug.current
}
```

Only `_type` is strictly required; the route degrades gracefully without the
rest. The last three resolve only on `post` documents (`author` is a reference,
`categories` and `tags` are arrays of references — see
`src/sanity/schemaTypes/post.ts`) and come back `null` for every other type,
which is handled.

Dropping them costs little: `/blog/category/[category]` and `/blog/tag/[tag]`
both run on `revalidate = 60`, so they self-heal within a minute. Keeping them
makes those pages update immediately.

## 3. What gets revalidated

| `_type` | Paths |
| --- | --- |
| `post` | `/blog/post/{slug}`, `/blog`, `/blog/search`, `/blog/feed.xml`, `/website-map`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, plus `/author/{authorSlug}`, `/blog/category/{…}`, `/blog/tag/{…}` when projected |
| `caseStudy` | `/{slug}`, `/case-studies`, `/website-map`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` |
| `author` | `/author/{slug}`, `/sitemap.xml` |
| `category` | `/blog/category/{slug}`, `/blog`, `/sitemap.xml`, `/website-map` |
| `tag` | `/blog/tag/{slug}`, `/blog`, `/sitemap.xml`, `/website-map` |
| `jobPosting` | `/careers`, `/sitemap.xml` |
| `page` | `/sitemap.xml` (no route renders `page` documents; only the sitemap reads them) |

A deploy is additionally triggered **only** for `caseStudy` with operation
`create` or `delete`, or when the `sanity-operation` header is missing (erring
toward a redundant build rather than a case study that 404s).

A test in the suite resolves every one of these paths against the real App
Router tree, so a typo in the list fails CI rather than silently revalidating
nothing forever.

## 4. Verify it works

Sanity's webhook editor has a **Send test** / delivery-log view; a successful
delivery returns `200` with a JSON body listing what was revalidated:

```json
{
  "ok": true,
  "type": "caseStudy",
  "operation": "update",
  "revalidated": ["/acme-qa", "/case-studies", "/website-map", "/sitemap.xml", "/llms.txt", "/llms-full.txt"],
  "deploy": { "triggered": false, "reason": "Not needed: revalidation covers this change." }
}
```

To drive it by hand against a local production build (`npm run build && npm start`),
save this as a script in a scratch directory — not in the repo — and run it with
`SANITY_REVALIDATE_SECRET` set to the same value the server has:

```js
const { createHmac } = require("node:crypto");

const secret = process.env.SANITY_REVALIDATE_SECRET;
const body = JSON.stringify({ _type: "caseStudy", _id: "test", slug: "some-existing-slug" });
const t = Date.now();
const v1 = createHmac("sha256", secret).update(`${t}.${body}`).digest("base64url");

fetch("http://localhost:3000/api/revalidate", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "sanity-webhook-signature": `t=${t},v1=${v1}`,
    "sanity-operation": "update",
  },
  body,
}).then(async (r) => console.log(r.status, await r.text()));
```

## 5. Responses

| Status | Meaning |
| --- | --- |
| `200` | Verified. Body lists the revalidated paths and the deploy outcome. Also returned, with `revalidated: []`, for an authentic delivery whose `_type` no route renders — a 200 stops Sanity retrying a misconfigured filter forever. |
| `400` | Malformed: signature header absent a field, a second-precision timestamp, an empty or non-JSON body. |
| `401` | Well-formed but not authentic: no signature header, wrong secret, tampered body, or a timestamp outside the 5-minute tolerance window. |
| `503` | `SANITY_REVALIDATE_SECRET` is not set in this environment. |
| `405` | Wrong HTTP method — the webhook must be configured as `POST`. |

## 6. Signature details

Implemented in `src/lib/sanity-webhook.ts`, matching
`@sanity/webhook@4.0.4` byte for byte (the test suite asserts this against the
real package):

```
header:  sanity-webhook-signature: t=<unix-ms>,v1=<signature>
signed:  `${timestamp}.${rawRequestBody}`
algo:    HMAC-SHA256, secret as raw UTF-8 key bytes
encode:  base64url, padding stripped
```

Two deliberate differences from the official package, which is **not** a
declared dependency here (it is only present transitively via `sanity`, so
application code must not import it):

1. Signatures are compared with `timingSafeEqual` rather than `!==`.
2. A 5-minute freshness window is enforced. The official package checks only
   that the timestamp is after 2021-01-01, which leaves a captured request
   replayable forever — and replaying one of these can trigger a production
   deploy.

The raw request body is read with `.text()` before any JSON parsing. Parsing
and re-serialising changes the bytes and invalidates the signature.

## 7. Known residual gaps

- **Renaming a published case study's slug** changes `/[slug]`'s valid param
  set, but arrives as an ordinary `update` and is indistinguishable from a
  content edit without a before/after projection. The new URL 404s until the
  next deploy. Trigger a redeploy by hand after renaming a live case study —
  which is also the SEO-correct moment to add a redirect from the old slug in
  `src/lib/seo/redirect-map.ts`.
- **Draft edits** are intentionally not delivered. Use
  `/api/draft-mode/enable` to preview unpublished changes.
- **Deploy-hook failures** are reported in the response body, not retried.
  They appear in Sanity's delivery log and in the Vercel function logs under
  `[revalidate]`.
