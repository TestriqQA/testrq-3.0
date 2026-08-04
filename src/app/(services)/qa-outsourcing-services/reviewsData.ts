/**
 * Verified third-party client reviews for the QA Outsourcing Services page.
 *
 * COMPLIANCE (Google Review-snippet guidelines):
 *  - Every review here is a REAL, verified review published on Clutch or G2.
 *    Ratings and quotes are transcribed from those platforms — nothing is
 *    invented. The one GoodFirms review was excluded because GoodFirms marked
 *    it "Unable to verify the reviewer" (rejected), so it is not a valid,
 *    published review.
 *  - These same reviews are rendered on-page by <QAOutsourcingReviews>, and the
 *    AggregateRating below is computed from exactly this displayed set. Markup
 *    must reflect visible content, so schema and section share this one source.
 *  - The AggregateRating is attached to the page's `Service` entity (see
 *    page.tsx), NOT to Organization/LocalBusiness — self-serving ratings on
 *    those types are not eligible for rich results.
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

/** AggregateRating computed from exactly the displayed reviews above. */
export const qaOutsourcingRating = {
    value: (
        qaOutsourcingReviews.reduce((sum, r) => sum + r.rating, 0) /
        qaOutsourcingReviews.length
    ).toFixed(1),
    count: qaOutsourcingReviews.length,
    best: 5,
    worst: 1,
};
