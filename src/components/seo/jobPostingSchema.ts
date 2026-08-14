/**
 * Schema.org JobPosting JSON-LD builder for the careers page.
 *
 * F-40: replaces the previously-static `careersPageSchema` (which embedded
 * 21 hardcoded JobPosting entries that were always out of sync with the
 * live Sanity job openings rendered in the UI). This builder accepts the
 * same `SanityJobOpening[]` the careers page already fetches and emits a
 * `@graph` containing the page-level WebPage + BreadcrumbList + one
 * JobPosting per active opening.
 *
 * Per Google's JobPosting docs (https://developers.google.com/search/docs/appearance/structured-data/job-posting):
 *   - REQUIRED: title, description, datePosted, hiringOrganization,
 *     and either jobLocation OR (applicantLocationRequirements + jobLocationType="TELECOMMUTE")
 *   - validThrough is recommended; postings that pass validThrough are
 *     dropped from Google Jobs. We default to 60 days after the most
 *     recent Sanity update, refreshed automatically when an editor saves.
 *   - employmentType uses Schema.org's enum (FULL_TIME / PART_TIME / etc.)
 *   - hiringOrganization is spelled out inline (see HIRING_ORGANIZATION below)
 *     while keeping the canonical `#organization` @id for entity
 *     consolidation (F-58).
 */

import type { SanityJobOpening } from "@/lib/sanity-data-adapter";

type JsonLd = Record<string, unknown>;

// Sanity 'type' field values → Schema.org employmentType enum values.
// https://schema.org/employmentType
const EMPLOYMENT_TYPE_MAP: Record<string, string> = {
    "Full-time": "FULL_TIME",
    "Part-time": "PART_TIME",
    "Internship": "INTERN",
    "Contract": "CONTRACTOR",
    "6 Months": "TEMPORARY",
};

const HQ_ADDRESS = {
    "@type": "PostalAddress",
    streetAddress: "Beverly Park, Mira Road",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "401107",
    addressCountry: "IN",
} as const;

/**
 * hiringOrganization is REQUIRED by Google and must carry a resolvable `name`.
 *
 * This was previously a bare reference — `{ "@id": ".../#organization" }` — on
 * the assumption that the site-wide Organization node is emitted on every page.
 * It is not: the /careers page renders only this @graph (WebPage + one
 * JobPosting per opening) plus a standalone BreadcrumbList, and `organizationSchema`
 * in StructuredData.tsx is imported by 8 other pages, not this one. A JSON-LD
 * `@id` only resolves against nodes present in the SAME page, so the reference
 * dangled and Google's Rich Results Test reported a critical
 * "missing field hiringOrganization" on every posting.
 *
 * Spelled out inline so the posting is self-contained. The `@id` is retained so
 * Google still folds this into the canonical Organization entity (F-58) rather
 * than minting a second one.
 */
const HIRING_ORGANIZATION = {
    "@type": "Organization",
    "@id": "https://www.testriq.com/#organization",
    name: "Testriq QA Lab",
    sameAs: "https://www.testriq.com",
    logo: "https://www.testriq.com/testriq-logo.png",
} as const;

const VALID_THROUGH_WINDOW_MS = 60 * 24 * 60 * 60 * 1000; // 60 days

/**
 * Convert Sanity Portable Text blocks to plain text for the JobPosting
 * `description` field. JobPosting.description accepts HTML or plain text;
 * we use plain text to avoid embedding raw editor markup.
 */
function blocksToPlainText(blocks: unknown): string {
    if (typeof blocks === "string") return blocks;
    if (!Array.isArray(blocks)) return "";
    return blocks
        .filter(
            (b): b is { _type: string; children?: Array<{ text?: string }> } =>
                typeof b === "object" && b !== null && (b as { _type?: string })._type === "block",
        )
        .map((b) =>
            Array.isArray(b.children) ? b.children.map((c) => c?.text ?? "").join("") : "",
        )
        .join("\n\n")
        .trim();
}

/**
 * Best-effort parse of Sanity's freeform `salary` string into a
 * Schema.org MonetaryAmount. Recognises Indian "LPA" / "lakh" patterns
 * (e.g. "8-12 LPA", "5 LPA", "12.5 LPA"). Returns undefined for vague
 * strings like "Competitive" — Google prefers omitted `baseSalary` over
 * unparseable values.
 */
function parseSalary(salary: string | undefined): JsonLd | undefined {
    if (!salary) return undefined;
    const match = salary.match(
        /(\d+(?:\.\d+)?)\s*(?:[-–]\s*(\d+(?:\.\d+)?))?\s*(?:LPA|lakh|Lakh|lac)/,
    );
    if (!match) return undefined;
    const minLakh = parseFloat(match[1]);
    const maxLakh = match[2] ? parseFloat(match[2]) : minLakh;
    return {
        "@type": "MonetaryAmount",
        currency: "INR",
        value: {
            "@type": "QuantitativeValue",
            minValue: minLakh * 100_000,
            maxValue: maxLakh * 100_000,
            unitText: "YEAR",
        },
    };
}

/**
 * Sanity `location` is a freeform string ("Remote", "On-site (Mira Road, Mumbai)",
 * "Hybrid (Mumbai)"). Map to Schema.org's two valid shapes:
 *   - Remote roles → applicantLocationRequirements + jobLocationType="TELECOMMUTE"
 *   - On-site / Hybrid → jobLocation pointing at the Mumbai HQ
 * Hybrid roles get BOTH (a physical jobLocation AND a TELECOMMUTE flag) since
 * Google supports the combination.
 */
function buildJobLocationFields(
    location: string,
): Partial<Pick<JsonLd, "jobLocation" | "applicantLocationRequirements" | "jobLocationType">> {
    const trimmed = location.trim();
    const isRemote = /\bremote\b/i.test(trimmed);
    const isHybrid = /\bhybrid\b/i.test(trimmed);
    const fields: Partial<Pick<JsonLd, "jobLocation" | "applicantLocationRequirements" | "jobLocationType">> = {};

    if (isRemote || isHybrid) {
        fields.jobLocationType = "TELECOMMUTE";
        fields.applicantLocationRequirements = { "@type": "Country", name: "India" };
    }
    if (!isRemote) {
        fields.jobLocation = {
            "@type": "Place",
            address: HQ_ADDRESS,
        };
    }
    return fields;
}

function buildJobPosting(job: SanityJobOpening): JsonLd {
    const datePosted = job.createdAt ?? new Date().toISOString();
    const updatedAt = job.updatedAt ?? datePosted;
    const validThrough = new Date(
        new Date(updatedAt).getTime() + VALID_THROUGH_WINDOW_MS,
    ).toISOString();
    const employmentType = EMPLOYMENT_TYPE_MAP[job.type] ?? "FULL_TIME";
    const description = blocksToPlainText(job.description) || job.title;
    const baseSalary = parseSalary(job.salary);
    const locationFields = buildJobLocationFields(job.location);

    const posting: JsonLd = {
        "@type": "JobPosting",
        "@id": `https://www.testriq.com/careers#${job.slug || `job-${job.id}`}`,
        title: job.title,
        description,
        datePosted,
        validThrough,
        employmentType,
        hiringOrganization: HIRING_ORGANIZATION,
        identifier: {
            "@type": "PropertyValue",
            name: "Testriq",
            value: job.slug || `JOB-${String(job.id).padStart(3, "0")}`,
        },
        // We don't expose a direct ATS link; applicants apply via the on-page form.
        // Setting directApply: false signals to Google "this listing requires a
        // multi-step apply flow on our site" rather than a 1-click apply.
        directApply: false,
        ...locationFields,
        ...(baseSalary ? { baseSalary } : {}),
        ...(job.skills?.length ? { skills: job.skills.join(", ") } : {}),
        ...(job.experience ? { experienceRequirements: job.experience } : {}),
        ...(job.department ? { occupationalCategory: job.department } : {}),
    };
    return posting;
}

/**
 * Build the full `@graph` for the /careers page from live Sanity job
 * openings. Replaces the static `careersPageSchema` export — see F-40
 * in docs/seo-audit/fix-backlog.md for context.
 */
export function buildCareersPageSchema(jobs: SanityJobOpening[]): JsonLd {
    const description = jobs.length
        ? `Join Testriq's global team. Currently hiring for ${jobs.length} role${jobs.length === 1 ? "" : "s"} including QA, automation, and testing positions.`
        : "Join Testriq's global team. Software testing, QA automation, and quality engineering careers — explore current openings.";

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.testriq.com/careers/#webpage",
                url: "https://www.testriq.com/careers",
                name: "Careers in Software Testing & QA Automation | Testriq",
                description,
                isPartOf: {
                    "@type": "WebSite",
                    "@id": "https://www.testriq.com/#website",
                    url: "https://www.testriq.com",
                    name: "Testriq QA Lab",
                },
                breadcrumb: {
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.testriq.com" },
                        { "@type": "ListItem", position: 2, name: "Careers" },
                    ],
                },
            },
            ...jobs.map(buildJobPosting),
        ],
    };
}
