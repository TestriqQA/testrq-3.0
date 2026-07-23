import React from "react";

/**
 * Emits FAQPage JSON-LD for a list of question/answer pairs.
 *
 * WHY THIS EXISTS
 * The 7 industry/solution pages (e-commerce, healthcare, gaming, banking,
 * e-learning, IoT appliances, telecom) each render a visible FAQ accordion but
 * shipped no FAQPage structured data — so they were ineligible for the FAQ
 * rich result in search. This component marks up the SAME data the accordion
 * renders, keeping schema and visible content in lockstep (a Google
 * requirement — markup must reflect what the user sees).
 *
 * Robustness: question/answer values in these components are not all plain
 * strings. Some are React elements (e.g. a <Link> wrapping the question text),
 * and the "nested" components group items under `faqCategories[].faqs`. Callers
 * flatten as needed; `toText` here recursively extracts the visible string from
 * any ReactNode so a JSX question never serialises to "[object Object]".
 */

type FAQItem = { question: React.ReactNode; answer: React.ReactNode };

/** Recursively pull the plain visible text out of any ReactNode. */
function toText(node: React.ReactNode): string {
    if (node === null || node === undefined || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(toText).join("");
    if (React.isValidElement(node)) {
        return toText((node.props as { children?: React.ReactNode }).children);
    }
    return "";
}

export default function FAQSchema({ faqs }: { faqs: ReadonlyArray<FAQItem> }) {
    const cleaned = (faqs ?? [])
        .map((f) => ({
            question: toText(f.question).replace(/\s+/g, " ").trim(),
            answer: toText(f.answer).replace(/\s+/g, " ").trim(),
        }))
        .filter((f) => f.question && f.answer);

    if (cleaned.length === 0) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: cleaned.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
