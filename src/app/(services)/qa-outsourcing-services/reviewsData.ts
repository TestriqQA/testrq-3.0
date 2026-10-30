/**
 * Third-party client reviews for the QA Outsourcing Services page.
 *
 * Two separate things live here, and they must not be conflated:
 *
 *  - `reviewPlatforms` — the rating each platform publishes on its own profile.
 *  - `qaOutsourcingReviews` — the individual reviews transcribed for display.
 *
 * NONE of this is marked up as structured data. Every review below was
 * collected by Clutch or G2, not by this site, and Google's review-snippet
 * policy lets a site mark up only the reviews it collects itself. The page's
 * AggregateRating and Review markup were removed on 2026-10-29 for that reason
 * (see the note in page.tsx) — this file now feeds visible content only.
 *
 * Every review here is a REAL, published review. Ratings and quotes are
 * transcribed from the platforms — nothing is invented. The one GoodFirms
 * review was excluded because GoodFirms marked it "Unable to verify the
 * reviewer" (rejected), so it is not a valid, published review.
 *
 * Clutch per-review rating = the simple average of Clutch's four sub-scores
 * (Quality / Schedule / Cost / Willing to Refer), rounded to one decimal.
 */

export interface ClientReview {
    /** Short headline quote, shown prominently and used as the review title. */
    quote: string;
    /** One- to two-sentence summary of the engagement/outcome (visible + schema reviewBody). */
    body: string;
    /** Reviewer name where named; otherwise the role (Clutch reviews are mostly anonymous). */
    authorName: string;
    /** Role / company / location line shown under the name. */
    authorTitle: string;
    /** Overall rating out of 5, one decimal. */
    rating: number;
    /** ISO date the review was published. */
    date: string;
    /** Platform the review lives on. */
    source: "Clutch" | "G2";
    /** Link to the source profile (optional). */
    sourceUrl?: string;
}

const CLUTCH_PROFILE = "https://clutch.co/profile/testriq-qa-lab";

export const qaOutsourcingReviews: ClientReview[] = [
    {
        quote: "Their team was proactive and highly professional, identifying early-stage bugs that saved development time.",
        body: "Testriq QA Lab tested our software with the latest tools and provided detailed testing reports. The team was proactive and highly professional, catching early-stage bugs that saved development time and improved product quality.",
        authorName: "Shivavrata Anand",
        authorTitle: "Director, Geniesoftsystem Pvt Ltd — Mumbai, India",
        rating: 5.0,
        date: "2025-11-24",
        source: "Clutch",
        sourceUrl: CLUTCH_PROFILE,
    },
    {
        quote: "Testriq QA Lab was reliable and consistent.",
        body: "Testriq provided regression, functional, and exploratory testing for a visual software company — validating user stories, identifying bugs, and confirming fixes. The result was successful releases with no regressions found by end customers.",
        authorName: "Head of QA",
        authorTitle: "Visual Software Company — Australia",
        rating: 5.0,
        date: "2025-08-12",
        source: "Clutch",
        sourceUrl: CLUTCH_PROFILE,
    },
    {
        quote: "Testriq QA Lab's project management was impressive.",
        body: "Testriq delivered end-to-end AI, automation, manual, functional, and scalability testing for a consumer products company, shipping a bug-free application with weekly updates and detailed documentation.",
        authorName: "CEO",
        authorTitle: "Consumer Products & Services Company — Bengaluru, India",
        rating: 4.9,
        date: "2025-12-08",
        source: "Clutch",
        sourceUrl: CLUTCH_PROFILE,
    },
    {
        quote: "They were reliable.",
        body: "Testriq tested multiple modules of an automotive web app across 106 real devices, logging and recording multiple errors on time. The team was detail-oriented and communicated clearly throughout.",
        authorName: "Program Manager",
        authorTitle: "Automotive Company — Mumbai, India",
        rating: 4.9,
        date: "2025-04-11",
        source: "Clutch",
        sourceUrl: CLUTCH_PROFILE,
    },
    {
        quote: "Testriq QA Lab's communication was impressive.",
        body: "Testriq tested the complete upload, parsing, AI-processing, and results workflow of an AI career-coaching web app, including PDF validation. The team logged issues in the bug tracker and improved UI-to-backend error handling.",
        authorName: "Founder",
        authorTitle: "AI Career Coaching Company — Portugal",
        rating: 4.8,
        date: "2026-02-25",
        source: "Clutch",
        sourceUrl: CLUTCH_PROFILE,
    },
    {
        quote: "What impressed me most was how easy they were to communicate with.",
        body: "Testriq created test cases and ran functional, UI/UX, integration, and regression testing for an endurance-sports management company, reporting defects and giving complete visibility into system quality.",
        authorName: "Technology Manager",
        authorTitle: "Endurance Sports Management Company — Mumbai, India",
        rating: 4.3,
        date: "2025-11-24",
        source: "Clutch",
        sourceUrl: CLUTCH_PROFILE,
    },
    {
        quote: "Best Team, Best Experience.",
        body: "Best team and great communication — professional and rapid turnaround. They ran smoke testing for my web app and everything went well.",
        authorName: "Kavian N.",
        authorTitle: "Technical Consulting Engineer, Small-Business",
        rating: 5.0,
        date: "2026-02-25",
        source: "G2",
    },
    {
        quote: "Professional and Reliable Testing Services.",
        body: "Highly recommended for testing services — helpful and highly professional. They consistently met all deadlines, provided proper reporting, delivered a quality product, and kept good communication with developers.",
        authorName: "Sushma P.",
        authorTitle: "Mid-Market (51–1000 employees)",
        rating: 4.0,
        date: "2026-05-12",
        source: "G2",
    },
];

/** A rating summary as one platform publishes it on its own profile. */
export interface ReviewPlatform {
    /** Platform name, shown as the label. */
    name: string;
    /** Score out of 5, exactly as the platform states it. */
    rating: string;
    /** How many reviews that score covers, on the platform. */
    count: number;
    /**
     * Wording for the count. Only Clutch verifies reviewers, so only Clutch
     * gets "verified reviews" — the other two say plain "reviews".
     */
    countLabel: string;
    /** The public profile a visitor can check the score against. */
    profileUrl: string;
}

/**
 * The three platform scores, shown as three separate figures.
 *
 * These are the totals the platforms themselves publish — NOT an average of
 * the reviews transcribed above, and NOT to be derived from them. Clutch
 * publishes 8 where six are transcribed here, and the Google score covers 41
 * reviews of which none are. A single blended number replaced all three until
 * 2026-10-29; it stated a figure no platform publishes, and attributed a
 * Google-sourced score to "Clutch and G2". Keep them apart and attributed.
 *
 * Last checked against the live profiles: 2026-10-29. These move, so re-check
 * when the page is next reviewed rather than assuming they still hold.
 */
export const reviewPlatforms: ReviewPlatform[] = [
    {
        name: "Clutch",
        rating: "4.8",
        count: 8,
        countLabel: "verified reviews",
        profileUrl: CLUTCH_PROFILE,
    },
    {
        name: "G2",
        rating: "4.8",
        count: 4,
        countLabel: "reviews",
        profileUrl: "https://www.g2.com/products/testriq-qa-lab/reviews",
    },
    {
        name: "Google",
        rating: "4.7",
        count: 41,
        countLabel: "reviews",
        profileUrl: "https://share.google/dziTNVkbsB2FYdYLm",
    },
];

/**
 * Look up one platform by name, throwing rather than returning undefined.
 *
 * The city landing pages state these figures in prose, so a renamed or deleted
 * entry has to fail the build rather than render "undefined reviews on Clutch"
 * onto a page meant to prove we are checkable.
 */
export function platform(name: string): ReviewPlatform {
    const found = reviewPlatforms.find((p) => p.name === name);
    if (!found) {
        throw new Error(`reviewPlatforms has no "${name}" entry`);
    }
    return found;
}

/**
 * Spell a review count for prose — "eight reviews", not "8 reviews" — falling
 * back to the numeral above nine.
 *
 * Lives here beside the figures rather than in each section, so the pages that
 * quote them cannot word the same number two different ways.
 */
const SPELLED = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
export const spellCount = (n: number): string => SPELLED[n] ?? String(n);
