/**
 * The usability-testing FAQ, in one place.
 *
 * Created 2026-11-04 because there were two copies of this list and they had
 * already drifted: `UsabilityTestingFAQs.tsx` rendered "critical point points"
 * where the page's `faqsForSchema` said "critical pain points", so the visible
 * answer and the FAQPage markup disagreed on the same sentence. The typo is
 * fixed here once; nothing else in the original four was reworded.
 *
 * Both consumers now read this array:
 *   - src/components/sections/UsabilityTestingFAQs.tsx  (the visible accordion)
 *   - src/app/(services)/usability-testing-services/page.tsx  (FAQPage JSON-LD)
 *
 * This is the pattern the sibling pages already use via <FaqJsonLd>; that
 * component cannot be used here because this page builds its FAQPage schema at
 * the page level with createFaqPageSchema. A plain data module works for both,
 * and keeps the array out of the "use client" boundary so the server page can
 * import it directly.
 *
 * Add questions here and they appear in the accordion and the markup together.
 */

export interface UsabilityFaq {
    question: string;
    answer: string;
}

export const usabilityTestingFaqs: UsabilityFaq[] = [
    {
        question: "What are the benefits of professional usability testing services?",
        answer: "Professional usability testing services significantly enhance user satisfaction, reduce development costs by identifying issues early, improve conversion rates, and strengthen brand loyalty. It ensures your product is intuitive, efficient, and enjoyable for its target audience.",
    },
    {
        question: "How much does a usability audit cost for a mobile app?",
        answer: "The cost is customized based on scope and complexity. Testriq offers tailored quotes following an initial ROI-focused consultation to ensure you get the most value for your specific mobile platform needs.",
    },
    {
        question: "Why is usability testing important for software development?",
        answer: "It validates design decisions through real-user eyes, uncovering critical pain points that developers might miss. This leads to minimized rework, faster market adoption, and ultimately higher business success.",
    },
    {
        question: "How to choose the best usability testing company?",
        answer: "Look for a combination of ISTQB certified expertise, global reach, and a methodology that integrates AI-driven insights. Testriq combines 15+ years of experience with predictive analytics to deliver unparalleled UX value.",
    },
    // Added 2026-11-04. The four above are about buying the service; these four
    // are about the method, which is what a product team weighing one up asks.
    {
        question: "How many participants does a usability test need?",
        answer: "Around five participants per distinct user group surfaces the large majority of usability problems in a round, which is why qualitative testing favours several small rounds over one large one — each round fixes issues and then re-tests. Quantitative work is different: benchmarking task success rates, or comparing two designs with statistical confidence, needs considerably more, typically several dozen per variant.",
    },
    {
        question: "What is the difference between moderated and unmoderated usability testing?",
        answer: "In a moderated session a researcher is present and can ask why a participant hesitated, which surfaces reasoning that behaviour alone never shows. Unmoderated tests run on the participant's own schedule and scale to more people in more places for less cost, but you see what happened without being able to ask about it. Most programmes use both, for different questions.",
    },
    {
        question: "Is usability testing the same as accessibility testing?",
        answer: "No. Usability testing asks whether people can accomplish their goals easily; accessibility testing asks whether people with disabilities can use the product at all, measured against a standard such as WCAG. The two overlap, since an interface that defeats assistive technology usually frustrates everyone else as well, but passing one does not establish the other — they need different participants and different methods.",
    },
    {
        question: "What do you get at the end of a usability audit?",
        answer: "Typically a findings report with each issue rated by severity and supported by evidence from the sessions, annotated screens or recordings showing where participants struggled, and recommendations ordered so the highest-impact fixes are obvious. The deliverable a product team can actually use is a prioritised list of specific problems, not a single usability score.",
    },
];
