import type { Metadata } from "next";
import dynamic from "next/dynamic";
import MainLayout from "@/components/layout/MainLayout";
import StructuredData, {
    createCanonicalBreadcrumbNode,
    createFaqPageNode,
    manualTestingServiceSchema,
} from "@/components/seo/StructuredData";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { manualTestingFaqsForSchema } from "./faqs";

// F-94 — Above-fold Hero stays as a direct import for fast critical-path
// render. The 9 below-fold sections are wrapped in `next/dynamic` so each
// becomes its own async chunk that the client loads on demand (ssr: true
// preserved by default — content stays server-rendered for SEO). This is
// the same code-splitting pattern already used by `/` (Home) and
// `/about-us` (12 + 7 dynamic imports respectively). Net effect: smaller
// initial JS chunk for the route's critical path, then progressive
// chunk-loading as the visitor scrolls.
import ManualTestingHeroSection from "@/components/sections/ManualTestingHeroSection";
import ServiceCrossLinks from "@/components/sections/ServiceCrossLinks";
import ServiceTeamSection from "@/components/sections/ServiceTeamSection";
import ServiceEngagementModels from "@/components/sections/ServiceEngagementModels";
import ServiceLastUpdated from "@/components/sections/ServiceLastUpdated";
import ServiceDirectAnswer from "@/components/sections/ServiceDirectAnswer";
import ServiceCta from "@/components/sections/ServiceCta";

// Added 2026-11-04. Both follow the established pattern for this route:
// below-fold sections go through next/dynamic so each becomes its own async
// chunk, with ssr left at its default so the content is still server-rendered
// and crawlable.
const ManualTestingChallenges = dynamic(
    () => import("@/components/sections/ManualTestingChallenges"),
);
const ManualTestingServices = dynamic(
    () => import("@/components/sections/ManualTestingServices"),
);
const ManualTestingTrustSection = dynamic(
    () => import("@/components/sections/ManualTestingTrustSection"),
);

const ManualTestingComprehensiveSlider = dynamic(
    () => import("@/components/sections/ManualTestingComprehensiveSlider"),
);
const ManualTestingHumanAdvantage = dynamic(
    () => import("@/components/sections/ManualTestingHumanAdvantage"),
);
const ManualTestingProvenTestingProcess = dynamic(
    () => import("@/components/sections/ManualTestingProvenTestingProcess"),
);
const ManualTestingWhyChooseTestriq = dynamic(
    () => import("@/components/sections/ManualTestingWhyChooseTestriq"),
);
const ManualTestingToolsFramework = dynamic(
    () => import("@/components/sections/ManualTestingToolsFramework"),
);
const ManualTestingGlobalReach = dynamic(
    () => import("@/components/sections/ManualTestingGlobalReach"),
);
const ManualTestingCaseStudies = dynamic(
    () => import("@/components/sections/ManualTestingCaseStudies"),
);
const ManualTestingFAQs = dynamic(
    () => import("@/components/sections/ManualTestingFAQs"),
);
const ManualTestingReadyToEnsureQuality = dynamic(
    () => import("@/components/sections/ManualTestingReadyToEnsureQuality"),
);

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
    return buildPageMetadata({
        pathname: "/manual-testing-services",
        // 2026-11-04 — title and description set to the strings specified in
        // the international-SEO brief. The previous pair led on
        // "ISTQB-Certified QA" and "ISO 29119", which are genuine
        // differentiators but speak to someone who already knows what those
        // mean. The replacements lead on the audience and the outcome, which
        // is what an international buyer scans a SERP for; ISTQB survives in
        // the description and both standards are still prominent on the page.
        title: "Manual Testing Services for Global Teams | Testriq",
        description:
            "Expert manual testing services for global businesses. Work with ISTQB-certified QA professionals for functional, regression, exploratory and mobile testing.",
        ogImage: {
            url: "https://www.testriq.com/OG/Manual-Testing-Service-og.webp",
            width: 1200,
            height: 800,
            alt: "Testriq Manual Testing Services by QA Experts",
            type: "image/webp",
        },
        twitterImage: "https://www.testriq.com/OG/Manual-Testing-Service-Twitter.webp",
        keywords: [
            "manual testing services",
            "ISTQB certified QA",
            "ISO 29119 testing",
            "exploratory testing services",
            "managed UAT",
            "manual regression testing",
            "usability audit",
            "wcag accessibility testing",
            "manual mobile app testing",
            "ad-hoc testing",
        ],
    });
}

export default function ManualTestingPage() {
    // TODO(seo phase-2 audit): Pattern D anti-pattern fixed per-page here.
    // PR-3 will fix at breadcrumb component level cascading to 40 pages.
    //
    // Pre-fix this page also exhibited Pattern B (slug typo: og:url declared
    // /manual-testing instead of /manual-testing-services) and Pattern C
    // (the typo'd URL is itself a 301 redirect source in next.config.ts).
    // Both fixed automatically by buildPageMetadata, which derives og:url
    // from the same pathname as canonical. The breadcrumb leaf URL below
    // is also corrected from /manual-testing → /manual-testing-services.
    //
    // F-44.1 (superseded 2026-11-04): this used to hold `faqsForSchema`, a
    // hand-typed plain-text MIRROR of the answers in ManualTestingFAQs.tsx.
    // The two had drifted — the mirror said "It ensures manual testing is
    // never ad-hoc" where the accordion visitors read said "This standard
    // ensures" — so the FAQPage markup and the visible page no longer matched,
    // which is the one thing FAQPage markup must do. Both now read ./faqs.tsx.
    //
    // One combined @graph, replacing three separate <script> blocks.
    //
    // This is not cosmetic. An "@id" reference cannot reach out of the
    // <script> block it is written in, which is why the case-studies page had
    // to DELETE its WebPage → BreadcrumbList pointer (see the F-44.2 note in
    // StructuredData.tsx). With Service, WebPage, BreadcrumbList and FAQPage
    // in one graph, the WebPage node's `breadcrumb` and `mainEntity` pointers
    // resolve against real sibling nodes instead of dangling.
    //
    // Two things verified against the BUILT html for this route rather than
    // assumed, because both would otherwise have been wrong:
    //
    // 1. `provider` points at https://www.testriq.com/#organization, and this
    //    page does not declare that node. Checking the prerendered output
    //    showed nothing on the site declared it either — organizationSchema,
    //    which holds the real address and sameAs list, had no "@id" at all
    //    while 112 pages referenced that identifier. It now carries it (see
    //    StructuredData.tsx), so the reference resolves to the canonical
    //    company record. Referencing by id rather than inlining is the point:
    //    an inline Organization here is exactly what created a second
    //    competing entity before.
    //
    // 2. ServiceLastUpdated emits its own small WebPage node for this URL,
    //    carrying `dateModified`, under the SAME @id as the WebPage below.
    //    That is intended, not a duplicate: nodes sharing an @id merge, and
    //    these two are complementary — this one has the relationships,
    //    that one has the date, and neither sets a property the other
    //    contradicts. Keep it that way. If a `name` or `url` is ever added
    //    there, or changed here, they will start fighting over one entity.
    const pageGraph = {
        "@context": "https://schema.org",
        "@graph": [
            ...manualTestingServiceSchema["@graph"],
            createCanonicalBreadcrumbNode("/manual-testing-services", "Manual Testing"),
            createFaqPageNode(manualTestingFaqsForSchema),
        ],
    };

    return (
        <div>
            <StructuredData data={pageGraph} />
            <MainLayout>
                <ManualTestingHeroSection />
                <ServiceDirectAnswer slug="manual-testing-services" />
                {/* The brief's Sections 2 and 3, in that order: the reader's
                    problem, then what we do about it.

                    Both sit BEFORE the industry-trends slider. The slider is
                    commentary on the testing market, which is worth reading
                    once a buyer knows we understand their situation and what
                    we actually offer — not before. See each component's header
                    for why neither of these slots was filled until now. */}
                <ManualTestingChallenges />
                <ManualTestingServices />
                <ManualTestingComprehensiveSlider />
                <ManualTestingHumanAdvantage />
                <ManualTestingProvenTestingProcess />
                <ManualTestingWhyChooseTestriq />
                <ManualTestingToolsFramework />
                <ManualTestingGlobalReach />
                <ManualTestingCaseStudies />
                {/* The brief's Section 11, placed immediately after the case
                    studies: evidence we published, then evidence we did not.
                    Figures come from reviewsData.ts and no rating is mirrored
                    into the page's JSON-LD — see the component header. */}
                <ManualTestingTrustSection />
                <ServiceTeamSection />
                <ServiceLastUpdated slug="manual-testing-services" />
                <ServiceEngagementModels />
                <ManualTestingFAQs />
                <ManualTestingReadyToEnsureQuality />
            {/* PART 4 / JOB A2 — contextual links to related services that
                had almost no inbound links. In the body, not the footer:
                nav and footer already link these pages ~1,457 times and
                Google discounts boilerplate. Mapping lives in
                src/lib/seo/related-services.ts. */}
            <ServiceCrossLinks serviceSlug="manual-testing-services" />
            <ServiceCta slug="manual-testing-services" />
            </MainLayout>
        </div>
    );
}
