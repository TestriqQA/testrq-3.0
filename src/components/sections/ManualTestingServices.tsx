// Server Component.
//
// Added 2026-11-04. /manual-testing-services had no list of manual testing
// services on it.
//
// That sounds implausible, so to be precise: the section that looked like one,
// ManualTestingComprehensiveSlider, is five cards about industry conditions —
// "Bridging the Automation-AI Gap", "Managing Exploding System Complexity",
// "Upskilling for Hybrid QA Roles". Useful commentary, but a buyer reading it
// cannot tell whether we run user acceptance testing. Meanwhile the page's
// `hasOfferCatalog` told Google we offered Exploratory, UAT, WCAG and
// Localization testing — four claims with nothing visible behind them, which
// is the exact mismatch Google's structured-data policy prohibits.
//
// So this section is the visible half that was missing, and the catalog in
// src/components/seo/schemas/services.ts now mirrors THIS list, in this order.
// Change both together.
//
// Each entry answers the three things a buyer actually needs — what it covers,
// why it matters, and what they get back — rather than defining the term.
// "Regression testing re-runs existing tests to confirm new changes have not
// broken working features" is a textbook sentence that helps nobody evaluating
// a vendor, and the brief rules it out explicitly.
//
// Every `href` is a route that exists under src/app/(services) or src/app and
// is NOT a redirect source. Two near-misses worth recording: /functional-testing
// redirects here (to this very page), so functional testing links to
// /functional-testing-services; and cross-browser testing has no route of its
// own, so it is folded into compatibility testing rather than pointed at a
// guess. There is no integration-testing route, which is why integration work
// is described inside the API-adjacent entries instead of being invented as a
// tenth card.
import Link from "next/link";
import React from "react";
import {
    FaCheckDouble,
    FaHistory,
    FaCompass,
    FaUserCheck,
    FaDesktop,
    FaClipboardCheck,
    FaGlobe,
    FaMobileAlt,
    FaUniversalAccess,
} from "react-icons/fa";

interface ManualService {
    name: string;
    href: string;
    icon: React.ReactNode;
    /** What the work actually consists of. */
    covers: string;
    /** Why a product team pays for it — the risk it removes. */
    matters: string;
    /** What lands in the client's hands. */
    delivers: string;
}

export const MANUAL_TESTING_SERVICES: ManualService[] = [
    {
        name: "Functional Testing",
        href: "/functional-testing-services",
        icon: <FaCheckDouble aria-hidden="true" />,
        covers:
            "Every user-facing behaviour checked against the requirement or story it came from, including the validation rules, permissions and error states that specifications tend to leave implicit.",
        matters:
            "Defects here are the ones users hit on day one. They are also the cheapest to fix before a release rather than after support has logged them.",
        delivers:
            "Test cases traceable to your requirements, executed results per build, and defects filed with the reproduction steps a developer needs.",
    },
    {
        name: "Regression Testing",
        href: "/regression-testing",
        icon: <FaHistory aria-hidden="true" />,
        covers:
            "A maintained suite covering the journeys that must keep working, re-run against each release candidate — with scope agreed per cycle rather than growing indefinitely.",
        matters:
            "The feature most likely to break is the one nobody changed. On a product shipping every sprint, regression is the work that stops old bugs returning while the team's attention is on new code.",
        delivers:
            "A versioned regression pack, per-cycle execution results, and a clear statement of what was and was not covered.",
    },
    {
        name: "Exploratory Testing",
        href: "/exploratory-testing",
        icon: <FaCompass aria-hidden="true" />,
        covers:
            "Time-boxed, charter-driven investigation by an engineer using the product as a demanding user would — probing the combinations and sequences no written case anticipated.",
        matters:
            "Scripted tests only find what someone already thought to ask. Exploratory sessions are where the awkward defects surface: the ones involving timing, unusual input, or two features interacting.",
        delivers:
            "Session notes recording what was explored and what was found, so the coverage is auditable rather than anecdotal.",
    },
    {
        name: "Usability Testing",
        href: "/usability-testing-services",
        icon: <FaUserCheck aria-hidden="true" />,
        covers:
            "Review of real task flows for friction, dead ends, unclear labelling and the points where users hesitate or give up.",
        matters:
            "A feature can pass every functional test and still lose users. Usability problems rarely appear in a defect tracker because nothing is technically broken.",
        delivers:
            "Prioritised findings tied to specific screens and tasks, separating what blocks a user from what merely annoys them.",
    },
    {
        name: "Compatibility & Cross-Browser Testing",
        href: "/compatibility-testing-services",
        icon: <FaDesktop aria-hidden="true" />,
        covers:
            "Verification across the browsers, operating systems, devices and screen sizes your own analytics show your users on — not an arbitrary matrix.",
        matters:
            "Rendering and behaviour still diverge between engines and versions. A layout that collapses on one browser quietly excludes that share of your traffic.",
        delivers:
            "An agreed coverage matrix and defects recorded against the specific browser, version and viewport they occur on.",
    },
    {
        name: "User Acceptance Testing",
        href: "/user-acceptance-testing",
        icon: <FaClipboardCheck aria-hidden="true" />,
        covers:
            "Structured validation that the delivered software does the job the business asked for, run as a coordinated cycle with defined entry and exit criteria.",
        matters:
            "UAT is where a requirement that was misread gets caught. Run informally, it becomes a scramble of email and spreadsheets days before a launch.",
        delivers:
            "A UAT plan, coordination of the cycle, consolidated results, and a defensible sign-off position before release.",
    },
    {
        name: "Web Application Testing",
        href: "/web-application-testing-services",
        icon: <FaGlobe aria-hidden="true" />,
        covers:
            "End-to-end testing of web products — authentication, roles and permissions, forms and data handling, session behaviour, and the integration points where services meet.",
        matters:
            "Most defects that reach production live at a boundary: between two services, between the front end and an API, or between a user's state and what the application assumed.",
        delivers:
            "Coverage mapped to your application's actual architecture, with defects reported against the layer responsible.",
    },
    {
        name: "Mobile Application Testing",
        href: "/mobile-application-testing",
        icon: <FaMobileAlt aria-hidden="true" />,
        covers:
            "iOS and Android testing on real devices: installation and upgrade paths, permissions, interruptions, offline and poor-network behaviour, and rendering across OS versions and screen sizes.",
        matters:
            "Mobile defects are expensive to correct, because a fix has to clear app-store review before a single user receives it.",
        delivers:
            "Results per device and OS version, with the defects that block a store submission identified as such.",
    },
    {
        name: "Accessibility Testing",
        href: "/accessibility-testing-services",
        icon: <FaUniversalAccess aria-hidden="true" />,
        covers:
            "Manual review against WCAG success criteria — keyboard operation, focus order, screen-reader output, contrast and form labelling — alongside automated checks.",
        matters:
            "Automated tools flag only a minority of accessibility barriers. Keyboard traps and a control that reads as an unlabelled button need a person to find them.",
        delivers:
            "Findings referenced to the specific WCAG criterion, with the remediation each one requires.",
    },
];

const ManualTestingServices: React.FC = () => {
    return (
        <section
            aria-labelledby="manual-testing-services-heading"
            className="bg-white py-16 px-8 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-12">
                    <h2
                        id="manual-testing-services-heading"
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
                    >
                        Our Manual Software{" "}
                        <span className="text-brand-blue">Testing Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Most engagements combine several of these rather than buying one in
                        isolation. A release candidate typically needs functional and regression
                        work together, with exploratory testing to catch what neither anticipated.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MANUAL_TESTING_SERVICES.map((service) => (
                        <article
                            key={service.href}
                            className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-lg text-brand-blue">
                                    {service.icon}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                                    {service.name}
                                </h3>
                            </div>

                            <dl className="flex flex-grow flex-col gap-3 text-sm leading-relaxed text-gray-600">
                                <div>
                                    <dt className="font-semibold text-gray-900">What it covers</dt>
                                    <dd>{service.covers}</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-gray-900">Why it matters</dt>
                                    <dd>{service.matters}</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold text-gray-900">What you get</dt>
                                    <dd>{service.delivers}</dd>
                                </div>
                            </dl>

                            <Link
                                href={service.href}
                                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                            >
                                {service.name} in detail
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManualTestingServices;
