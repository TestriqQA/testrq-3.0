import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Single source for the /manual-testing-services accordion AND the page's
 * FAQPage JSON-LD.
 *
 * Why this file exists
 * --------------------
 * Until 2026-11-04 these answers lived in two hand-maintained copies: a JSX
 * array inside ManualTestingFAQs.tsx and a plain-text array called
 * `faqsForSchema` inside page.tsx. They had already drifted. The accordion
 * read "This international standard provides a structured, risk-based
 * framework. **This standard ensures** manual testing is never ad-hoc" while
 * the markup fed to Google read "**It ensures** manual testing is never
 * ad-hoc".
 *
 * Nobody reported it, because neither copy is wrong on its own — you only see
 * it with both open side by side. That is the whole problem with a mirror: it
 * fails silently and it fails in the direction Google cares about, since
 * FAQPage markup is supposed to match what the visitor actually reads. The
 * same fix was applied to /usability-testing-services the same week, where the
 * drift had produced a visible typo ("critical point points").
 *
 * The shape
 * ---------
 * `answer` is plain text and is the authoritative copy — it is what goes into
 * the JSON-LD. `answerJsx` is optional and exists only so an answer can carry
 * internal links, which three of these do and which are worth keeping.
 *
 * RULE: `answerJsx` must be the same prose as `answer`, with links added and
 * nothing else changed. Both sit in one entry, a line apart, so a reviewer can
 * see at a glance whether that holds — which was impossible when they lived in
 * different files. If you only change one of them, you have reintroduced the
 * bug this file was written to remove.
 *
 * Add questions here, not in the component or the page.
 */
export interface ManualTestingFaq {
    question: string;
    /** Plain text. The authoritative copy, and the text used in JSON-LD. */
    answer: string;
    /** Optional: the same prose as `answer`, with internal links added. */
    answerJsx?: ReactNode;
}

export const manualTestingFaqs: ManualTestingFaq[] = [
    // ---- The five original questions, preserved ----
    //
    // Kept rather than replaced: they are real content that ranks, and the
    // brief's own instruction is not to remove existing SEO content without
    // evaluating it. The wording below is the ACCORDION's version, which is
    // the one visitors have been reading; where the two copies disagreed, the
    // visible one wins.
    {
        question: "Why is manual testing still important in 2026?",
        answer:
            "AI is rising, but manual testing remains vital. It handles exploratory work and complex logic. This is where 'human-in-the-loop' intuition is vital for finding what scripts miss. It fills the coverage gaps that automation cannot reach in complex micro-services architectures.",
        answerJsx: (
            <>
                AI is rising, but{" "}
                <Link
                    href="/blog/post/the-future-of-manual-testing-adapting-in-an-automated-world"
                    className="text-brand-blue underline"
                >
                    manual testing
                </Link>{" "}
                remains vital. It handles exploratory work and complex logic. This is where
                &apos;human-in-the-loop&apos; intuition is vital for finding what scripts miss. It
                fills the coverage gaps that{" "}
                <Link href="/automation-testing-services" className="text-brand-blue underline">
                    automation
                </Link>{" "}
                cannot reach in complex micro-services architectures.
            </>
        ),
    },
    {
        question: "How does ISO/IEC/IEEE 29119 improve manual testing?",
        answer:
            "This international standard provides a structured, risk-based framework. This standard ensures manual testing is never ad-hoc. It follows a repeatable process for planning, design, and reporting. This approach increases visibility for stakeholders and makes your software more reliable.",
    },
    {
        question: "Can manual testing fit into a CI/CD pipeline?",
        answer:
            "Yes. We use the ISO 29119-2 standard to create repeatable test processes. This allows us to sync manual regression with your fast release cycles. You get high-quality results without losing speed.",
    },
    {
        question: "What is the cost of outsourcing manual testing?",
        answer:
            "Outsourcing manual testing is more cost-effective than building an in-house team. It removes the extra costs of tool licensing and specialized training. Plus, it makes it easier to scale during busy development periods.",
    },
    {
        question: "Does Testriq provide manual testing for mobile apps?",
        answer:
            "Yes, we offer manual testing for both iOS and Android. We use real devices from our global farm to ensure your app works across all OS versions and screen sizes.",
        answerJsx: (
            <>
                Yes, we offer{" "}
                <Link href="/mobile-application-testing" className="text-brand-blue underline">
                    manual testing for both iOS and Android
                </Link>
                . We use real devices from our global farm to ensure your app works across all OS
                versions and screen sizes.
            </>
        ),
    },

    // ---- Added 2026-11-04: buyer questions ----
    //
    // The five above answer "what is manual testing and why" — reasonable
    // questions, but they are the ones a student asks. These seven are the
    // ones a CTO or QA Director asks before sending an enquiry: can you work
    // with my team, in my sprints, on my stack, and what do I get back.
    //
    // Every answer is held to what this codebase can evidence. Specifically
    // there are NO claims here about price, turnaround, availability, team
    // size on a given project, or anything resembling an SLA, because none of
    // those is published anywhere we could check them against. Where the
    // honest answer is "it depends on your setup", that is what it says.
    {
        question: "What do your manual testing services include?",
        answer:
            "Functional, regression, exploratory, usability, compatibility and cross-browser, user acceptance, web application, mobile application and accessibility testing. Most engagements combine several of these rather than buying one in isolation — a release candidate typically needs functional and regression work together, with exploratory testing to catch what neither covers.",
        answerJsx: (
            <>
                <Link href="/functional-testing-services" className="text-brand-blue underline">
                    Functional
                </Link>
                ,{" "}
                <Link href="/regression-testing" className="text-brand-blue underline">
                    regression
                </Link>
                ,{" "}
                <Link href="/exploratory-testing" className="text-brand-blue underline">
                    exploratory
                </Link>
                ,{" "}
                <Link href="/usability-testing-services" className="text-brand-blue underline">
                    usability
                </Link>
                ,{" "}
                <Link href="/compatibility-testing-services" className="text-brand-blue underline">
                    compatibility and cross-browser
                </Link>
                ,{" "}
                <Link href="/user-acceptance-testing" className="text-brand-blue underline">
                    user acceptance
                </Link>
                ,{" "}
                <Link href="/web-application-testing-services" className="text-brand-blue underline">
                    web application
                </Link>
                ,{" "}
                <Link href="/mobile-application-testing" className="text-brand-blue underline">
                    mobile application
                </Link>{" "}
                and{" "}
                <Link href="/accessibility-testing-services" className="text-brand-blue underline">
                    accessibility
                </Link>{" "}
                testing. Most engagements combine several of these rather than buying one in
                isolation — a release candidate typically needs functional and regression work
                together, with exploratory testing to catch what neither covers.
            </>
        ),
    },
    {
        question: "Can Testriq work with international software development teams?",
        answer:
            "Yes. Testriq operates from India and delivers to international clients remotely, which is how the majority of our engagements run. Working hours are arranged to give your team a usable overlap window for stand-ups, handovers and release sign-off rather than expecting you to adjust. Our published client reviews come from teams in India, Portugal and Australia.",
    },
    {
        question: "How does remote manual QA testing work in practice?",
        answer:
            "We start by reading your requirements, user stories or existing test assets, then agree what the first cycle covers. From there our engineers work in your tracker and your sprint rhythm: executing test cases, filing defects with reproduction steps and evidence, retesting fixes, and sending a QA status report each cycle plus a release-readiness summary before you ship. Access to your environments is arranged on your terms, under your own controls.",
    },
    {
        question: "Can you provide a dedicated manual QA testing team?",
        answer:
            "Yes. A dedicated team suits products with continuous releases, where context about the application is worth retaining between cycles. We also offer QA staff augmentation when you want to extend an existing in-house team instead, and project-based or on-demand testing for a single release or audit. Which one fits depends on your release frequency and how much QA capacity you already have.",
        answerJsx: (
            <>
                Yes. A{" "}
                <Link href="/dedicated-qa-team" className="text-brand-blue underline">
                    dedicated team
                </Link>{" "}
                suits products with continuous releases, where context about the application is
                worth retaining between cycles. We also offer{" "}
                <Link href="/qa-outsourcing-services" className="text-brand-blue underline">
                    QA staff augmentation
                </Link>{" "}
                when you want to extend an existing in-house team instead, and{" "}
                <Link href="/qa-engineer-on-demand" className="text-brand-blue underline">
                    project-based or on-demand testing
                </Link>{" "}
                for a single release or audit. Which one fits depends on your release frequency and
                how much QA capacity you already have.
            </>
        ),
    },
    {
        question: "Can your QA engineers work within our Agile sprint cycles?",
        answer:
            "Yes. Our engineers join sprint ceremonies, pick up stories as they become testable rather than waiting for a release freeze, and report defects inside the sprint so they can be fixed before it closes. Regression scope is agreed per sprint so the cycle does not grow without anyone noticing.",
    },
    {
        question: "How do you report and prioritise defects?",
        answer:
            "Defects are filed in your tracker, not ours, so your developers see them where they already work. Each one carries reproduction steps, the environment and build it was found on, expected and actual behaviour, and evidence such as a screenshot or recording. Severity describes the technical impact and priority describes the business urgency — they are recorded separately, because the two frequently disagree and collapsing them into one field is how genuinely blocking defects end up queued behind cosmetic ones.",
    },
    {
        question: "Can manual testing complement our existing automation framework?",
        answer:
            "That is usually the most effective arrangement. Automation is strongest on stable, repetitive checks that must run on every build; manual testing is strongest on new features, complex business logic, usability and the exploratory work that finds defects nobody wrote a case for. We work alongside an existing framework rather than asking you to replace it, and we can identify which of our manual cases are worth automating next.",
        answerJsx: (
            <>
                That is usually the most effective arrangement.{" "}
                <Link href="/automation-testing-services" className="text-brand-blue underline">
                    Automation
                </Link>{" "}
                is strongest on stable, repetitive checks that must run on every build; manual
                testing is strongest on new features, complex business logic, usability and the
                exploratory work that finds defects nobody wrote a case for. We work alongside an
                existing framework rather than asking you to replace it, and we can identify which
                of our manual cases are worth automating next.
            </>
        ),
    },
];

/**
 * Plain-text pairs for `createFaqPageNode`. Drops `answerJsx` and keeps the
 * authoritative `answer` string, so the markup always carries the same prose
 * the accordion shows.
 */
export const manualTestingFaqsForSchema = manualTestingFaqs.map(({ question, answer }) => ({
    question,
    answer,
}));
